import { motion } from 'motion/react';
import { useState } from 'react';
import { X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';
import { FloralCorner, FloralDivider, DelicateFlower, FloralWreath } from './DecorativeElements';

const vistaAereaImg = '/images/chacara-bostelmann-vista-aerea.jpg';
const fachadaImg = '/images/chacara-bostelmann-fachada.jpg';
const aniversarioImg = '/images/chacara-bostelmann-15-anos.jpg';
const casamentoImg = '/images/chacara-bostelmann-casamento.jpg';

const galleryImages = [
  {
    src: vistaAereaImg,
    title: 'Vista da Chácara',
    description: 'Área ampla com salão, estacionamento e natureza em Mandirituba',
    category: 'estrutura',
  },
  {
    src: fachadaImg,
    title: 'Fachada do Espaço',
    description: 'Estrutura coberta pronta para receber eventos sociais e corporativos',
    category: 'estrutura',
  },
  {
    src: aniversarioImg,
    title: 'Aniversários Especiais',
    description: 'Ambiente acolhedor para festas de 15 anos e celebrações em família',
    category: 'evento-social',
  },
  {
    src: casamentoImg,
    title: 'Casamentos na Natureza',
    description: 'Cenário elegante para cerimônias, recepções e registros do grande dia',
    category: 'casamento',
  },
];

export function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const openLightbox = (index: number) => {
    setSelectedImage(index);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % galleryImages.length);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage - 1 + galleryImages.length) % galleryImages.length);
    }
  };

  return (
    <section id="galeria" className="py-20 lg:py-32 bg-gradient-to-br from-background via-white to-background relative overflow-hidden">
      {/* Decorative Elements */}
      <FloralDivider className="top-10 left-10 text-primary" />
      <FloralDivider className="bottom-10 right-10 text-secondary rotate-180" />
      <FloralCorner className="top-0 right-0 text-primary" />
      <FloralCorner className="bottom-0 left-0 text-secondary rotate-180" />
      
      {/* Ornamental lines */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-block mb-6">
            <div className="flex items-center gap-4">
              <div className="h-px w-12 bg-primary"></div>
              <span className="text-primary text-sm tracking-widest uppercase">Nossa Galeria</span>
              <div className="h-px w-12 bg-primary"></div>
            </div>
          </div>
          <h2 className="text-4xl lg:text-5xl text-foreground mb-6">
            Conheça Nossos Espaços
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Fotos reais da Chácara Bostelmann e de eventos realizados no espaço em Mandirituba
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {galleryImages.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.6 }}
                className="group relative"
              >
                {/* Ornamental frame */}
                <div className="absolute -inset-4 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Main frame with borders */}
                <div className="relative bg-white p-3 rounded-lg shadow-xl group-hover:shadow-2xl transition-all duration-500">
                  {/* Corner decorations */}
                  <div className="absolute top-0 left-0 w-8 h-8 border-t-4 border-l-4 border-primary rounded-tl-lg"></div>
                  <div className="absolute top-0 right-0 w-8 h-8 border-t-4 border-r-4 border-primary rounded-tr-lg"></div>
                  <div className="absolute bottom-0 left-0 w-8 h-8 border-b-4 border-l-4 border-secondary rounded-bl-lg"></div>
                  <div className="absolute bottom-0 right-0 w-8 h-8 border-b-4 border-r-4 border-secondary rounded-br-lg"></div>

                  {/* Image container */}
                  <div className="relative aspect-[4/3] overflow-hidden rounded-md">
                    <img
                      src={image.src}
                      alt={image.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    {/* Zoom icon */}
                    <button
                      onClick={() => openLightbox(index)}
                      className="absolute top-4 right-4 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-white hover:scale-110"
                    >
                      <Maximize2 className="w-5 h-5 text-primary" />
                    </button>

                    {/* Text overlay */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                      <h3 className="text-2xl mb-2">{image.title}</h3>
                      <p className="text-white/90 text-sm">{image.description}</p>
                    </div>
                  </div>

                  {/* Bottom label */}
                  <div className="mt-4 px-2">
                    <h4 className="text-xl text-foreground mb-1">{image.title}</h4>
                    <p className="text-sm text-muted-foreground">{image.description}</p>
                  </div>
                </div>

                {/* Decorative elements around frame */}
                <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-transparent via-secondary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-center mt-16"
        >
          <div className="inline-block bg-white px-8 py-6 rounded-lg shadow-lg border-2 border-primary/20">
            <p className="text-lg text-muted-foreground mb-4">
              Quer conhecer pessoalmente nossos espaços?
            </p>
            <a
              href="#contato"
              className="inline-flex items-center justify-center px-8 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
            >
              Agendar Visita
            </a>
          </div>
        </motion.div>
      </div>

      {/* Lightbox */}
      {selectedImage !== null && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              prevImage();
            }}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              nextImage();
            }}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          <div className="max-w-6xl w-full" onClick={(e) => e.stopPropagation()}>
            <img
              src={galleryImages[selectedImage].src}
              alt={galleryImages[selectedImage].title}
              className="w-full h-auto rounded-lg shadow-2xl"
            />
            <div className="text-center mt-6 text-white">
              <h3 className="text-2xl mb-2">{galleryImages[selectedImage].title}</h3>
              <p className="text-white/80">{galleryImages[selectedImage].description}</p>
            </div>
          </div>
        </motion.div>
      )}
    </section>
  );
}
