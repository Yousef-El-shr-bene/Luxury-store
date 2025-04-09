"use client";
import React from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { FaInstagram, FaFacebookF, FaTiktok } from "react-icons/fa";
import { motion } from "framer-motion";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-800 pt-32 pb-20">
      {/* Hero Section */}
      <section className="text-center py-16 px-4">
        <h1 className="text-4xl font-bold text-rose-600 mb-4">تواصل معانا بسهولة</h1>
        <p className="text-lg text-neutral-600">فريقنا هنا عشان يساعدك في أي وقت.</p>
      </section>

      {/* Contact Methods */}
      <section className="grid grid-cols-1 md:grid-cols-4 gap-6 px-6 mb-16">
        <motion.div whileHover={{ scale: 1.05 }} className="bg-white shadow-lg p-6 rounded-2xl text-center">
          <p className="text-neutral-700 mb-2">الإيميل</p>
          <a href="mailto:support@hiyam.com" className="text-rose-600 font-medium">support@hiyam.com</a>
        </motion.div>
        <motion.div whileHover={{ scale: 1.05 }} className="bg-white shadow-lg p-6 rounded-2xl text-center">
          <p className="text-neutral-700 mb-2">الهاتف</p>
          <a href="tel:+201234567890" className="text-rose-600 font-medium">+20 123 456 7890</a>
        </motion.div>
        <motion.div whileHover={{ scale: 1.05 }} className="bg-white shadow-lg p-6 rounded-2xl text-center">
          <p className="text-neutral-700 mb-2">واتساب</p>
          <a href="https://wa.me/201234567890" target="_blank" className="text-rose-600 font-medium">راسلنا على واتساب</a>
        </motion.div>
        <motion.div whileHover={{ scale: 1.05 }} className="bg-white shadow-lg p-6 rounded-2xl text-center flex justify-center space-x-4 rtl:space-x-reverse">
          <FaInstagram className="text-rose-600 text-2xl cursor-pointer" />
          <FaFacebookF className="text-rose-600 text-2xl cursor-pointer" />
          <FaTiktok className="text-rose-600 text-2xl cursor-pointer" />
        </motion.div>
      </section>

      {/* Contact Form */}
      <section className="px-6 mb-16 max-w-2xl mx-auto">
        <h2 className="text-2xl font-semibold text-center mb-6">أرسل رسالتك مباشرة</h2>
        <form className="space-y-4">
          <Input placeholder="اسمك الكامل" required />
          <Input placeholder="البريد الإلكتروني" type="email" required />
          <Input placeholder="رقم الهاتف (اختياري)" type="tel" />
          <Textarea placeholder="رسالتك" rows={4} required />
          <Button className="w-full bg-rose-600 hover:bg-rose-700 text-white">إرسال رسالتك</Button>
        </form>
      </section>
    </div>
  );
}
