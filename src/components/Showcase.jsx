import React from 'react';
import restaurantImg from '../assets/restaurant.jpg';

export default function Showcase() {
  return (
    <section className="py-20 px-6 bg-gray-50 text-gray-900">
      <div className="max-w-6xl mx-auto space-y-16">

        {/* صورة 1: مطعم مع UI Overlay */}
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">واجهة نظامك وسط المطعم</h2>
            <p className="text-lg mb-6">
              تقدر تتابع كل التفاصيل مباشرة في بيئة واقعية، وكأنك واقف وسط المطعم.
            </p>
          </div>
          <img
            src={restaurantImg}
            alt="مطعم مع واجهة النظام"
            className="rounded-2xl shadow-lg w-full object-cover"
          />
        </div>

        {/* صورة 2: فاتورة طلب وهمية */}
        <div className="grid md:grid-cols-2 gap-10 items-center md:flex-row-reverse">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">طلب واضح وفاتورة منظمة</h2>
            <p className="text-lg mb-6">
              شكل الفاتورة منسق، فيه كل التفاصيل: الأسعار، الطلبات، الوقت، والخصومات.
            </p>
          </div>
          <img
            src="https://via.placeholder.com/400x500?text=Receipt"
            alt="فاتورة طلب"
            className="rounded-2xl shadow-lg w-full max-w-md mx-auto object-cover"
          />
        </div>

        {/* صورة 3: موبايل يعرض النظام */}
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">تحكم كامل من الموبايل</h2>
            <p className="text-lg mb-6">
              تقدر تتابع وإدارة المطعم من موبايلك بسهولة، من أي مكان.
            </p>
          </div>
          <img
            src="https://via.placeholder.com/300x600?text=Mobile+UI"
            alt="تطبيق مطعم على الموبايل"
            className="rounded-2xl shadow-lg w-full max-w-sm mx-auto object-cover"
          />
        </div>

      </div>
    </section>
  );
}