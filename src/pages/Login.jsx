import React from "react";

export default function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-2xl shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">تسجيل الدخول إلى Restoji</h2>

        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">البريد الإلكتروني أو رقم الهاتف</label>
            <input
              type="text"
              className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="example@email.com"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">كلمة المرور</label>
            <input
              type="password"
              className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="••••••••"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 rounded-xl hover:bg-indigo-700 transition"
          >
            تسجيل الدخول
          </button>
        </form>

        <div className="text-sm text-center text-gray-600 mt-4">
          <a href="#" className="hover:underline text-indigo-600">نسيت كلمة المرور؟</a>
        </div>

        <div className="text-sm text-center text-gray-600 mt-2">
          ليس لديك حساب؟ <a href="#" className="text-indigo-600 hover:underline">أنشئ حساب جديد</a>
        </div>
      </div>
    </div>
  );
}