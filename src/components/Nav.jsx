import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { ShoppingBasket as Basketball, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Logo from '../assets/logo.png';
import Instagram from '../assets/instagram.png';
import WhatsApp from '../assets/whatsapp.png';
import Gmail from '../assets/gmail.png';

// Define navigation items if not imported from types
const navigation = [
  { title: 'Início', href: '/' },
  { title: 'Treinamentos', href: '/treinamentos' }, // Use existing paths
  { title: 'Sobre', href: '/sobre' },             // Use existing paths
  { title: 'Loja', href: '/loja' },               // Use existing paths
];

const Nav = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Function to handle inscription button click - adjust as needed
  const handleInscriptionClick = () => {
    // Navigate to inscription page or open modal, etc.
    // Example: navigate('/inscricao');
    // For now, let's link to the 'Treinamentos' page as an example
    // Replace with your actual inscription logic/link
    console.log('Inscription button clicked');
  };

  const openNewTab = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled || isMobileMenuOpen ? 'bg-black/95 py-2' : 'bg-transparent py-6'
      }`}
    >
      <nav className="container mx-auto px-8 sm:px-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            {/* Use your existing logo */}
            <img className="h-16 w-auto" src={Logo} alt="D14 Logo" /> 
            {/* Or use the basketball icon if preferred */}
            {/* <Basketball className="h-10 w-10 text-[#54AE21]" /> */}
          </Link>
          
          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center gap-8">
            {navigation.map((item) => (
              <li key={item.href}>
                <NavLink
                  to={item.href}
                  className={({ isActive }) =>
                    `text-sm uppercase font-bold tracking-wider hover:text-[#54AE21] transition-colors ${
                      isActive ? 'text-[#54AE21]' : 'text-white' // Use customGreen4 color
                    }`
                  }
                >
                  {item.title}
                </NavLink>
              </li>
            ))}
            <li>
              {/* Link the button to the Treinamentos page */}
              <Link to="/treinamentos">
                <button 
                  className="bg-[#54AE21] text-white px-6 py-2 rounded font-bold text-sm uppercase tracking-wider hover:bg-[#408718] transition-colors"
                  // onClick={handleInscriptionClick} // Or use onClick if it's not a direct link
                >
                  Inscreva-se
                </button>
              </Link>
            </li>
          </ul>

          {/* Mobile Menu Button */}
          <motion.button 
            className="md:hidden text-white pr-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            whileTap={{ scale: 0.95 }}
          >
            <AnimatePresence mode="wait">
              {isMobileMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X className="h-6 w-6" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu className="h-6 w-6" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div 
              className="md:hidden absolute top-full left-0 w-full bg-black/95 overflow-hidden"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <motion.ul 
                className="flex flex-col items-center gap-4 py-4"
                initial="closed"
                animate="open"
                exit="closed"
                variants={{
                  open: {
                    transition: { staggerChildren: 0.1, delayChildren: 0.2 }
                  },
                  closed: {
                    transition: { staggerChildren: 0.05, staggerDirection: -1 }
                  }
                }}
              >
                {navigation.map((item) => (
                  <motion.li 
                    key={item.href}
                    variants={{
                      open: { y: 0, opacity: 1 },
                      closed: { y: 20, opacity: 0 }
                    }}
                  >
                    <NavLink
                      to={item.href}
                      className={({ isActive }) =>
                        `text-sm uppercase font-bold tracking-wider hover:text-[#54AE21] transition-colors ${
                          isActive ? 'text-[#54AE21]' : 'text-white' // Use customGreen4
                        }`
                      }
                      onClick={() => setIsMobileMenuOpen(false)} // Close menu on link click
                    >
                      {item.title}
                    </NavLink>
                  </motion.li>
                ))}
                <motion.li
                  variants={{
                    open: { y: 0, opacity: 1 },
                    closed: { y: 20, opacity: 0 }
                  }}
                >
                  {/* Link the button to the Treinamentos page */}
                  <Link to="/treinamentos">
                    <button 
                      className="bg-[#54AE21] text-white px-6 py-2 rounded font-bold text-sm uppercase tracking-wider hover:bg-[#408718] transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)} // Close menu on button click
                    >
                      Inscreva-se
                    </button>
                  </Link>
                </motion.li>
              </motion.ul>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};

export default Nav;
