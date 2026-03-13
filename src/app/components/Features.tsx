import { motion } from 'motion/react';
import { Users, Award, Calendar, CheckCircle } from 'lucide-react';

const stats = [
  {
    icon: Users,
    value: '500+',
    label: 'Convidados em eventos sociais',
  },
  {
    icon: Award,
    value: '100+',
    label: 'Celebrações em Mandirituba',
  },
  {
    icon: Calendar,
    value: '4+',
    label: 'Anos recebendo eventos',
  },
  {
    icon: CheckCircle,
    value: '100%',
    label: 'Foco na experiência do cliente',
  },
];

export function Features() {
  return (
    <section className="py-16 lg:py-24 bg-primary text-white relative overflow-hidden">
      {/* Decorative Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="text-center"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/10 backdrop-blur-sm mb-4">
                <stat.icon className="w-8 h-8" />
              </div>
              <p className="text-3xl lg:text-4xl mb-2">{stat.value}</p>
              <p className="text-white/80 text-sm lg:text-base">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
