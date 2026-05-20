'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiCalendar, FiUsers, FiMapPin, FiSend, FiCheckCircle, FiMessageCircle } from 'react-icons/fi';

export default function BookingPage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    eventType: 'wedding',
    eventDate: '',
    guests: '',
    location: '',
    message: '',
  });

  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('sending');

    const message = `*New Booking Request from ATW-Corner Website*%0A%0A
*Name:* ${formData.name}%0A
*Phone:* ${formData.phone}%0A
*Email:* ${formData.email}%0A
*Event Type:* ${formData.eventType}%0A
*Event Date:* ${formData.eventDate}%0A
*Guests:* ${formData.guests}%0A
*Location:* ${formData.location}%0A
*Message:* ${formData.message}%0A%0A
Please contact this customer at the earliest.`;

    // 🔥 ORIGINAL NUMBER 🔥
    const whatsappUrl = `https://wa.me/919717823822?text=${message}`;
    
    window.open(whatsappUrl, '_blank');
    setStatus('success');
    setTimeout(() => {
      setStatus('');
      setFormData({
        name: '', phone: '', email: '', eventType: 'wedding',
        eventDate: '', guests: '', location: '', message: '',
      });
    }, 2000);
  };

  const eventTypes = [
    { value: 'wedding', label: 'Wedding Catering', price: 'Starting ₹500/plate' },
    { value: 'corporate', label: 'Corporate Event', price: 'Starting ₹300/plate' },
    { value: 'birthday', label: 'Birthday Party', price: 'Starting ₹400/plate' },
    { value: 'engagement', label: 'Engagement Ceremony', price: 'Starting ₹500/plate' },
    { value: 'anniversary', label: 'Anniversary Celebration', price: 'Starting ₹450/plate' },
    { value: 'other', label: 'Other Event', price: 'Custom Quote' },
  ];

  return (
    <div className="pt-20 pb-16">
      {/* Hero Section */}
      <div className="relative h-64 bg-gradient-to-r from-orange-700 to-red-700">
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative h-full flex flex-col items-center justify-center text-center text-white px-4">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Book Your Event
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg max-w-2xl"
          >
            Fill the form below and we'll contact you within 24 hours
          </motion.p>
        </div>
      </div>

      <div className="container-custom py-12">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Form */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-white rounded-2xl p-8 shadow-xl"
            >
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Event Booking Form</h2>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-gray-700 mb-2 font-medium">Your Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-orange-500 transition"
                      placeholder="Enter your name"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-2 font-medium">Phone Number *</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-orange-500 transition"
                      placeholder="Enter your phone number"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-gray-700 mb-2 font-medium">Email Address</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-orange-500 transition"
                      placeholder="Enter your email"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-2 font-medium">Event Type *</label>
                    <select
                      name="eventType"
                      value={formData.eventType}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-orange-500 transition"
                    >
                      {eventTypes.map((event) => (
                        <option key={event.value} value={event.value}>
                          {event.label} - {event.price}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-gray-700 mb-2 font-medium">Event Date *</label>
                    <input
                      type="date"
                      name="eventDate"
                      value={formData.eventDate}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-orange-500 transition"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-2 font-medium">Expected Guests *</label>
                    <input
                      type="number"
                      name="guests"
                      value={formData.guests}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-orange-500 transition"
                      placeholder="Number of guests"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-gray-700 mb-2 font-medium">Event Location *</label>
                  <input
                    type="text"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-orange-500 transition"
                    placeholder="Where will the event be held?"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 mb-2 font-medium">Additional Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-orange-500 transition resize-none"
                    placeholder="Any special requirements, menu preferences, etc."
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className={`w-full py-3 rounded-xl font-semibold flex items-center justify-center gap-2 transition ${
                    status === 'sending' ? 'bg-gray-400' : 'bg-gradient-to-r from-orange-500 to-red-500 hover:shadow-lg'
                  } text-white`}
                >
                  {status === 'sending' ? (
                    <>Sending to WhatsApp...</>
                  ) : (
                    <><FiMessageCircle /> Submit Booking Request</>
                  )}
                </button>
              </form>
            </motion.div>
          </div>

          {/* Info Sidebar */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl p-6 text-white text-center mb-6"
            >
              <h3 className="text-xl font-bold mb-3">Instant Confirmation</h3>
              <p>Your booking request will be sent directly to our WhatsApp. We'll respond within 24 hours.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-white rounded-2xl p-6 shadow-lg"
            >
              <h3 className="text-lg font-bold text-gray-800 mb-3">Why Book With Us?</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center gap-2"><FiCheckCircle className="text-green-500" /> 100% Pure Veg</li>
                <li className="flex items-center gap-2"><FiCheckCircle className="text-green-500" /> Fresh & Hygienic Food</li>
                <li className="flex items-center gap-2"><FiCheckCircle className="text-green-500" /> On-time Delivery</li>
                <li className="flex items-center gap-2"><FiCheckCircle className="text-green-500" /> Customized Menus</li>
                <li className="flex items-center gap-2"><FiCheckCircle className="text-green-500" /> Professional Team</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}