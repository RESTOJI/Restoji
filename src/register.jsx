import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';

export default function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    // حفظ وهمي للبيانات (في localStorage)
    localStorage.setItem('user', JSON.stringify({ email }));
    navigate('/dashboard'); // بعد التسجيل، يروح للوحة التحكم
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md text-right">
        <h2 className="text-2xl font-bold text-purple-600 mb-6 text-center">إنشاء حساب جديد</h2>
        <form onSubmit={handleRegister} className="space-y-4">
          <div>
            <label className="block mb-1 text-gray-700">البريد الإلكتروني</label>
            <input
              type="email"
              className="w-full border border-gray-300 rounded-lg px-4 py-2"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              dir="ltr"
            />
          </div>
          <div>
            <label className="block mb-1 text-gray-700">كلمة المرور</label>
            <input
              type="password"
              className="w-full border border-gray-300 rounded-lg px-4 py-2"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              dir="ltr"
            />
          </div>
          <Button type="submit" className="w-full bg-purple-600 hover:bg-purple-700 text-white py-2 rounded-lg">
            تسجيل
          </Button>
        </form>
        <p className="mt-4 text-center text-sm text-gray-500">
          لديك حساب بالفعل؟ <a href="/login" className="text-purple-600 hover:underline">سجّل دخول</a>
        </p>
      </div>
    </div>
  );
}