import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const collections = [
  {
    title: "Luxe Edition",
    description: "قطع نادرة بتصميم فاخر وجودة استثنائية.",
    image: "/image5.jpg",
  },
  {
    title: "Rare Drops",
    description: "تصميمات محدودة الإصدار لإطلالة لا مثيل لها.",
    image: "/image4.jpg",
  },
  {
    title: "Everyday Elegance",
    description: "أناقة يومية مع لمسة من الفخامة.",
    image: "/image6.jpg",
  },
];

export default function CollectionHighlight() {
  return (
    <section className="py-20 bg-neutral-50">
      <div className="container mx-auto text-center mb-12">
        <motion.h2
          className="text-4xl font-bold text-gray-900 mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Collection Highlight
        </motion.h2>
        <p className="text-gray-600">اكتشف أبرز مجموعاتنا المختارة بعناية لك.</p>
      </div>
      <div className="grid md:grid-cols-3 gap-8 container mx-auto">
        {collections.map((item, index) => (
          <motion.div
            key={index}
            className="rounded-2xl overflow-hidden shadow-lg group relative"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: index * 0.2 }}
          >
            <Image
              src={item.image}
              alt={item.title}
              className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="p-6 bg-white">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
              <p className="text-gray-600 mb-4">{item.description}</p>
              <Button className="bg-red-600 text-white hover:bg-red-700">تسوق الآن</Button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
