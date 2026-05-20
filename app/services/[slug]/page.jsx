'use client';

import { useParams } from 'next/navigation';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { FiArrowLeft, FiCheckCircle, FiPhone, FiMessageCircle } from 'react-icons/fi';

const servicesData = {
  'wedding-catering': {
    title: 'Wedding Catering',
    description: 'Make your special day unforgettable with our exquisite pure veg wedding catering services.',
    longDescription: `We understand that your wedding day is one of the most important days of your life. That's why we go above and beyond to ensure that every detail is perfect. From traditional Indian weddings to fusion celebrations, our team creates customized menus that reflect your taste and style.

    Our wedding catering service includes:
    • Traditional Indian cuisine with authentic flavors
    • Live food counters (chaat, pasta, pizza, etc.)
    • Customized menu planning with tasting sessions
    • Elegant food presentation and table setup
    • Professional serving staff and service coordination
    • Special dietary requirements (Jain, vegan, gluten-free)

    With over 500+ successful weddings, we have the experience and expertise to handle events of any size, from intimate gatherings to grand celebrations with 1000+ guests.`,
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=800&h=500&fit=crop',
    features: [
      'Customized Wedding Menu',
      'Live Food Counters',
      'Tasting Session',
      'Elegant Food Presentation',
      'Professional Serving Staff',
      'Special Dietary Options',
    ],
    packages: [
      { name: 'Silver Package', price: '₹500/plate', description: '5 Veg Dishes + 2 Desserts + Welcome Drink' },
      { name: 'Gold Package', price: '₹750/plate', description: '8 Veg Dishes + 3 Desserts + Welcome Drink + Live Counter' },
      { name: 'Platinum Package', price: '₹1000/plate', description: '12 Veg Dishes + 4 Desserts + 2 Live Counters + Mocktail' },
    ],
  },
  'corporate-catering': {
    title: 'Corporate Events',
    description: 'Professional pure veg catering for business occasions, conferences, and milestone celebrations.',
    longDescription: `We provide premium catering solutions for corporate events, ensuring your team and clients enjoy delicious food while you focus on your business goals.

    Our corporate catering includes:
    • Breakfast meetings and team lunches
    • Conference and seminar catering
    • Board meeting lunches
    • Employee appreciation events
    • Product launch catering
    • Holiday parties and annual galas

    We understand the importance of timeliness and professionalism in corporate settings. Our team ensures punctual delivery, elegant presentation, and seamless service.`,
    image: 'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?w=800&h=500&fit=crop',
    features: [
      'Punctual Delivery',
      'Professional Presentation',
      'Customized Menus',
      'Dietary Accommodations',
      'Coffee & Tea Service',
      'Seamless Setup',
    ],
    packages: [
      { name: 'Basic', price: '₹300/plate', description: '4 Veg Dishes + 1 Dessert + Soft Drinks' },
      { name: 'Standard', price: '₹450/plate', description: '6 Veg Dishes + 2 Desserts + Tea/Coffee' },
      { name: 'Premium', price: '₹700/plate', description: '8 Veg Dishes + 3 Desserts + Live Counter + Mocktail' },
    ],
  },
  'birthday-catering': {
    title: 'Birthday Parties',
    description: 'Celebrate birthdays with delicious pure veg food that everyone will love.',
    longDescription: `Make your birthday celebration truly special with our delicious pure veg catering services. We create memorable experiences for both kids and adults with our customized party menus.

    Our birthday catering includes:
    • Kids' party special menus
    • Adults' birthday celebration menus
    • Themed food counters
    • Customized birthday cakes
    • Party decorations coordination
    • Return gift options

    Whether it's a first birthday or a 50th celebration, we ensure your guests are delighted with our food and service.`,
    image: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=800&h=500&fit=crop',
    features: [
      'Kids Special Menu',
      'Birthday Cake Included',
      'Party Decor Coordination',
      'Themed Food Counters',
      'Return Gifts Options',
      'Entertainment Options',
    ],
    packages: [
      { name: 'Kids Party', price: '₹400/child', description: 'Kid-friendly menu + Cake + Goodie Bag' },
      { name: 'Adults Party', price: '₹600/person', description: '6 Veg Dishes + 2 Desserts + Cake' },
      { name: 'Premium Party', price: '₹900/person', description: '8 Veg Dishes + 3 Desserts + Live Counter + Mocktail + Décor' },
    ],
  },
  'engagement-catering': {
    title: 'Engagement Ceremony',
    description: 'Make your engagement memorable with our exquisite pure veg catering services.',
    longDescription: `Your engagement is a special milestone, and we're here to make it unforgettable. Our engagement catering services focus on creating a perfect blend of traditional flavors and modern presentation.

    Our engagement catering includes:
    • Elegant food setup and presentation
    • Traditional Indian cuisine with authentic flavors
    • Live food counters (chaat, pasta, pizza, etc.)
    • Mocktail counter for special occasions
    • Customized menu planning with tasting sessions
    • Professional serving staff and service coordination

    From intimate family gatherings to grand celebrations with 500+ guests, we handle everything with professional expertise and attention to detail.`,
    image: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800&h=500&fit=crop',
    features: [
      'Elegant Food Setup',
      'Traditional Indian Menu',
      'Live Food Counters',
      'Mocktail Counter',
      'Customized Menu Planning',
      'Professional Serving Staff',
      'Elegant Table Decoration',
      'Special Dietary Options',
    ],
    packages: [
      { name: 'Silver Package', price: '₹500/plate', description: '6 Veg Dishes + 2 Desserts + Welcome Drink' },
      { name: 'Gold Package', price: '₹750/plate', description: '8 Veg Dishes + 3 Desserts + Welcome Drink + Live Counter' },
      { name: 'Platinum Package', price: '₹1000/plate', description: '12 Veg Dishes + 4 Desserts + 2 Live Counters + Mocktail' },
    ],
  },
  'anniversary-catering': {
    title: 'Anniversary Celebration',
    description: 'Celebrate your milestone anniversary with our premium pure veg catering services.',
    longDescription: `Celebrate your milestone anniversary with our premium pure veg catering services. Whether it's your 25th (Silver) or 50th (Golden) anniversary, we make it truly special.

    Our anniversary catering includes:
    • Special anniversary menu with family favorites
    • Customized celebration cake included
    • Live food counters for interactive dining
    • Family style serving options
    • Decor coordination to match your theme
    • Professional serving staff

    Our anniversary packages are designed to create a memorable experience for you, your family, and your guests. From intimate gatherings to grand celebrations, we handle every detail with love and care.`,
    image: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=800&h=500&fit=crop',
    features: [
      'Special Anniversary Menu',
      'Customized Celebration Cake',
      'Live Food Counters',
      'Family Style Serving',
      'Decor Coordination',
      'Professional Serving Staff',
      'Photo-Friendly Setup',
      'Special Dietary Options',
    ],
    packages: [
      { name: 'Silver Package', price: '₹450/plate', description: '5 Veg Dishes + 2 Desserts + Celebration Cake' },
      { name: 'Gold Package', price: '₹650/plate', description: '7 Veg Dishes + 3 Desserts + Cake + Live Counter' },
      { name: 'Platinum Package', price: '₹900/plate', description: '10 Veg Dishes + 4 Desserts + 2 Live Counters + Mocktail + Decor' },
    ],
  },
};

