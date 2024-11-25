import { motion } from 'framer-motion';
import { fadeInImage, fadeInLeft, fadeInUp } from "../constants/animationSettings";
import Danilo from '../assets/danilo.jpg'
import Harley from '../assets/harley.jpg'
import Katielly from '../assets/katielly.jpg'
import Fabricio from '../assets/fabricio.jpg'
import { StickyCards } from '../components/StickyCards';

const Sobre = () => {
    return (
        <div>
            {/* História */}
            <section className='pt-20'>
                <StickyCards />
                <div className='h-[20vh] bg-black'></div>
            </section>

            {/* Nossa Equipe */}
            <section className="py-32 flex flex-col justify-center items-center bg-black px-4 sm:px-8 md:px-16">
                <motion.h1 {...fadeInUp} className="mt-4 text-4xl sm:text-5xl md:text-6xl font-semibold text-white mb-16 text-center">Nossa Equipe</motion.h1>
                <div className='flex flex-col gap-44'>
                    <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-16 px-4 sm:px-10 max-w-6xl w-full">
                        <motion.div {...fadeInLeft} className="relative w-72 md:w-96">
                            <img 
                                className="w-full h-full object-cover" 
                                src={Danilo} 
                                alt="Danilo Castro"
                            />
                            {/* Gradiente sobreposto à imagem */}
                            <div className="absolute inset-0 bg-gradient-to-b from-black/0 to-black/50" />
                            {/* Nome na parte inferior */}
                            <h2 className="absolute bottom-4 left-4 text-white text-3xl font-semibold z-10">
                                Danilo Castro
                            </h2>
                        </motion.div>
                        
                        <div className="text-white flex flex-col gap-12 lg:ml-0 flex-1">
                            <motion.h3 {...fadeInLeft} className="text-xl leading-relaxed text-left">
                                Danilo Castro é ex-atleta profissional com uma carreira marcante no basquete, tendo jogado por grandes clubes como E.C. São Bernardo, C.A. Monte Líbano, C.A. Pirelli, E.C. Sírio, Mogi Report/Valtra, ACF Campos e S.C. Ulbra. Ele é multi-campeão, com títulos no Paulista, Carioca e Gaúcho, além de ser eleito quatro vezes o melhor armador do Campeonato Paulista e nomeado o melhor jogador dos campeonatos Carioca e Gaúcho.
                            </motion.h3>
                            <motion.h3 {...fadeInLeft} className="text-xl leading-relaxed text-left">
                                Além de comentarista na Band e BandSports, Danilo é instrutor de basquete na Competition Sports Club, idealizador e proprietário da D14 Basketball e Portal X Sports, e atua como personal coach. Formado em Educação Física, ele traz toda sua experiência como atleta e gestor para inspirar e desenvolver cada aluno na D14.
                            </motion.h3>
                        </div>
                    </div>

                    <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-16 px-4 sm:px-10 max-w-6xl w-full">
                        <motion.div {...fadeInLeft} className="relative w-72 md:w-96">
                            <img 
                                className="w-full h-full object-cover" 
                                src={Harley} 
                                alt="Harley Fadel"
                            />
                            {/* Gradiente sobreposto à imagem */}
                            <div className="absolute inset-0 bg-gradient-to-b from-black/0 to-black/40" />
                            {/* Nome na parte inferior */}
                            <h2 className="absolute bottom-4 left-4 text-white text-3xl font-semibold z-10">
                                Harley Fadel
                            </h2>
                        </motion.div>
                        
                        <div className="text-white flex flex-col gap-12 lg:ml-0 flex-1">
                            <motion.h3 {...fadeInLeft} className="text-xl leading-relaxed text-left">
                            Harley Fadel é ex-atleta universitário formado nos Estados Unidos, compartilha a metodologia de trabalho do projeto D14 desde o primeiro treino. Natural de São Paulo, iniciou sua jornada no basquete em clubes como o Franca Basquete e, com muita dedicação, conquistou seu sonho de jogar no exterior.
                            </motion.h3>
                            <motion.h3 {...fadeInLeft} className="text-xl leading-relaxed text-left">
                            Harley possui formação acadêmica superior em uma universidade americana classificada entre as 25 melhores do país, localizada em Kentucky, EUA.
                            </motion.h3>
                        </div>
                    </div>

                    <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-16 px-4 sm:px-10 max-w-6xl w-full">
                        <motion.div {...fadeInLeft} className="relative w-72 md:w-96">
                            <img 
                                className="w-full h-full object-cover" 
                                src={Katielly} 
                                alt="Katielly Santana"
                            />
                            {/* Gradiente sobreposto à imagem */}
                            <div className="absolute inset-0 bg-gradient-to-b from-black/0 to-black/40" />
                            {/* Nome na parte inferior */}
                            <h2 className="absolute bottom-4 left-4 text-white text-3xl font-semibold z-10">
                                Katielly Santana
                            </h2>
                        </motion.div>
                        
                        <div className="text-white flex flex-col gap-12 lg:ml-0 flex-1">
                            <motion.h3 {...fadeInLeft} className="text-xl leading-relaxed text-left">
                            Técnica de basquete masculino e feminino com diversos títulos no basquete universitário. Contribuiu no livro Movimento Humano, Saúde e Desempenho, abordando a aptidão física de alunos praticantes de basquete.
                            </motion.h3>
                            <motion.h3 {...fadeInLeft} className="text-xl leading-relaxed text-left">
                            Possui Licenciatura Plena em Educação Física pela Universidade Federal de Mato Grosso e é mestre pela mesma instituição, com foco em "Ajustes e Adaptações Metabólicas e Fisiológicas ao Exercício Físico e Dieta".
                            </motion.h3>
                        </div>
                    </div>

                    <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-16 px-4 sm:px-10 max-w-6xl w-full">
                        <motion.div {...fadeInLeft} className="relative w-72 md:w-96">
                            <img 
                                className="w-full h-full object-cover" 
                                src={Fabricio} 
                                alt="Fabricio Moraes"
                            />
                            {/* Gradiente sobreposto à imagem */}
                            <div className="absolute inset-0 bg-gradient-to-b from-black/0 to-black/40" />
                            {/* Nome na parte inferior */}
                            <h2 className="absolute bottom-4 left-4 text-white text-3xl font-semibold z-10">
                            Fabricio Moraes
                            </h2>
                        </motion.div>
                        
                        <div className="text-white flex flex-col gap-12 lg:ml-0 flex-1">
                            <motion.h3 {...fadeInLeft} className="text-xl leading-relaxed text-left">
                            Ex-jogador de basquete com ampla experiência em equipes nacionais e internacionais, agora comprometido em contribuir para o desenvolvimento do esporte. Formado na base do Palmeiras, onde passou 10 anos, atuou também em times como Peruíbe, Lages, Suzano e Santo André, competindo em campeonatos regionais e estaduais. No Corinthians de Santa Cruz do Sul, participou de eventos e competições de alto nível, além de contribuir para o sucesso de equipes estaduais como Cetaf Vila Velha, Londrina, Sorocaba e Mauá.
                            </motion.h3>
                            <motion.h3 {...fadeInLeft} className="text-xl leading-relaxed text-left">
                            Internacionalmente, passou seis anos nos Estados Unidos, desenvolvendo-se em San Francisco, Los Angeles e na Flórida. Um dos pontos altos de sua trajetória foi a participação no acampamento Adidas, em 1997, um evento de destaque para o esporte.
                            </motion.h3>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Sobre