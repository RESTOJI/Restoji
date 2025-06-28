import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-6 text-center">
      <div className="mb-2">
        <a href="/terms" className="text-sm mx-2 hover:underline">الشروط</a>
        <a href="/privacy" className="text-sm mx-2 hover:underline">الخصوصية</a>
        <a href="/support" className="text-sm mx-2 hover:underline">الدعم</a>
      </div>
      <p className="text-sm">&copy; {new Date().getFullYear()} Restoji. جميع الحقوق محفوظة.</p>
    </footer>
  );
}