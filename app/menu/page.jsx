'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiCheckCircle, FiMessageCircle, FiSearch, FiStar, FiCoffee, FiArrowRight } from 'react-icons/fi';

const menuData = [
  // Starters
  { id: 1, name: 'Paneer Tikka', category: 'Starters', description: 'Cottage cheese marinated in spices, grilled in tandoor', isSpecial: true },
  { id: 2, name: 'Hara Bhara Kabab', category: 'Starters', description: 'Spinach and green peas patties, shallow fried', isSpecial: false },
  { id: 3, name: 'Veg Spring Rolls', category: 'Starters', description: 'Crispy rolls stuffed with fresh vegetables', isSpecial: false },
  { id: 4, name: 'Mushroom Galouti', category: 'Starters', description: 'Melt-in-mouth mushroom kebabs', isSpecial: true },
  { id: 5, name: 'Dahi Ke Kabab', category: 'Starters', description: 'Hung curd kebabs with crispy layer', isSpecial: false },
  { id: 6, name: 'Chilli Paneer', category: 'Starters', description: 'Indo-Chinese style spicy paneer', isSpecial: false },
  
  // Main Course - Paneer
  { id: 7, name: 'Paneer Butter Masala', category: 'Main Course', description: 'Creamy tomato gravy with soft paneer cubes', isSpecial: true },
  { id: 8, name: 'Shahi Paneer', category: 'Main Course', description: 'Royal rich gravy with cashew and cream', isSpecial: true },
  { id: 9, name: 'Kadai Paneer', category: 'Main Course', description: 'Paneer with bell peppers in spicy gravy', isSpecial: false },
  { id: 10, name: 'Matar Paneer', category: 'Main Course', description: 'Green peas and paneer in onion-tomato gravy', isSpecial: false },
  
  // Main Course - Dal
  { id: 11, name: 'Dal Makhani', category: 'Main Course', description: 'Creamy black lentils slow-cooked overnight', isSpecial: true },
  { id: 12, name: 'Dal Tadka', category: 'Main Course', description: 'Yellow dal tempered with ghee and spices', isSpecial: false },
  { id: 13, name: 'Malai Kofta', category: 'Main Course', description: 'Potato-paneer dumplings in rich creamy gravy', isSpecial: true },
  { id: 14, name: 'Navratan Korma', category: 'Main Course', description: 'Nine vegetables in creamy nut-based gravy', isSpecial: true },
  { id: 15, name: 'Veg Kolhapuri', category: 'Main Course', description: 'Mixed vegetables in spicy Maharashtrian gravy', isSpecial: false },
  
  // Rice
  { id: 16, name: 'Veg Biryani', category: 'Rice', description: 'Aromatic basmati rice with fresh vegetables and spices', isSpecial: true },
  { id: 17, name: 'Veg Pulao', category: 'Rice', description: 'Fragrant rice with mixed vegetables', isSpecial: false },
  { id: 18, name: 'Jeera Rice', category: 'Rice', description: 'Basmati rice tempered with cumin seeds', isSpecial: false },
  { id: 19, name: 'Fried Rice', category: 'Rice', description: 'Indo-Chinese style fried rice', isSpecial: false },
  
  // Breads
  { id: 20, name: 'Garlic Naan', category: 'Breads', description: 'Soft tandoori naan with garlic and butter', isSpecial: false },
  { id: 21, name: 'Butter Naan', category: 'Breads', description: 'Soft naan brushed with butter', isSpecial: false },
  { id: 22, name: 'Lachha Paratha', category: 'Breads', description: 'Multi-layered whole wheat paratha', isSpecial: false },
  { id: 23, name: 'Tandoori Roti', category: 'Breads', description: 'Whole wheat roti from tandoor', isSpecial: false },
  
  // Desserts
  { id: 24, name: 'Gulab Jamun', category: 'Desserts', description: 'Soft milk solids in fragrant sugar syrup', isSpecial: true },
  { id: 25, name: 'Rasmalai', category: 'Desserts', description: 'Soft paneer patties in sweetened milk', isSpecial: true },
  { id: 26, name: 'Gajar Ka Halwa', category: 'Desserts', description: 'Slow-cooked carrot pudding with nuts', isSpecial: true },
  { id: 27, name: 'Kheer', category: 'Desserts', description: 'Traditional rice pudding with cardamom', isSpecial: false },
  { id: 28, name: 'Moong Dal Halwa', category: 'Desserts', description: 'Rich lentil halwa', isSpecial: true },
  
  // Chinese
  { id: 29, name: 'Veg Manchurian', category: 'Chinese', description: 'Crispy veg balls in Manchurian sauce', isSpecial: false },
  { id: 30, name: 'Hakka Noodles', category: 'Chinese', description: 'Stir-fried noodles with vegetables', isSpecial: false },
  { id: 31, name: 'Chilli Garlic Noodles', category: 'Chinese', description: 'Spicy noodles with garlic', isSpecial: false },
  { id: 32, name: 'Schezwan Fried Rice', category: 'Chinese', description: 'Spicy schezwan style rice', isSpecial: false },
];

