import { Instagram, Phone, Mail, Heart, MapPin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-foreground text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-xl mb-4">Chácara Bostelmann Eventos</h3>
            <p className="text-white/70">
              Chácara para eventos e aniversários em Mandirituba, Paraná, com ambiente acolhedor para celebrações especiais.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <a href="#sobre" className="text-white/70 hover:text-white transition-colors">
                  Sobre Nós
                </a>
              </li>
              <li>
                <a href="#espacos" className="text-white/70 hover:text-white transition-colors">
                  Espaços
                </a>
              </li>
              <li>
                <a href="#seo-eventos" className="text-white/70 hover:text-white transition-colors">
                  Eventos
                </a>
              </li>
              <li>
                <a href="#faq" className="text-white/70 hover:text-white transition-colors">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#contato" className="text-white/70 hover:text-white transition-colors">
                  Contato
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl mb-4">Contato</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://wa.me/5541999999999"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-white/70 hover:text-white transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  (41) 99999-9999
                </a>
              </li>
              <li>
                <a
                  href="mailto:contato@chacarabostelmann.com.br"
                  className="flex items-center gap-2 text-white/70 hover:text-white transition-colors"
                >
                  <Mail className="w-5 h-5" />
                  contato@chacarabostelmann.com.br
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com/chacarabostelmanneventos"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-white/70 hover:text-white transition-colors"
                >
                  <Instagram className="w-5 h-5" />
                  @chacarabostelmanneventos
                </a>
              </li>
              <li className="flex items-start gap-2 text-white/70">
                <MapPin className="w-5 h-5 mt-0.5 shrink-0" />
                <span>Bostelmann Eventos, Mandirituba - PR, 83800-000</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/70 text-sm">
            © {new Date().getFullYear()} Chácara Bostelmann Eventos. Todos os direitos reservados.
          </p>
          <p className="text-white/70 text-sm flex items-center gap-1">
            Feito com <Heart className="w-4 h-4 fill-secondary text-secondary" /> em Mandirituba, PR
          </p>
        </div>
      </div>
    </footer>
  );
}
