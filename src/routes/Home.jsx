import { Link } from "react-router-dom"
import Seta from '../assets/seta2.png'
import Equipe from '../assets/equipe.png'
import Especializacao from '../assets/especializacao.png'
import Filosofia from '../assets/filosofia.png'
import VideoCamp from '../assets/campvideo.mp4'

const Home = () => {
    return (
        <>
            {/* Início */}
            <div className="bg-black top-0 h-screen bg-[url('src/assets/bg.png')] bg-cover bg-center flex flex-col items-center justify-center">
                <h3 className="text-customGreen font-bold text-1xl sm:text-[18px] uppercase duration-500">Danilo Castro</h3>
                <h1 className="text-white font-bold text-5xl sm:text-7xl xl:text-8xl duration-500">BASKETBALL</h1>
                <h1 className="text-white font-bold text-5xl sm:text-7xl xl:text-8xl duration-500">ACADEMY</h1>
                <p className="text-white text-1xl mt-9 sm:mt-7 px-20 text-center duration-500">Academia de basquete dedicada a quem deseja se destacar<br></br> nas quadras. <span className="font-bold">Entre agora para o nosso time!</span></p>
                <Link to='/contato' className="mt-10 rounded-sm relative border-2 border-white bg-transparent py-2.5 px-5 font-medium uppercase text-white transition-colors before:absolute before:left-0 before:top-0 before:-z-56 before:h-full before:w-full before:origin-top-left before:scale-x-0 before:bg-white before:transition-transform before:duration-300 before:content-[''] hover:text-neutral-800 before:hover:scale-x-100">
                    <button className="font-semibold relative z-55">Inscrever-se</button>
                </Link>
                <button onClick={() => { 
                    document.getElementById('sobre-nos').scrollIntoView({behavior: 'smooth'});
                    }} 
                    className="absolute bottom-10 animate-bounce">
                    <img src={Seta} className="w-8 rotate-90" />
                </button>
            </div>

            {/* Sobre Nós */}
            <div id="sobre-nos" className="bg-neutral-100"></div>
            <div className="bg-neutral-100 h-auto min-h-fit flex flex-wrap justify-center px-8 py-32 items-center gap-6 text-center xl:text-left">
                <div className="px-8">
                    <h1 className="font-bold text-neutral-800 text-5xl mb-5 block animate-appearleft">Conheça a</h1>
                    <h1 className="font-bold text-neutral-800 text-5xl block animate-appearleft">Nossa <span className="text-customGreen">Equipe</span></h1>

                    <p className="mt-8 text-neutral-800 block animate-appearleft">Descubra a história de cada um dos integrantes da D14.</p>

                    <Link to='/sobre' >
                        <button className="bg-neutral-800 rounded-sm text-white font-semibold px-10 py-3 mt-8 shadow-md shadow-neutral-800/30 duration-200 hover:bg-customGreen block animate-appearleft">Conhecer</button>
                    </Link>

                    <div className="flex flex-wrap text-neutral-800 gap-6 justify-center">
                        <Link className="mt-12 text-left shadow-lg h-auto w-72 px-10 py-11 rounded-md block animate-appearleft hover:bg-neutral-200 duration-200 cursor-pointer hover:invert" to='/sobre' >
                            <div>
                                <img className="w-8" src={Especializacao} />
                                <h3 className="font-bold text-[22px] py-4">Especialização</h3>
                                <p>Cada membro da equipe D14 traz uma vasta bagagem no mundo do basquete, com anos de experiência como jogadores e treinadores.</p>
                            </div>
                        </Link>

                        <Link className="mt-12 text-left shadow-lg h-auto w-72 px-10 py-11 rounded-md block animate-appearleft hover:bg-neutral-200 duration-200 cursor-pointer hover:invert" to='/sobre' >
                            <div>
                                <img className="w-8" src={Filosofia} />
                                <h3 className="font-bold text-[22px] py-4">Filosofia</h3>
                                <p>Nossa equipe não apenas ensina as técnicas do jogo, mas também trabalha com cada atleta para desenvolver valores como disciplina, trabalho em equipe e resiliência.</p>
                            </div>
                        </Link>
                    </div>
                </div>

                <div className="px-8 mt-10 xl:mt-0 block2 animate-appearright">
                    <img className="shadow-md w-auto" src={Equipe} />
                </div>
            </div>

            {/* Camps */}
            <div className="h-auto bg-custom-gradient items-center justify-center text-center flex flex-col gap-10 py-32">
                <h1 className="text-5xl font-bold text-white block animate-appearleft">Participe dos Nossos <span className="text-customGreen">Camps</span></h1>
                <p className="text-white px-10 2xl:px-96 w-auto block animate-appearleft">Os camps são eventos periódicos que contam com a presença de treinadores nacionais e internacionais, com vasta experiência, para oferecer um aprendizado único aos nossos alunos.</p>

                <div className="flex gap-6 block animate-appearleft">
                    <Link to='/treinamentos'>
                        <button className="bg-white text-neutral-800 font-semibold rounded-sm px-8 py-3 duration-200 hover:bg-customGreen hover:text-white">
                            Saiba Mais
                        </button>
                    </Link>

                    <Link to='/contato' className="rounded-sm relative border-2 border-white bg-transparent py-2.5 px-8 font-medium uppercase text-white transition-colors before:absolute before:left-0 before:top-0 before:-z-56 before:h-full before:w-full before:origin-top-left before:scale-x-0 before:bg-white before:transition-transform before:duration-300 before:content-[''] hover:text-neutral-800 before:hover:scale-x-100">
                        <button className="font-semibold relative z-56">
                            Participar
                        </button>
                    </Link>
                </div>

                <div className="block animate-appearleft">
                    <video className="w-full lg:w-[1000px]" controls>
                        <source src={VideoCamp} type="video/mp4" />
                    </video>
                </div>
            </div>
        </>
    )
}

export default Home