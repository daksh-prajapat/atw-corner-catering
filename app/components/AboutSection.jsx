'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { 
  FiHeart, FiStar, FiUsers, FiAward, FiCalendar, FiChevronRight, 
  FiTruck, FiClock, FiCheckCircle, FiArrowRight, FiZoomIn,
  FiTrendingUp
} from 'react-icons/fi';
import Link from 'next/link';

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });
  const [hoveredStat, setHoveredStat] = useState(null);
  const [hoveredQuality, setHoveredQuality] = useState(null);
  const [imageHover, setImageHover] = useState(false);

  const stats = [
    { icon: FiCalendar, value: '15+', label: 'Years of Excellence', color: 'from-orange-500 to-red-500', bgHover: 'hover:from-orange-600 hover:to-red-600', delay: 0 },
    { icon: FiHeart, value: '1000+', label: 'Happy Events', color: 'from-pink-500 to-rose-500', bgHover: 'hover:from-pink-600 hover:to-rose-600', delay: 0.1 },
    { icon: FiStar, value: '98%', label: 'Client Satisfaction', color: 'from-yellow-500 to-amber-500', bgHover: 'hover:from-yellow-600 hover:to-amber-600', delay: 0.2 },
    { icon: FiUsers, value: '50+', label: 'Expert Chefs', color: 'from-green-500 to-emerald-500', bgHover: 'hover:from-green-600 hover:to-emerald-600', delay: 0.3 },
  ];

  const qualities = [
    { icon: FiCheckCircle, title: '100% Pure Veg', desc: 'Strictly vegetarian, no compromises', color: 'from-green-500 to-emerald-500', bgHover: 'hover:bg-green-50', borderHover: 'hover:border-green-500' },
    { icon: FiTruck, title: 'Pan India Service', desc: 'Delivering excellence everywhere', color: 'from-blue-500 to-cyan-500', bgHover: 'hover:bg-blue-50', borderHover: 'hover:border-blue-500' },
    { icon: FiClock, title: 'On-Time Promise', desc: 'Punctuality guaranteed', color: 'from-orange-500 to-red-500', bgHover: 'hover:bg-orange-50', borderHover: 'hover:border-orange-500' },
    { icon: FiAward, title: 'Premium Quality', desc: 'Best ingredients, best taste', color: 'from-purple-500 to-pink-500', bgHover: 'hover:bg-purple-50', borderHover: 'hover:border-purple-500' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  return (
    <section className="relative py-24 md:py-32 overflow-hidden bg-gradient-to-br from-white via-orange-50/30 to-white">
      {/* Animated Background Orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full">
          <motion.div 
            animate={{ scale: [1, 1.2, 1], x: [0, 50, 0] }}
            transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
            className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-orange-200 to-red-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30"
          />
          <motion.div 
            animate={{ scale: [1, 1.3, 1], x: [0, -50, 0] }}
            transition={{ duration: 18, repeat: Infinity, ease: 'linear', delay: 2 }}
            className="absolute bottom-20 right-20 w-[500px] h-[500px] bg-gradient-to-r from-pink-200 to-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30"
          />
          <motion.div 
            animate={{ scale: [1, 1.1, 1], opacity: [0.1, 0.2, 0.1] }}
            transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-yellow-200 to-orange-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
          />
        </div>
      </div>

      <div className="container-custom relative z-10">
        {/* Since Badge */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <span className="text-orange-500 font-semibold tracking-wider text-sm uppercase bg-orange-100 px-4 py-1.5 rounded-full inline-block">
            Established Since
          </span>
          <motion.div
            initial={{ scale: 0.3, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, type: 'spring', stiffness: 200, damping: 15 }}
            className="text-8xl md:text-9xl font-bold bg-gradient-to-r from-orange-600 via-red-600 to-pink-600 bg-clip-text text-transparent mt-4"
          >
            2010
          </motion.div>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: '120px' }}
            transition={{ delay: 0.4, duration: 0.8, ease: 'easeOut' }}
            className="h-1 bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 mx-auto mt-4 rounded-full"
          />
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-gray-600 mt-4 text-sm uppercase tracking-wider"
          >
            A Legacy of Taste & Trust
          </motion.p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Text Content */}
          <motion.div
            ref={ref}
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            className="space-y-6"
          >
            <motion.div variants={itemVariants}>
              <span className="inline-block text-orange-500 font-semibold uppercase tracking-wider text-sm border-l-4 border-orange-500 pl-3 py-1">
                Our Story
              </span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mt-5 leading-tight">
                Where Every Bite 
                <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent block mt-2">
                  Tells a Story
                </span>
              </h2>
            </motion.div>

            <motion.p variants={itemVariants} className="text-gray-600 leading-relaxed text-lg">
              For over <span className="font-semibold text-orange-600">15 glorious years</span>, ATW-Corner has been the trusted name for 
              <span className="font-semibold text-orange-600"> pure vegetarian catering</span> across India. From intimate family gatherings to grand weddings, 
              we've served <span className="font-semibold text-orange-600">1000+ successful events</span> with unwavering commitment to quality.
            </motion.p>

            <motion.p variants={itemVariants} className="text-gray-600 leading-relaxed">
              What started as a small venture in 2010 has grown into one of Delhi's most sought-after catering services, 
              powered by our passionate team of 50+ expert chefs and service professionals. Every dish is crafted with love, 
              authenticity, and the finest ingredients.
            </motion.p>

            {/* Qualities Grid */}
            <motion.div variants={itemVariants} className="grid grid-cols-2 gap-4 pt-2">
              {qualities.map((quality, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  onHoverStart={() => setHoveredQuality(index)}
                  onHoverEnd={() => setHoveredQuality(null)}
                  className={`flex items-center gap-3 p-3 bg-white rounded-xl shadow-md border border-gray-100 transition-all duration-300 cursor-pointer ${quality.bgHover} ${quality.borderHover} hover:shadow-xl`}
                >
                  <motion.div 
                    animate={hoveredQuality === index ? { rotate: 360, scale: 1.1 } : { rotate: 0, scale: 1 }}
                    transition={{ duration: 0.4 }}
                    className={`w-10 h-10 bg-gradient-to-r ${quality.color} rounded-full flex items-center justify-center group-hover:scale-110 transition-all`}
                  >
                    <quality.icon className="w-5 h-5 text-white" />
                  </motion.div>
                  <div>
                    <div className="font-semibold text-gray-800 text-sm">{quality.title}</div>
                    <div className="text-xs text-gray-500">{quality.desc}</div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Stats Grid */}
            <motion.div variants={itemVariants} className="grid grid-cols-2 gap-4 pt-2">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.7 + index * 0.1 }}
                  whileHover={{ y: -8, scale: 1.03 }}
                  onHoverStart={() => setHoveredStat(index)}
                  onHoverEnd={() => setHoveredStat(null)}
                  className={`bg-gradient-to-r ${stat.color} p-4 rounded-xl text-white shadow-lg transition-all duration-300 cursor-pointer hover:shadow-2xl`}
                >
                  <motion.div
                    animate={hoveredStat === index ? { rotate: [0, -10, 10, -5, 5, 0] } : { rotate: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <stat.icon className="w-8 h-8 mb-2 opacity-90" />
                  </motion.div>
                  <motion.div 
                    className="text-2xl font-bold"
                    animate={hoveredStat === index ? { scale: 1.1 } : { scale: 1 }}
                  >
                    {stat.value}
                  </motion.div>
                  <div className="text-xs opacity-90 font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Button */}
            <motion.div variants={itemVariants}>
              <Link
                href="/about"
                className="group relative inline-flex items-center gap-2 px-8 py-3.5 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-full font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden"
              >
                <span className="relative z-10">Discover Our Journey</span>
                <FiArrowRight className="relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-r from-red-600 to-pink-600"
                  initial={{ x: '100%' }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Side - Animated Image Gallery */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, type: 'spring', stiffness: 100 }}
            className="relative"
            onHoverStart={() => setImageHover(true)}
            onHoverEnd={() => setImageHover(false)}
          >
            {/* Premium Image Frame */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white group">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0" style={{ margin: -2, padding: 2 }} />
              
              <div className="relative z-10 rounded-2xl overflow-hidden">
                <motion.img
                  src="https://images.unsplash.com/photo-1555244162-803834f70033?w=600&h=500&fit=crop"
                  alt="ATW-Corner Catering"
                  className="w-full h-[420px] object-cover"
                  animate={{ scale: imageHover ? 1.1 : 1 }}
                  transition={{ duration: 0.6 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Zoom Icon */}
                <motion.div 
                  className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                >
                  <div className="w-14 h-14 bg-white/95 backdrop-blur-sm rounded-full flex items-center justify-center shadow-xl">
                    <FiZoomIn className="w-6 h-6 text-orange-500" />
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Floating Badges */}
            <motion.div
              initial={{ opacity: 0, x: -40, y: 40 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              transition={{ delay: 0.8, duration: 0.5, type: 'spring' }}
              whileHover={{ scale: 1.1, rotate: -5 }}
              className="absolute -bottom-5 -left-5 bg-white rounded-2xl p-3 shadow-2xl border border-gray-200 z-20 cursor-pointer"
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl flex items-center justify-center">
                  <FiAward className="text-white w-6 h-6" />
                </div>
                <div>
                  <div className="text-sm font-bold text-gray-800">Award Winning</div>
                  <div className="text-xs text-gray-500">Best Caterer 2024</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40, y: 40 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              transition={{ delay: 1, duration: 0.5, type: 'spring' }}
              whileHover={{ scale: 1.1, rotate: 5 }}
              className="absolute -bottom-5 -right-5 bg-white rounded-2xl p-3 shadow-2xl border border-gray-200 z-20 cursor-pointer"
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center">
                  <FiHeart className="text-white w-6 h-6" />
                </div>
                <div>
                  <div className="text-sm font-bold text-gray-800">Pure Veg</div>
                  <div className="text-xs text-gray-500">Trusted Since 2010</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: -40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5, type: 'spring' }}
              whileHover={{ scale: 1.05 }}
              className="absolute -top-5 left-1/2 transform -translate-x-1/2 bg-white rounded-full px-5 py-2 shadow-xl z-20 whitespace-nowrap"
            >
              <div className="flex items-center gap-2">
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <FiStar key={i} className="w-4 h-4 text-yellow-500 fill-current" />
                  ))}
                </div>
                <span className="text-sm font-semibold text-gray-700">Trusted by 5000+ Families</span>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Premium Quote Banner */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mt-24 relative group"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-orange-600 via-red-600 to-pink-600 rounded-3xl blur-2xl opacity-60 group-hover:opacity-100 transition duration-500" />
          <div className="relative p-10 bg-gradient-to-r from-orange-600 via-red-600 to-orange-600 rounded-3xl text-white text-center shadow-2xl overflow-hidden">
            <motion.div 
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
              initial={{ x: '-100%' }}
              whileHover={{ x: '100%' }}
              transition={{ duration: 0.8 }}
            />
            <div className="relative z-10">
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="text-6xl mb-4"
              >
                🍛✨
              </motion.div>
              <p className="text-2xl md:text-3xl lg:text-4xl font-bold font-display italic">
                "Good food is the foundation of genuine happiness"
              </p>
              <p className="text-orange-100 mt-4 text-lg flex items-center justify-center gap-2">
                — ATW-Corner Family
                <FiTrendingUp className="text-orange-200" />
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}