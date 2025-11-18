import { motion } from 'motion/react';
import { CTAButton } from './CTAButton';
import { ShineText } from './ShineText';

interface HeroContentProps {
  isLoaded: boolean;
}

export function HeroContent({ isLoaded }: HeroContentProps) {
  return (
    <div className="flex-1 flex items-center justify-center px-8">
      <div className="max-w-4xl text-center">
        {/* Main Heading with Shine Effect */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isLoaded ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
        >
          <ShineText text="GALAGAMA                                  GEM & JEWELLERY" />
        </motion.div>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
          className="text-white/90 text-lg md:text-xl mb-12 max-w-2xl mx-auto"
        >
          The Smart Way to Buy Unique, Handcrafted Jewelry — Designed by You, Made by Masters
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.6, ease: "easeOut" }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <CTAButton variant="primary" href="custom-design">Start Designing</CTAButton>
          <CTAButton variant="secondary" href="marketplace">Explore Marketplace</CTAButton>
        </motion.div>
      </div>
    </div>
  );
}
