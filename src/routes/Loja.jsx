import { motion } from 'framer-motion';
import { fadeInImage, fadeInLeft, fadeInUp } from "../constants/animationSettings";
import { Link } from 'react-router-dom';

const Loja = () => {
    return (
        <>
            <section className="h-screen bg-black flex flex-col gap-10 justify-center items-center">
                <motion.h1 className="text-white text-7xl">Em Breve!</motion.h1>
                <Link to='/' >
                    <motion.button className="bg-customGreen border-2 border-customGreen4 mt-2 rounded-lg text-white font-semibold px-8 py-3 shadow-customGreen/40 shadow-custom-shadow duration-150 hover:bg-customGreen5">Voltar para o início</motion.button>
                </Link>
            </section>
        </>
    )
}

export default Loja