import { Link } from "react-router-dom"
import WhatsApp from '../assets/whatsapp.png'
import Assinatura from '../assets/assinatura.png'

const Footer = () => {
    const openNewTab = (url) => {
        window.open(url, '_blank', 'noopener,noreferrer');
    };

    return (
        <div className="bg-black text-white lg:h-auto flex flex-wrap px-8 pt-24 pb-16 justify-around text-left gap-20">
            <div className="flex flex-col gap-10">
                <h3 className="font-semibold text-2xl">D14 Basketball Academy</h3>
                <p>Academia de basquete dedicada a quem deseja se destacar 
                nas quadras.</p>
            </div>

            <div className="flex flex-col items-center">
                <button className='duration-150 rounded-xl p-2 border-[1px] border-transparent hover:scale-105 hover:border-white' onClick={() => openNewTab('https://wa.me/5521968481596')}>
                    <h3 className="text-sm mb-[-60px]">Desenvolvido por</h3>
                    <img className="w-56 mb-[-60px]" src={Assinatura} />
                </button>
            </div>

            <div className="h-[1px] w-[95%] bg-white"></div>

            <div className="flex flex-wrap justify-center gap-[12vw] items-center">
                <div className="text-center">
                    <h3>@2024 D14 Basketball Academy. Todos os direitos reservados.</h3>
                </div>
            </div>
        </div>
    )
}

export default Footer