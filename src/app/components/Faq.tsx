import { motion } from 'motion/react';
import { FloralCorner, FloralDivider } from './DecorativeElements';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './ui/accordion';

const faqs = [
  {
    question: 'Onde fica a Chácara Bostelmann em Mandirituba?',
    answer:
      'A Chácara Bostelmann está em Mandirituba, no Paraná, em localização com acesso prático para convidados da cidade e da região metropolitana de Curitiba. No site você encontra o link direto para abrir a rota no Google Maps.',
  },
  {
    question: 'A chácara atende aniversários e festas de 15 anos em Mandirituba?',
    answer:
      'Sim. O espaço é uma opção para quem procura chácara para aniversário em Mandirituba, incluindo aniversários infantis, festas adultas e festas de 15 anos com ambiente para recepção, fotos e confraternização.',
  },
  {
    question: 'É um espaço indicado para casamento em Mandirituba?',
    answer:
      'Sim. A chácara atende casamentos, mini weddings e celebrações especiais que valorizam contato com a natureza, cenário para registros e estrutura para receber convidados com conforto.',
  },
  {
    question: 'A Chácara Bostelmann recebe eventos corporativos e confraternizações?',
    answer:
      'Recebe sim. Empresas que buscam evento corporativo em Mandirituba ou um local para confraternização perto de Curitiba podem utilizar o espaço para encontros, comemorações e reuniões em ambiente mais reservado.',
  },
  {
    question: 'O espaço tem estacionamento e área verde?',
    answer:
      'A estrutura da chácara conta com estacionamento no local, área verde e espaço versátil para diferentes formatos de evento. Isso ajuda tanto na experiência dos convidados quanto na logística do evento.',
  },
  {
    question: 'Como solicitar orçamento para evento em Mandirituba?',
    answer:
      'Você pode solicitar orçamento pelo formulário do site, pelo WhatsApp ou pelas redes sociais da chácara. Informar a data desejada, o tipo de evento e a quantidade estimada de convidados ajuda a acelerar o atendimento.',
  },
];

export function Faq() {
  return (
    <section id="faq" className="py-20 lg:py-28 bg-background relative overflow-hidden">
      <FloralCorner className="top-10 left-10 text-primary" />
      <FloralCorner className="bottom-10 right-10 text-secondary" />

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
            Perguntas frequentes sobre eventos em Mandirituba
          </h2>
          <p className="text-lg text-muted-foreground">
            Respostas para dúvidas comuns de quem busca chácara para eventos em Mandirituba, salão de festas,
            espaço para casamento, aniversário, 15 anos e confraternização perto de Curitiba.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto rounded-2xl border border-border bg-white p-6 sm:p-8 shadow-sm"
        >
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={faq.question} value={`faq-${index}`}>
                <AccordionTrigger className="text-base sm:text-lg text-foreground hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-base text-muted-foreground leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
