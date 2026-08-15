import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, MessageCircle, Play } from 'lucide-react';

const depoimentos = [
  { nome: 'Leonardo', contexto: 'Carolina do Norte, Estados Unidos', video: '/videos/depoimento1.mp4' },
  { nome: 'Luis Antônio', contexto: 'Pensilvânia, Estados Unidos', video: '/videos/depoimento2.mp4' },
  { nome: 'Arthur Borges', contexto: 'Do Setor Olímpico para os Estados Unidos', video: '/videos/depoimento3.mp4' },
  { nome: 'Paulo', contexto: 'Massachusetts, Estados Unidos', video: '/videos/depoimento4.mp4' },
];

// Proporção fixa (retrato 9:16) para todos os cards ficarem do mesmo tamanho no grid,
// já que os vídeos vêm com proporções ligeiramente diferentes entre si.
const CARD_RATIO = 9 / 16;

function VideoTestemunho({ nome, contexto, video }) {
  const videoRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  const handleLoadedMetadata = () => {
    const el = videoRef.current;
    if (!el) return;
    // Sem isso o navegador (Chrome) mantém a tela preta em vez de mostrar o primeiro frame como prévia.
    if (el.currentTime === 0) {
      el.currentTime = 0.1;
    }
  };

  const handlePlayClick = () => {
    const el = videoRef.current;
    if (!el) return;
    el.muted = false;
    el.play();
    setPlaying(true);
  };

  return (
    <div className="w-full max-w-xs sm:max-w-sm mx-auto">
      <div
        className="group relative overflow-hidden rounded-2xl border-2 border-white/20 bg-black hover:border-[#54AE21]/40 transition-colors duration-300 shadow-[0_4px_24px_-4px_rgba(0,0,0,0.35)]"
        style={{ aspectRatio: CARD_RATIO }}
      >
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#54AE21]/25 to-transparent group-hover:via-[#54AE21]/70 transition-colors duration-300 z-10" />
        <video
          ref={videoRef}
          src={video}
          muted={!playing}
          controls={playing}
          playsInline
          preload="metadata"
          onLoadedMetadata={handleLoadedMetadata}
          className="w-full h-full object-cover bg-black"
        />
        {!playing && (
          <button
            type="button"
            onClick={handlePlayClick}
            className="absolute inset-0 w-full h-full flex items-center justify-center bg-black/30 hover:bg-black/40 transition-colors"
            aria-label={`Assistir depoimento de ${nome}`}
          >
            <span className="flex items-center justify-center w-16 h-16 rounded-full bg-[#54AE21] shadow-[0_8px_24px_-4px_rgba(84,174,33,0.5)] group-hover:scale-110 transition-transform duration-300">
              <Play className="h-7 w-7 text-white ml-1" fill="white" />
            </span>
          </button>
        )}
      </div>
      <div className="mt-4 text-center">
        <p className="text-[#F4F4F5] font-medium">{nome}</p>
        <p className="text-[#F4F4F5]/70 text-sm flex items-center justify-center gap-1.5 mt-0.5">
          <MapPin className="h-3.5 w-3.5 text-[#54AE21]" />
          {contexto}
        </p>
      </div>
    </div>
  );
}

export default function Depoimentos() {
  return (
    <section id="depoimentos" className="py-20 md:py-28 bg-site relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#54AE21]/10 rounded-full mb-4">
            <MessageCircle className="h-5 w-5 text-[#54AE21]" />
            <span className="font-medium text-[#54AE21]">Depoimentos</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-medium text-[#F4F4F5] mb-4">O Que Dizem Sobre a D14</h2>
          <p className="text-[#F4F4F5]/85 max-w-2xl mx-auto">
            Histórias reais de quem viveu a jornada D14 e hoje colhe os resultados dentro e fora de quadra.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 max-w-3xl mx-auto">
          {depoimentos.map((depoimento, index) => (
            <motion.div
              key={depoimento.video}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease: 'easeOut', delay: index * 0.05 }}
              viewport={{ once: true, margin: '-50px' }}
            >
              <VideoTestemunho {...depoimento} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
