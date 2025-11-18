import { useState } from 'react';
import { motion } from 'motion/react';

interface CTAButtonProps {
  children: React.ReactNode;
  variant: 'primary' | 'secondary';
  href?: string;
}

export function CTAButton({ children, variant, href }: CTAButtonProps) {
  const [isHovered, setIsHovered] = useState(false);

  const isPrimary = variant === 'primary';

  const handleClick = () => {
    if (href) {
      window.location.hash = href;
    }
  };

  return (
    <motion.button
      onClick={handleClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      animate={{
        scale: isHovered ? 1.05 : 1,
      }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      className={`
        relative px-8 py-3 rounded-lg transition-all duration-300
        ${isPrimary 
          ? 'bg-gradient-to-r from-amber-400 to-yellow-600 text-black' 
          : 'bg-white/10 backdrop-blur-sm text-white border border-white/30'
        }
      `}
      style={{
        boxShadow: isHovered 
          ? '0 10px 30px -5px rgba(251, 191, 36, 0.5)' 
          : '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
      }}
    >
      {children}
    </motion.button>
  );
}
