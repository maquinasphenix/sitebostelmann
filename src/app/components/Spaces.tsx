import { motion } from 'motion/react';
import { DotsPattern, WavePattern, BranchPattern, FloralCorner } from './DecorativeElements';

const vistaAereaImg = '/images/chacara-bostelmann-vista-aerea.jpg';
const fachadaImg = '/images/chacara-bostelmann-fachada.jpg';
const palcoImg = '/images/chacara-bostelmann-palco.jpg';
const bastidoresImg = '/images/chacara-bostelmann-bastidores.jpg';

const spaces = [
  {
    title: 'Estrutura Completa',
    description: 'Espaço amplo com salão, área externa e estacionamento para receber aniversários, casamentos e confraternizações.',
    image: vistaAereaImg,
  },
  {
    title: 'Fachada e Acesso',
    description: 'Chegada prática para convidados, fornecedores, vans e apoio de produção em dias de evento.',
    image: fachadaImg,
  },
  {
    title: 'Eventos de 15 Anos',
    description: 'Ambiente preparado para produções especiais com iluminação, pista e cenários que valorizam a comemoração.',
    image: palcoImg,
  },
  {
    title: 'Apoio para Produção',
    description: 'Espaços de apoio que ajudam na organização de bastidores, recepção e preparação do evento.',
    image: bastidoresImg,
  },
];

export function Spaces() {
  return (
    <section id="espacos" className="py-20 lg:py-32 bg-background relative overflow-hidden">
      {/* Decorative Elements */}
      <DotsPattern className="top-20 right-20 text-primary" />
      <DotsPattern className="bottom-40 left-20 text-secondary" />
      <WavePattern className="top-0 text-primary" />
      <BranchPattern className="top-40 left-40 text-primary" />
      <FloralCorner className="bottom-20 right-40 text-secondary" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-4xl text-foreground mb-4">Nossos Espaços</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Registros reais da estrutura da chácara e dos formatos de evento que o espaço recebe
          </p>
        </motion.div>

        {/* Spaces Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {spaces.map((space, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="group"
            >
              <div className="relative overflow-hidden rounded-lg shadow-lg mb-4 aspect-[4/3] border-4 border-transparent group-hover:border-primary/30 transition-all duration-300">
                <img
                  src={space.image}
                  alt={space.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                  <h4 className="text-lg mb-1">{space.title}</h4>
                </div>
              </div>
              <h3 className="text-xl text-foreground mb-2">{space.title}</h3>
              <p className="text-muted-foreground">{space.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
