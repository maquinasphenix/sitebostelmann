# Integração oficial do Instagram

O site agora está preparado para buscar automaticamente as publicações do perfil oficial `@chacarabostelmanneventos` usando a API oficial da Meta, sem expor o token no frontend.

## Como funciona

1. O componente `InstagramFeed.tsx` busca o mural em uma edge function do Supabase.
2. A edge function consulta `https://graph.instagram.com/me/media`.
3. O resultado fica em cache por 15 minutos no `kv_store`, reduzindo chamadas e evitando instabilidade.
4. Se a API do Instagram falhar temporariamente, o site usa o cache anterior.

## O que precisa ser configurado

### 1. Conta do Instagram

- A conta `@chacarabostelmanneventos` precisa ser uma conta profissional do Instagram.

### 2. App da Meta

- Crie ou use um app em `https://developers.facebook.com/`
- Adicione o produto `Instagram`
- Configure `Business Login for Instagram`

Base oficial usada:
- https://developers.facebook.com/docs/instagram-platform/overview/
- https://developers.facebook.com/docs/instagram-platform/instagram-api-with-instagram-login/business-login
- https://developers.facebook.com/blog/post/2024/09/04/update-on-instagram-basic-display-api/

Observação importante:
- A Meta informou que a `Instagram Basic Display API` deixou de estar disponível a partir de 4 de dezembro de 2024, então esta integração usa o fluxo atual da plataforma.

### 3. Token de acesso

Obtenha um token long-lived da conta do Instagram conectada ao app da Meta e salve esse valor como secret da edge function:

```bash
supabase secrets set INSTAGRAM_ACCESS_TOKEN=seu_token_long_lived
```

### 4. Deploy da edge function

Publique a função `server`:

```bash
supabase functions deploy server
```

## Endpoint usado pelo frontend

Por padrão, o site tenta buscar o feed em:

```text
https://uwymeyitwjxubccjegiv.supabase.co/functions/v1/server/make-server-411ab965/instagram-feed
```

Se precisar trocar esse endpoint, defina a variável:

```bash
VITE_INSTAGRAM_FEED_URL=https://seu-endpoint/functions/v1/server/make-server-411ab965/instagram-feed
```

## Resposta esperada da edge function

```json
{
  "fetchedAt": "2026-03-11T17:00:00.000Z",
  "data": [
    {
      "id": "123",
      "imageUrl": "https://...",
      "permalink": "https://www.instagram.com/p/...",
      "caption": "Texto do post",
      "timestamp": "2026-03-10T12:00:00+0000",
      "mediaType": "IMAGE"
    }
  ],
  "cached": false
}
```

## Cache

- TTL atual: `15 minutos`
- Chave usada no banco: `instagram-feed-v1`

## Limitação atual

Sem o `INSTAGRAM_ACCESS_TOKEN` configurado no Supabase, o site continua funcionando com imagens de fallback no mural, mas não consegue atualizar automaticamente com o perfil oficial.
