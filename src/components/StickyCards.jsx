import { useScroll, motion, useTransform } from "framer-motion";
import React, { useRef } from "react";
import {
  FiAward,
  FiCopy,
} from "react-icons/fi";
import { FaRegBookmark, FaArrowTrendUp, FaRegCircleCheck } from "react-icons/fa6";
import { IoEarthOutline, IoFlagOutline } from "react-icons/io5";

// Importação da imagem. Ajuste o caminho conforme necessário.
import slide1 from '../assets/sobre3.jpg';
import slide2 from '../assets/sobre4.jpg';
import slide3 from '../assets/sobre2.jpg';

const StickyCards = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Índice para alternar o fundo, ignorando os cards com imagem
  let backgroundIndex = 0;

  return (
    <div ref={ref} className="relative">
      {CARDS.map((c, idx) => {
        // Determina se o card deve ser com fundo preto ou branco
        // Incrementa apenas se o card não tem imagem de fundo
        const isOddCard = c.backgroundImage ? null : (backgroundIndex++ % 2 === 0);
        return (
          <Card
            key={c.id}
            card={c}
            scrollYProgress={scrollYProgress}
            position={idx + 1}
            isOddCard={isOddCard}
          />
        );
      })}
    </div>
  );
};

const Card = ({ position, card, scrollYProgress, isOddCard }) => {
  const scaleFromPct = (position - 1) / CARDS.length;
  const y = useTransform(scrollYProgress, [scaleFromPct, 1], [0, -CARD_HEIGHT]);

  const backgroundStyle = card.backgroundImage
    ? {
        backgroundImage: `url(${card.backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }
    : {
        backgroundColor: isOddCard ? "black" : "white",
        color: isOddCard ? "white" : "black",
      };

  return (
    <motion.div
      style={{
        height: CARD_HEIGHT,
        y: position === CARDS.length ? undefined : y,
        ...backgroundStyle,
      }}
      className="sticky top-0 flex w-full origin-top flex-col items-center justify-center px-4"
    >
      {/* Renderiza conteúdo apenas se não houver backgroundImage */}
      {!card.backgroundImage && (
        <div className="flex flex-col items-center text-center">
          {card.Icon && <card.Icon className="mb-4 text-4xl" />}
          {card.title && (
            <h3 className="mb-6 text-center text-4xl font-semibold md:text-6xl">
              {card.title}
            </h3>
          )}
          {card.description && (
            <p className="mb-8 max-w-2xl text-center text-sm md:text-lg">
              {card.description}
            </p>
          )}
        </div>
      )}
    </motion.div>
  );
};

const CARD_HEIGHT = 500;

const CARDS = [
  {
    id: 1,
    Icon: FaRegBookmark,
    title: "História da D14 Basketball Academy",
    description:
      "Fundada em 07 de abril de 2018, a D14 Basketball Academy nasceu do sonho do ex-atleta Danilo Castro. Ao longo de sua carreira no basquete, Danilo acumulou vasta experiência e conhecimento, sempre desejando compartilhar sua paixão pelo esporte. Acredita que esporte e educação devem caminhar juntos, independentemente do nível técnico do atleta, promovendo um desenvolvimento integral para cada indivíduo.",
    ctaClasses: "bg-violet-300",
    routeTo: "#",
  },
  {
    id: 2,
    Icon: FaArrowTrendUp,
    title: "Parceria e Desenvolvimento",
    description:
      "A trajetória da D14 Basketball Academy é também marcada pela parceria com Harley Fadel, graduado nos Estados Unidos que retornou ao Brasil para seguir sua carreira esportiva. Danilo, que atuou como personal coach de Harley, o convidou para se juntar à D14, reconhecendo que a experiência e a energia jovem de Harley seriam essenciais para transformar o sonho da academia em realidade.",
    ctaClasses: "bg-pink-300",
    routeTo: "#",
  },
  {
    id: 3,
    Icon: null, // Sem ícone
    title: "", // Sem título
    description: "", // Sem descrição
    backgroundImage: slide1, // Caminho correto para a imagem
    ctaClasses: "bg-violet-300",
    routeTo: "#",
  },
  {
    id: 4,
    Icon: FiCopy,
    title: "Metodologia",
    description:
      "Nossos treinos são fundamentados em uma doutrina de treinamento específico para o basquetebol, desenvolvida por um dos mais renomados treinadores de fundamentos da modalidade. Nossa metodologia única foca nas necessidades individuais de cada atleta, sempre com alta intensidade, garantindo um desenvolvimento personalizado e eficaz.",
    ctaClasses: "bg-red-300",
    routeTo: "#",
  },
  {
    id: 5,
    Icon: FaRegCircleCheck,
    title: "Valores",
    description:
      "Valorizamos a prática regular de atividades físicas, promovendo rotinas saudáveis que equilibram o bem-estar psicológico, físico e motor. Buscamos descobrir novos talentos, proporcionando um marco inicial para a ascensão de jovens atletas. Além disso, oferecemos oportunidades para participar de eventos esportivos e interagir diretamente com atletas profissionais, tanto no cenário nacional quanto internacional.",
    ctaClasses: "bg-amber-300",
    routeTo: "#",
  },
  {
    id: 6,
    Icon: null, // Sem ícone
    title: "", // Sem título
    description: "", // Sem descrição
    backgroundImage: slide2, // Caminho correto para a imagem
    ctaClasses: "bg-violet-300",
    routeTo: "#",
  },
  {
    id: 7,
    Icon: IoFlagOutline,
    title: "A Trajetória de Danilo Castro",
    description:
      "Danilo encerrou sua carreira como jogador aos 39 anos e, graças ao seu compromisso com os estudos, vislumbrou um futuro promissor além das quadras. Apaixonado pelo sistema educacional e esportivo norte-americano, onde a performance acadêmica é tão valorizada quanto o desempenho esportivo, Danilo decidiu trazer essa filosofia para o Brasil. 'Sou fã e incentivador do sistema norte-americano de treinamento e ensino educacional. Independentemente do nível técnico, se o atleta não mantém a média escolar, ele não está apto a jogar', afirma Danilo, destacando a importância do equilíbrio entre educação e esporte.",
    ctaClasses: "bg-amber-300",
    routeTo: "#",
  },
  {
    id: 8,
    Icon: IoEarthOutline,
    title: "Preparando Atletas para o Mundo",
    description:
      "Desde sua fundação, a D14 Basketball Academy já preparou 23 atletas que seguiram seus estudos nos Estados Unidos. Nossa academia foca não apenas no desenvolvimento técnico, mas também na preparação emocional dos jovens, auxiliando-os a enfrentar desafios como a distância de casa, adaptação a novos climas e idiomas, e a superação de dificuldades fora da zona de conforto. Danilo enfatiza que a D14 Basketball Academy não apenas envia atletas para os EUA, mas os prepara para enfrentar os desafios e aproveitar as oportunidades que surgem ao buscar uma carreira acadêmica e esportiva internacional.",
    ctaClasses: "bg-amber-300",
    routeTo: "#",
  },
  {
    id: 9,
    Icon: null, // Sem ícone
    title: "", // Sem título
    description: "", // Sem descrição
    backgroundImage: slide3, // Caminho correto para a imagem
    ctaClasses: "bg-violet-300",
    routeTo: "#",
  },
  {
    id: 10,
    Icon: FiAward,
    title: "Competições e Crescimento",
    description:
      "Um marco importante na história da D14 é o envolvimento em competições na Grande São Paulo. Atualmente, a academia conta com equipes nas categorias U14, U15, U16, U18 e U22, que participam ativamente de torneios. Isso proporciona aos alunos a oportunidade de aplicar o que aprenderam nos treinos em situações reais de jogo, promovendo crescimento técnico e pessoal contínuo.",
    ctaClasses: "bg-amber-300",
    routeTo: "#",
  },
];

export default StickyCards;