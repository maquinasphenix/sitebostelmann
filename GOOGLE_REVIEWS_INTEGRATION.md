# Integração oficial das avaliações do Google

O site agora está preparado para buscar avaliações reais do perfil oficial da chácara no Google Maps e exibi-las na seção de avaliações dos clientes.

## Como funciona

1. O componente `Testimonials.tsx` busca as avaliações em uma edge function do Supabase.
2. A edge function usa a `Places API (New)` do Google para consultar o local oficial.
3. O frontend mostra apenas avaliações reais de `5 estrelas`.
4. Se a API não responder ou ainda não estiver configurada, o site exibe botões para abrir o perfil oficial no Google Maps em vez de depoimentos fictícios.

## Observação importante

Para este caso, a implementação usa `Google Places API`, não a API de gestão do Perfil da Empresa (`Google Business Profile API`).

Motivo:
- `Places API` é a forma adequada para exibir avaliações públicas em um site.
- `Business Profile API` é voltada para gestão da conta proprietária e exige OAuth com mais complexidade operacional.

## O que precisa ser configurado

### 1. Ativar a API no Google Cloud

- Acesse `https://console.cloud.google.com/`
- Ative `Places API (New)`
- Gere uma chave em `APIs e serviços > Credenciais`

Recomendação:
- Restrinja a chave por API e, se possível, por IP ou ambiente do backend.

### 2. Definir os secrets da edge function

Configure no Supabase:

```bash
supabase secrets set GOOGLE_PLACES_API_KEY=sua_chave_google
supabase secrets set GOOGLE_PLACE_ID=seu_place_id
```

Opção alternativa se você ainda não tiver o `placeId`:

```bash
supabase secrets set GOOGLE_PLACES_API_KEY=sua_chave_google
supabase secrets set GOOGLE_PLACE_QUERY="Bostelmann Eventos, Mandirituba - PR"
```

Observação:
- `GOOGLE_PLACE_ID` é o formato recomendado e mais estável.
- `GOOGLE_PLACE_QUERY` é apenas fallback para descobrir o local via busca textual.

### 3. Publicar a edge function

```bash
supabase functions deploy server
```

## Variável do frontend

Defina no build do site:

```bash
VITE_GOOGLE_REVIEWS_URL=https://SEU-PROJETO.supabase.co/functions/v1/server/make-server-411ab965/google-reviews
```

## Endpoint usado pelo frontend

```text
/functions/v1/server/make-server-411ab965/google-reviews
```

## Resposta esperada da edge function

```json
{
  "fetchedAt": "2026-03-12T18:00:00.000Z",
  "placeId": "abc123",
  "placeName": "Bostelmann Eventos",
  "formattedAddress": "Mandirituba - PR, 83800-000",
  "rating": 4.9,
  "userRatingCount": 87,
  "googleMapsUri": "https://maps.google.com/...",
  "reviewsUri": "https://www.google.com/maps/...",
  "writeAReviewUri": "https://search.google.com/local/writereview?placeid=...",
  "attributions": [],
  "reviews": [
    {
      "authorName": "Nome do cliente",
      "authorUri": "https://...",
      "authorPhotoUri": "https://...",
      "rating": 5,
      "text": "Avaliação real publicada no Google",
      "relativePublishTimeDescription": "há 2 meses",
      "publishTime": "2026-01-10T12:00:00Z",
      "googleMapsUri": "https://...",
      "flagContentUri": "https://..."
    }
  ]
}
```

## Política de uso

- O código busca as avaliações em tempo real.
- O `placeId` pode ser persistido para evitar nova busca textual.
- O conteúdo das avaliações não é cacheado no banco para evitar conflito com as políticas de armazenamento do Google Maps Platform.

## Fontes oficiais usadas para a implementação

- https://developers.google.com/maps/documentation/places/web-service/place-details
- https://developers.google.com/maps/documentation/places/web-service/text-search
- https://developers.google.com/maps/documentation/places/web-service/place-details#reviews
- https://developers.google.com/maps/documentation/places/web-service/policies
