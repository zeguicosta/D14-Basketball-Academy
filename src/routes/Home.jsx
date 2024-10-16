import { Link } from "react-router-dom"

const Home = () => {
    return (
        <>
            <div className="bg-black top-0 h-screen bg-[url('src/assets/bg.png')] bg-cover bg-center flex flex-col items-center justify-center pb-24 2xl:pb-60">
                <h3 className="text-customGreen font-bold text-1xl sm:text-[18px] uppercase duration-500">Danilo Castro</h3>
                <h1 className="text-white font-bold text-5xl sm:text-7xl xl:text-8xl duration-500">BASKETBALL</h1>
                <h1 className="text-white font-bold text-5xl sm:text-7xl xl:text-8xl duration-500">ACADEMY</h1>
                <p className="text-white text-1xl mt-9 sm:mt-7 px-20 text-center duration-500">Academia de basquete dedicada a quem deseja se destacar<br></br> nas quadras. <span className="font-bold">Entre agora para o nosso time!</span></p>
                <Link to='/' className="mt-14 rounded-sm relative border-2 border-white bg-transparent py-2.5 px-5 font-medium uppercase text-white transition-colors before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:origin-top-left before:scale-x-0 before:bg-white before:transition-transform before:duration-300 before:content-[''] hover:text-neutral-700 before:hover:scale-x-100 animate-bounce">
                    <button className="font-semibold">Inscrever-se</button>
                </Link>
            </div>
        </>
    )
}

export default Home