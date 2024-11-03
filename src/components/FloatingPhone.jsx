import { motion } from "framer-motion";
import { FiWifi } from "react-icons/fi";
import { FaBatteryFull } from "react-icons/fa";
import Logo from '../assets/logopreta.png'
import { Link } from "react-router-dom";

const FloatingPhone = () => {
  return (
    <div
      style={{
        transformStyle: "preserve-3d",
        transform: "rotateY(-30deg) rotateX(15deg)",
      }}
      className="rounded-[24px] bg-customGreen2"
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
        className="relative h-96 w-56 rounded-[24px] border-2 border-b-4 border-r-4 border-white border-l-neutral-200 border-t-neutral-200 bg-neutral-900 p-1 pl-[3px] pt-[3px]"
      >
        <HeaderBar />
        <Screen />
      </motion.div>
    </div>
  );
};

const HeaderBar = () => {
  return (
    <>
      <div className="absolute left-[50%] top-2.5 z-10 h-2 w-16 -translate-x-[50%] rounded-md bg-neutral-900"></div>
      <div className="absolute right-3 top-2 z-10 flex gap-2">
        <FiWifi className="text-neutral-600" />
        <FaBatteryFull className="text-neutral-600" />
      </div>
    </>
  );
};

const Screen = () => {
  return (
    <div className="relative z-0 grid h-full w-full place-content-center overflow-hidden rounded-[20px] bg-white">
      <img
        src={Logo}
        alt="Logo"
        className="w-24 opacity-85"
      />

    <Link to='/contato'>
      <button className="absolute bottom-4 left-4 right-4 z-10 rounded-lg border-2 bg-customGreen2 border-customGreen3 py-2 text-sm font-medium text-white shadow-custom-shadow shadow-customGreen3/50 hover:bg-customGreen2/80">
        AGENDAR
      </button>
    </Link>

      <div className="absolute -bottom-72 left-[50%] h-96 w-96 -translate-x-[50%] rounded-full bg-neutral-800" />
    </div>
  );
};

export default FloatingPhone;