import { Link } from "react-router-dom"

const Home = () => {
    return (
        <>
            <div className="bg-black top-0 h-screen bg-[url('src/assets/bg.png')] bg-cover bg-center flex flex-col items-center justify-center pb-24 2xl:pb-60">
                <h3 className="text-customGreen font-bold text-1xl sm:text-[18px] uppercase duration-500">Danilo Castro</h3>
                <h1 className="text-white font-bold text-5xl sm:text-7xl xl:text-8xl duration-500">BASKETBALL</h1>
                <h1 className="text-white font-bold text-5xl sm:text-7xl xl:text-8xl duration-500">ACADEMY</h1>
                <p className="text-white text-1xl mt-9 sm:mt-7 px-20 text-center duration-500">Academia de basquete dedicada a quem deseja se destacar<br></br> nas quadras. <span className="font-bold">Entre agora para o nosso time!</span></p>
                <Link to='/' className="bg-white text-neutral-700 duration-200 hover:bg-neutral-800 hover:text-white hover:shadow-black px-8 py-[11px] rounded-md mt-14 shadow-white/40 shadow-lg animate-bounce">
                    <button className="font-semibold">Inscreva-se</button>
                </Link>
            </div>
        </>
    )
}

export default Home