import { FaInstagram, FaTiktok, FaPinterest } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-neutral-950 text-neutral-300 py-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Left - Brand Info */}
        <div>
          <h2 className="text-2xl text-white font-semibold mb-4">Hiyam Edition</h2>
          <p className="text-sm text-neutral-400">
            تصاميم حصرية، فخامة نادرة. اكتشفي إصداراتنا المحدودة التي تحتفي بذوقك الفريد.
          </p>
        </div>

        {/* Middle - Quick Links */}
        <div>
          <h3 className="text-lg text-white font-medium mb-3">روابط سريعة</h3>
          <ul className="space-y-2 text-sm text-neutral-400">
            <li><a href="#collections" className="hover:text-white transition">المجموعات</a></li>
            <li><a href="#fit-you" className="hover:text-white transition">كيف يعمل Fit You</a></li>
            <li><a href="#about" className="hover:text-white transition">عن هيام</a></li>
            <li><a href="#contact" className="hover:text-white transition">اتصل بنا</a></li>
          </ul>
        </div>

        {/* Right - Social Media */}
        <div>
          <h3 className="text-lg text-white font-medium mb-3">تابعنا</h3>
          <div className="flex space-x-4">
            <a href="https://instagram.com" target="_blank" className="hover:text-white transition text-xl"><FaInstagram /></a>
            <a href="https://tiktok.com" target="_blank" className="hover:text-white transition text-xl"><FaTiktok /></a>
            <a href="https://pinterest.com" target="_blank" className="hover:text-white transition text-xl"><FaPinterest /></a>
          </div>
        </div>

      </div>

      {/* Bottom - Copyright */}
      <div className="mt-8 border-t border-neutral-800 pt-4 text-sm text-neutral-500 text-center">
        © {new Date().getFullYear()} Hiyam Edition. جميع الحقوق محفوظة.
      </div>
    </footer>
  );
}
