import { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Navigation } from './components/Navigation';
import { HeroContent } from './components/HeroContent';
import { Login } from './components/Login';
import { CustomDesign } from './components/CustomDesign';
import { AboutUs } from './components/AboutUs';

export default function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'login' | 'custom-design' | 'about'>('home');
  const [isLoaded, setIsLoaded] = useState(false);
  const { scrollY } = useScroll();
  
  // Parallax effect - background moves slower than foreground
  const backgroundY = useTransform(scrollY, [0, 500], [0, 150]);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  // Simple routing via hash
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.slice(1);
      if (hash === 'login') {
        setCurrentPage('login');
      } else if (hash === 'custom-design') {
        setCurrentPage('custom-design');
      } else if (hash === 'about') {
        setCurrentPage('about');
      } else {
        setCurrentPage('home');
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  if (currentPage === 'login') {
    return <Login />;
  }

  if (currentPage === 'custom-design') {
    return <CustomDesign />;
  }

  if (currentPage === 'about') {
    return <AboutUs />;
  }

  return (
    <div className="min-h-screen">
      {/* Header Section with Parallax */}
      <div className="relative h-screen overflow-hidden">
        {/* Background Image with Ken Burns Effect and Parallax */}
        <motion.div
          style={{ y: backgroundY }}
          className="absolute inset-0 w-full h-full"
        >
          <motion.div
            initial={{ scale: 1, opacity: 0 }}
            animate={{ scale: 1.1, opacity: 1 }}
            transition={{
              scale: {
                duration: 20,
                ease: "linear",
                repeat: Infinity,
                repeatType: "reverse"
              },
              opacity: {
                duration: 1.2,
                ease: "easeOut"
              }
            }}
            className="w-full h-full"
          >
            <motion.div 
              className="w-full h-full bg-cover bg-center"
              initial={{ filter: "brightness(0.7) contrast(1)" }}
              animate={{ 
                filter: [
                  "brightness(0.7) contrast(1)",
                  "brightness(0.8) contrast(1.05)",
                  "brightness(0.7) contrast(1)"
                ]
              }}
              transition={{
                duration: 8,
                ease: "easeInOut",
                repeat: Infinity,
                repeatType: "reverse"
              }}
              style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.5)), url('https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=1920&q=80')`
              }}
            />
          </motion.div>
        </motion.div>

        {/* Overlay gradient for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/50" />

        {/* Content */}
        <div className="relative z-10 h-full flex flex-col">
          <Navigation isLoaded={isLoaded} />
          <HeroContent isLoaded={isLoaded} />
        </div>
      </div>

      {/* Demo Content Below to Show Parallax Effect */}
      <div className="bg-white py-20 px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-center mb-8">Our Collections</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <div key={item} className="bg-gray-100 p-8 rounded-lg">
                <div className="aspect-square bg-gray-300 rounded-lg mb-4" />
                <h3 className="mb-2">Collection {item}</h3>
                <p className="text-gray-600">Discover our exquisite handcrafted pieces</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}