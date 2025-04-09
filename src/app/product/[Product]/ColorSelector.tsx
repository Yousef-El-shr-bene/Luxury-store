import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import clsx from "clsx";

const colors = [
  { name: "Rose Gold", hex: "#B76E79" },
  { name: "Fiery Red", hex: "#E63946" },
  { name: "Elegant Black", hex: "#1E1E1E" },
  { name: "Ivory White", hex: "#F8F5F2" },
];

export default function ColorSelector() {
  const [selectedColor, setSelectedColor] = useState(colors[0].hex);
  const [hoveredColor, setHoveredColor] = useState<string | null>(null);

  return (
    <div className="flex gap-6">
      {colors.map((color) => (
        <div
          key={color.hex}
          className="relative cursor-pointer flex flex-col items-center"
          onClick={() => setSelectedColor(color.hex)}
          onMouseEnter={() => setHoveredColor(color.hex)}
          onMouseLeave={() => setHoveredColor(null)}
        >
          {/* Tooltip */}
          <AnimatePresence>
            {hoveredColor === color.hex && (
              <motion.span
                className="absolute -top-8 px-2 py-1 text-xs text-white bg-black rounded-md shadow-md whitespace-nowrap"
                initial={{ opacity: 0, y: -5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -5 }}
              >
                {color.name}
              </motion.span>
            )}
          </AnimatePresence>

          {/* Color Circle */}
          <motion.div
            className={clsx(
              "w-10 h-10 rounded-full border-2 transition-all",
              selectedColor === color.hex
                ? "border-rose-500 shadow-md shadow-rose-300"
                : "border-neutral-300"
            )}
            style={{ backgroundColor: color.hex }}
            whileHover={{ scale: 1.2 }}
            animate={{ scale: selectedColor === color.hex ? 1.2 : 1 }}
          />
        </div>
      ))}
    </div>
  );
}
