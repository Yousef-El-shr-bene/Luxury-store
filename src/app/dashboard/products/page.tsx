import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Plus, Edit, Trash2 } from "lucide-react";

export default function DashboardProductsPage() {
  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">إدارة المنتجات</h1>
        <Link href="/dashboard/products/new">
          <Button className="bg-red-600 hover:bg-red-700 text-white">
            <Plus className="w-4 h-4 mr-2" /> إضافة منتج جديد
          </Button>
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* هنا سيتم الربط لاحقًا مع بيانات المنتجات */}
        {[...Array(6)].map((_, idx) => (
          <Card key={idx} className="rounded-2xl shadow-md hover:shadow-lg transition">
            <CardHeader>
              <CardTitle className="text-lg">اسم المنتج</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="bg-gray-200 h-40 rounded-xl" />
              <p className="text-sm text-gray-500">الوصف المختصر للمنتج...</p>
              <div className="flex items-center justify-between">
                <span className="font-semibold text-red-600">999 EGP</span>
                <div className="flex space-x-2">
                  <Button size="icon" variant="outline">
                    <Edit className="w-4 h-4" />
                  </Button>
                  <Button size="icon" variant="outline" className="hover:bg-red-100">
                    <Trash2 className="w-4 h-4 text-red-500" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
