"use client";
import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <div className="bg-neutral-50 text-neutral-900">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center text-center overflow-hidden">
        <Image
          src="/Heroimg.png"
          alt="Hiyam Edition Hero"
          fill
          className="object-cover object-center opacity-80"
        />
        <div className="relative z-10">
          <h1 className="text-5xl font-bold text-neutral-900 mb-4">هيام إيدشن — حيث يلتقي الشغف بالتفرد</h1>
          <Button size="lg" className="bg-red-600 text-white hover:bg-red-700">استكشف التشكيلة</Button>
        </div>
      </section>

      {/* Our Story */}
      <section className="max-w-5xl mx-auto py-24 px-4 text-center">
        <h2 className="text-4xl font-bold mb-6">قصتنا</h2>
        <p className="text-lg leading-8 text-neutral-700">
          بدأنا بحلم — لنمنحك أكثر من مجرد ملابس، بل تجربة تعكس شخصيتك وتعزز ثقتك. كل قطعة من هيام إيدشن تحمل بين طياتها قصة من التفرد والشغف بالتفاصيل.
        </p>
      </section>

      {/* Why Hiyam Edition */}
      <section className="bg-white py-24 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-12 text-center">
          {[
            { icon: "/Heroimg.png", title: "جودة لا تُضاهى" },
            { icon: "/Heroimg.png", title: "تصاميم محدودة الإصدار" },
            { icon: "/Heroimg.png", title: "تجربة شخصية مع Fit You" },
            { icon: "/Heroimg.png", title: "فخامة التفاصيل" },
          ].map((feature, index) => (
            <motion.div key={index} whileHover={{ scale: 1.05 }}>
              <Image src={feature.icon} alt={feature.title} width={64} height={64} className="mx-auto mb-4" />
              <h3 className="text-xl font-semibold">{feature.title}</h3>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Our Craftsmanship */}
      <section className="max-w-5xl mx-auto py-24 px-4 text-center">
        <h2 className="text-4xl font-bold mb-6">كيف نصنع كل قطعة</h2>
        <p className="text-lg leading-8 text-neutral-700 mb-10">
          من اختيار الأقمشة الفاخرة إلى أدق تفاصيل التصميم، نحن نضمن لك منتجاً يروي قصة إبداع وجودة لا مثيل لها.
        </p>
        <Image src="/Heroimg.png" alt="Craftsmanship" width={1000} height={600} className="rounded-2xl mx-auto shadow-lg" />
      </section>

      {/* Our Values */}
      <section className="bg-neutral-100 py-24 px-4 text-center">
        <h2 className="text-4xl font-bold mb-6">قيمنا</h2>
        <p className="text-lg leading-8 text-neutral-700 max-w-3xl mx-auto">
          نحن نؤمن أن الفخامة ليست مجرد مظهر، بل إحساس نابع من الاهتمام بالتفاصيل، جودة الخامات، واحترام رغبات عملائنا.
        </p>
      </section>

      {/* CTA Final */}
      <section className="text-center py-24 px-4">
        <h2 className="text-4xl font-bold mb-6">جاهز لاكتشاف التميز؟</h2>
        <Button size="lg" className="bg-red-600 text-white hover:bg-red-700">اكتشف التشكيلة الآن</Button>
      </section>
    </div>
  );
}
