import { motion } from 'motion/react';
import { useState } from 'react';
import { Phone, Mail, Instagram, Send, MessageCircle } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './ui/select';
import { FloralCorner, DelicateFlower, FloralDivider } from './DecorativeElements';

const CONTACT_FORM_URL = import.meta.env.VITE_CONTACT_FORM_URL;
const WHATSAPP_NUMBER = '5541999999999';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventType: '',
    date: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({
    type: null,
    message: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!CONTACT_FORM_URL) {
      setStatus({
        type: 'error',
        message: 'O formulário está temporariamente indisponível. Fale conosco pelo WhatsApp abaixo.',
      });
      return;
    }

    setIsSubmitting(true);
    setStatus({
      type: null,
      message: '',
    });

    try {
      const response = await fetch(CONTACT_FORM_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error(`Contact form request failed with ${response.status}`);
      }

      setStatus({
        type: 'success',
        message: 'Recebemos seu pedido de orçamento e vamos responder em breve por e-mail ou WhatsApp.',
      });

      setFormData({
        name: '',
        email: '',
        phone: '',
        eventType: '',
        date: '',
        message: '',
      });
    } catch (error) {
      console.error('Erro ao enviar formulário de contato:', error);
      setStatus({
        type: 'error',
        message: 'Não foi possível enviar agora. Tente novamente ou fale conosco pelo WhatsApp.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const whatsappMessage = `Olá! Gostaria de solicitar um orçamento para evento na Chácara Bostelmann em Mandirituba.

*Nome:* ${formData.name}
*E-mail:* ${formData.email}
*Telefone:* ${formData.phone}
*Tipo de Evento:* ${formData.eventType}
*Data Desejada:* ${formData.date}
*Mensagem:* ${formData.message}`;

  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(whatsappMessage)}`;

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section id="contato" className="py-20 lg:py-32 bg-background relative overflow-hidden">
      {/* Decorative Elements */}
      <FloralCorner className="top-10 right-10 text-primary" />
      <DelicateFlower className="bottom-20 left-10 text-secondary" />
      <FloralDivider className="top-20 left-20 text-primary" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-4xl text-foreground mb-4">Solicite seu Orçamento</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Fale conosco para solicitar orçamento para aniversário, casamento, festa de 15 anos, confraternização ou evento corporativo em Mandirituba, PR.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl text-foreground mb-6">Entre em Contato</h3>
              <p className="text-muted-foreground mb-8">
                Nossa equipe atende quem busca uma chácara para eventos em Mandirituba com estrutura para aniversários, festas de família, casamentos, confraternizações e celebrações especiais perto de Curitiba.
              </p>
            </div>

            {/* Contact Methods */}
            <div className="space-y-6">
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-lg bg-white hover:shadow-md transition-shadow border border-border group"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-foreground">WhatsApp</p>
                  <p className="text-muted-foreground">(41) 99999-9999</p>
                </div>
              </a>

              <a
                href="mailto:contato@chacarabostelmann.com.br"
                className="flex items-center gap-4 p-4 rounded-lg bg-white hover:shadow-md transition-shadow border border-border group"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-foreground">E-mail</p>
                  <p className="text-muted-foreground">contato@chacarabostelmann.com.br</p>
                </div>
              </a>

              <a
                href="https://instagram.com/chacarabostelmanneventos"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-lg bg-white hover:shadow-md transition-shadow border border-border group"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Instagram className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-foreground">Instagram</p>
                  <p className="text-muted-foreground">@chacarabostelmanneventos</p>
                </div>
              </a>
            </div>

            {/* Image */}
            <div className="hidden lg:block">
              <div className="overflow-hidden rounded-lg shadow-lg aspect-[16/10] bg-white">
                <img
                  src="/images/chacara-bostelmann-capa-home.png"
                  alt="Estrutura da Chácara Bostelmann para eventos em Mandirituba"
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-lg p-8 border border-border">
              <div className="space-y-6">
                <div>
                  <Label htmlFor="name">Nome Completo</Label>
                  <Input
                    id="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => handleChange('name', e.target.value)}
                    placeholder="Seu nome"
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label htmlFor="email">E-mail</Label>
                  <Input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => handleChange('email', e.target.value)}
                    placeholder="voce@exemplo.com"
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label htmlFor="phone">WhatsApp</Label>
                  <Input
                    id="phone"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => handleChange('phone', e.target.value)}
                    placeholder="(00) 00000-0000"
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label htmlFor="eventType">Tipo de Evento</Label>
                  <Select
                    value={formData.eventType}
                    onValueChange={(value) => handleChange('eventType', value)}
                  >
                    <SelectTrigger className="mt-2">
                      <SelectValue placeholder="Selecione o tipo de evento" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="casamento">Casamento</SelectItem>
                      <SelectItem value="aniversario">Aniversário</SelectItem>
                      <SelectItem value="festa-infantil">Festa Infantil</SelectItem>
                      <SelectItem value="15anos">Festa de 15 Anos</SelectItem>
                      <SelectItem value="bodas">Bodas</SelectItem>
                      <SelectItem value="corporativo">Evento Corporativo</SelectItem>
                      <SelectItem value="confraternizacao">Confraternização</SelectItem>
                      <SelectItem value="outro">Outro</SelectItem>
                    </SelectContent>
                  </Select>
                  <input type="hidden" name="eventType" value={formData.eventType} required />
                </div>

                <div>
                  <Label htmlFor="date">Data Desejada</Label>
                  <Input
                    id="date"
                    type="date"
                    required
                    value={formData.date}
                    onChange={(e) => handleChange('date', e.target.value)}
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label htmlFor="message">Mensagem</Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => handleChange('message', e.target.value)}
                    placeholder="Conte-nos o tipo de evento, número de convidados e o que você procura..."
                    rows={4}
                    className="mt-2"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-secondary hover:bg-secondary/90"
                  size="lg"
                  disabled={isSubmitting}
                >
                  <Send className="w-5 h-5 mr-2" />
                  {isSubmitting ? 'Enviando...' : 'Enviar Solicitação'}
                </Button>

                {status.type ? (
                  <p
                    className={`text-sm ${
                      status.type === 'success' ? 'text-green-700' : 'text-red-600'
                    }`}
                  >
                    {status.message}
                  </p>
                ) : null}

                <Button
                  type="button"
                  variant="outline"
                  className="w-full"
                  size="lg"
                  asChild
                >
                  <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="w-5 h-5 mr-2" />
                    Falar pelo WhatsApp
                  </a>
                </Button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
