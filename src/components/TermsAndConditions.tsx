import { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Navigation } from './Navigation';
import logoImage from '../assets/f9f3557d671d8125a616ddcb69e2a0d761511cdc.png';

export function TermsAndConditions() {
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
          
          {/* Terms Container */}
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
              {/* Terms Card */}
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
                  Terms & Conditions
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
                        Agreement to Terms
                      </h2>
                      <p style={{
                        color: 'rgba(255, 255, 255, 0.8)',
                        fontSize: '16px',
                        lineHeight: '1.8'
                      }}>
                        By accessing and using the Galagama Gems website and services, you accept and agree to be bound by these 
                        Terms and Conditions. If you do not agree to these terms, please do not use our website or services.
                      </p>
                    </section>

                    <section>
                      <h2 style={{
                        fontFamily: "'Playfair Display', serif",
                        fontSize: '24px',
                        color: 'rgb(251, 191, 36)',
                        marginBottom: '12px'
                      }}>
                        Products and Services
                      </h2>
                      <p style={{
                        color: 'rgba(255, 255, 255, 0.8)',
                        fontSize: '16px',
                        lineHeight: '1.8',
                        marginBottom: '12px'
                      }}>
                        Galagama Gems offers high-quality jewelry including rings, necklaces, earrings, and custom-designed pieces. 
                        We reserve the right to:
                      </p>
                      <ul style={{
                        color: 'rgba(255, 255, 255, 0.8)',
                        fontSize: '16px',
                        lineHeight: '1.8',
                        paddingLeft: '24px',
                        listStyleType: 'disc'
                      }}>
                        <li>Modify or discontinue products without notice</li>
                        <li>Limit quantities available for purchase</li>
                        <li>Refuse service to anyone for any reason</li>
                        <li>Update product descriptions, pricing, and availability</li>
                      </ul>
                    </section>

                    <section>
                      <h2 style={{
                        fontFamily: "'Playfair Display', serif",
                        fontSize: '24px',
                        color: 'rgb(251, 191, 36)',
                        marginBottom: '12px'
                      }}>
                        Pricing and Payment
                      </h2>
                      <p style={{
                        color: 'rgba(255, 255, 255, 0.8)',
                        fontSize: '16px',
                        lineHeight: '1.8',
                        marginBottom: '12px'
                      }}>
                        All prices are listed in USD and are subject to change without notice. We accept the following payment methods:
                      </p>
                      <ul style={{
                        color: 'rgba(255, 255, 255, 0.8)',
                        fontSize: '16px',
                        lineHeight: '1.8',
                        paddingLeft: '24px',
                        listStyleType: 'disc',
                        marginBottom: '12px'
                      }}>
                        <li>Credit and debit cards</li>
                        <li>PayPal</li>
                        <li>Bank transfers for high-value purchases</li>
                      </ul>
                      <p style={{
                        color: 'rgba(255, 255, 255, 0.8)',
                        fontSize: '16px',
                        lineHeight: '1.8'
                      }}>
                        Payment must be received in full before orders are processed. We reserve the right to cancel orders 
                        if payment is not received or if fraud is suspected.
                      </p>
                    </section>

                    <section>
                      <h2 style={{
                        fontFamily: "'Playfair Display', serif",
                        fontSize: '24px',
                        color: 'rgb(251, 191, 36)',
                        marginBottom: '12px'
                      }}>
                        Custom Design Orders
                      </h2>
                      <p style={{
                        color: 'rgba(255, 255, 255, 0.8)',
                        fontSize: '16px',
                        lineHeight: '1.8'
                      }}>
                        For custom jewelry designs, a 50% deposit is required before work begins. The remaining balance must be 
                        paid before the item is shipped. Custom orders typically take 4-6 weeks to complete. Design specifications 
                        must be approved before production begins, and changes after approval may incur additional charges.
                      </p>
                    </section>

                    <section>
                      <h2 style={{
                        fontFamily: "'Playfair Display', serif",
                        fontSize: '24px',
                        color: 'rgb(251, 191, 36)',
                        marginBottom: '12px'
                      }}>
                        Shipping and Delivery
                      </h2>
                      <p style={{
                        color: 'rgba(255, 255, 255, 0.8)',
                        fontSize: '16px',
                        lineHeight: '1.8',
                        marginBottom: '12px'
                      }}>
                        We ship worldwide. Shipping times and costs vary by location:
                      </p>
                      <ul style={{
                        color: 'rgba(255, 255, 255, 0.8)',
                        fontSize: '16px',
                        lineHeight: '1.8',
                        paddingLeft: '24px',
                        listStyleType: 'disc'
                      }}>
                        <li>Domestic shipping: 3-7 business days</li>
                        <li>International shipping: 7-21 business days</li>
                        <li>All items are fully insured during shipping</li>
                        <li>Signature may be required upon delivery for high-value items</li>
                      </ul>
                    </section>

                    <section>
                      <h2 style={{
                        fontFamily: "'Playfair Display', serif",
                        fontSize: '24px',
                        color: 'rgb(251, 191, 36)',
                        marginBottom: '12px'
                      }}>
                        Returns and Exchanges
                      </h2>
                      <p style={{
                        color: 'rgba(255, 255, 255, 0.8)',
                        fontSize: '16px',
                        lineHeight: '1.8',
                        marginBottom: '12px'
                      }}>
                        We want you to be completely satisfied with your purchase:
                      </p>
                      <ul style={{
                        color: 'rgba(255, 255, 255, 0.8)',
                        fontSize: '16px',
                        lineHeight: '1.8',
                        paddingLeft: '24px',
                        listStyleType: 'disc'
                      }}>
                        <li>Standard items may be returned within 30 days of receipt</li>
                        <li>Items must be unworn, undamaged, and in original packaging</li>
                        <li>Custom-designed items are non-refundable unless defective</li>
                        <li>Return shipping costs are the responsibility of the customer</li>
                        <li>Refunds will be processed within 7-10 business days of receiving the return</li>
                      </ul>
                    </section>

                    <section>
                      <h2 style={{
                        fontFamily: "'Playfair Display', serif",
                        fontSize: '24px',
                        color: 'rgb(251, 191, 36)',
                        marginBottom: '12px'
                      }}>
                        Warranties
                      </h2>
                      <p style={{
                        color: 'rgba(255, 255, 255, 0.8)',
                        fontSize: '16px',
                        lineHeight: '1.8'
                      }}>
                        All jewelry comes with a 1-year warranty covering manufacturing defects. This warranty does not cover 
                        normal wear and tear, damage from misuse, loss, or theft. Warranty claims must be submitted with proof 
                        of purchase.
                      </p>
                    </section>

                    <section>
                      <h2 style={{
                        fontFamily: "'Playfair Display', serif",
                        fontSize: '24px',
                        color: 'rgb(251, 191, 36)',
                        marginBottom: '12px'
                      }}>
                        Contact Information
                      </h2>
                      <p style={{
                        color: 'rgba(255, 255, 255, 0.8)',
                        fontSize: '16px',
                        lineHeight: '1.8',
                        marginBottom: '16px'
                      }}>
                        If you have any questions about these Terms and Conditions, please contact us:
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
                        <p>Email: support@galagamagems.com</p>
                        <p>Phone: +94 45 2667890</p>
                        <p>Address: Galagama Gems,
Pabahinna,
Sri Lanka., GC 12345</p>
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
