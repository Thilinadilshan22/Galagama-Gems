import { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Navigation } from './Navigation';
import { Footer } from './Footer';
import { useCart } from '../context/CartContext';

export function Marketplace() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [priceRange, setPriceRange] = useState<string>('all');
  const [selectedMetal, setSelectedMetal] = useState<string>('all');
  const { scrollY } = useScroll();
  const { addToCart } = useCart();
  const backgroundY = useTransform(scrollY, [0, 500], [0, 150]);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const categories = [
    { value: 'all', label: 'All Items' },
    { value: 'ring', label: 'Rings' },
    { value: 'necklace', label: 'Necklaces' },
    { value: 'earring', label: 'Earrings' },
    { value: 'bracelet', label: 'Bracelets' },
  ];

  const priceRanges = [
    { value: 'all', label: 'All Prices' },
    { value: '0-500', label: 'Under $500' },
    { value: '500-1000', label: '$500 - $1000' },
    { value: '1000-2000', label: '$1000 - $2000' },
    { value: '2000+', label: 'Above $2000' },
  ];

  const metals = [
    { value: 'all', label: 'All Metals' },
    { value: '24K Gold', label: '24K Gold' },
    { value: '18K Gold', label: '18K Gold' },
    { value: 'White Gold', label: 'White Gold' },
    { value: 'Rose Gold', label: 'Rose Gold' },
    { value: 'Platinum', label: 'Platinum' },
    { value: 'Sterling Silver', label: 'Sterling Silver' },
  ];

  const products = [
    {
      id: 1,
      name: 'Sapphire Elegance Ring',
      category: 'ring',
      metal: '18K Gold',
      price: 850,
      description: 'Exquisite blue sapphire set in lustrous 18K gold, handcrafted to perfection',
      image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=800&q=80',
      featured: true
    },
    {
      id: 2,
      name: 'Ceylon Moonstone Necklace',
      category: 'necklace',
      metal: 'White Gold',
      price: 1450,
      description: 'Authentic Ceylon moonstone with ethereal glow, beautifully set in white gold',
      image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80',
      featured: true
    },
    {
      id: 3,
      name: 'Ruby Sunset Earrings',
      category: 'earring',
      metal: 'Platinum',
      price: 1350,
      description: 'Stunning Burmese rubies paired with platinum for timeless elegance',
      image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80',
      featured: true
    },
    {
      id: 4,
      name: 'Diamond Solitaire Ring',
      category: 'ring',
      metal: 'Platinum',
      price: 2200,
      description: 'Classic solitaire diamond ring with platinum band, perfect for engagements',
      image: 'https://images.unsplash.com/photo-1611955167811-4711904bb9f8?w=800&q=80',
      featured: false
    },
    {
      id: 5,
      name: 'Emerald Drop Necklace',
      category: 'necklace',
      metal: '24K Gold',
      price: 1850,
      description: 'Colombian emerald pendant with delicate 24K gold chain',
      image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=800&q=80',
      featured: false
    },
    {
      id: 6,
      name: 'Pearl Stud Earrings',
      category: 'earring',
      metal: 'Sterling Silver',
      price: 320,
      description: 'Timeless freshwater pearl studs in sterling silver setting',
      image: 'https://images.unsplash.com/photo-1630019852942-f89202989a59?w=800&q=80',
      featured: false
    },
    {
      id: 7,
      name: 'Gold Tennis Bracelet',
      category: 'bracelet',
      metal: '18K Gold',
      price: 1680,
      description: 'Classic tennis bracelet with brilliant diamonds and 18K gold',
      image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=800&q=80',
      featured: false
    },
    {
      id: 8,
      name: 'Vintage Rose Gold Ring',
      category: 'ring',
      metal: 'Rose Gold',
      price: 980,
      description: 'Vintage-inspired ring with intricate details in rose gold',
      image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=800&q=80',
      featured: false
    },
    {
      id: 9,
      name: 'Aquamarine Pendant',
      category: 'necklace',
      metal: 'White Gold',
      price: 1150,
      description: 'Serene aquamarine gemstone on white gold chain',
      image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80',
      featured: false
    },
    {
      id: 10,
      name: 'Diamond Hoop Earrings',
      category: 'earring',
      metal: '18K Gold',
      price: 890,
      description: 'Elegant diamond-studded hoop earrings in 18K gold',
      image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80',
      featured: false
    },
    {
      id: 11,
      name: 'Charm Bracelet',
      category: 'bracelet',
      metal: 'Sterling Silver',
      price: 450,
      description: 'Personalized charm bracelet in sterling silver',
      image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=800&q=80',
      featured: false
    },
    {
      id: 12,
      name: 'Topaz Statement Ring',
      category: 'ring',
      metal: '24K Gold',
      price: 1580,
      description: 'Bold blue topaz ring with 24K gold setting',
      image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=800&q=80',
      featured: false
    }
  ];

  const filteredProducts = products.filter(product => {
    const categoryMatch = selectedCategory === 'all' || product.category === selectedCategory;
    const metalMatch = selectedMetal === 'all' || product.metal === selectedMetal;
    
    let priceMatch = true;
    if (priceRange !== 'all') {
      if (priceRange === '0-500') priceMatch = product.price < 500;
      else if (priceRange === '500-1000') priceMatch = product.price >= 500 && product.price < 1000;
      else if (priceRange === '1000-2000') priceMatch = product.price >= 1000 && product.price < 2000;
      else if (priceRange === '2000+') priceMatch = product.price >= 2000;
    }
    
    return categoryMatch && metalMatch && priceMatch;
  });

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative h-screen overflow-hidden">
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

        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/50" />

        <div className="relative z-10 h-full flex flex-col">
          <Navigation isLoaded={isLoaded} />
          
          <div className="flex-1 flex items-center justify-center px-8">
            <div className="text-center max-w-4xl">
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={isLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                style={{
                  fontSize: '4.5rem',
                  fontWeight: '700',
                  color: 'white',
                  marginBottom: '24px',
                  textShadow: '2px 2px 20px rgba(0, 0, 0, 0.5)',
                  lineHeight: '1.2'
                }}
              >
                Jewelry <span style={{
                  background: 'linear-gradient(to right, rgb(251, 191, 36), rgb(217, 119, 6))',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}>Marketplace</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                style={{
                  fontSize: '1.25rem',
                  color: 'rgba(255, 255, 255, 0.9)',
                  maxWidth: '700px',
                  margin: '0 auto',
                  lineHeight: '1.8',
                  textShadow: '1px 1px 10px rgba(0, 0, 0, 0.5)'
                }}
              >
                Discover our exquisite collection of handcrafted jewelry. Each piece tells a unique story of elegance and beauty.
              </motion.p>
            </div>
          </div>
        </div>
      </div>

      {/* Filters Section */}
      <div className="bg-white py-12 px-8" style={{ borderBottom: '1px solid rgba(0,0,0,0.1)' }}>
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}
          >
            <h2 style={{
              fontSize: '1.5rem',
              fontWeight: '600',
              marginBottom: '8px',
              color: '#1f2937'
            }}>
              Filter Products
            </h2>
            
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
              gap: '20px'
            }}>
              {/* Category Filter */}
              <div>
                <label style={{ 
                  display: 'block', 
                  marginBottom: '8px', 
                  fontWeight: '500',
                  color: '#374151',
                  fontSize: '0.95rem'
                }}>
                  Category
                </label>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    borderRadius: '8px',
                    border: '2px solid #e5e7eb',
                    fontSize: '1rem',
                    backgroundColor: 'white',
                    cursor: 'pointer',
                    transition: 'border-color 0.3s ease'
                  }}
                  onFocus={(e) => e.target.style.borderColor = 'rgb(251, 191, 36)'}
                  onBlur={(e) => e.target.style.borderColor = '#e5e7eb'}
                >
                  {categories.map(cat => (
                    <option key={cat.value} value={cat.value}>{cat.label}</option>
                  ))}
                </select>
              </div>

              {/* Metal Filter */}
              <div>
                <label style={{ 
                  display: 'block', 
                  marginBottom: '8px', 
                  fontWeight: '500',
                  color: '#374151',
                  fontSize: '0.95rem'
                }}>
                  Metal Type
                </label>
                <select
                  value={selectedMetal}
                  onChange={(e) => setSelectedMetal(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    borderRadius: '8px',
                    border: '2px solid #e5e7eb',
                    fontSize: '1rem',
                    backgroundColor: 'white',
                    cursor: 'pointer',
                    transition: 'border-color 0.3s ease'
                  }}
                  onFocus={(e) => e.target.style.borderColor = 'rgb(251, 191, 36)'}
                  onBlur={(e) => e.target.style.borderColor = '#e5e7eb'}
                >
                  {metals.map(metal => (
                    <option key={metal.value} value={metal.value}>{metal.label}</option>
                  ))}
                </select>
              </div>

              {/* Price Range Filter */}
              <div>
                <label style={{ 
                  display: 'block', 
                  marginBottom: '8px', 
                  fontWeight: '500',
                  color: '#374151',
                  fontSize: '0.95rem'
                }}>
                  Price Range
                </label>
                <select
                  value={priceRange}
                  onChange={(e) => setPriceRange(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    borderRadius: '8px',
                    border: '2px solid #e5e7eb',
                    fontSize: '1rem',
                    backgroundColor: 'white',
                    cursor: 'pointer',
                    transition: 'border-color 0.3s ease'
                  }}
                  onFocus={(e) => e.target.style.borderColor = 'rgb(251, 191, 36)'}
                  onBlur={(e) => e.target.style.borderColor = '#e5e7eb'}
                >
                  {priceRanges.map(range => (
                    <option key={range.value} value={range.value}>{range.label}</option>
                  ))}
                </select>
              </div>
            </div>

            <div style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: '12px',
              paddingTop: '8px'
            }}>
              <span style={{ color: '#6b7280', fontSize: '0.95rem' }}>
                Showing {filteredProducts.length} {filteredProducts.length === 1 ? 'product' : 'products'}
              </span>
              {(selectedCategory !== 'all' || selectedMetal !== 'all' || priceRange !== 'all') && (
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    setSelectedCategory('all');
                    setSelectedMetal('all');
                    setPriceRange('all');
                  }}
                  style={{
                    padding: '6px 12px',
                    borderRadius: '6px',
                    border: '1px solid rgb(251, 191, 36)',
                    background: 'transparent',
                    color: 'rgb(202, 138, 4)',
                    fontSize: '0.875rem',
                    fontWeight: '500',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'rgb(251, 191, 36)';
                    e.currentTarget.style.color = 'black';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'transparent';
                    e.currentTarget.style.color = 'rgb(202, 138, 4)';
                  }}
                >
                  Clear Filters
                </motion.button>
              )}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Products Grid */}
      <div className="bg-white py-20 px-8">
        <div className="max-w-7xl mx-auto">
          {filteredProducts.length === 0 ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              style={{
                textAlign: 'center',
                padding: '60px 20px',
                color: '#6b7280'
              }}
            >
              <p style={{ fontSize: '1.5rem', marginBottom: '12px' }}>No products found</p>
              <p style={{ fontSize: '1rem' }}>Try adjusting your filters</p>
            </motion.div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {filteredProducts.map((product, index) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className="bg-gray-100 rounded-lg overflow-hidden"
                  style={{ 
                    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                    position: 'relative'
                  }}
                >
                  {product.featured && (
                    <div style={{
                      position: 'absolute',
                      top: '12px',
                      right: '12px',
                      background: 'linear-gradient(to right, rgb(251, 191, 36), rgb(217, 119, 6))',
                      color: 'black',
                      padding: '6px 12px',
                      borderRadius: '6px',
                      fontSize: '0.75rem',
                      fontWeight: '700',
                      zIndex: 10,
                      textTransform: 'uppercase',
                      letterSpacing: '0.5px'
                    }}>
                      Featured
                    </div>
                  )}
                  <motion.div
                    className="aspect-square bg-gray-300 overflow-hidden"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover"
                      style={{ objectPosition: 'center' }}
                    />
                  </motion.div>
                  <div className="p-8">
                    <h3 className="mb-2" style={{ fontSize: '1.5rem', fontWeight: '600' }}>
                      {product.name}
                    </h3>
                    <p className="text-gray-600 mb-3" style={{ fontSize: '0.95rem', lineHeight: '1.6' }}>
                      {product.description}
                    </p>
                    <p style={{
                      fontSize: '0.875rem',
                      color: '#6b7280',
                      marginBottom: '0.75rem',
                      fontWeight: '500'
                    }}>
                      {product.metal}
                    </p>
                    <p className="mb-4" style={{
                      background: 'linear-gradient(to right, rgb(251, 191, 36), rgb(202, 138, 4))',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                      fontWeight: '700',
                      fontSize: '1.5rem'
                    }}>
                      ${product.price.toLocaleString()}
                    </p>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => {
                        addToCart({
                          id: `marketplace-${product.id}-${Date.now()}`,
                          category: product.category,
                          metal: product.metal,
                          metalPrice: product.price,
                          size: 'M',
                          estimatedPrice: product.price
                        });
                        alert(`${product.name} added to cart!`);
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
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
}
