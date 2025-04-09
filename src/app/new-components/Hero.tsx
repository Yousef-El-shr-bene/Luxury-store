// components/Hero.tsx

"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
export default function Hero() {
  return (
    <section className="relative w-full bg-neutral-50 pt-32 pb-20">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-6">
        
        {/* Text Content */}
        <div className="max-w-xl text-center md:text-left space-y-6">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
            خليكى دايمًا متألقة <br /> مع <span className="text-red-600">هيام إدشن</span>
          </h1>
          <p className="text-lg text-gray-600">
            إطلالات فريدة. خامات فخمة. وكل قطعة تحكي قصة ندرة وتميّز مصممة مخصوص ليكي.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Link href="/shop">
              <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white rounded-full px-8 py-4 text-lg">
                اتفرجي على الكولكشن
              </Button>
            </Link>
            <Link href="/fit-you">
              <Button variant="outline" size="lg" className="rounded-full px-8 py-4 text-lg border-red-600 text-red-600 hover:bg-red-50">
                اكتشفي خدمة Fit You
              </Button>
            </Link>
          </div>
        </div>

        {/* Image */}
        <div className="mt-10 md:mt-0">
          <Image
            src="/HeroImg.png" // لازم تحط صورة هنا
            alt="تصميم فستان على منيكان"
            width={500}
            height={600}
            className="rounded-2xl shadow-xl"
          />
        </div>
      </div>

      {/* Optional: Decorative Glow or Background Shapes */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-10 -left-10 w-72 h-72 bg-red-100 rounded-full opacity-30 blur-3xl"></div>
        <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-rose-100 rounded-full opacity-20 blur-3xl"></div>
      </div>
    </section>
  );
}
