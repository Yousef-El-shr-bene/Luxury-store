"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  function calculateTimeLeft() {
    const targetDate = new Date("2025-06-01T00:00:00");
    const now = new Date();
    const difference = targetDate.getTime() - now.getTime();

    const time = {
      days: Math.max(0, Math.floor(difference / (1000 * 60 * 60 * 24))),
      hours: Math.max(0, Math.floor((difference / (1000 * 60 * 60)) % 24)),
      minutes: Math.max(0, Math.floor((difference / 1000 / 60) % 60)),
      seconds: Math.max(0, Math.floor((difference / 1000) % 60)),
    };

    return time;
  }

  return (
    <div className="relative flex flex-col items-center justify-center bg-white/10 backdrop-blur-md p-8 rounded-2xl shadow-lg text-black">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-3xl font-bold mb-6"
      >
        العد التنازلي لإطلاق المجموعة
      </motion.h2>

      <div className="flex gap-6 text-center">
        {Object.entries(timeLeft).map(([unit, value]) => (
          <div key={unit}>
            <div className="text-5xl font-extrabold">{value}</div>
            <div className="text-sm uppercase tracking-widest mt-1">{unit}</div>
          </div>
        ))}
      </div>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="mt-6 bg-rose-600 hover:bg-rose-700 text-white px-6 py-3 rounded-xl shadow-lg"
      >
        احجز دلوقتي
      </motion.button>
    </div>
  );
}