const categories = ['All', 'Starters', 'Main Course', 'Rice', 'Breads', 'Chinese', 'Desserts'];

export default function MenuPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredMenu = menuData.filter(item => {
    const matchCategory = selectedCategory === 'All' || item.category === selectedCategory;
    const matchSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase());
    return matchCategory && matchSearch;
  });

  const bookNow = (itemName) => {
    const phoneNumber = '919717823822';
    const message = `Hello ATW-Corner! I'm interested in ordering:\n\n🍽️ *${itemName}*\n\nPlease share the price and availability for my event.`;
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, '_blank');
  };

  const categoryCounts = categories.reduce((acc, cat) => {
    acc[cat] = cat === 'All' ? menuData.length : menuData.filter(item => item.category === cat).length;
    return acc;
  }, {});

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } },
  };

  return (
    <div className="pt-20 pb-16 bg-gradient-to-b from-white via-orange-50/30 to-white">
      {/* Hero Section with Parallax Effect */}
      <div className="relative h-64 md:h-72 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-600 via-red-600 to-orange-600">
          <div className="absolute inset-0 bg-black/30" />
          <div className="absolute top-0 left-0 w-full h-full opacity-10">
            <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-10 right-10 w-40 h-40 bg-white rounded-full blur-3xl animate-pulse animation-delay-2000" />
          </div>
        </div>
        <div className="relative h-full flex flex-col items-center justify-center text-center text-white px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.5, rotate: -180 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.6, type: 'spring', stiffness: 200 }}
            className="mb-4"
          >
            <FiCoffee className="w-12 h-12 text-orange-300 mx-auto" />
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold mb-3"
          >
            Our <span className="text-orange-300">Royal</span> Menu
          </motion.h1>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: '100px' }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="h-1 bg-gradient-to-r from-orange-400 to-red-400 mx-auto rounded-full mb-4"
          />
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-base md:text-lg"
          >
            ✨ 32+ Exquisite Wedding Special Dishes ✨
          </motion.p>
        </div>
      </div>

      <div className="container-custom py-12">
        {/* Pure Veg Banner with Animation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-gradient-to-r from-emerald-600 to-green-600 rounded-2xl p-4 mb-8 text-center shadow-xl relative overflow-hidden group"
        >
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <div className="absolute top-0 left-0 w-32 h-32 bg-white rounded-full blur-2xl" />
            <div className="absolute bottom-0 right-0 w-40 h-40 bg-white rounded-full blur-2xl" />
          </div>
          <div className="relative flex items-center justify-center gap-3 flex-wrap">
            <FiCheckCircle className="text-white w-5 h-5" />
            <span className="text-white font-semibold text-sm md:text-base">🍛 100% Pure Vegetarian | Wedding Special Menu | No Onion No Garlic Options</span>
          </div>
        </motion.div>

        {/* Search Bar with Animation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative max-w-md mx-auto mb-8"
        >
          <FiSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          <input
            type="text"
            placeholder="Search your favorite dish..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-11 pr-4 py-3 rounded-full border border-gray-200 focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 shadow-md transition-all duration-300"
          />
        </motion.div>

        {/* Categories with Hover Effects */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="flex flex-wrap justify-center gap-2 mb-10"
        >
          {categories.map((category, idx) => (
            <motion.button
              key={category}
              onClick={() => setSelectedCategory(category)}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.03 }}
              className={`px-4 py-1.5 rounded-full text-sm font-semibold transition-all duration-300 shadow-sm ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-md'
                  : 'bg-white text-gray-700 hover:bg-orange-100 border border-gray-200 hover:shadow-md'
              }`}
            >
              {category} <span className="text-xs opacity-80">({categoryCounts[category]})</span>
            </motion.button>
          ))}
        </motion.div>

        {/* Menu Grid with Staggered Animation */}
        {filteredMenu.length === 0 ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <p className="text-gray-500 text-lg">No items found. Try searching something else!</p>
          </motion.div>
        ) : (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-5"
          >
            <AnimatePresence>
              {filteredMenu.map((item) => (
                <motion.div
                  key={item.id}
                  variants={itemVariants}
                  layout
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="group bg-white rounded-xl p-4 shadow-md hover:shadow-2xl transition-all duration-500 border border-gray-100 cursor-pointer relative overflow-hidden"
                >
                  {/* Animated Gradient Border on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-red-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-0" style={{ margin: -1, padding: 1 }} />
                  
                  <div className="relative z-10 bg-white rounded-xl p-4 -m-4">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1 flex-wrap">
                          <h3 className="text-lg font-bold text-gray-800 group-hover:text-orange-500 transition-colors duration-300">
                            {item.name}
                          </h3>
                          {item.isSpecial && (
                            <motion.span
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              className="px-1.5 py-0.5 bg-gradient-to-r from-orange-500 to-red-500 text-white text-[10px] rounded-full flex items-center gap-0.5 shadow-sm"
                            >
                              <FiStar className="w-2 h-2" /> Chef Special
                            </motion.span>
                          )}
                        </div>
                        <p className="text-gray-500 text-xs leading-relaxed mb-2 line-clamp-2">
                          {item.description}
                        </p>
                        <div className="flex items-center gap-2">
                          <span className="text-xs text-gray-400 bg-gray-100 px-2 py-0.5 rounded-full group-hover:bg-orange-100 transition-colors duration-300">
                            {item.category}
                          </span>
                        </div>
                      </div>
                      <motion.button
                        onClick={() => bookNow(item.name)}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="ml-3 px-3 py-1.5 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-lg text-xs font-semibold hover:shadow-md transition-all duration-300 flex items-center gap-1 whitespace-nowrap group/btn"
                      >
                        <FiMessageCircle className="w-3 h-3 group-hover/btn:scale-110 transition" />
                        Book Now
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        )}

        {/* Custom Order CTA with Animation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-12 text-center bg-gradient-to-r from-orange-500/10 via-red-500/10 to-orange-500/10 rounded-2xl p-8 border border-orange-500/30 shadow-lg relative overflow-hidden group"
        >
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
            <div className="absolute top-0 left-0 w-32 h-32 bg-orange-500/20 rounded-full blur-2xl" />
            <div className="absolute bottom-0 right-0 w-40 h-40 bg-red-500/20 rounded-full blur-2xl" />
          </div>
          <div className="relative z-10">
            <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-2">Need a Custom Wedding Menu?</h3>
            <p className="text-gray-600 mb-4">We create personalized menus tailored to your taste, budget, and guest preferences</p>
            <motion.button
              onClick={() => {
                const message = `Hello ATW-Corner! I need a custom wedding menu. Please contact me.`;
                window.open(`https://wa.me/919717823822?text=${encodeURIComponent(message)}`, '_blank');
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-full text-sm font-semibold shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <FiMessageCircle className="w-4 h-4" />
              Get Custom Wedding Quote
              <FiArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}