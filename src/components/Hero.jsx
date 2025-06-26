import React from 'react';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center text-center px-6 pb-32 bg-gradient-to-b from-blue-900 to-blue-700 text-white">
      <div>
        <motion.h1
          className="text-4xl md:text-6xl font-bold mb-6"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          نظامك ع مزاجك
        </motion.h1>
        <motion.p
          className="text-lg md:text-xl mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          إدارة مطعمك بشكل ذكي ، سهل، ومنظم
        </motion.p>
        <motion.a
          href="#"
          className="inline-block px-8 py-3 bg-white text-blue-700 font-semibold rounded-2xl shadow-lg hover:bg-gray-100 transition"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          مجانًا Restoji جرّب 
        </motion.a>
      </div>
    </section>
  );
}