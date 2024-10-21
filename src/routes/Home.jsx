import { Link } from "react-router-dom"
import Seta from '../assets/seta2.png'
import Equipe from '../assets/equipe.png'
import Especializacao from '../assets/especializacao.png'
import Filosofia from '../assets/filosofia.png'
import VideoCamp from '../assets/campvideo.mp4'
import Bola from '../assets/bola.png'
import Legado from '../assets/legado.png'
import Peso from '../assets/peso.png'

const Home = () => {
    return (
        <>
            {/* Início */}
            <div className="bg-black top-0 h-screen bg-[url('src/assets/bg.png')] bg-cover bg-center flex flex-col items-center justify-center">
                <h3 className="text-customGreen font-bold text-1xl sm:text-[18px] uppercase duration-500">Danilo Castro</h3>
                <h1 className="text-white font-bold text-5xl sm:text-7xl xl:text-8xl duration-500">BASKETBALL</h1>
                <h1 className="text-white font-bold text-5xl sm:text-7xl xl:text-8xl duration-500">ACADEMY</h1>
                <p className="text-white text-1xl mt-9 sm:mt-7 px-20 text-center duration-500">Academia de basquete dedicada a quem deseja se destacar<br></br> nas quadras. <span className="font-bold">Entre agora para o nosso time!</span></p>
                <Link to='/contato' className="mt-10 rounded-sm relative border-2 border-white bg-white py-2.5 px-8 font-medium uppercase text-neutral-800 transition-colors before:absolute before:left-0 before:top-0 before:-z-56 before:h-full before:w-full before:origin-top-left before:scale-x-0 before:bg-customGreen before:transition-transform before:duration-300 before:content-[''] hover:text-white before:hover:scale-x-100 shadow-md shadow-white/40">
                    <button className="font-semibold relative z-55">Participar</button>
                </Link>
                <button onClick={() => { 
                    document.getElementById('equipe').scrollIntoView({behavior: 'smooth'});
                    }} 
                    className="absolute bottom-10 animate-bounce rounded-full shadow-md shadow-white/40 hover:shadow-lg">
                    <img src={Seta} className="w-8 rotate-90 hover:scale-110 duration-200" />
                </button>
            </div>

            {/* Equipe */}
            <div id="equipe" className="bg-neutral-100"></div>
            <div className="bg-neutral-100 h-auto min-h-fit flex flex-wrap justify-center px-8 py-32 items-center gap-6 text-center xl:text-left">
                <div className="px-8">
                    <h1 className="font-bold text-neutral-800 text-5xl mb-5 ">Conheça a</h1>
                    <h1 className="font-bold text-neutral-800 text-5xl ">Nossa <span className="text-customGreen">Equipe</span></h1>

                    <p className="mt-8 text-neutral-800">Descubra a história de cada um dos integrantes da D14.</p>

                    <Link to='/sobre' >
                        <button className="bg-customGreen rounded-sm text-white font-semibold px-10 py-3 mt-8 shadow-md shadow-customGreen/30 duration-150 hover:scale-105">Conhecer</button>
                    </Link>

                    <div className="flex flex-wrap text-neutral-800 gap-6 justify-center">
                        <Link className="mt-12 bg-white text-left shadow-lg h-auto w-80 px-10 py-11 rounded-md duration-200 cursor-pointer hover:shadow-xl hover:translate-y-1" to='/sobre' >
                            <div>
                                <img className="w-8" src={Especializacao} />
                                <h3 className="font-bold text-[22px] py-4">Especialização</h3>
                                <p>Cada membro da equipe D14 traz uma vasta bagagem no mundo do basquete, com anos de experiência como jogadores e treinadores.</p>
                            </div>
                        </Link>

                        <Link className="mt-12 bg-white text-left shadow-lg h-auto w-80 px-10 py-11 rounded-md  duration-200 cursor-pointer hover:shadow-xl hover:translate-y-1" to='/sobre' >
                            <div>
                                <img className="w-8" src={Filosofia} />
                                <h3 className="font-bold text-[22px] py-4">Filosofia</h3>
                                <p>Nossa equipe não apenas ensina as técnicas do jogo, mas também trabalha com cada atleta para desenvolver valores como disciplina, trabalho em equipe e resiliência.</p>
                            </div>
                        </Link>
                    </div>
                </div>

                <div className="px-8 mt-10 xl:mt-0">
                    <img className="shadow-md w-auto" src={Equipe} />
                </div>
            </div>

            {/* Camps */}
            <div className="h-auto bg-custom-gradient items-center justify-center text-center flex flex-col gap-10 py-32">
                <h1 className="text-5xl font-bold text-white">Participe dos Nossos <span className="text-customGreen">Camps</span></h1>
                <p className="text-white px-10 2xl:px-96 w-auto">Os camps são eventos periódicos que contam com a presença de treinadores nacionais e internacionais, com vasta experiência, para oferecer um aprendizado único aos nossos alunos.</p>

                <div className="flex gap-6">
                    <Link to='/treinamentos'>
                        <button className="bg-customGreen shadow-customGreen/30 shadow-md text-white font-semibold rounded-sm px-8 py-3 duration-150 hover:scale-105">
                            Ver Treinos
                        </button>
                    </Link>

                    <Link to='/contato' className="rounded-sm relative border-2 border-white bg-transparent py-2.5 px-8 font-medium uppercase text-white transition-colors before:absolute before:left-0 before:top-0 before:-z-56 before:h-full before:w-full before:origin-top-left before:scale-x-0 before:bg-customGreen before:transition-transform before:duration-300 before:content-[''] hover:text-white before:hover:scale-x-100">
                        <button className="font-semibold relative z-56">
                            Participar
                        </button>
                    </Link>
                </div>

                <div>
                    <video className="w-full lg:w-[1000px]" controls>
                        <source src={VideoCamp} type="video/mp4" />
                    </video>
                </div>
            </div>

            {/* Sobre Nós */}
            <div className="bg-neutral-100 h-auto min-h-fit flex flex-col justify-center px-8 py-32 items-center gap-6 text-center xl:text-left text-neutral-800">
                <h1 className="font-bold text-5xl"><span className="text-customGreen">Sobre</span> Nós</h1>
                <p>Entenda a nossa origem e o que nos motiva a transformar o desempenho dos alunos.</p>

                <Link to='/sobre' >
                    <button className="bg-customGreen rounded-sm text-white font-semibold px-10 py-3 shadow-md shadow-customGreen/30 duration-150 hover:scale-105">Saiba Mais</button>
                </Link>

                <div className="flex flex-wrap text-neutral-800 gap-6 justify-center">
                    <Link className="mt-12 bg-white text-left shadow-lg h-auto w-[350px] px-10 py-11 rounded-md duration-200 cursor-pointer hover:shadow-xl hover:translate-y-1" to='/sobre' >
                        <div>
                            <img className="w-8" src={Bola} />
                            <h3 className="font-bold text-[22px] py-4">História</h3>
                            <p>Conheça como a D14 surgiu, com o propósito de criar uma academia que vai além do esporte, promovendo desenvolvimento pessoal e valores essenciais para seus atletas.</p>
                        </div>
                    </Link>

                    <Link className="mt-8 bg-white text-left shadow-lg h-auto w-[350px] px-10 py-11 rounded-md duration-200 cursor-pointer hover:shadow-xl hover:translate-y-1" to='/sobre' >
                        <div>
                            <img className="w-8" src={Legado} />
                            <h3 className="font-bold text-[22px] py-4">Legado</h3>
                            <p>Veja como a D14 Basketball Academy  está construindo um legado sólido ao formar atletas talentosos e comprometidos. Desde sua fundação, a D14 ​já ​preparou 23 atletas que ​seguiram seus estudos nos ​Estados Unidos.</p>
                        </div>
                    </Link>

                    <Link className="mt-12 bg-white text-left shadow-lg h-auto w-[350px] px-10 py-11 rounded-md duration-200 cursor-pointer hover:shadow-xl hover:translate-y-1" to='/treinamentos' >
                        <div>
                            <img className="w-8" src={Peso} />
                            <h3 className="font-bold text-[22px] py-4">Treinamento</h3>
                            <p>Saiba mais sobre nossos 3 módulos de treinamento: coletivo, personalizado e os camps, criados por treinadores experientes, nacionais e internacionais, para garantir uma experiência de alto nível a todos os atletas.</p>
                        </div>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default Home