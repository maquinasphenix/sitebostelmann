import { motion } from 'motion/react';
import { ChevronDown, Sparkles } from 'lucide-react';
import { Button } from './ui/button';

export function Hero() {
  const handleScroll = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <section id="home" className="relative min-h-screen flex items-end justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/chacara-bostelmann-capa-home.png"
            alt="Capa da Chácara Bostelmann Eventos"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/15 via-black/10 to-black/55" />
        </div>

        {/* Content */}
        <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 pb-24 sm:pb-28">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto flex flex-col items-center gap-5 text-center"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                delay: 0.3,
                duration: 0.8,
                type: "spring",
                stiffness: 100
              }}
              className="inline-block"
            >
              <motion.div
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="relative"
              >
                <div className="absolute inset-0 bg-primary/40 blur-xl rounded-full"></div>

                <div className="relative flex items-center gap-3 bg-gradient-to-r from-primary via-primary to-secondary text-white px-7 sm:px-8 py-4 rounded-full backdrop-blur-sm shadow-2xl border-2 border-white/30">
                  <motion.div
                    animate={{
                      rotate: [0, 360],
                      scale: [1, 1.2, 1]
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                  >
                    <Sparkles className="w-7 h-7" />
                  </motion.div>
                  <span className="text-sm sm:text-lg tracking-wide">Chácara para Eventos em Mandirituba, PR</span>
                  <motion.div
                    animate={{
                      rotate: [0, -360],
                      scale: [1, 1.2, 1]
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                  >
                    <Sparkles className="w-7 h-7" />
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                onClick={() => handleScroll('#contato')}
                className="bg-secondary hover:bg-secondary/90 text-white px-8 py-6 text-lg shadow-xl"
              >
                Solicitar Orçamento
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => handleScroll('#galeria')}
                className="bg-primary/90 hover:bg-primary text-white border-primary px-8 py-6 text-lg shadow-xl backdrop-blur-sm"
              >
                Ver Galeria de Fotos
              </Button>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        >
          <button
            onClick={() => handleScroll('#home-intro')}
            className="text-white hover:text-white/80 transition-colors"
            aria-label="Scroll para baixo"
          >
            <ChevronDown className="w-8 h-8 animate-bounce" />
          </button>
        </motion.div>
      </section>

      <section id="home-intro" className="py-14 sm:py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl text-foreground mb-5">
              Chácara para aniversários e eventos em Mandirituba
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
              A Chácara Bostelmann é o espaço ideal para aniversários, casamentos, confraternizações e eventos corporativos em Mandirituba, no Paraná, perto de Curitiba.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
