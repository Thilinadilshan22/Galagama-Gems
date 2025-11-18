import { motion } from 'motion/react';
import { NavLink } from './NavLink';
import logoImage from '../assets/f9f3557d671d8125a616ddcb69e2a0d761511cdc.png';
import { useCart } from '../context/CartContext';

interface NavigationProps {
  isLoaded: boolean;
}

export function Navigation({ isLoaded }: NavigationProps) {
  const { getTotalItems } = useCart();
  const cartItemCount = getTotalItems();
  
  const navLinks = [
    { label: 'Home', href: '#' },
    { label: 'Custom Design', href: '#custom-design' },
    { label: 'Packages', href: '#packages' },
    { label: 'Marketplace', href: '#marketplace' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' }
  ];

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={isLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="w-full px-8 py-6"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center">
          <img 
            src={logoImage} 
            alt="Galagama Gems" 
            className="h-16 w-auto"
            style={{
              mixBlendMode: 'screen',
              filter: 'brightness(1.2) contrast(1.1)'
            }}
          />
        </a>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <NavLink key={link.label} label={link.label} href={link.href} />
          ))}
        </div>

        {/* Login/Sign Up & Cart */}
        <div className="hidden md:flex items-center space-x-4">
          <a 
            href="#cart" 
            className="text-white hover:text-amber-400 transition-colors relative"
            style={{ display: 'flex', alignItems: 'center', gap: '8px' }}
          >
            <span style={{ fontSize: '24px' }}>🛒</span>
            {cartItemCount > 0 && (
              <motion.span
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                style={{
                  position: 'absolute',
                  top: '-8px',
                  right: '-8px',
                  backgroundColor: 'rgb(251, 191, 36)',
                  color: 'black',
                  borderRadius: '50%',
                  width: '20px',
                  height: '20px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '12px',
                  fontWeight: 'bold'
                }}
              >
                {cartItemCount}
              </motion.span>
            )}
          </a>
          <a href="#login" className="text-white hover:text-amber-400 transition-colors">
            Login
          </a>
          <a href="#signup" className="px-4 py-2 border border-white/30 rounded text-white hover:bg-white/10 transition-all inline-block">
            Sign Up
          </a>
        </div>
      </div>
    </motion.nav>
  );
}