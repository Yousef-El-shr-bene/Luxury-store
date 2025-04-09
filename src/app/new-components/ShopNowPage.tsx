import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import ProductCard from "./ProductCard";

const products = [
  {
    id: "product-1",
    name: "Luxe Blazer",
    image: "/image123.png",
    price: 4500,
    status: "Limited Edition",
    category: "فساتين",
    originalPrice: 0,
    discount: false,
  },
  {
    id: "product-2",
    name: "Silk Dress",
    image: "/image123.png",
    price: 5200,
    status: "Everyday Luxury",
    category: "فساتين",
    originalPrice: 6000,
    discount: true,
  },
  {
    id: "product-3",
    name: "Essential Shirt",
    image: "/image123.png",
    price: 1200,
    status: "Limited Edition",
    category: "فساتين",
    originalPrice: 0,
    discount: false,
  },
];

const statuses = ["All", "Limited Edition", "Rare Drop", "Everyday Luxury"];

export default function ShopNowPage() {
  const [selectedStatus, setSelectedStatus] = useState("All");
  const [priceRange, setPriceRange] = useState(6000);

  const filteredProducts = products.filter((product) => {
    const matchesStatus = selectedStatus === "All" || product.status === selectedStatus;
    const matchesPrice = product.price <= priceRange;
    return matchesStatus && matchesPrice;
  });

  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-900">
      {/* Offer Bar */}
      <div className="w-full bg-rose-500 text-white text-center py-2 text-sm">
        شحن مجاني لجميع الطلبات فوق 3000 جنيه - لفترة محدودة!
      </div>

      {/* Hero Section */}
      <section className="relative flex flex-col items-center text-center py-20 px-6">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-semibold tracking-tight text-neutral-900"
        >
          اكتشف تشكيلتنا الفاخرة
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mt-4 text-lg text-neutral-600 max-w-xl"
        >
          قطع نادرة، تفاصيل دقيقة، وأناقة لا تُضاهى — صممت خصيصًا لك.
        </motion.p>
      </section>

      {/* Filters Section */}
      <section className="px-6 max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 pb-8">
        {/* Status Filter */}
        <div className="flex gap-2 flex-wrap">
          {statuses.map((status) => (
            <Button
              key={status}
              variant={selectedStatus === status ? "default" : "outline"}
              className="rounded-full text-sm"
              onClick={() => setSelectedStatus(status)}
            >
              {status}
            </Button>
          ))}
        </div>

        {/* Price Filter */}
        <div className="flex items-center gap-3">
          <label htmlFor="priceRange" className="text-sm text-neutral-700">
            الحد الأقصى للسعر: {priceRange} جنيه
          </label>
          <input
            type="range"
            id="priceRange"
            min="1000"
            max="6000"
            step="100"
            value={priceRange}
            onChange={(e) => setPriceRange(Number(e.target.value))}
            className="w-40 accent-rose-500"
          />
        </div>
      </section>

      {/* Product Grid */}
      <section className="px-6 pb-12 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product, index) => (
              <ProductCard
              key={index}
              product={{...product,badge : product.status,discount: 0}}
            />
          ))
        ) : (
          <p className="text-center col-span-full text-neutral-600">لا توجد منتجات مطابقة للفلتر الحالي.</p>
        )}
      </section>

      {/* Call to Action */}
      <section className="p-10 text-center flex justify-center items-center">
        <Button className="px-8 py-4 text-lg bg-rose-500 text-white rounded-full shadow-md hover:bg-rose-600 transition flex items-center gap-2">
          تسوق الآن <ArrowRight className="w-5 h-5" />
        </Button>
      </section>
    </div>
  );
}
