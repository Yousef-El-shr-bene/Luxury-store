"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import QuantitySelector from "./QuantitySelector";
import ColorSelector from "./ColorSelector";
import ProductCard from "../../new-components/ProductCard";
import Image from "next/image";

const product = {
  name: "Elegant Red Dress",
  price: "$250",
  images: [
    "/image12.png",
    "/image1.png",
    "/image.png",
    "/image123.png",
  ],
  rating: 4.5,
  count: 8,
};

export default function ProductPage() {
  const [selectedImage, setSelectedImage] = useState(product.images[0]);
  const [isAdded, setIsAdded] = useState(false);

  const handleAddToCart = () => {
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 1500);
  };

  return (
    <div className="max-w-7xl mx-auto p-4 grid md:grid-cols-2 gap-8 pt-32 pb-20">
      <div>
        <div className="overflow-hidden rounded-2xl">
          <motion.img
            key={selectedImage}
            src={selectedImage}
            alt="Product Image"
            className="w-full object-cover cursor-zoom-in hover:scale-105 transition-transform duration-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />
        </div>
        <div className="flex mt-4 space-x-2">
          {product.images.map((img) => (
            <Image
              key={img}
              src={img}
              alt="Thumbnail"
              className={`w-20 h-20 object-cover rounded-xl cursor-pointer border-2 ${selectedImage === img ? "border-red-500" : "border-transparent"}`}
              onClick={() => setSelectedImage(img)}
            />
          ))}
        </div>
      </div>

      <div className="space-y-4">
        <h1 className="text-3xl font-bold">{product.name}</h1>
        <div className="flex items-center space-x-2">
          <span className="text-xl text-red-500 font-semibold">{product.price}</span>
          <div className="flex items-center text-yellow-400">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={18} fill={i < Math.floor(product.rating) ? "#facc15" : "none"} stroke="#facc15" />
            ))}
            <span className="ml-2 text-sm text-gray-500">({product.rating})</span>
          </div>
        </div>
        <p className="text-gray-600">Available Quantity: {product.count}</p>

        <Button onClick={handleAddToCart} className="relative overflow-hidden bg-red-500 hover:bg-red-600 text-white">
          {isAdded && (
            <motion.span
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
              className="absolute inset-0 flex items-center justify-center bg-green-500 text-white text-sm"
            >
              Added!
            </motion.span>
          )}
          <span className={`${isAdded ? "opacity-0" : "opacity-100"} transition-opacity`}>Add to Cart</span>
        </Button>
          <QuantitySelector onQuantityChange={()=>{}} /> 
          <ColorSelector/>
        <div className="mt-8">
          <h2 className="text-xl font-semibold mb-4">You may also like</h2>
          <div className="grid grid-cols-2 gap-4">
            {[1, 2, 3, 4].map((item) => (
              <ProductCard
              key={item}
              product={{
                id: "product-1",
                name: "فستان سهرة فاخر",
                category: "فساتين",
                image: "/image123.png",
                price: 3200,
                originalPrice: 4000,
                discount: 0,
                badge: "Limited",
              }}
            />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
