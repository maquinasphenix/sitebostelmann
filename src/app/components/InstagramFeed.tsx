import { motion } from 'motion/react';
import { Instagram, ExternalLink, Facebook } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Button } from './ui/button';
import { FloralDivider, DelicateFlower } from './DecorativeElements';

type InstagramFeedPost = {
  id: string;
  imageUrl: string;
  permalink: string;
  caption?: string;
  timestamp?: string;
};

const INSTAGRAM_PROFILE_URL = 'https://www.instagram.com/chacarabostelmanneventos';
const INSTAGRAM_FEED_URL = import.meta.env.VITE_INSTAGRAM_FEED_URL;
const ENABLE_LIVE_FEED =
  import.meta.env.VITE_ENABLE_INSTAGRAM_FEED === 'true' && Boolean(INSTAGRAM_FEED_URL);

const fallbackPosts: InstagramFeedPost[] = [
  {
    id: 'fallback-1',
    imageUrl: '/images/chacara-bostelmann-vista-aerea.jpg',
    permalink: INSTAGRAM_PROFILE_URL,
    caption: 'Vista real da Chácara Bostelmann em Mandirituba',
  },
  {
    id: 'fallback-2',
    imageUrl: '/images/chacara-bostelmann-fachada.jpg',
    permalink: INSTAGRAM_PROFILE_URL,
    caption: 'Fachada e estrutura do espaço para eventos',
  },
  {
    id: 'fallback-3',
    imageUrl: '/images/chacara-bostelmann-15-anos.jpg',
    permalink: INSTAGRAM_PROFILE_URL,
    caption: 'Festas de 15 anos na Chácara Bostelmann',
  },
  {
    id: 'fallback-4',
    imageUrl: '/images/chacara-bostelmann-casamento.jpg',
    permalink: INSTAGRAM_PROFILE_URL,
    caption: 'Casamentos e ensaios em meio à natureza',
  },
  {
    id: 'fallback-5',
    imageUrl: '/images/chacara-bostelmann-palco.jpg',
    permalink: INSTAGRAM_PROFILE_URL,
    caption: 'Produções especiais com palco, pista e iluminação',
  },
  {
    id: 'fallback-6',
    imageUrl: '/images/chacara-bostelmann-evento-esportivo.jpg',
    permalink: INSTAGRAM_PROFILE_URL,
    caption: 'A chácara também recebe eventos esportivos e experiências ao ar livre',
  },
];

function formatPostDate(timestamp?: string) {
  if (!timestamp) {
    return 'Ver no Instagram';
  }

  try {
    return new Intl.DateTimeFormat('pt-BR', {
      day: '2-digit',
      month: 'short',
      year: 'numeric',
    }).format(new Date(timestamp));
  } catch {
    return 'Ver no Instagram';
  }
}

function InstagramPost({ post }: { post: InstagramFeedPost }) {
  return (
    <div className="group relative aspect-square overflow-hidden rounded-lg shadow-lg cursor-pointer">
      <img
        src={post.imageUrl}
        alt={post.caption || 'Publicação do Instagram da Chácara Bostelmann'}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
        <div className="flex items-center gap-2 text-white">
          <Instagram className="w-6 h-6" />
          <span className="text-lg">Abrir post</span>
        </div>
      </div>
      <div className="absolute left-0 right-0 bottom-0 p-4 bg-gradient-to-t from-black/70 to-transparent text-white">
        <p className="text-sm truncate">{post.caption || 'Publicação oficial da Chácara Bostelmann'}</p>
        <p className="text-xs text-white/80 mt-1">{formatPostDate(post.timestamp)}</p>
      </div>
    </div>
  );
}

function InstagramPostSkeleton() {
  return <div className="aspect-square rounded-lg bg-muted animate-pulse" />;
}

