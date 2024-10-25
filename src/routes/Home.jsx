import { Link } from "react-router-dom"
import VideoCamp from '../assets/campvideo.mp4'
import Bola from '../assets/bola.png'
import Legado from '../assets/legado.png'
import Peso from '../assets/peso.png'
import Accordion from '../components/Accordion'

const Home = () => {
    return (
        <>
            {/* Início */}
            <section className="bg-black top-0 h-screen bg-[url('src/assets/bg.png')] bg-cover bg-center flex flex-col items-center justify-center text-center">
                <h3 className="text-white lg:mb-4 font-bold text-2xl sm:text-4xl 2xl:text-5xl duration-500 uppercase">Danilo Castro</h3>
                <h1 className="text-white font-bold text-5xl sm:text-7xl 2xl:text-8xl duration-500 px-8 uppercase">Basketball Academy</h1>
                <p className="text-white text-1xl mt-9 px-20 text-center duration-500">Academia de basquete dedicada a quem deseja se destacar<br></br> nas quadras. <span className="font-bold">Entre agora para o nosso time!</span></p>
                <Link to='/contato' className="mt-10 rounded-full relative border-2 border-customGreen3 bg-customGreen2 py-2.5 px-8 font-medium uppercase text-white shadow-custom-shadow shadow-customGreen3 duration-150 hover:bg-customGreen2/80">
                    <button className="font-semibold relative z-55 uppercase">Faça sua Inscrição</button>
                </Link>
                {/* <button onClick={() => { 
                    document.getElementById('equipe').scrollIntoView({behavior: 'smooth'});
                    }} 
                    className="absolute bottom-10 animate-bounce rounded-full shadow-md shadow-white/40 hover:shadow-lg">
                    <img src={Seta} className="w-8 rotate-90 hover:scale-110 duration-200" />
                </button> */}
            </section>

            {/* Equipe */}
            {/* <div id="equipe" className="bg-neutral-100"></div>
            <section className="bg-neutral-100 h-auto min-h-fit flex flex-wrap justify-center px-3 py-32 items-center gap-6 text-center xl:text-left">
                <div className="px-8">
                    <h1 className="font-bold text-neutral-800 text-7xl mb-2 ">Conheça a</h1>
                    <h1 className="font-bold text-neutral-800 text-7xl ">Nossa <span className="text-customGreen">Equipe</span></h1>

                    <p className="mt-8 text-neutral-800">Descubra a história de cada um dos integrantes da D14.</p>

                    <Link to='/sobre' >
                        <button className="rounded-sm text-white font-semibold px-10 py-3 mt-8 shadow-md duration-100 bg-customGreen shadow-customGreen/40 hover:bg-neutral-800 hover:shadow-neutral-800/30">Conhecer</button>
                    </Link>

                    <div className="flex flex-wrap text-neutral-800 gap-6 justify-center">
                        <Link className="bg-white border-2 border-neutral-200 mt-12 text-left h-auto w-80 px-10 py-11 rounded-md duration-200 cursor-pointer hover:shadow-md hover:translate-y-1 hover:bg-white" to='/sobre' >
                            <div>
                                <img className="w-10" src={Especializacao} />
                                <h3 className="font-bold text-[22px] py-4">Especialização</h3>
                                <p>Cada membro da equipe D14 traz uma vasta bagagem no mundo do basquete, com anos de experiência como jogadores e treinadores.</p>
                            </div>
                        </Link>

                        <Link className="bg-white border-2 border-neutral-200 mt-12 text-left h-auto w-80 px-10 py-11 rounded-md  duration-200 cursor-pointer hover:shadow-md hover:translate-y-1" to='/sobre' >
                            <div>
                                <img className="w-10" src={Filosofia} />
                                <h3 className="font-bold text-[22px] py-4">Filosofia</h3>
                                <p>Nossa equipe não apenas ensina as técnicas do jogo, mas também trabalha com cada atleta para desenvolver valores como disciplina, trabalho em equipe e resiliência.</p>
                            </div>
                        </Link>
                    </div>
                </div>

                <div className="px-8 mt-10 xl:mt-0">
                    <img className="shadow-md w-auto" src={Equipe} />
                </div>
            </section> */}

            {/* Sobre Nós */}
            <section className="bg-neutral-100 h-auto min-h-fit flex flex-col justify-center px-8 py-32 items-center gap-6 text-center xl:text-left text-neutral-800">
                <h1 className="font-bold text-6xl text-center md:px-10">Conheça melhor a <span className="text-customGreen"> D14</span></h1>
                {/* <p>Entenda a nossa origem e o que nos motiva a transformar o desempenho dos alunos.</p> */}

                <Link to='/sobre' >
                    <button className="bg-customGreen border-2 border-customGreen4 mt-2 rounded-full text-white font-semibold px-10 py-3 shadow-customGreen/60 shadow-custom-shadow duration-150 hover:bg-customGreen5">Saiba Mais</button>
                </Link>

                <div className="flex flex-wrap text-neutral-800 gap-6 justify-center">
                    <Link className="mt-12 bg-white border-2 border-neutral-200 text-left h-auto w-[350px] px-10 py-11 rounded-md duration-200 cursor-pointer hover:shadow-md hover:translate-y-1" to='/sobre' >
                        <div>
                            <div className="bg-customGreen/20 rounded-2xl w-14 h-14 flex items-center justify-center mb-5">
                                <img className="w-10" src={Bola} />
                            </div>
                            {/* <h3 className="font-bold text-[22px] py-4 text-customGreen">História</h3> */}
                            <p>Entenda como a D14 surgiu, com o propósito de criar uma academia que vai além do esporte, promovendo <span className="font-semibold text-customGreen/80">desenvolvimento pessoal e valores essenciais para seus atletas.</span></p>
                        </div>
                    </Link>

                    <Link className="mt-12 xl:mt-8 bg-white border-2 border-neutral-200 text-left h-auto w-[350px] px-10 py-11 rounded-md duration-200 cursor-pointer hover:shadow-md hover:translate-y-1" to='/sobre' >
                        <div>
                            <div className="bg-customGreen/20 rounded-2xl w-14 h-14 flex items-center justify-center mb-5">
                                <img className="w-10" src={Legado} />
                            </div>
                            {/* <h3 className="font-bold text-[22px] py-4 text-customGreen">Legado</h3> */}
                            <p>A D14 Basketball Academy  está construindo um legado sólido ao formar atletas talentosos e comprometidos. Desde sua fundação, <span className="font-semibold text-customGreen/80">a D14 ​já ​preparou 23 atletas que ​seguiram seus estudos nos ​Estados Unidos.</span></p>
                        </div>
                    </Link>

                    <Link className="mt-12 bg-white border-2 border-neutral-200 text-left h-auto w-[350px] px-10 py-11 rounded-md duration-200 cursor-pointer hover:shadow-md hover:translate-y-1" to='/treinamentos' >
                        <div>
                            <div className="bg-customGreen/20 rounded-2xl w-14 h-14 flex items-center justify-center mb-5">
                                <img className="w-10" src={Peso} />
                            </div>
                            {/* <h3 className="font-bold text-[22px] py-4 text-customGreen">Filosofia</h3> */}
                            <p>Nossa equipe não apenas ensina as técnicas do jogo, mas também trabalha com cada atleta para desenvolver valores como <span className="font-semibold text-customGreen/80">disciplina, trabalho em equipe e resiliência.</span></p>
                        </div>
                    </Link>
                </div>
            </section>

            {/* Camps */}
            <section className="h-auto bg-custom-gradient items-center justify-center text-center flex flex-col gap-8 py-32">
                <h1 className="text-6xl font-bold text-white">Saiba Mais Sobre os <span className="text-customGreen">Treinamentos</span></h1>
                <p className="text-white font-medium px-10 2xl:px-96 w-auto">Assista o vídeo abaixo para entender como funcionam nossos camps.<br></br>Se quiser acessar nossa lista de treinamentos clique no botão:</p>

                <div className="flex gap-6">
                    <Link to='/treinamentos'>
                        <button className="bg-customGreen shadow-customGreen/40 shadow-md text-white font-semibold rounded-sm px-8 py-3 duration-100 hover:bg-white hover:text-neutral-800 hover:shadow-white/30">
                            Ver Treinos
                        </button>
                    </Link>

                    <Link to='/contato' className="rounded-sm relative border-2 border-white bg-transparent py-2.5 px-8 font-medium uppercase text-white transition-colors before:absolute before:left-0 before:top-0 before:-z-56 before:h-full before:w-full before:origin-top-left before:scale-x-0 before:bg-customGreen before:transition-transform before:duration-300 before:content-[''] hover:text-white before:hover:scale-x-100">
                        <button className="font-semibold relative z-56">
                            Participar
                        </button>
                    </Link>
                </div>

                <div className="mt-10">
                    <video className="w-full lg:w-[1000px]" controls>
                        <source src={VideoCamp} type="video/mp4" />
                    </video>
                </div>
            </section>

            {/* Perguntas Frequentes */}
            <section className="bg-neutral-100 border-t-2 border-t-neutral-200 h-auto min-h-fit justify-center px-8 md:px-24 lg:px-44 py-32 xl:px-80 2xl:px-0 items-center text-neutral-800 flex flex-col 2xl:flex-row gap-16">
                <div className="items-center text-center 2xl:text-left mb-12">
                    <h1 className="font-bold text-7xl"><span className="text-customGreen">Perguntas</span></h1>
                    <h1 className="font-bold text-7xl mt-8">Frequentes</h1>
                </div>
                <div className="rounded-lg bg-white py-4 px-8">
                    <Accordion title='Posso agendar uma aula experimental?' answer='Sim, você tem direito à um treino gratuito conosco para garantir que é a decisão ideal para você.' />
                    <div className="w-full my-4 bg-neutral-200 h-[2px]"></div>
                    <Accordion title='Como faço para me inscrever?' answer='Sim, você tem direito à um treino gratuito conosco para garantir que é a decisão ideal para você.' />
                    <div className="w-full my-4 bg-neutral-200 h-[2px]"></div>
                    <Accordion title='Quais são os níveis de habilidade aceitos?' answer='Sim, você tem direito à um treino gratuito conosco para garantir que é a decisão ideal para você.' />
                    <div className="w-full my-4 bg-neutral-200 h-[2px]"></div>
                    <Accordion title='Quais são as idades aceitas?' answer='Sim, você tem direito à um treino gratuito conosco para garantir que é a decisão ideal para você.' />
                    <div className="w-full my-4 bg-neutral-200 h-[2px]"></div>
                    <Accordion title='Quais são os horários do treinos?' answer='Sim, você tem direito à um treino gratuito conosco para garantir que é a decisão ideal para você.' />
                    <div className="w-full my-4 bg-neutral-200 h-[2px]"></div>
                    <Accordion title='O que preciso levar para os treinos?' answer='Sim, você tem direito à um treino gratuito conosco para garantir que é a decisão ideal para você.' />
                    <div className="w-full my-4 bg-neutral-200 h-[2px]"></div>
                    <Accordion title='A D14 participa de campeonatos?' answer='Sim, você tem direito à um treino gratuito conosco para garantir que é a decisão ideal para você.' />
                </div>
            </section>

            {/* Chamada para ação */}
            <section className="h-96 border-t-2 border-t-neutral-200 bg-neutral-100 text-neutral-800 flex flex-col items-center justify-center text-center gap-6">
                <h3 className="font-bold text-4xl">Pronto para <span className="text-customGreen">Começar</span>?</h3>
                <p className="font-medium">Entre em contato com a nossa equipe agora e aperfeiçoe seu jogo conosco.</p>

                <Link to='/contato'>
                    <button className="bg-customGreen mt-4 rounded-sm text-white font-semibold px-10 py-3 shadow-md shadow-customGreen/30 duration-100 hover:bg-neutral-800 hover:shadow-neutral-800/40">Começar</button>
                </Link>
            </section>
        </>
    )
}

export default Home