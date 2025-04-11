import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Plus } from "lucide-react";

const DashboardCategoriesPage = () => {
  // Placeholder data - we'll later fetch this from backend
  const categories = [
    { id: 1, name: "فستان", tier: "Luxe", discount: "10%" },
    { id: 2, name: "جيبه", tier: "Rare", discount: "" },
  ];

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-semibold">التصنيفات</h2>
        <Button asChild>
          <Link href="/dashboard/categories/create">
            <Plus className="w-4 h-4 mr-2" /> إضافة تصنيف جديد
          </Link>
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((category) => (
          <Card key={category.id}>
            <CardHeader>
              <CardTitle>{category.name}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <p className="text-muted-foreground">الفئة: {category.tier}</p>
              {category.discount && (
                <p className="text-green-600">خصم: {category.discount}</p>
              )}
              <Button variant="outline" size="sm" asChild>
                <Link href={`/dashboard/categories/${category.id}`}>عرض التفاصيل</Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default DashboardCategoriesPage;
