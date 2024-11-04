import Coletivo from '../assets/coletivo.png'
import Camp from '../assets/camp.png'
import Personalizado from '../assets/filosofia.png'
import SlidePricing from '../components/SlidePricing'

const Treinamentos = () => {
    return (
        <>
            {/* <div className="bg-neutral-100 h-screen min-h-fit flex flex-col justify-center px-8 py-40 gap-10 items-center text-center text-neutral-800">
                <h1 className="font-bold text-5xl text-neutral-800">Selecione o <span className="text-customGreen">Treinamento</span> que Deseja Saber Mais</h1>
                <p>Encontre o programa perfeito para elevar suas habilidades no basquete, seja sozinho ou em grupo.</p>

                <div className="flex flex-wrap items-center justify-center gap-6 text-neutral-800">
                    <button className='mt-12 bg-white text-left shadow-lg h-80 w-80 px-10 py-11 rounded-md hover:bg-neutral-200 duration-150 cursor-pointer hover:invert'>
                        <img src={Coletivo} className='w-8' />
                        <h3 className='font-bold text-[22px] py-4'>Coletivo</h3>
                        <p>Desenvolva suas habilidades em um ambiente colaborativo, aprimorando a sinergia e o desempenho coletivo.</p>
                    </button>
                    <button className='mt-12 bg-white text-left shadow-lg h-80 w-80 px-10 py-11 rounded-md hover:bg-neutral-200 duration-150 cursor-pointer hover:invert'>
                        <img src={Personalizado} className='w-8' />
                        <h3 className='font-bold text-[22px] py-4'>Personalizado</h3>
                        <p>Receba um plano de treinamento individualizado, focado nas suas necessidades e metas específicas, no conforto da sua casa.</p>
                    </button>
                    <button className='mt-12 bg-white text-left shadow-lg h-80 w-80 px-10 py-11 rounded-md hover:bg-neutral-200 duration-150 cursor-pointer hover:invert'>
                        <img src={Camp} className='w-8' />
                        <h3 className='font-bold text-[22px] py-4'>Camp</h3>
                        <p>Participe de nossos camps intensivos com treinadores experientes, aprimorando suas técnicas e conhecimentos em eventos exclusivos.</p>
                    </button>
                </div>
            </div> */}

            <SlidePricing />
        </>
    )
}

export default Treinamentos