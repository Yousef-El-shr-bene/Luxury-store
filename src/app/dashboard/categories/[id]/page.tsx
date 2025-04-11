"use client";
import React from "react";
import { useParams } from "next/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function CategoryDetailsPage() {
  const { id } = useParams();

  return (
    <div className="p-6 space-y-6 pt-24">
      <Card>
        <CardHeader>
          <CardTitle>تفاصيل التصنيف</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <label className="block text-sm mb-1">اسم التصنيف</label>
            <Input placeholder="ادخل اسم التصنيف" defaultValue="تصنيف {id}" />
          </div>

          <div>
            <label className="block text-sm mb-1">وصف التصنيف</label>
            <Input placeholder="ادخل وصف التصنيف" />
          </div>

          <div className="flex justify-end space-x-2">
            <Button variant="destructive">حذف التصنيف</Button>
            <Button>حفظ التعديلات</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
