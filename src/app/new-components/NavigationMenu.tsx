'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
// import Link from 'next/link';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { name: 'الرئيسية', href: '/' },
    { name: 'الكولكشن', href: '#collection' },
    { name: 'ندرة القطع', href: '#limited' },
    { name: 'عن هيام إدشن', href: '#about' },
    { name: 'تواصل معانا', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-white/10 border-b border-white/20 shadow-xl">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <motion.div
          className="text-2xl font-bold text-red-600"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          هيام إدشن
        </motion.div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-8 rtl:space-x-reverse">
          {links.map((link, index) => (
            <motion.a
              key={index}
              href={link.href}
              className="text-white hover:text-red-500 transition-colors duration-300 text-lg"
              whileHover={{ scale: 1.1 }}
            >
              {link.name}
            </motion.a>
          ))}

          {/* CTA Button */}
          <motion.a
            href="#collection"
            className="bg-red-600 text-white px-4 py-2 rounded-full shadow-lg hover:bg-red-700 transition duration-300"
            whileHover={{ scale: 1.05 }}
          >
            شوفي الكولكشن
          </motion.a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-white"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <motion.nav
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden bg-black bg-opacity-80 backdrop-blur-lg text-white p-6 space-y-4"
        >
          {links.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className="block text-lg hover:text-red-500 transition-colors duration-300"
              onClick={() => setMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <a
            href="#collection"
            className="block bg-red-600 text-center text-white px-4 py-2 rounded-full shadow-lg hover:bg-red-700 transition duration-300"
            onClick={() => setMenuOpen(false)}
          >
            شوفي الكولكشن
          </a>
        </motion.nav>
      )}
    </header>
  );
}
