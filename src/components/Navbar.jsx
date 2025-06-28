import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md py-4 px-6 flex justify-between items-center">
      {/* اللوجو */}
      <div className="text-2xl font-bold text-indigo-600">
        <Link to="/">Restoji</Link>
      </div>

      {/* روابط */}
      <div className="space-x-4">
        <Link to="/" className="text-gray-700 hover:text-indigo-600">الرئيسية</Link>
        <Link to="/login" className="text-white bg-indigo-600 px-4 py-2 rounded-xl hover:bg-indigo-700 transition">
          تسجيل الدخول
        </Link>
      </div>
    </nav>
  );
}