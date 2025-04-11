"use client";

import Image from "next/image";
import Link from "next/link";


interface ProductCardProps {product : {
  id: string;
  name: string;
  price: number;
  oldPrice?: number;
  image: string;
  mainCategory: string; // مثال: "فستان", "جيبة"
  rarity: string; // مثال: "Luxe", "Rare"
}}

 const ProductCard: React.FC<ProductCardProps> = ({
  product
}) => {
  const {  id,
    name,
    price,
    oldPrice,
    image,
    mainCategory,
    rarity,} = product
  const hasDiscount = oldPrice && oldPrice > price;

  return (
    <div className="group relative border rounded-2xl p-4 shadow-sm hover:shadow-lg transition-all duration-300 bg-white">
      <Link href={`/product/${id}`}>
        <div className="relative w-full aspect-square overflow-hidden rounded-xl">
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />

          {/* تصنيف الندرة */}
          <div className="absolute top-3 left-3 bg-black/70 text-white text-xs px-2 py-1 rounded">
            {rarity}
          </div>

          {/* لو في خصم */}
          {hasDiscount && (
            <div className="absolute top-3 right-3 bg-red-600 text-white text-xs px-2 py-1 rounded">
              خصم
            </div>
          )}
        </div>

        <div className="mt-4 space-y-1">
          <h3 className="text-lg font-semibold text-gray-900">{name}</h3>

          <p className="text-sm text-gray-500">{mainCategory}</p>

          <div className="flex items-center gap-2 mt-1">
            {hasDiscount && (
              <span className="text-sm text-gray-400 line-through">
                {oldPrice} EGP
              </span>
            )}
            <span className="text-base text-gray-900 font-medium">
              {price} EGP
            </span>
          </div>
        </div>
      </Link>
    </div>
  );
};export default ProductCard;