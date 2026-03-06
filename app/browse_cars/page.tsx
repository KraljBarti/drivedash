"use client";

import {
  Search,
  MapPin,
  SlidersHorizontal,
  Star,
  Car,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

const cars = [
  {
    id: 1,
    model: "Mercedes-Benz E-Class",
    price: 85,
    rating: 4.9,
    reviews: 24,
    location: "Zagreb Center",
    status: "Available",
    image:
      "https://images.unsplash.com/photo-1758216383800-7023ee8ed42b?q=80&w=1080",
    features: ["Automatic", "Leather", "GPS"],
  },
  {
    id: 2,
    model: "Toyota RAV4",
    price: 65,
    rating: 4.8,
    reviews: 18,
    location: "Split",
    status: "Available",
    image:
      "https://images.unsplash.com/photo-1758411898280-2dc7c95e0ba7?q=80&w=1080",
    features: ["4WD", "Bluetooth", "USB"],
  },
  {
    id: 3,
    model: "VW Golf",
    price: 45,
    rating: 4.7,
    reviews: 32,
    location: "Rijeka",
    status: "Available",
    image:
      "https://images.unsplash.com/photo-1701314860844-cd2152fa9071?q=80&w=1080",
    features: ["Manual", "A/C", "Compact"],
  },
  {
    id: 4,
    model: "Tesla Model 3",
    price: 95,
    rating: 5.0,
    reviews: 15,
    location: "Zagreb Center",
    status: "Available",
    image:
      "https://images.unsplash.com/photo-1593941707874-ef25b8b4a92b?q=80&w=1080",
    features: ["Electric", "Autopilot", "Premium"],
  },
];

export default function BrowseCarsPage() {
  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <h1 className="text-4xl md:text-6xl font-black italic uppercase tracking-tighter mb-8 leading-none">
            Find Your <span className="text-blue-200">Perfect</span> Drive
          </h1>

          {/* Search Bar Container */}

          <div className="bg-white rounded-[2rem] p-3 shadow-2xl max-w-5xl border border-white/20">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-2">
              <div className="md:col-span-5 flex items-center gap-3 px-6 py-4 bg-gray-50 rounded-2xl border border-transparent focus-within:border-blue-600 focus-within:bg-white transition-all group">
                <MapPin size={22} className="text-blue-600" />
                <div className="flex-1">
                  <p className="text-[10px] font-black uppercase tracking-widest text-gray-400">
                    Location
                  </p>
                  <input
                    type="text"
                    placeholder="Enter city or airport"
                    className="bg-transparent outline-none text-gray-900 w-full font-bold placeholder:text-gray-300"
                  />
                </div>
              </div>

              <div className="md:col-span-4 flex items-center gap-3 px-6 py-4 bg-gray-50 rounded-2xl border border-transparent focus-within:border-blue-600 focus-within:bg-white transition-all group">
                <Car size={22} className="text-blue-600" />
                <div className="flex-1">
                  <p className="text-[10px] font-black uppercase tracking-widest text-gray-400">
                    Category
                  </p>
                  <input
                    type="text"
                    placeholder="SUV, Sedan, Electric..."
                    className="bg-transparent outline-none text-gray-900 w-full font-bold placeholder:text-gray-300"
                  />
                </div>
              </div>

              <Link href="/browse_cars/search" className="md:col-span-3">
                <button className="w-full h-full bg-blue-600 text-white px-8 py-4 rounded-2xl hover:bg-blue-700 transition-all font-black uppercase tracking-widest text-sm flex items-center justify-center gap-3 shadow-lg shadow-blue-600/20 active:scale-[0.98]">
                  <Search size={20} />
                  Find Cars
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Filters and Results Header */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
          <div>
            <h2 className="text-3xl font-black italic uppercase tracking-tighter text-gray-900">
              Fleet Overview
            </h2>
            <div className="flex items-center gap-2 mt-1">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <p className="text-sm font-bold text-gray-400 uppercase tracking-widest">
                {cars.length} Premium Vehicles Available
              </p>
            </div>
          </div>

          <button className="flex items-center gap-2 bg-white border-2 border-gray-100 px-6 py-3 rounded-2xl hover:border-blue-600 hover:text-blue-600 transition-all font-black uppercase tracking-widest text-xs shadow-sm">
            <SlidersHorizontal size={18} />
            Filters
          </button>
        </div>

        {/* Car Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cars.map((car) => (
            <Link
              key={car.id}
              href={`/browse_cars/${car.id}`}
              className="group"
            >
              <div className="bg-white rounded-[2.5rem] shadow-sm overflow-hidden border border-gray-100 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                {/* Image Container */}
                <div className="relative h-64 bg-gray-200 overflow-hidden">
                  <img
                    src={car.image}
                    alt={car.model}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-4 right-4">
                    <span className="bg-white/90 backdrop-blur-md text-gray-900 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest shadow-sm">
                      {car.status}
                    </span>
                  </div>
                  <div className="absolute bottom-4 left-4">
                    <div className="flex gap-2">
                      {car.features.slice(0, 2).map((feature, index) => (
                        <span
                          key={index}
                          className="bg-black/60 backdrop-blur-sm text-white px-3 py-1 rounded-lg text-[10px] font-bold uppercase tracking-tight"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Content Container */}
                <div className="p-8">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-2xl font-black italic uppercase tracking-tighter text-gray-900 group-hover:text-blue-600 transition-colors">
                        {car.model}
                      </h3>
                      <div className="flex items-center gap-1.5 text-gray-400 font-bold text-[10px] uppercase tracking-widest mt-1">
                        <MapPin size={12} className="text-blue-600" />
                        {car.location}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between mt-8 pt-6 border-t border-gray-50">
                    <div className="flex items-center gap-1.5">
                      <Star
                        size={16}
                        className="fill-yellow-400 text-yellow-400"
                      />
                      <span className="font-black text-gray-900">
                        {car.rating}
                      </span>
                      <span className="text-gray-400 text-xs font-bold">
                        ({car.reviews})
                      </span>
                    </div>

                    <div className="flex flex-col items-end">
                      <p className="text-[10px] font-black text-blue-600 uppercase tracking-widest">
                        Per Day
                      </p>
                      <div className="flex items-baseline gap-1">
                        <span className="text-3xl font-black italic tracking-tighter text-gray-900">
                          €{car.price}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 flex items-center justify-center gap-2 w-full bg-gray-900 text-white py-4 rounded-2xl font-black uppercase tracking-widest text-[10px] group-hover:bg-blue-600 transition-colors">
                    View Details
                    <ArrowRight
                      size={14}
                      className="opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all"
                    />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
