'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Link from 'next/link';
import { FiHeart, FiBriefcase, FiGift, FiUsers, FiStar, FiArrowRight, FiChevronRight } from 'react-icons/fi';

const services = [
  {
    icon: FiHeart,
    title: 'Wedding Catering',
    description: 'Make your special day unforgettable with our exquisite pure veg wedding catering. We create memorable experiences for your guests with traditional and modern delicacies.',
    color: 'from-pink-500 to-rose-500',
    iconColor: 'text-pink-500',
    bgColor: 'bg-pink-100',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=600&h=400&fit=crop',
    slug: 'wedding-catering',
    features: ['Traditional Menu', 'Live Counters', 'Customized Themes', 'Tasting Session'],
    price: 'Starting ₹500/plate',
  },
  {
    icon: FiBriefcase,
    title: 'Corporate Events',
    description: 'Professional pure veg catering for business occasions, conferences, and milestone celebrations. We focus on delivering customized delicacies.',
    color: 'from-blue-500 to-cyan-500',
    iconColor: 'text-blue-500',
    bgColor: 'bg-blue-100',
    image: 'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?w=600&h=400&fit=crop',
    slug: 'corporate-catering',
    features: ['Breakfast/Lunch/Dinner', 'Coffee Breaks', 'Meeting Packages', 'Team Lunches'],
    price: 'Starting ₹300/plate',
  },
  {
    icon: FiGift,
    title: 'Birthday Parties',
    description: 'Celebrate birthdays with delicious pure veg food that everyone will love. Special menus for kids and adults with live food counters.',
    color: 'from-green-500 to-emerald-500',
    iconColor: 'text-green-500',
    bgColor: 'bg-green-100',
    image: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=600&h=400&fit=crop',
    slug: 'birthday-catering',
    features: ['Birthday Themes', 'Kids Special Menu', 'Cake & Desserts', 'Party Decor'],
    price: 'Starting ₹400/plate',
  },
  {
    icon: FiUsers,
    title: 'Engagement Ceremony',
    description: 'Make your engagement memorable with our exquisite pure veg catering. Celebrate this special occasion with delicious food and elegant presentation.',
    color: 'from-purple-500 to-pink-500',
    iconColor: 'text-purple-500',
    bgColor: 'bg-purple-100',
    image: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=600&h=400&fit=crop',
    slug: 'engagement-catering',
    features: ['Elegant Setup', 'Traditional Menu', 'Live Counters', 'Mocktail Counter'],
    price: 'Starting ₹500/plate',
  },
  {
    icon: FiStar,
    title: 'Anniversary Celebration',
    description: 'Celebrate your milestone anniversary with our premium pure veg catering. Create lasting memories with family and friends over delicious food.',
    color: 'from-yellow-500 to-orange-500',
    iconColor: 'text-yellow-600',
    bgColor: 'bg-yellow-100',
    image: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=600&h=400&fit=crop',
    slug: 'anniversary-catering',
    features: ['Special Menu', 'Customized Cake', 'Decor Coordination', 'Family Packages'],
    price: 'Starting ₹450/plate',
  },
];

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });

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
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-white to-orange-50/50 relative overflow-hidden">
      {/* Animated Background Decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full">
          <motion.div 
            animate={{ scale: [1, 1.2, 1], x: [0, 30, 0] }}
            transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
            className="absolute top-20 left-10 w-64 h-64 bg-orange-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30"
          />
          <motion.div 
            animate={{ scale: [1, 1.3, 1], x: [0, -30, 0] }}
            transition={{ duration: 14, repeat: Infinity, ease: 'linear', delay: 2 }}
            className="absolute bottom-20 right-10 w-80 h-80 bg-red-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30"
          />
          <motion.div 
            animate={{ scale: [1, 1.1, 1], opacity: [0.1, 0.2, 0.1] }}
            transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-yellow-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
          />
        </div>
      </div>

      <div className="container-custom relative z-10">
        {/* Section Header with Enhanced Animation */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ type: 'spring', stiffness: 200 }}
            className="inline-block"
          >
            <span className="px-4 py-1.5 bg-gradient-to-r from-orange-500/10 to-red-500/10 text-orange-600 rounded-full text-sm font-semibold mb-4 border border-orange-500/20">
              ✨ What We Do ✨
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mt-4 mb-4"
          >
            Our Premium{' '}
            <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
              Services
            </span>
          </motion.h2>
          <motion.div
            initial={{ width: 0, opacity: 0 }}
            whileInView={{ width: '100px', opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8, ease: 'easeOut' }}
            className="h-1 bg-gradient-to-r from-orange-500 to-red-500 mx-auto rounded-full mb-4"
          />
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-gray-600 max-w-2xl mx-auto"
          >
            Pure Veg | Freshly Prepared | Hygienic | Customized Menus
          </motion.p>
        </div>

        {/* Services Grid - 5 services */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -12 }}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer"
            >
              {/* Image Container with Overlay Animation */}
              <div className="relative overflow-hidden h-56">
                <motion.img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.15 }}
                  transition={{ duration: 0.5 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className={`absolute bottom-4 left-4 w-14 h-14 bg-gradient-to-r ${service.color} rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-all duration-300 group-hover:rotate-12`}>
                  <service.icon className="w-7 h-7 text-white" />
                </div>
                {/* Price Badge */}
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <span className="text-xs font-semibold text-orange-600">{service.price}</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-2 group-hover:text-orange-500 transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed line-clamp-3">
                  {service.description}
                </p>
                {/* Features Preview with Icons */}
                <div className="flex flex-wrap gap-2 mt-4">
                  {service.features.slice(0, 2).map((feature, idx) => (
                    <span key={idx} className="text-xs px-3 py-1.5 bg-gray-100 rounded-full text-gray-600 flex items-center gap-1">
                      <FiStar className="w-3 h-3 text-orange-500" />
                      {feature}
                    </span>
                  ))}
                  {service.features.length > 2 && (
                    <span className="text-xs px-3 py-1.5 bg-gray-100 rounded-full text-gray-600">
                      +{service.features.length - 2} more
                    </span>
                  )}
                </div>
                {/* Learn More Link with Animation */}
                <Link href={`/services/${service.slug}`}>
                  <div className="mt-5 flex items-center text-orange-500 font-semibold group-hover:translate-x-2 transition-all duration-300 cursor-pointer">
                    Learn More 
                    <motion.div
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1, repeat: Infinity }}
                    >
                      <FiArrowRight className="ml-2" />
                    </motion.div>
                  </div>
                </Link>
              </div>

              {/* Animated Bottom Border */}
              <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-orange-500 to-red-500 group-hover:w-full transition-all duration-500" />
            </motion.div>
          ))}
        </motion.div>

        {/* View All Services Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="text-center mt-12"
        >
          <Link href="/services">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-full font-semibold shadow-lg hover:shadow-2xl transition-all duration-300 group"
            >
              <span>View All Services</span>
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                <FiChevronRight className="group-hover:translate-x-1 transition" />
              </motion.div>
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}