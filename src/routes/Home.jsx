import { Link } from "react-router-dom"
import Seta from '../assets/seta2.png'
import Equipe from '../assets/equipe.png'
import Especializacao from '../assets/especializacao.png'
import Filosofia from '../assets/filosofia.png'
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
                <h3 className="text-white lg:mb-6 font-bold text-5xl sm:text-7xl 2xl:text-8xl uppercase duration-500">Danilo Castro</h3>
                <h1 className="text-white font-bold text-5xl sm:text-7xl 2xl:text-8xl duration-500 px-8">BASKETBALL ACADEMY</h1>
                <p className="text-white text-1xl mt-9 sm:mt-7 px-20 text-center duration-500">Academia de basquete dedicada a quem deseja se destacar<br></br> nas quadras. <span className="font-bold">Entre agora para o nosso time!</span></p>
                <Link to='/contato' className="mt-10 rounded-sm relative border-2 border-white bg-white py-2.5 px-8 font-medium uppercase text-neutral-800 transition-colors before:absolute before:left-0 before:top-0 before:-z-56 before:h-full before:w-full before:origin-top-left before:scale-x-0 before:bg-customGreen before:transition-transform before:duration-300 before:content-[''] hover:text-white before:hover:scale-x-100 shadow-md shadow-white/30">
                    <button className="font-semibold relative z-55">Participar</button>
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
                <h1 className="font-bold text-7xl"><span className="text-customGreen">Sobre</span> Nós</h1>
                {/* <p>Entenda a nossa origem e o que nos motiva a transformar o desempenho dos alunos.</p> */}

                <Link to='/sobre' >
                    <button className="bg-customGreen mt-4 rounded-sm text-white font-semibold px-10 py-3 shadow-md shadow-customGreen/30 duration-100 hover:bg-neutral-800 hover:shadow-neutral-800/40">Saiba Mais</button>
                </Link>

                <div className="flex flex-wrap text-neutral-800 gap-6 justify-center">
                    <Link className="mt-12 bg-white border-2 border-neutral-200 text-left h-auto w-[350px] px-10 py-11 rounded-md duration-200 cursor-pointer hover:shadow-md hover:translate-y-1" to='/sobre' >
                        <div>
                            <img className="w-10" src={Bola} />
                            <h3 className="font-bold text-[22px] py-4">História</h3>
                            <p>Conheça como a D14 surgiu, com o propósito de criar uma academia que vai além do esporte, promovendo desenvolvimento pessoal e valores essenciais para seus atletas.</p>
                        </div>
                    </Link>

                    <Link className="mt-12 xl:mt-8 bg-white border-2 border-neutral-200 text-left h-auto w-[350px] px-10 py-11 rounded-md duration-200 cursor-pointer hover:shadow-md hover:translate-y-1" to='/sobre' >
                        <div>
                            <img className="w-10" src={Legado} />
                            <h3 className="font-bold text-[22px] py-4">Legado</h3>
                            <p>Veja como a D14 Basketball Academy  está construindo um legado sólido ao formar atletas talentosos e comprometidos. Desde sua fundação, a D14 ​já ​preparou 23 atletas que ​seguiram seus estudos nos ​Estados Unidos.</p>
                        </div>
                    </Link>

                    <Link className="mt-12 bg-white border-2 border-neutral-200 text-left h-auto w-[350px] px-10 py-11 rounded-md duration-200 cursor-pointer hover:shadow-md hover:translate-y-1" to='/treinamentos' >
                        <div>
                            <img className="w-10" src={Filosofia} />
                            <h3 className="font-bold text-[22px] py-4">Filosofia</h3>
                            <p>Nossa equipe não apenas ensina as técnicas do jogo, mas também trabalha com cada atleta para desenvolver valores como disciplina, trabalho em equipe e resiliência.</p>
                        </div>
                    </Link>
                </div>
            </section>

            {/* Camps */}
            <section className="h-auto bg-custom-gradient items-center justify-center text-center flex flex-col gap-10 py-32">
                <h1 className="text-7xl font-bold text-white">Saiba Mais Sobre os <span className="text-customGreen">Treinamentos</span></h1>
                {/* <p className="text-white px-10 2xl:px-96 w-auto">Os camps são eventos periódicos que contam com a presença de treinadores nacionais e internacionais, com vasta experiência, para oferecer um aprendizado único aos nossos alunos.</p> */}

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
            <section className="h-96">
                
            </section>
        </>
    )
}

export default Home