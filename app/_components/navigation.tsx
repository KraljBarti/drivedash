"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Car, Menu, X } from "lucide-react";
import { useState } from "react";

const mainNavItems = [
  { name: "Home", path: "/" },
  { name: "Find a Car", path: "/browse_cars" }, // Updated to match your folder: browse_cars
  { name: "My Bookings", path: "/my_rentals" }, // Updated to match your folder: my_rentals
  { name: "Help", path: "/support-safety" }, // Matches renamed support folder
];

export function Navigation() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 group"
            onClick={closeMenu}
          >
            <div className="bg-gradient-to-br from-blue-600 to-blue-700 p-2 rounded-lg group-hover:scale-105 transition-transform">
              <Car className="text-white" size={24} />
            </div>
            <span className="text-xl font-bold text-gray-900 tracking-tight">
              DriveDash
            </span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-2">
            {mainNavItems.map((item) => {
              const isActive = pathname === item.path;
              return (
                <Link
                  key={item.path}
                  href={item.path}
                  className={`px-5 py-2 rounded-lg font-semibold transition-all text-sm ${
                    isActive
                      ? "bg-blue-600 text-white shadow-md shadow-blue-100"
                      : "text-gray-600 hover:text-blue-600 hover:bg-blue-50"
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
          </div>

          {/* Desktop Auth - CLEANED: No buttons inside Links */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              href="/auth/login"
              className="px-5 py-2 font-semibold text-sm text-gray-700 hover:text-blue-600 transition-colors"
            >
              Log In
            </Link>
            <Link
              href="/auth/register"
              className="px-6 py-2 bg-blue-600 text-white text-sm rounded-lg font-semibold hover:bg-blue-700 transition-all shadow-md active:scale-95"
            >
              Sign Up
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 text-gray-600"
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-100 py-4 pb-6 space-y-2">
            {mainNavItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                onClick={closeMenu}
                className={`block px-4 py-3 rounded-lg font-semibold ${
                  pathname === item.path
                    ? "bg-blue-600 text-white"
                    : "text-gray-700 hover:bg-gray-50"
                }`}
              >
                {item.name}
              </Link>
            ))}
            <div className="grid grid-cols-2 gap-4 px-4 pt-4">
              <Link
                href="/auth/login"
                onClick={closeMenu}
                className="flex justify-center items-center py-3 font-bold text-gray-700 border border-gray-200 rounded-xl"
              >
                Log In
              </Link>
              <Link
                href="/auth/register"
                onClick={closeMenu}
                className="flex justify-center items-center py-3 font-bold text-white bg-blue-600 rounded-xl"
              >
                Sign Up
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
