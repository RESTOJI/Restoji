// src/dashboard.jsx
import React, { useEffect, useState } from 'react';

export default function Dashboard() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // جلب بيانات المستخدم من localStorage
    const savedUser = localStorage.getItem('user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 text-center">
      <div className="bg-white p-10 rounded-xl shadow-lg max-w-lg w-full">
        <h1 className="text-3xl font-bold text-purple-600 mb-4">
          مرحبًا {user ? user.email : 'بك'} 👋
        </h1>
        <p className="text-gray-600 text-lg">أنت الآن داخل لوحة التحكم الخاصة بك.</p>
      </div>
    </div>
  );
}