"use client";

import {
  Search,
  MapPin,
  SlidersHorizontal,
  X,
  Car,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function SearchPage() {
  const [location, setLocation] = useState("");
  const [carType, setCarType] = useState("");

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header / Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <h1 className="text-4xl md:text-5xl font-extrabold italic uppercase tracking-tighter mb-8">
            Find Your Next <span className="text-blue-200">Adventure</span>
          </h1>

          {/* Search Bar Container */}

          <div className="bg-white rounded-[2rem] p-3 shadow-2xl max-w-5xl border border-white/20">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-2">
              {/* Location Input */}
              <div className="md:col-span-5 flex items-center gap-3 px-6 py-4 bg-gray-50 rounded-2xl border border-transparent focus-within:border-blue-600 focus-within:bg-white transition-all group">
                <MapPin
                  size={22}
                  className="text-blue-600 group-focus-within:scale-110 transition-transform"
                />
                <div className="flex-1">
                  <p className="text-[10px] font-black uppercase tracking-widest text-gray-400">
                    Location
                  </p>
                  <input
                    type="text"
                    placeholder="Where to?"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="bg-transparent outline-none text-gray-900 w-full font-bold placeholder:text-gray-300"
                  />
                </div>
                {location && (
                  <button
                    onClick={() => setLocation("")}
                    className="p-1 hover:bg-gray-200 rounded-full transition-colors"
                  >
                    <X size={16} className="text-gray-400" />
                  </button>
                )}
              </div>

              {/* Car Type Input */}
              <div className="md:col-span-4 flex items-center gap-3 px-6 py-4 bg-gray-50 rounded-2xl border border-transparent focus-within:border-blue-600 focus-within:bg-white transition-all group">
                <Car
                  size={22}
                  className="text-blue-600 group-focus-within:scale-110 transition-transform"
                />
                <div className="flex-1">
                  <p className="text-[10px] font-black uppercase tracking-widest text-gray-400">
                    Vehicle Type
                  </p>
                  <input
                    type="text"
                    placeholder="SUV, Sedan, etc."
                    value={carType}
                    onChange={(e) => setCarType(e.target.value)}
                    className="bg-transparent outline-none text-gray-900 w-full font-bold placeholder:text-gray-300"
                  />
                </div>
                {carType && (
                  <button
                    onClick={() => setCarType("")}
                    className="p-1 hover:bg-gray-200 rounded-full transition-colors"
                  >
                    <X size={16} className="text-gray-400" />
                  </button>
                )}
              </div>

              {/* Search Button */}
              <button className="md:col-span-3 bg-blue-600 text-white px-8 py-4 rounded-2xl hover:bg-blue-700 transition-all font-black uppercase tracking-widest text-sm flex items-center justify-center gap-3 shadow-lg shadow-blue-600/20 active:scale-[0.98]">
                <Search size={20} />
                Find Cars
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Results Content */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
          <div>
            <h2 className="text-3xl font-black italic uppercase tracking-tighter text-gray-900">
              Search Results
            </h2>
            <div className="flex items-center gap-2 mt-1">
              <span className="w-2 h-2 bg-gray-300 rounded-full" />
              <p className="text-sm font-bold text-gray-400 uppercase tracking-widest">
                0 vehicles found in your area
              </p>
            </div>
          </div>

          <button className="flex items-center gap-2 bg-white border-2 border-gray-100 px-6 py-3 rounded-2xl hover:border-blue-600 hover:text-blue-600 transition-all font-black uppercase tracking-widest text-xs shadow-sm">
            <SlidersHorizontal size={18} />
            Advance Filters
          </button>
        </div>

        {/* Empty State Card */}

        <div className="bg-white rounded-[3rem] border border-gray-100 shadow-sm p-16 md:p-24 text-center">
          <div className="relative inline-block mb-8">
            <div className="absolute inset-0 bg-blue-100 rounded-full scale-150 blur-2xl opacity-50" />
            <div className="relative bg-blue-50 p-8 rounded-full">
              <Search size={64} className="text-blue-600" />
            </div>
          </div>

          <h3 className="text-3xl font-black italic uppercase tracking-tighter text-gray-900 mb-4">
            No Matches Found
          </h3>
          <p className="text-gray-500 font-medium max-w-md mx-auto mb-10 leading-relaxed">
            We couldn't find any cars matching your current filters. Try
            broadening your search or check out our most popular fleets.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/browse_cars">
              <button className="bg-gray-900 text-white px-10 py-5 rounded-2xl hover:bg-black transition-all font-black uppercase tracking-widest text-xs flex items-center gap-3 group">
                Browse Full Catalog
                <ArrowRight
                  size={16}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </button>
            </Link>
            <button
              onClick={() => {
                setLocation("");
                setCarType("");
              }}
              className="text-blue-600 px-10 py-5 rounded-2xl hover:bg-blue-50 transition-all font-black uppercase tracking-widest text-xs"
            >
              Clear All Filters
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
