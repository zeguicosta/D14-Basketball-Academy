import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { ShoppingBasket as Basketball, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { InteractiveHoverButton } from './ui/interactive-hover-button';
import Logo from '../assets/logo.png';
import LogoPreta from '../assets/logopreta.png';
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
  const location = useLocation(); // Get location object

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    // Close mobile menu if window resizes to desktop width
    const handleResize = () => {
      if (window.innerWidth >= 768) { // md breakpoint
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // On Loja the hero is light, so always show dark nav for contrast
  const isNavbarDark = isScrolled || isMobileMenuOpen || location.pathname === '/loja';
  const textColorClass = isNavbarDark ? 'text-white' : 'text-white';
  const activeTextColorClass = 'text-[#54AE21]'; // Active color remains the same

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
    <header className="fixed w-full z-50 pt-4 md:pt-6 transition-all duration-300">
      <div className="container mx-auto px-8 sm:px-10">
      <div
        className={`relative w-full rounded-full transition-all duration-300 ${
          isNavbarDark ? 'bg-black/95 py-2.5 px-8 sm:px-10 shadow-lg' : 'py-2 px-8 sm:px-10'
        }`}
      >
        <nav>
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            {/* Logo now defaults to the white version */}
            <img 
              className="h-16 w-auto mt-0" 
              src={Logo} 
              alt="D14 Logo" 
            />
          </Link>
          
          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center gap-8">
            {navigation.map((item) => (
              <li key={item.href}>
                <NavLink
                  to={item.href}
                  className={({ isActive }) =>
                    `text-base font-medium hover:text-[#54AE21] transition-colors ${
                      isActive ? activeTextColorClass : textColorClass
                    }`
                  }
                >
                  {item.title}
                </NavLink>
              </li>
            ))}
            <li>
              <Link to="/treinamentos">
                <InteractiveHoverButton
                  text="Inscreva-se"
                  className="w-auto min-w-[12rem] whitespace-nowrap pl-5 pr-8 py-2.5"
                />
              </Link>
            </li>
          </ul>

          {/* Mobile Menu Button */}
          <motion.button 
            className={`md:hidden pr-2 ${textColorClass}`} // Apply dynamic text color
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
        </nav>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div 
              className="md:hidden absolute top-full left-0 right-0 mt-1.5 mx-2 sm:mx-4 rounded-b-3xl rounded-t-xl bg-black/95 overflow-hidden shadow-xl border-t border-white/5"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <motion.ul 
                className="flex flex-col items-center gap-1 py-5 px-4"
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
                    className="w-full text-center"
                    variants={{
                      open: { y: 0, opacity: 1 },
                      closed: { y: 20, opacity: 0 }
                    }}
                  >
                    <NavLink
                      to={item.href}
                      className={({ isActive }) =>
                        `block py-3 text-base font-medium hover:text-[#54AE21] transition-colors ${
                          isActive ? 'text-[#54AE21]' : 'text-white'
                        }`
                      }
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.title}
                    </NavLink>
                  </motion.li>
                ))}
                <motion.li
                  className="w-full flex justify-center pt-2"
                  variants={{
                    open: { y: 0, opacity: 1 },
                    closed: { y: 20, opacity: 0 }
                  }}
                >
                  <Link to="/treinamentos" onClick={() => setIsMobileMenuOpen(false)}>
                    <InteractiveHoverButton
                      text="Inscreva-se"
                      className="w-auto min-w-[12rem] whitespace-nowrap pl-5 pr-8 py-2.5"
                    />
                  </Link>
                </motion.li>
              </motion.ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      </div>
    </header>
  );
};

export default Nav;
