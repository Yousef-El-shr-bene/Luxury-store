"use client";
import React from 'react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { Separator } from '@/components/ui/separator';
import Image from 'next/image';
export default function FitYouPage() {
  return (
    <div className="bg-neutral-50 text-neutral-900">
      {/* Hero Section */}
      <section className="text-center py-20 px-4">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold mb-4 text-red-600"
        >
          صُمم ليناسبك بدقة
        </motion.h1>
        <p className="text-lg max-w-xl mx-auto text-neutral-700">
          مع نظام Fit You، المقاس يصبح تجربة شخصية — اكتشف كيف تحصل على القطعة التي تحتضن تفاصيلك.
        </p>
        <Button className="mt-6 bg-red-600 hover:bg-red-700 text-white px-8 py-4 text-lg rounded-2xl">
          احصل على Fit You مع طلبيتك القادمة
        </Button>
      </section>

      <Separator className="my-12" />

      {/* How it works */}
      <section className="px-4 py-16 max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-12 text-neutral-800">كيف يعمل Fit You؟</h2>
        <div className="grid md:grid-cols-3 gap-10 text-center">
          <motion.div whileHover={{ scale: 1.05 }} className="bg-white shadow-xl rounded-2xl p-8">
            <Image src="/fit-you/step1.png" alt="Step 1" className="mx-auto mb-4 w-24 h-24 object-contain" />
            <h3 className="font-semibold text-xl mb-2 text-red-600">استلم قطعة القماش الخاصة بك</h3>
            <p className="text-neutral-600">تصلك قطعة Fabric Square مع طلبك لتجربة القياس الشخصي.</p>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} className="bg-white shadow-xl rounded-2xl p-8">
            <Image src="/fit-you/step2.png" alt="Step 2" className="mx-auto mb-4 w-24 h-24 object-contain" />
            <h3 className="font-semibold text-xl mb-2 text-red-600">استخدم دليل الفيديو</h3>
            <p className="text-neutral-600">اتبع خطوات الدليل لقياس نفسك بكل سهولة ودقة.</p>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} className="bg-white shadow-xl rounded-2xl p-8">
            <Image src="/fit-you/step3.png" alt="Step 3" className="mx-auto mb-4 object-contain" />
            <h3 className="font-semibold text-xl mb-2 text-red-600">شارك القياسات معنا</h3>
            <p className="text-neutral-600">أرسل لنا القياسات لتحصل على تصميم يفصَّل خصيصًا لك.</p>
          </motion.div>
        </div>
      </section>

      <Separator className="my-12" />

      {/* Call to action again */}
      <section className="text-center py-20 px-4 bg-red-50">
        <h2 className="text-3xl font-semibold text-red-600 mb-4">جاهز لتجربة Fit You؟</h2>
        <p className="text-neutral-700 mb-6 max-w-xl mx-auto">
          احصل على الخدمة مع كل طلب Premium أو Luxe وتمتع بتجربة تفصيل فريدة.
        </p>
        <Button className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 text-lg rounded-2xl">
          اطلب الآن
        </Button>
      </section>
    </div>
  );
}
