import { motion } from 'motion/react';
import { Sparkles, TreePine, PartyPopper } from 'lucide-react';
import { FloralCorner, FloralDivider, DelicateFlower, FloralWreath } from './DecorativeElements';

const features = [
  {
    icon: Sparkles,
    title: 'Atendimento Personalizado',
    description: 'Cada evento recebe atenção aos detalhes para criar uma experiência acolhedora e bem planejada do início ao fim.',
  },
  {
    icon: TreePine,
    title: 'Ambiente Natural em Mandirituba',
    description: 'Um cenário rodeado por natureza, ideal para quem busca uma chácara para eventos em Mandirituba com charme e tranquilidade.',
  },
  {
    icon: PartyPopper,
    title: 'Estrutura para Diferentes Eventos',
    description: 'Espaços versáteis para aniversários, casamentos, festas de família, confraternizações e eventos corporativos.',
  },
];

export function About() {
  return (
    <section id="sobre" className="py-20 lg:py-32 bg-white relative overflow-hidden">
      {/* Decorative Elements */}
      <FloralCorner className="top-10 left-10 text-primary" />
      <FloralDivider className="bottom-20 right-10 text-secondary" />
      <DelicateFlower className="top-20 right-20 text-primary" />
      <FloralWreath className="bottom-10 left-20 text-secondary" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            {/* Decorative border */}
            <div className="absolute -top-4 -left-4 w-full h-full border-4 border-primary/20 rounded-lg -z-10"></div>
            <img
              src="/images/chacara-bostelmann-fachada.jpg"
              alt="Fachada da Chácara Bostelmann em Mandirituba"
              className="rounded-lg shadow-xl w-full relative z-10"
            />
            {/* Corner badge */}
            <div className="absolute -bottom-6 -right-6 bg-primary text-white px-6 py-4 rounded-lg shadow-lg z-20">
              <p className="text-sm">Desde 2020</p>
              <p className="text-2xl">100+</p>
              <p className="text-xs">Eventos Realizados</p>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl lg:text-4xl text-foreground mb-6">
              Sobre a Chácara Bostelmann
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              Localizada em Mandirituba, no Paraná, a Chácara Bostelmann é uma chácara para eventos preparada para receber celebrações especiais com conforto, natureza e praticidade.
            </p>
            <p className="text-lg text-muted-foreground mb-8">
              Nossa proposta é oferecer um espaço para aniversários, casamentos, festas de 15 anos, confraternizações e eventos corporativos em Mandirituba que una ambiente acolhedor, boa estrutura, estacionamento e fácil acesso para convidados da cidade e da região metropolitana de Curitiba.
            </p>

            {/* Features */}
            <div className="space-y-6">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.4 }}
                  className="flex gap-4"
                >
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <feature.icon className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg text-foreground mb-1">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
