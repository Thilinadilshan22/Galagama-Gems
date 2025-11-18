import { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Navigation } from './Navigation';
import { Footer } from './Footer';
import logoImage from '../assets/f9f3557d671d8125a616ddcb69e2a0d761511cdc.png';

export function ContactUs() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const { scrollY } = useScroll();
  
  const backgroundY = useTransform(scrollY, [0, 500], [0, 150]);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Contact form submitted:', { name, email, phone, subject, message });
  };

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
          
          {/* Contact Container */}
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
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
                gap: '32px',
                alignItems: 'start'
              }}>
                {/* Contact Info Card */}
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={isLoaded ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    backdropFilter: 'blur(10px)',
                    WebkitBackdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255, 255, 255, 0.3)',
                    borderRadius: '12px',
                    padding: '40px',
                    boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)'
                  }}
                >
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

                  <h2 style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: '32px',
                    color: 'white',
                    marginBottom: '16px',
                    letterSpacing: '0.05em'
                  }}>
                    Get In Touch
                  </h2>

                  <p style={{
                    color: 'rgba(255, 255, 255, 0.7)',
                    marginBottom: '32px',
                    lineHeight: '1.6'
                  }}>
                    Have questions about custom jewelry design? We're here to help bring your vision to life.
                  </p>

                  {/* Contact Details */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                    {/* Address */}
                    <motion.div
                      whileHover={{ x: 5 }}
                      style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '16px',
                        padding: '16px',
                        backgroundColor: 'rgba(255, 255, 255, 0.05)',
                        borderRadius: '8px',
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                        transition: 'all 0.3s'
                      }}
                    >
                      <div style={{ fontSize: '24px' }}>🏢</div>
                      <div>
                        <h3 style={{
                          color: 'rgb(251, 191, 36)',
                          fontSize: '16px',
                          fontWeight: '600',
                          marginBottom: '4px'
                        }}>
                          Visit Our Workshop
                        </h3>
                        <p style={{
                          color: 'rgba(255, 255, 255, 0.8)',
                          fontSize: '14px',
                          lineHeight: '1.5'
                        }}>
                          Galagama Gems<br />
                          Pabahinna<br />
                          Sri Lanka
                        </p>
                      </div>
                    </motion.div>

                    {/* Phone */}
                    <motion.div
                      whileHover={{ x: 5 }}
                      style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '16px',
                        padding: '16px',
                        backgroundColor: 'rgba(255, 255, 255, 0.05)',
                        borderRadius: '8px',
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                        transition: 'all 0.3s'
                      }}
                    >
                      <div style={{ fontSize: '24px' }}>☎️</div>
                      <div>
                        <h3 style={{
                          color: 'rgb(251, 191, 36)',
                          fontSize: '16px',
                          fontWeight: '600',
                          marginBottom: '4px'
                        }}>
                          Call Us
                        </h3>
                        <p style={{
                          color: 'rgba(255, 255, 255, 0.8)',
                          fontSize: '14px',
                          lineHeight: '1.5'
                        }}>
                          +94 45 2667890<br />
                          Mon - Sat: 9:00 AM - 6:00 PM
                        </p>
                      </div>
                    </motion.div>

                    {/* Email */}
                    <motion.div
                      whileHover={{ x: 5 }}
                      style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '16px',
                        padding: '16px',
                        backgroundColor: 'rgba(255, 255, 255, 0.05)',
                        borderRadius: '8px',
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                        transition: 'all 0.3s'
                      }}
                    >
                      <div style={{ fontSize: '24px' }}>📧</div>
                      <div>
                        <h3 style={{
                          color: 'rgb(251, 191, 36)',
                          fontSize: '16px',
                          fontWeight: '600',
                          marginBottom: '4px'
                        }}>
                          Email Us
                        </h3>
                        <p style={{
                          color: 'rgba(255, 255, 255, 0.8)',
                          fontSize: '14px',
                          lineHeight: '1.5'
                        }}>
                          info@galagamagems.com
                        </p>
                      </div>
                    </motion.div>
                  </div>

                  {/* Social Links */}
                  <div style={{ marginTop: '32px' }}>
                    <h3 style={{
                      color: 'white',
                      fontSize: '16px',
                      fontWeight: '600',
                      marginBottom: '16px'
                    }}>
                      Follow Us
                    </h3>
                    <div style={{ display: 'flex', gap: '12px' }}>
                      {/* Facebook */}
                      <motion.a
                        href="https://facebook.com/galagamagems"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        style={{
                          width: '40px',
                          height: '40px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          backgroundColor: 'rgba(255, 255, 255, 0.1)',
                          border: '1px solid rgba(255, 255, 255, 0.3)',
                          borderRadius: '8px',
                          color: 'white',
                          textDecoration: 'none',
                          transition: 'all 0.3s'
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.backgroundColor = 'rgba(24, 119, 242, 0.2)';
                          e.currentTarget.style.borderColor = '#1877F2';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
                          e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.3)';
                        }}
                      >
                        <svg style={{ width: '20px', height: '20px' }} fill="currentColor" viewBox="0 0 24 24">
                          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                        </svg>
                      </motion.a>

                      {/* Instagram */}
                      <motion.a
                        href="https://instagram.com/galagamagems"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        style={{
                          width: '40px',
                          height: '40px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          backgroundColor: 'rgba(255, 255, 255, 0.1)',
                          border: '1px solid rgba(255, 255, 255, 0.3)',
                          borderRadius: '8px',
                          color: 'white',
                          textDecoration: 'none',
                          transition: 'all 0.3s'
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.backgroundColor = 'rgba(225, 48, 108, 0.2)';
                          e.currentTarget.style.borderColor = '#E1306C';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
                          e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.3)';
                        }}
                      >
                        <svg style={{ width: '20px', height: '20px' }} fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                        </svg>
                      </motion.a>

                      {/* Twitter/X */}
                      <motion.a
                        href="https://twitter.com/galagamagems"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        style={{
                          width: '40px',
                          height: '40px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          backgroundColor: 'rgba(255, 255, 255, 0.1)',
                          border: '1px solid rgba(255, 255, 255, 0.3)',
                          borderRadius: '8px',
                          color: 'white',
                          textDecoration: 'none',
                          transition: 'all 0.3s'
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.backgroundColor = 'rgba(29, 161, 242, 0.2)';
                          e.currentTarget.style.borderColor = '#1DA1F2';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
                          e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.3)';
                        }}
                      >
                        <svg style={{ width: '18px', height: '18px' }} fill="currentColor" viewBox="0 0 24 24">
                          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                        </svg>
                      </motion.a>

                      {/* Pinterest */}
                      <motion.a
                        href="https://pinterest.com/galagamagems"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        style={{
                          width: '40px',
                          height: '40px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          backgroundColor: 'rgba(255, 255, 255, 0.1)',
                          border: '1px solid rgba(255, 255, 255, 0.3)',
                          borderRadius: '8px',
                          color: 'white',
                          textDecoration: 'none',
                          transition: 'all 0.3s'
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.backgroundColor = 'rgba(189, 8, 28, 0.2)';
                          e.currentTarget.style.borderColor = '#BD081C';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
                          e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.3)';
                        }}
                      >
                        <svg style={{ width: '20px', height: '20px' }} fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.401.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.354-.629-2.758-1.379l-.749 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.607 0 11.985-5.365 11.985-11.987C23.97 5.39 18.592.026 11.985.026L12.017 0z"/>
                        </svg>
                      </motion.a>

                      {/* WhatsApp */}
                      <motion.a
                        href="https://wa.me/94811234567"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        style={{
                          width: '40px',
                          height: '40px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          backgroundColor: 'rgba(255, 255, 255, 0.1)',
                          border: '1px solid rgba(255, 255, 255, 0.3)',
                          borderRadius: '8px',
                          color: 'white',
                          textDecoration: 'none',
                          transition: 'all 0.3s'
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.backgroundColor = 'rgba(37, 211, 102, 0.2)';
                          e.currentTarget.style.borderColor = '#25D366';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
                          e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.3)';
                        }}
                      >
                        <svg style={{ width: '20px', height: '20px' }} fill="currentColor" viewBox="0 0 24 24">
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                        </svg>
                      </motion.a>
                    </div>
                  </div>
                </motion.div>

                {/* Contact Form Card */}
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  animate={isLoaded ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    backdropFilter: 'blur(10px)',
                    WebkitBackdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255, 255, 255, 0.3)',
                    borderRadius: '12px',
                    padding: '40px',
                    boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)'
                  }}
                >
                  <h2 style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: '32px',
                    color: 'white',
                    marginBottom: '8px',
                    letterSpacing: '0.05em'
                  }}>
                    Send Us a Message
                  </h2>

                  <p style={{
                    color: 'rgba(255, 255, 255, 0.7)',
                    marginBottom: '32px'
                  }}>
                    Fill out the form and we'll get back to you within 24 hours
                  </p>

                  {/* Contact Form */}
                  <form onSubmit={handleSubmit}>
                    {/* Name Field */}
                    <div style={{ marginBottom: '24px' }}>
                      <label 
                        htmlFor="name" 
                        style={{
                          display: 'block',
                          color: 'white',
                          marginBottom: '8px',
                          fontSize: '14px'
                        }}
                      >
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        placeholder="Enter your name"
                        style={{
                          width: '100%',
                          padding: '12px 16px',
                          backgroundColor: 'rgba(255, 255, 255, 0.1)',
                          border: '1px solid rgba(255, 255, 255, 0.3)',
                          borderRadius: '8px',
                          color: 'white',
                          fontSize: '16px',
                          outline: 'none',
                          transition: 'all 0.3s ease'
                        }}
                        onFocus={(e) => {
                          e.target.style.borderColor = 'rgb(251, 191, 36)';
                          e.target.style.boxShadow = '0 0 0 1px rgb(251, 191, 36)';
                        }}
                        onBlur={(e) => {
                          e.target.style.borderColor = 'rgba(255, 255, 255, 0.3)';
                          e.target.style.boxShadow = 'none';
                        }}
                      />
                    </div>

                    {/* Email Field */}
                    <div style={{ marginBottom: '24px' }}>
                      <label 
                        htmlFor="email" 
                        style={{
                          display: 'block',
                          color: 'white',
                          marginBottom: '8px',
                          fontSize: '14px'
                        }}
                      >
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        placeholder="Enter your email"
                        style={{
                          width: '100%',
                          padding: '12px 16px',
                          backgroundColor: 'rgba(255, 255, 255, 0.1)',
                          border: '1px solid rgba(255, 255, 255, 0.3)',
                          borderRadius: '8px',
                          color: 'white',
                          fontSize: '16px',
                          outline: 'none',
                          transition: 'all 0.3s ease'
                        }}
                        onFocus={(e) => {
                          e.target.style.borderColor = 'rgb(251, 191, 36)';
                          e.target.style.boxShadow = '0 0 0 1px rgb(251, 191, 36)';
                        }}
                        onBlur={(e) => {
                          e.target.style.borderColor = 'rgba(255, 255, 255, 0.3)';
                          e.target.style.boxShadow = 'none';
                        }}
                      />
                    </div>

                    {/* Phone Field */}
                    <div style={{ marginBottom: '24px' }}>
                      <label 
                        htmlFor="phone" 
                        style={{
                          display: 'block',
                          color: 'white',
                          marginBottom: '8px',
                          fontSize: '14px'
                        }}
                      >
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="Enter your phone number"
                        style={{
                          width: '100%',
                          padding: '12px 16px',
                          backgroundColor: 'rgba(255, 255, 255, 0.1)',
                          border: '1px solid rgba(255, 255, 255, 0.3)',
                          borderRadius: '8px',
                          color: 'white',
                          fontSize: '16px',
                          outline: 'none',
                          transition: 'all 0.3s ease'
                        }}
                        onFocus={(e) => {
                          e.target.style.borderColor = 'rgb(251, 191, 36)';
                          e.target.style.boxShadow = '0 0 0 1px rgb(251, 191, 36)';
                        }}
                        onBlur={(e) => {
                          e.target.style.borderColor = 'rgba(255, 255, 255, 0.3)';
                          e.target.style.boxShadow = 'none';
                        }}
                      />
                    </div>

                    {/* Subject Field */}
                    <div style={{ marginBottom: '24px' }}>
                      <label 
                        htmlFor="subject" 
                        style={{
                          display: 'block',
                          color: 'white',
                          marginBottom: '8px',
                          fontSize: '14px'
                        }}
                      >
                        Subject *
                      </label>
                      <input
                        type="text"
                        id="subject"
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                        required
                        placeholder="What is this regarding?"
                        style={{
                          width: '100%',
                          padding: '12px 16px',
                          backgroundColor: 'rgba(255, 255, 255, 0.1)',
                          border: '1px solid rgba(255, 255, 255, 0.3)',
                          borderRadius: '8px',
                          color: 'white',
                          fontSize: '16px',
                          outline: 'none',
                          transition: 'all 0.3s ease'
                        }}
                        onFocus={(e) => {
                          e.target.style.borderColor = 'rgb(251, 191, 36)';
                          e.target.style.boxShadow = '0 0 0 1px rgb(251, 191, 36)';
                        }}
                        onBlur={(e) => {
                          e.target.style.borderColor = 'rgba(255, 255, 255, 0.3)';
                          e.target.style.boxShadow = 'none';
                        }}
                      />
                    </div>

                    {/* Message Field */}
                    <div style={{ marginBottom: '24px' }}>
                      <label 
                        htmlFor="message" 
                        style={{
                          display: 'block',
                          color: 'white',
                          marginBottom: '8px',
                          fontSize: '14px'
                        }}
                      >
                        Message *
                      </label>
                      <textarea
                        id="message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        required
                        placeholder="Tell us more about your inquiry..."
                        rows={5}
                        style={{
                          width: '100%',
                          padding: '12px 16px',
                          backgroundColor: 'rgba(255, 255, 255, 0.1)',
                          border: '1px solid rgba(255, 255, 255, 0.3)',
                          borderRadius: '8px',
                          color: 'white',
                          fontSize: '16px',
                          outline: 'none',
                          transition: 'all 0.3s ease',
                          resize: 'vertical',
                          fontFamily: 'inherit'
                        }}
                        onFocus={(e) => {
                          e.target.style.borderColor = 'rgb(251, 191, 36)';
                          e.target.style.boxShadow = '0 0 0 1px rgb(251, 191, 36)';
                        }}
                        onBlur={(e) => {
                          e.target.style.borderColor = 'rgba(255, 255, 255, 0.3)';
                          e.target.style.boxShadow = 'none';
                        }}
                      />
                    </div>

                    {/* Submit Button */}
                    <motion.button
                      type="submit"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      style={{
                        width: '100%',
                        padding: '14px 32px',
                        background: 'linear-gradient(to right, rgb(251, 191, 36), rgb(202, 138, 4))',
                        color: 'black',
                        fontWeight: '500',
                        fontSize: '16px',
                        borderRadius: '8px',
                        border: 'none',
                        cursor: 'pointer',
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
                      Send Message
                    </motion.button>
                  </form>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      
      {/* Footer */}
      <Footer />
    </div>
  );
}
