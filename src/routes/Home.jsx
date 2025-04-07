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
  MessageCircle // Assuming this is WhatsApp icon
} from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

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
      <div className="relative min-h-screen">
        {/* Background with overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1546519638-68e109498ffc?q=80&w=2070")', // Example image, replace if needed
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black/90" />
        </div>
        
        {/* Enhanced decorative elements */}
        <motion.div 
          className="absolute inset-0 pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {/* Gradient lines */}
          <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-32 bg-gradient-to-b from-transparent via-[#54AE21] to-transparent" />
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1 h-32 bg-gradient-to-b from-transparent via-[#54AE21] to-transparent" />
          
          {/* Blur effects */}
          <div className="absolute left-0 top-0 w-64 h-64 bg-[#54AE21]/5 rounded-full blur-2xl" />
          <div className="absolute right-0 bottom-0 w-72 h-72 bg-[#54AE21]/5 rounded-full blur-2xl" />
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#54AE21]/3 rounded-full blur-[40px]" />
          
          {/* Radial gradient */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(84,174,33,0.1)_0%,transparent_40%)]" />
          
          {/* Animated lines */}
          <div className="absolute left-0 top-1/4 w-full h-px bg-gradient-to-r from-transparent via-[#54AE21]/20 to-transparent" />
          <div className="absolute right-0 bottom-1/4 w-full h-px bg-gradient-to-r from-transparent via-[#54AE21]/20 to-transparent" />
          
          {/* Diagonal lines */}
          <div className="absolute left-0 top-0 w-1/3 h-px bg-gradient-to-r from-transparent to-[#54AE21]/20 origin-left rotate-45" />
          <div className="absolute right-0 bottom-0 w-1/3 h-px bg-gradient-to-l from-transparent to-[#54AE21]/20 origin-right -rotate-45" />
        </motion.div>

        {/* Content */}
        <div className="relative container mx-auto px-4 min-h-screen flex items-center justify-center text-center">
          <div className="max-w-3xl">
            <motion.h1 
              className="text-6xl md:text-8xl font-bold text-white mb-8 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Supere
              <br />
              <span className="relative inline-block">
                seus limites
                <motion.div 
                  className="absolute -bottom-4 left-0 w-full h-1 bg-[#54AE21]"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                />
              </span>
            </motion.h1>

            <motion.p 
              className="text-lg text-gray-300 mb-16"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              {/* Placeholder for the chosen text - Using Option 1 for now */}
              Desenvolva seu jogo com a metodologia exclusiva da D14 Basketball Academy e domine as quadras.
            </motion.p>

            <motion.div 
              className="flex flex-col sm:flex-row gap-6 justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              {/* Link the button to /treinamentos */}
              <Link to="/treinamentos">
                <motion.button 
                  className="bg-[#54AE21] text-white px-8 py-4 rounded-md font-semibold flex items-center justify-center gap-2 hover:bg-[#408718] transition-colors group relative overflow-hidden w-full sm:w-auto"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="relative z-10">Comece Sua Jornada</span>
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform relative z-10" />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000" />
                </motion.button>
              </Link>
              <Link to="/treinamentos">
                <motion.button 
                  className="border border-white/20 text-white px-8 py-4 rounded-md font-semibold flex items-center justify-center gap-2 hover:bg-white/10 transition-colors relative overflow-hidden group w-full sm:w-auto"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="relative z-10">Conheça os Treinos</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000" />
                </motion.button>
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Social Media and Location */}
        <div className="absolute bottom-8 left-0 right-0 container mx-auto px-4">
          <div className="flex flex-col sm:flex-row justify-between items-center text-white/80 gap-4 sm:gap-0">
            {/* Social Media Links */}
            <motion.div 
              className="flex flex-wrap justify-center items-center gap-4 sm:gap-6"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              {/* Updated Instagram link */}
              <button 
                onClick={openInstagram}
                className="flex items-center gap-2 hover:text-[#54AE21] transition-colors group"
              >
                <Instagram className="h-5 w-5 group-hover:scale-110 transition-transform" />
                <span className="text-sm hidden">@d14basketball</span> {/* Changed sm:inline to hidden */}
              </button>
              {/* Updated WhatsApp link */}
               <button 
                onClick={openWhatsApp}
                className="flex items-center gap-2 hover:text-[#54AE21] transition-colors group"
              >
                <MessageCircle className="h-5 w-5 group-hover:scale-110 transition-transform" />
                <span className="text-sm hidden">(11) 97326-2444</span> {/* Changed sm:inline to hidden */}
              </button>
              {/* Updated Mail link */}
              <button 
                onClick={openMail}
                className="flex items-center gap-2 hover:text-[#54AE21] transition-colors group"
              >
                <Mail className="h-5 w-5 group-hover:scale-110 transition-transform" />
                <span className="text-sm hidden">d14@d14basketballacademy.com.br</span> {/* Changed sm:inline to hidden */}
               </button>
            </motion.div>

            {/* Location - Using placeholder address from provided code */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <a 
                href="https://maps.app.goo.gl/8FhXk4yL9p7Z6fWd8" // Placeholder Google Maps link - REPLACE if needed
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-[#54AE21] transition-colors group"
              >
                <MapPin className="h-5 w-5 group-hover:scale-110 transition-transform" />
                {/* Using placeholder address - REPLACE if needed */}
                <span className="text-sm text-center sm:text-left">Av. Bernardino de Campos, 79 - Paraíso, SP</span> 
              </a>
            </motion.div>
          </div>
        </div>
      </div>

      {/* About Section */}
      <section className="py-24 bg-black relative overflow-hidden">
        <motion.div 
          className="absolute inset-0 pointer-events-none"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          {/* Blur effects */}
          <div className="absolute right-0 top-0 w-96 h-96 bg-[#54AE21]/5 rounded-full blur-3xl" />
          <div className="absolute left-0 bottom-0 w-96 h-96 bg-[#54AE21]/5 rounded-full blur-3xl" />
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#54AE21]/3 rounded-full blur-[120px]" />
          
          {/* Radial gradient */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(84,174,33,0.1)_0%,transparent_70%)]" />
          
          {/* Animated lines */}
          <div className="absolute left-0 top-1/3 w-full h-px bg-gradient-to-r from-transparent via-[#54AE21]/20 to-transparent" />
          <div className="absolute right-0 bottom-1/3 w-full h-px bg-gradient-to-r from-transparent via-[#54AE21]/20 to-transparent" />
          
          {/* Corner decorations */}
          <div className="absolute top-0 left-0 w-32 h-32">
            <div className="absolute top-0 left-8 w-px h-16 bg-gradient-to-b from-[#54AE21]/50 to-transparent" />
            <div className="absolute top-8 left-0 w-16 h-px bg-gradient-to-r from-[#54AE21]/50 to-transparent" />
          </div>
          <div className="absolute bottom-0 right-0 w-32 h-32">
            <div className="absolute bottom-0 right-8 w-px h-16 bg-gradient-to-t from-[#54AE21]/50 to-transparent" />
            <div className="absolute bottom-8 right-0 w-16 h-px bg-gradient-to-l from-[#54AE21]/50 to-transparent" />
          </div>
        </motion.div>

        <div className="container mx-auto px-4 relative">
          <motion.div 
            className="max-w-3xl mx-auto text-center sm:text-left" // Center text on mobile
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center justify-center sm:justify-start gap-2 mb-8"> {/* Center on mobile */}
              <div className="w-12 h-[2px] bg-[#54AE21]" />
              <span className="text-[#54AE21] font-medium">Nossa História</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Mais que uma academia,<br />
              um centro de <span className="text-[#54AE21]">excelência</span>
            </h2>

            <div className="space-y-6 text-lg text-gray-300">
              <p>
                Entenda como a D14 surgiu, com o propósito de criar uma academia que vai além do esporte, 
                promovendo desenvolvimento pessoal e valores essenciais para seus atletas.
              </p>
              
              <p>
                A D14 Basketball Academy está construindo um legado sólido ao formar atletas talentosos e comprometidos. 
                Desde sua fundação, a D14 já preparou 23 atletas que seguiram seus estudos nos Estados Unidos.
              </p>

              <p>
                Nossa equipe não apenas ensina as técnicas do jogo, mas também trabalha com cada atleta para 
                desenvolver valores como disciplina, trabalho em equipe e resiliência.
              </p>
            </div>

            {/* Center link on mobile */}
            <div className="flex justify-center sm:justify-start">
              <motion.div
                className="group inline-block" // Use inline-block for centering
                whileHover={{ x: 10 }}
                transition={{ duration: 0.2 }}
              >
                <Link 
                  to="/sobre" // Link to the correct about page
                  className="inline-flex items-center gap-2 text-[#54AE21] font-semibold mt-8 group relative"
                >
                  <span className="relative z-10">Conheça Nossa História</span>
                  <ChevronRight className="h-5 w-5 group-hover:translate-x-1 transition-transform relative z-10" />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000" />
                </Link>
              </motion.div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
              <motion.div 
                className="border border-white/10 rounded-lg p-6 bg-black relative overflow-hidden group text-center" // Center text
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#54AE21]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                {/* Center icon */}
                <div className="bg-[#54AE21]/20 w-12 h-12 rounded-lg flex items-center justify-center mb-4 relative mx-auto"> 
                  <Trophy className="h-6 w-6 text-[#54AE21]" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">23</div>
                <div className="text-gray-400">Atletas nos EUA</div>
              </motion.div>

              <motion.div 
                className="border border-white/10 rounded-lg p-6 bg-black relative overflow-hidden group text-center" // Center text
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#54AE21]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                {/* Center icon */}
                <div className="bg-[#54AE21]/20 w-12 h-12 rounded-lg flex items-center justify-center mb-4 relative mx-auto">
                  <Users className="h-6 w-6 text-[#54AE21]" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">15+</div> {/* Assuming 15+ years */}
                <div className="text-gray-400">Anos de Experiência</div>
              </motion.div>

              <motion.div 
                className="border border-white/10 rounded-lg p-6 bg-black relative overflow-hidden group text-center" // Center text
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#54AE21]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                 {/* Center icon */}
                <div className="bg-[#54AE21]/20 w-12 h-12 rounded-lg flex items-center justify-center mb-4 relative mx-auto">
                  <Target className="h-6 w-6 text-[#54AE21]" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">100%</div>
                <div className="text-gray-400">Foco no Atleta</div> {/* Adjusted text */}
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Training Programs */}
      <section className="py-24 bg-black relative overflow-hidden">
        <motion.div 
          className="absolute inset-0 pointer-events-none"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          {/* Unique decorative elements */}
          <div className="absolute left-0 top-0 w-64 h-64 bg-[#54AE21]/5 rounded-full blur-3xl" />
          <div className="absolute right-0 bottom-0 w-72 h-72 bg-[#54AE21]/5 rounded-full blur-3xl" />
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#54AE21]/3 rounded-full blur-[100px]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(84,174,33,0.1)_0%,transparent_70%)]" />
          
          {/* Animated lines */}
          <div className="absolute left-0 top-1/4 w-full h-px bg-gradient-to-r from-transparent via-[#54AE21]/20 to-transparent" />
          <div className="absolute right-0 bottom-1/4 w-full h-px bg-gradient-to-r from-transparent via-[#54AE21]/20 to-transparent" />
          
          {/* Diagonal decorative lines */}
          <div className="absolute left-0 top-0 w-1/3 h-px bg-gradient-to-r from-transparent to-[#54AE21]/20 origin-left rotate-45" />
          <div className="absolute right-0 bottom-0 w-1/3 h-px bg-gradient-to-l from-transparent to-[#54AE21]/20 origin-right -rotate-45" />
        </motion.div>

        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
             {/* Section header */}
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="w-12 h-[2px] bg-[#54AE21]" />
              <span className="text-[#54AE21] font-medium">Programas</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Nossos Treinamentos</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Escolha o programa que melhor se adapta aos seus objetivos e comece sua jornada rumo à excelência.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Basketball, // Changed from Users
                title: "Treino Coletivo",
                description: "Treinamentos em grupo focados no desenvolvimento técnico e tático, promovendo a integração e o espírito de equipe."
              },
              {
                icon: Star, // Changed from Award/Trophy
                title: "Camps",
                description: "Eventos sazonais intensivos com programação especial e oportunidades únicas de aprendizado e evolução."
              },
              {
                icon: Dumbbell, // Changed from Target
                title: "Treino Personalizado",
                description: "Acompanhamento individual focado nas necessidades específicas de cada atleta para máximo desenvolvimento."
              }
            ].map((program, index) => (
              <motion.div 
                key={program.title}
                className="bg-black border border-white/10 p-8 rounded-lg hover:border-[#54AE21]/50 transition-all duration-400 group cursor-pointer relative overflow-hidden text-center sm:text-left" // Center text on mobile
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }} // Stagger animation
                whileHover={{ y: -9 }}
                viewport={{ once: true }}
                onClick={() => navigate('/treinamentos')} // Navigate to trainings page
              >
                {/* Card background effects */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#54AE21]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(84,174,33,0.1)_0%,transparent_60%)] opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
                
                {/* Decorative corner lines */}
                <div className="absolute top-0 left-0 w-16 h-16">
                  <div className="absolute top-0 left-4 w-px h-8 bg-gradient-to-b from-[#54AE21]/50 to-transparent" />
                  <div className="absolute top-4 left-0 w-8 h-px bg-gradient-to-r from-[#54AE21]/50 to-transparent" />
                </div>
                <div className="absolute bottom-0 right-0 w-16 h-16">
                  <div className="absolute bottom-0 right-4 w-px h-8 bg-gradient-to-t from-[#54AE21]/50 to-transparent" />
                  <div className="absolute bottom-4 right-0 w-8 h-px bg-gradient-to-l from-[#54AE21]/50 to-transparent" />
                </div>

                 {/* Center icon on mobile */}
                <div className="bg-[#54AE21]/20 w-12 h-12 rounded-lg flex items-center justify-center mb-6 group-hover:bg-[#54AE21]/30 transition-colors relative mx-auto sm:mx-0">
                  <program.icon className="h-6 w-6 text-[#54AE21]" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{program.title}</h3>
                <p className="text-gray-400 mb-6">{program.description}</p>
                 {/* Center link on mobile */}
                <div className="flex items-center justify-center sm:justify-start gap-2 text-[#54AE21] font-semibold group-hover:text-white transition-colors">
                  Saiba mais
                  <ChevronRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </div>
              </motion.div>
            ))}
          </div>
            {/* Added button to see all trainings */}
            <div className="text-center mt-16">
                 <Link to="/treinamentos">
                     <motion.button 
                         className="bg-[#54AE21] text-white px-8 py-4 rounded-md font-semibold flex items-center justify-center gap-2 hover:bg-[#408718] transition-colors group relative overflow-hidden mx-auto"
                         whileHover={{ scale: 1.05 }}
                         whileTap={{ scale: 0.95 }}
                         initial={{ opacity: 0, y: 20 }}
                         whileInView={{ opacity: 1, y: 0 }}
                         transition={{ duration: 0.5 }}
                         viewport={{ once: true }}
                     >
                         <span className="relative z-10">Ver Todos os Treinos</span>
                         <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform relative z-10" />
                         <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000" />
                     </motion.button>
                 </Link>
            </div>
        </div>
      </section>
    </>
  );
}

// Add default export
export default Home;
