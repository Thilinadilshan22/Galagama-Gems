import { motion } from 'motion/react';

export function Footer() {
  return (
    <footer style={{
      backgroundColor: 'rgb(17, 24, 39)',
      color: 'white',
      padding: '48px 32px',
      width: '100%'
    }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '32px',
          marginBottom: '32px'
        }}>
          {/* About Section */}
          <div>
            <h3 style={{
              fontSize: '20px',
              fontWeight: '600',
              marginBottom: '16px',
              color: 'rgb(251, 191, 36)'
            }}>
              Galagama Gems
            </h3>
            <p style={{
              color: 'rgba(255, 255, 255, 0.7)',
              fontSize: '14px',
              lineHeight: '1.6'
            }}>
              Crafting exquisite jewelry with passion and precision. Every piece tells a unique story.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 style={{
              fontSize: '20px',
              fontWeight: '600',
              marginBottom: '16px',
              color: 'white'
            }}>
              Quick Links
            </h3>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <li>
                <a href="#" style={{
                  color: 'rgba(255, 255, 255, 0.7)',
                  fontSize: '14px',
                  textDecoration: 'none',
                  transition: 'color 0.3s'
                }}
                onMouseEnter={(e) => e.currentTarget.style.color = 'rgb(251, 191, 36)'}
                onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255, 255, 255, 0.7)'}
                >
                  Home
                </a>
              </li>
              <li>
                <a href="#custom-design" style={{
                  color: 'rgba(255, 255, 255, 0.7)',
                  fontSize: '14px',
                  textDecoration: 'none',
                  transition: 'color 0.3s'
                }}
                onMouseEnter={(e) => e.currentTarget.style.color = 'rgb(251, 191, 36)'}
                onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255, 255, 255, 0.7)'}
                >
                  Custom Design
                </a>
              </li>
              <li>
                <a href="#about" style={{
                  color: 'rgba(255, 255, 255, 0.7)',
                  fontSize: '14px',
                  textDecoration: 'none',
                  transition: 'color 0.3s'
                }}
                onMouseEnter={(e) => e.currentTarget.style.color = 'rgb(251, 191, 36)'}
                onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255, 255, 255, 0.7)'}
                >
                  About Us
                </a>
              </li>
              <li>
                <a href="#contact" style={{
                  color: 'rgba(255, 255, 255, 0.7)',
                  fontSize: '14px',
                  textDecoration: 'none',
                  transition: 'color 0.3s'
                }}
                onMouseEnter={(e) => e.currentTarget.style.color = 'rgb(251, 191, 36)'}
                onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255, 255, 255, 0.7)'}
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 style={{
              fontSize: '20px',
              fontWeight: '600',
              marginBottom: '16px',
              color: 'white'
            }}>
              Legal
            </h3>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <li>
                <a href="#privacy" style={{
                  color: 'rgba(255, 255, 255, 0.7)',
                  fontSize: '14px',
                  textDecoration: 'none',
                  transition: 'color 0.3s'
                }}
                onMouseEnter={(e) => e.currentTarget.style.color = 'rgb(251, 191, 36)'}
                onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255, 255, 255, 0.7)'}
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#terms" style={{
                  color: 'rgba(255, 255, 255, 0.7)',
                  fontSize: '14px',
                  textDecoration: 'none',
                  transition: 'color 0.3s'
                }}
                onMouseEnter={(e) => e.currentTarget.style.color = 'rgb(251, 191, 36)'}
                onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255, 255, 255, 0.7)'}
                >
                  Terms & Conditions
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 style={{
              fontSize: '20px',
              fontWeight: '600',
              marginBottom: '16px',
              color: 'white'
            }}>
              Contact Us
            </h3>
            <ul style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '8px',
              color: 'rgba(255, 255, 255, 0.7)',
              fontSize: '14px'
            }}>
              <li>📧 info@galagamagems.com</li>
              <li>📞 +1 (555) 123-4567</li>
              <li>📍 123 Jewelry Lane, Gem City</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div style={{
          borderTop: '1px solid rgba(255, 255, 255, 0.1)',
          paddingTop: '32px',
          textAlign: 'center'
        }}>
          <p style={{
            color: 'rgba(255, 255, 255, 0.5)',
            fontSize: '14px'
          }}>
            © {new Date().getFullYear()} Galagama Gems. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
