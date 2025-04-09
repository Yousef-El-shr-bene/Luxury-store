// // components/Countdown.tsx
// "use client";
// import { useEffect, useState } from "react";
// export default function Countdown() {
//   const calculateTimeLeft = () => {
//     const targetDate = new Date("2025-05-01T00:00:00"); // التاريخ اللي انت عايزه
//     const difference = targetDate.getTime() - new Date().getTime();

//     let timeLeft = {
//       days: "00",
//       hours: "00",
//       minutes: "00",
//       seconds: "00",
//     };

//     if (difference > 0) {
//       timeLeft = {
//         days: String(Math.floor(difference / (1000 * 60 * 60 * 24))).padStart(2, "0"),
//         hours: String(Math.floor((difference / (1000 * 60 * 60)) % 24)).padStart(2, "0"),
//         minutes: String(Math.floor((difference / 1000 / 60) % 60)).padStart(2, "0"),
//         seconds: String(Math.floor((difference / 1000) % 60)).padStart(2, "0"),
//       };
//     }

//     return timeLeft;
//   };

//   const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setTimeLeft(calculateTimeLeft());
//     }, 1000);

//     return () => clearInterval(timer);
//   }, []);

//   return (
//     <div className="flex justify-center gap-6 text-center text-gray-800">
//       {Object.entries(timeLeft).map(([unit, value]) => (
//         <div key={unit} className="flex flex-col items-center">
//           <span className="text-3xl font-extrabold text-red-600">{value}</span>
//           <span className="text-sm capitalize">{unit}</span>
//         </div>
//       ))}
//     </div>
//   );
// }

// components/Countdown.tsx
// components/Countdown.tsx

// "use client";

// import { useEffect, useState } from "react";
// import { motion } from "framer-motion"; 

// export default function Countdown() {
//   const calculateTimeLeft = () => {
//     const targetDate = new Date("2025-05-01T00:00:00");
//     const difference = targetDate.getTime() - new Date().getTime();

//     let timeLeft = {
//       days: "00",
//       hours: "00",
//       minutes: "00",
//       seconds: "00",
//     };

//     if (difference > 0) {
//       timeLeft = {
//         days: String(Math.floor(difference / (1000 * 60 * 60 * 24))).padStart(2, "0"),
//         hours: String(Math.floor((difference / (1000 * 60 * 60)) % 24)).padStart(2, "0"),
//         minutes: String(Math.floor((difference / 1000 / 60) % 60)).padStart(2, "0"),
//         seconds: String(Math.floor((difference / 1000) % 60)).padStart(2, "0"),
//       };
//     }

//     return timeLeft;
//   };

//   const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setTimeLeft(calculateTimeLeft());
//     }, 1000);

//     return () => clearInterval(timer);
//   }, []);

//   const circleStyle = "relative w-24 h-24 rounded-full border-4 border-rose-500 flex items-center justify-center shadow-lg bg-white/10 backdrop-blur-md";

//   return (
//     <div className="flex flex-col items-center gap-6 p-6 bg-white/20 backdrop-blur-xl rounded-3xl shadow-2xl">
//       <motion.div
//         initial={{ opacity: 0, scale: 0.8 }}
//         animate={{ opacity: 1, scale: 1 }}
//         transition={{ duration: 0.8 }}
//         className="flex gap-6"
//       >
//         {Object.entries(timeLeft).map(([unit, value]) => (
//           <motion.div
//             key={unit}
//             whileHover={{ scale: 1.1 }}
//             className={circleStyle}
//           >
//             <div className="text-center text-white">
//               <div className="text-2xl font-extrabold">{value}</div>
//               <div className="text-xs capitalize">{unit}</div>
//             </div>
//           </motion.div>
//         ))}
//       </motion.div>

//       {/* CTA Button */}
//       <motion.button
//         whileHover={{ scale: 1.05 }}
//         whileTap={{ scale: 0.95 }}
//         className="bg-gradient-to-r from-rose-500 to-red-600 text-white text-sm px-6 py-3 rounded-full shadow-xl backdrop-blur-md"
//       >
//         احجزي دلوقتي قبل ما يفوتك 💖
//       </motion.button>
//     </div>
//   );
// }
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
