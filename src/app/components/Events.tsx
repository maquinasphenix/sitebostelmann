import { motion } from 'motion/react';
import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { FloralCorner, DelicateFlower, FloralDivider } from './DecorativeElements';

const eventCategories = [
  {
    id: 'casamentos',
    label: 'Casamentos',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1758727654358-a90614d694eb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvdXRkb29yJTIwd2VkZGluZyUyMHZlbnVlJTIwbGFrZSUyMG5hdHVyZXxlbnwxfHx8fDE3NzA3MjgyMDZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
        alt: 'Casamento ao ar livre em chácara de eventos em Mandirituba',
      },
      {
        url: 'https://images.unsplash.com/photo-1770150138358-5b8db4066e03?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxydXN0aWMlMjB3ZWRkaW5nJTIwdmVudWUlMjBvdXRkb29yfGVufDF8fHx8MTc3MDcyODIwOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
        alt: 'Espaço para casamento em Mandirituba no Paraná',
      },
      {
        url: 'https://images.unsplash.com/photo-1704455312555-8f30259eac6c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWRkaW5nJTIwcmVjZXB0aW9uJTIwb3V0ZG9vciUyMHRlbnR8ZW58MXx8fHwxNzcwNzI4MjA4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
        alt: 'Recepção de casamento em chácara para eventos',
      },
    ],
  },
  {
    id: 'aniversarios',
    label: 'Aniversários',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1622107795650-24e72a695404?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiaXJ0aGRheSUyMHBhcnR5JTIwY2VsZWJyYXRpb24lMjBvdXRkb29yfGVufDF8fHx8MTc3MDcyODIwOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
        alt: 'Aniversário em chácara para eventos em Mandirituba',
      },
      {
        url: 'https://images.unsplash.com/photo-1763553113332-800519753e40?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwZXZlbnQlMjBoYWxsJTIwcmVjZXB0aW9ufGVufDF8fHx8MTc3MDcyODIwN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
        alt: 'Espaço para festa de aniversário em Mandirituba',
      },
      {
        url: 'https://images.unsplash.com/photo-1759954644821-2787dca58b40?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxldmVudCUyMHZlbnVlJTIwZ2FyZGVuJTIwbGFuZHNjYXBlfGVufDF8fHx8MTc3MDcyODIwOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
        alt: 'Chácara para festa infantil e aniversário ao ar livre',
      },
    ],
  },
  {
    id: 'corporativos',
    label: 'Eventos Corporativos',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1571645163064-77faa9676a46?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjBldmVudCUyMG5ldHdvcmtpbmd8ZW58MXx8fHwxNzcwNjk1NDQ2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
        alt: 'Evento corporativo em chácara próxima a Curitiba',
      },
      {
        url: 'https://images.unsplash.com/photo-1763553113332-800519753e40?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwZXZlbnQlMjBoYWxsJTIwcmVjZXB0aW9ufGVufDF8fHx8MTc3MDcyODIwN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
        alt: 'Confraternização empresarial em Mandirituba',
      },
      {
        url: 'https://images.unsplash.com/photo-1569306560719-43ca578b43c2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3VudHJ5c2lkZSUyMGZhcm0lMjB2ZW51ZSUyMHN1bnNldHxlbnwxfHx8fDE3NzA3MjgyMDh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
        alt: 'Espaço para eventos corporativos em Mandirituba PR',
      },
    ],
  },
];

export function Events() {
  return (
    <section id="eventos" className="py-20 lg:py-32 bg-white relative overflow-hidden">
      {/* Decorative Elements */}
      <FloralCorner className="top-10 left-10 text-primary" />
      <FloralCorner className="bottom-10 right-10 text-secondary" />
      <DelicateFlower className="top-20 right-20 text-primary" />
      <FloralDivider className="bottom-20 left-20 text-secondary" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-4xl text-foreground mb-4">Espaço para diferentes tipos de eventos</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A Chácara Bostelmann recebe aniversários, casamentos, festas de 15 anos, confraternizações e eventos corporativos em Mandirituba, com ambiente acolhedor e fácil acesso para a região de Curitiba.
          </p>
        </motion.div>

        {/* Tabs */}
        <Tabs defaultValue="casamentos" className="w-full">
          <TabsList className="grid w-full max-w-2xl mx-auto grid-cols-3 mb-12">
            {eventCategories.map((category) => (
              <TabsTrigger key={category.id} value={category.id}>
                {category.label}
              </TabsTrigger>
            ))}
          </TabsList>

          {eventCategories.map((category) => (
            <TabsContent key={category.id} value={category.id}>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.images.map((image, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.4 }}
                    className="relative overflow-hidden rounded-lg shadow-lg aspect-[4/3] group cursor-pointer"
                  >
                    <img
                      src={image.url}
                      alt={image.alt}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </motion.div>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}
