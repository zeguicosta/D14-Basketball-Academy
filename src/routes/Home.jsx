import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  Trophy, 
  Users, 
  Target, 
  ShoppingBasket as Basketball, 
  Star, 
  Dumbbell, 
  ChevronRight,
  Instagram,
  Mail,
  MapPin,
  MessageCircle,
  Target as TargetIcon2,
  Flame,
  UserCheck,
  Users as UsersGroup,
  Clock,
  HelpCircle
} from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import LogoBlanco from '../assets/logo.png';
import OndeEstamos from '../components/OndeEstamos';
import FAQAccordion from '../components/Accordion';
import { InteractiveHoverButton } from '../components/ui/interactive-hover-button';
import { TextReveal } from '../components/ui/text-reveal-animation';
import { faqData } from '../constants/faqData';

// Renamed Hero to Home
export function Home() {
  const navigate = useNavigate();

  // Function to open WhatsApp link in a new tab
  const openWhatsApp = () => {
    const url = 'https://api.whatsapp.com/send/?phone=5511973262444&text=Ol%C3%A1%2C+gostaria+de+mais+informa%C3%A7%C3%B5es+sobre+os+treinos.&type=phone_number&app_absent=0';
    window.open(url, '_blank', 'noopener,noreferrer');
  };
  
  // Function to open Instagram link in a new tab
    const openInstagram = () => {
      const url = 'https://www.instagram.com/d14basketball/';
      window.open(url, '_blank', 'noopener,noreferrer');
    };

  // Function to open Mail link
  const openMail = () => {
    window.location.href = 'mailto:d14@d14basketballacademy.com.br';
  };

  return (
    <>
      {/* Hero wrapper: fundo preto e bordinha bem pequena */}
      <div className="m-0.5 md:m-1 bg-site p-0.5 md:p-1">
        <div className="relative min-h-screen rounded-3xl md:rounded-[2.5rem] overflow-hidden">
          {/* Vídeo YouTube como fundo (autoplay, mute, loop) */}
          <div className="hero-video-wrap">
            <iframe
              src="https://www.youtube.com/embed/D4aF3BwAh6M?start=16&autoplay=1&mute=1&loop=1&playlist=D4aF3BwAh6M"
              title="D14 Basketball Academy - Camp"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="pointer-events-none"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-black/65 via-black/55 to-black/75" />

          {/* Conteúdo: texto à esquerda, menor */}
          <div className="relative container mx-auto px-4 min-h-screen flex items-center justify-start text-left pl-6 pr-6 md:pl-12 md:pr-12 lg:pl-16 lg:pr-16">
            <div className="max-w-xl min-w-0">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium text-[#F4F4F5] mb-8 leading-tight overflow-visible">
                <TextReveal
                  word="Supere"
                  className="text-4xl md:text-5xl lg:text-6xl font-medium text-[#F4F4F5] leading-tight block"
                />
                <br />
                <TextReveal
                  word="seus limites"
                  className="text-4xl md:text-5xl lg:text-6xl font-medium text-[#F4F4F5] leading-tight block"
                />
              </h1>

              <motion.p 
                className="text-sm md:text-base font-normal text-[#F4F4F5] mt-2 mb-14 max-w-md"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.45, ease: "easeOut" }}
              >
                Desenvolva seu jogo com a metodologia exclusiva da D14 Basketball Academy e domine as quadras.
              </motion.p>

              <motion.div 
                className="flex flex-col sm:flex-row gap-6 justify-start"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: 0.6, ease: "easeOut" }}
              >
              {/* Link o botão para /treinamentos */}
              <Link to="/treinamentos">
                <InteractiveHoverButton
                  text="Comece Sua Jornada"
                  className="w-auto min-w-[17rem] whitespace-nowrap pl-5 pr-8 py-3"
                />
              </Link>
            </motion.div>
            </div>
          </div>

          {/* Social Media and Location */}
          <div className="absolute bottom-8 left-0 right-0 container mx-auto px-4">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center text-[#F4F4F5] gap-4 sm:gap-0 px-6 sm:px-8">
              {/* Social Media Links */}
              <motion.div 
                className="flex flex-wrap justify-start sm:justify-center items-center gap-4 sm:gap-6"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: 0.8, ease: "easeOut" }}
              >
                <button 
                  onClick={openInstagram}
                  className="flex items-center gap-2 hover:text-[#54AE21] transition-colors group"
                >
                  <Instagram className="h-5 w-5 group-hover:scale-110 transition-transform" />
                  <span className="text-sm hidden">@d14basketball</span>
                </button>
                <button 
                  onClick={openWhatsApp}
                  className="flex items-center gap-2 hover:text-[#54AE21] transition-colors group"
                >
                  <MessageCircle className="h-5 w-5 group-hover:scale-110 transition-transform" />
                  <span className="text-sm hidden">(11) 97326-2444</span>
                </button>
                <button 
                  onClick={openMail}
                  className="flex items-center gap-2 hover:text-[#54AE21] transition-colors group"
                >
                  <Mail className="h-5 w-5 group-hover:scale-110 transition-transform" />
                  <span className="text-sm hidden">d14@d14basketballacademy.com.br</span>
                </button>
              </motion.div>

              {/* Localizações e FAQ */}
              <motion.div
                className="flex flex-wrap justify-start sm:justify-end gap-4"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: 0.8, ease: "easeOut" }}
              >
                <a
                  href="#onde-estamos"
                  className="flex items-center gap-2 hover:text-[#54AE21] transition-colors group text-sm"
                >
                  <MapPin className="h-5 w-5 group-hover:scale-110 transition-transform flex-shrink-0" />
                  <span>Ver localizações</span>
                </a>
                <a
                  href="#perguntas-frequentes"
                  className="flex items-center gap-2 hover:text-[#54AE21] transition-colors group text-sm"
                >
                  <HelpCircle className="h-5 w-5 group-hover:scale-110 transition-transform flex-shrink-0" />
                  <span>Perguntas frequentes</span>
                </a>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Nossa História */}
      <section className="py-20 md:py-28 bg-site relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.div 
            className="max-w-3xl mx-auto text-center sm:text-left"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <div className="flex items-center justify-center sm:justify-start gap-2 mb-8">
              <div className="w-12 h-[2px] bg-[#54AE21]" />
              <span className="text-[#54AE21] font-medium">Nossa História</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-medium text-[#F4F4F5] mb-8">
              <TextReveal word="Mais que uma " className="text-4xl md:text-5xl font-medium text-[#F4F4F5] inline-block" />
              <span className="whitespace-nowrap"><TextReveal word="academia," className="text-4xl md:text-5xl font-medium text-[#F4F4F5] inline-block" /></span>
              <br />
              <span className="inline-block">
                <TextReveal word="um centro de " className="text-4xl md:text-5xl font-medium text-[#F4F4F5] inline-block" />
                <span className="whitespace-nowrap"><TextReveal word="excelência" className="text-4xl md:text-5xl font-medium text-[#54AE21] inline-block" /></span>
              </span>
            </h2>

            <div className="space-y-6 text-lg text-[#F4F4F5]/95">
              <p>
                Entenda como a D14 surgiu, com o propósito de criar uma academia que vai além do esporte, 
                promovendo desenvolvimento pessoal e valores essenciais para seus atletas.
              </p>
              
              <p>
                A D14 Basketball Academy está construindo um legado sólido ao formar atletas talentosos e comprometidos. 
                Desde sua fundação, a D14 já preparou <span className="text-[#54AE21]">28 atletas</span> que seguiram seus estudos nos Estados Unidos.
              </p>

              <p>
                Nossa equipe não apenas ensina as técnicas do jogo, mas também trabalha com cada atleta para 
                desenvolver valores como disciplina, trabalho em equipe e resiliência.
              </p>
            </div>

            <div className="flex justify-center sm:justify-start mt-8">
              <Link 
                to="/sobre"
                className="inline-flex items-center gap-2 text-[#54AE21] font-medium group hover:text-[#54AE21]/90 transition-colors"
              >
                <span>Conheça Nossa História</span>
                <ChevronRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-14">
              <motion.div 
                className="border-2 border-white/20 rounded-2xl p-6 bg-[#111] backdrop-blur-sm relative overflow-hidden group text-center shadow-[0_4px_24px_-4px_rgba(0,0,0,0.35)] hover:border-[#54AE21]/40 hover:shadow-[0_12px_32px_-8px_rgba(0,0,0,0.3)] transition-all duration-300"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                viewport={{ once: true, margin: "-50px" }}
              >
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#54AE21]/30 to-transparent group-hover:via-[#54AE21]/70 transition-colors duration-300" />
                <div className="absolute inset-0 bg-gradient-to-br from-[#54AE21]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="bg-[#54AE21]/20 w-12 h-12 rounded-xl flex items-center justify-center mb-4 relative mx-auto group-hover:bg-[#54AE21]/25 transition-colors"> 
                  <Trophy className="h-6 w-6 text-[#54AE21]" />
                </div>
                <div className="text-2xl font-medium text-[#F4F4F5] mb-1">28</div>
                <div className="text-[#F4F4F5]/85 text-sm">Atletas nos EUA</div>
              </motion.div>

              <motion.div 
                className="border-2 border-white/20 rounded-2xl p-6 bg-[#111] backdrop-blur-sm relative overflow-hidden group text-center shadow-[0_4px_24px_-4px_rgba(0,0,0,0.35)] hover:border-[#54AE21]/40 hover:shadow-[0_12px_32px_-8px_rgba(0,0,0,0.3)] transition-all duration-300"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                viewport={{ once: true, margin: "-50px" }}
              >
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#54AE21]/30 to-transparent group-hover:via-[#54AE21]/70 transition-colors duration-300" />
                <div className="absolute inset-0 bg-gradient-to-br from-[#54AE21]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="bg-[#54AE21]/20 w-12 h-12 rounded-xl flex items-center justify-center mb-4 relative mx-auto group-hover:bg-[#54AE21]/25 transition-colors">
                  <Users className="h-6 w-6 text-[#54AE21]" />
                </div>
                <div className="text-2xl font-medium text-[#F4F4F5] mb-1">15+</div>
                <div className="text-[#F4F4F5]/85 text-sm">Anos de Experiência</div>
              </motion.div>

              <motion.div 
                className="border-2 border-white/20 rounded-2xl p-6 bg-[#111] backdrop-blur-sm relative overflow-hidden group text-center shadow-[0_4px_24px_-4px_rgba(0,0,0,0.35)] hover:border-[#54AE21]/40 hover:shadow-[0_12px_32px_-8px_rgba(0,0,0,0.3)] transition-all duration-300"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                viewport={{ once: true, margin: "-50px" }}
              >
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#54AE21]/30 to-transparent group-hover:via-[#54AE21]/70 transition-colors duration-300" />
                <div className="absolute inset-0 bg-gradient-to-br from-[#54AE21]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="bg-[#54AE21]/20 w-12 h-12 rounded-xl flex items-center justify-center mb-4 relative mx-auto group-hover:bg-[#54AE21]/25 transition-colors">
                  <Target className="h-6 w-6 text-[#54AE21]" />
                </div>
                <div className="text-2xl font-medium text-[#F4F4F5] mb-1">100%</div>
                <div className="text-[#F4F4F5]/85 text-sm">Foco no Atleta</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Nossos Treinamentos */}
      <section className="py-20 md:py-28 bg-site relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div 
            className="text-center mb-14"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#54AE21]/10 rounded-full mb-4">
              <TargetIcon2 className="h-5 w-5 text-[#54AE21]" />
              <span className="font-medium text-[#54AE21]">Modalidades</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-medium text-[#F4F4F5] mb-4">
              <TextReveal word="Nossos Treinamentos" className="text-4xl md:text-5xl font-medium text-[#F4F4F5] block" />
            </h2>
            <p className="text-[#F4F4F5]/90 max-w-2xl mx-auto">
              Escolha o programa que melhor se adapta aos seus objetivos e comece sua jornada rumo à excelência.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              // Reordered: Camps first
              {
                icon: Flame, // Changed from Star
                title: "Camps",
                description: "Eventos sazonais intensivos com programação especial e oportunidades únicas de aprendizado e evolução."
              },
              // Reordered: Treino Coletivo second
              {
                icon: UsersGroup, // Changed from Basketball
                title: "Treino Coletivo",
                description: "Treinamentos em grupo focados no desenvolvimento técnico e tático, promovendo a integração e o espírito de equipe."
              },
              // Treino Personalizado remains last
              {
                icon: UserCheck, // Changed from Dumbbell
                title: "Treino Personalizado",
                description: "Acompanhamento individual focado nas necessidades específicas de cada atleta para máximo desenvolvimento."
              }
            ].map((program, index) => {
              const isHighlighted = program.title === "Treino Coletivo"; // Check if it's the card to highlight
              
              return (
                <motion.div 
                  key={program.title}
                  className={`backdrop-blur-sm border p-8 rounded-2xl group cursor-pointer relative overflow-hidden text-center sm:text-left text-[#F4F4F5]/90
                    ${isHighlighted 
                      ? 'bg-[#54AE21]/10 border-2 border-[#54AE21]/40 ring-1 ring-[#54AE21]/20 md:-translate-y-4 md:shadow-[0_8px_28px_-4px_rgba(84,174,33,0.2)] hover:border-[#54AE21]/55 hover:ring-[#54AE21]/30 md:hover:shadow-[0_20px_40px_-12px_rgba(84,174,33,0.28)]' 
                      : 'bg-[#111] border-2 border-white/20 shadow-[0_4px_24px_-4px_rgba(0,0,0,0.35)] hover:border-[#54AE21]/45 hover:shadow-[0_12px_32px_-8px_rgba(0,0,0,0.3)]'}
                  `}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, ease: "easeOut", delay: index * 0.05 }}
                  whileHover={{ y: -4 }}
                  viewport={{ once: true }}
                  onClick={() => navigate('/treinamentos')} 
                >
                  {isHighlighted && (
                    <>
                      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#54AE21] to-transparent" />
                      <div className="absolute top-4 right-4 flex items-center gap-1.5 bg-[#54AE21]/20 text-[#54AE21] text-xs font-medium px-3 py-1.5 rounded-full border border-[#54AE21]/40">
                        <Star className="h-3.5 w-3.5" />
                        Mais Procurado
                      </div>
                    </>
                  )}
                  {!isHighlighted && (
                    <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#54AE21]/25 to-transparent group-hover:via-[#54AE21]/70 transition-colors duration-300" />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#54AE21]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className={`w-11 h-11 rounded-xl flex items-center justify-center mb-5 relative mx-auto sm:mx-0 transition-colors ${isHighlighted ? 'bg-[#54AE21]/25' : 'bg-[#54AE21]/20 group-hover:bg-[#54AE21]/25'}`}>
                    <program.icon className="h-5 w-5 text-[#54AE21]" />
                  </div>
                  <h3 className="text-lg font-medium text-[#F4F4F5] mb-3">{program.title}</h3>
                  <p className="text-[#F4F4F5]/75 mb-6 text-sm leading-relaxed">{program.description}</p>
                  <div className="flex items-center justify-center sm:justify-start gap-2 text-[#54AE21] font-medium group-hover:text-white transition-colors [color:#54AE21]">
                    Saiba mais
                    <ChevronRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </motion.div>
              );
            })}
          </div>
            <motion.div
              className="text-center mt-16"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <Link to="/treinamentos" className="inline-block">
                <motion.div
                  className="relative inline-block rounded-full border-2 border-[#6bc429] overflow-hidden shadow-[0_8px_28px_-4px_rgba(84,174,33,0.25)] hover:border-[#7dd63a] hover:shadow-[0_20px_40px_-12px_rgba(84,174,33,0.35)] transition-all duration-300 group/btn"
                >
                  <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#54AE21] to-transparent z-10 pointer-events-none rounded-full" />
                  <div className="absolute inset-0 bg-gradient-to-br from-[#54AE21]/10 to-transparent opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300 pointer-events-none" />
                  <InteractiveHoverButton
                    text="Ver Detalhes"
                    inverted
                    className="relative w-auto min-w-[13rem] whitespace-nowrap pl-5 pr-8 py-3 border-0"
                  />
                </motion.div>
              </Link>
            </motion.div>
        </div>
      </section>

      {/* Onde estamos */}
      <OndeEstamos />

      {/* Perguntas frequentes */}
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
                <TextReveal word="Perguntas " className="text-4xl md:text-5xl font-medium text-black inline-block" />
                <span className="whitespace-nowrap"><TextReveal word="Frequentes" className="text-4xl md:text-5xl font-medium text-black inline-block" /></span>
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
    </>
  );
}

export default Home;
