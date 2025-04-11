"use client";

import { useState } from "react";
import  ProductCard from "@/app/new-components/ProductCard";
import { products as productsData } from "./products"; // افترضنا عندك الداتا هنا
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function ProductsPage() {
  const [filters, setFilters] = useState({
    category: "",
    type: "",
    priceRange: [0, 10000],
  });
  const [visibleCount, setVisibleCount] = useState(6);

  const filteredProducts = productsData.filter(product => {
    const matchesCategory = filters.category ? product.category === filters.category : true;
    const matchesType = filters.type ? product.rarity === filters.type : true;
    const matchesPrice = product.price >= filters.priceRange[0] && product.price <= filters.priceRange[1];
    return matchesCategory && matchesType && matchesPrice;
  });

  const visibleProducts = filteredProducts.slice(0, visibleCount);

  const loadMore = () => {
    setVisibleCount(prev => prev + 6);
  };

  const resetFilters = () => {
    setFilters({ category: "", type: "", priceRange: [0, 10000] });
    setVisibleCount(6);
  };

  return (
    <div className="px-6 py-10 space-y-10 max-w-7xl mx-auto pt-32">
      {/* الفلاتر */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Input
          placeholder="فستان / جيبه"
          value={filters.category}
          onChange={e => setFilters({ ...filters, category: e.target.value })}
        />
        <Input
          placeholder="Luxe / Rare"
          value={filters.type}
          onChange={e => setFilters({ ...filters, type: e.target.value })}
        />
        <div>
          <p className="mb-2 text-sm font-medium">نطاق السعر</p>
          <Slider
            min={0}
            max={10000}
            step={50}
            defaultValue={filters.priceRange}
            onValueChange={(value) => setFilters({ ...filters, priceRange: value })}
          />
          <p className="mt-1 text-xs text-muted-foreground">{filters.priceRange[0]} - {filters.priceRange[1]} EGP</p>
        </div>
        <Button onClick={resetFilters} variant="outline">إعادة تعيين</Button>
      </div>

      {/* المنتجات */}
      <motion.div
        layout
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {visibleProducts.map((product: { id: string; catigory?: string; name?: string; price?: number; oldPrice?: number | undefined; image?: string; mainCategory?: string; rarity?: string; }) => (
          <motion.div key={product.id} layout>
            <ProductCard
              product={{
                id: String(product.id),
                name: product.name ?? "",
                price: product.price ?? 0,
                oldPrice: product.oldPrice,
                image: product.image ?? "",
                mainCategory: product.catigory ?? "",
                rarity: product.rarity ?? ""
              }}
            />
          </motion.div>
        ))}
      </motion.div>

      {/* زر التحميل */}
      {visibleCount < filteredProducts.length && (
        <div className="flex justify-center mt-6">
          <Button onClick={loadMore} variant="default" className="px-8 py-3 rounded-full">
            تحميل المزيد
          </Button>
        </div>
      )}
    </div>
  );
}
