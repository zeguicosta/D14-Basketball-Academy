import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingBasket as Basketball, Star, Dumbbell, Users, Target, Clock, Calendar } from 'lucide-react';

export function Treinamentos() {
    return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative py-28 bg-black">
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
            style={{
              backgroundImage: 'url("https://images.unsplash.com/photo-1519861531473-9200262188bf?q=80&w=2071")',
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black via-black/95 to-black" />
        </div>

        {/* Decorative elements */}
        <motion.div 
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-32 bg-gradient-to-b from-transparent via-[#54AE21] to-transparent" />
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1 h-32 bg-gradient-to-b from-transparent via-[#54AE21] to-transparent" />
          <div className="absolute top-0 left-1/4 w-24 h-24 bg-[#54AE21]/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-32 h-32 bg-[#54AE21]/5 rounded-full blur-3xl" />
        </motion.div>

        <div className="relative container mx-auto px-4">
          <motion.div 
            className="max-w-3xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div 
              className="flex items-center gap-2 mb-8"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="w-12 h-[2px] bg-[#54AE21]" />
              <span className="text-[#54AE21] font-medium">Nossos Programas</span>
            </motion.div>
            <motion.h1 
              className="text-4xl md:text-5xl font-bold text-white mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Treinamentos <span className="text-[#54AE21]">Personalizados</span>
            </motion.h1>
            <motion.p 
              className="text-xl text-gray-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Escolha o programa que melhor se adapta ao seu nível e objetivos.
              Nossa metodologia exclusiva garante seu desenvolvimento contínuo.
            </motion.p>
          </motion.div>
        </div>
      </div>

      {/* Training Programs */}
      <div className="py-24 relative overflow-hidden">
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
          {/* Collective Training */}
          <motion.div 
            className="mb-32 relative"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="absolute -left-4 top-0 w-1 h-32 bg-gradient-to-b from-[#54AE21] to-transparent" />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <Basketball className="h-8 w-8 text-[#54AE21]" />
                  <h2 className="text-3xl font-bold">Treino Coletivo</h2>
                </div>
                <p className="text-gray-600 text-lg mb-8">
                  Desenvolva suas habilidades técnicas e táticas em um ambiente competitivo e colaborativo.
                  Nossos treinos coletivos são projetados para simular situações reais de jogo enquanto
                  aprimoram sua compreensão do basquete.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <motion.div 
                    className="flex items-start gap-4 group"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="bg-[#54AE21]/10 p-3 rounded-lg group-hover:bg-[#54AE21]/20 transition-colors">
                      <Users className="h-6 w-6 text-[#54AE21]" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Grupos Equilibrados</h3>
                      <p className="text-gray-600">Times organizados por nível técnico</p>
                    </div>
                  </motion.div>
                  <motion.div 
                    className="flex items-start gap-4 group"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="bg-[#54AE21]/10 p-3 rounded-lg group-hover:bg-[#54AE21]/20 transition-colors">
                      <Target className="h-6 w-6 text-[#54AE21]" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Foco em Fundamentos</h3>
                      <p className="text-gray-600">Desenvolvimento técnico progressivo</p>
                    </div>
                  </motion.div>
                </div>
                <motion.button 
                  className="bg-[#54AE21] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#408718] transition-colors relative overflow-hidden group"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="relative z-10">Agende uma Aula Experimental</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000" />
                </motion.button>
              </motion.div>
              <motion.div 
                className="relative"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div className="absolute -right-4 bottom-0 w-1 h-32 bg-gradient-to-t from-[#54AE21] to-transparent" />
                <img
                  src="https://images.unsplash.com/photo-1519861531473-9200262188bf?q=80&w=2071"
                  alt="Treino Coletivo"
                  className="rounded-lg shadow-xl"
                />
                <motion.div 
                  className="absolute -bottom-6 -right-6 bg-white p-6 rounded-lg shadow-lg"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-center gap-4 mb-4">
                    <Clock className="h-6 w-6 text-[#54AE21]" />
                    <div>
                      <p className="font-semibold">Duração</p>
                      <p className="text-gray-600">90 minutos</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <Calendar className="h-6 w-6 text-[#54AE21]" />
                    <div>
                      <p className="font-semibold">Frequência</p>
                      <p className="text-gray-600">1x por semana</p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
                </motion.div>

          {/* Camps */}
          <motion.div 
            className="mb-32 relative"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="absolute -right-4 top-0 w-1 h-32 bg-gradient-to-b from-[#54AE21] to-transparent" />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div 
                className="order-2 lg:order-1 relative"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div className="absolute -left-4 bottom-0 w-1 h-32 bg-gradient-to-t from-[#54AE21] to-transparent" />
                <img
                  src="https://images.unsplash.com/photo-1519311965067-36d3e5f33d39?q=80&w=2071"
                  alt="Basketball Camps"
                  className="rounded-lg shadow-xl"
                />
                <motion.div 
                  className="absolute -bottom-6 -left-6 bg-white p-6 rounded-lg shadow-lg"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-center gap-4 mb-4">
                    <Clock className="h-6 w-6 text-[#54AE21]" />
                    <div>
                      <p className="font-semibold">Duração</p>
                      <p className="text-gray-600">1 semana</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <Calendar className="h-6 w-6 text-[#54AE21]" />
                    <div>
                      <p className="font-semibold">Próximo Camp</p>
                      <p className="text-gray-600">Em breve</p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
              <motion.div 
                className="order-1 lg:order-2"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <Star className="h-8 w-8 text-[#54AE21]" />
                  <h2 className="text-3xl font-bold">Camps</h2>
                </div>
                <p className="text-gray-600 text-lg mb-8">
                  Uma experiência intensiva de desenvolvimento técnico e tático.
                  Nossos camps são eventos especiais que reúnem atletas dedicados
                  para uma semana de treinamento focado e aprendizado acelerado.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <motion.div 
                    className="flex items-start gap-4 group"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="bg-[#54AE21]/10 p-3 rounded-lg group-hover:bg-[#54AE21]/20 transition-colors">
                      <Users className="h-6 w-6 text-[#54AE21]" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Mentoria Especial</h3>
                      <p className="text-gray-600">Acompanhamento individualizado</p>
                    </div>
                  </motion.div>
                  <motion.div 
                    className="flex items-start gap-4 group"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="bg-[#54AE21]/10 p-3 rounded-lg group-hover:bg-[#54AE21]/20 transition-colors">
                      <Target className="h-6 w-6 text-[#54AE21]" />
                    </div>
                <div>
                      <h3 className="font-semibold mb-2">Imersão Total</h3>
                      <p className="text-gray-600">Desenvolvimento intensivo</p>
                    </div>
                  </motion.div>
                </div>
                <motion.button 
                  className="bg-[#54AE21] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#408718] transition-colors relative overflow-hidden group"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="relative z-10">Inscreva-se para o Próximo Camp</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000" />
                </motion.button>
              </motion.div>
            </div>
          </motion.div>

          {/* Personal Training */}
          <motion.div
            className="relative"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="absolute -left-4 top-0 w-1 h-32 bg-gradient-to-b from-[#54AE21] to-transparent" />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <Dumbbell className="h-8 w-8 text-[#54AE21]" />
                  <h2 className="text-3xl font-bold">Treino Personalizado</h2>
                </div>
                <p className="text-gray-600 text-lg mb-8">
                  Um programa exclusivo desenvolvido especialmente para você.
                  Com acompanhamento individual, identificamos suas necessidades
                  específicas e trabalhamos para alcançar seus objetivos pessoais.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <motion.div 
                    className="flex items-start gap-4 group"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="bg-[#54AE21]/10 p-3 rounded-lg group-hover:bg-[#54AE21]/20 transition-colors">
                      <Users className="h-6 w-6 text-[#54AE21]" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Atenção Individual</h3>
                      <p className="text-gray-600">Foco total no seu desenvolvimento</p>
                    </div>
                  </motion.div>
                  <motion.div 
                    className="flex items-start gap-4 group"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="bg-[#54AE21]/10 p-3 rounded-lg group-hover:bg-[#54AE21]/20 transition-colors">
                      <Target className="h-6 w-6 text-[#54AE21]" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Programa Exclusivo</h3>
                      <p className="text-gray-600">Adaptado às suas necessidades</p>
                    </div>
                  </motion.div>
                </div>
                <motion.button 
                  className="bg-[#54AE21] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#408718] transition-colors relative overflow-hidden group"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="relative z-10">Agende uma Avaliação</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000" />
                </motion.button>
              </motion.div>
              <motion.div 
                className="relative"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div className="absolute -right-4 bottom-0 w-1 h-32 bg-gradient-to-t from-[#54AE21] to-transparent" />
                <img
                  src="https://images.unsplash.com/photo-1574623452334-1e0ac2b3ccb4?q=80&w=2071"
                  alt="Treino Personalizado"
                  className="rounded-lg shadow-xl"
                />
                <motion.div 
                  className="absolute -bottom-6 -right-6 bg-white p-6 rounded-lg shadow-lg"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-center gap-4 mb-4">
                    <Clock className="h-6 w-6 text-[#54AE21]" />
                    <div>
                      <p className="font-semibold">Duração</p>
                      <p className="text-gray-600">Personalizado</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <Calendar className="h-6 w-6 text-[#54AE21]" />
                    <div>
                      <p className="font-semibold">Frequência</p>
                      <p className="text-gray-600">Flexível</p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

// Add default export if this is the main component for the route
export default Treinamentos;