export default function ServiceDetailPage() {
  const params = useParams();
  const slug = params.slug;
  const service = servicesData[slug];

  if (!service) {
    return (
      <div className="pt-32 pb-20 text-center">
        <h1 className="text-3xl font-bold">Service not found</h1>
        <Link href="/" className="text-orange-500 mt-4 inline-block">Go back home</Link>
      </div>
    );
  }

  const getGradient = () => {
    switch(slug) {
      case 'wedding-catering': return 'from-pink-600 to-rose-600';
      case 'corporate-catering': return 'from-blue-600 to-cyan-600';
      case 'birthday-catering': return 'from-green-600 to-emerald-600';
      case 'engagement-catering': return 'from-purple-600 to-pink-600';
      case 'anniversary-catering': return 'from-yellow-600 to-orange-600';
      default: return 'from-orange-700 to-red-700';
    }
  };

  return (
    <div className="pt-20 pb-16 bg-gradient-to-b from-white to-orange-50/30">
      {/* Hero Section */}
      <div className={`relative h-[50vh] min-h-[400px] bg-gradient-to-r ${getGradient()} overflow-hidden`}>
        <div className="absolute inset-0">
          <img src={service.image} alt={service.title} className="w-full h-full object-cover opacity-30" />
        </div>
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative h-full flex flex-col items-center justify-center text-center text-white px-4">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
          >
            {service.title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl max-w-2xl"
          >
            Pure Veg • Freshly Prepared • Hygienic
          </motion.p>
        </div>
      </div>

      <div className="container-custom py-12">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Back Button - Now goes to Services page */}
            <Link href="/services">
              <motion.div
                whileHover={{ x: -5 }}
                className="inline-flex items-center gap-2 text-orange-500 font-semibold mb-6 cursor-pointer"
              >
                <FiArrowLeft /> Back to All Services
              </motion.div>
            </Link>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="prose prose-lg max-w-none"
            >
              <h2 className="text-2xl font-bold text-gray-800 mb-4">About {service.title}</h2>
              {service.longDescription.split('\n\n').map((paragraph, idx) => (
                <p key={idx} className="text-gray-600 leading-relaxed mb-4">
                  {paragraph}
                </p>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mt-8"
            >
              <h3 className="text-xl font-bold text-gray-800 mb-4">Key Features</h3>
              <div className="grid md:grid-cols-2 gap-3">
                {service.features.map((feature, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + idx * 0.05 }}
                    className="flex items-center gap-2 p-2 bg-white rounded-lg shadow-sm"
                  >
                    <FiCheckCircle className="text-green-500 w-5 h-5" />
                    <span className="text-gray-700">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-white rounded-2xl shadow-xl p-6 mb-6"
            >
              <h3 className="text-xl font-bold text-gray-800 mb-4">Popular Packages</h3>
              <div className="space-y-4">
                {service.packages.map((pkg, idx) => (
                  <div key={idx} className="border-b border-gray-100 pb-4 last:border-0">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-bold text-gray-800">{pkg.name}</span>
                      <span className="text-orange-500 font-bold">{pkg.price}</span>
                    </div>
                    <p className="text-sm text-gray-500">{pkg.description}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className={`bg-gradient-to-r ${getGradient()} rounded-2xl p-6 text-white text-center`}
            >
              <h3 className="text-xl font-bold mb-4">Book This Service</h3>
              <p className="text-white/80 mb-6">Contact us for customized quotes and availability</p>
              <div className="space-y-3">
                <a
                  href="tel:+919717823822"
                  className="flex items-center justify-center gap-2 bg-white text-orange-600 py-2 rounded-full font-semibold hover:bg-gray-100 transition"
                >
                  <FiPhone /> Call Now
                </a>
                <a
                  href="https://wa.me/919717823822"
                  target="_blank"
                  className="flex items-center justify-center gap-2 bg-green-500 text-white py-2 rounded-full font-semibold hover:bg-green-600 transition"
                >
                  <FiMessageCircle /> WhatsApp
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}