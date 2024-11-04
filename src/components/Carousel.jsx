import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import img1 from '../assets/img1.jpg'
import img2 from '../assets/img2.jpg'
import img3 from '../assets/img3.jpg'
import img4 from '../assets/img4.jpg'
import img5 from '../assets/img5.jpg'
import img6 from '../assets/img6.jpg'
import img7 from '../assets/img7.jpg'

const Carousel = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh] bg-neutral-900">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-4">
          {cards.map((card) => {
            return <Card card={card} key={card.id} />;
          })}
        </motion.div>
      </div>
    </section>
  );
};

const Card = ({ card }) => {
  return (
    <div
      key={card.id}
      className="group relative h-[300px] w-[300px] md:h-[450px] md:w-[450px] overflow-hidden bg-neutral-200"
    >
      <img
        src={card.url}
        className="absolute h-full inset-0 z-0 transition-transform duration-300 group-hover:scale-110"
      />
      <div className="absolute inset-0 z-10 grid place-content-center">
        <p className="bg-gradient-to-br from-white/20 to-white/0 p-8 text-3xl md:text-6xl font-black uppercase text-white backdrop-blur-lg">
          {card.title}
        </p>
      </div>
    </div>
  );
};

export default Carousel;

const cards = [
  {
    url: img1,
    title: "Excelência",
    id: 1,
  },
  {
    url: img4,
    title: "Raça",
    id: 2,
  },
  {
    url: img5,
    title: "Resultado",
    id: 3,
  },
  {
    url: img3,
    title: "Dedicação",
    id: 4,
  },
  {
    url: img2,
    title: "Execução",
    id: 5,
  },
  {
    url: img7,
    title: "Qualidade",
    id: 6,
  },
  {
    url: img6,
    title: "Evolução",
    id: 7,
  },
];