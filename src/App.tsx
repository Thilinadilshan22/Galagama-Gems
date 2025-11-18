import { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Navigation } from './components/Navigation';
import { HeroContent } from './components/HeroContent';
import { Login } from './components/Login';
import { Signup } from './components/Signup';
import { CustomDesign } from './components/CustomDesign';
import { AboutUs } from './components/AboutUs';
import { ContactUs } from './components/ContactUs';
import { Cart } from './components/Cart';
import { Footer } from './components/Footer';
import { PrivacyPolicy } from './components/PrivacyPolicy';
import { TermsAndConditions } from './components/TermsAndConditions';
import { CartProvider, useCart } from './context/CartContext';

function AppContent() {
  const [currentPage, setCurrentPage] = useState<'home' | 'login' | 'signup' | 'custom-design' | 'about' | 'contact' | 'cart' | 'privacy' | 'terms'>('home');
  const [isLoaded, setIsLoaded] = useState(false);
  const { scrollY } = useScroll();
  const { addToCart } = useCart();
  
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
      } else if (hash === 'signup') {
        setCurrentPage('signup');
      } else if (hash === 'custom-design') {
        setCurrentPage('custom-design');
      } else if (hash === 'about') {
        setCurrentPage('about');
      } else if (hash === 'contact') {
        setCurrentPage('contact');
      } else if (hash === 'cart') {
        setCurrentPage('cart');
      } else if (hash === 'privacy') {
        setCurrentPage('privacy');
      } else if (hash === 'terms') {
        setCurrentPage('terms');
      } else {
        setCurrentPage('home');
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  return (
    <>
      {currentPage === 'login' && <Login />}
      {currentPage === 'signup' && <Signup />}
      {currentPage === 'custom-design' && <CustomDesign />}
      {currentPage === 'about' && <AboutUs />}
      {currentPage === 'contact' && <ContactUs />}
      {currentPage === 'cart' && <Cart />}
      {currentPage === 'privacy' && <PrivacyPolicy />}
      {currentPage === 'terms' && <TermsAndConditions />}
      {currentPage === 'home' && (
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
            {[
              { id: 1, name: 'Golden Ring', category: 'ring', metal: '18K Gold', price: 350 },
              { id: 2, name: 'Diamond Necklace', category: 'necklace', metal: 'White Gold', price: 1200 },
              { id: 3, name: 'Ruby Earrings', category: 'earring', metal: 'Platinum', price: 1250 }
            ].map((item) => (
              <div key={item.id} className="bg-gray-100 p-8 rounded-lg">
                <div className="aspect-square bg-gray-300 rounded-lg mb-4" />
                <h3 className="mb-2">{item.name}</h3>
                <p className="text-gray-600 mb-2">Discover our exquisite handcrafted pieces</p>
                <p className="text-amber-600 font-bold text-xl mb-4">${item.price}</p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    addToCart({
                      id: `collection-${item.id}-${Date.now()}`,
                      category: item.category,
                      metal: item.metal,
                      metalPrice: item.price,
                      size: 'M',
                      estimatedPrice: item.price
                    });
                    alert('Item added to cart!');
                  }}
                  style={{
                    width: '100%',
                    padding: '12px 24px',
                    background: 'linear-gradient(to right, rgb(251, 191, 36), rgb(202, 138, 4))',
                    color: 'black',
                    fontWeight: '600',
                    borderRadius: '8px',
                    border: 'none',
                    cursor: 'pointer'
                  }}
                >
                  Add to Cart
                </motion.button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
      )}
    </>
  );
}

export default function App() {
  return (
    <CartProvider>
      <AppContent />
    </CartProvider>
  );
}