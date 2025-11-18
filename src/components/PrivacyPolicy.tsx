import { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Navigation } from './Navigation';
import logoImage from '../assets/f9f3557d671d8125a616ddcb69e2a0d761511cdc.png';

export function PrivacyPolicy() {
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
          
          {/* Privacy Policy Container */}
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
              {/* Policy Card */}
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
                    alt="Galagama Gems" 
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
                    marginBottom: '48px',
                    letterSpacing: '0.1em'
                  }}
                >
                  Privacy Policy
                </motion.h1>

                {/* Content Section */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={isLoaded ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  style={{ maxHeight: '60vh', overflowY: 'auto', paddingRight: '20px' }}
                >
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
                    
                    <section>
                      <h2 style={{
                        fontFamily: "'Playfair Display', serif",
                        fontSize: '24px',
                        color: 'rgb(251, 191, 36)',
                        marginBottom: '12px'
                      }}>
                        Introduction
                      </h2>
                      <p style={{
                        color: 'rgba(255, 255, 255, 0.8)',
                        fontSize: '16px',
                        lineHeight: '1.8'
                      }}>
                        At Galagama Gems, we are committed to protecting your privacy and ensuring the security of your personal information. 
                        This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website 
                        or make a purchase from us.
                      </p>
                    </section>

                    <section>
                      <h2 style={{
                        fontFamily: "'Playfair Display', serif",
                        fontSize: '24px',
                        color: 'rgb(251, 191, 36)',
                        marginBottom: '12px'
                      }}>
                        Information We Collect
                      </h2>
                      <h3 style={{
                        fontSize: '18px',
                        color: 'white',
                        marginBottom: '8px',
                        fontWeight: '600'
                      }}>
                        Personal Information
                      </h3>
                      <p style={{
                        color: 'rgba(255, 255, 255, 0.8)',
                        fontSize: '16px',
                        lineHeight: '1.8',
                        marginBottom: '12px'
                      }}>
                        We may collect personal information that you voluntarily provide to us when you:
                      </p>
                      <ul style={{
                        color: 'rgba(255, 255, 255, 0.8)',
                        fontSize: '16px',
                        lineHeight: '1.8',
                        paddingLeft: '24px',
                        listStyleType: 'disc'
                      }}>
                        <li>Register for an account</li>
                        <li>Place an order</li>
                        <li>Subscribe to our newsletter</li>
                        <li>Contact us with inquiries</li>
                        <li>Request a custom design</li>
                      </ul>
                      <p style={{
                        color: 'rgba(255, 255, 255, 0.8)',
                        fontSize: '16px',
                        lineHeight: '1.8',
                        marginTop: '12px'
                      }}>
                        This information may include your name, email address, phone number, shipping address, billing address, 
                        and payment information.
                      </p>
                    </section>

                    <section>
                      <h2 style={{
                        fontFamily: "'Playfair Display', serif",
                        fontSize: '24px',
                        color: 'rgb(251, 191, 36)',
                        marginBottom: '12px'
                      }}>
                        How We Use Your Information
                      </h2>
                      <p style={{
                        color: 'rgba(255, 255, 255, 0.8)',
                        fontSize: '16px',
                        lineHeight: '1.8',
                        marginBottom: '12px'
                      }}>
                        We use the information we collect to:
                      </p>
                      <ul style={{
                        color: 'rgba(255, 255, 255, 0.8)',
                        fontSize: '16px',
                        lineHeight: '1.8',
                        paddingLeft: '24px',
                        listStyleType: 'disc'
                      }}>
                        <li>Process and fulfill your orders</li>
                        <li>Communicate with you about your orders and inquiries</li>
                        <li>Send you marketing communications (with your consent)</li>
                        <li>Improve our website and services</li>
                        <li>Detect and prevent fraud</li>
                        <li>Comply with legal obligations</li>
                      </ul>
                    </section>

                    <section>
                      <h2 style={{
                        fontFamily: "'Playfair Display', serif",
                        fontSize: '24px',
                        color: 'rgb(251, 191, 36)',
                        marginBottom: '12px'
                      }}>
                        Data Security
                      </h2>
                      <p style={{
                        color: 'rgba(255, 255, 255, 0.8)',
                        fontSize: '16px',
                        lineHeight: '1.8'
                      }}>
                        We implement appropriate technical and organizational measures to protect your personal information against 
                        unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet 
                        or electronic storage is 100% secure, and we cannot guarantee absolute security.
                      </p>
                    </section>

                    <section>
                      <h2 style={{
                        fontFamily: "'Playfair Display', serif",
                        fontSize: '24px',
                        color: 'rgb(251, 191, 36)',
                        marginBottom: '12px'
                      }}>
                        Sharing Your Information
                      </h2>
                      <p style={{
                        color: 'rgba(255, 255, 255, 0.8)',
                        fontSize: '16px',
                        lineHeight: '1.8',
                        marginBottom: '12px'
                      }}>
                        We do not sell your personal information. We may share your information with:
                      </p>
                      <ul style={{
                        color: 'rgba(255, 255, 255, 0.8)',
                        fontSize: '16px',
                        lineHeight: '1.8',
                        paddingLeft: '24px',
                        listStyleType: 'disc'
                      }}>
                        <li>Service providers who assist us in operating our website and conducting our business</li>
                        <li>Payment processors to complete transactions</li>
                        <li>Shipping companies to deliver your orders</li>
                        <li>Law enforcement or regulatory authorities when required by law</li>
                      </ul>
                    </section>

                    <section>
                      <h2 style={{
                        fontFamily: "'Playfair Display', serif",
                        fontSize: '24px',
                        color: 'rgb(251, 191, 36)',
                        marginBottom: '12px'
                      }}>
                        Your Rights
                      </h2>
                      <p style={{
                        color: 'rgba(255, 255, 255, 0.8)',
                        fontSize: '16px',
                        lineHeight: '1.8',
                        marginBottom: '12px'
                      }}>
                        You have the right to:
                      </p>
                      <ul style={{
                        color: 'rgba(255, 255, 255, 0.8)',
                        fontSize: '16px',
                        lineHeight: '1.8',
                        paddingLeft: '24px',
                        listStyleType: 'disc'
                      }}>
                        <li>Access the personal information we hold about you</li>
                        <li>Request correction of inaccurate information</li>
                        <li>Request deletion of your personal information</li>
                        <li>Opt-out of marketing communications</li>
                        <li>Withdraw consent where we rely on your consent to process your information</li>
                      </ul>
                    </section>

                    <section>
                      <h2 style={{
                        fontFamily: "'Playfair Display', serif",
                        fontSize: '24px',
                        color: 'rgb(251, 191, 36)',
                        marginBottom: '12px'
                      }}>
                        Contact Us
                      </h2>
                      <p style={{
                        color: 'rgba(255, 255, 255, 0.8)',
                        fontSize: '16px',
                        lineHeight: '1.8',
                        marginBottom: '16px'
                      }}>
                        If you have any questions about this Privacy Policy or our data practices, please contact us at:
                      </p>
                      <div style={{
                        padding: '16px',
                        background: 'rgba(251, 191, 36, 0.1)',
                        border: '1px solid rgba(251, 191, 36, 0.3)',
                        borderRadius: '8px',
                        color: 'rgba(255, 255, 255, 0.9)',
                        fontSize: '15px',
                        lineHeight: '1.6'
                      }}>
                        <p style={{ fontWeight: '600', marginBottom: '8px' }}>Galagama Gems</p>
                        <p>Email: privacy@galagamagems.com</p>
                        <p>Phone: +94 45 2667890</p>
                      </div>
                    </section>

                    <p style={{
                      color: 'rgba(255, 255, 255, 0.5)',
                      fontSize: '14px',
                      textAlign: 'center',
                      marginTop: '32px'
                    }}>
                      Last Updated: November 2025
                    </p>
                  </div>
                </motion.div>

                {/* Back Button */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={isLoaded ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  style={{ textAlign: 'center', marginTop: '32px' }}
                >
                  <motion.a
                    href="#signup"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                    style={{
                      display: 'inline-block',
                      padding: '12px 32px',
                      background: 'linear-gradient(to right, rgb(251, 191, 36), rgb(202, 138, 4))',
                      color: 'black',
                      fontWeight: '600',
                      fontSize: '16px',
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
                    ← Back to Sign Up
                  </motion.a>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
