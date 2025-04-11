"use client";

import React from "react";

export default function SizeGuide() {
  return (
    <div className="max-w-4xl mx-auto p-8 bg-white rounded-2xl shadow-lg my-16 ">
      <h1 className="text-3xl font-bold text-center text-red-600 mb-6">
        دليل المقاسات - Hiyam Edition
      </h1>

      <p className="text-center text-gray-600 mb-8">
        تم تصميم هذا الدليل لمساعدتك في اختيار المقاس المثالي لكِ بدقة، لتجربة مريحة وفاخرة.
      </p>

      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-200 text-center">
          <thead className="bg-red-50 text-red-600">
            <tr>
              <th className="py-3 px-4 border">المقاس</th>
              <th className="py-3 px-4 border">الصدر (cm)</th>
              <th className="py-3 px-4 border">الخصر (cm)</th>
              <th className="py-3 px-4 border">الأرداف (cm)</th>
            </tr>
          </thead>
          <tbody className="text-gray-700">
            <tr className="hover:bg-red-50 transition">
              <td className="py-3 px-4 border">XS</td>
              <td className="py-3 px-4 border">78 - 82</td>
              <td className="py-3 px-4 border">60 - 64</td>
              <td className="py-3 px-4 border">86 - 90</td>
            </tr>
            <tr className="hover:bg-red-50 transition">
              <td className="py-3 px-4 border">S</td>
              <td className="py-3 px-4 border">83 - 87</td>
              <td className="py-3 px-4 border">65 - 69</td>
              <td className="py-3 px-4 border">91 - 95</td>
            </tr>
            <tr className="hover:bg-red-50 transition">
              <td className="py-3 px-4 border">M</td>
              <td className="py-3 px-4 border">88 - 92</td>
              <td className="py-3 px-4 border">70 - 74</td>
              <td className="py-3 px-4 border">96 - 100</td>
            </tr>
            <tr className="hover:bg-red-50 transition">
              <td className="py-3 px-4 border">L</td>
              <td className="py-3 px-4 border">93 - 97</td>
              <td className="py-3 px-4 border">75 - 79</td>
              <td className="py-3 px-4 border">101 - 105</td>
            </tr>
            <tr className="hover:bg-red-50 transition">
              <td className="py-3 px-4 border">XL</td>
              <td className="py-3 px-4 border">98 - 102</td>
              <td className="py-3 px-4 border">80 - 85</td>
              <td className="py-3 px-4 border">106 - 110</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="mt-8 text-center text-sm text-gray-500">
        <p>ملحوظة: إذا كنتِ بين مقاسين، ننصح باختيار المقاس الأكبر لتوفير راحة إضافية.</p>
        <p className="mt-2">لأي استفسار، لا تترددي في التواصل مع فريق الدعم لدينا.</p>
      </div>
    </div>
  );
}
