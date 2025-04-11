import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function OrdersPage() {
  const orders = [
    {
      id: "ORD12345",
      customer: "مريم علي",
      total: "4,500 EGP",
      status: "قيد التنفيذ",
      date: "10 أبريل 2025",
    },
    {
      id: "ORD12346",
      customer: "أحمد خالد",
      total: "2,200 EGP",
      status: "مكتمل",
      date: "9 أبريل 2025",
    },
    {
      id: "ORD12347",
      customer: "سارة محمد",
      total: "3,750 EGP",
      status: "ملغي",
      date: "8 أبريل 2025",
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "قيد التنفيذ":
        return "bg-yellow-200 text-yellow-800";
      case "مكتمل":
        return "bg-green-200 text-green-800";
      case "ملغي":
        return "bg-red-200 text-red-800";
      default:
        return "bg-gray-200 text-gray-800";
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">إدارة الطلبات</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {orders.map((order) => (
          <Card key={order.id} className="shadow-sm hover:shadow-lg transition">
            <CardContent className="p-4 space-y-3">
              <div className="flex justify-between items-center">
                <h2 className="font-semibold">{order.id}</h2>
                <Badge className={getStatusColor(order.status)}>{order.status}</Badge>
              </div>
              <div>
                <p className="text-gray-600">العميل: {order.customer}</p>
                <p className="text-gray-600">المجموع: {order.total}</p>
                <p className="text-gray-500 text-sm">التاريخ: {order.date}</p>
              </div>
              <div className="flex justify-end space-x-2">
                <Button variant="outline" size="sm">عرض التفاصيل</Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