export function InstagramFeed() {
  const [posts, setPosts] = useState<InstagramFeedPost[]>(fallbackPosts);
  const [isLoading, setIsLoading] = useState(ENABLE_LIVE_FEED);
  const [isLiveFeed, setIsLiveFeed] = useState(false);

  useEffect(() => {
    if (!ENABLE_LIVE_FEED || !INSTAGRAM_FEED_URL) {
      setIsLoading(false);
      return;
    }

    const controller = new AbortController();

    const fetchPosts = async () => {
      try {
        const response = await fetch(INSTAGRAM_FEED_URL, {
          signal: controller.signal,
        });

        if (!response.ok) {
          throw new Error(`Instagram feed request failed with ${response.status}`);
        }

        const payload = (await response.json()) as { data?: InstagramFeedPost[] };
        if (payload.data?.length) {
          setPosts(payload.data);
          setIsLiveFeed(true);
        }
      } catch (error) {
        if (controller.signal.aborted) {
          return;
        }

        console.error('Erro ao carregar feed do Instagram:', error);
        setIsLiveFeed(false);
      } finally {
        if (!controller.signal.aborted) {
          setIsLoading(false);
        }
      }
    };

    fetchPosts();

    return () => controller.abort();
  }, []);

  return (
    <section className="py-20 lg:py-32 bg-white relative overflow-hidden">
      {/* Decorative Elements */}
      <DelicateFlower className="top-20 left-20 text-primary" />
      <DelicateFlower className="top-20 right-20 text-secondary" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          {/* Social Media Badges */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <div className="flex items-center gap-3 bg-gradient-to-r from-pink-500 via-purple-500 to-orange-500 text-white px-8 py-4 rounded-full shadow-xl">
                <Instagram className="w-6 h-6" />
                <span className="text-sm tracking-widest uppercase">Instagram</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <div className="flex items-center gap-3 bg-gradient-to-r from-blue-600 to-blue-500 text-white px-8 py-4 rounded-full shadow-xl">
                <Facebook className="w-6 h-6" />
                <span className="text-sm tracking-widest uppercase">Facebook</span>
              </div>
            </motion.div>
          </div>

          <FloralDivider className="mb-8 text-primary" />

          <h2 className="text-4xl lg:text-5xl text-foreground mb-6">
            Siga-nos nas Redes Sociais
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Acompanhe nossos eventos, inspirações e momentos especiais através do Instagram e Facebook
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-pink-500 via-purple-500 to-orange-500 hover:opacity-90 text-white shadow-xl"
            >
              <a
                href={INSTAGRAM_PROFILE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <Instagram className="w-5 h-5" />
                Seguir no Instagram
                <ExternalLink className="w-4 h-4" />
              </a>
            </Button>

            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-blue-500 hover:opacity-90 text-white shadow-xl"
            >
              <a
                href="https://www.facebook.com/profile.php?id=100092333961665"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <Facebook className="w-5 h-5" />
                Curtir no Facebook
                <ExternalLink className="w-4 h-4" />
              </a>
            </Button>
          </div>
        </motion.div>

        {/* Instagram Feed Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="max-w-6xl mx-auto"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl text-foreground mb-2">Últimas Publicações</h3>
            <p className="text-muted-foreground">@chacarabostelmanneventos</p>
            <p className="text-sm text-muted-foreground mt-2">
              {isLiveFeed
                ? 'Feed atualizado automaticamente pelo Instagram oficial da chácara.'
                : 'Galeria com fotos reais do local e de eventos publicados no perfil oficial da chácara.'}
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-6 mb-12">
            {isLoading
              ? Array.from({ length: 6 }).map((_, index) => (
                  <motion.div
                    key={`loading-${index}`}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
                  >
                    <InstagramPostSkeleton />
                  </motion.div>
                ))
              : posts.map((post, index) => (
                  <motion.div
                    key={post.id}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
                  >
                    <a
                      href={post.permalink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <InstagramPost post={post} />
                    </a>
                  </motion.div>
                ))}
          </div>

          {/* View More Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-2 border-primary text-primary hover:bg-primary hover:text-white"
            >
              <a
                href={INSTAGRAM_PROFILE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <Instagram className="w-4 h-4" />
                Ver Mais no Instagram
                <ExternalLink className="w-4 h-4" />
              </a>
            </Button>

            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white"
            >
              <a
                href="https://www.facebook.com/profile.php?id=100092333961665"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <Facebook className="w-4 h-4" />
                Ver Mais no Facebook
                <ExternalLink className="w-4 h-4" />
              </a>
            </Button>
          </div>
        </motion.div>

        {/* CTA Box */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-20 text-center"
        >
          <div className="inline-block bg-gradient-to-br from-primary/10 via-white to-secondary/10 px-12 py-10 rounded-lg shadow-xl border-2 border-primary/20">
            <div className="flex items-center justify-center gap-4 mb-6">
              <Instagram className="w-12 h-12 text-pink-500" />
              <Facebook className="w-12 h-12 text-blue-600" />
            </div>
            <h3 className="text-2xl text-foreground mb-4">Compartilhe Seu Evento</h3>
            <p className="text-lg text-muted-foreground mb-6 max-w-md">
              Marcou a gente no seu evento? Adoramos ver os momentos especiais compartilhados!
            </p>
            <p className="text-primary text-lg mb-4">
              Use <strong>#ChacaraBostelmann</strong> nas suas fotos
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
