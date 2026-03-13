import { Hono } from "npm:hono";
import { cors } from "npm:hono/cors";
import { logger } from "npm:hono/logger";
import * as kv from "./kv_store.tsx";

type InstagramChildMedia = {
  media_type?: string;
  media_url?: string;
  thumbnail_url?: string;
};

type InstagramMedia = {
  id: string;
  caption?: string;
  media_type?: string;
  media_url?: string;
  permalink?: string;
  thumbnail_url?: string;
  timestamp?: string;
  children?: {
    data?: InstagramChildMedia[];
  };
};

type InstagramFeedItem = {
  id: string;
  imageUrl: string;
  permalink: string;
  caption?: string;
  timestamp?: string;
  mediaType?: string;
};

type CachedInstagramFeed = {
  fetchedAt: string;
  data: InstagramFeedItem[];
};

type GoogleMapsLinks = {
  placeUri?: string;
  reviewsUri?: string;
  writeAReviewUri?: string;
};

type GooglePlaceText = {
  text?: string;
};

type GooglePlaceAttribution = {
  provider?: string;
  providerUri?: string;
};

type GoogleReviewAuthorAttribution = {
  displayName?: string;
  uri?: string;
  photoUri?: string;
};

type GooglePlaceReview = {
  rating?: number;
  relativePublishTimeDescription?: string;
  publishTime?: string;
  text?: GooglePlaceText;
  originalText?: GooglePlaceText;
  authorAttribution?: GoogleReviewAuthorAttribution;
  googleMapsUri?: string;
  flagContentUri?: string;
};

type GooglePlaceDetailsResponse = {
  id?: string;
  displayName?: GooglePlaceText;
  formattedAddress?: string;
  rating?: number;
  userRatingCount?: number;
  googleMapsUri?: string;
  googleMapsLinks?: GoogleMapsLinks;
  attributions?: GooglePlaceAttribution[];
  reviews?: GooglePlaceReview[];
};

type GoogleTextSearchPlace = {
  id?: string;
  displayName?: GooglePlaceText;
  formattedAddress?: string;
};

type GoogleTextSearchResponse = {
  places?: GoogleTextSearchPlace[];
};

type CachedGooglePlaceId = {
  fetchedAt: string;
  placeId: string;
  textQuery: string;
  placeName?: string;
  formattedAddress?: string;
};

type GoogleReviewItem = {
  authorName: string;
  authorUri?: string;
  authorPhotoUri?: string;
  rating: number;
  text: string;
  relativePublishTimeDescription?: string;
  publishTime?: string;
  googleMapsUri?: string;
  flagContentUri?: string;
};

type GoogleReviewsPayload = {
  fetchedAt: string;
  placeId: string;
  placeName: string;
  formattedAddress?: string;
  rating?: number;
  userRatingCount?: number;
  googleMapsUri?: string;
  reviewsUri?: string;
  writeAReviewUri?: string;
  attributions: GooglePlaceAttribution[];
  reviews: GoogleReviewItem[];
};

const app = new Hono();
const INSTAGRAM_CACHE_KEY = "instagram-feed-v1";
const INSTAGRAM_CACHE_TTL_MS = 15 * 60 * 1000;
const GOOGLE_PLACE_ID_CACHE_PREFIX = "google-place-id-v1:";
const DEFAULT_GOOGLE_PLACE_QUERY = "Bostelmann Eventos, Mandirituba - PR";

// Enable logger
app.use('*', logger(console.log));

// Enable CORS for all routes and methods
app.use(
  "/*",
  cors({
    origin: "*",
    allowHeaders: ["Content-Type", "Authorization"],
    allowMethods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    exposeHeaders: ["Content-Length"],
    maxAge: 600,
  }),
);

// Health check endpoint
app.get("/make-server-411ab965/health", (c) => {
  return c.json({ status: "ok" });
});

const isFeedFresh = (feed?: CachedInstagramFeed | null) => {
  if (!feed?.fetchedAt) {
    return false;
  }

  return Date.now() - new Date(feed.fetchedAt).getTime() < INSTAGRAM_CACHE_TTL_MS;
};

