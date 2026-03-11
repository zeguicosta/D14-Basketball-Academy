import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Users, 
  Target, 
  Clock, 
  Calendar, 
  Trophy, 
  Award, 
  Zap, 
  Shield, 
  Star, 
  Dumbbell, 
  Activity, 
  Target as TargetIcon, 
  Users as UsersIcon, 
  Award as AwardIcon,
  Users as UsersGroup,
  Flame,
  UserCheck,
  HelpCircle,
  ChevronDown,
  Target as TargetIcon2
} from 'lucide-react';
// Import images from assets folder
// import treinoimg from '../assets/treinoimg.jpg';
import treinoimg from '../assets/treinocoletivo.jpg';
import grupoD14 from '../assets/grupod14.jpg';
import img1 from '../assets/img1.jpg';
// import img2 from '../assets/img2.jpg';
import img2 from '../assets/treinopersonalizado.jpg';
import img6 from '../assets/img6.jpg';
import FAQAccordion from '../components/Accordion';
import OndeEstamos from '../components/OndeEstamos';
import { InteractiveHoverButton } from '../components/ui/interactive-hover-button';
import { TextReveal } from '../components/ui/text-reveal-animation';
import { faqData } from '../constants/faqData';
import FloatingPhone from '../components/FloatingPhone';
import Timer from '../components/Timer';
import LogoPreta from '../assets/logopreta.png';
import LogoBranco from '../assets/logo.png';
import LogoGrande from '../assets/logogrande.png';

// Import new gallery images
import slide1 from '../assets/slide1.jpg';
import slide2 from '../assets/slide2.jpg';
import slide8 from '../assets/slide8.jpg';
import sobre1 from '../assets/sobre1.jpg';
import sobre3 from '../assets/sobre3.jpg';
import sobre4 from '../assets/sobre4.jpg';
import tr2 from '../assets/tr2.jpg';
import tr3 from '../assets/tr3.jpg';
import tr5 from '../assets/tr5.jpg';

// Lightbox Imports
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

// Prepare slides data for lightbox
const galleryImages = [slide1, slide2, slide8, sobre1, sobre4, sobre3, tr2, tr3, tr5];
const slides = galleryImages.map(src => ({ src }));

