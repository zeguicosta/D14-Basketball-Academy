import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  ShoppingCart, 
  ExternalLink, 
  Package, 
  Truck,
  Shield,
  Heart,
  Grid,
  List,
  Search
} from 'lucide-react';

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
  const [viewMode, setViewMode] = useState('grid');
  const [searchTerm, setSearchTerm] = useState('');

  // Force list view on mobile
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) { // md breakpoint
        setViewMode('list');
      }
    };

    // Check on mount
    handleResize();

    // Listen for resize events
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

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
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-black via-gray-900 to-black min-h-screen flex items-center overflow-hidden pt-20">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-gradient-to-br from-[#54AE21]/5 via-transparent to-[#54AE21]/5" />
        </div>
        
        {/* Animated Background Elements */}
        <motion.div 
          className="absolute inset-0 pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        >
          <div className="absolute left-10 top-20 w-64 h-64 bg-[#54AE21]/10 rounded-full blur-3xl" />
          <div className="absolute right-10 bottom-20 w-80 h-80 bg-[#54AE21]/15 rounded-full blur-3xl" />
          <div className="absolute left-1/2 top-1/3 -translate-x-1/2 w-96 h-96 bg-[#54AE21]/5 rounded-full blur-[100px]" />
        </motion.div>

        <div className="container mx-auto px-4 relative z-10 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <motion.div
              className="text-left"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                className="inline-flex items-center gap-2 bg-[#54AE21]/20 border border-[#54AE21]/30 rounded-full px-4 py-2 mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <ShoppingCart className="h-5 w-5 text-[#54AE21]" />
                <span className="text-[#54AE21] font-semibold">Produtos Oficiais</span>
              </motion.div>
              
              <motion.h1 
                className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight relative"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                Loja <span className="text-[#54AE21]">D14</span>
                <motion.div
                  className="absolute -bottom-2 left-0 h-1 bg-[#54AE21] rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: '100%' }}
                  transition={{ duration: 1, delay: 1 }}
                />
              </motion.h1>
              
              <motion.p 
                className="text-xl text-gray-300 mb-8 max-w-lg leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Vista-se como um campeão. Jogue como um campeão.
              </motion.p>
              
              <motion.div 
                className="flex flex-col sm:flex-row gap-4 mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                <button 
                  onClick={() => document.getElementById('destaques').scrollIntoView({ behavior: 'smooth' })}
                  className="bg-[#54AE21] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#408718] transition-all duration-300 flex items-center justify-center gap-2 group"
                >
                  <span>Ver Destaques</span>
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                  >
                    →
                  </motion.div>
                </button>
                <button 
                  onClick={() => document.getElementById('produtos').scrollIntoView({ behavior: 'smooth' })}
                  className="border border-white/20 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300"
                >
                  Todos os Produtos
                </button>
              </motion.div>
              
              <motion.div 
                className="flex flex-wrap gap-6 text-gray-400"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <div className="flex items-center gap-2">
                  <Truck className="h-5 w-5 text-[#54AE21]" />
                  <span>Entrega Rápida</span>
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="h-5 w-5 text-[#54AE21]" />
                  <span>Qualidade Garantida</span>
                </div>
                <div className="flex items-center gap-2">
                  <Package className="h-5 w-5 text-[#54AE21]" />
                  <span>100% Oficial</span>
                </div>
              </motion.div>
            </motion.div>

            {/* Right Content - Product Showcase */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <motion.div
                  className="space-y-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.7 }}
                >
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:border-[#54AE21]/50 transition-all duration-300 group">
                    <img 
                      src={uniformebranco} 
                      alt="Uniforme Branco" 
                      className="w-full h-48 md:h-32 object-cover rounded-lg mb-4 group-hover:scale-105 transition-transform duration-300"
                    />
                    <h3 className="text-white font-semibold">Uniforme Branco</h3>
                    <p className="text-gray-400 text-sm">Produto oficial D14</p>
                  </div>
                  
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:border-[#54AE21]/50 transition-all duration-300 group">
                    <img 
                      src={casaco1} 
                      alt="Casaco D14" 
                      className="w-full h-48 md:h-32 object-cover rounded-lg mb-4 group-hover:scale-105 transition-transform duration-300"
                    />
                    <h3 className="text-white font-semibold">Corta Vento Impermeável</h3>
                    <p className="text-gray-400 text-sm">Produto oficial D14</p>
                  </div>
                </motion.div>
                
                <motion.div
                  className="space-y-6 md:mt-8"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                >
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:border-[#54AE21]/50 transition-all duration-300 group">
                    <img 
                      src={uniformepreto} 
                      alt="Uniforme Preto" 
                      className="w-full h-48 md:h-32 object-cover rounded-lg mb-4 group-hover:scale-105 transition-transform duration-300"
                    />
                    <h3 className="text-white font-semibold">Uniforme Preto</h3>
                    <p className="text-gray-400 text-sm">Produto oficial D14</p>
                  </div>
                  
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:border-[#54AE21]/50 transition-all duration-300 group">
                    <img 
                      src={mochila} 
                      alt="Mochila D14" 
                      className="w-full h-48 md:h-32 object-cover rounded-lg mb-4 group-hover:scale-105 transition-transform duration-300"
                    />
                    <h3 className="text-white font-semibold">Mochila D14 Pro</h3>
                    <p className="text-gray-400 text-sm">Produto oficial D14</p>
                  </div>
                </motion.div>
              </div>
              
              {/* Floating Elements */}
              <motion.div
                className="absolute -top-4 -right-4 w-20 h-20 bg-[#54AE21]/20 rounded-full blur-xl"
                animate={{ 
                  y: [0, -10, 0],
                  scale: [1, 1.1, 1]
                }}
                transition={{ 
                  repeat: Infinity, 
                  duration: 3,
                  ease: "easeInOut"
                }}
              />
              <motion.div
                className="absolute -bottom-4 -left-4 w-16 h-16 bg-[#54AE21]/15 rounded-full blur-xl"
                animate={{ 
                  y: [0, 10, 0],
                  scale: [1, 0.9, 1]
                }}
                transition={{ 
                  repeat: Infinity, 
                  duration: 4,
                  ease: "easeInOut"
                }}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section id="destaques" className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-left md:text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center justify-start md:justify-center gap-2 mb-4">
              <Package className="h-6 w-6 text-[#54AE21]" />
              <h2 className="text-3xl font-bold">Produtos em Destaque</h2>
            </div>
            <p className="text-gray-600 max-w-2xl md:mx-auto">
              Confira nossos produtos oficiais da D14 Basketball Academy.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden group hover:shadow-xl transition-shadow flex flex-col h-full"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-[#54AE21] text-white px-3 py-1 rounded-full text-sm font-bold">
                    Destaque
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-xl font-bold mb-2">{product.name}</h3>
                  <p className="text-gray-600 mb-4 flex-1">{product.description}</p>
                  <button
                    onClick={() => handlePurchase(product)}
                    className="w-full bg-[#54AE21] text-white py-3 px-4 rounded-lg font-semibold hover:bg-[#408718] transition-colors flex items-center justify-center gap-2 group"
                  >
                    <span>Ver Produto</span>
                    <ExternalLink className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* All Products */}
      <section id="produtos" className="py-24">
        <div className="container mx-auto px-4">
          <motion.div
            className="mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-left md:text-center mb-8">Todos os Produtos</h2>
            
            {/* Search and Filters */}
            <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center justify-between">
              {/* Search */}
              <div className="relative flex-1 max-w-md w-full lg:w-auto">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Buscar produtos..."
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#54AE21]"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>

              {/* Category Filter */}
              <div className="flex flex-wrap gap-2 justify-start">
                {categories.map(category => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-full font-medium transition-colors ${
                      selectedCategory === category
                        ? 'bg-[#54AE21] text-white'
                        : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>

              {/* View Mode Toggle - Hidden on mobile */}
              <div className="hidden md:flex gap-2">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded-lg ${viewMode === 'grid' ? 'bg-[#54AE21] text-white' : 'bg-gray-200 text-gray-700'}`}
                >
                  <Grid className="h-5 w-5" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded-lg ${viewMode === 'list' ? 'bg-[#54AE21] text-white' : 'bg-gray-200 text-gray-700'}`}
                >
                  <List className="h-5 w-5" />
                </button>
              </div>
            </div>
          </motion.div>

          {/* Products Grid */}
          <div className={`${viewMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8' : 'space-y-6'}`}>
            {filteredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                className={`bg-white rounded-lg shadow-lg overflow-hidden group hover:shadow-xl transition-shadow ${
                  viewMode === 'list' ? 'flex flex-col sm:flex-row' : 'flex flex-col h-full'
                }`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className={`relative overflow-hidden ${
                  viewMode === 'list' ? 'w-full sm:w-64 lg:w-80 flex-shrink-0' : ''
                }`}>
                  <img
                    src={product.image}
                    alt={product.name}
                    className={`object-cover group-hover:scale-110 transition-transform duration-500 ${
                      viewMode === 'list' ? 'w-full h-48 sm:h-full' : 'w-full h-64'
                    }`}
                  />
                </div>
                <div className={`p-6 flex-1 ${
                  viewMode === 'grid' ? 'flex flex-col' : 'flex flex-col justify-between'
                }`}>
                  <div className="flex-1">
                    <h3 className={`font-bold mb-2 ${viewMode === 'list' ? 'text-lg sm:text-xl' : 'text-xl'}`}>
                      {product.name}
                    </h3>
                    <p className={`text-gray-600 mb-4 ${
                      viewMode === 'grid' ? 'flex-1' : viewMode === 'list' ? 'text-sm sm:text-base line-clamp-3' : ''
                    }`}>
                      {product.description}
                    </p>
                  </div>
                  
                  <div className="space-y-4">
                    <button
                      onClick={() => handlePurchase(product)}
                      className={`bg-[#54AE21] text-white py-3 px-4 rounded-lg font-semibold hover:bg-[#408718] transition-colors flex items-center justify-center gap-2 group ${
                        viewMode === 'list' ? 'w-full sm:w-auto sm:px-6' : 'w-full'
                      }`}
                    >
                      <span>Ver Produto</span>
                      <ExternalLink className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* No products found */}
          {filteredProducts.length === 0 && (
            <motion.div
              className="text-center py-16"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Package className="h-16 w-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Nenhum produto encontrado</h3>
              <p className="text-gray-600">Tente ajustar os filtros ou buscar por outros termos.</p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-black">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-white mb-4">Por que escolher a Loja D14?</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Produtos oficiais com a qualidade que você merece.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: "Qualidade Garantida",
                description: "Produtos testados e aprovados pelos nossos atletas profissionais."
              },
              {
                icon: Truck,
                title: "Entrega Rápida",
                description: "Receba seus produtos em casa com rapidez e segurança."
              },
              {
                icon: Heart,
                title: "Apoie a Academia",
                description: "Parte da receita é investida no desenvolvimento de novos atletas."
              }
            ].map((benefit, index) => (
              <motion.div
                key={benefit.title}
                className="text-center p-8 bg-white/5 rounded-lg border border-white/10"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="bg-[#54AE21]/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <benefit.icon className="h-8 w-8 text-[#54AE21]" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{benefit.title}</h3>
                <p className="text-gray-400">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Loja;