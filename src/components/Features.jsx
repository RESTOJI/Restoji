import React from 'react';
import { FaClipboardList, FaUsers, FaChartLine } from 'react-icons/fa';

export default function Features() {
  const features = [
    {
      icon: <FaClipboardList className="text-3xl text-yellow-400" />,
      title: 'تنظيم الطلبات بسهولة',
      desc: 'تحكّم كامل في الطلبات من مكان واحد، بدون فوضى أو تأخير.',
    },
    {
      icon: <FaUsers className="text-3xl text-yellow-400" />,
      title: 'إدارة الموظفين بذكاء',
      desc: 'شيفتات، صلاحيات، حضور وانصراف — كل حاجة مترتبة.',
    },
    {
      icon: <FaChartLine className="text-3xl text-yellow-400" />,
      title: 'تقارير ذكية توفر لك الوقت',
      desc: 'اعرف أداء مطعمك لحظة بلحظة، واتخذ قراراتك بثقة.',
    },
  ];

  return (
    <section className="py-16 bg-gray-100 text-gray-800">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-10">مميزات Restoji</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feat, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
              <div className="mb-4 flex justify-center">{feat.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feat.title}</h3>
              <p className="text-gray-600">{feat.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}