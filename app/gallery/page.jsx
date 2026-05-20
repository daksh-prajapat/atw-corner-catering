'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiX, FiChevronLeft, FiChevronRight, FiImage, FiCamera, FiHeart } from 'react-icons/fi';

const galleryImages = [
  {
    id: 1,
    src: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=800&h=600&fit=crop',
    title: 'Wedding Catering',
    category: 'wedding',
    description: 'Elegant wedding setup with delicious pure veg food',
    date: '15 March 2025',
  },
  {
    id: 2,
    src: 'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?w=800&h=600&fit=crop',
    title: 'Corporate Event',
    category: 'corporate',
    description: 'Professional catering for business conferences',
    date: '10 February 2025',
  },
  {
    id: 3,
    src: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=800&h=600&fit=crop',
    title: 'Birthday Party',
    category: 'birthday',
    description: 'Colorful birthday celebration with special menu',
    date: '5 January 2025',
  },
  {
    id: 4,
    src: 'https://images.unsplash.com/photo-1555244162-803834f70033?w=800&h=600&fit=crop',
    title: 'Food Presentation',
    category: 'food',
    description: 'Beautifully presented pure veg dishes',
    date: '20 December 2024',
  },
  {
    id: 5,
    src: 'https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?w=800&h=600&fit=crop',
    title: 'Live Counter',
    category: 'food',
    description: 'Live food counters for fresh preparation',
    date: '15 November 2024',
  },
  {
    id: 6,
    src: 'https://images.unsplash.com/photo-1517244683847-7456b63c5969?w=800&h=600&fit=crop',
    title: 'Wedding Setup',
    category: 'wedding',
    description: 'Grand wedding food setup with live counters',
    date: '10 October 2024',
  },
  {
    id: 7,
    src: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800&h=600&fit=crop',
    title: 'Dessert Display',
    category: 'food',
    description: 'Sweet treats and desserts spread',
    date: '5 September 2024',
  },
  {
    id: 8,
    src: 'https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=800&h=600&fit=crop',
    title: 'Birthday Setup',
    category: 'birthday',
    description: 'Birthday party decorations with food',
    date: '20 August 2024',
  },
  {
    id: 9,
    src: 'https://images.unsplash.com/photo-1555244162-803834f70033?w=800&h=600&fit=crop',
    title: 'Buffet Setup',
    category: 'corporate',
    description: 'Corporate buffet lunch setup',
    date: '15 July 2024',
  },
];

