import Link from "next/link";
import Image from "next/image";

interface Product {
  id: string;
  image: string;
  name: string;
  badge?: string;
  category: string;
  price: number;
  discount?: number;
  originalPrice?: number;
}

export default function ProductCard({ product }: { product: Product }) {
  return (
    <Link href={`/product/${product.id}`} className="group block rounded-2xl bg-white shadow-md overflow-hidden transition-all hover:shadow-lg">
      <div className="relative w-full h-64 overflow-hidden">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {product.badge && (
          <span className="absolute top-3 left-3 bg-rose-500 text-white text-xs uppercase px-2 py-1 rounded-md shadow">
            {product.badge}
          </span>
        )}
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-neutral-800 group-hover:text-rose-600 transition-colors">
          {product.name}
        </h3>
        <p className="text-sm text-neutral-500 mt-1">{product.category}</p>
        <div className="flex items-center justify-between mt-3">
          <span className="text-base font-bold text-neutral-900">{product.price} EGP</span>
          {product.discount && (
            <span className="text-sm line-through text-neutral-400">{product.originalPrice} EGP</span>
          )}
        </div>
      </div>
    </Link>
  );
}
