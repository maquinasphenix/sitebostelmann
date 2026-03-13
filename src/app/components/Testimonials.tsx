import { motion } from 'motion/react';
import { ExternalLink, Quote, Star } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { FloralCorner, FloralDivider, DelicateFlower } from './DecorativeElements';

type GooglePlaceAttribution = {
  provider?: string;
  providerUri?: string;
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

type GoogleReviewsResponse = {
  fetchedAt: string;
  placeName: string;
  formattedAddress?: string;
  rating?: number;
  userRatingCount?: number;
  googleMapsUri?: string;
  reviewsUri?: string;
  writeAReviewUri?: string;
  attributions?: GooglePlaceAttribution[];
  reviews?: GoogleReviewItem[];
};

const GOOGLE_REVIEWS_URL = import.meta.env.VITE_GOOGLE_REVIEWS_URL;
const DEFAULT_GOOGLE_MAPS_URL =
  'https://www.google.com/maps/search/?api=1&query=Bostelmann%20Eventos%20Mandirituba%20PR';

function formatReviewDate(relativeDate?: string, publishTime?: string) {
  if (relativeDate) {
    return relativeDate;
  }

  if (!publishTime) {
    return 'Avaliação no Google Maps';
  }

  try {
    return new Intl.DateTimeFormat('pt-BR', {
      day: '2-digit',
      month: 'short',
      year: 'numeric',
    }).format(new Date(publishTime));
  } catch {
    return 'Avaliação no Google Maps';
  }
}

function RatingStars({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: 5 }).map((_, index) => (
        <Star
          key={index}
          className={`w-5 h-5 ${
            index < Math.round(rating) ? 'fill-secondary text-secondary' : 'text-border'
          }`}
        />
      ))}
    </div>
  );
}

function ReviewSkeleton() {
  return <div className="h-[320px] rounded-2xl bg-white/70 animate-pulse border border-border" />;
}

function GoogleMapsAttribution({ attributions }: { attributions: GooglePlaceAttribution[] }) {
  return (
    <div className="flex flex-col items-center gap-2 text-center text-xs text-muted-foreground">
      <p style={{ fontFamily: 'Roboto, Arial, sans-serif' }} translate="no">
        Dados e avaliações do Google Maps
      </p>
      {attributions.length > 0 && (
        <div className="flex flex-wrap items-center justify-center gap-3">
          {attributions.map((attribution, index) => {
            const label = attribution.provider || `Fonte ${index + 1}`;

            if (!attribution.providerUri) {
              return <span key={`${label}-${index}`}>{label}</span>;
            }

            return (
              <a
                key={`${label}-${index}`}
                href={attribution.providerUri}
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-4 hover:text-foreground"
              >
                {label}
              </a>
            );
          })}
        </div>
      )}
    </div>
  );
}

