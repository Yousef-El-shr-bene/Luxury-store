import React from "react";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const DashboardPage = () => {
  return (
    <div className="p-6 space-y-6">
      <h1 className="text-3xl font-bold text-red-600">لوحة التحكم</h1>
      <Separator className="my-4" />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* إدارة المنتجات */}
        <Card className="hover:shadow-xl transition-shadow">
          <CardHeader>
            <CardTitle>إدارة المنتجات</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-gray-500 mb-4">
              أضف أو عدل أو احذف المنتجات من المتجر.
            </p>
            <Link href="/dashboard/products">
              <Button className="w-full">اذهب للمنتجات</Button>
            </Link>
          </CardContent>
        </Card>

        {/* إدارة الطلبات */}
        <Card className="hover:shadow-xl transition-shadow">
          <CardHeader>
            <CardTitle>إدارة الطلبات</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-gray-500 mb-4">
              راقب وتابع الطلبات الجديدة والحالية.
            </p>
            <Link href="/dashboard/orders">
              <Button className="w-full">اذهب للطلبات</Button>
            </Link>
          </CardContent>
        </Card>

        {/* إدارة التصنيفات */}
        <Card className="hover:shadow-xl transition-shadow">
          <CardHeader>
            <CardTitle>إدارة التصنيفات</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-gray-500 mb-4">
              أنشئ أو عدل التصنيفات لمنتجاتك.
            </p>
            <Link href="/dashboard/categories">
              <Button className="w-full">اذهب للتصنيفات</Button>
            </Link>
          </CardContent>
        </Card>

        {/* إدارة العملاء */}
        <Card className="hover:shadow-xl transition-shadow">
          <CardHeader>
            <CardTitle>إدارة العملاء</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-gray-500 mb-4">
              شاهد تفاصيل العملاء وتواصل معهم.
            </p>
            <Link href="/dashboard/customers">
              <Button className="w-full">اذهب للعملاء</Button>
            </Link>
          </CardContent>
        </Card>

        {/* الكوبونات والعروض */}
        <Card className="hover:shadow-xl transition-shadow">
          <CardHeader>
            <CardTitle>الكوبونات والعروض</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-gray-500 mb-4">
              أنشئ كوبونات خصم لإضافة حماس للشراء.
            </p>
            <Link href="/dashboard/discounts">
              <Button className="w-full">اذهب للكوبونات</Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default DashboardPage;
