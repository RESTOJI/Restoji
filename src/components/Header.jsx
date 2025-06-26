import React from 'react';

export default function Header() {
  return (
    <header className="bg-white shadow-md py-4 px-6">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        {/* الشعار */}
        <div className="text-2xl font-bold text-blue-700">Restoji</div>

        {/* روابط التنقل */}
        <nav>
          <ul className="flex space-x-6 text-gray-800 font-medium text-lg rtl:space-x-reverse">
            <li><a href="#" className="hover:text-blue-700">الرئيسية</a></li>
            <li><a href="#" className="hover:text-blue-700">المميزات</a></li>
            <li><a href="#" className="hover:text-blue-700">التسعير</a></li>
            <li><a href="#" className="hover:text-blue-700">تجربة مجانية</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}