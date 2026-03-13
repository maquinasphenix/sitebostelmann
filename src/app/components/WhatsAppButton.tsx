import { MessageCircle } from 'lucide-react';
import { motion } from 'motion/react';

export function WhatsAppButton() {
  const whatsappUrl = 'https://wa.me/5541999999999?text=Olá! Gostaria de mais informações sobre a Chácara Bostelmann Eventos.';

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] hover:bg-[#20BA5A] text-white rounded-full shadow-lg flex items-center justify-center transition-colors group"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 0.5, type: 'spring', stiffness: 200 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      aria-label="Fale conosco no WhatsApp"
    >
      <MessageCircle className="w-7 h-7" />
      
      {/* Pulse effect */}
      <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-75"></span>
    </motion.a>
  );
}
