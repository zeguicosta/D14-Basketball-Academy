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
import campimg from '../assets/campimg.jpg';
import img1 from '../assets/img1.jpg';
// import img2 from '../assets/img2.jpg';
import img2 from '../assets/treinopersonalizado.jpg';
import img6 from '../assets/img6.jpg';
import grupoD14 from '../assets/grupod14.jpg'; // Import the new image
import FAQAccordion from '../components/Accordion';
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

// Lightbox Imports
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

const faqData = [
  {
    title: "Posso agendar uma aula experimental?",
    answer: "Sim! A sua primeira aula será experimental, mas sempre precisará ser agendada por nós."
  },
  {
    title: "Como faço para me inscrever?",
    answer: "Muito simples! Após a sua primeira aula, o(a) responsável irá alinhar com o Harley os próximos passos. Tudo via WhatsApp e de forma bem objetiva!"
  },
  {
    title: "Quais são os níveis de habilidade aceitos?",
    answer: "Todos, aceitamos todos os níveis sem exceção. Nossa metodologia / dinâmica permite que todos cresçam e evoluam no mesmo ambiente, venham conhecer!"
  },
  {
    title: "Quais são as idades aceitas?",
    answer: "Nosso foco é U18, ou seja, temos um compromisso com a formação - dentro e fora das quadras - até 18 anos. Todavia, temos grupos de treinamentos para mais experientes também! Entendemos 11 anos como idade ideal para meninos e meninas começarem!"
  },
  {
    title: "Quais são os horários do treinos?",
    answer: "Treinos todos os sábados (09:00-12:00). Estejam prontos para nossos jogos, finais de semana sempre cheios de muito basquete na D14!"
  },
  {
    title: "O que preciso levar para os treinos?",
    answer: "Sua vontade de ser melhor a cada treino. Ah, e roupa apropriada para prática esportiva. Amarrem bem o tênis e vamos nessa!"
  },
  {
    title: "A D14 participa de campeonatos?",
    answer: "Sim! Participamos de ligas amadoras em SP e Grande SP. Embora não seja a proposta principal da academia, acreditamos que a competição sempre trará bons frutos. Ninguém cresce em zona de conforto, vamos juntos!"
  }
];

