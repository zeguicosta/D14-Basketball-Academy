import { Link } from "react-router-dom"
import VideoCamp from '../assets/campvideo.mp4'
import Bola from '../assets/bola.png'
import Legado from '../assets/legado.png'
import Peso from '../assets/peso.png'
import Accordion from '../components/Accordion'
import TreinoImg from '../assets/treinoimg.jpg'

const Home = () => {
    return (
        <>
            {/* Início */}
            <section className="bg-black top-0 h-screen bg-[url('src/assets/bg.png')] bg-cover bg-center flex flex-col items-center justify-center text-center">
                <h3 className="text-white lg:mb-4 font-bold text-2xl sm:text-4xl 2xl:text-5xl duration-500 uppercase">Danilo Castro</h3>
                <h1 className="text-white font-bold text-5xl sm:text-7xl 2xl:text-8xl duration-500 px-8 uppercase">Basketball Academy</h1>
                <p className="text-white text-1xl mt-9 px-20 text-center duration-500">Academia de basquete dedicada a quem deseja se destacar<br></br> nas quadras. <span className="font-bold">Entre agora para o nosso time!</span></p>
                <Link to='/contato' className="mt-10 rounded-full relative border-2 border-customGreen3 bg-customGreen2 py-2.5 px-8 font-medium uppercase text-white shadow-custom-shadow shadow-customGreen3/80 duration-150 hover:bg-customGreen2/80">
                    <button className="font-semibold relative z-55 uppercase">Faça sua Inscrição</button>
                </Link>
            </section>

            {/* Sobre Nós */}
            <section className="bg-neutral-100 h-auto 2xl:h-screen min-h-fit flex flex-col justify-center px-8 py-32 items-center gap-6 text-center xl:text-left text-neutral-800">
                <h1 className="font-bold text-6xl text-center md:px-10">Conheça melhor a <span className="text-customGreen"> D14</span></h1>

                <Link to='/sobre' >
                    <button className="bg-customGreen border-2 border-customGreen4 mt-2 rounded-full text-white font-semibold px-10 py-3 shadow-customGreen/40 shadow-custom-shadow duration-150 hover:bg-customGreen5">Ver Mais</button>
                </Link>

                <div className="flex flex-wrap text-neutral-800 gap-6 justify-center">
                    <Link className="mt-12 bg-white text-left h-auto w-[350px] px-10 py-11 rounded-md duration-200 cursor-pointer shadow-sm hover:shadow-md hover:translate-y-1" to='/sobre' >
                        <div>
                            <div className="flex items-center gap-4">
                                <div className="bg-customGreen/20 rounded-2xl w-14 h-14 flex items-center justify-center mb-5">
                                    <img className="w-10" src={Bola} />
                                </div>
                                <h3 className="text-2xl pb-5 font-semibold text-customGreen/80">História</h3>
                            </div>

                            <p>Entenda como a D14 surgiu, com o propósito de criar uma academia que vai além do esporte, promovendo <span className="font-semibold text-customGreen/80">desenvolvimento pessoal e valores essenciais para seus atletas.</span></p>
                        </div>
                    </Link>

                    <Link className="mt-12 xl:mt-8 bg-white text-left h-auto w-[350px] px-10 py-11 rounded-md duration-200 cursor-pointer shadow-sm hover:shadow-md hover:translate-y-1" to='/sobre' >
                        <div>
                            <div className="flex items-center gap-4">
                                <div className="bg-customGreen/20 rounded-2xl w-14 h-14 flex items-center justify-center mb-5">
                                    <img className="w-10" src={Legado} />
                                </div>
                                <h3 className="text-2xl pb-5 font-semibold text-customGreen/80">Legado</h3>
                            </div>
                            
                            <p>A D14 Basketball Academy  está construindo um legado sólido ao formar atletas talentosos e comprometidos. Desde sua fundação, <span className="font-semibold text-customGreen/80">a D14 ​já ​preparou 23 atletas que ​seguiram seus estudos nos ​Estados Unidos.</span></p>
                        </div>
                    </Link>

                    <Link className="mt-12 bg-white text-left h-auto w-[350px] px-10 py-11 rounded-md duration-200 cursor-pointer shadow-sm hover:shadow-md hover:translate-y-1" to='/treinamentos' >
                        <div>
                            <div className="flex items-center gap-4">
                                <div className="bg-customGreen/20 rounded-2xl w-14 h-14 flex items-center justify-center mb-5">
                                    <img className="w-10" src={Peso} />
                                </div>
                                <h3 className="text-2xl pb-5 font-semibold text-customGreen/80">Treinamento</h3>
                            </div>
                            
                            <p>Nossa equipe não apenas ensina as técnicas do jogo, mas também trabalha com cada atleta para desenvolver valores como <span className="font-semibold text-customGreen/80">disciplina, trabalho em equipe e resiliência.</span></p>
                        </div>
                    </Link>
                </div>
            </section>

            <section className="bg-custom-gradient">
                {/* Treinamentos */}
                <section className="h-auto items-center justify-center text-center xl:text-left flex flex-col gap-6 py-32">
                    <div className="flex flex-col xl:flex-row 2xl:px-64 px-24 gap-6 xl:gap-16 items-center">
                        <h1 className="text-6xl font-bold text-white">Saiba Mais Sobre os <span className="text-customGreen">Treinamentos</span></h1>
                        <div className="flex flex-col items-center xl:items-start gap-2">
                            <p className="text-white font-medium 2xl:w-[700px]">Oferecemos treinamentos coletivos para aprendizado em grupo, personalizados em casa para foco individual e camps exclusivos com treinadores internacionais para uma experiência única.</p>
                            <Link to='/treinamentos' >
                                <button className="bg-customGreen border-2 border-customGreen4 mt-2 rounded-full text-white font-semibold px-10 py-3 shadow-customGreen/40 shadow-custom-shadow duration-150 hover:bg-customGreen5">Ver Treinos</button>
                            </Link>
                        </div>
                    </div>

                    <div className="mt-10">
                        <img src={TreinoImg} className="w-full px-6 md:px-14 lg:w-[1200px]" />
                    </div>
                </section>

                {/* Camps */}
                <section className="h-auto items-center justify-center text-center flex flex-col gap-8 pt-10 pb-32">
                    <h1 className="text-5xl font-bold text-white">Quer Descobrir Tudo Sobre os <span className="text-customGreen">Camps</span>?</h1>

                    <Link to='/treinamentos' >
                        <button className="bg-customGreen border-2 border-customGreen4 mt-2 rounded-full text-white font-semibold px-10 py-3 shadow-customGreen/40 shadow-custom-shadow duration-150 hover:bg-customGreen5">Ver Mais</button>
                    </Link>

                    <div className="mt-4">
                        <video className="w-full px-6 md:px-14 lg:w-[1200px]" controls>
                            <source src={VideoCamp} type="video/mp4" />
                        </video>
                    </div>
                </section>
            </section>

            {/* Perguntas Frequentes */}
            <section className="bg-neutral-100 border-t-2 border-t-neutral-200 h-auto min-h-fit justify-center px-8 md:px-24 lg:px-44 py-32 xl:px-80 2xl:px-60 items-center text-neutral-800 flex flex-col 2xl:flex-row gap-16">
                <div className="items-center text-center 2xl:text-left mb-12">
                    <h1 className="font-bold text-7xl"><span className="text-customGreen">Perguntas</span></h1>
                    <h1 className="font-bold text-7xl mt-8">Frequentes</h1>
                </div>
                <div className="rounded-lg bg-white py-4 px-12">
                    <Accordion title='Posso agendar uma aula experimental?' answer='Sim! A sua primeira aula será experimental, mas sempre precisará ser agendada por nós.' />
                    <div className="w-full my-4 bg-neutral-200 h-[2px]"></div>
                    <Accordion title='Como faço para me inscrever?' answer='Muito simples! Após a sua primeira aula, o(a) responsável irá alinhar com o Harley os próximos passos. Tudo via WhatsApp e de forma bem objetiva!' />
                    <div className="w-full my-4 bg-neutral-200 h-[2px]"></div>
                    <Accordion title='Quais são os níveis de habilidade aceitos?' answer='Todos, aceitamos todos os níveis sem exceção. Nossa metodologia/dinâmica permite que todos cresçam e evoluam no mesmo ambiente, venham conhecer!' />
                    <div className="w-full my-4 bg-neutral-200 h-[2px]"></div>
                    <Accordion title='Quais são as idades aceitas?' answer='Nosso foco é U18, ou seja, temos um compromisso com a formação - dentro e fora das quadras - até 18 anos. Todavia, temos grupos de treinamentos para mais experientes também!
                    Entendemos 11 anos como idade ideal para meninos e meninas começarem!' />
                    <div className="w-full my-4 bg-neutral-200 h-[2px]"></div>
                    <Accordion title='Quais são os horários do treinos?' answer='Treinos todos os sábados (09:00-12:00). Estejam prontos para nossos jogos, finais de semana sempre cheios de muito basquete na D14!' />
                    <div className="w-full my-4 bg-neutral-200 h-[2px]"></div>
                    <Accordion title='O que preciso levar para os treinos?' answer='Sua vontade de ser melhor a cada treino. Ah, e roupa apropriada para prática esportiva. Amarrem bem o tênis e vamos nessa!' />
                    <div className="w-full my-4 bg-neutral-200 h-[2px]"></div>
                    <Accordion title='A D14 participa de campeonatos?' answer='Sim! Participamos de ligas amadoras em SP e Grande SP. Embora não seja a proposta principal da academia, acreditamos que a competição sempre trará bons frutos. Ninguém cresce em zona de conforto, vamos juntos!' />
                </div>
            </section>

            {/* Chamada para ação */}
            <section className="h-96 border-t-2 border-t-neutral-200 bg-neutral-100 text-neutral-800 flex flex-col items-center justify-center text-center gap-6">
                <h3 className="font-bold text-4xl">Pronto para <span className="text-customGreen">Começar</span>?</h3>
                <p className="font-medium">Entre em contato com a nossa equipe agora e aperfeiçoe seu jogo conosco.</p>

                <Link to='/treinamentos' >
                    <button className="bg-customGreen border-2 border-customGreen4 mt-2 rounded-full text-white font-semibold px-10 py-3 shadow-customGreen/40 shadow-custom-shadow duration-150 hover:bg-customGreen5">Começar</button>
                </Link>
            </section>
        </>
    )
}

export default Home