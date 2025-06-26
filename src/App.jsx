import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Showcase from './components/Showcase'; // ✅ القسم الجديد
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';

export default function App() {
  return (
    <Router>
      <div className="font-sans text-gray-900 bg-white">
        <Header />
        <main className="space-y-20">
          <Hero />
          <Features />
          <Showcase /> {/* ✅ عرض الصور التوضيحية */}
          <CallToAction />
        </main>
        <Footer />
      </div>
    </Router>
  );
}