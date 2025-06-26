import React from 'react';
export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-6 mt-12 text-center">
      <p className="text-sm">
        &copy; {new Date().getFullYear()} Restoji. جميع الحقوق محفوظة.
      </p>
    </footer>
  );
}