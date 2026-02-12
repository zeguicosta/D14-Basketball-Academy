import { motion } from 'framer-motion';
import { MapPin, Clock, Instagram } from 'lucide-react';
import { TextReveal } from './ui/text-reveal-animation';
import LogoD14 from '../assets/logo.png';
import LogoMixArena from '../assets/mixarena.png';

const D14_INSTAGRAM_URL = 'https://www.instagram.com/d14basketball/';
const MIXARENA_INSTAGRAM_URL = 'https://www.instagram.com/mixarena/';

export default function OndeEstamos() {
  return (
    <section id="onde-estamos" className="py-20 md:py-28 bg-site relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <div className="flex items-start justify-center gap-2 mb-4">
            <MapPin className="h-8 w-8 text-[#54AE21] shrink-0 mt-0.5 md:mt-1" />
            <h2 className="text-4xl md:text-5xl font-medium text-[#F4F4F5] leading-tight">
              <TextReveal word="Onde Estamos" className="text-4xl md:text-5xl font-medium text-[#F4F4F5] block" />
            </h2>
          </div>
          <p className="text-[#F4F4F5]/90 max-w-2xl mx-auto">
            A D14 atende em mais de uma unidade. Escolha a que for melhor para você.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            viewport={{ once: true, margin: "-50px" }}
          >
          <a
            href="https://www.google.com/maps/search/?api=1&query=Av.+Bernardino+de+Campos+79+Paraíso+São+Paulo+SP"
            target="_blank"
            rel="noopener noreferrer"
            className="relative overflow-hidden bg-[#111] backdrop-blur-sm border-2 border-white/20 p-8 rounded-2xl shadow-[0_4px_24px_-4px_rgba(0,0,0,0.35)] hover:border-[#54AE21]/45 hover:shadow-[0_12px_32px_-8px_rgba(0,0,0,0.3)] transition-all duration-300 group block text-left !text-[#F4F4F5]"
          >
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#54AE21]/25 to-transparent group-hover:via-[#54AE21]/70 transition-colors duration-300" />
            <div className="absolute inset-0 bg-gradient-to-br from-[#54AE21]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
            <div className="flex items-center justify-between gap-3 mb-4 relative">
              <div className="flex items-center gap-3 min-w-0">
                <img
                  src={LogoD14}
                  alt="D14 Basketball Academy"
                  className="h-14 w-auto object-contain max-w-[160px]"
                />
                <div className="min-w-0">
                  <h3 className="text-lg font-medium text-[#F4F4F5]/92">Unidade Paraíso</h3>
                  <p className="text-[#F4F4F5]/72 text-sm">Av. Bernardino de Campos, 79</p>
                </div>
              </div>
              <a
                href={D14_INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="shrink-0 p-2 rounded-lg text-[#F4F4F5]/80 hover:text-[#54AE21] hover:bg-white/5 transition-colors"
                aria-label="Instagram D14"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
            <p className="text-[#F4F4F5]/72 text-sm mb-4">Paraíso, São Paulo - SP</p>
            <p className="text-[#F4F4F5]/78 font-medium flex items-center gap-2 text-sm relative">
              <Clock className="h-4 w-4 text-[#54AE21]" />
              Treinos: Sábados, 9h às 12h
            </p>
          </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            viewport={{ once: true, margin: "-50px" }}
          >
          <a
            href="https://maps.app.goo.gl/e7CH76B9ZyYtn5MK7"
            target="_blank"
            rel="noopener noreferrer"
            className="relative overflow-hidden bg-[#111] backdrop-blur-sm border-2 border-white/20 p-8 rounded-2xl shadow-[0_4px_24px_-4px_rgba(0,0,0,0.35)] hover:border-[#54AE21]/45 hover:shadow-[0_12px_32px_-8px_rgba(0,0,0,0.3)] transition-all duration-300 group block text-left !text-[#F4F4F5]"
          >
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#54AE21]/25 to-transparent group-hover:via-[#54AE21]/70 transition-colors duration-300" />
            <div className="absolute inset-0 bg-gradient-to-br from-[#54AE21]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
            <div className="flex items-center justify-between gap-3 mb-4 relative">
              <div className="flex items-center gap-3 min-w-0">
                <img
                  src={LogoMixArena}
                  alt="Mix Arena"
                  className="h-6 w-auto object-contain max-w-[72px]"
                />
                <div className="min-w-0">
                  <h3 className="text-lg font-medium text-[#F4F4F5]/92">Mix Arena</h3>
                  <p className="text-[#F4F4F5]/72 text-sm">Av. Prof. Celestino Bourroul, 753</p>
                </div>
              </div>
              <a
                href={MIXARENA_INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="shrink-0 p-2 rounded-lg text-[#F4F4F5]/80 hover:text-[#54AE21] hover:bg-white/5 transition-colors"
                aria-label="Instagram Mix Arena"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
            <p className="text-[#F4F4F5]/72 text-sm mb-4">Limão, São Paulo - SP</p>
            <p className="text-[#F4F4F5]/78 font-medium flex items-center gap-2 text-sm relative">
              <Clock className="h-4 w-4 text-[#54AE21]" />
              Treinos: Quinta-feira, 17h às 19h
            </p>
          </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
