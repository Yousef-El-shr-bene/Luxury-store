import React from 'react'
import Image from "next/image";
export default function RelatedProducts() {
  return (
          <div className="md:col-span-2 mt-16">
          <h2 className="text-2xl font-semibold mb-6">You may also like</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="border rounded-xl p-4 hover:shadow-xl transition duration-300"
              >
                <Image
                  src="/image123.png"
                  alt="Related Product"
                  className="rounded-lg mb-3"
                />
                <h3 className="text-lg font-medium">Product {item}</h3>
                <p className="text-gray-500">$199.00</p>
              </div>
            ))}
          </div>
        </div>
  )
}
