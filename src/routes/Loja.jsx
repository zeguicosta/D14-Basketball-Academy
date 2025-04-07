import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, Construction } from 'lucide-react';

const Loja = () => {
    return (
        <div className="relative min-h-screen bg-black overflow-hidden">
            <div className="absolute inset-0 opacity-50">
                <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                    style={{
                        backgroundImage: 'url("https://images.unsplash.com/photo-1546519638-68e109498ffc?q=80&w=2070")',
                    }}
                >
                    <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black" />
                </div>
            </div>

            <motion.div
                className="absolute inset-0 pointer-events-none"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
            >
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-32 bg-gradient-to-b from-transparent via-[#54AE21]/50 to-transparent" />
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1 h-32 bg-gradient-to-b from-transparent via-[#54AE21]/50 to-transparent" />
                <div className="absolute left-0 top-0 w-64 h-64 bg-[#54AE21]/10 rounded-full blur-3xl" />
                <div className="absolute right-0 bottom-0 w-72 h-72 bg-[#54AE21]/10 rounded-full blur-3xl" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(84,174,33,0.05)_0%,transparent_50%)]" />
            </motion.div>

            <div className="relative container mx-auto px-4 min-h-screen flex flex-col items-center justify-center text-center z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="flex items-center justify-center gap-4 mb-8"
                >
                    <Construction className="h-12 w-12 text-[#54AE21]" />
                    <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
                        Loja em Construção
                    </h1>
                </motion.div>

                <motion.p
                    className="text-lg text-gray-300 mb-12 max-w-xl"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                >
                    Estamos trabalhando para trazer os melhores produtos da D14 para você. Volte em breve para conferir as novidades!
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                >
                    <Link to='/'>
                        <motion.button
                            className="bg-[#54AE21] text-white px-8 py-4 rounded-md font-semibold flex items-center justify-center gap-2 hover:bg-[#408718] transition-colors group relative overflow-hidden"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <ArrowLeft className="h-5 w-5 group-hover:-translate-x-1 transition-transform relative z-10" />
                            <span className="relative z-10">Voltar para o Início</span>
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000" />
                        </motion.button>
                    </Link>
                </motion.div>
            </div>
        </div>
    );
}

export default Loja;