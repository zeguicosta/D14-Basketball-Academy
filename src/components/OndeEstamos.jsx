import { motion } from 'framer-motion';
import { MapPin, Clock } from 'lucide-react';

export default function OndeEstamos() {
  return (
    <section id="onde-estamos" className="py-24 bg-black relative overflow-hidden">
      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <div className="absolute right-0 top-0 w-96 h-96 bg-[#54AE21]/5 rounded-full blur-3xl" />
        <div className="absolute left-0 bottom-0 w-96 h-96 bg-[#54AE21]/5 rounded-full blur-3xl" />
      </motion.div>

      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <MapPin className="h-8 w-8 text-[#54AE21]" />
            <h2 className="text-4xl font-bold text-white">Onde estamos</h2>
          </div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A D14 atende em mais de uma unidade. Escolha a que for melhor para você.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Unidade Paraíso */}
          <motion.a
            href="https://maps.app.goo.gl/8FhXk4yL9p7Z6fWd8"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-black border border-white/10 p-8 rounded-lg hover:border-[#54AE21]/50 transition-colors group block text-left"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-[#54AE21]/20 w-12 h-12 rounded-lg flex items-center justify-center">
                <MapPin className="h-6 w-6 text-[#54AE21]" />
              </div>
              <h3 className="text-xl font-bold text-white">Unidade Paraíso</h3>
            </div>
            <p className="text-gray-400 mb-2">Av. Bernardino de Campos, 79</p>
            <p className="text-gray-500 text-sm mb-4">Paraíso, São Paulo - SP</p>
            <p className="text-white/90 font-medium flex items-center gap-2">
              <Clock className="h-4 w-4 text-[#54AE21]" />
              Treinos: Sábados, 9h às 12h
            </p>
          </motion.a>

          {/* Nova filial */}
          <motion.div
            className="bg-black border border-white/10 p-8 rounded-lg relative overflow-hidden text-left"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-[#54AE21]/20 w-12 h-12 rounded-lg flex items-center justify-center">
                <Clock className="h-6 w-6 text-[#54AE21]" />
              </div>
              <h3 className="text-xl font-bold text-white">Nova filial</h3>
            </div>
            <p className="text-gray-400 mb-4">Endereço em breve</p>
            <p className="text-white/90 font-medium flex items-center gap-2">
              <Clock className="h-4 w-4 text-[#54AE21]" />
              Treinos: Quinta-feira, 17h às 19h
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
