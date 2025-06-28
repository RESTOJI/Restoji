import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import FeaturesSection from "./components/FeaturesSection";
import Footer from "./components/Footer";
import Login from "./pages/Login"; // تأكد من اسم الملف

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        {/* الشريط العلوي */}
        <Navbar />

        {/* المحتوى الأساسي للصفحات */}
        <main className="flex-grow">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <HeroSection />
                  <FeaturesSection />
                </>
              }
            />
            <Route path="/login" element={<Login />} />
          </Routes>
        </main>

        {/* الفوتر */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;