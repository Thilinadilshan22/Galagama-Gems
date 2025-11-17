import { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Gem, Target, Eye, Heart, Award, Users, CheckCircle, Star, Sparkles, Shield, Clock } from 'lucide-react';
import { Navigation } from './Navigation';

export function AboutUs() {
  const [isLoaded, setIsLoaded] = useState(false);
  const { scrollY } = useScroll();
  const backgroundY = useTransform(scrollY, [0, 500], [0, 150]);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

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
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.5)), url('https://images.unsplash.com/photo-1611955167811-4711904bb9f8?w=1920&q=80')`
              }}
            />
          </motion.div>
        </motion.div>

        {/* Overlay gradient for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/50" />

        {/* Content */}
        <div className="relative z-10 h-full flex flex-col">
          <Navigation isLoaded={isLoaded} />
          
          {/* Hero Content */}
          <div className="flex-1 flex items-center justify-center px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={isLoaded ? { scale: 1 } : { scale: 0 }}
                transition={{ duration: 0.6, type: "spring", delay: 0.2 }}
                className="inline-block mb-6"
              >
                <Gem className="text-amber-400 mx-auto" size={80} />
              </motion.div>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white drop-shadow-lg">
                About Galagama Gems
              </h1>
              <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed drop-shadow-md">
                Where timeless elegance meets ethical luxury
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <section className="bg-gradient-to-b from-white via-purple-50/30 to-white">
      <div className="max-w-7xl mx-auto px-8 py-20">

        {/* 1. Who We Are - Enhanced with Images */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.div 
              className="flex items-center gap-4 mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
            >
              <motion.div 
                className="w-20 h-20 bg-gradient-to-br from-purple-500 via-pink-500 to-purple-600 rounded-3xl flex items-center justify-center shadow-2xl"
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.6 }}
              >
                <Sparkles className="text-white" size={36} />
              </motion.div>
              <h3 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
                Who We Are
              </h3>
            </motion.div>
            
            <div className="space-y-6">
              <motion.p 
                className="text-lg text-gray-700 leading-relaxed"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                viewport={{ once: true }}
              >
                Welcome to <span className="font-bold text-transparent bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text">Galagama Gems</span>, where the timeless allure of nature's treasures meets the pinnacle of human craftsmanship. Nestled in the heart of the world's most ancient gem-rich lands, we are a collective of master artisans, dedicated to transforming raw, exquisite gemstones into unparalleled works of art.
              </motion.p>
              
              <motion.div 
                className="relative bg-gradient-to-br from-purple-50 via-pink-50 to-purple-50 p-8 rounded-3xl border-2 border-purple-200/50 backdrop-blur-sm shadow-lg hover:shadow-2xl transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="absolute -top-3 -left-3 w-12 h-12 bg-purple-500 rounded-full opacity-20 blur-xl"></div>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                    <Clock className="text-white" size={24} />
                  </div>
                  <strong className="text-xl text-gray-800">Founded</strong>
                </div>
                <p className="text-gray-700 text-lg ml-16">[Year] - Built on generations of gemstone expertise and traditional craftsmanship passed down through our master artisans.</p>
              </motion.div>
              
              <motion.div 
                className="relative bg-gradient-to-br from-blue-50 via-indigo-50 to-blue-50 p-8 rounded-3xl border-2 border-blue-200/50 backdrop-blur-sm shadow-lg hover:shadow-2xl transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="absolute -top-3 -right-3 w-12 h-12 bg-blue-500 rounded-full opacity-20 blur-xl"></div>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-xl flex items-center justify-center">
                    <Users className="text-white" size={24} />
                  </div>
                  <strong className="text-xl text-gray-800">Our Team</strong>
                </div>
                <p className="text-gray-700 text-lg ml-16">A collective of experienced gemologists, skilled jewelers, and passionate designers who share a common love for creating extraordinary jewelry that tells your unique story.</p>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-6">
              {/* Main large image */}
              <motion.div 
                className="col-span-2 h-96 rounded-3xl overflow-hidden shadow-2xl relative group"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/50 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <img 
                  src="https://images.unsplash.com/photo-1611955167811-4711904bb9f8?w=800&q=80" 
                  alt="Gemstone crafting"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </motion.div>
              {/* Two smaller images */}
              <motion.div 
                className="h-56 rounded-3xl overflow-hidden shadow-xl relative group"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-pink-900/50 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <img 
                  src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&q=80" 
                  alt="Jewelry detail"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </motion.div>
              <motion.div 
                className="h-56 rounded-3xl overflow-hidden shadow-xl relative group"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/50 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <img 
                  src="https://images.unsplash.com/photo-1603561591411-07134e71a2a9?w=400&q=80" 
                  alt="Gems collection"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </motion.div>
            </div>
            {/* Decorative gradient overlay - Enhanced */}
            <motion.div 
              className="absolute -top-20 -right-20 w-60 h-60 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full blur-3xl opacity-20"
              animate={{ 
                scale: [1, 1.2, 1],
                rotate: [0, 90, 0]
              }}
              transition={{ 
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            ></motion.div>
            <motion.div 
              className="absolute -bottom-20 -left-20 w-60 h-60 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full blur-3xl opacity-20"
              animate={{ 
                scale: [1, 1.3, 1],
                rotate: [0, -90, 0]
              }}
              transition={{ 
                duration: 10,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            ></motion.div>
          </motion.div>
        </div>

        {/* 2. What We Do - Cards with Icons and Images */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-32"
        >
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-gray-800 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-6">
                What We Do
              </h3>
              <div className="w-32 h-2 bg-gradient-to-r from-purple-600 via-pink-500 to-purple-600 mx-auto rounded-full shadow-lg"></div>
              <p className="text-xl text-gray-600 mt-6 max-w-2xl mx-auto">
                Crafting Excellence in Every Facet
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              whileHover={{ y: -15, scale: 1.03 }}
              viewport={{ once: true }}
              className="group relative bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100"
            >
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
              
              <div className="h-64 overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent z-10"></div>
                <img 
                  src="https://images.unsplash.com/photo-1506755855567-92ff770e8d00?w=600&q=80" 
                  alt="Ethical sourcing"
                  className="w-full h-full object-cover group-hover:scale-125 transition-transform duration-1000"
                />
                <div className="absolute bottom-4 left-4 z-20">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center shadow-2xl group-hover:rotate-12 transition-transform duration-500">
                    <Shield className="text-white" size={32} />
                  </div>
                </div>
              </div>
              <div className="p-8 relative z-20">
                <h4 className="text-2xl font-bold mb-4 text-gray-800 group-hover:text-purple-600 transition-colors">
                  Ethically Sourced Gemstones
                </h4>
                <p className="text-gray-600 leading-relaxed text-lg">
                  We source only the finest gemstones from responsible suppliers, ensuring every piece reflects our commitment to ethical practices.
                </p>
                <motion.div 
                  className="mt-6 flex items-center text-purple-600 font-semibold opacity-0 group-hover:opacity-100 transition-opacity"
                  initial={{ x: -20 }}
                  whileHover={{ x: 0 }}
                >
                  Learn More →
                </motion.div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ y: -15, scale: 1.03 }}
              viewport={{ once: true }}
              className="group relative bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-indigo-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
              
              <div className="h-64 overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent z-10"></div>
                <img 
                  src="https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=600&q=80" 
                  alt="Handcrafted jewelry"
                  className="w-full h-full object-cover group-hover:scale-125 transition-transform duration-1000"
                />
                <div className="absolute bottom-4 left-4 z-20">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-2xl flex items-center justify-center shadow-2xl group-hover:rotate-12 transition-transform duration-500">
                    <Sparkles className="text-white" size={32} />
                  </div>
                </div>
              </div>
              <div className="p-8 relative z-20">
                <h4 className="text-2xl font-bold mb-4 text-gray-800 group-hover:text-blue-600 transition-colors">
                  Handcrafted Jewelry
                </h4>
                <p className="text-gray-600 leading-relaxed text-lg">
                  Each piece is meticulously crafted by master artisans, blending traditional techniques with contemporary design.
                </p>
                <motion.div 
                  className="mt-6 flex items-center text-blue-600 font-semibold opacity-0 group-hover:opacity-100 transition-opacity"
                  initial={{ x: -20 }}
                  whileHover={{ x: 0 }}
                >
                  Learn More →
                </motion.div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              whileHover={{ y: -15, scale: 1.03 }}
              viewport={{ once: true }}
              className="group relative bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-pink-500/10 to-rose-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
              
              <div className="h-64 overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent z-10"></div>
                <img 
                  src="https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=600&q=80" 
                  alt="Custom design"
                  className="w-full h-full object-cover group-hover:scale-125 transition-transform duration-1000"
                />
                <div className="absolute bottom-4 left-4 z-20">
                  <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-rose-500 rounded-2xl flex items-center justify-center shadow-2xl group-hover:rotate-12 transition-transform duration-500">
                    <Gem className="text-white" size={32} />
                  </div>
                </div>
              </div>
              <div className="p-8 relative z-20">
                <h4 className="text-2xl font-bold mb-4 text-gray-800 group-hover:text-pink-600 transition-colors">
                  Custom Design Services
                </h4>
                <p className="text-gray-600 leading-relaxed text-lg">
                  We transform your vision into reality, creating bespoke jewelry that perfectly captures your unique story and style.
                </p>
                <motion.div 
                  className="mt-6 flex items-center text-pink-600 font-semibold opacity-0 group-hover:opacity-100 transition-opacity"
                  initial={{ x: -20 }}
                  whileHover={{ x: 0 }}
                >
                  Learn More →
                </motion.div>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
            <div className="relative inline-block">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400 blur-2xl opacity-30"></div>
              <p className="relative text-xl md:text-2xl text-gray-700 leading-relaxed max-w-4xl mx-auto bg-white/80 backdrop-blur-sm p-10 rounded-3xl border-2 border-purple-200 shadow-xl">
                We solve the challenge of finding truly <span className="font-bold text-transparent bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text">unique, ethically crafted jewelry</span> that resonates with your personal story and values.
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* 3. Mission & 4. Vision - Enhanced Design */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-32">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-pink-500 rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity"></div>
            <div className="relative bg-white p-10 rounded-3xl shadow-xl border border-purple-100">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center shadow-lg">
                  <Target className="text-white" size={32} />
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-gray-800">Our Mission</h3>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed">
                To bridge the gap between discerning individuals and the radiant beauty of ethically sourced, handcrafted jewelry. We exist to create meaningful connections through exceptional craftsmanship, transforming precious gemstones into timeless treasures that celebrate life's most precious moments.
              </p>
              <div className="mt-6 h-1.5 w-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity"></div>
            <div className="relative bg-white p-10 rounded-3xl shadow-xl border border-blue-100">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-2xl flex items-center justify-center shadow-lg">
                  <Eye className="text-white" size={32} />
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-gray-800">Our Vision</h3>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed">
                To become the world's most trusted name in bespoke gemstone jewelry, where every piece tells a story and every customer becomes part of our legacy. We envision a future where sustainable luxury and personalized artistry define the jewelry industry.
              </p>
              <div className="mt-6 h-1.5 w-20 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full"></div>
            </div>
          </motion.div>
        </div>

        {/* 5. Our Values - Enhanced with Gradient Cards */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-32"
        >
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 mb-4">
              <Heart className="text-red-500" size={40} />
              <h3 className="text-4xl md:text-5xl font-bold text-gray-800">Our Values</h3>
            </div>
            <div className="w-24 h-1.5 bg-gradient-to-r from-red-500 to-pink-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { emoji: "💎", title: "Authenticity", desc: "Every gemstone is genuine, every promise kept.", gradient: "from-purple-500 to-pink-500" },
              { emoji: "🌱", title: "Sustainability", desc: "Ethical sourcing and eco-conscious practices.", gradient: "from-green-500 to-emerald-500" },
              { emoji: "✨", title: "Excellence", desc: "Uncompromising quality in every detail.", gradient: "from-yellow-500 to-orange-500" },
              { emoji: "❤️", title: "Customer-First", desc: "Your vision and satisfaction drive everything we do.", gradient: "from-red-500 to-pink-500" }
            ].map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.05 }}
                viewport={{ once: true }}
                className="relative group"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${value.gradient} rounded-3xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity`}></div>
                <div className="relative text-center p-8 bg-white rounded-3xl shadow-lg border border-gray-100 hover:shadow-2xl transition-shadow">
                  <div className="text-5xl mb-4">{value.emoji}</div>
                  <h4 className="font-bold text-xl mb-3 text-gray-800">{value.title}</h4>
                  <p className="text-gray-600 leading-relaxed">{value.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* 6. Our Story - Enhanced with Background Image */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-32 relative"
        >
          <div className="relative bg-gradient-to-br from-purple-900 via-pink-900 to-purple-900 rounded-3xl overflow-hidden shadow-2xl">
            {/* Background image overlay */}
            <div className="absolute inset-0 opacity-20">
              <img 
                src="https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=1200&q=80" 
                alt="Jewelry background"
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="relative z-10 p-12 md:p-16">
              <h3 className="text-4xl md:text-5xl font-bold mb-8 text-white text-center">Our Story</h3>
              <div className="w-24 h-1.5 bg-gradient-to-r from-pink-400 to-purple-400 mx-auto rounded-full mb-12"></div>
              
              <div className="max-w-4xl mx-auto space-y-6 text-white">
                <p className="text-lg md:text-xl leading-relaxed">
                  Our journey began with a simple yet profound vision: to bridge the gap between discerning individuals and the radiant beauty of ethically sourced, handcrafted jewelry. What started as a small workshop in the gem-rich lands has blossomed into a trusted name in bespoke jewelry.
                </p>
                
                <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20">
                  <h4 className="text-2xl font-bold mb-4 text-pink-300">The Challenge</h4>
                  <p className="text-lg leading-relaxed">
                    In an industry often clouded by mass production and questionable sourcing, we faced the challenge of establishing transparent, ethical practices while maintaining the highest standards of craftsmanship.
                  </p>
                </div>
                
                <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20">
                  <h4 className="text-2xl font-bold mb-4 text-purple-300">The Inspiration</h4>
                  <p className="text-lg leading-relaxed">
                    We believe that jewelry is more than just adornment; it's an expression of individuality, a celebration of moments, and a legacy to be cherished across generations. This belief fuels our passion every single day.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* 7. Achievements & Milestones - Enhanced with Animation */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-32"
        >
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 mb-4">
              <Award className="text-yellow-600" size={40} />
              <h3 className="text-4xl md:text-5xl font-bold text-gray-800">Achievements & Milestones</h3>
            </div>
            <div className="w-24 h-1.5 bg-gradient-to-r from-yellow-500 to-orange-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { number: "[X]+", label: "Years of Excellence", gradient: "from-purple-500 to-pink-500", icon: "🏆" },
              { number: "[X]K+", label: "Happy Customers", gradient: "from-blue-500 to-indigo-500", icon: "😊" },
              { number: "[X]+", label: "Awards Won", gradient: "from-yellow-500 to-orange-500", icon: "🏅" },
              { number: "[X]K+", label: "Pieces Crafted", gradient: "from-green-500 to-emerald-500", icon: "💍" }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.1, rotate: 2 }}
                viewport={{ once: true }}
                className="relative group"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} rounded-3xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity`}></div>
                <div className="relative bg-white p-8 rounded-3xl shadow-xl border border-gray-100">
                  <div className="text-4xl mb-3">{stat.icon}</div>
                  <div className={`text-4xl md:text-5xl font-bold mb-3 bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent`}>
                    {stat.number}
                  </div>
                  <p className="text-gray-700 font-semibold">{stat.label}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* 8. Why Choose Us - Enhanced Grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-32"
        >
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 mb-4">
              <CheckCircle className="text-green-600" size={40} />
              <h3 className="text-4xl md:text-5xl font-bold text-gray-800">Why Choose Us?</h3>
            </div>
            <div className="w-24 h-1.5 bg-gradient-to-r from-green-500 to-emerald-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { 
                title: "Unmatched Craftsmanship",
                desc: "Master artisans with generations of expertise create each piece with meticulous attention to detail.",
                gradient: "from-purple-500 to-pink-500"
              },
              { 
                title: "Ethical & Transparent",
                desc: "Complete transparency in sourcing, with verified ethical practices at every step.",
                gradient: "from-blue-500 to-indigo-500"
              },
              { 
                title: "Fully Personalized Experience",
                desc: "From concept to creation, we work closely with you to bring your unique vision to life.",
                gradient: "from-pink-500 to-rose-500"
              },
              { 
                title: "Lifetime Value",
                desc: "Investment-quality pieces designed to be treasured and passed down through generations.",
                gradient: "from-green-500 to-emerald-500"
              }
            ].map((reason, index) => (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                viewport={{ once: true }}
                className="relative group"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${reason.gradient} rounded-3xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity`}></div>
                <div className="relative flex gap-6 items-start bg-white p-8 rounded-3xl shadow-lg border border-gray-100 hover:shadow-2xl transition-shadow">
                  <div className={`flex-shrink-0 w-14 h-14 bg-gradient-to-br ${reason.gradient} rounded-2xl flex items-center justify-center shadow-lg`}>
                    <CheckCircle className="text-white" size={28} />
                  </div>
                  <div>
                    <h4 className="font-bold text-xl mb-3 text-gray-800">{reason.title}</h4>
                    <p className="text-gray-600 leading-relaxed">{reason.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* 9. Meet Our Team - Enhanced with Beautiful Cards */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-32"
        >
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 mb-4">
              <Users className="text-indigo-600" size={40} />
              <h3 className="text-4xl md:text-5xl font-bold text-gray-800">Meet Our Team</h3>
            </div>
            <div className="w-24 h-1.5 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto rounded-full"></div>
            <p className="text-xl text-gray-600 mt-6 max-w-3xl mx-auto">
              The passionate artisans and visionaries behind every masterpiece
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                name: "[Founder Name]",
                role: "Founder & Master Gemologist",
                desc: "With [X] years of experience, [Name] leads our vision of ethical luxury jewelry.",
                gradient: "from-purple-200 to-pink-200",
                img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80"
              },
              { 
                name: "[Team Member Name]",
                role: "Head Designer",
                desc: "Award-winning designer bringing innovative concepts to traditional craftsmanship.",
                gradient: "from-blue-200 to-indigo-200",
                img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80"
              },
              { 
                name: "[Team Member Name]",
                role: "Master Craftsman",
                desc: "Third-generation jeweler specializing in intricate gemstone settings.",
                gradient: "from-green-200 to-teal-200",
                img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80"
              }
            ].map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ y: -10 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100 hover:shadow-2xl transition-shadow">
                  <div className="relative h-80 overflow-hidden">
                    <div className={`absolute inset-0 bg-gradient-to-br ${member.gradient}`}></div>
                    <img 
                      src={member.img} 
                      alt={member.name}
                      className="w-full h-full object-cover mix-blend-overlay group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                  <div className="p-8 text-center">
                    <h4 className="font-bold text-2xl mb-2 text-gray-800">{member.name}</h4>
                    <p className="text-purple-600 font-semibold mb-4 text-lg">{member.role}</p>
                    <p className="text-gray-600 leading-relaxed">{member.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* 10. Social Proof / Testimonials - Enhanced Design */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 mb-4">
              <Star className="text-yellow-500" size={40} />
              <h3 className="text-4xl md:text-5xl font-bold text-gray-800">What Our Customers Say</h3>
            </div>
            <div className="w-24 h-1.5 bg-gradient-to-r from-yellow-500 to-orange-500 mx-auto rounded-full"></div>
            <p className="text-xl text-gray-600 mt-6 max-w-3xl mx-auto">
              Real stories from our valued clients
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote: "Absolutely stunning craftsmanship! The custom engagement ring exceeded all expectations. A true masterpiece.",
                author: "[Customer Name]",
                location: "New York, USA"
              },
              {
                quote: "The team's attention to detail and commitment to ethical sourcing made this experience unforgettable.",
                author: "[Customer Name]",
                location: "London, UK"
              },
              {
                quote: "From design to delivery, every step was transparent and professional. The final piece is breathtaking!",
                author: "[Customer Name]",
                location: "Sydney, Australia"
              }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                whileHover={{ y: -10, scale: 1.02 }}
                viewport={{ once: true }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-3xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity"></div>
                <div className="relative bg-white p-8 rounded-3xl shadow-xl border border-gray-100">
                  {/* Quote icon */}
                  <div className="text-6xl text-yellow-500 opacity-20 mb-4">"</div>
                  
                  {/* Stars */}
                  <div className="flex justify-center gap-1 mb-6">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={20} className="text-yellow-500 fill-yellow-500" />
                    ))}
                  </div>
                  
                  {/* Testimonial text */}
                  <p className="text-gray-700 italic text-lg leading-relaxed mb-6">
                    {testimonial.quote}
                  </p>
                  
                  {/* Author */}
                  <div className="border-t border-gray-200 pt-6">
                    <p className="font-bold text-gray-800 text-lg">{testimonial.author}</p>
                    <p className="text-gray-500 text-sm">{testimonial.location}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Client Logos Section */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-20 text-center"
          >
            <p className="text-gray-600 mb-8 text-lg">Trusted by leading publications and featured in:</p>
            <div className="flex flex-wrap justify-center items-center gap-12 opacity-50">
              {["Vogue", "Harper's Bazaar", "Elle", "GQ", "Luxury Living"].map((brand, index) => (
                <div key={index} className="text-2xl font-serif text-gray-400 hover:text-gray-600 transition-colors">
                  {brand}
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* CTA Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 py-20 px-8"
      >
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Create Your Masterpiece?
          </h3>
          <p className="text-xl text-white/90 mb-10 leading-relaxed">
            Let's bring your vision to life. Start your custom jewelry journey today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#custom-design" className="px-8 py-4 bg-white text-purple-600 rounded-full font-bold text-lg hover:bg-gray-100 transition-colors shadow-xl hover:shadow-2xl">
              Start Custom Design
            </a>
            <a href="#contact" className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-full font-bold text-lg hover:bg-white/10 transition-colors">
              Contact Us
            </a>
          </div>
        </div>
      </motion.div>
      </section>
    </div>
  );
}
