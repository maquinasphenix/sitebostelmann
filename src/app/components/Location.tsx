import { motion } from 'motion/react';
import { MapPin, Navigation, Car, Bus } from 'lucide-react';
import { Button } from './ui/button';
import { FloralCorner, DelicateFlower } from './DecorativeElements';

export function Location() {
  const address = 'Bostelmann Eventos, Mandirituba - PR, 83800-000';
  const mapsUrl = 'https://maps.app.goo.gl/XtaLZXgLL3hr1AAD7?g_st=ic';
  const wazeUrl = 'https://www.waze.com/ul?q=Bostelmann%20Eventos%20Mandirituba%20PR&navigate=yes';

  return (
    <section id="localizacao" className="py-20 lg:py-32 bg-white relative overflow-hidden">
      {/* Decorative Elements */}
      <FloralCorner className="top-20 left-20 text-primary" />
      <DelicateFlower className="bottom-0 text-secondary" />
      <FloralCorner className="top-0 right-0 text-primary" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-4xl text-foreground mb-4">Como Chegar</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A Chácara Bostelmann está em Mandirituba, Paraná, em uma região de fácil acesso para quem procura chácara para eventos, salão de festas ou espaço para casamento perto de Curitiba.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative h-[400px] lg:h-[500px] rounded-lg overflow-hidden shadow-xl"
          >
            <iframe
              src="https://www.google.com/maps?q=Bostelmann+Eventos+-+Mandirituba+-+PR,+83800-000&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização da Chácara Bostelmann"
            ></iframe>
          </motion.div>

          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
              </div>
              <div>
                <h3 className="text-xl text-foreground mb-2">Endereço</h3>
                <p className="text-muted-foreground">{address}</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Navigation className="w-6 h-6 text-primary" />
                </div>
              </div>
              <div>
                <h3 className="text-xl text-foreground mb-2">Acesso</h3>
                <p className="text-muted-foreground mb-4">
                  Fácil acesso pela região metropolitana de Curitiba e por Mandirituba. Uma localização estratégica para aniversários, casamentos, festas de 15 anos, confraternizações e eventos corporativos em meio à natureza, com estacionamento amplo no local.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button
                    asChild
                    className="bg-primary hover:bg-primary/90"
                  >
                    <a
                      href={mapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Abrir no Google Maps
                    </a>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    className="border-primary text-primary hover:bg-primary hover:text-white"
                  >
                    <a
                      href={wazeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Abrir no Waze
                    </a>
                  </Button>
                </div>
              </div>
            </div>

            <div className="bg-muted/50 rounded-lg p-6 border border-border">
              <h3 className="text-lg text-foreground mb-3">Informações Importantes</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Estacionamento amplo e seguro no local</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Acesso facilitado para ônibus e vans</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Boa localização para convidados de Mandirituba, Fazenda Rio Grande e Curitiba</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