const pickBestImage = (media: InstagramMedia) => {
  const children = media.children?.data ?? [];
  const firstChild = children.find((child) => child.media_url || child.thumbnail_url);

  if (media.media_type === "VIDEO") {
    return media.thumbnail_url ?? firstChild?.thumbnail_url ?? media.media_url ?? firstChild?.media_url ?? null;
  }

  if (media.media_type === "CAROUSEL_ALBUM") {
    return media.media_url ?? firstChild?.media_url ?? firstChild?.thumbnail_url ?? media.thumbnail_url ?? null;
  }

  return media.media_url ?? media.thumbnail_url ?? firstChild?.media_url ?? firstChild?.thumbnail_url ?? null;
};

const fetchInstagramFeed = async (): Promise<CachedInstagramFeed> => {
  const accessToken = Deno.env.get("INSTAGRAM_ACCESS_TOKEN");
  if (!accessToken) {
    throw new Error("INSTAGRAM_ACCESS_TOKEN is not configured");
  }

  const url = new URL("https://graph.instagram.com/me/media");
  url.searchParams.set(
    "fields",
    "id,caption,media_type,media_url,permalink,thumbnail_url,timestamp,children{media_type,media_url,thumbnail_url}",
  );
  url.searchParams.set("limit", "6");
  url.searchParams.set("access_token", accessToken);

  const response = await fetch(url.toString());
  if (!response.ok) {
    throw new Error(`Instagram API request failed with status ${response.status}: ${await response.text()}`);
  }

  const payload = await response.json() as { data?: InstagramMedia[] };
  const data = (payload.data ?? [])
    .map((media): InstagramFeedItem | null => {
      const imageUrl = pickBestImage(media);
      if (!imageUrl || !media.permalink) {
        return null;
      }

      return {
        id: media.id,
        imageUrl,
        permalink: media.permalink,
        caption: media.caption,
        timestamp: media.timestamp,
        mediaType: media.media_type,
      };
    })
    .filter((media): media is InstagramFeedItem => Boolean(media));

  return {
    fetchedAt: new Date().toISOString(),
    data,
  };
};

const getGooglePlacesApiKey = () => {
  const apiKey = Deno.env.get("GOOGLE_PLACES_API_KEY");

  if (!apiKey) {
    throw new Error("GOOGLE_PLACES_API_KEY is not configured");
  }

  return apiKey;
};

const normalizeCacheKeyPart = (value: string) =>
  value
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "")
    .slice(0, 120);

const searchGooglePlaceByText = async (
  apiKey: string,
  textQuery: string,
): Promise<CachedGooglePlaceId> => {
  const response = await fetch("https://places.googleapis.com/v1/places:searchText", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Goog-Api-Key": apiKey,
      "X-Goog-FieldMask": "places.id,places.displayName,places.formattedAddress",
    },
    body: JSON.stringify({
      textQuery,
      pageSize: 1,
      languageCode: "pt-BR",
      regionCode: "BR",
    }),
  });

  if (!response.ok) {
    throw new Error(`Google Text Search failed with status ${response.status}: ${await response.text()}`);
  }

  const payload = await response.json() as GoogleTextSearchResponse;
  const place = payload.places?.[0];

  if (!place?.id) {
    throw new Error("No Google place was found for the configured GOOGLE_PLACE_QUERY");
  }

  return {
    fetchedAt: new Date().toISOString(),
    placeId: place.id,
    textQuery,
    placeName: place.displayName?.text,
    formattedAddress: place.formattedAddress,
  };
};

const resolveGooglePlaceId = async (apiKey: string, forceRefresh = false): Promise<CachedGooglePlaceId> => {
  const explicitPlaceId = Deno.env.get("GOOGLE_PLACE_ID")?.trim();

  if (explicitPlaceId) {
    return {
      fetchedAt: new Date().toISOString(),
      placeId: explicitPlaceId,
      textQuery: "",
    };
  }

  const textQuery = Deno.env.get("GOOGLE_PLACE_QUERY")?.trim() || DEFAULT_GOOGLE_PLACE_QUERY;
  const cacheKey = `${GOOGLE_PLACE_ID_CACHE_PREFIX}${normalizeCacheKeyPart(textQuery)}`;

  if (!forceRefresh) {
    const cachedPlaceId = await kv.get(cacheKey) as CachedGooglePlaceId | null;

    if (cachedPlaceId?.placeId) {
      return cachedPlaceId;
    }
  }

  const resolvedPlace = await searchGooglePlaceByText(apiKey, textQuery);
  await kv.set(cacheKey, resolvedPlace);

  return resolvedPlace;
};

