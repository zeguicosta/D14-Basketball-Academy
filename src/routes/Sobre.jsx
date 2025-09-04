import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Trophy, Users, Target, Medal, GraduationCap, Heart, Award, BookOpen, Globe, Flag, Rocket, ChevronRight, ExternalLink, Layers } from 'lucide-react';
import { TextParallaxContentExample } from '../components/TextParallaxContent';
import Danilo from '../assets/daniloofc.jpg';
import Harley from '../assets/harley.jpg';
import Katielly from '../assets/katielly.jpg';
import Fabricio from '../assets/fabricio.jpg';
import Diogo from '../assets/diogocastro.jpg';
import LogoBlanco from '../assets/logo.png';
import LogoGrande from '../assets/logogrande.png';
import TeamMemberModal from '../components/TeamMemberModal';

// Import new images from assets
import SobreImage1 from '../assets/campimg3.jpg';
import SobreImage4 from '../assets/slide1.jpg';
import CampImage from '../assets/campimg2.jpg';

const team = [
  {
    name: "Danilo Castro",
    role: "Fundador e Head Coach",
    image: Danilo,
    description: "Ex-atleta profissional com vasta experiência em clubes de ponta e múltiplos títulos estaduais e prêmios individuais. Graduado em Educação Física, Danilo aplica sua vivência única e conhecimento técnico para lapidar os talentos da D14.",
    fullDescription: `
      Com uma carreira consolidada como atleta profissional de basquete, Danilo Castro traz uma bagagem de experiência inestimável para a D14. Sua trajetória inclui passagens marcantes por grandes clubes como E.C. São Bernardo, C.A. Monte Líbano, C.A. Pirelli, E.C. Sírio, Mogi Report/Valtra, ACF Campos e S.C. Ulbra.

      Conquistas Notáveis:

      Campeão Paulista
      Campeão Carioca
      Campeão Gaúcho
      Eleito 4x o melhor armador do Campeonato Paulista e membro da seleção do campeonato
      Melhor jogador (MVP) dos Campeonatos Carioca e Gaúcho

      Atuação Atual:

      Além de liderar a D14 Basketball Academy, Danilo é comentarista na BandTV e BandSports, instrutor de basquete na Competition Sports Club, idealizador do Portal XSports e atua como Personal Coach de Basketball, demonstrando sua paixão e dedicação contínuas ao esporte.

      Formação e Filosofia:

      Graduado em Educação Física, Danilo combina sua profunda experiência prática nas quadras com conhecimento técnico e pedagógico. Ele transmite não apenas habilidades, mas também os valores e a mentalidade necessários para que os alunos da D14 alcancem a excelência dentro e fora do jogo.
    `
  },
  {
    name: "Harley Fadel",
    role: "Diretor Técnico",
    image: Harley,
    description: "Ex-atleta formado nos EUA, retornou ao Brasil para se juntar à D14. Sua experiência internacional traz uma perspectiva única ao desenvolvimento dos atletas.",
    fullDescription: `
      Ex-atleta universitário com formação nos Estados Unidos, Harley Fadel traz uma perspectiva internacional valiosa para a D14, compartilhando a mesma metodologia de trabalho do projeto desde o início.

      Trajetória no Basquete:

      Nascido em São Paulo, Harley iniciou sua jornada no basquete local.
      Sua dedicação o levou a ter passagens por clubes brasileiros de destaque, como o Franca Basquete.
      Com muito esforço, concretizou o sonho de levar sua carreira para os Estados Unidos, atuando no cenário universitário.

      Formação Acadêmica:

      Graduado com formação superior em uma universidade americana localizada no Kentucky (KY), classificada entre as Top 25 "Best Colleges" da região.

      Contribuição para a D14:

      Ao retornar ao Brasil, Harley se integrou à equipe técnica da D14, agregando seus conhecimentos e vivência internacional para enriquecer o desenvolvimento dos atletas da academia. Sua visão complementa a metodologia estabelecida, fortalecendo a preparação dos jogadores para desafios em nível global.
    `
  },
  {
    name: "Katielly Santana",
    role: "Preparadora Física",
    image: Katielly,
    description: "Especialista em preparação física para basquete, desenvolve programas personalizados para maximizar o desempenho dos atletas.",
    fullDescription: `
      Como Técnica de Basquete masculino e feminino, Katielly Santana acumula diversos títulos no cenário universitário, trazendo uma vasta experiência prática e acadêmica para a D14.

      Contribuições e Reconhecimento:

      Autora com participação no livro "Movimento Humano, Saúde e Desempenho.1", onde abordou a aptidão física relacionada à saúde de alunos praticantes de basquetebol.
      Responsável pelo desenvolvimento de programas de preparação física personalizados, focados na maximização do desempenho e na prevenção de lesões.

      Formação Acadêmica:

      Licenciatura Plena em Educação Física pela Universidade Federal de Mato Grosso (UFMT).
      Mestrado pela Universidade Federal de Mato Grosso (UFMT), com pesquisa na linha "Ajustes e Adaptações Metabólicas e Fisiológicas ao Exercício Físico e Dieta".

      Impacto na D14:

      Sua expertise científica e prática em educação física e fisiologia do exercício é fundamental para o desenvolvimento físico integral dos atletas da D14, preparando-os para as exigências do alto rendimento.
    `
  },
  {
    name: "Fabricio Moraes",
    role: "Coach de Desenvolvimento",
    image: Fabricio,
    description: "Focado no desenvolvimento técnico individual, trabalha para aperfeiçoar as habilidades específicas de cada atleta.",
    fullDescription: `
      Ex-jogador de basquete com uma rica trajetória em equipes nacionais e internacionais, Fabricio Moraes traz sua vasta experiência para a D14, dedicando-se ao desenvolvimento da nova geração após se aposentar das quadras aos 29 anos.

      Trajetória como Jogador:

      Fabricio construiu uma base sólida no Palmeiras, onde atuou por 10 anos nas categorias de base. Sua carreira profissional o levou a competir em diversos campeonatos regionais e estaduais por clubes como Peruíbe, Lages (SC), Suzano, Santo André, Cetaf Vila Velha (ES), Londrina (PR), Sorocaba e Mauá. Ele também teve passagem pelo Corinthians de Santa Cruz do Sul (RS), participando de competições de alto nível.

      Experiência Internacional:

      Complementando sua carreira no Brasil, Fabricio passou 6 anos desenvolvendo suas habilidades nos Estados Unidos, com vivências em San Francisco, Los Angeles e Flórida. Um destaque de sua jornada foi a participação no renomado acampamento Adidas Camp em 1997.

      Foco Atual na D14:

      Após sua aposentadoria como atleta, Fabricio direciona seu conhecimento e paixão pelo jogo para o crescimento do basquete. Na D14, ele atua como Coach de Desenvolvimento, focando no aprimoramento técnico individual e na transmissão de sua valiosa experiência prática para os jovens atletas da academia.
    `
  },
  {
    name: "Diogo Castro",
    role: "Assistente Técnico",
    image: Diogo,
    description: "Com o DNA do basquete herdado de seu pai, Danilo Castro, Diogo construiu uma trajetória sólida e vencedora nas categorias de base, conquistando títulos expressivos e se destacando por sua dedicação e talento.",
    fullDescription: `
      Trajetória no Basquete:
      Desde cedo, Diogo esteve imerso no ambiente esportivo, vivenciando de perto a rotina e os valores do basquete de alto nível. Como atleta, defendeu clubes de tradição, como Palmeiras, CBC Campinas e S.C. Corinthians, onde acumulou conquistas e experiência em competições regionais e estaduais.

      Conquistas Notáveis:

      Campeão Paulista

      Campeão Estadual

      Destaque em diversas competições de base

      Formação Acadêmica:
      A partir de 2024, Diogo iniciará sua graduação em Publicidade na Universidade Presbiteriana Mackenzie, ampliando sua visão multidisciplinar e agregando novas competências para sua carreira no esporte e além das quadras.

      Atuação na D14:
      Como Assistente Técnico, Diogo contribui com entusiasmo e energia jovem, reforçando o elo entre a tradição e a inovação dentro da D14. Sua vivência no basquete de base, somada ao aprendizado constante, fortalece a missão da academia em preparar atletas completos para os desafios dentro e fora das quadras.
    `
  }
];

