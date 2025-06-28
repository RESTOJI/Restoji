import React from "react";

export default function HeroSection() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center bg-gradient-to-br from-blue-900 via-gray-800 to-gray-700 text-white px-6">
      <h1 className="text-4xl md:text-6xl font-bold mb-4">نظامك ع مزاجك</h1>
      <p className="text-lg md:text-2xl mb-8">وخلّي التركيز على الطعم، مش الإدارة.</p>
      <button className="bg-white text-blue-900 font-semibold py-3 px-6 rounded-full text-lg hover:bg-blue-200 transition">
        يلا نجرب 😎
      </button>
    </section>
  );
}