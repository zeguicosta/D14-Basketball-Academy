import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  ShoppingCart, 
  ExternalLink, 
  Package, 
  Truck,
  Shield,
  Heart,
  Search
} from 'lucide-react';
import { InteractiveHoverButton } from '../components/ui/interactive-hover-button';
import { TextReveal } from '../components/ui/text-reveal-animation';

// Import actual product images
import mochila from '../assets/mochila.png';
import uniformebranco from '../assets/uniformebranco.png';
import uniformepreto from '../assets/uniformepreto.png';
import casaco1 from '../assets/9.png';
import casaco2 from '../assets/10.png';
import casaco3 from '../assets/11.png';

// Actual D14 products
const products = [
  {
    id: 1,
    name: "Uniforme Branco D14",
    price: 149.90,
    originalPrice: 179.90,
    image: uniformebranco,
    category: "Uniformes",
    description: "Regata Dupla Face + Calção. Tecido 100% poliéster com sublimação total de alta qualidade. Grade do PP ao G3.",
    inStock: true,
    featured: true
  },
  {
    id: 2,
    name: "Uniforme Preto D14",
    price: 149.90,
    originalPrice: 179.90,
    image: uniformepreto,
    category: "Uniformes",
    description: "Regata Dupla Face + Calção. Tecido 100% poliéster com sublimação total de alta qualidade. Grade do PP ao G3.",
    inStock: true,
    featured: true
  },
  {
    id: 3,
    name: "Mochila D14 Pro",
    price: 199.90,
    originalPrice: 249.90,
    image: mochila,
    category: "Acessórios",
    description: "Mochila esportiva oficial D14 com compartimentos específicos para equipamentos de basquete e treino.",
    inStock: true,
    featured: false
  },
  {
    id: 4,
    name: "Corta Vento D14 Impermeável",
    price: 179.90,
    originalPrice: 219.90,
    image: casaco1,
    category: "Vestuário",
    description: "Corta Vento impermeável Tecido Tecno Speed, 100% poliéster, zíper frontal, capuz forrado, inteira forrada com tela.",
    inStock: true,
    featured: true
  },
  {
    id: 5,
    name: "Moletom Canguru D14",
    price: 189.90,
    originalPrice: 229.90,
    image: casaco2,
    category: "Vestuário",
    description: "Moleton felpado, 2 cabos, certificado BCI, 50% algodão e 50% poliéster, capuz com forro personalizado, cordão de regulagem. Unissex.",
    inStock: true,
    featured: false
  },
  {
    id: 6,
    name: "Camisa Manga Longa D14",
    price: 209.90,
    originalPrice: 259.90,
    image: casaco3,
    category: "Vestuário",
    description: "Camisa Manga Longa Masculina em Poliamida, grade variável do PP ao G3.",
    inStock: true,
    featured: false
  }
];

const categories = ['Todos', 'Uniformes', 'Vestuário', 'Acessórios'];