export function Treinamentos() {
    // State for lightbox
    const [openLightbox, setOpenLightbox] = useState(false);
    const [lightboxIndex, setLightboxIndex] = useState(0);

    // Function to open WhatsApp link
    const openWhatsApp = (message) => {
      const baseUrl = 'https://api.whatsapp.com/send/?phone=5511973262444&text=';
      const encodedMessage = encodeURIComponent(message);
      const url = `${baseUrl}${encodedMessage}&type=phone_number&app_absent=0`;
      window.open(url, '_blank', 'noopener,noreferrer');
    };

    // Function to scroll to the programs section
    const scrollToPrograms = () => {
      const programsSection = document.getElementById('training-programs');
      if (programsSection) {
        programsSection.scrollIntoView({ behavior: 'smooth' });
      }
    };

    return (
    <div className="bg-site">
      {/* Hero */}
      <div className="relative min-h-screen overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${grupoD14})`,
          }}
        >
          <div className="absolute inset-0 bg-neutral-950/80" />
        </div>
        <div className="relative container mx-auto px-4 min-h-screen flex items-center justify-center text-center z-10">
          <div className="max-w-3xl">
            <motion.div
              className="text-center mb-8"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.15, ease: "easeOut" }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#54AE21]/10 rounded-full">
                <TargetIcon2 className="h-5 w-5 text-[#54AE21]" />
                <span className="font-medium text-[#54AE21]">Modalidades</span>
              </div>
            </motion.div>
            <h1 className="text-4xl md:text-6xl font-medium text-[#F4F4F5] mb-6 leading-tight">
              <TextReveal word="Explore Nossos " className="text-4xl md:text-6xl font-medium text-[#F4F4F5] leading-tight inline-block" delayBase={0.2} />
              <TextReveal word="Treinamentos" className="text-4xl md:text-6xl font-medium text-[#54AE21] leading-tight inline-block" delayBase={0.35} />
            </h1>
            <motion.p
              className="text-base md:text-lg text-[#F4F4F5]/90 max-w-2xl mx-auto mb-10"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease: "easeOut", delay: 0.5 }}
            >
              Escolha o programa que melhor se adapta ao seu nível e objetivos. Nossa metodologia exclusiva garante seu desenvolvimento contínuo.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, ease: "easeOut", delay: 0.65 }}
            >
            <motion.button
              onClick={scrollToPrograms}
              className="inline-flex items-center justify-center px-6 py-3 text-base font-medium rounded-md text-white hover:text-gray-200 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Ver Treinos
              <motion.div
                animate={{ y: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              >
                <ChevronDown className="ml-2 h-5 w-5" />
              </motion.div>
            </motion.button>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Programas */}
      <div id="training-programs" className="py-20 md:py-28 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-6">
          {/* Treino Coletivo */}
          <motion.div
            className="mb-24 md:mb-32 relative"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl md:text-4xl font-medium text-gray-900 mb-6">Treino Coletivo</h2>
                <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-8">
                  Acreditamos que o trabalho em equipe é fundamental para o sucesso no basquete. Nosso programa Coletivo combina treinamento intensivo de fundamentos (arremesso, passe, drible, defesa) com desafios e jogos simulados que promovem o entrosamento entre os jogadores. Junte-se ao nosso Coletivo e leve seu desempenho para o próximo nível!
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                  <motion.div
                    className="border-2 border-black/8 rounded-2xl p-4 bg-white flex items-start gap-3 hover:border-[#54AE21]/35 transition-colors shadow-sm"
                    whileHover={{ y: -2 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="bg-[#54AE21]/15 w-10 h-10 rounded-xl flex items-center justify-center shrink-0">
                      <UsersIcon className="h-5 w-5 text-[#54AE21]" />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900 mb-1">Grupos Equilibrados</h3>
                      <p className="text-gray-600 text-sm">Times organizados por nível técnico</p>
                    </div>
                  </motion.div>
                  <motion.div
                    className="border-2 border-black/8 rounded-2xl p-4 bg-white flex items-start gap-3 hover:border-[#54AE21]/35 transition-colors shadow-sm"
                    whileHover={{ y: -2 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="bg-[#54AE21]/15 w-10 h-10 rounded-xl flex items-center justify-center shrink-0">
                      <TargetIcon className="h-5 w-5 text-[#54AE21]" />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900 mb-1">Foco em Fundamentos</h3>
                      <p className="text-gray-600 text-sm">Desenvolvimento técnico progressivo</p>
                    </div>
                  </motion.div>
                </div>
                <div
                  role="button"
                  tabIndex={0}
                  onClick={() => openWhatsApp('Olá, gostaria de mais informações sobre o Treino Coletivo.')}
                  onKeyDown={(e) => e.key === 'Enter' && openWhatsApp('Olá, gostaria de mais informações sobre o Treino Coletivo.')}
                  className="inline-block cursor-pointer"
                >
                  <motion.div
                    className="relative inline-block rounded-full border-2 border-[#6bc429] overflow-hidden shadow-[0_8px_28px_-4px_rgba(84,174,33,0.25)] hover:border-[#7dd63a] hover:shadow-[0_20px_40px_-12px_rgba(84,174,33,0.35)] transition-all duration-300 group/btn"
                  >
                    <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#54AE21] to-transparent z-10 pointer-events-none rounded-full" />
                    <div className="absolute inset-0 bg-gradient-to-br from-[#54AE21]/10 to-transparent opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300 pointer-events-none" />
                    <InteractiveHoverButton
                      text="Agende uma Aula Experimental"
                      inverted
                      className="relative w-auto min-w-[280px] sm:min-w-[320px] text-sm pl-8 pr-12 py-4 border-0"
                    />
                  </motion.div>
                </div>
              </motion.div>
              <motion.div
                className="relative"
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                viewport={{ once: true }}
              >
                <img src={treinoimg} alt="Treino Coletivo" className="rounded-2xl w-full object-cover shadow-[0_8px_32px_-8px_rgba(0,0,0,0.12)]" />
                <motion.div
                  className="relative mt-6 mx-auto max-w-sm lg:absolute lg:-bottom-6 lg:-right-6 lg:mt-0 lg:mx-0 lg:max-w-none border-2 border-black/8 rounded-2xl p-6 bg-white shadow-lg"
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, ease: "easeOut", delay: 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="bg-[#54AE21]/15 w-10 h-10 rounded-xl flex items-center justify-center">
                      <Clock className="h-5 w-5 text-[#54AE21]" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">Duração</p>
                      <p className="text-gray-600 text-sm">4 horas</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="bg-[#54AE21]/15 w-10 h-10 rounded-xl flex items-center justify-center">
                      <Calendar className="h-5 w-5 text-[#54AE21]" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">Frequência</p>
                      <p className="text-gray-600 text-sm">1x por semana</p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>

          {/* Camps */}
          <motion.div
            className="mb-24 md:mb-32 relative"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <motion.div
                className="order-2 lg:order-1 relative"
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                viewport={{ once: true }}
              >
                <div className="aspect-video rounded-2xl overflow-hidden shadow-[0_8px_32px_-8px_rgba(0,0,0,0.12)]">
                  <iframe
                    className="w-full h-full"
                    src="https://www.youtube.com/embed/D4aF3BwAh6M?start=16"
                    title="D14 Basketball Academy - Camp"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  />
                </div>
                <motion.div
                  className="relative mt-6 mx-auto max-w-sm lg:absolute lg:-bottom-6 lg:-left-6 lg:mt-0 lg:mx-0 lg:max-w-none border-2 border-black/8 rounded-2xl p-6 bg-white shadow-lg"
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, ease: "easeOut", delay: 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="bg-[#54AE21]/15 w-10 h-10 rounded-xl flex items-center justify-center">
                      <Clock className="h-5 w-5 text-[#54AE21]" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">Duração</p>
                      <p className="text-gray-600 text-sm">1 semana</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="bg-[#54AE21]/15 w-10 h-10 rounded-xl flex items-center justify-center">
                      <Calendar className="h-5 w-5 text-[#54AE21]" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">Próximo Camp</p>
                      <p className="text-gray-600 text-sm">Em breve</p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
              <motion.div
                className="order-1 lg:order-2"
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl md:text-4xl font-medium text-gray-900 mb-6">Camps</h2>
                <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-8">
                  Prepare-se para elevar seu nível de jogo e conquistar novas metas! Nos Camps, treinadores internacionais de elite compartilham técnicas inovadoras e conduzem sessões intensivas. Você irá enfrentar desafios estimulantes e participar de jogos simulados que aprimoram seu entrosamento e desempenho em equipe.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                  <motion.div
                    className="border-2 border-black/8 rounded-2xl p-4 bg-white flex items-start gap-3 hover:border-[#54AE21]/35 transition-colors shadow-sm"
                    whileHover={{ y: -2 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="bg-[#54AE21]/15 w-10 h-10 rounded-xl flex items-center justify-center shrink-0">
                      <Activity className="h-5 w-5 text-[#54AE21]" />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900 mb-1">Treinamento Intensivo</h3>
                      <p className="text-gray-600 text-sm">Múltiplas sessões diárias</p>
                    </div>
                  </motion.div>
                  <motion.div
                    className="border-2 border-black/8 rounded-2xl p-4 bg-white flex items-start gap-3 hover:border-[#54AE21]/35 transition-colors shadow-sm"
                    whileHover={{ y: -2 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="bg-[#54AE21]/15 w-10 h-10 rounded-xl flex items-center justify-center shrink-0">
                      <AwardIcon className="h-5 w-5 text-[#54AE21]" />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900 mb-1">Foco em Competição</h3>
                      <p className="text-gray-600 text-sm">Simulações de jogos e torneios</p>
                    </div>
                  </motion.div>
                </div>
                <div
                  role="button"
                  tabIndex={0}
                  onClick={() => openWhatsApp('Olá, gostaria de mais informações sobre os Camps.')}
                  onKeyDown={(e) => e.key === 'Enter' && openWhatsApp('Olá, gostaria de mais informações sobre os Camps.')}
                  className="inline-block cursor-pointer"
                >
                  <motion.div
                    className="relative inline-block rounded-full border-2 border-[#6bc429] overflow-hidden shadow-[0_8px_28px_-4px_rgba(84,174,33,0.25)] hover:border-[#7dd63a] hover:shadow-[0_20px_40px_-12px_rgba(84,174,33,0.35)] transition-all duration-300 group/btn"
                  >
                    <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#54AE21] to-transparent z-10 pointer-events-none rounded-full" />
                    <div className="absolute inset-0 bg-gradient-to-br from-[#54AE21]/10 to-transparent opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300 pointer-events-none" />
                    <InteractiveHoverButton
                      text="Inscreva-se no Próximo Camp"
                      inverted
                      className="relative w-auto min-w-[280px] sm:min-w-[320px] text-sm pl-8 pr-12 py-4 border-0"
                    />
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Treino Personalizado */}
          <motion.div
            className="relative"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl md:text-4xl font-medium text-gray-900 mb-6">Treino Personalizado</h2>
                <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-8">
                  Na D14, cada atleta é único. Nosso programa Personalizado oferece desenvolvimento individual com atenção exclusiva e feedback constante. Oferecemos treinamentos que você pode realizar em casa ou em qualquer lugar: receba um programa montado para você, com acompanhamento contínuo e sem limites para seu desenvolvimento.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                  <motion.div
                    className="border-2 border-black/8 rounded-2xl p-4 bg-white flex items-start gap-3 hover:border-[#54AE21]/35 transition-colors shadow-sm"
                    whileHover={{ y: -2 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="bg-[#54AE21]/15 w-10 h-10 rounded-xl flex items-center justify-center shrink-0">
                      <TargetIcon className="h-5 w-5 text-[#54AE21]" />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900 mb-1">Plano Individual</h3>
                      <p className="text-gray-600 text-sm">Focado em seus objetivos específicos</p>
                    </div>
                  </motion.div>
                  <motion.div
                    className="border-2 border-black/8 rounded-2xl p-4 bg-white flex items-start gap-3 hover:border-[#54AE21]/35 transition-colors shadow-sm"
                    whileHover={{ y: -2 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="bg-[#54AE21]/15 w-10 h-10 rounded-xl flex items-center justify-center shrink-0">
                      <Clock className="h-5 w-5 text-[#54AE21]" />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900 mb-1">Horários Flexíveis</h3>
                      <p className="text-gray-600 text-sm">Adaptado à sua agenda</p>
                    </div>
                  </motion.div>
                </div>
                <div
                  role="button"
                  tabIndex={0}
                  onClick={() => openWhatsApp('Olá, gostaria de mais informações sobre o Treino Personalizado.')}
                  onKeyDown={(e) => e.key === 'Enter' && openWhatsApp('Olá, gostaria de mais informações sobre o Treino Personalizado.')}
                  className="inline-block cursor-pointer"
                >
                  <motion.div
                    className="relative inline-block rounded-full border-2 border-[#6bc429] overflow-hidden shadow-[0_8px_28px_-4px_rgba(84,174,33,0.25)] hover:border-[#7dd63a] hover:shadow-[0_20px_40px_-12px_rgba(84,174,33,0.35)] transition-all duration-300 group/btn"
                  >
                    <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#54AE21] to-transparent z-10 pointer-events-none rounded-full" />
                    <div className="absolute inset-0 bg-gradient-to-br from-[#54AE21]/10 to-transparent opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300 pointer-events-none" />
                    <InteractiveHoverButton
                      text="Agende uma Consulta"
                      inverted
                      className="relative w-auto min-w-[280px] sm:min-w-[320px] text-sm pl-8 pr-12 py-4 border-0"
                    />
                  </motion.div>
                </div>
              </motion.div>
              <motion.div
                className="relative"
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                viewport={{ once: true }}
              >
                <img src={img2} alt="Treino Personalizado" className="rounded-2xl w-full object-cover shadow-[0_8px_32px_-8px_rgba(0,0,0,0.12)]" />
                <motion.div
                  className="relative mt-6 mx-auto max-w-sm lg:absolute lg:-bottom-6 lg:-right-6 lg:mt-0 lg:mx-0 lg:max-w-none border-2 border-black/8 rounded-2xl p-6 bg-white shadow-lg"
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, ease: "easeOut", delay: 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="bg-[#54AE21]/15 w-10 h-10 rounded-xl flex items-center justify-center">
                      <Clock className="h-5 w-5 text-[#54AE21]" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">Duração</p>
                      <p className="text-gray-600 text-sm">Personalizada</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="bg-[#54AE21]/15 w-10 h-10 rounded-xl flex items-center justify-center">
                      <Calendar className="h-5 w-5 text-[#54AE21]" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">Frequência</p>
                      <p className="text-gray-600 text-sm">Personalizada</p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Próximo Treino + Timer */}
      <section className="py-20 md:py-28 bg-site relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.div
            className="flex flex-col lg:flex-row items-center justify-around gap-12 lg:gap-8"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <div className="flex flex-col items-center lg:items-start gap-8 text-center lg:text-left">
              <motion.div
                className="max-w-xl"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                viewport={{ once: true }}
              >
                <div className="flex items-center justify-center lg:justify-start gap-2 mb-4">
                  <div className="w-10 h-[2px] bg-[#54AE21]" />
                  <span className="text-[#54AE21] text-sm font-medium tracking-wide uppercase">Countdown</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-medium text-[#F4F4F5] mb-4">Próximo Treino</h2>
                <p className="text-[#F4F4F5]/85">
                  Fique por dentro da contagem regressiva para o próximo treino coletivo de sábado e agende sua aula experimental!
                </p>
              </motion.div>
              <Timer />
            </div>
            <div>
              <FloatingPhone />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Onde estamos */}
      <OndeEstamos />

      {/* FAQ */}
      <section id="perguntas-frequentes" className="py-20 md:py-28 bg-white relative overflow-x-hidden">
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.div
            className="text-center mb-12 px-2 sm:px-0"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <div className="flex items-start justify-center gap-6 mb-4 flex-wrap">
              <HelpCircle className="h-10 w-10 text-[#54AE21] shrink-0 mt-0.5 md:mt-1" />
              <h2 className="text-4xl md:text-5xl font-medium text-black overflow-visible min-w-0 leading-tight">
                Perguntas <span className="whitespace-nowrap">Frequentes</span>
              </h2>
            </div>
            <p className="text-black/70 max-w-2xl mx-auto text-base">
              Tire suas dúvidas sobre nossos treinamentos e programas.
            </p>
          </motion.div>
          <motion.div
            className="max-w-3xl mx-auto space-y-3"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            {faqData.map((faq, index) => (
              <FAQAccordion key={index} title={faq.title} answer={faq.answer} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* Galeria */}
      <div className="py-20 md:py-28 bg-site relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            className="flex flex-col md:flex-row items-center justify-center gap-8 mb-14"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <div className="text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-2 mb-4">
                <div className="w-10 h-[2px] bg-[#54AE21]" />
                <span className="text-[#54AE21] text-sm font-medium tracking-wide uppercase">Galeria</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-medium text-[#F4F4F5] mb-4">Momentos dos Nossos Treinos</h2>
              <p className="text-[#F4F4F5]/85 max-w-2xl mx-auto md:mx-0">
                Confira alguns momentos especiais dos nossos treinamentos e eventos.
              </p>
            </div>
            <img src={LogoGrande} alt="D14 Logo Grande" className="h-40 md:h-52 flex-shrink-0 opacity-90" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((img, index) => (
              <motion.div
                key={index}
                className="relative overflow-hidden rounded-2xl border-2 border-white/20 group cursor-pointer shadow-[0_4px_24px_-4px_rgba(0,0,0,0.3)] hover:border-[#54AE21]/40 transition-colors duration-300"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, ease: "easeOut", delay: index * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ y: -4 }}
                onClick={() => {
                  setLightboxIndex(index);
                  setOpenLightbox(true);
                }}
              >
                <img
                  src={img}
                  alt={`Galeria ${index + 1}`}
                  className="w-full aspect-[4/3] object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox Component Render */}
      <Lightbox
        open={openLightbox}
        close={() => setOpenLightbox(false)}
        slides={slides}
        index={lightboxIndex}
      />

    </div>
  );
}

export default Treinamentos;