const fetchGoogleReviews = async (forceRefreshPlaceId = false): Promise<GoogleReviewsPayload> => {
  const apiKey = getGooglePlacesApiKey();
  const resolvedPlace = await resolveGooglePlaceId(apiKey, forceRefreshPlaceId);

  const url = new URL(`https://places.googleapis.com/v1/places/${resolvedPlace.placeId}`);
  url.searchParams.set("languageCode", "pt-BR");
  url.searchParams.set("regionCode", "BR");

  const response = await fetch(url.toString(), {
    headers: {
      "Content-Type": "application/json",
      "X-Goog-Api-Key": apiKey,
      "X-Goog-FieldMask":
        "id,displayName,formattedAddress,rating,userRatingCount,googleMapsUri,googleMapsLinks.placeUri,googleMapsLinks.reviewsUri,googleMapsLinks.writeAReviewUri,attributions,reviews",
    },
  });

  if (!response.ok) {
    throw new Error(`Google Place Details failed with status ${response.status}: ${await response.text()}`);
  }

  const payload = await response.json() as GooglePlaceDetailsResponse;
  const reviews = (payload.reviews ?? [])
    .map((review): GoogleReviewItem | null => {
      const text = review.text?.text ?? review.originalText?.text ?? "";

      if (!text) {
        return null;
      }

      return {
        authorName: review.authorAttribution?.displayName ?? "Cliente do Google Maps",
        authorUri: review.authorAttribution?.uri,
        authorPhotoUri: review.authorAttribution?.photoUri,
        rating: review.rating ?? 0,
        text,
        relativePublishTimeDescription: review.relativePublishTimeDescription,
        publishTime: review.publishTime,
        googleMapsUri: review.googleMapsUri,
        flagContentUri: review.flagContentUri,
      };
    })
    .filter((review): review is GoogleReviewItem => Boolean(review));

  return {
    fetchedAt: new Date().toISOString(),
    placeId: payload.id ?? resolvedPlace.placeId,
    placeName: payload.displayName?.text ?? resolvedPlace.placeName ?? "Bostelmann Eventos",
    formattedAddress: payload.formattedAddress ?? resolvedPlace.formattedAddress,
    rating: payload.rating,
    userRatingCount: payload.userRatingCount,
    googleMapsUri: payload.googleMapsUri ?? payload.googleMapsLinks?.placeUri,
    reviewsUri: payload.googleMapsLinks?.reviewsUri,
    writeAReviewUri: payload.googleMapsLinks?.writeAReviewUri,
    attributions: payload.attributions ?? [],
    reviews,
  };
};

app.get("/make-server-411ab965/instagram-feed", async (c) => {
  const forceRefresh = c.req.query("refresh") === "1";
  const cachedFeed = await kv.get(INSTAGRAM_CACHE_KEY) as CachedInstagramFeed | null;

  if (!forceRefresh && isFeedFresh(cachedFeed)) {
    return c.json({
      ...cachedFeed,
      cached: true,
    });
  }

  try {
    const liveFeed = await fetchInstagramFeed();
    await kv.set(INSTAGRAM_CACHE_KEY, liveFeed);

    return c.json({
      ...liveFeed,
      cached: false,
    });
  } catch (error) {
    console.error("Instagram feed error:", error);

    if (cachedFeed?.data?.length) {
      return c.json({
        ...cachedFeed,
        cached: true,
        stale: true,
      });
    }

    return c.json(
      {
        error: "instagram_feed_unavailable",
      },
      503,
    );
  }
});

app.get("/make-server-411ab965/google-reviews", async (c) => {
  const forceRefresh = c.req.query("refresh") === "1";

  try {
    const liveReviews = await fetchGoogleReviews(forceRefresh);

    return c.json(liveReviews);
  } catch (error) {
    console.error("Google reviews error:", error);

    return c.json(
      {
        error: "google_reviews_unavailable",
      },
      503,
    );
  }
});

Deno.serve(app.fetch);
