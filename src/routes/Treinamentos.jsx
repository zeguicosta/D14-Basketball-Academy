import Coletivo from '../assets/coletivo.png'
import Camp from '../assets/camp.png'
import Personalizado from '../assets/filosofia.png'
import SlidePricing from '../components/SlidePricing'
import { TextParallaxContentExample } from '../components/TextParallaxContent'
import FloatingPhone from "../components/FloatingPhone"
import Timer from '../components/Timer'
import { fadeInImage, fadeInLeft, fadeInRight, fadeInUp } from "../constants/animationSettings";
import { motion } from 'framer-motion';
import Accordion from '../components/Accordion';

const Treinamentos = () => {
    const openNewTab = (url) => {
        window.open(url, '_blank', 'noopener,noreferrer');
    };

    return (
        <>
            <TextParallaxContentExample />

            {/* Perguntas Frequentes */}
            <section className="bg-white h-auto min-h-fit justify-center px-4 sm:px-8 md:px-24 lg:px-44 py-32 xl:px-80 2xl:px-60 items-center text-neutral-800 flex flex-col 2xl:flex-row gap-16">
                <motion.div {...fadeInLeft} className="items-center text-center 2xl:text-left mb-12">
                    <h1 className="font-semibold text-5xl md:text-6xl"><span className="text-customGreen">Perguntas</span></h1>
                    <h1 className="font-semibold text-5xl md:text-6xl mt-8">Frequentes</h1>
                </motion.div>
                <motion.div {...fadeInLeft} className="rounded-lg bg-white py-4 px-12">
                    <Accordion title='Posso agendar uma aula experimental?' answer='Sim! A sua primeira aula será experimental, mas sempre precisará ser agendada por nós.' />
                    <div className="w-full my-4 bg-slate-300 h-[1px]"></div>
                    <Accordion title='Como faço para me inscrever?' answer='Muito simples! Após a sua primeira aula, o(a) responsável irá alinhar com o Harley os próximos passos. Tudo via WhatsApp e de forma bem objetiva!' />
                    <div className="w-full my-4 bg-slate-300 h-[1px]"></div>
                    <Accordion title='Quais são os níveis de habilidade aceitos?' answer='Todos, aceitamos todos os níveis sem exceção. Nossa metodologia / dinâmica permite que todos cresçam e evoluam no mesmo ambiente, venham conhecer!' />
                    <div className="w-full my-4 bg-slate-300 h-[1px]"></div>
                    <Accordion title='Quais são as idades aceitas?' answer='Nosso foco é U18, ou seja, temos um compromisso com a formação - dentro e fora das quadras - até 18 anos. Todavia, temos grupos de treinamentos para mais experientes também!
                    Entendemos 11 anos como idade ideal para meninos e meninas começarem!' />
                    <div className="w-full my-4 bg-slate-300 h-[1px]"></div>
                    <Accordion title='Quais são os horários do treinos?' answer='Treinos todos os sábados (09:00-12:00). Estejam prontos para nossos jogos, finais de semana sempre cheios de muito basquete na D14!' />
                    <div className="w-full my-4 bg-slate-300 h-[1px]"></div>
                    <Accordion title='O que preciso levar para os treinos?' answer='Sua vontade de ser melhor a cada treino. Ah, e roupa apropriada para prática esportiva. Amarrem bem o tênis e vamos nessa!' />
                    <div className="w-full my-4 bg-slate-300 h-[1px]"></div>
                    <Accordion title='A D14 participa de campeonatos?' answer='Sim! Participamos de ligas amadoras em SP e Grande SP. Embora não seja a proposta principal da academia, acreditamos que a competição sempre trará bons frutos. Ninguém cresce em zona de conforto, vamos juntos!' />
                </motion.div>
            </section>

            {/* Cronômetro */}
            <section className="mt-32 lg:h-[80vh] h-screen border-t-2 bg-custom-gradient text-white flex flex-col lg:flex-row items-center justify-center text-center gap-20 lg:gap-[20vw] px-4 sm:px-8 md:px-16">
                <motion.div className="text-left flex flex-col gap-8">
                    <div className="flex flex-col gap-4">
                        <h3 className="font-semibold">AGENDE SUA AULA EXPERIMENTAL</h3>
                        <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold">Próximo Treino em</h1>                      
                    </div>
                    <Timer />
                </motion.div>
                <div>
                    <FloatingPhone />
                </div>
            </section>

            {/* Chamada para ação */}
            <section className="h-[70vh] border-t-2 border-t-neutral-200 bg-neutral-100 text-neutral-800 flex flex-col items-center justify-center text-center gap-6 px-4 sm:px-7">
                <motion.h3 {...fadeInUp} className="font-semibold text-4xl">Pronto para <span className="text-customGreen">Começar</span>?</motion.h3>
                <motion.p {...fadeInUp} className="font-medium px-4 sm:px-0 text-lg">Entre em contato com a nossa equipe agora e aperfeiçoe seu jogo conosco.</motion.p>

                <motion.button {...fadeInUp} onClick={() => openNewTab('https://api.whatsapp.com/send/?phone=5511973262444&text=Ol%C3%A1%2C+gostaria+de+mais+informa%C3%A7%C3%B5es+sobre+os+treinos.&type=phone_number&app_absent=0')} className="bg-customGreen border-2 border-customGreen4 mt-2 rounded-lg text-white font-semibold px-8 py-3 shadow-customGreen/40 shadow-custom-shadow hover:bg-customGreen5">Começar</motion.button>
            </section>
        </>
    )
}

export default Treinamentos