import { Link } from "react-router-dom"
import { Instagram, MessageCircle, Mail, MapPin, Code } from 'lucide-react'
import Logo from '../assets/logo.png'

const Footer = () => {
    const openWhatsApp = () => {
        const url = 'https://api.whatsapp.com/send/?phone=5511973262444&text=Ol%C3%A1%2C+gostaria+de+mais+informa%C3%A7%C3%B5es+sobre+os+treinos.&type=phone_number&app_absent=0'
        window.open(url, '_blank', 'noopener,noreferrer')
    }

    const openInstagram = () => {
        const url = 'https://www.instagram.com/d14basketball/'
        window.open(url, '_blank', 'noopener,noreferrer')
    }

    const openMail = () => {
        window.location.href = 'mailto:d14@d14basketballacademy.com.br'
    }

    const currentYear = new Date().getFullYear()

    return (
        <footer className="bg-black text-gray-400 py-12 border-t border-white/10 relative overflow-hidden">
            <div className="absolute inset-0 pointer-events-none opacity-20">
                <div className="absolute bottom-0 left-0 w-72 h-72 bg-[#54AE21]/5 rounded-full blur-3xl" />
                <div className="absolute top-0 right-0 w-72 h-72 bg-[#54AE21]/5 rounded-full blur-3xl" />
                <div className="absolute bottom-1/4 left-1/3 w-full h-px bg-gradient-to-r from-transparent via-[#54AE21]/10 to-transparent" />
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">
                    <div className="flex flex-col gap-4 items-center md:items-start">
                        <Link to="/">
                            <img src={Logo} alt="D14 Basketball Academy Logo" className="h-16 mb-2" />
                        </Link>
                        <p className="text-sm text-center md:text-left">
                            Academia de basquete dedicada a quem deseja se destacar nas quadras, combinando esporte e educação.
                        </p>
                    </div>

                    <div className="items-center md:items-start lg:col-start-3">
                        <h3 className="font-semibold text-white mb-4 text-lg text-center md:text-left">Navegação</h3>
                        <ul className="space-y-2 text-sm text-center md:text-left">
                            <li><Link to="/" className="hover:text-[#54AE21] transition-colors">Início</Link></li>
                            <li><Link to="/sobre" className="hover:text-[#54AE21] transition-colors">Sobre Nós</Link></li>
                            <li><Link to="/treinamentos" className="hover:text-[#54AE21] transition-colors">Treinamentos</Link></li>
                            <li><Link to="/loja" className="hover:text-[#54AE21] transition-colors">Loja</Link></li>
                        </ul>
                    </div>

                    <div className="items-center md:items-start lg:col-start-4">
                        <h3 className="font-semibold text-white mb-4 text-lg text-center md:text-left">Contato</h3>
                        <ul className="space-y-3 text-sm">
                            <li className="flex items-start gap-2">
                                <MapPin className="h-4 w-4 text-[#54AE21] mt-0.5 flex-shrink-0" />
                                <a href="https://maps.app.goo.gl/8FhXk4yL9p7Z6fWd8" target="_blank" rel="noopener noreferrer" className="hover:text-[#54AE21] transition-colors">
                                    Av. Bernardino de Campos, 79 - Paraíso, São Paulo - SP
                                </a>
                            </li>
                            <li className="flex items-center gap-2">
                                <Mail className="h-4 w-4 text-[#54AE21] flex-shrink-0" />
                                <button onClick={openMail} className="hover:text-[#54AE21] transition-colors">
                                    d14@d14basketballacademy.com.br
                                </button>
                            </li>
                            <li className="flex items-center gap-2">
                                <MessageCircle className="h-4 w-4 text-[#54AE21] flex-shrink-0" />
                                <button onClick={openWhatsApp} className="hover:text-[#54AE21] transition-colors">
                                    (11) 97326-2444
                                </button>
                            </li>
                        </ul>
                    </div>

                    {/* Social Media - Removed */}

                </div>

                <div className="border-t border-white/10 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center text-xs">
                    <p>&copy; {currentYear} D14 Basketball Academy. Todos os direitos reservados.</p>
                    <a href="https://vantdot.netlify.app" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 bg-[#54AE21]/10 hover:bg-[#54AE21]/20 rounded-md transition-colors mt-4 md:mt-0">
                        <Code className="h-5 w-5 text-[#54AE21]" />
                        <span className="font-medium text-[#54AE21]">Desenvolvido por VANT</span>
                    </a>
                </div>
            </div>
        </footer>
    )
}

export default Footer