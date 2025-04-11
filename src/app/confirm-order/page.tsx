// app/order-confirmation/page.tsx

"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

export default function OrderConfirmationPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-neutral-50 px-4 py-12 text-center">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="mb-6 text-green-500"
      >
        <CheckCircle2 className="w-20 h-20" />
      </motion.div>

      <h1 className="text-3xl font-bold text-neutral-900 mb-2">
        شكرًا لك على طلبك!
      </h1>
      <p className="text-neutral-600 mb-4">
        تم تأكيد الطلب بنجاح. رقم طلبك: <span className="font-medium">#123456</span>
      </p>

      <div className="bg-white shadow-lg rounded-2xl p-6 w-full max-w-md mb-6">
        <h2 className="text-lg font-semibold mb-4 text-neutral-900">ملخص الطلب</h2>
        <ul className="text-neutral-700 text-sm space-y-2">
          <li>• المنتج: فستان سهرة فاخر</li>
          <li>• الإجمالي: 1500 جنيه</li>
          <li>• طريقة الدفع: بطاقة ائتمان</li>
          <li>• الشحن إلى: القاهرة، مصر</li>
        </ul>
      </div>

      <div className="flex gap-4">
        <Link href="/shop-now">
          <Button size="lg" className="rounded-2xl px-6">
            متابعة التسوق
          </Button>
        </Link>
        <Link href="/account/orders">
          <Button variant="outline" size="lg" className="rounded-2xl px-6">
            عرض تفاصيل الطلب
          </Button>
        </Link>
      </div>
    </div>
  );
}
