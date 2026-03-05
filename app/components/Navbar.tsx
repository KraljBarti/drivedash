import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-8 py-4 bg-white/80 backdrop-blur-md sticky top-0 z-50 border-b border-gray-100">
      <Link
        href="/"
        className="text-2xl font-black tracking-tighter text-blue-600"
      >
        DRIVE<span className="text-slate-900">DASH</span>
      </Link>
      <div className="hidden md:flex items-center gap-8 text-sm font-semibold text-slate-600">
        <Link href="/search" className="hover:text-blue-600 transition-colors">
          Find a Car
        </Link>
        <Link href="/profile" className="hover:text-blue-600 transition-colors">
          My Bookings
        </Link>
        <Link
          href="/support"
          className="bg-slate-900 text-white px-4 py-2 rounded-full hover:bg-slate-800 transition-all"
        >
          Help Center
        </Link>
      </div>
    </nav>
  );
}