const categories = [
  { id: 'all', label: 'All Photos', icon: FiImage, count: galleryImages.length },
  { id: 'wedding', label: 'Wedding', icon: FiHeart, count: galleryImages.filter(img => img.category === 'wedding').length },
  { id: 'corporate', label: 'Corporate', icon: FiCamera, count: galleryImages.filter(img => img.category === 'corporate').length },
  { id: 'birthday', label: 'Birthday', icon: FiHeart, count: galleryImages.filter(img => img.category === 'birthday').length },
  { id: 'food', label: 'Food', icon: FiCamera, count: galleryImages.filter(img => img.category === 'food').length },
];

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMounted, setIsMounted] = useState(false);

  // Fix for window is not defined
  useEffect(() => {
    setIsMounted(true);
  }, []);

  const filteredImages = selectedCategory === 'all'
    ? galleryImages
    : galleryImages.filter(img => img.category === selectedCategory);

  const openLightbox = (image, index) => {
    setSelectedImage(image);
    setCurrentIndex(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    const newIndex = (currentIndex + 1) % filteredImages.length;
    setCurrentIndex(newIndex);
    setSelectedImage(filteredImages[newIndex]);
  };

  const prevImage = () => {
    const newIndex = (currentIndex - 1 + filteredImages.length) % filteredImages.length;
    setCurrentIndex(newIndex);
    setSelectedImage(filteredImages[newIndex]);
  };

  // Keyboard navigation
  useEffect(() => {
    if (!isMounted || !selectedImage) return;
    
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight') nextImage();
      if (e.key === 'ArrowLeft') prevImage();
      if (e.key === 'Escape') closeLightbox();
    };
    
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isMounted, selectedImage, currentIndex]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
  };

  // Loading state
  if (!isMounted) {
    return (
      <div className="pt-20 pb-16 flex items-center justify-center min-h-screen">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-orange-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-500">Loading gallery...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-20 pb-16 bg-gradient-to-b from-white to-orange-50/30">
      {/* Hero Section */}
      <div className="relative h-64 md:h-80 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-700 to-red-700">
          <div className="absolute inset-0 bg-black/30" />
          <div className="absolute inset-0 opacity-10">
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
            <FiCamera className="w-12 h-12 text-orange-300 mx-auto" />
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-3"
          >
            Our <span className="text-orange-300">Memories</span>
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
            className="text-base md:text-lg max-w-2xl"
          >
            Capturing moments of joy, delicious food, and unforgettable events
          </motion.p>
        </div>
      </div>

      <div className="container-custom py-12">
        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category, idx) => (
            <motion.button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.05 }}
              className={`px-5 py-2.5 rounded-full font-semibold transition-all duration-300 flex items-center gap-2 shadow-sm ${
                selectedCategory === category.id
                  ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-orange-100 border border-gray-200 hover:shadow-md'
              }`}
            >
              <category.icon className="w-4 h-4" />
              {category.label} 
              <span className={`text-xs ${selectedCategory === category.id ? 'text-white/80' : 'text-gray-400'}`}>
                ({category.count})
              </span>
            </motion.button>
          ))}
        </motion.div>

        {/* Gallery Grid */}
        {filteredImages.length === 0 ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <p className="text-gray-500 text-lg">No images found in this category.</p>
          </motion.div>
        ) : (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredImages.map((image, index) => (
              <motion.div
                key={image.id}
                variants={itemVariants}
                layout
                whileHover={{ y: -12, scale: 1.02 }}
                onClick={() => openLightbox(image, index)}
                className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer"
              >
                <div className="relative overflow-hidden h-64">
                  <img
                    src={image.src}
                    alt={image.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
                  
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-gradient-to-r from-orange-500 to-red-500 text-white text-xs rounded-full shadow-md">
                      {image.category}
                    </span>
                  </div>
                  
                  <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-sm rounded-full px-2 py-1 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <span className="text-white text-xs">{image.date}</span>
                  </div>

                  <div className="absolute bottom-0 left-0 right-0 p-5 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-400">
                    <h3 className="text-xl font-bold mb-1">{image.title}</h3>
                    <p className="text-sm text-gray-200 line-clamp-2">{image.description}</p>
                  </div>
                </div>
                
                <div className="p-3 bg-white">
                  <p className="text-sm text-gray-600 text-center font-medium">{image.title}</p>
                </div>

                <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-orange-500 to-red-500 group-hover:w-full transition-all duration-500" />
              </motion.div>
            ))}
          </motion.div>
        )}

        {/* Stats Counter */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-12 text-center bg-gradient-to-r from-orange-500/10 to-red-500/10 rounded-2xl p-6 border border-orange-500/20"
        >
          <div className="flex items-center justify-center gap-8 flex-wrap">
            <div>
              <span className="text-3xl font-bold text-orange-600">{galleryImages.length}</span>
              <p className="text-gray-500 text-sm">Total Moments</p>
            </div>
            <div className="w-px h-8 bg-gray-300" />
            <div>
              <span className="text-3xl font-bold text-orange-600">{categories.length - 1}</span>
              <p className="text-gray-500 text-sm">Event Types</p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm"
            onClick={closeLightbox}
          >
            <button
              onClick={closeLightbox}
              className="absolute top-5 right-5 z-10 p-2 bg-white/20 rounded-full text-white hover:bg-white/30 hover:scale-110 transition-all duration-300"
            >
              <FiX className="w-6 h-6" />
            </button>

            <button
              onClick={(e) => { e.stopPropagation(); prevImage(); }}
              className="absolute left-5 z-10 p-3 bg-white/20 rounded-full text-white hover:bg-white/30 hover:scale-110 transition-all duration-300"
            >
              <FiChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); nextImage(); }}
              className="absolute right-5 z-10 p-3 bg-white/20 rounded-full text-white hover:bg-white/30 hover:scale-110 transition-all duration-300"
            >
              <FiChevronRight className="w-6 h-6" />
            </button>

            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 300, damping: 25 }}
              className="relative max-w-5xl max-h-[85vh] mx-4"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage.src}
                alt={selectedImage.title}
                className="w-full h-full object-contain rounded-2xl shadow-2xl"
              />
              
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent p-6 rounded-b-2xl">
                <h3 className="text-white text-2xl md:text-3xl font-bold mb-2">{selectedImage.title}</h3>
                <p className="text-gray-300 text-sm md:text-base mb-2">{selectedImage.description}</p>
                <div className="flex items-center gap-3 flex-wrap">
                  <span className="px-3 py-1 bg-gradient-to-r from-orange-500 to-red-500 text-white text-xs rounded-full">
                    {selectedImage.category}
                  </span>
                  <span className="text-gray-400 text-xs">{selectedImage.date}</span>
                </div>
              </div>
            </motion.div>

            <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 bg-black/60 backdrop-blur-sm rounded-full px-4 py-1.5">
              <span className="text-white text-sm">
                {currentIndex + 1} / {filteredImages.length}
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}