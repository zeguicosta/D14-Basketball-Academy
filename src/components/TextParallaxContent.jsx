import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";
import Imagem1 from '../assets/campimg.jpg'
import Imagem2 from '../assets/campimg2.jpg'
import Imagem3 from '../assets/campimg3.jpg'

export const TextParallaxContentExample = () => {
  return (
    <div className="bg-white">
      <TextParallaxContent
        imgUrl={Imagem1}
        subheading="Camps"
        heading="Evolua com os melhores."   
      >
        <ExampleContent />
      </TextParallaxContent>
      <TextParallaxContent
        imgUrl={Imagem2}
        subheading="Coletivo"
        heading="Aprenda e evolua em conjunto."
      >
        <ExampleContent2 />
      </TextParallaxContent>
      <TextParallaxContent
        imgUrl={Imagem3}
        subheading="Personalizado"
        heading="Desenvolvimento individual."
      >
        <ExampleContent3 />
      </TextParallaxContent>
    </div>
  );
};

const IMG_PADDING = 12;

const TextParallaxContent = ({ imgUrl, subheading, heading, children }) => {
  return (
    <div
      style={{
        paddingLeft: IMG_PADDING,
        paddingRight: IMG_PADDING,
      }}
    >
      <div className="relative h-[150vh]">
        <StickyImage imgUrl={imgUrl} />
        <OverlayCopy heading={heading} subheading={subheading} />
      </div>
      {children}
    </div>
  );
};

const StickyImage = ({ imgUrl }) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["end end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.85]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <motion.div
      style={{
        backgroundImage: `url(${imgUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: `calc(100vh - ${IMG_PADDING * 2}px)`,
        top: IMG_PADDING,
        scale,
      }}
      ref={targetRef}
      className="sticky z-0 overflow-hidden rounded-3xl"
    >
      <motion.div
        className="absolute inset-0 bg-neutral-950/80"
        style={{
          opacity,
        }}
      />
    </motion.div>
  );
};

const OverlayCopy = ({ subheading, heading }) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [250, -250]);
  const opacity = useTransform(scrollYProgress, [0.25, 0.5, 0.75], [0, 1, 0]);

  return (
    <motion.div
      style={{
        y,
        opacity,
      }}
      ref={targetRef}
      className="absolute left-0 top-0 flex h-screen w-full flex-col items-center justify-center text-white"
    >
      <p className="mb-2 text-center text-xl md:mb-4 md:text-3xl">
        {subheading}
      </p>
      <p className="text-center text-4xl font-bold md:text-7xl">{heading}</p>
    </motion.div>
  );
};

const ExampleContent = () => (
  <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 px-4 pb-24 pt-12 md:grid-cols-12">
    <h2 className="col-span-1 text-3xl font-bold md:col-span-4 text-customGreen">
    Transforme seu jogo com nossos Camps exclusivos!
    </h2>
    <div className="col-span-1 md:col-span-8">
      <p className="mb-4 text-xl text-neutral-600 md:text-2xl">
      Prepare-se para elevar seu nível de jogo e conquistar novas metas! Participe dos nossos Camps, onde treinadores internacionais de elite compartilham técnicas inovadoras e conduzem sessões intensivas para acelerar seu desenvolvimento.
      </p>
      <p className="mb-8 text-xl text-neutral-600 md:text-2xl">
        Você irá enfrentar desafios estimulantes e participar de jogos simulados que aprimoram seu entrosamento e desempenho em equipe. Vivencie um ambiente de aprendizado avançado e alcance novos patamares no basquete. Inscreva-se agora e transforme seu jogo!
      </p>
      <button className="w-full rounded bg-neutral-800 px-9 py-4 text-xl text-white transition-colors hover:bg-neutral-700 md:w-fit">
        Quero Participar <FiArrowUpRight className="inline" />
      </button>
    </div>
  </div>
);

const ExampleContent2 = () => (
    <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 px-4 pb-24 pt-12 md:grid-cols-12">
        <h2 className="col-span-1 text-3xl font-bold md:col-span-4 text-customGreen">
        Desenvolva suas habilidades em equipe!
        </h2>
        <div className="col-span-1 md:col-span-8">
        <p className="mb-4 text-xl text-neutral-600 md:text-2xl">
        Acreditamos que o trabalho em equipe é fundamental para o sucesso no basquete. Nosso programa Coletivo oferece uma dinâmica de equipe única, com desafios constantes e jogos simulados que promovem a melhora no entrosamento e a colaboração entre os jogadores.
        </p>
        <p className="mb-8 text-xl text-neutral-600 md:text-2xl">
        Junte-se ao nosso Coletivo e experimente um ambiente onde aprender e evoluir em conjunto é a chave para alcançar grandes resultados. Participe e leve seu desempenho para o próximo nível!
        </p>
        <button className="w-full rounded bg-neutral-800 px-9 py-4 text-xl text-white transition-colors hover:bg-neutral-700 md:w-fit">
            Quero Participar <FiArrowUpRight className="inline" />
        </button>
        </div>
    </div>
);

const ExampleContent3 = () => (
    <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 px-4 pb-24 pt-12 md:grid-cols-12">
        <h2 className="col-span-1 text-3xl font-bold md:col-span-4 text-customGreen">
        Treinamento sob medida para você!
        </h2>
        <div className="col-span-1 md:col-span-8">
        <p className="mb-4 text-xl text-neutral-600 md:text-2xl">
        Na D14 Basketball Academy, entendemos que cada atleta é único. Nosso programa Personalizado oferece um desenvolvimento individual focado nas suas necessidades específicas, com atenção exclusiva e feedback constante para garantir que você alcance seu máximo potencial.
        </p>
        <p className="mb-8 text-xl text-neutral-600 md:text-2xl">
        Oferecemos treinamentos personalizados que você pode realizar em casa ou em qualquer outro lugar fora da academia D14. Receba um programa específico montado para você, com acompanhamento contínuo e atenção exclusiva, garantindo que seu desenvolvimento não tenha limites.
        </p>
        <button className="w-full rounded bg-neutral-800 px-9 py-4 text-xl text-white transition-colors hover:bg-neutral-700 md:w-fit">
            Quero Participar <FiArrowUpRight className="inline" />
        </button>
        </div>
    </div>
);