export function Sobre() {
    // State for modal
    const [selectedMember, setSelectedMember] = useState(null);

    // Functions to handle modal
    const openModal = (member) => {
      setSelectedMember(member);
    };
    const closeModal = () => {
      setSelectedMember(null);
    };

    return (
    <div className="bg-white">
      <TextParallaxContentExample />

      {/* Moved Metodologia section here */}
      <section className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center justify-center gap-2 mb-4">
              <BookOpen className="h-8 w-8 text-[#54AE21]" />
              <h2 className="text-4xl font-bold">Nossa Metodologia</h2>
            </div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Nossa abordagem exclusiva integra o aprimoramento técnico-tático com o desenvolvimento físico e mental, visando a formação integral do atleta de alta performance.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Target,
                title: "Desenvolvimento Progressivo",
                description: "Programa estruturado em níveis que acompanha a evolução individual."
              },
              {
                icon: Users,
                title: "Formação Integral",
                description: "Foco no desenvolvimento técnico, tático, físico e mental do atleta."
              },
              {
                icon: Award,
                title: "Excelência Técnica",
                description: "Padrões rigorosos de qualidade em todos os aspectos do treinamento."
              }
            ].map((item, index) => (
              <motion.div
                key={item.title}
                className="bg-white p-8 rounded-lg shadow-lg relative overflow-hidden group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ 
                  opacity: { type: "tween", ease: "easeOut", duration: 0.5, delay: index * 0.1 },
                  y: { type: "tween", ease: "easeInOut", duration: 0.2 } 
                }}
                whileHover={{ y: -5 }}
                viewport={{ once: true }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#54AE21]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="bg-[#54AE21]/10 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                  <item.icon className="h-6 w-6 text-[#54AE21]" />
                </div>
                <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Parceria e Desenvolvimento */}
      <section className="py-24 relative overflow-hidden bg-black">
        <motion.div 
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <div className="absolute right-0 top-0 w-96 h-96 bg-[#54AE21]/5 rounded-full blur-3xl" />
          <div className="absolute left-0 bottom-0 w-96 h-96 bg-[#54AE21]/5 rounded-full blur-3xl" />
        </motion.div>

        <div className="container mx-auto px-4">
          <motion.div 
            className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-6">
                <Layers className="h-8 w-8 text-[#54AE21]" />
                <h2 className="text-3xl font-bold text-white">Parceria e Desenvolvimento</h2>
              </div>
              <div className="space-y-6 text-lg text-gray-300">
                <p>
                  A trajetória da D14 foi enriquecida com a chegada de Harley Fadel. Após sua formação e vivência no basquete universitário americano, Harley retornou ao Brasil, aportando uma perspectiva internacional e conhecimentos técnicos diferenciados.
                </p>
                <p>
                  Identificando o potencial sinérgico, Danilo Castro integrou Harley à equipe técnica, consolidando uma parceria estratégica fundamental para a evolução da academia.
                </p>
                <p>
                  A fusão da metodologia consolidada de Danilo com a visão global de Harley potencializou o ambiente de desenvolvimento da D14, oferecendo uma formação ainda mais completa e competitiva aos nossos atletas.
                </p>
              </div>
            </motion.div>
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <img
                src={SobreImage4}
                alt="Parceria e Desenvolvimento"
                className="rounded-lg shadow-xl"
              />
              <div className="absolute -right-4 bottom-0 w-1 h-32 bg-gradient-to-t from-[#54AE21] to-transparent" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Valores */}
      <section className="py-24 bg-black relative overflow-hidden">
        <motion.div 
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <div className="absolute right-0 top-0 w-96 h-96 bg-[#54AE21]/5 rounded-full blur-3xl" />
          <div className="absolute left-0 bottom-0 w-96 h-96 bg-[#54AE21]/5 rounded-full blur-3xl" />
        </motion.div>

        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center justify-center gap-2 mb-4">
              <Heart className="h-8 w-8 text-[#54AE21]" />
              <h2 className="text-4xl font-bold text-white">Nossos Valores</h2>
            </div>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Princípios que guiam nossa academia e moldam o desenvolvimento de nossos atletas.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Medal,
                title: "Excelência",
                description: "Buscamos a excelência em tudo que fazemos, desde o treinamento até o desenvolvimento pessoal."
              },
              {
                icon: Heart,
                title: "Paixão",
                description: "Amor pelo esporte e dedicação ao desenvolvimento de cada atleta são nossa força motriz."
              },
              {
                icon: GraduationCap,
                title: "Educação",
                description: "Valorizamos o desenvolvimento acadêmico tanto quanto o atlético para formar cidadãos completos."
              }
            ].map((value, index) => (
              <motion.div
                key={value.title}
                className="bg-black border border-white/10 p-8 rounded-lg relative overflow-hidden group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ 
                  opacity: { type: "tween", ease: "easeOut", duration: 0.5, delay: index * 0.1 },
                  y: { type: "tween", ease: "easeInOut", duration: 0.2 } 
                }}
                whileHover={{ y: -5 }}
                viewport={{ once: true }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#54AE21]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="bg-[#54AE21]/20 w-12 h-12 rounded-lg flex items-center justify-center mb-6 relative">
                  <value.icon className="h-6 w-6 text-[#54AE21]" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{value.title}</h3>
                <p className="text-gray-400">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* A Trajetória de Danilo Castro */}
      <section className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div 
            className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <img
                src={SobreImage1}
                alt="Danilo Castro"
                className="rounded-lg shadow-xl"
              />
              <div className="absolute -left-4 bottom-0 w-1 h-32 bg-gradient-to-t from-[#54AE21] to-transparent" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-6">
                <Rocket className="h-8 w-8 text-[#54AE21]" />
                <h2 className="text-3xl font-bold">A Trajetória de Danilo Castro</h2>
              </div>
              <div className="space-y-6 text-lg text-gray-600">
                 <p>
                   A jornada de Danilo Castro com o basquete iniciou-se na infância, aos 7 anos, em São Bernardo. Guiado por mentores como Thelma Tavernari, sua paixão e talento o levaram rapidamente às categorias de base e, aos 16 anos, à equipe adulta, conciliando o esporte com a formação em Educação Física (FEFISA).
                 </p>
                 <p>
                   Sua carreira profissional foi marcada por passagens em clubes renomados como Pirelli, Sírio (onde superou graves lesões), Mogi (conquistando o Paulista '96) e Campos (vencendo o Carioca), além de experiências internacionais e convocação para a Seleção Brasileira.
                 </p>
                 <p>
                   Após décadas dedicadas às quadras como atleta, Danilo fundou a D14 Basketball Academy, canalizando sua vasta experiência e visão única para desenvolver a nova geração. Atuando hoje como head coach e comentarista na BandSports, o sucesso de sua abordagem é comprovado pelo encaminhamento de dezenas de atletas para programas de basquete nos Estados Unidos, consolidando o impacto da D14 no cenário nacional.
                 </p>
              </div>
              <motion.a 
                href="https://www.streetopia.me/m/news/608c01a47897bf12f23fa6ba/perfil-sttp-danilo-castro-012#:~:text=Em%20uma%20%C3%A9poca%20em%20que,n%C3%A3o%20sabe%20nada%2C%20voc%C3%AA%20joga" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-8 bg-black border border-white/30 text-white px-6 py-3 rounded-md font-semibold hover:border-[#54AE21] transition-colors group relative overflow-hidden"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.2 }}
              >
                <span className="relative z-10">Entrevista Completa (Streetopia)</span>
                <ExternalLink className="h-4 w-4 relative z-10" />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000" />
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Preparando Atletas para o Mundo */}
      <section className="py-24 bg-black relative overflow-hidden">
        <motion.div 
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <div className="absolute right-0 top-0 w-96 h-96 bg-[#54AE21]/5 rounded-full blur-3xl" />
          <div className="absolute left-0 bottom-0 w-96 h-96 bg-[#54AE21]/5 rounded-full blur-3xl" />
        </motion.div>

        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center justify-center gap-2 mb-4">
              <Globe className="h-8 w-8 text-[#54AE21]" />
              <h2 className="text-4xl font-bold text-white">Preparando Atletas para o Mundo</h2>
            </div>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Nossa missão é preparar atletas não apenas para o basquete, mas para a vida.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { number: "23", label: "Atletas nos EUA" },
              { number: "30+", label: "Anos de Experiência" },
              { number: "100%", label: "Foco no Atleta" },
              { number: "4", label: "Coaches Especializados" }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                className="bg-black border border-white/10 p-8 rounded-lg text-center relative overflow-hidden group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ 
                  opacity: { type: "tween", ease: "easeOut", duration: 0.5, delay: index * 0.1 },
                  y: { type: "tween", ease: "easeInOut", duration: 0.2 } 
                }}
                whileHover={{ y: -5 }}
                viewport={{ once: true }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#54AE21]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="text-4xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Competições e Crescimento */}
      <section className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div 
            className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-6">
                <Flag className="h-8 w-8 text-[#54AE21]" />
                <h2 className="text-3xl font-bold">Competições e Crescimento</h2>
              </div>
              <div className="space-y-6 text-lg text-gray-600">
                <p>
                  Participamos ativamente das principais competições de base do Brasil,
                  proporcionando aos nossos atletas experiências competitivas valiosas.
                </p>
                <p>
                  Nossa academia tem se destacado em torneios estaduais e nacionais,
                  consolidando nossa posição como referência no desenvolvimento de atletas.
                </p>
                <p>
                  O ambiente competitivo é fundamental para o crescimento dos atletas,
                  preparando-os para os desafios futuros em suas carreiras.
                </p>
              </div>
            </motion.div>
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <img
                src={CampImage}
                alt="Competições"
                className="rounded-lg shadow-xl"
              />
              <div className="absolute -right-4 bottom-0 w-1 h-32 bg-gradient-to-t from-[#54AE21] to-transparent" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Equipe */}
      <section id="nossa-equipe" className="py-24 bg-black relative overflow-hidden">
        <motion.div 
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <div className="absolute right-0 top-0 w-96 h-96 bg-[#54AE21]/5 rounded-full blur-3xl" />
          <div className="absolute left-0 bottom-0 w-96 h-96 bg-[#54AE21]/5 rounded-full blur-3xl" />
        </motion.div>
        
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center justify-center gap-2 mb-4">
              <Users className="h-8 w-8 text-[#54AE21]" />
              <h2 className="text-4xl font-bold text-white">Nossa Equipe</h2>
            </div>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Profissionais dedicados e apaixonados pelo desenvolvimento de atletas.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                className="bg-black border border-white/10 rounded-lg overflow-hidden group relative cursor-pointer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  opacity: { type: "tween", ease: "easeOut", duration: 0.5, delay: index * 0.1 },
                  y: { type: "tween", ease: "easeInOut", duration: 0.2 }
                }}
                whileHover={{ y: -5 }}
                viewport={{ once: true }}
                onClick={() => openModal(member)}
              >
                <div className="overflow-hidden h-[500px]">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-6 relative flex flex-col min-h-[210px]">
                  <h3 className="text-xl font-bold text-white mb-2">{member.name}</h3>
                  <p className="text-[#54AE21] font-medium mb-4">{member.role}</p>
                  <p className="text-gray-400 text-sm flex-grow">{member.description}</p>
                  <div className="inline-flex items-center gap-1 text-xs text-[#54AE21] hover:text-[#54AE21]/80 transition-colors font-semibold mt-4 self-start sm:hidden">
                    Ver Mais
                    <ChevronRight className="h-3 w-3" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Render Modal Component */}
      <TeamMemberModal 
        isOpen={!!selectedMember} 
        onClose={closeModal} 
        memberData={selectedMember} 
      />
    </div>
  );
}

export default Sobre;