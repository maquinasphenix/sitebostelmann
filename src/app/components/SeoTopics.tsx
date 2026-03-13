import { motion } from 'motion/react';
import { MapPin, PartyPopper, HeartHandshake, BriefcaseBusiness } from 'lucide-react';
import { FloralCorner, FloralDivider, DelicateFlower } from './DecorativeElements';

const seoTopics = [
  {
    icon: PartyPopper,
    title: 'Espaço para aniversário em Mandirituba',
    description:
      'A Chácara Bostelmann é uma opção para quem busca espaço para aniversário em Mandirituba com ambiente acolhedor, área verde e estrutura para reunir família e amigos.',
  },
  {
    icon: HeartHandshake,
    title: 'Chácara para casamento em Mandirituba',
    description:
      'Para casais que procuram chácara para casamento em Mandirituba, o espaço combina cenário natural, salão coberto e fácil acesso para convidados vindos de Curitiba e região.',
  },
  {
    icon: BriefcaseBusiness,
    title: 'Confraternização e evento corporativo perto de Curitiba',
    description:
      'Empresas que precisam de um local para confraternização, encontro de equipe ou evento corporativo em Mandirituba encontram uma chácara com clima mais reservado e prático para a logística.',
  },
  {
    icon: MapPin,
    title: 'Salão de festas com área verde em Mandirituba',
    description:
      'Quem pesquisa salão de festas em Mandirituba ou chácara para eventos no Paraná costuma buscar estacionamento, contato com a natureza e um espaço versátil para diferentes formatos de celebração.',
  },
];

export function SeoTopics() {
  return (
    <section id="seo-eventos" className="py-20 lg:py-28 bg-white relative overflow-hidden">
      <FloralCorner className="top-10 right-10 text-primary" />
      <FloralCorner className="bottom-10 left-10 text-secondary rotate-180" />
      <DelicateFlower className="top-24 left-20 text-primary" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto mb-14"
        >
          <FloralDivider className="mb-8 text-primary" />
          <h2 className="text-3xl lg:text-4xl text-foreground mb-4">
            Eventos em Mandirituba: o que as pessoas procuram
          </h2>
          <p className="text-lg text-muted-foreground">
            Esta seção reúne os principais assuntos ligados a buscas por chácara para eventos em Mandirituba,
            espaço para aniversário, casamento, festa de 15 anos, confraternização e evento corporativo perto de Curitiba.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {seoTopics.map((topic, index) => (
            <motion.article
              key={topic.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="rounded-2xl border border-border bg-background p-7 shadow-sm"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <topic.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl text-foreground mb-3">{topic.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{topic.description}</p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