// Prepare slides data for lightbox
const galleryImages = [slide1, slide2, slide8, sobre1, sobre4, sobre3];
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
    <div className="bg-white">
      {/* Hero Section with new background image */}
      <div className="relative min-h-screen overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${grupoD14})`,
          }}
        >
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />
        </div>
        
        <div className="relative container mx-auto px-4 min-h-screen flex items-center justify-center text-center z-10">
          <div className="max-w-3xl">
            <motion.div 
              className="text-center mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 border border-white/20 rounded-full">
                <TargetIcon2 className="h-5 w-5 text-[#54AE21]" />
                <span className="font-medium text-white">Modalidades</span>
              </div>
            </motion.div>
            <motion.h1 
              className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight" 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Explore Nossos <span className="text-[#54AE21]">Treinamentos</span>
            </motion.h1>
            <motion.p 
              className="text-lg text-gray-300 mb-8" 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Escolha o programa que melhor se adapta ao seu nível e objetivos. Nossa metodologia exclusiva garante seu desenvolvimento contínuo e prepara você para dominar as quadras.
            </motion.p>
            <motion.button
              onClick={scrollToPrograms}
              className="inline-flex items-center justify-center px-6 py-3 text-base font-medium rounded-md text-white hover:text-gray-200 transition-colors"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Ver Treinos
              <motion.div
                animate={{ y: [0, 5, 0] }}
                transition={{ 
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <ChevronDown className="ml-2 h-5 w-5" />
              </motion.div>
            </motion.button>
          </div>
        </div>
      </div>
      {/* End of Hero Section */}

      {/* Training Programs */}
      <div id="training-programs" className="py-24 relative overflow-hidden">
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
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <UsersGroup className="h-8 w-8 text-[#54AE21]" />
                  <h2 className="text-3xl font-bold">Treino Coletivo</h2>
                </div>
                <p className="text-gray-600 text-lg mb-8">
                  Acreditamos que o trabalho em equipe é fundamental para o sucesso no basquete. Nosso programa Coletivo combina treinamento intensivo de fundamentos (arremesso, passe, drible, defesa) com desafios e jogos simulados que promovem o entrosamento entre os jogadores.

                  Junte-se ao nosso Coletivo e leve seu desempenho para o próximo nível!
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <motion.div 
                    className="flex items-start gap-4 group"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="bg-[#54AE21]/10 p-3 rounded-lg group-hover:bg-[#54AE21]/20 transition-colors">
                      <UsersIcon className="h-6 w-6 text-[#54AE21]" />
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
                      <TargetIcon className="h-6 w-6 text-[#54AE21]" />
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
                  onClick={() => openWhatsApp('Olá, gostaria de mais informações sobre o Treino Coletivo.')}
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
                <img
                  src={treinoimg}
                  alt="Treino Coletivo"
                  className="rounded-lg shadow-xl"
                />
                <motion.div 
                  className="relative mt-6 mx-auto max-w-sm bg-white p-6 rounded-lg shadow-lg lg:absolute lg:-bottom-6 lg:-right-6 lg:mt-0 lg:mx-0 lg:max-w-none"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-center gap-4 mb-4">
                    <Clock className="h-6 w-6 text-[#54AE21]" />
                    <div>
                      <p className="font-semibold">Duração</p>
                      <p className="text-gray-600">4 horas</p>
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
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div 
                className="order-2 lg:order-1 relative"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div className="aspect-video rounded-lg overflow-hidden shadow-2xl shadow-[#54AE21]/20">
                    <iframe
                    className="w-full h-full"
                    src="https://www.youtube.com/embed/D4aF3BwAh6M?start=16"
                    title="D14 Basketball Academy - Camp"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    ></iframe>
                </div>
                <motion.div 
                  className="relative mt-6 mx-auto max-w-sm bg-white p-6 rounded-lg shadow-lg lg:absolute lg:-bottom-6 lg:-left-6 lg:mt-0 lg:mx-0 lg:max-w-none"
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
                  <Flame className="h-8 w-8 text-[#54AE21]" />
                  <h2 className="text-3xl font-bold">Camps</h2>
                </div>
                <p className="text-gray-600 text-lg mb-8">
                  Prepare-se para elevar seu nível de jogo e conquistar novas metas! Nos Camps, treinadores internacionais de elite compartilham técnicas inovadoras e conduzem sessões intensivas para acelerar seu desenvolvimento. Você irá enfrentar desafios estimulantes e participar de jogos simulados que aprimoram seu entrosamento e desempenho em equipe. Vivencie um ambiente de aprendizado avançado e alcance novos patamares no basquete. Inscreva-se agora e transforme seu jogo!
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <motion.div 
                    className="flex items-start gap-4 group"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="bg-[#54AE21]/10 p-3 rounded-lg group-hover:bg-[#54AE21]/20 transition-colors">
                      <Activity className="h-6 w-6 text-[#54AE21]" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Treinamento Intensivo</h3>
                      <p className="text-gray-600">Múltiplas sessões diárias</p>
                    </div>
                  </motion.div>
                  <motion.div 
                    className="flex items-start gap-4 group"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="bg-[#54AE21]/10 p-3 rounded-lg group-hover:bg-[#54AE21]/20 transition-colors">
                      <AwardIcon className="h-6 w-6 text-[#54AE21]" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Foco em Competição</h3>
                      <p className="text-gray-600">Simulações de jogos e torneios</p>
                    </div>
                  </motion.div>
                </div>
                <motion.button 
                  className="bg-[#54AE21] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#408718] transition-colors relative overflow-hidden group"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => openWhatsApp('Olá, gostaria de mais informações sobre os Camps.')}
                >
                  <span className="relative z-10">Inscreva-se no Próximo Camp</span>
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
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <UserCheck className="h-8 w-8 text-[#54AE21]" />
                  <h2 className="text-3xl font-bold">Treino Personalizado</h2>
                </div>
                <p className="text-gray-600 text-lg mb-8">
                  Na D14 Basketball Academy, entendemos que cada atleta é único. Nosso programa Personalizado oferece um desenvolvimento individual focado nas suas necessidades específicas, com atenção exclusiva e feedback constante para garantir que você alcance seu máximo potencial.

                  Oferecemos treinamentos personalizados que você pode realizar em casa ou em qualquer outro lugar fora da academia D14. Receba um programa específico montado para você, com acompanhamento contínuo e atenção exclusiva, garantindo que seu desenvolvimento não tenha limites.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <motion.div 
                    className="flex items-start gap-4 group"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="bg-[#54AE21]/10 p-3 rounded-lg group-hover:bg-[#54AE21]/20 transition-colors">
                      <TargetIcon className="h-6 w-6 text-[#54AE21]" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Plano Individual</h3>
                      <p className="text-gray-600">Focado em seus objetivos específicos</p>
                    </div>
                  </motion.div>
                  <motion.div 
                    className="flex items-start gap-4 group"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="bg-[#54AE21]/10 p-3 rounded-lg group-hover:bg-[#54AE21]/20 transition-colors">
                      <Clock className="h-6 w-6 text-[#54AE21]" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Horários Flexíveis</h3>
                      <p className="text-gray-600">Adaptado à sua agenda</p>
                    </div>
                  </motion.div>
                </div>
                <motion.button 
                  className="bg-[#54AE21] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#408718] transition-colors relative overflow-hidden group"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => openWhatsApp('Olá, gostaria de mais informações sobre o Treino Personalizado.')}
                >
                  <span className="relative z-10">Agende uma Consulta</span>
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
                <img
                  src={img2}
                  alt="Treino Personalizado"
                  className="rounded-lg shadow-xl"
                />
                <motion.div 
                  className="relative mt-6 mx-auto max-w-sm bg-white p-6 rounded-lg shadow-lg lg:absolute lg:-bottom-6 lg:-right-6 lg:mt-0 lg:mx-0 lg:max-w-none"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-center gap-4 mb-4">
                    <Clock className="h-6 w-6 text-[#54AE21]" />
                    <div>
                      <p className="font-semibold">Duração</p>
                      <p className="text-gray-600">Personalizada</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <Calendar className="h-6 w-6 text-[#54AE21]" />
                    <div>
                      <p className="font-semibold">Frequência</p>
                      <p className="text-gray-600">Personalizada</p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Timer and Floating Phone Section */}
      <section className="py-24 bg-black relative overflow-hidden">
        <motion.div
          className="absolute inset-0 pointer-events-none"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <div className="absolute left-1/4 top-0 w-72 h-72 bg-[#54AE21]/5 rounded-full blur-3xl" />
          <div className="absolute right-1/4 bottom-0 w-72 h-72 bg-[#54AE21]/5 rounded-full blur-3xl" />
        </motion.div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="flex flex-col lg:flex-row items-center justify-around gap-16 lg:gap-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="text-white flex flex-col items-center lg:items-start gap-8">
              <motion.div
                className="max-w-xl"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center justify-start gap-6 mb-4">
                  <Clock className="h-10 w-10 text-[#54AE21]" />
                  <h2 className="text-5xl font-bold text-white">Próximo Treino</h2>
                </div>
                <p className="text-gray-400">
                  Fique por dentro da contagem regressiva para o nosso próximo treino coletivo de sábado e agende sua aula experimental!
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

      {/* FAQ Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <motion.div 
          className="absolute inset-0 pointer-events-none opacity-50"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <div className="absolute left-0 top-0 w-96 h-96 bg-[#54AE21]/5 rounded-full blur-3xl" />
          <div className="absolute right-0 bottom-0 w-96 h-96 bg-[#54AE21]/5 rounded-full blur-3xl" />
        </motion.div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center justify-start md:justify-center gap-6 mb-4 mx-auto max-w-max"> 
               <HelpCircle className="h-10 w-10 text-[#54AE21]" /> 
               <h2 className="text-4xl font-bold text-black">Perguntas Frequentes</h2>
            </div>
            <p className="text-gray-600 max-w-2xl mx-auto text-center">
              Tire suas dúvidas sobre nossos treinamentos e programas.
            </p>
          </motion.div>

          <motion.div 
            className="max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {faqData.map((faq, index) => (
              <FAQAccordion 
                key={index} 
                title={faq.title} 
                answer={faq.answer} 
              />
            ))}
          </motion.div>
        </div>
      </section>

      {/* Gallery Section */}
      <div className="py-24 bg-black relative overflow-hidden">
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
            className="flex flex-col md:flex-row items-center justify-center gap-8 mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-2 mb-4">
                <div className="w-12 h-[2px] bg-[#54AE21]" />
                <span className="text-[#54AE21] font-medium">Galeria</span>
              </div>
              <h2 className="text-4xl font-bold text-white mb-4">Momentos dos Nossos Treinos</h2>
              <p className="text-gray-400 max-w-2xl mx-auto md:mx-0">
                Confira alguns momentos especiais dos nossos treinamentos e eventos.
              </p>
            </div>
            <img 
              src={LogoGrande} 
              alt="D14 Logo Grande" 
              className="h-44 md:h-56 flex-shrink-0"
            />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {galleryImages.map((img, index) => (
              <motion.div
                key={index}
                className="relative overflow-hidden rounded-lg group cursor-pointer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                onClick={() => {
                  setLightboxIndex(index);
                  setOpenLightbox(true);
                }}
              >
                <img
                  src={img}
                  alt={`Galeria ${index + 1}`}
                  className="w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
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