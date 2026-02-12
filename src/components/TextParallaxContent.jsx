import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Flag, ChevronRight } from "lucide-react";
import { TextReveal } from "./ui/text-reveal-animation";
import campimg from '../assets/campimg.jpg'

export const TextParallaxContentExample = () => {
  return (
    <div className="bg-white">
      <TextParallaxContent
        imgUrl={campimg}
        subheading="Nossa História"
        heading="Formando atletas de alto nível"
      >
        <ExampleContent />
      </TextParallaxContent>
    </div>
  );
};

const IMG_PADDING = 12;

const TextParallaxContent = ({ imgUrl, subheading, heading, children }) => {
  return (
    <div
      className="bg-white"
      style={{
        paddingLeft: IMG_PADDING,
        paddingRight: IMG_PADDING,
      }}
    >
      <div className="relative h-[150vh]">
        <StickyImage imgUrl={imgUrl} />
        <OverlayCopy heading={heading} subheading={subheading} />
      </div>
      <div className="bg-white relative z-10">
        {children}
      </div>
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
      <div className="mb-2 text-center text-xl md:mb-4 md:text-3xl">
        <TextReveal word={subheading} className="text-xl md:text-3xl font-medium text-white block text-center" delayBase={0.15} />
      </div>
      <div className="text-center text-4xl font-bold md:text-7xl">
        <TextReveal word="Formando atletas de " className="text-4xl font-bold md:text-7xl text-white inline-block text-center" delayBase={0.35} />
        <span className="inline-block whitespace-nowrap">
          <TextReveal word="alto nível" className="text-4xl font-bold md:text-7xl text-white inline-block text-center" delayBase={0.35} />
        </span>
      </div>
    </motion.div>
  );
};

const ExampleContent = () => (
  <section className="py-20 md:py-28 bg-white">
    <div className="container mx-auto px-4 md:px-6">
      <motion.div
        className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <div className="lg:col-span-7">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#54AE21]/10 rounded-full mb-4">
            <Flag className="h-5 w-5 text-[#54AE21]" />
            <span className="font-medium text-[#54AE21]">Nossa história</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-medium text-gray-900 mb-4">Fundação e Filosofia</h2>
          <p className="text-gray-600 text-base leading-relaxed mb-5">
            Fundada em 07 de abril de 2018, a D14 Basketball Academy nasceu do sonho do ex-atleta Danilo Castro. Ao longo de sua carreira no basquete, Danilo acumulou vasta experiência e conhecimento, sempre desejando compartilhar sua paixão pelo esporte.
          </p>
          <p className="text-gray-600 text-base leading-relaxed mb-8">
            Acredita que esporte e educação devem caminhar juntos, independentemente do nível técnico do atleta, promovendo um desenvolvimento integral para cada indivíduo.
          </p>
          <a
            href="#nossa-equipe"
            className="inline-flex items-center gap-2 text-[#54AE21] font-medium hover:text-[#54AE21]/90 transition-colors"
          >
            Conheça Nossa Equipe
            <ChevronRight className="h-4 w-4" />
          </a>
        </div>
        <div className="lg:col-span-5 flex items-center justify-center lg:justify-end">
          <div className="text-8xl md:text-[10rem] lg:text-[12rem] font-medium text-[#54AE21]/20 tracking-tight leading-none select-none">
            2018
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);