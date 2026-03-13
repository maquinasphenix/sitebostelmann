import { motion } from 'motion/react';
import { Calendar, MapPin, Users, Instagram, ExternalLink, Bike, ArrowLeft } from 'lucide-react';
import { Button } from '../components/ui/button';
import { FloralCorner, FloralDivider, DelicateFlower } from '../components/DecorativeElements';
import { Footer } from '../components/Footer';
import { WhatsAppButton } from '../components/WhatsAppButton';

interface EventMTBProps {
  onBack: () => void;
}

export function EventMTB({ onBack }: EventMTBProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-white to-background">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-md border-b-2 border-primary/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <button
              onClick={onBack}
              className="flex items-center gap-2 text-foreground hover:text-primary transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Voltar</span>
            </button>
            <span className="text-2xl text-primary">Tour das Estações MTB</span>
            <div className="w-20"></div> {/* Spacer for centering */}
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="pt-20">
        <section className="py-20 lg:py-32 relative overflow-hidden">
          {/* Decorative Elements */}
          <FloralCorner className="top-0 left-0 text-primary" />
          <FloralCorner className="bottom-0 right-0 text-secondary rotate-180" />
          <DelicateFlower className="top-20 right-20 text-primary" />
          <DelicateFlower className="bottom-20 left-20 text-secondary" />
          
          {/* Ornamental lines */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="inline-block mb-6"
              >
                <div className="flex items-center gap-3 bg-gradient-to-r from-primary to-secondary text-white px-8 py-4 rounded-full shadow-xl">
                  <Bike className="w-6 h-6" />
                  <span className="text-sm tracking-widest uppercase">Evento Esportivo</span>
                </div>
              </motion.div>

              <FloralDivider className="mb-8 text-primary" />

              <h1 className="text-4xl lg:text-6xl text-foreground mb-6">
                Tour das Estações MTB
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
                Um evento de ciclismo mountain bike realizado na Chácara Bostelmann, unindo esporte, natureza e comunidade
              </p>

              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-white shadow-xl"
              >
                <a
                  href="https://www.instagram.com/tour_das_estacoes_mtb?igsh=MXFubmQ5ZGRxdnZvMQ=="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <Instagram className="w-5 h-5" />
                  Seguir @tour_das_estacoes_mtb
                  <ExternalLink className="w-4 h-4" />
                </a>
              </Button>
            </motion.div>

            {/* Event Info Cards */}
            <div className="grid md:grid-cols-3 gap-8 mb-20 max-w-5xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="bg-white p-8 rounded-lg shadow-lg border-2 border-primary/20 hover:border-primary/40 transition-all hover:shadow-xl"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <MapPin className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl text-foreground mb-3 text-center">Local</h3>
                <p className="text-muted-foreground text-center">
                  Chácara Bostelmann
                  <br />
                  Areia Branca dos Assis
                  <br />
                  Mandirituba - PR
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="bg-white p-8 rounded-lg shadow-lg border-2 border-primary/20 hover:border-primary/40 transition-all hover:shadow-xl"
              >
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <Calendar className="w-8 h-8 text-secondary" />
                </div>
                <h3 className="text-xl text-foreground mb-3 text-center">Periodicidade</h3>
                <p className="text-muted-foreground text-center">
                  Evento realizado periodicamente ao longo do ano
                  <br />
                  Acompanhe as datas no Instagram
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="bg-white p-8 rounded-lg shadow-lg border-2 border-primary/20 hover:border-primary/40 transition-all hover:shadow-xl"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <Users className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl text-foreground mb-3 text-center">Comunidade</h3>
                <p className="text-muted-foreground text-center">
                  Ciclistas de toda a região se reúnem para celebrar o esporte e a natureza
                </p>
              </motion.div>
            </div>

            {/* About the Event */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="max-w-4xl mx-auto mb-20"
            >
              <div className="bg-white rounded-lg shadow-xl p-8 lg:p-12 border-2 border-primary/10">
                <FloralDivider className="mb-8 text-primary" />
                
                <h2 className="text-3xl text-foreground mb-6 text-center">Sobre o Tour das Estações MTB</h2>
                
                <div className="space-y-6 text-lg text-muted-foreground">
                  <p>
                    O <strong className="text-primary">Tour das Estações MTB</strong> é um evento esportivo de ciclismo mountain bike que acontece na Chácara Bostelmann, oferecendo aos ciclistas uma experiência única de pedalar em meio à natureza exuberante de Mandirituba.
                  </p>
                  
                  <p>
                    Com trilhas desafiadoras e cenários naturais deslumbrantes, o evento reúne ciclistas de diferentes níveis, desde iniciantes até experientes, em um ambiente acolhedor e seguro. A chácara proporciona o cenário perfeito para essa experiência esportiva inesquecível.
                  </p>

                  <p>
                    Mais do que uma competição, o Tour das Estações MTB é uma celebração do esporte, da natureza e da comunidade ciclística da região. Cada edição traz novas emoções, desafios e a oportunidade de fazer parte de algo especial.
                  </p>
                </div>

                <FloralDivider className="mt-8 text-secondary" />
              </div>
            </motion.div>

            {/* Image Gallery */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="mb-20"
            >
              <div className="text-center mb-12">
                <h2 className="text-3xl lg:text-4xl text-foreground mb-4">Galeria do Evento</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Confira momentos registrados durante as edições do Tour das Estações MTB
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  'https://images.unsplash.com/photo-1541625602330-2277a4c46182?w=800',
                  'https://images.unsplash.com/photo-1544191696-102dbdaeeaa0?w=800',
                  'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
                  'https://images.unsplash.com/photo-1517649763962-0c623066013b?w=800',
                  'https://images.unsplash.com/photo-1605181692315-f6ba84ac6e71?w=800',
                  'https://images.unsplash.com/photo-1532298229144-0ec0c57515c7?w=800',
                ].map((image, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.8 + index * 0.1, duration: 0.5 }}
                    className="group relative"
                  >
                    <div className="relative bg-white p-3 rounded-lg shadow-lg group-hover:shadow-2xl transition-all duration-500">
                      {/* Corner decorations */}
                      <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-primary rounded-tl-lg"></div>
                      <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-primary rounded-tr-lg"></div>
                      <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-secondary rounded-bl-lg"></div>
                      <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-secondary rounded-br-lg"></div>

                      <div className="aspect-[4/3] overflow-hidden rounded-md">
                        <img
                          src={image}
                          alt={`Tour das Estações MTB ${index + 1}`}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Instagram CTA */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.6 }}
              className="text-center mb-16"
            >
              <div className="inline-block bg-gradient-to-br from-primary/10 via-white to-secondary/10 px-12 py-10 rounded-lg shadow-xl border-2 border-primary/20">
                <Instagram className="w-16 h-16 text-primary mx-auto mb-6" />
                <h3 className="text-2xl text-foreground mb-4">Acompanhe o Tour das Estações MTB</h3>
                <p className="text-lg text-muted-foreground mb-6 max-w-md">
                  Siga nosso Instagram para ficar por dentro das próximas edições, ver fotos e vídeos dos eventos
                </p>
                <Button
                  asChild
                  size="lg"
                  className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-white shadow-xl"
                >
                  <a
                    href="https://www.instagram.com/tour_das_estacoes_mtb?igsh=MXFubmQ5ZGRxdnZvMQ=="
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    <Instagram className="w-5 h-5" />
                    @tour_das_estacoes_mtb
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </Button>
              </div>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.0, duration: 0.6 }}
              className="text-center"
            >
              <div className="inline-block bg-white px-10 py-8 rounded-lg shadow-lg border-2 border-primary/20">
                <h3 className="text-xl text-foreground mb-4">Interesse em sediar seu evento esportivo?</h3>
                <p className="text-muted-foreground mb-6 max-w-md">
                  A Chácara Bostelmann está aberta para receber eventos esportivos e celebrações ao ar livre
                </p>
                <Button
                  onClick={onBack}
                  className="bg-secondary hover:bg-secondary/90"
                >
                  Voltar ao Site Principal
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />

      {/* WhatsApp Button */}
      <WhatsAppButton />
    </div>
  );
}