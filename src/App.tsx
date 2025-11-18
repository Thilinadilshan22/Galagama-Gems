import { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Navigation } from './components/Navigation';
import { HeroContent } from './components/HeroContent';
import { Login } from './components/Login';
import { Signup } from './components/Signup';
import { CustomDesign } from './components/CustomDesign';
import { Marketplace } from './components/Marketplace';
import { AboutUs } from './components/AboutUs';
import { ContactUs } from './components/ContactUs';
import { Cart } from './components/Cart';
import { Footer } from './components/Footer';
import { PrivacyPolicy } from './components/PrivacyPolicy';
import { TermsAndConditions } from './components/TermsAndConditions';
import { CartProvider, useCart } from './context/CartContext';

function AppContent() {
  const [currentPage, setCurrentPage] = useState<'home' | 'login' | 'signup' | 'custom-design' | 'marketplace' | 'about' | 'contact' | 'cart' | 'privacy' | 'terms'>('home');
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
      } else if (hash === 'marketplace') {
        setCurrentPage('marketplace');
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
      {currentPage === 'marketplace' && <Marketplace />}
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

      {/* Featured Products Section */}
      <div className="bg-white py-20 px-8">
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
            style={{ 
              fontSize: '2.5rem', 
              fontWeight: '700',
              background: 'linear-gradient(to right, rgb(251, 191, 36), rgb(202, 138, 4))',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}
          >
            Our Featured Products
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                id: 1, 
                name: 'Sapphire Elegance Ring', 
                category: 'ring', 
                metal: '18K Gold', 
                price: 850,
                description: 'Exquisite blue sapphire set in lustrous 18K gold, handcrafted to perfection',
                image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=800&q=80'
              },
              { 
                id: 2, 
                name: 'Ceylon Moonstone Necklace', 
                category: 'necklace', 
                metal: 'White Gold', 
                price: 1450,
                description: 'Authentic Ceylon moonstone with ethereal glow, beautifully set in white gold',
                image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80'
              },
              { 
                id: 3, 
                name: 'Ruby Sunset Earrings', 
                category: 'earring', 
                metal: 'Platinum', 
                price: 1350,
                description: 'Stunning Burmese rubies paired with platinum for timeless elegance',
                image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80'
              }
            ].map((item, index) => (
              <motion.div 
                key={item.id} 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-100 rounded-lg overflow-hidden"
                style={{ boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' }}
              >
                <motion.div 
                  className="aspect-square bg-gray-300 overflow-hidden"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <img 
                    src={item.image} 
                    alt={item.name}
                    className="w-full h-full object-cover"
                    style={{ objectPosition: 'center' }}
                  />
                </motion.div>
                <div className="p-8">
                  <h3 className="mb-2" style={{ fontSize: '1.5rem', fontWeight: '600' }}>{item.name}</h3>
                  <p className="text-gray-600 mb-3" style={{ fontSize: '0.95rem', lineHeight: '1.6' }}>
                    {item.description}
                  </p>
                  <p style={{ 
                    fontSize: '0.875rem', 
                    color: '#6b7280',
                    marginBottom: '0.75rem',
                    fontWeight: '500'
                  }}>
                    {item.metal}
                  </p>
                  <p className="mb-4" style={{ 
                    background: 'linear-gradient(to right, rgb(251, 191, 36), rgb(202, 138, 4))',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    fontWeight: '700',
                    fontSize: '1.5rem'
                  }}>
                    ${item.price}
                  </p>
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
                      cursor: 'pointer',
                      transition: 'all 0.3s ease'
                    }}
                  >
                    Add to Cart
                  </motion.button>
                </div>
              </motion.div>
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