'use client';

import { useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { FiChevronLeft, FiChevronRight, FiStar, FiMessageSquare } from 'react-icons/fi';

const testimonials = [
  {
    id: 1,
    name: 'Ramlal Prajapat',
    text: 'good work and good quality',
    rating: 5,
    date: '2 March 2025',
    event: 'Wedding Catering',
  },
  {
    id: 2,
    name: 'Bhagwati Sharma',
    text: 'Best quality & catering services. Experienced the best variety of food catering services for wedding.',
    rating: 5,
    date: '15 February 2025',
    event: 'Wedding Catering',
  },
  {
    id: 3,
    name: 'Govind Kashyap',
    text: 'Awesome caterers. Food is definitely a highlight. Tastiness, nice presentation and good portion.',
    rating: 5,
    date: '10 January 2025',
    event: 'Corporate Event',
  },
  {
    id: 4,
    name: 'Vikas Rajawat',
    text: 'If you want to make sure that all your guests will be satisfied with good food, choose ATW-Corner.',
    rating: 5,
    date: '5 December 2024',
    event: 'Birthday Party',
  },
  {
    id: 5,
    name: 'Priya Mehta',
    text: 'Excellent service and delicious food! All our guests loved the variety and taste. Highly recommended for any event.',
    rating: 5,
    date: '20 November 2024',
    event: 'Wedding Catering',
  },
  {
    id: 6,
    name: 'Rajesh Kumar',
    text: 'Very professional team. They handled our corporate event perfectly. The food quality was outstanding.',
    rating: 5,
    date: '1 October 2024',
    event: 'Corporate Event',
  },
];

export default function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slidesPerView, setSlidesPerView] = useState(1);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setSlidesPerView(2);
      else setSlidesPerView(1);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const totalSlides = Math.ceil(testimonials.length / slidesPerView);
  const startIndex = currentIndex * slidesPerView;
  const visibleTestimonials = testimonials.slice(startIndex, startIndex + slidesPerView);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % totalSlides);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 5000);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 5000);
  };

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % totalSlides);
    }, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, totalSlides]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  return (
    <section className="relative py-20 md:py-28 overflow-hidden bg-gradient-to-b from-white to-orange-50/50">
      {/* Animated Background Orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 bg-orange-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse" />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-red-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse animation-delay-2000" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-yellow-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse animation-delay-4000" />
      </div>

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="inline-block px-4 py-1.5 bg-gradient-to-r from-orange-500/10 to-red-500/10 text-orange-600 rounded-full text-sm font-semibold mb-4 border border-orange-500/20"
          >
            💬 What Our Clients Say 💬
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mt-2"
          >
            Client{' '}
            <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
              Testimonials
            </span>
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: '80px' }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="h-1 bg-gradient-to-r from-orange-500 to-red-500 mx-auto mt-4 rounded-full"
          />
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-gray-600 max-w-2xl mx-auto mt-4"
          >
            Don't just take our word for it — hear what our customers have to say
          </motion.p>
        </div>

        {/* Testimonials Slider */}
        <div className="relative px-4 sm:px-8">
          {/* Navigation Buttons */}
          {totalSlides > 1 && (
            <>
              <motion.button
                onClick={prevSlide}
                whileHover={{ scale: 1.1, x: -3 }}
                whileTap={{ scale: 0.9 }}
                className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 p-3 bg-white rounded-full shadow-lg hover:bg-gradient-to-r hover:from-orange-500 hover:to-red-500 hover:text-white transition-all duration-300 group"
              >
                <FiChevronLeft className="w-5 h-5 group-hover:scale-110 transition" />
              </motion.button>
              <motion.button
                onClick={nextSlide}
                whileHover={{ scale: 1.1, x: 3 }}
                whileTap={{ scale: 0.9 }}
                className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 p-3 bg-white rounded-full shadow-lg hover:bg-gradient-to-r hover:from-orange-500 hover:to-red-500 hover:text-white transition-all duration-300 group"
              >
                <FiChevronRight className="w-5 h-5 group-hover:scale-110 transition" />
              </motion.button>
            </>
          )}

          {/* Slides Container */}
          <div className="overflow-hidden">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="grid gap-6"
              style={{
                gridTemplateColumns: `repeat(${slidesPerView}, minmax(0, 1fr))`,
              }}
            >
              {visibleTestimonials.map((testimonial, idx) => (
                <motion.div
                  key={testimonial.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="bg-white p-6 md:p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
                >
                  {/* Quote Icon */}
                  <div className="mb-4">
                    <FiMessageSquare className="w-8 h-8 text-orange-500/30" />
                  </div>

                  {/* Rating Stars */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <motion.div
                        key={i}
                        whileHover={{ scale: 1.2 }}
                        animate={{ scale: [1, 1.1, 1] }}
                        transition={{ duration: 0.3, delay: i * 0.05 }}
                      >
                        <FiStar className="w-4 h-4 text-yellow-500 fill-current" />
                      </motion.div>
                    ))}
                  </div>

                  {/* Testimonial Text */}
                  <p className="text-gray-600 leading-relaxed italic mb-5">
                    "{testimonial.text}"
                  </p>

                  {/* Author Info */}
                  <div className="border-t border-gray-100 pt-4 mt-2">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-bold text-gray-800 text-lg">{testimonial.name}</h4>
                        <p className="text-sm text-orange-600 font-semibold">{testimonial.event}</p>
                      </div>
                      <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center">
                        <span className="text-white font-bold text-lg">
                          {testimonial.name.charAt(0)}
                        </span>
                      </div>
                    </div>
                    <p className="text-xs text-gray-500 mt-2">{testimonial.date}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Dots Indicator */}
          {totalSlides > 1 && (
            <div className="flex justify-center gap-2 mt-8">
              {Array.from({ length: totalSlides }).map((_, idx) => (
                <motion.button
                  key={idx}
                  onClick={() => {
                    setCurrentIndex(idx);
                    setIsAutoPlaying(false);
                    setTimeout(() => setIsAutoPlaying(true), 5000);
                  }}
                  whileHover={{ scale: 1.2 }}
                  className={`transition-all duration-300 rounded-full ${
                    currentIndex === idx
                      ? 'w-8 h-2 bg-gradient-to-r from-orange-500 to-red-500'
                      : 'w-2 h-2 bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
          )}
        </div>

        {/* Overall Rating Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ delay: 0.5, type: 'spring' }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-orange-500/10 to-red-500/10 rounded-full shadow-md border border-orange-500/20">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <FiStar key={i} className="w-4 h-4 text-yellow-500 fill-current" />
              ))}
            </div>
            <span className="font-semibold text-gray-800">5.0 out of 5</span>
            <span className="text-gray-500 text-sm">| 150+ reviews</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}