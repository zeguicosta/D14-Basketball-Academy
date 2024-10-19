import { Link } from "react-router-dom"
import Seta from '../assets/seta2.png'
import { useEffect, useState } from "react"
import Splash from "../components/Splash";

const Home = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [fadeOut, setFadeOut] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setFadeOut(true);
            // Após a duração de 0.5s de fadeout, remove o SplashScreen
            setTimeout(() => {
                setIsLoading(false);
            }, 500);
        }, 2750);

        // Limpa o timer se o componente for desmontado antes
        return () => clearTimeout(timer);
    }, []);
    
    return (
        <>
            {isLoading && <Splash fadeOut={fadeOut} />}

            {/* Início */}
            <div className="bg-black top-0 h-screen bg-[url('src/assets/bg.png')] bg-cover bg-center flex flex-col items-center justify-center">
                <h3 className="text-customGreen font-bold text-1xl sm:text-[18px] uppercase duration-500">Danilo Castro</h3>
                <h1 className="text-white font-bold text-5xl sm:text-7xl xl:text-8xl duration-500">BASKETBALL</h1>
                <h1 className="text-white font-bold text-5xl sm:text-7xl xl:text-8xl duration-500">ACADEMY</h1>
                <p className="text-white text-1xl mt-9 sm:mt-7 px-20 text-center duration-500">Academia de basquete dedicada a quem deseja se destacar<br></br> nas quadras. <span className="font-bold">Entre agora para o nosso time!</span></p>
                <Link to='/contato' className="mt-10 rounded-sm relative border-2 border-white bg-transparent py-2.5 px-5 font-medium uppercase text-white transition-colors before:absolute before:left-0 before:top-0 before:-z-56 before:h-full before:w-full before:origin-top-left before:scale-x-0 before:bg-white before:transition-transform before:duration-300 before:content-[''] hover:text-neutral-800 before:hover:scale-x-100">
                    <button className="font-semibold relative z-55">Inscrever-se</button>
                </Link>
                <button className="absolute bottom-10 animate-bounce">
                    <img src={Seta} className="w-8 rotate-90" />
                </button>
            </div>

            {/* Sobre Nós */}
            <div>
                
            </div>
        </>
    )
}

export default Home