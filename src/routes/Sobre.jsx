import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Users, Target, Medal, GraduationCap, Heart, Star, Award, BookOpen, Globe, Flag, Rocket } from 'lucide-react';
import { TextParallaxContentExample } from '../components/TextParallaxContent';
import Danilo from '../assets/danilo.jpg';
import Harley from '../assets/harley.jpg';
import Katielly from '../assets/katielly.jpg';
import Fabricio from '../assets/fabricio.jpg';

// Import new images from assets
import SobreImage1 from '../assets/campimg3.jpg';
import SobreImage4 from '../assets/slide1.jpg';
import CampImage from '../assets/campimg2.jpg';

const team = [
  {
    name: "Danilo Castro",
    role: "Fundador e Head Coach",
    image: Danilo,
    description: "Fundador da D14 Basketball Academy, com mais de 15 anos de experiência no desenvolvimento de atletas. Sua visão inovadora e metodologia única transformaram a academia em um centro de excelência."
  },
  {
    name: "Harley Fadel",
    role: "Diretor Técnico",
    image: Harley,
    description: "Ex-atleta formado nos EUA, retornou ao Brasil para se juntar à D14. Sua experiência internacional traz uma perspectiva única ao desenvolvimento dos atletas."
  },
  {
    name: "Katielly Santana",
    role: "Preparadora Física",
    image: Katielly,
    description: "Especialista em preparação física para basquete, desenvolve programas personalizados para maximizar o desempenho dos atletas."
  },
  {
    name: "Fabricio Moraes",
    role: "Coach de Desenvolvimento",
    image: Fabricio,
    description: "Focado no desenvolvimento técnico individual, trabalha para aperfeiçoar as habilidades específicas de cada atleta."
  }
];

