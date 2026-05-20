'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import Link from 'next/link';
import { FiArrowRight, FiMapPin, FiHeart, FiTruck } from 'react-icons/fi';

export default function Hero() {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"]
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);

  return (
    <section ref={targetRef} className="relative min-h-screen overflow-hidden">
      {/* Background Image with Premium Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/50 to-black/60 z-10" />
        <motion.img 
          initial={{ scale: 1 }}
          animate={{ scale: 1.05 }}
          transition={{ duration: 20, repeat: Infinity, repeatType: 'reverse', ease: 'linear' }}
          src="https://images.unsplash.com/photo-1555244162-803834f70033?w=1920&h=1080&fit=crop"
          alt="Catering Background"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Animated Floating Particles */}
      <div className="absolute inset-0 z-5 pointer-events-none overflow-hidden">
        {[...Array(25)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ 
              x: Math.random() * window.innerWidth, 
              y: window.innerHeight + 100,
              opacity: 0
            }}
            animate={{ 
              y: -100,
              opacity: [0, 0.5, 0]
            }}
            transition={{ 
              duration: Math.random() * 15 + 10, 
              repeat: Infinity, 
              delay: Math.random() * 10,
              ease: 'linear'
            }}
            className="absolute w-1.5 h-1.5 bg-orange-400/50 rounded-full"
          />
        ))}
      </div>

      <div className="relative z-20 w-full">
        <motion.div 
          style={{ x }}
          className="w-[300%] md:w-full flex md:block"
        >
          {/* Main Content */}
          <div className="w-screen md:w-full flex-shrink-0 flex items-center justify-center min-h-screen px-4">
            <div className="text-center text-white max-w-4xl mx-auto py-20">
              
              {/* Logo with 3D Effect - Using Your Logo Image */}
              <motion.div
                initial={{ scale: 0, opacity: 0, rotateY: 90 }}
                animate={{ scale: 1, opacity: 1, rotateY: 0 }}
                transition={{ delay: 0.2, type: 'spring', stiffness: 200, damping: 15 }}
                className="w-28 h-28 md:w-32 md:h-32 mx-auto mb-6 relative"
              >
                {/* Glowing Background */}
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 rounded-full blur-xl opacity-60 animate-pulse" />
                
                {/* Logo Image */}
                <div className="relative w-full h-full bg-white rounded-full flex items-center justify-center shadow-2xl overflow-hidden p-2">
                  <img
                    src="/logo.png"
                    alt="ATW Corner"
                    className="w-full h-full object-contain"
                  />
                </div>
              </motion.div>

              {/* Welcome Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="inline-block mb-4"
              >
                <span className="px-4 py-1.5 bg-white/10 backdrop-blur-sm rounded-full text-orange-400 text-sm font-semibold tracking-wider border border-white/20 hover:bg-white/20 transition-all duration-300">
                  ✨ Premium Catering Services Since 2010 ✨
                </span>
              </motion.div>

              {/* Main Heading */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="mb-2"
              >
                <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold">
                  <span className="bg-gradient-to-r from-orange-400 via-orange-500 to-red-500 bg-clip-text text-transparent">ATW</span>
                  <span className="text-white">-Corner</span>
                </h1>
              </motion.div>

              {/* Animated Underline */}
              <motion.div
                initial={{ width: 0, opacity: 0 }}
                animate={{ width: '100px', opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                className="h-1 bg-gradient-to-r from-orange-500 to-red-500 mx-auto rounded-full mb-6"
              />

              {/* Tagline */}
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="text-lg sm:text-xl md:text-2xl max-w-3xl mx-auto mb-4 font-light px-4"
              >
                Pure Veg Catering Services in Delhi & All India
              </motion.p>

              {/* Features Badges */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="flex flex-wrap justify-center gap-3 md:gap-4 mb-10 md:mb-12"
              >
                {[
                  { icon: FiMapPin, text: 'Delhi', delay: 0.7, color: 'from-orange-500 to-red-500' },
                  { icon: FiHeart, text: 'Pure Veg', delay: 0.8, color: 'from-pink-500 to-rose-500' },
                  { icon: FiTruck, text: 'All India', delay: 0.9, color: 'from-blue-500 to-cyan-500' },
                ].map((badge, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, scale: 0, rotateX: -90 }}
                    animate={{ opacity: 1, scale: 1, rotateX: 0 }}
                    transition={{ delay: badge.delay, duration: 0.4, type: 'spring' }}
                    whileHover={{ scale: 1.1, y: -5 }}
                    className={`flex items-center gap-2 px-3 py-1.5 bg-gradient-to-r ${badge.color} rounded-full shadow-lg cursor-pointer`}
                  >
                    <badge.icon className="text-white w-3.5 h-3.5 md:w-4 md:h-4" />
                    <span className="text-white text-xs md:text-sm font-medium">{badge.text}</span>
                  </motion.div>
                ))}
              </motion.div>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.5 }}
                className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center items-center"
              >
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link
                    href="/booking"
                    className="group relative px-6 py-3 md:px-8 md:py-4 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-full font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden inline-flex items-center gap-2 text-sm md:text-base"
                  >
                    <span className="relative z-10">📅 Book Your Event</span>
                    <motion.div
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1, repeat: Infinity }}
                      className="relative z-10"
                    >
                      <FiArrowRight />
                    </motion.div>
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-red-600 to-pink-600"
                      initial={{ x: '100%' }}
                      whileHover={{ x: 0 }}
                      transition={{ duration: 0.3 }}
                    />
                  </Link>
                </motion.div>

                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link
                    href="/menu"
                    className="px-6 py-3 md:px-8 md:py-4 border-2 border-white text-white rounded-full font-semibold hover:bg-white hover:text-orange-600 transition-all duration-300 inline-flex items-center gap-2 text-sm md:text-base group"
                  >
                    🍽️ View Menu
                    <motion.div
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1, repeat: Infinity }}
                    >
                      <FiArrowRight />
                    </motion.div>
                  </Link>
                </motion.div>
              </motion.div>
            </div>
          </div>

          {/* Mobile Swipe Indicator */}
          <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 md:hidden z-30">
            <motion.div
              animate={{ opacity: [0.4, 1, 0.4], y: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="flex flex-col items-center gap-1"
            >
              <span className="text-white/50 text-[10px] tracking-wider uppercase">Swipe to explore</span>
              <div className="w-7 h-7 border border-white/30 rounded-full flex items-center justify-center">
                <FiArrowRight className="text-white/50 w-3 h-3" />
              </div>
            </motion.div>
          </div>

          {/* Desktop Scroll Hint */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden md:block z-30">
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="flex flex-col items-center gap-1 text-white/50 hover:text-white/80 transition-colors cursor-pointer"
            >
              <span className="text-xs font-medium tracking-wider uppercase">Scroll Down</span>
              <div className="w-5 h-8 border border-white/30 rounded-full flex justify-center">
                <motion.div
                  animate={{ y: [0, 12, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="w-1 h-2 bg-orange-500 rounded-full mt-2"
                />
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}