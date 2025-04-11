"use client";
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { useRouter } from "next/navigation";

export default function CheckoutPage() {
  const router = useRouter();

  const handlePlaceOrder = () => {
    // مؤقتًا - بعدين هنعمل توصيل بالباك اند
    router.push("/thank-you");
  };

  return (
    <div className="max-w-6xl mx-auto p-4 space-y-8">
      <h1 className="text-3xl font-bold mb-6">إتمام الطلب</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* بيانات التوصيل */}
        <div className="md:col-span-2 space-y-6">
          <Card>
            <CardContent className="space-y-4 p-6">
              <h2 className="text-xl font-semibold">معلومات التوصيل</h2>
              <Input placeholder="الاسم الكامل" />
              <Input placeholder="رقم الهاتف" />
              <Input placeholder="العنوان بالتفصيل" />
              <Input placeholder="المدينة" />
              <Input placeholder="الرمز البريدي (إن وجد)" />
            </CardContent>
          </Card>

          {/* طرق الدفع */}
          <Card>
            <CardContent className="space-y-4 p-6">
              <h2 className="text-xl font-semibold">طريقة الدفع</h2>
              <div className="space-y-2">
                <label className="flex items-center space-x-2">
                  <input type="radio" name="payment" defaultChecked />
                  <span>الدفع عند الاستلام</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input type="radio" name="payment" />
                  <span>بطاقة ائتمان / خصم (قريباً)</span>
                </label>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* ملخص الطلب */}
        <div>
          <Card>
            <CardContent className="space-y-4 p-6">
              <h2 className="text-xl font-semibold">ملخص الطلب</h2>

              <div className="flex justify-between">
                <span>المجموع الفرعي:</span>
                <span>EGP 1500</span>
              </div>

              <div className="flex justify-between">
                <span>الشحن التقديري:</span>
                <span>EGP 50</span>
              </div>

              <Separator />

              <div className="flex justify-between font-bold text-lg">
                <span>الإجمالي:</span>
                <span>EGP 1550</span>
              </div>

              <Button className="w-full" onClick={handlePlaceOrder}>
                تأكيد الطلب
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
