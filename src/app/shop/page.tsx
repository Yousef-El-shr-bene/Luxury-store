"use client"
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";
import ProductCard from "../new-components/ProductCard";

const products = [
  { id: 1, name: "Rose Gold Blazer", category: "Limited Edition", price: 250, image: "/image123.png" },
  { id: 2, name: "Elegant White Dress", category: "Everyday Luxury", price: 180, image: "/image123.png" },
  { id: 3, name: "Rare Red Gown", category: "Rare Drop", price: 500, image: "/image123.png" },
  { id: 4, name: "Rose Gold Blazer2", category: "Limited Edition", price: 150, image: "/image123.png" },
  { id: 5, name: "Elegant White Dress2", category: "Everyday Luxury", price: 280, image: "/image123.png" },
  { id: 6, name: "Rare Red Gown2", category: "Rare Drop", price: 300, image: "/image123.png" },
];

export default function ShopPage() {
  const [priceRange, setPriceRange] = useState([0, 600]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");

  const filteredProducts = products
    .filter(
      (product) =>
        (selectedCategory === "All" || product.category === selectedCategory) &&
        product.price >= priceRange[0] &&
        product.price <= priceRange[1] &&
        product.name.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .sort((a, b) => (sortOrder === "asc" ? a.price - b.price : b.price - a.price));

  return (
    <div className="p-6 space-y-8">
      {/* Promo Banner */}
      <div className="bg-rose-100 text-rose-800 text-center py-2 rounded-xl text-sm">
        Complimentary shipping on orders over $300
      </div>

      {/* Filters Section */}
      <div className="flex flex-wrap gap-4 items-center">
        {/* Category Filter */}
        <div>
          <label className="block text-sm mb-1">Category:</label>
          <select
            className="border rounded p-2"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            <option value="All">All</option>
            <option value="Limited Edition">Limited Edition</option>
            <option value="Rare Drop">Rare Drop</option>
            <option value="Everyday Luxury">Everyday Luxury</option>
          </select>
        </div>

        {/* Price Filter */}
        <div className="w-48">
          <label className="block text-sm mb-1">Price Range:</label>
          <Slider
            min={0}
            max={600}
            step={10}
            value={priceRange}
            onValueChange={setPriceRange}
          />
          <div className="text-xs text-gray-600 mt-1">
            ${priceRange[0]} - ${priceRange[1]}
          </div>
        </div>

        {/* Sort Order */}
        <div>
          <label className="block text-sm mb-1">Sort by Price:</label>
          <select
            className="border rounded p-2"
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
          >
            <option value="asc">Low to High</option>
            <option value="desc">High to Low</option>
          </select>
        </div>

        {/* Search Bar */}
        <div className="flex-1">
          <label className="block text-sm mb-1">Search:</label>
          <Input
            placeholder="Search products..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filteredProducts.map((product,index) => (
                        <ProductCard
                        key={index}
                        product={{...product,badge : product.category}}
                      />
        ))}
      </div>
    </div>
  );
}
