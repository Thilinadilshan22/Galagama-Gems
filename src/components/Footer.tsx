import { motion } from 'motion/react';

export function Footer() {
  return (
    <footer style={{
      background: 'linear-gradient(to bottom, rgb(15, 23, 42), rgb(2, 6, 23))',
      color: 'white',
      padding: '80px 32px 32px',
      width: '100%',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Elegant decorative line */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: '50%',
        transform: 'translateX(-50%)',
        width: '200px',
        height: '2px',
        background: 'linear-gradient(to right, transparent, rgb(251, 191, 36), transparent)',
        boxShadow: '0 0 20px rgba(251, 191, 36, 0.5)'
      }} />
      
      {/* Subtle pattern overlay */}
      <div style={{
        position: 'absolute',
        inset: 0,
        opacity: 0.03,
        backgroundImage: 'radial-gradient(circle at 2px 2px, rgb(251, 191, 36) 1px, transparent 0)',
        backgroundSize: '40px 40px',
        pointerEvents: 'none'
      }} />

      <div style={{ maxWidth: '1280px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '48px',
          marginBottom: '48px'
        }}>
          {/* About Section */}
          <div>
            <motion.h3 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              style={{
                fontSize: '24px',
                fontWeight: '700',
                marginBottom: '20px',
                background: 'linear-gradient(to right, rgb(251, 191, 36), rgb(217, 119, 6))',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                letterSpacing: '0.5px'
              }}>
              Galagama Gems
            </motion.h3>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              style={{
                color: 'rgba(255, 255, 255, 0.75)',
                fontSize: '15px',
                lineHeight: '1.7',
                marginBottom: '24px'
              }}>
              Crafting exquisite jewelry with passion and precision. Every piece tells a unique story of elegance and timeless beauty.
            </motion.p>
            {/* Social Icons */}
            <div style={{ display: 'flex', gap: '16px' }}>
              {['facebook', 'instagram', 'twitter', 'pinterest'].map((social, index) => (
                <motion.a
                  key={social}
                  href="#"
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.2 + index * 0.1 }}
                  whileHover={{ scale: 1.15, y: -2 }}
                  style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '50%',
                    background: 'rgba(251, 191, 36, 0.1)',
                    border: '1px solid rgba(251, 191, 36, 0.3)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'rgb(251, 191, 36)',
                    textDecoration: 'none',
                    fontSize: '18px',
                    transition: 'all 0.3s ease',
                    cursor: 'pointer'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'rgba(251, 191, 36, 0.2)';
                    e.currentTarget.style.borderColor = 'rgb(251, 191, 36)';
                    e.currentTarget.style.boxShadow = '0 0 20px rgba(251, 191, 36, 0.4)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'rgba(251, 191, 36, 0.1)';
                    e.currentTarget.style.borderColor = 'rgba(251, 191, 36, 0.3)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  {social === 'facebook' && '𝑓'}
                  {social === 'instagram' && '📷'}
                  {social === 'twitter' && '𝕏'}
                  {social === 'pinterest' && '℗'}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 style={{
              fontSize: '18px',
              fontWeight: '600',
              marginBottom: '20px',
              color: 'white',
              letterSpacing: '1px',
              textTransform: 'uppercase'
            }}>
              Quick Links
            </h3>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {[
                { label: 'Home', href: '#' },
                { label: 'Custom Design', href: '#custom-design' },
                { label: 'About Us', href: '#about' },
                { label: 'Contact', href: '#contact' }
              ].map((link, index) => (
                <motion.li 
                  key={link.label}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <a href={link.href} style={{
                    color: 'rgba(255, 255, 255, 0.75)',
                    fontSize: '15px',
                    textDecoration: 'none',
                    transition: 'all 0.3s ease',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = 'rgb(251, 191, 36)';
                    e.currentTarget.style.paddingLeft = '8px';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = 'rgba(255, 255, 255, 0.75)';
                    e.currentTarget.style.paddingLeft = '0';
                  }}>
                    <span style={{ opacity: 0.5 }}>▸</span>
                    {link.label}
                  </a>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 style={{
              fontSize: '18px',
              fontWeight: '600',
              marginBottom: '20px',
              color: 'white',
              letterSpacing: '1px',
              textTransform: 'uppercase'
            }}>
              Legal
            </h3>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {[
                { label: 'Privacy Policy', href: '#privacy' },
                { label: 'Terms & Conditions', href: '#terms' }
              ].map((link, index) => (
                <motion.li 
                  key={link.label}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <a href={link.href} style={{
                    color: 'rgba(255, 255, 255, 0.75)',
                    fontSize: '15px',
                    textDecoration: 'none',
                    transition: 'all 0.3s ease',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = 'rgb(251, 191, 36)';
                    e.currentTarget.style.paddingLeft = '8px';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = 'rgba(255, 255, 255, 0.75)';
                    e.currentTarget.style.paddingLeft = '0';
                  }}>
                    <span style={{ opacity: 0.5 }}>▸</span>
                    {link.label}
                  </a>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 style={{
              fontSize: '18px',
              fontWeight: '600',
              marginBottom: '20px',
              color: 'white',
              letterSpacing: '1px',
              textTransform: 'uppercase'
            }}>
              Contact Us
            </h3>
            <ul style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '14px',
              fontSize: '15px'
            }}>
              {[
                { icon: '✉', text: 'info@galagamagems.com', type: 'email' },
                { icon: '☎', text: '+94 45 2667890', type: 'phone' },
                { icon: '📍', text: 'Galagama Gems, Pabahinna, Sri Lanka.', type: 'address' }
              ].map((item, index) => (
                <motion.li 
                  key={item.type}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '12px',
                    color: 'rgba(255, 255, 255, 0.75)',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = 'rgb(251, 191, 36)';
                    e.currentTarget.style.transform = 'translateX(4px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = 'rgba(255, 255, 255, 0.75)';
                    e.currentTarget.style.transform = 'translateX(0)';
                  }}
                >
                  <span style={{ fontSize: '18px', opacity: 0.9 }}>{item.icon}</span>
                  <span>{item.text}</span>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>

        {/* Decorative divider */}
        <motion.div 
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={{
            height: '1px',
            background: 'linear-gradient(to right, transparent, rgba(251, 191, 36, 0.3), transparent)',
            marginBottom: '32px'
          }} 
        />

        {/* Bottom Bar */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '16px',
            textAlign: 'center'
          }}>
          <p style={{
            color: 'rgba(255, 255, 255, 0.5)',
            fontSize: '14px',
            letterSpacing: '0.5px'
          }}>
            © {new Date().getFullYear()} Galagama Gems. All rights reserved. Crafted with ♥ for excellence.
          </p>
          <div style={{
            fontSize: '12px',
            color: 'rgba(255, 255, 255, 0.4)',
            display: 'flex',
            gap: '16px',
            flexWrap: 'wrap',
            justifyContent: 'center'
          }}>
            <span>Premium Jewelry</span>
            <span>•</span>
            <span>Custom Designs</span>
            <span>•</span>
            <span>Ethical Sourcing</span>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
