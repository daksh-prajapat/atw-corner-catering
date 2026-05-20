'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Link from 'next/link';
import { FiCheckCircle, FiHeart, FiStar, FiUsers, FiCalendar, FiArrowRight, FiArrowLeft, FiAward, FiTruck, FiClock } from 'react-icons/fi';

export default function AboutPage() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });

  const stats = [
    { icon: FiCalendar, value: '15+', label: 'Years of Experience', color: 'from-orange-500 to-red-500', delay: 0 },
    { icon: FiHeart, value: '1000+', label: 'Successful Events', color: 'from-pink-500 to-rose-500', delay: 0.1 },
    { icon: FiStar, value: '98%', label: 'Happy Customers', color: 'from-yellow-500 to-amber-500', delay: 0.2 },
    { icon: FiUsers, value: '50+', label: 'Expert Team', color: 'from-green-500 to-emerald-500', delay: 0.3 },
  ];

  const values = [
    { icon: FiAward, title: 'Quality First', desc: 'We never compromise on quality. Fresh ingredients, hygienic preparation, and delicious taste.', color: 'from-orange-500 to-red-500', delay: 0.1 },
    { icon: FiHeart, title: '100% Pure Veg', desc: 'Pure vegetarian food with strict quality standards. No compromise on our core value.', color: 'from-pink-500 to-rose-500', delay: 0.2 },
    { icon: FiStar, title: 'Customer First', desc: 'Your satisfaction is our success. We go above and beyond to make your event special.', color: 'from-yellow-500 to-amber-500', delay: 0.3 },
    { icon: FiTruck, title: 'Pan India Service', desc: 'We serve across India with same quality and freshness.', color: 'from-blue-500 to-cyan-500', delay: 0.4 },
    { icon: FiClock, title: 'On-Time Delivery', desc: 'Punctuality is our promise. We deliver exactly when promised.', color: 'from-green-500 to-emerald-500', delay: 0.5 },
    { icon: FiCheckCircle, title: 'Hygienic Food', desc: 'Strict hygiene standards maintained at every step.', color: 'from-purple-500 to-pink-500', delay: 0.6 },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
  };

  return (
    <div className="pt-20 pb-16 bg-gradient-to-b from-white to-orange-50/30">
      {/* Back to Home Button */}
      <div className="container-custom mb-4">
        <Link href="/">
          <motion.div
            whileHover={{ x: -5 }}
            className="inline-flex items-center gap-2 text-orange-500 font-semibold cursor-pointer"
          >
            <FiArrowLeft /> Back to Home
          </motion.div>
        </Link>
      </div>

      {/* Hero Section */}
      <div className="relative h-80 bg-gradient-to-r from-orange-700 to-red-700 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?w=1920&h=400&fit=crop" 
            alt="About ATW-Corner" 
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative h-full flex flex-col items-center justify-center text-center text-white px-4">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
          >
            About <span className="text-orange-400">ATW-Corner</span>
          </motion.h1>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: '80px' }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="h-1 bg-gradient-to-r from-orange-500 to-red-500 mx-auto rounded-full mb-4"
          />
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg max-w-2xl"
          >
            Pure Veg Catering Services in Delhi & All India | Since 2010
          </motion.p>
        </div>
      </div>

      <div className="container-custom py-12">
        {/* Our Story */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-4"
          >
            <span className="inline-block px-3 py-1 bg-orange-100 text-orange-600 rounded-full text-sm font-semibold">Our Journey</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Our Story</h2>
            <p className="text-gray-600 leading-relaxed">
              ATW-Corner was founded in <span className="font-semibold text-orange-600">2010</span> with a simple mission — to serve delicious, hygienic, 
              and 100% pure vegetarian food that makes every event memorable.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Over the past <span className="font-semibold text-orange-600">15+ years</span>, we have grown from a small catering service to one 
              of Delhi's most trusted names in wedding and event catering. Our journey has 
              been driven by passion, quality, and customer satisfaction.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Today, we proudly serve across India, bringing authentic flavors and exceptional 
              service to weddings, corporate events, birthday parties, and more.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            className="relative rounded-2xl overflow-hidden shadow-2xl"
          >
            <img
              src="https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?w=600&h=500&fit=crop"
              alt="Our Story"
              className="w-full h-auto object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1">
              <span className="text-xs font-semibold text-orange-600">Serving Since 2010</span>
            </div>
          </motion.div>
        </div>

        {/* Stats Section */}
        <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl p-8 mb-16 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-0 w-80 h-80 bg-white rounded-full blur-3xl" />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center text-white relative z-10">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: stat.delay }}
                whileHover={{ scale: 1.05 }}
                className="space-y-2"
              >
                <stat.icon className="w-10 h-10 mx-auto opacity-90" />
                <div className="text-3xl md:text-4xl font-bold">{stat.value}</div>
                <div className="text-sm opacity-90">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Our Values */}
        <div className="text-center mb-12">
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            className="inline-block px-4 py-1.5 bg-gradient-to-r from-orange-500/10 to-red-500/10 text-orange-600 rounded-full text-sm font-semibold mb-4 border border-orange-500/20"
          >
            ⭐ Our Core Values ⭐
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            className="text-3xl md:text-4xl font-bold text-gray-800 mb-4"
          >
            What Drives Us
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            animate={isInView ? { width: '80px' } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="h-1 bg-gradient-to-r from-orange-500 to-red-500 mx-auto rounded-full mb-4"
          />
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            className="text-gray-600 max-w-2xl mx-auto"
          >
            The principles that guide everything we do
          </motion.p>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16"
        >
          {values.map((value, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100"
            >
              <div className={`w-14 h-14 bg-gradient-to-r ${value.color} rounded-xl flex items-center justify-center mb-4 shadow-md group-hover:scale-110 transition-all duration-300`}>
                <value.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-orange-500 transition-colors duration-300">
                {value.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                {value.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5 }}
          className="text-center bg-gradient-to-r from-orange-500/10 to-red-500/10 rounded-2xl p-10 border border-orange-500/20"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Ready to plan your event?</h3>
          <p className="text-gray-600 mb-6">Let us make your occasion unforgettable with our pure veg catering services.</p>
          <Link href="/booking">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-full font-semibold shadow-lg hover:shadow-2xl transition-all duration-300 group"
            >
              Book Your Event Now
              <FiArrowRight className="group-hover:translate-x-1 transition" />
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}