export function Testimonials() {
  const [payload, setPayload] = useState<GoogleReviewsResponse | null>(null);
  const [isLoading, setIsLoading] = useState(Boolean(GOOGLE_REVIEWS_URL));

  useEffect(() => {
    if (!GOOGLE_REVIEWS_URL) {
      setIsLoading(false);
      return;
    }

    const controller = new AbortController();

    const loadReviews = async () => {
      try {
        const response = await fetch(GOOGLE_REVIEWS_URL, {
          signal: controller.signal,
        });

        if (!response.ok) {
          throw new Error(`Google reviews request failed with ${response.status}`);
        }

        const data = (await response.json()) as GoogleReviewsResponse;
        setPayload(data);
      } catch (error) {
        if (controller.signal.aborted) {
          return;
        }

        console.error('Erro ao carregar avaliações do Google:', error);
      } finally {
        if (!controller.signal.aborted) {
          setIsLoading(false);
        }
      }
    };

    loadReviews();

    return () => controller.abort();
  }, []);

  const googleMapsUrl = payload?.reviewsUri || payload?.googleMapsUri || DEFAULT_GOOGLE_MAPS_URL;
  const writeAReviewUrl = payload?.writeAReviewUri || googleMapsUrl;
  const fiveStarReviews = (payload?.reviews ?? []).filter((review) => review.rating === 5);
  const visibleReviews = fiveStarReviews.slice(0, 3);
  const placeName = payload?.placeName || 'Bostelmann Eventos';

  return (
    <section id="avaliacoes" className="py-20 lg:py-32 bg-background relative overflow-hidden">
      <FloralCorner className="top-20 right-10 text-primary" />
      <FloralDivider className="bottom-10 left-10 text-secondary" />
      <DelicateFlower className="top-10 left-20 text-primary" />
      <FloralCorner className="bottom-20 right-20 text-secondary" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-4xl text-foreground mb-4">Avaliações Reais no Google</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Esta seção mostra avaliações publicadas no perfil oficial da chácara no Google Maps.
          </p>

          {payload?.rating && payload?.userRatingCount ? (
            <div className="mt-8 inline-flex flex-col items-center gap-3 rounded-2xl bg-white px-6 py-5 shadow-lg border border-primary/10">
              <RatingStars rating={payload.rating} />
              <p className="text-foreground">
                <span className="text-2xl">{payload.rating.toFixed(1)}</span> de 5 no Google
              </p>
              <p className="text-sm text-muted-foreground">
                {payload.userRatingCount} avaliações em {placeName}
              </p>
              {payload.formattedAddress && (
                <p className="text-xs text-muted-foreground">{payload.formattedAddress}</p>
              )}
            </div>
          ) : null}
        </motion.div>

        <div className="max-w-6xl mx-auto">
          {isLoading ? (
            <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
              {Array.from({ length: 3 }).map((_, index) => (
                <ReviewSkeleton key={index} />
              ))}
            </div>
          ) : visibleReviews.length > 0 ? (
            <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
              {visibleReviews.map((review, index) => (
                <motion.div
                  key={`${review.authorName}-${review.publishTime ?? index}`}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15, duration: 0.5 }}
                >
                  <Card className="p-8 h-full bg-white hover:shadow-xl transition-all duration-300 relative border-2 border-transparent hover:border-primary/20">
                    <div className="absolute top-6 right-6 opacity-10">
                      <Quote className="w-16 h-16 text-primary" />
                    </div>

                    <div className="flex items-start justify-between gap-4 mb-6 relative z-10">
                      <div className="flex items-center gap-3 min-w-0">
                        {review.authorPhotoUri ? (
                          <img
                            src={review.authorPhotoUri}
                            alt={`Foto de ${review.authorName}`}
                            className="w-12 h-12 rounded-full object-cover border border-border"
                            loading="lazy"
                          />
                        ) : (
                          <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                            {review.authorName.charAt(0).toUpperCase()}
                          </div>
                        )}

                        <div className="min-w-0">
                          {review.authorUri ? (
                            <a
                              href={review.authorUri}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-foreground hover:text-primary transition-colors block truncate"
                            >
                              {review.authorName}
                            </a>
                          ) : (
                            <p className="text-foreground truncate">{review.authorName}</p>
                          )}
                          <p className="text-sm text-muted-foreground">
                            {formatReviewDate(review.relativePublishTimeDescription, review.publishTime)}
                          </p>
                        </div>
                      </div>

                      <RatingStars rating={review.rating} />
                    </div>

                    <p className="text-muted-foreground mb-8 leading-relaxed relative z-10 text-base">
                      "{review.text}"
                    </p>

                    <div className="border-t border-border pt-6 flex items-center justify-between gap-3 flex-wrap">
                      <p className="text-sm text-muted-foreground">Avaliação 5 estrelas no Google Maps</p>
                      <div className="flex items-center gap-4 text-sm">
                        {review.googleMapsUri && (
                          <a
                            href={review.googleMapsUri}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-primary hover:text-primary/80 inline-flex items-center gap-1"
                          >
                            Ver original
                            <ExternalLink className="w-4 h-4" />
                          </a>
                        )}
                        {review.flagContentUri && (
                          <a
                            href={review.flagContentUri}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-muted-foreground hover:text-foreground"
                          >
                            Reportar
                          </a>
                        )}
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          ) : (
            <Card className="max-w-3xl mx-auto p-8 lg:p-10 bg-white border border-primary/10 shadow-lg text-center">
              <h3 className="text-2xl text-foreground mb-3">Veja as avaliações no Google Maps</h3>
              <p className="text-muted-foreground mb-8">
                Se nenhuma avaliação pôde ser carregada agora, o perfil oficial da chácara continua
                disponível no Google Maps com todas as opiniões publicadas pelos clientes.
              </p>
            </Card>
          )}

          <div className="mt-10 flex flex-col items-center gap-5">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button asChild className="bg-secondary hover:bg-secondary/90">
                <a href={googleMapsUrl} target="_blank" rel="noopener noreferrer">
                  Ver todas no Google Maps
                </a>
              </Button>
              <Button asChild variant="outline" className="border-secondary text-secondary hover:bg-secondary hover:text-white">
                <a href={writeAReviewUrl} target="_blank" rel="noopener noreferrer">
                  Avaliar no Google
                </a>
              </Button>
            </div>

            <p className="text-sm text-muted-foreground text-center max-w-3xl">
              Mostrando avaliações 5 estrelas publicadas no Google Maps e retornadas pela API oficial do Google.
            </p>

            <GoogleMapsAttribution attributions={payload?.attributions ?? []} />
          </div>
        </div>
      </div>
    </section>
  );
}