export function Sobre() {
    return (
    <div className="bg-white">
      <TextParallaxContentExample />

      {/* Parceria e Desenvolvimento */}
      <section className="py-24 relative overflow-hidden bg-black">
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
            className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-6">
                <Star className="h-8 w-8 text-[#54AE21]" />
                <h2 className="text-3xl font-bold text-white">Parceria e Desenvolvimento</h2>
              </div>
              <div className="space-y-6 text-lg text-gray-300">
                <p>
                  A história da D14 ganhou um novo capítulo quando Harley Fadel, após sua formação nos Estados Unidos,
                  retornou ao Brasil trazendo consigo uma bagagem única de experiências e conhecimentos.
                </p>
                <p>
                  Reconhecendo o potencial de unir forças, Danilo Castro convidou Harley para se juntar à D14,
                  uma decisão que marcou o início de uma parceria transformadora para a academia.
                </p>
                <p>
                  A combinação da metodologia inovadora de Danilo com a experiência internacional de Harley
                  criou um ambiente único de desenvolvimento para nossos atletas.
                </p>
              </div>
            </motion.div>
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <img
                src={SobreImage4}
                alt="Parceria e Desenvolvimento"
                className="rounded-lg shadow-xl"
              />
              <div className="absolute -right-4 bottom-0 w-1 h-32 bg-gradient-to-t from-[#54AE21] to-transparent" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Metodologia */}
      <section className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center justify-center gap-2 mb-4">
              <BookOpen className="h-8 w-8 text-[#54AE21]" />
              <h2 className="text-4xl font-bold">Nossa Metodologia</h2>
            </div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Um sistema único que combina desenvolvimento técnico, tático e pessoal
              para formar atletas completos.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Target,
                title: "Desenvolvimento Progressivo",
                description: "Programa estruturado em níveis que acompanha a evolução individual."
              },
              {
                icon: Users,
                title: "Abordagem Holística",
                description: "Foco no desenvolvimento técnico, físico e mental do atleta."
              },
              {
                icon: Award,
                title: "Excelência Técnica",
                description: "Padrões rigorosos de qualidade em todos os aspectos do treinamento."
              }
            ].map((item, index) => (
              <motion.div
                key={item.title}
                className="bg-white p-8 rounded-lg shadow-lg relative overflow-hidden group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#54AE21]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="bg-[#54AE21]/10 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                  <item.icon className="h-6 w-6 text-[#54AE21]" />
                </div>
                <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Valores */}
      <section className="py-24 bg-black relative overflow-hidden">
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
              <Heart className="h-8 w-8 text-[#54AE21]" />
              <h2 className="text-4xl font-bold text-white">Nossos Valores</h2>
            </div>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Princípios que guiam nossa academia e moldam o desenvolvimento de nossos atletas.
            </p>
                        </motion.div>
                        
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Medal,
                title: "Excelência",
                description: "Buscamos a excelência em tudo que fazemos, desde o treinamento até o desenvolvimento pessoal."
              },
              {
                icon: Heart,
                title: "Paixão",
                description: "Amor pelo esporte e dedicação ao desenvolvimento de cada atleta são nossa força motriz."
              },
              {
                icon: GraduationCap,
                title: "Educação",
                description: "Valorizamos o desenvolvimento acadêmico tanto quanto o atlético para formar cidadãos completos."
              }
            ].map((value, index) => (
              <motion.div
                key={value.title}
                className="bg-black border border-white/10 p-8 rounded-lg relative overflow-hidden group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#54AE21]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="bg-[#54AE21]/20 w-12 h-12 rounded-lg flex items-center justify-center mb-6 relative">
                  <value.icon className="h-6 w-6 text-[#54AE21]" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{value.title}</h3>
                <p className="text-gray-400">{value.description}</p>
              </motion.div>
            ))}
                        </div>
                    </div>
      </section>

      {/* A Trajetória de Danilo Castro */}
      <section className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div 
            className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <img
                src={SobreImage1}
                alt="Danilo Castro"
                className="rounded-lg shadow-xl"
              />
              <div className="absolute -left-4 bottom-0 w-1 h-32 bg-gradient-to-t from-[#54AE21] to-transparent" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-6">
                <Rocket className="h-8 w-8 text-[#54AE21]" />
                <h2 className="text-3xl font-bold">A Trajetória de Danilo Castro</h2>
              </div>
              <div className="space-y-6 text-lg text-gray-600">
                <p>
                  Com mais de 15 anos dedicados ao basquete, Danilo Castro construiu sua carreira
                  focando no desenvolvimento de jovens atletas e na criação de metodologias inovadoras.
                </p>
                <p>
                  Sua visão única sobre o desenvolvimento de atletas e sua capacidade de identificar
                  e nutrir talentos o levaram a fundar a D14 Basketball Academy.
                </p>
                <p>
                  Hoje, sua metodologia já formou dezenas de atletas que seguiram carreira nos
                  Estados Unidos, consolidando seu legado no basquete brasileiro.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Preparando Atletas para o Mundo */}
      <section className="py-24 bg-black relative overflow-hidden">
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
              <Globe className="h-8 w-8 text-[#54AE21]" />
              <h2 className="text-4xl font-bold text-white">Preparando Atletas para o Mundo</h2>
            </div>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Nossa missão é preparar atletas não apenas para o basquete, mas para a vida.
            </p>
                        </motion.div>
                        
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { number: "23", label: "Atletas nos EUA" },
              { number: "15", label: "Anos de Experiência" },
              { number: "100%", label: "Comprometimento" },
              { number: "4", label: "Coaches Especializados" }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                className="bg-black border border-white/10 p-8 rounded-lg text-center relative overflow-hidden group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#54AE21]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="text-4xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
                        </div>
                    </div>
      </section>

      {/* Competições e Crescimento */}
      <section className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div 
            className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-6">
                <Flag className="h-8 w-8 text-[#54AE21]" />
                <h2 className="text-3xl font-bold">Competições e Crescimento</h2>
              </div>
              <div className="space-y-6 text-lg text-gray-600">
                <p>
                  Participamos ativamente das principais competições de base do Brasil,
                  proporcionando aos nossos atletas experiências competitivas valiosas.
                </p>
                <p>
                  Nossa academia tem se destacado em torneios estaduais e nacionais,
                  consolidando nossa posição como referência no desenvolvimento de atletas.
                </p>
                <p>
                  O ambiente competitivo é fundamental para o crescimento dos atletas,
                  preparando-os para os desafios futuros em suas carreiras.
                </p>
              </div>
            </motion.div>
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <img
                src={CampImage}
                alt="Competições"
                className="rounded-lg shadow-xl"
              />
              <div className="absolute -right-4 bottom-0 w-1 h-32 bg-gradient-to-t from-[#54AE21] to-transparent" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Equipe */}
      <section id="nossa-equipe" className="py-24 bg-black relative overflow-hidden">
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
              <Users className="h-8 w-8 text-[#54AE21]" />
              <h2 className="text-4xl font-bold text-white">Nossa Equipe</h2>
                        </div>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Profissionais dedicados e apaixonados pelo desenvolvimento de atletas.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                className="bg-black border border-white/10 rounded-lg overflow-hidden group relative"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                    </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">{member.name}</h3>
                  <p className="text-[#54AE21] font-medium mb-4">{member.role}</p>
                  <p className="text-gray-400 text-sm">{member.description}</p>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Sobre;