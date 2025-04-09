// components/Header.tsx

"use client";

import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full bg-white shadow-md fixed top-0 left-0 z-50">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          {/* حط هنا صورة اللوجو بتاعك */}
          <span className="text-xl font-bold text-red-600">هيام إدشن</span>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-8">
          <Link href="/" className="text-gray-700 hover:text-red-600 transition">
            الرئيسية
          </Link>
          <Link href="/shop" className="text-gray-700 hover:text-red-600 transition">
            المتجر
          </Link>
          <Link href="/about" className="text-gray-700 hover:text-red-600 transition">
            عن هيام إدشن
          </Link>
          <Link href="/fit-you" className="text-gray-700 hover:text-red-600 transition">
            خدمة Fit You
          </Link>
          <Link href="/contact" className="text-gray-700 hover:text-red-600 transition">
            كلمينا
          </Link>
        </nav>

        {/* Actions */}
        <div className="flex items-center space-x-4">
          {/* Account */}
          <Link href="/account" className="text-gray-700 hover:text-red-600 transition">
            حسابي
          </Link>

          {/* Cart */}
          <Link href="/cart" className="text-gray-700 hover:text-red-600 transition">
            السلة بتاعتي
          </Link>

          {/* Language Switcher */}
          <Button variant="outline" size="sm">
            عربي
          </Button>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <nav className="flex flex-col space-y-4 py-4 px-6">
            <Link href="/" className="text-gray-700 hover:text-red-600 transition">
              الرئيسية
            </Link>
            <Link href="/shop" className="text-gray-700 hover:text-red-600 transition">
              المتجر
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-red-600 transition">
              عن هيام إدشن
            </Link>
            <Link href="/fit-you" className="text-gray-700 hover:text-red-600 transition">
              خدمة Fit You
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-red-600 transition">
              كلمينا
            </Link>
            <Link href="/account" className="text-gray-700 hover:text-red-600 transition">
              حسابي
            </Link>
            <Link href="/cart" className="text-gray-700 hover:text-red-600 transition">
              السلة بتاعتي
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
