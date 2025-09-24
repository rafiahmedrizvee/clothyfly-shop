import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section className="min-h-screen bg-white text-gray-800 px-6 py-16 md:px-20">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            About Us
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover who we are, what we stand for, and why customers love shopping with us.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10 items-center">
          

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-gray-900">
              Passionate About Quality & Service
            </h2>
            <p className="text-gray-700 text-base leading-relaxed mb-4">
              At <span className="font-semibold">ShopVerse</span>, we're committed to delivering top-quality products
              with unbeatable service. We believe in innovation, customer satisfaction, and creating an effortless
              shopping experience.
            </p>
            <p className="text-gray-700 text-base leading-relaxed">
              From humble beginnings to becoming a trusted online store, our journey has been fueled by customer trust
              and a passion for excellence. Whether it's fashion, gadgets, or everyday essentials — we’ve got you
              covered.
            </p>
          </motion.div>
        </div>

        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-xl font-semibold mb-2">Our Mission</h3>
          <p className="text-gray-600 max-w-2xl mx-auto">
            To provide seamless, secure, and satisfying shopping experiences to customers around the globe, while
            maintaining transparency, trust, and sustainability in everything we do.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
