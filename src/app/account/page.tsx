"use client";
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { LogOutIcon, MapPin, PackageCheck, User } from 'lucide-react';

const AccountPage = () => {
  return (
    <div className="container mx-auto py-10 px-4 pt-32 pb-20">
      <h1 className="text-3xl font-bold mb-6">مرحباً بك في حسابك 🖤</h1>

      <Tabs defaultValue="dashboard" className="w-full">
        <TabsList className="flex justify-start space-x-4 mb-8 bg-neutral-100 rounded-xl p-2">
          <TabsTrigger value="dashboard" className="flex items-center space-x-2">
            <User className="w-4 h-4" /> <span>نظرة عامة</span>
          </TabsTrigger>
          <TabsTrigger value="orders" className="flex items-center space-x-2">
            <PackageCheck className="w-4 h-4" /> <span>طلباتي</span>
          </TabsTrigger>
          <TabsTrigger value="addresses" className="flex items-center space-x-2">
            <MapPin className="w-4 h-4" /> <span>العناوين</span>
          </TabsTrigger>
        </TabsList>

        {/* Dashboard */}
        <TabsContent value="dashboard">
          <Card>
            <CardContent className="p-6 space-y-4">
              <h2 className="text-xl font-semibold">ملخص الحساب</h2>
              <p>أهلاً بك في عالم هيام ❤️‍🔥 تابع آخر الطلبات وإدارة حسابك بكل سهولة.</p>
              <Button variant="outline">تتبع آخر طلب</Button>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Orders */}
        <TabsContent value="orders">
          <Card>
            <CardContent className="p-6">
              <h2 className="text-xl font-semibold mb-4">طلباتي</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-sm text-left rtl:text-right">
                  <thead className="bg-neutral-100 text-neutral-700">
                    <tr>
                      <th className="px-4 py-2">رقم الطلب</th>
                      <th className="px-4 py-2">التاريخ</th>
                      <th className="px-4 py-2">الإجمالي</th>
                      <th className="px-4 py-2">الحالة</th>
                      <th className="px-4 py-2">الإجراءات</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="px-4 py-2">#1234</td>
                      <td className="px-4 py-2">2025-04-09</td>
                      <td className="px-4 py-2">1200 EGP</td>
                      <td className="px-4 py-2">قيد التنفيذ</td>
                      <td className="px-4 py-2">
                        <Button size="sm" variant="outline">عرض التفاصيل</Button>
                      </td>
                    </tr>
                    {/* Repeat as needed */}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Addresses */}
        <TabsContent value="addresses">
          <Card>
            <CardContent className="p-6 space-y-4">
              <h2 className="text-xl font-semibold">عناوين الشحن</h2>
              <div className="bg-neutral-50 p-4 rounded-xl">
                <p>القاهرة، مصر الجديدة، شارع 123</p>
                <div className="mt-2 space-x-2 rtl:space-x-reverse">
                  <Button size="sm" variant="outline">تعديل</Button>
                  <Button size="sm" variant="outline">حذف</Button>
                </div>
              </div>
              <Button>إضافة عنوان جديد</Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <div className="mt-8 flex justify-end">
        <Button variant="destructive" className="flex items-center space-x-2">
          <LogOutIcon className="w-4 h-4" /> <span>تسجيل الخروج</span>
        </Button>
      </div>
    </div>
  );
};

export default AccountPage;