export function Loja() {
  const [selectedCategory, setSelectedCategory] = useState('Todos');
  const [searchTerm, setSearchTerm] = useState('');

  // Filter products based on category and search
  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === 'Todos' || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredProducts = products.filter(product => product.featured);

  // Function to handle purchase redirect
  const handlePurchase = (product) => {
    // Replace with actual partner payment URL
    const paymentUrl = `https://partner-payment-site.com/checkout?product=${product.id}&name=${encodeURIComponent(product.name)}&price=${product.price}`;
    window.open(paymentUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="bg-site min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-[#fefefe] min-h-screen flex items-center overflow-x-hidden pt-20 md:py-28 pb-20 min-h-[100dvh]">
        <div className="container mx-auto px-4 md:px-6 relative z-10 w-full flex flex-col justify-center min-h-[calc(100dvh-5rem)] md:min-h-0 pt-6 pb-8 md:py-0">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <motion.div
              className="text-left"
              initial={{ opacity: 0, x: -24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              <motion.div
                className="inline-flex items-center gap-2 px-4 py-2 bg-[#54AE21]/10 rounded-full mb-6"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.15, ease: "easeOut" }}
              >
                <ShoppingCart className="h-5 w-5 text-[#54AE21]" />
                <span className="font-medium text-[#54AE21]">Produtos oficiais</span>
              </motion.div>
              <h1 className="text-5xl md:text-6xl font-medium text-gray-900 mb-5 leading-tight">
                <TextReveal word="Loja " className="text-5xl md:text-6xl font-medium text-gray-900 leading-tight inline-block" delayBase={0.2} />
                <TextReveal word="D14" className="text-5xl md:text-6xl font-medium text-[#54AE21] leading-tight inline-block" delayBase={0.35} />
              </h1>
              <motion.p
                className="text-gray-600 text-lg mb-8 max-w-lg leading-relaxed"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.5, ease: "easeOut" }}
              >
                Qualidade premium para elevar seu desempenho.
              </motion.p>
              <motion.div
                className="flex flex-col sm:flex-row gap-4 mb-8"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: 0.65, ease: "easeOut" }}
              >
                <motion.div
                  className="relative flex w-full sm:w-auto sm:min-w-[220px] rounded-full border-2 border-[#6bc429] overflow-hidden shadow-[0_8px_28px_-4px_rgba(84,174,33,0.25)] hover:border-[#7dd63a] hover:shadow-[0_20px_40px_-12px_rgba(84,174,33,0.35)] transition-all duration-300 group/btn"
                >
                  <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#54AE21] to-transparent z-10 pointer-events-none rounded-full" />
                  <div className="absolute inset-0 bg-gradient-to-br from-[#54AE21]/10 to-transparent opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300 pointer-events-none" />
                  <InteractiveHoverButton
                    text="Ver Destaques"
                    inverted
                    className="relative w-full text-sm py-3.5 px-6 border-0 rounded-full"
                    onClick={() => document.getElementById('destaques').scrollIntoView({ behavior: 'smooth' })}
                  />
                </motion.div>
                <button
                  onClick={() => document.getElementById('produtos').scrollIntoView({ behavior: 'smooth' })}
                  className="rounded-full border-2 border-gray-300 text-gray-700 text-sm px-6 py-3.5 font-medium hover:border-[#54AE21]/50 hover:text-[#54AE21] transition-all duration-300"
                >
                  Todos os Produtos
                </button>
              </motion.div>
            </motion.div>

            <motion.div
              className="hidden lg:flex relative min-h-[400px] lg:min-h-[560px] w-full h-full items-center justify-end overflow-visible"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
            >
              <img
                src={uniformebranco}
                alt=""
                aria-hidden
                className="h-full min-h-[640px] max-h-[115vh] w-auto max-w-[125%] object-contain object-right pointer-events-none select-none"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section id="destaques" className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            className="text-center mb-14"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-medium text-gray-900 mb-4">Produtos em Destaque</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Confira nossos produtos oficiais da D14 Basketball Academy.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                className="bg-white border-2 border-black/8 rounded-2xl shadow-sm overflow-hidden group hover:border-[#54AE21]/35 transition-all duration-300 flex flex-col h-full"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, ease: "easeOut", delay: index * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ y: -4 }}
              >
                <div className="relative overflow-hidden">
                  <img src={product.image} alt={product.name} className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute top-4 left-4 bg-[#54AE21] text-white px-3 py-1.5 rounded-full text-xs font-medium">
                    Destaque
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-lg font-medium text-gray-900 mb-2">{product.name}</h3>
                  <p className="text-gray-600 text-sm mb-4 flex-1 leading-relaxed">{product.description}</p>
                  <button
                    onClick={() => handlePurchase(product)}
                    className="w-full rounded-full bg-[#54AE21] text-white py-3.5 px-6 font-medium hover:bg-[#54AE21]/90 transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    Ver Produto
                    <ExternalLink className="h-4 w-4" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* All Products */}
      <section id="produtos" className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            className="mb-10"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-8">
              <div className="text-center md:text-left">
                <h2 className="text-4xl md:text-5xl font-medium text-gray-900">Todos os Produtos</h2>
              </div>
              <div className="flex flex-col lg:flex-row gap-4 items-stretch lg:items-center">
                <div className="relative flex-1 max-w-md w-full lg:w-auto">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Buscar produtos..."
                    className="w-full pl-10 pr-4 py-2.5 border-2 border-black/8 rounded-xl focus:outline-none focus:border-[#54AE21]/50 transition-colors"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
                <div className="flex flex-wrap gap-2 justify-center lg:justify-end">
                  {categories.map(category => (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={`px-4 py-2 rounded-xl font-medium transition-colors ${
                        selectedCategory === category ? 'bg-[#54AE21] text-white' : 'bg-black/5 text-gray-700 hover:bg-black/10'
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                className="bg-white border-2 border-black/8 rounded-2xl shadow-sm overflow-hidden group hover:border-[#54AE21]/35 transition-all duration-300 flex flex-col h-full"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, ease: "easeOut", delay: index * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ y: -4 }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex-1">
                    <h3 className="font-medium text-gray-900 mb-2 text-lg">{product.name}</h3>
                    <p className="text-gray-600 text-sm mb-4 leading-relaxed flex-1">{product.description}</p>
                  </div>
                  <button
                    onClick={() => handlePurchase(product)}
                    className="w-full rounded-full bg-[#54AE21] text-white py-3.5 px-6 font-medium hover:bg-[#54AE21]/90 transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    Ver Produto
                    <ExternalLink className="h-4 w-4" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <motion.div
              className="text-center py-16"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
            >
              <Package className="h-16 w-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-medium text-gray-900 mb-2">Nenhum produto encontrado</h3>
              <p className="text-gray-600">Tente ajustar os filtros ou buscar por outros termos.</p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 md:py-28 bg-site">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            className="text-center mb-14"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-medium text-white mb-4">Por que escolher a Loja D14?</h2>
            <p className="text-white/85 max-w-2xl mx-auto">
              Produtos oficiais com a qualidade que você merece.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: Shield, title: "Qualidade Garantida", description: "Produtos testados e aprovados pelos nossos atletas profissionais." },
              { icon: Truck, title: "Entrega Rápida", description: "Receba seus produtos em casa com rapidez e segurança." },
              { icon: Heart, title: "Apoie a Academia", description: "Parte da receita é investida no desenvolvimento de novos atletas." }
            ].map((benefit, index) => (
              <motion.div
                key={benefit.title}
                className="border-2 border-white/20 rounded-2xl p-8 bg-[#111] text-center relative overflow-hidden group hover:border-[#54AE21]/40 transition-all duration-300"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, ease: "easeOut", delay: index * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ y: -4 }}
              >
                <div className="bg-[#54AE21]/20 w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-5">
                  <benefit.icon className="h-7 w-7 text-[#54AE21]" />
                </div>
                <h3 className="text-lg font-medium text-white mb-3">{benefit.title}</h3>
                <p className="text-white/80 text-sm leading-relaxed">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Loja;