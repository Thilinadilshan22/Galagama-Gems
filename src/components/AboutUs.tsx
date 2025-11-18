import { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Navigation } from './Navigation';
import logoImage from '../assets/f9f3557d671d8125a616ddcb69e2a0d761511cdc.png';

export function AboutUs() {
  const [isLoaded, setIsLoaded] = useState(false);
  const { scrollY } = useScroll();
  const backgroundY = useTransform(scrollY, [0, 500], [0, 150]);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div style={{ minHeight: '100vh' }}>
      {/* Background Section with Parallax */}
      <div style={{ position: 'relative', minHeight: '100vh', overflow: 'hidden' }}>
        {/* Background Image with Ken Burns Effect and Parallax */}
        <motion.div
          style={{ 
            y: backgroundY,
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%'
          }}
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
            style={{ width: '100%', height: '100%' }}
          >
            <motion.div 
              style={{
                width: '100%',
                height: '100%',
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.5)), url('https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=1920&q=80')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
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
            />
          </motion.div>
        </motion.div>

        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/50" />

        {/* Content */}
        <div style={{ position: 'relative', zIndex: 10, minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
          <Navigation isLoaded={isLoaded} />
          
          {/* About Us Container */}
          <div style={{ 
            flex: 1, 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center', 
            padding: '48px 32px' 
          }}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              style={{ width: '100%', maxWidth: '1200px' }}
            >
              {/* About Card */}
              <div style={{
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(10px)',
                WebkitBackdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.3)',
                borderRadius: '12px',
                padding: '40px',
                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)'
              }}>
                {/* Logo */}
                <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '32px' }}>
                  <img 
                    src={logoImage} 
                    alt="Galagama Gem & Jewellery" 
                    style={{
                      height: '64px',
                      width: 'auto',
                      mixBlendMode: 'screen',
                      filter: 'brightness(1.2) contrast(1.1)'
                    }}
                  />
                </div>

                {/* Title */}
                <motion.h1
                  initial={{ opacity: 0 }}
                  animate={isLoaded ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: '48px',
                    color: 'white',
                    textAlign: 'center',
                    marginBottom: '8px',
                    letterSpacing: '0.1em'
                  }}
                >
                  About Galagama Gem & Jewellery
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0 }}
                  animate={isLoaded ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  style={{
                    color: 'rgba(255, 255, 255, 0.7)',
                    textAlign: 'center',
                    marginBottom: '48px',
                    fontSize: '18px'
                  }}
                >
                  Where tradition meets innovation in fine jewelry craftsmanship
                </motion.p>

                {/* Content Section */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={isLoaded ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                >
                  {/* Introduction with Text and Image Side by Side */}
                  <div style={{ marginBottom: '48px' }}>
                    <div style={{
                      display: 'grid',
                      gridTemplateColumns: 'repeat(2, 1fr)',
                      gap: '40px',
                      alignItems: 'center'
                    }}>
                      {/* Left: Text Content */}
                      <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={isLoaded ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                      >
                        <h2 style={{
                          fontFamily: "'Playfair Display', serif",
                          fontSize: '36px',
                          color: 'rgb(251, 191, 36)',
                          marginBottom: '24px',
                          lineHeight: '1.3'
                        }}>
                          Welcome to Galagama Gem & Jewellery
                        </h2>
                        <p style={{
                          color: 'rgba(255, 255, 255, 0.9)',
                          fontSize: '18px',
                          lineHeight: '1.8',
                          marginBottom: '20px',
                          fontStyle: 'italic'
                        }}>
                          For generations, the artisans of Galagama have been crafting jewelry that tells stories.
                        </p>
                        <p style={{
                          color: 'rgba(255, 255, 255, 0.85)',
                          fontSize: '16px',
                          lineHeight: '1.8'
                        }}>
                          What began as a small family workshop in the heart of Sri Lanka has evolved into a 
                          renowned destination where tradition meets modern innovation. Every piece we create 
                          is a testament to our commitment to excellence and artistry.
                        </p>
                      </motion.div>

                      {/* Right: Image */}
                      <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={isLoaded ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
                        transition={{ duration: 0.6, delay: 0.7 }}
                        style={{
                          borderRadius: '12px',
                          overflow: 'hidden',
                          boxShadow: '0 10px 40px rgba(0, 0, 0, 0.3)',
                          height: '350px'
                        }}
                      >
                        <img 
                          src="https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=800&h=600&fit=crop&q=80"
                          alt="Exquisite Jewelry"
                          style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover'
                          }}
                        />
                      </motion.div>
                    </div>
                  </div>

                  {/* Heritage Section with Image Grid */}
                  <div style={{ marginBottom: '40px' }}>
                    <h2 style={{
                      fontFamily: "'Playfair Display', serif",
                      fontSize: '32px',
                      color: 'rgb(251, 191, 36)',
                      marginBottom: '24px',
                      textAlign: 'center'
                    }}>
                      Our Heritage
                    </h2>
                    
                    {/* Heritage Content Grid */}
                    <div style={{
                      display: 'grid',
                      gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                      gap: '24px',
                      marginBottom: '24px'
                    }}>
                      {/* Left: Text Content */}
                      <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center'
                      }}>
                        <p style={{
                          color: 'rgba(255, 255, 255, 0.8)',
                          fontSize: '16px',
                          lineHeight: '1.8',
                          marginBottom: '20px'
                        }}>
                          Nestled in the gem-rich lands of Pabahinna, Galagama Gem & Jewellery carries forward a legacy 
                          spanning over five decades. Our founders began with a simple vision: to create jewelry 
                          that captures the essence of Sri Lankan craftsmanship while embracing contemporary design.
                        </p>
                        <p style={{
                          color: 'rgba(255, 255, 255, 0.8)',
                          fontSize: '16px',
                          lineHeight: '1.8'
                        }}>
                          Today, we honor our heritage by blending time-honored techniques with cutting-edge 
                          technology, allowing you to be part of the creative journey through our innovative 
                          custom design platform.
                        </p>
                      </div>
                      
                      {/* Right: Heritage Images */}
                      <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={isLoaded ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
                        transition={{ duration: 0.6, delay: 0.7 }}
                        style={{
                          display: 'grid',
                          gridTemplateColumns: 'repeat(2, 1fr)',
                          gap: '12px'
                        }}
                      >
                        <div style={{
                          borderRadius: '8px',
                          overflow: 'hidden',
                          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)'
                        }}>
                          <img 
                            src="https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=300&h=300&fit=crop&q=80"
                            alt="Master craftsman at work"
                            style={{
                              width: '100%',
                              height: '180px',
                              objectFit: 'cover'
                            }}
                          />
                        </div>
                        <div style={{
                          borderRadius: '8px',
                          overflow: 'hidden',
                          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)'
                        }}>
                          <img 
                            src="https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=300&h=300&fit=crop&q=80"
                            alt="Exquisite jewelry piece"
                            style={{
                              width: '100%',
                              height: '180px',
                              objectFit: 'cover'
                            }}
                          />
                        </div>
                      </motion.div>
                    </div>
                  </div>

                  {/* Core Values - 4 in One Line with Images */}
                  <div style={{ marginBottom: '40px' }}>
                    <h2 style={{
                      fontFamily: "'Playfair Display', serif",
                      fontSize: '32px',
                      color: 'rgb(251, 191, 36)',
                      marginBottom: '32px',
                      textAlign: 'center'
                    }}>
                      What Defines Us
                    </h2>
                    <div style={{
                      display: 'grid',
                      gridTemplateColumns: 'repeat(4, 1fr)',
                      gap: '24px'
                    }}>
                      {[
                        { 
                          image: 'https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=400&h=300&fit=crop&q=80',
                          title: 'Master Craftsmanship', 
                          desc: 'Every piece is handcrafted by skilled artisans with decades of experience, combining traditional techniques with modern precision to create jewelry that stands the test of time.' 
                        },
                        { 
                          image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=400&h=300&fit=crop&q=80',
                          title: 'Your Vision, Our Art', 
                          desc: 'We believe in collaborative creation. Our innovative design platform empowers you to bring your unique ideas to life with complete creative freedom and expert guidance.' 
                        },
                        { 
                          image: 'https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?w=400&h=300&fit=crop&q=80',
                          title: 'Premium Materials', 
                          desc: 'We source only the finest metals and authentic gemstones from trusted suppliers, ensuring that every creation meets the highest standards of quality and ethical sourcing.' 
                        },
                        { 
                          image: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=400&h=300&fit=crop&q=80',
                          title: 'Lifetime Partnership', 
                          desc: 'Your satisfaction is our priority. We stand behind our work with comprehensive lifetime warranty, complimentary maintenance, and dedicated customer support.' 
                        }
                      ].map((value, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={isLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ delay: 0.7 + index * 0.08, duration: 0.4 }}
                        whileHover={{ y: -8, scale: 1.02 }}
                        style={{
                          backgroundColor: 'rgba(255, 255, 255, 0.05)',
                          border: '1px solid rgba(255, 255, 255, 0.2)',
                          borderRadius: '12px',
                          overflow: 'hidden',
                          transition: 'all 0.3s'
                        }}
                      >
                        {/* Image */}
                        <div style={{
                          width: '100%',
                          height: '180px',
                          overflow: 'hidden'
                        }}>
                          <img 
                            src={value.image}
                            alt={value.title}
                            style={{
                              width: '100%',
                              height: '100%',
                              objectFit: 'cover',
                              transition: 'transform 0.3s'
                            }}
                            onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
                            onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                          />
                        </div>
                        
                        {/* Content */}
                        <div style={{ padding: '24px' }}>
                          <h3 style={{
                            fontFamily: "'Playfair Display', serif",
                            fontSize: '20px',
                            color: 'white',
                            marginBottom: '12px',
                            fontWeight: '600'
                          }}>
                            {value.title}
                          </h3>
                          <p style={{
                            color: 'rgba(255, 255, 255, 0.75)',
                            fontSize: '14px',
                            lineHeight: '1.7'
                          }}>
                            {value.desc}
                          </p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Craftsmanship Excellence with Artisan Image */}
                <div style={{ marginBottom: '40px' }}>
                  <h2 style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: '32px',
                    color: 'rgb(251, 191, 36)',
                    marginBottom: '24px',
                    textAlign: 'center'
                  }}>
                    Craftsmanship Excellence
                  </h2>
                  
                  <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                    gap: '32px',
                    alignItems: 'center'
                  }}>
                    {/* Artisan Image */}
                    <motion.div
                      initial={{ opacity: 0, x: -30 }}
                      animate={isLoaded ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                      transition={{ duration: 0.6, delay: 0.8 }}
                      style={{
                        borderRadius: '12px',
                        overflow: 'hidden',
                        boxShadow: '0 10px 40px rgba(0, 0, 0, 0.3)',
                        height: '350px'
                      }}
                    >
                      <img 
                        src="https://images.unsplash.com/photo-1610375461246-83df859d849d?w=600&h=400&fit=crop&q=80"
                        alt="Skilled artisan crafting jewelry"
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover'
                        }}
                      />
                    </motion.div>
                    
                    {/* Content */}
                    <div>
                      <p style={{
                        color: 'rgba(255, 255, 255, 0.8)',
                        fontSize: '16px',
                        lineHeight: '1.8',
                        marginBottom: '20px'
                      }}>
                        Our master artisans bring decades of experience to every piece. Each creation undergoes 
                        rigorous quality checks and is crafted with meticulous attention to detail, ensuring that 
                        your jewelry meets the highest standards of excellence.
                      </p>
                      <p style={{
                        color: 'rgba(255, 255, 255, 0.8)',
                        fontSize: '16px',
                        lineHeight: '1.8'
                      }}>
                        From intricate hand-engraving to precision stone setting, every technique we employ 
                        is a testament to our commitment to preserving the art of fine jewelry making.
                      </p>
                      
                      {/* Small feature highlights */}
                      <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(2, 1fr)',
                        gap: '16px',
                        marginTop: '24px'
                      }}>
                        {['Hand Engraving', 'Stone Setting', 'Metal Polishing', 'Quality Control'].map((skill, idx) => (
                          <div key={idx} style={{
                            padding: '12px',
                            backgroundColor: 'rgba(251, 191, 36, 0.1)',
                            border: '1px solid rgba(251, 191, 36, 0.3)',
                            borderRadius: '6px',
                            textAlign: 'center',
                            color: 'rgba(255, 255, 255, 0.9)',
                            fontSize: '14px',
                            fontWeight: '500'
                          }}>
                            ✓ {skill}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                  {/* Stats Section */}
                  <div style={{ marginBottom: '40px' }}>
                    <h2 style={{
                      fontFamily: "'Playfair Display', serif",
                      fontSize: '32px',
                      color: 'rgb(251, 191, 36)',
                      marginBottom: '32px',
                      textAlign: 'center'
                    }}>
                      Our Journey in Numbers
                    </h2>
                    <div style={{
                      display: 'grid',
                      gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
                      gap: '20px',
                      padding: '32px',
                      background: 'rgba(255, 255, 255, 0.03)',
                      borderRadius: '12px',
                      border: '1px solid rgba(255, 255, 255, 0.1)'
                    }}>
                    {[
                      { number: '50+', label: 'Years of Legacy' },
                      { number: '10,000+', label: 'Happy Customers' },
                      { number: '15+', label: 'Master Artisans' },
                      { number: '100%', label: 'Customer Satisfaction' }
                    ].map((stat, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={isLoaded ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                        transition={{ delay: 0.8 + index * 0.1 }}
                        style={{ textAlign: 'center' }}
                      >
                        <div style={{
                          fontFamily: "'Playfair Display', serif",
                          fontSize: '42px',
                          fontWeight: 'bold',
                          color: 'rgb(251, 191, 36)',
                          marginBottom: '8px'
                        }}>
                          {stat.number}
                        </div>
                        <div style={{
                          color: 'rgba(255, 255, 255, 0.7)',
                          fontSize: '14px',
                          textTransform: 'uppercase',
                          letterSpacing: '1px'
                        }}>
                          {stat.label}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                  {/* Quality & Sustainability with Images */}
                  <div style={{ marginBottom: '40px' }}>
                    <h2 style={{
                      fontFamily: "'Playfair Display', serif",
                      fontSize: '32px',
                      color: 'rgb(251, 191, 36)',
                      marginBottom: '24px',
                      textAlign: 'center'
                    }}>
                      Quality & Sustainability
                    </h2>
                    
                    <div style={{
                      display: 'grid',
                      gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                      gap: '32px',
                      alignItems: 'center'
                    }}>
                      {/* Content */}
                      <div>
                        <p style={{
                          color: 'rgba(255, 255, 255, 0.8)',
                          fontSize: '16px',
                          lineHeight: '1.8',
                          marginBottom: '20px'
                        }}>
                          We are committed to ethical sourcing and sustainable practices. Every gemstone and metal 
                          we use is carefully selected from certified suppliers who share our values of 
                          environmental responsibility and fair trade.
                        </p>
                        <p style={{
                          color: 'rgba(255, 255, 255, 0.8)',
                          fontSize: '16px',
                          lineHeight: '1.8'
                        }}>
                          Our quality assurance process ensures that each piece not only meets but exceeds 
                          international jewelry standards, giving you confidence in your investment.
                        </p>
                      </div>
                      
                      {/* Gemstone Images */}
                      <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={isLoaded ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
                        transition={{ duration: 0.6, delay: 0.9 }}
                        style={{
                          display: 'grid',
                          gridTemplateColumns: 'repeat(2, 1fr)',
                          gap: '12px'
                        }}
                      >
                        <div style={{
                          borderRadius: '8px',
                          overflow: 'hidden',
                          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)'
                        }}>
                          <img 
                            src="https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?w=300&h=300&fit=crop&q=80"
                            alt="Premium gemstones"
                            style={{
                              width: '100%',
                              height: '180px',
                              objectFit: 'cover'
                            }}
                          />
                        </div>
                        <div style={{
                          borderRadius: '8px',
                          overflow: 'hidden',
                          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)'
                        }}>
                          <img 
                            src="https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=300&h=300&fit=crop&q=80"
                            alt="Quality certification"
                            style={{
                              width: '100%',
                              height: '180px',
                              objectFit: 'cover'
                            }}
                          />
                        </div>
                      </motion.div>
                    </div>
                  </div>

                  {/* Mission Statement */}
                  <div style={{
                    textAlign: 'center',
                    padding: '40px 32px',
                    background: 'linear-gradient(135deg, rgba(251, 191, 36, 0.15) 0%, rgba(202, 138, 4, 0.15) 100%)',
                    border: '1px solid rgba(251, 191, 36, 0.3)',
                    borderRadius: '12px',
                    marginBottom: '40px'
                  }}>
                    <h2 style={{
                      fontFamily: "'Playfair Display', serif",
                      fontSize: '28px',
                      color: 'rgb(251, 191, 36)',
                      marginBottom: '20px',
                      fontStyle: 'italic'
                    }}>
                      "Creating Timeless Treasures, One Story at a Time"
                    </h2>
                    <p style={{
                      color: 'rgba(255, 255, 255, 0.85)',
                      fontSize: '16px',
                      lineHeight: '1.8',
                      maxWidth: '700px',
                      margin: '0 auto'
                    }}>
                      Our mission is to bridge the gap between your dreams and reality. We empower you to 
                      create jewelry that tells your unique story—whether it's a symbol of love, achievement, 
                      or heritage. Through our innovative platform and expert craftsmanship, we transform your 
                      vision into timeless masterpieces that will be cherished for generations.
                    </p>
                  </div>

                  {/* Why Choose Us - Animated Image Cards */}
                  <div style={{ marginBottom: '48px' }}>
                    <motion.h2
                      initial={{ opacity: 0, y: -20 }}
                      animate={isLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
                      transition={{ duration: 0.6, delay: 0.9 }}
                      style={{
                        fontFamily: "'Playfair Display', serif",
                        fontSize: '32px',
                        color: 'rgb(251, 191, 36)',
                        marginBottom: '32px',
                        textAlign: 'center'
                      }}
                    >
                      Why Choose Galagama Gem & Jewellery
                    </motion.h2>
                    
                    {/* Feature Image Showcase */}
                    <div style={{
                      display: 'grid',
                      gridTemplateColumns: 'repeat(4, 1fr)',
                      gap: '24px',
                      marginBottom: '32px'
                    }}>
                      {/* Image Cards with Features */}
                      {[
                        {
                          image: 'https://images.unsplash.com/photo-1611955167811-4711904bb9f8?w=400&h=400&fit=crop&q=80',
                          title: 'Innovative Design Platform',
                          desc: 'Create your perfect piece with our state-of-the-art custom design tools'
                        },
                        {
                          image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=400&h=400&fit=crop&q=80',
                          title: 'Expert Consultation',
                          desc: 'Get personalized guidance from our experienced jewelry designers'
                        },
                        {
                          image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=400&h=400&fit=crop&q=80',
                          title: 'Transparent Pricing',
                          desc: 'No hidden costs—see real-time pricing as you design'
                        },
                        {
                          image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&h=400&fit=crop&q=80',
                          title: 'Certified Authenticity',
                          desc: 'Every piece comes with certification and detailed documentation'
                        }
                      ].map((item, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 50, scale: 0.9 }}
                          animate={isLoaded ? { 
                            opacity: 1, 
                            y: 0, 
                            scale: 1 
                          } : { 
                            opacity: 0, 
                            y: 50, 
                            scale: 0.9 
                          }}
                          transition={{ 
                            duration: 0.6, 
                            delay: 1 + index * 0.15,
                            ease: "easeOut"
                          }}
                          whileHover={{ 
                            y: -12, 
                            scale: 1.05,
                            transition: { duration: 0.3 }
                          }}
                          style={{
                            position: 'relative',
                            borderRadius: '12px',
                            overflow: 'hidden',
                            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
                            height: '320px',
                            cursor: 'pointer'
                          }}
                        >
                          <motion.img 
                            src={item.image}
                            alt={item.title}
                            style={{
                              width: '100%',
                              height: '100%',
                              objectFit: 'cover'
                            }}
                            whileHover={{ scale: 1.1 }}
                            transition={{ duration: 0.4 }}
                          />
                          <motion.div 
                            style={{
                              position: 'absolute',
                              bottom: 0,
                              left: 0,
                              right: 0,
                              padding: '24px',
                              background: 'linear-gradient(to top, rgba(0, 0, 0, 0.9), transparent)',
                            }}
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 1.2 + index * 0.15 }}
                          >
                            <h4 style={{
                              color: 'rgb(251, 191, 36)',
                              fontSize: '18px',
                              fontWeight: '600',
                              marginBottom: '8px',
                              fontFamily: "'Playfair Display', serif"
                            }}>
                              {item.title}
                            </h4>
                            <p style={{
                              color: 'rgba(255, 255, 255, 0.9)',
                              fontSize: '14px',
                              lineHeight: '1.5'
                            }}>
                              {item.desc}
                            </p>
                          </motion.div>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* CTA */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={isLoaded ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ duration: 0.5, delay: 1 }}
                    style={{ textAlign: 'center', marginTop: '40px' }}
                  >
                    <motion.a
                      href="#custom-design"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.98 }}
                      style={{
                        display: 'inline-block',
                        padding: '16px 48px',
                        background: 'linear-gradient(to right, rgb(251, 191, 36), rgb(202, 138, 4))',
                        color: 'black',
                        fontWeight: '600',
                        fontSize: '18px',
                        borderRadius: '8px',
                        textDecoration: 'none',
                        transition: 'all 0.3s ease',
                        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.boxShadow = '0 10px 30px -5px rgba(251, 191, 36, 0.5)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
                      }}
                    >
                      Start Your Design Journey
                    </motion.a>
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
