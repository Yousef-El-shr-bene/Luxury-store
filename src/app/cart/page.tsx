"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const CartPage = () => {
  const [shippingEstimate, setShippingEstimate] = useState(50);
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "فستان هاي إيدشن",
      color: "Rose Gold",
      quantity: 1,
      price: 2000,
      image: "/images/product1.jpg",
    },
    {
      id: 2,
      name: "توب روز جولد",
      color: "Fiery Red",
      quantity: 1,
      price: 1200,
      image: "/images/product2.jpg",
    },
  ]);

  const handleQuantityChange = (index: number, quantity: number) => {
    const updatedItems = [...cartItems];
    updatedItems[index].quantity = quantity;
    setCartItems(updatedItems);
  };

  const handleRemove = (id: number) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const total = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const suggestedProducts = [
    {
      id: 3,
      name: "إكسسوار أنيق",
      price: 450,
      image: "/images/suggested1.jpg",
    },
    {
      id: 4,
      name: "حقيبة فاخرة",
      price: 1800,
      image: "/images/suggested2.jpg",
    },
  ];

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">سلة التسوق</h1>

      {cartItems.length === 0 ? (
        <div className="text-center py-20">
          <p className="text-xl mb-4">سلتك فارغة حاليًا.</p>
          <Button className="text-lg">عودة للتسوق</Button>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-4">
            <AnimatePresence>
              {cartItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="flex gap-4 border-b pb-4"
                >
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={120}
                    height={120}
                    className="rounded-xl object-cover"
                  />
                  <div className="flex-1">
                    <h2 className="text-xl font-semibold">{item.name}</h2>
                    <p className="text-gray-500">اللون: {item.color}</p>
                    <div className="flex items-center gap-2 mt-2">
                      <label>الكمية:</label>
                      <Input
                        type="number"
                        min={1}
                        max={3}
                        value={item.quantity}
                        onChange={(e) =>
                          handleQuantityChange(index, Number(e.target.value))
                        }
                        className="w-20"
                      />
                    </div>
                    <Button
                      variant="ghost"
                      className="text-red-500 mt-2"
                      onClick={() => handleRemove(item.id)}
                    >
                      حذف
                    </Button>
                  </div>
                  <div className="text-xl font-semibold">{item.price} EGP</div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          <div className="bg-neutral-100 p-6 rounded-xl space-y-4 shadow-lg">
            <h3 className="text-xl font-bold mb-4">ملخص الطلب</h3>

            <div>
              <label className="block mb-2">اختر منطقتك لتقدير الشحن:</label>
              <select
                onChange={(e) => setShippingEstimate(Number(e.target.value))}
                className="w-full border rounded-lg p-2"
              >
                <option value={50}>القاهرة - 50 EGP</option>
                <option value={70}>الإسكندرية - 70 EGP</option>
                <option value={100}>أسيوط - 100 EGP</option>
              </select>
            </div>

            <div className="flex justify-between">
              <span>إجمالي المنتجات:</span>
              <span>{total} EGP</span>
            </div>

            <div className="flex justify-between">
              <span>الشحن (تقديري):</span>
              <span>{shippingEstimate} EGP</span>
            </div>

            <div className="border-t pt-2 flex justify-between font-bold text-lg">
              <span>الإجمالي الكلي:</span>
              <span>{total + shippingEstimate} EGP</span>
            </div>

            <Button className="w-full text-lg">متابعة لإتمام الطلب</Button>
          </div>
        </div>
      )}

      {cartItems.length > 0 && (
        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-4">قد يعجبك أيضًا</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {suggestedProducts.map((product) => (
              <div
                key={product.id}
                className="bg-neutral-100 p-4 rounded-xl text-center shadow-md hover:shadow-lg transition"
              >
                <Image
                  src={product.image}
                  alt={product.name}
                  width={150}
                  height={150}
                  className="mx-auto rounded-lg mb-2"
                />
                <h3 className="font-semibold">{product.name}</h3>
                <p className="text-gray-600">{product.price} EGP</p>
                <Button variant="ghost" className="mt-2 text-sm">
                  أضف للسلة
                </Button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
