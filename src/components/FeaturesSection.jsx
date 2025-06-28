import React from "react";
import { FaClipboardList, FaUserCog, FaChartLine, FaWarehouse, FaHeadset, FaMobileAlt } from "react-icons/fa";

export default function FeaturesSection() {
  return (
    <section className="bg-white py-16 px-4 text-center">
      <h2 className="text-3xl font-bold text-gray-800 mb-12">ميزات Restoji</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {/* ميزة 1 */}
        <div className="bg-gray-50 rounded-xl p-6 shadow hover:shadow-md transition">
          <FaClipboardList className="text-4xl text-indigo-600 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-gray-800 mb-2">تنظيم الطلبات بسهولة</h3>
          <p className="text-gray-600 text-sm">
            كمّل كل الطلبات من مكان واحد، بدون تشويش أو تأخير، بكل سلاسة.
          </p>
        </div>

        {/* ميزة 2 */}
        <div className="bg-gray-50 rounded-xl p-6 shadow hover:shadow-md transition">
          <FaUserCog className="text-4xl text-indigo-600 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-gray-800 mb-2">إدارة الموظفين بذكاء</h3>
          <p className="text-gray-600 text-sm">
            جدول الشيفات، سجل الحضور والانصراف، وتحكم كامل في فرقك التشغيلية.
          </p>
        </div>

        {/* ميزة 3 */}
        <div className="bg-gray-50 rounded-xl p-6 shadow hover:shadow-md transition">
          <FaChartLine className="text-4xl text-indigo-600 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-gray-800 mb-2">تقارير تساعدك تتطور</h3>
          <p className="text-gray-600 text-sm">
            اعرف أداء مطعمك لحظة بلحظة، واتخذ قرارات مبنية على بيانات حقيقية.
          </p>
        </div>

        {/* ميزة 4 */}
        <div className="bg-gray-50 rounded-xl p-6 shadow hover:shadow-md transition">
          <FaWarehouse className="text-4xl text-indigo-600 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-gray-800 mb-2">إدارة المخزون بدقة</h3>
          <p className="text-gray-600 text-sm">
            راقب الكميات، التنبيهات، والتوريد بسهولة وقلّل الهدر والتكلفة.
          </p>
        </div>

        {/* ميزة 5 */}
        <div className="bg-gray-50 rounded-xl p-6 shadow hover:shadow-md transition">
          <FaHeadset className="text-4xl text-indigo-600 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-gray-800 mb-2">دعم فني سريع</h3>
          <p className="text-gray-600 text-sm">
            فريق دعم جاهز يساعدك في أي وقت لو احتجت أي مساعدة أو استفسار.
          </p>
        </div>

        {/* ميزة 6 */}
        <div className="bg-gray-50 rounded-xl p-6 shadow hover:shadow-md transition">
          <FaMobileAlt className="text-4xl text-indigo-600 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-gray-800 mb-2">واجهة متجاوبة</h3>
          <p className="text-gray-600 text-sm">
            اشتغل من موبايلك أو اللابتوب، بتجربة سلسة على كل الأجهزة.
          </p>
        </div>
      </div>
    </section>
  );
}