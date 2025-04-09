import React from "react";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const steps = [
  {
    title: "اختيار المقاس المخصص",
    description: "قم باختيار خيار Fit You عند الطلب لأقصى درجات الدقة في المقاس.",
  },
  {
    title: "استلام قطعة القماش",
    description: "سوف يصلك Fabric Square مع طلبك لتحديد المقاس المثالي.",
  },
  {
    title: "إرسال القياسات",
    description: "قم بقياس التفاصيل وإرسالها لنا عبر حسابك الشخصي.",
  },
  {
    title: "تصميم خاص بك",
    description: "نقوم بتفصيل القطعة خصيصًا لك لضمان الراحة والأناقة المطلقة.",
  },
];

export default function FitYouWork() {
  return (
    <section className="w-full py-16 bg-neutral-50 text-neutral-900">
      <div className="container mx-auto text-center px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold mb-4 text-rose-600"
        >
          كيف يعمل Fit You
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-lg text-neutral-600 mb-12"
        >
          تجربة تفصيلية لتناسبك تمامًا بكل تفاصيلها.
        </motion.p>

        <div className="grid md:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white rounded-2xl shadow-sm p-6 border border-rose-100 hover:shadow-md transition-shadow"
            >
              <CheckCircle className="text-rose-500 w-8 h-8 mb-4 mx-auto" />
              <h3 className="text-xl font-semibold mb-2 text-neutral-800">
                {step.title}
              </h3>
              <p className="text-neutral-600 text-sm">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
