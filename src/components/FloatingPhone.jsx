import { motion } from "framer-motion";
import { FiWifi } from "react-icons/fi";
import { FaBatteryFull } from "react-icons/fa";
import Logo from '../assets/logopreta.png'
import { Link } from "react-router-dom";

const FloatingPhone = () => {
  const openNewTab = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div
      style={{
        transformStyle: "preserve-3d",
        transform: "rotateY(-30deg) rotateX(15deg)",
      }}
      className="rounded-[24px] bg-[#54AE21]/30 shadow-[0_0_25px_5px_rgba(84,174,33,0.45)]"
    >
      <motion.div
        initial={{
          transform: "translateZ(8px) translateY(-2px)",
        }}
        animate={{
          transform: "translateZ(32px) translateY(-8px)",
        }}
        transition={{
          repeat: Infinity,
          repeatType: "mirror",
          duration: 2,
          ease: "easeInOut",
        }}
        className="relative h-96 w-56 rounded-[24px] border-2 border-b-4 border-r-4 border-white/80 border-l-white/80 border-t-white/80 bg-black p-1 pl-[3px] pt-[3px]"
      >
        <HeaderBar />
        <Screen openNewTab={openNewTab} />
      </motion.div>
    </div>
  );
};

const HeaderBar = () => {
  return (
    <>
      <div className="absolute left-[50%] top-2.5 z-10 h-2 w-16 -translate-x-[50%] rounded-md bg-black"></div>
      <div className="absolute right-3 top-2 z-10 flex gap-2">
        <FiWifi className="text-gray-500" />
        <FaBatteryFull className="text-gray-500" />
      </div>
    </>
  );
};

const Screen = ({ openNewTab }) => {
  return (
    <div className="relative z-0 grid h-full w-full place-content-center overflow-hidden rounded-[20px] bg-white">
      <img
        src={Logo}
        alt="Logo"
        className="w-24 opacity-85"
      />

    <Link>
      <button 
        className="absolute bottom-4 left-4 right-4 z-10 rounded-lg bg-[#54AE21] py-2 text-sm font-medium text-white hover:bg-[#408718] transition-colors"
        onClick={() => openNewTab('https://api.whatsapp.com/send/?phone=5511973262444&text=Ol%C3%A1%2C+gostaria+de+mais+informa%C3%A7%C3%B5es+sobre+os+treinos.&type=phone_number&app_absent=0')}
      >
        AGENDAR
      </button>
    </Link>

      <div className="absolute -bottom-72 left-[50%] h-96 w-96 -translate-x-[50%] rounded-full bg-neutral-800" />
    </div>
  );
};

export default FloatingPhone;