import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function CallToAction() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/login');
  };

  return (
    <section className="text-center py-20 bg-yellow-400">
      <h2 className="text-3xl font-bold mb-6">جاهز تبدأ تجرب؟</h2>
      <p className="mb-8 text-lg">سجّل دخولك وابدأ إدارة مطعمك بسهولة.</p>
      <button
        onClick={handleClick}
        className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition"
      >
        جرّبه الآن
      </button>
    </section>
  );
}