import { motion } from 'motion/react';

interface ShineTextProps {
  text: string;
}

export function ShineText({ text }: ShineTextProps) {
  return (
    <h1 
      className="relative inline-block text-white mb-6 tracking-widest"
      style={{
        fontFamily: "'Playfair Display', serif",
        fontSize: '94px',
        lineHeight: '1.2'
      }}
    >
      {text}
      
      {/* Shine Effect Overlay */}
      <motion.div
        initial={{ x: '-100%' }}
        animate={{ x: '200%' }}
        transition={{
          duration: 3,
          ease: "easeInOut",
          repeat: Infinity,
          repeatDelay: 12
        }}
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
        style={{
          maskImage: 'linear-gradient(to right, transparent, white, transparent)',
          WebkitMaskImage: 'linear-gradient(to right, transparent, white, transparent)'
        }}
      />
    </h1>
  );
}