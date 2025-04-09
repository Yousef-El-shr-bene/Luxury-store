'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown } from 'lucide-react';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const links = [
    { name: 'الرئيسية', href: '/' },
    { name: 'الكولكشن', href: '#', hasDropdown: true },
    { name: 'ندرة القطع', href: '#limited' },
    { name: 'عن هيام إدشن', href: '#about' },
    { name: 'تواصل معانا', href: '#contact' },
  ];

  const collectionLinks = [
    { name: 'Luxe Collection', href: '#luxe' },
    { name: 'Rare Collection', href: '#rare' },
    { name: 'Premium Collection', href: '#premium' },
    { name: 'Normal Collection', href: '#normal' },
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
        <nav className="hidden md:flex space-x-8 rtl:space-x-reverse relative">
          {links.map((link, index) => (
            <div key={index} className="relative group">
              <motion.a
                href={link.href}
                className="text-white hover:text-red-500 transition-colors duration-300 text-lg flex items-center gap-1"
                whileHover={{ scale: 1.05 }}
                onMouseEnter={() => link.hasDropdown && setDropdownOpen(true)}
                onMouseLeave={() => link.hasDropdown && setDropdownOpen(false)}
              >
                {link.name}
                {link.hasDropdown && <ChevronDown size={16} />}
              </motion.a>

              {/* Dropdown Menu */}
              {link.hasDropdown && (
                <AnimatePresence>
                  {dropdownOpen && (
                    <motion.div
                      className="absolute top-full left-0 mt-2 bg-white text-black rounded-xl shadow-lg py-3 px-4 space-y-2 min-w-[180px] z-50"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      onMouseEnter={() => setDropdownOpen(true)}
                      onMouseLeave={() => setDropdownOpen(false)}
                    >
                      {collectionLinks.map((item, idx) => (
                        <a
                          key={idx}
                          href={item.href}
                          className="block hover:bg-red-100 hover:text-red-600 rounded-lg px-3 py-2 transition duration-300"
                        >
                          {item.name}
                        </a>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              )}
            </div>
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
            <div key={index}>
              <a
                href={link.href}
                className="block text-lg hover:text-red-500 transition-colors duration-300"
                onClick={() => setMenuOpen(false)}
              >
                {link.name}
              </a>

              {link.hasDropdown && (
                <div className="ml-4 space-y-2 mt-2">
                  {collectionLinks.map((item, idx) => (
                    <a
                      key={idx}
                      href={item.href}
                      className="block text-sm hover:text-red-400"
                      onClick={() => setMenuOpen(false)}
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              )}
            </div>
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
