"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import {
  Star,
  MapPin,
  Shield,
  Calendar,
  User,
  ChevronLeft,
  Fuel,
  Settings,
  Users,
  Car as CarIcon,
  Info,
  CheckCircle2,
} from "lucide-react";
import { useState } from "react";

// Mock Data (In a real app, this would be in /lib/data.ts or a database)
const carDetails: Record<string, any> = {
  "1": {
    id: 1,
    model: "Mercedes-Benz E-Class",
    price: 85,
    rating: 4.9,
    reviews: 24,
    location: "Zagreb Center",
    image:
      "https://images.unsplash.com/photo-1758216383800-7023ee8ed42b?q=80&w=1080",
    features: [
      "Automatic",
      "Leather Seats",
      "GPS Navigation",
      "Bluetooth",
      "A/C",
    ],
    description:
      "Luxurious sedan perfect for business trips or special occasions. Well maintained with full service history and executive comfort features.",
    year: 2022,
    seats: 5,
    transmission: "Automatic",
    fuel: "Diesel",
  },
  "2": {
    id: 2,
    model: "Toyota RAV4",
    price: 65,
    rating: 4.8,
    reviews: 18,
    location: "Split",
    image:
      "https://images.unsplash.com/photo-1758411898280-2dc7c95e0ba7?q=80&w=1080",
    features: ["4WD", "Bluetooth", "USB", "Parking Sensors", "Spacious"],
    description:
      "Reliable SUV great for family trips and outdoor adventures. Plenty of cargo space and hybrid efficiency for long coastal drives.",
    year: 2021,
    seats: 5,
    transmission: "Automatic",
    fuel: "Hybrid",
  },
};

export default function CarDetailsPage() {
  const params = useParams();
  const carId = params.id as string;
  const car = carDetails[carId] || carDetails["1"];

  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation Breadcrumb */}
      <div className="bg-white border-b border-gray-100 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link
            href="/browse_cars"
            className="flex items-center gap-2 text-gray-500 hover:text-blue-600 transition-all font-semibold text-sm group"
          >
            <ChevronLeft
              size={18}
              className="group-hover:-translate-x-1 transition-transform"
            />
            BACK TO BROWSE
          </Link>
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 bg-green-500 rounded-full animate-pulse" />
            <span className="text-[10px] font-black uppercase tracking-widest text-gray-400">
              Available Now
            </span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Main Content Area */}
          <div className="lg:col-span-2 space-y-8">
            {/* Hero Image Section */}
            <div className="relative group overflow-hidden rounded-[2rem] bg-gray-200 shadow-2xl aspect-[16/9]">
              <img
                src={car.image}
                alt={car.model}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              <div className="absolute bottom-6 left-8">
                <span className="bg-blue-600 text-white px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest">
                  Premium Selection
                </span>
              </div>
            </div>

            {/* Header Info */}
            <div className="bg-white rounded-[2rem] p-8 border border-gray-100 shadow-sm">
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                <div>
                  <h1 className="text-4xl md:text-5xl font-black italic uppercase tracking-tighter text-gray-900 mb-4">
                    {car.model}
                  </h1>
                  <div className="flex items-center gap-6">
                    <div className="flex items-center gap-2 text-gray-500 font-medium">
                      <MapPin size={18} className="text-blue-600" />
                      {car.location}
                    </div>
                    <div className="flex items-center gap-1.5 bg-yellow-50 px-3 py-1 rounded-full">
                      <Star
                        size={16}
                        className="fill-yellow-400 text-yellow-400"
                      />
                      <span className="font-bold text-yellow-700">
                        {car.rating}
                      </span>
                      <span className="text-yellow-600/60 text-xs">
                        ({car.reviews})
                      </span>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-900 text-white p-6 rounded-2xl md:text-right min-w-[160px]">
                  <p className="text-[10px] font-bold text-blue-400 uppercase tracking-widest mb-1">
                    Daily Rate
                  </p>
                  <div className="flex items-baseline md:justify-end gap-1">
                    <span className="text-3xl font-black">€{car.price}</span>
                    <span className="text-gray-400 text-xs">/day</span>
                  </div>
                </div>
              </div>

              {/* Specs Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10">
                <div className="bg-gray-50 p-4 rounded-2xl border border-gray-100">
                  <Calendar className="text-blue-600 mb-2" size={20} />
                  <p className="text-[10px] font-bold text-gray-400 uppercase">
                    Year
                  </p>
                  <p className="font-bold text-gray-900">{car.year}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-2xl border border-gray-100">
                  <Users className="text-blue-600 mb-2" size={20} />
                  <p className="text-[10px] font-bold text-gray-400 uppercase">
                    Capacity
                  </p>
                  <p className="font-bold text-gray-900">{car.seats} Seats</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-2xl border border-gray-100">
                  <Settings className="text-blue-600 mb-2" size={20} />
                  <p className="text-[10px] font-bold text-gray-400 uppercase">
                    Gearbox
                  </p>
                  <p className="font-bold text-gray-900">{car.transmission}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-2xl border border-gray-100">
                  <Fuel className="text-blue-600 mb-2" size={20} />
                  <p className="text-[10px] font-bold text-gray-400 uppercase">
                    Fuel
                  </p>
                  <p className="font-bold text-gray-900">{car.fuel}</p>
                </div>
              </div>
            </div>

            {/* Description & Features */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-[2rem] p-8 border border-gray-100">
                <h3 className="text-lg font-black uppercase tracking-tight mb-4 flex items-center gap-2">
                  <Info size={18} className="text-blue-600" />
                  Vehicle Overview
                </h3>
                <p className="text-gray-600 leading-relaxed font-medium italic">
                  "{car.description}"
                </p>
              </div>

              <div className="bg-white rounded-[2rem] p-8 border border-gray-100">
                <h3 className="text-lg font-black uppercase tracking-tight mb-4 flex items-center gap-2">
                  <CheckCircle2 size={18} className="text-blue-600" />
                  Key Features
                </h3>
                <div className="flex flex-wrap gap-2">
                  {car.features.map((feature: string, i: number) => (
                    <span
                      key={i}
                      className="bg-blue-50 text-blue-700 px-3 py-1.5 rounded-xl text-xs font-bold uppercase tracking-tight border border-blue-100"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Sticky Booking Card */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-[2rem] shadow-xl border border-gray-100 p-8 sticky top-28">
              <h3 className="text-xl font-black uppercase tracking-tighter text-gray-900 mb-6">
                Reservation
              </h3>

              <div className="space-y-5 mb-8">
                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest ml-1">
                    Pick-up Date
                  </label>
                  <div className="relative">
                    <input
                      type="date"
                      value={startDate}
                      onChange={(e) => setStartDate(e.target.value)}
                      className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-blue-600 outline-none font-bold transition-all"
                    />
                    <Calendar
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-blue-600"
                      size={20}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest ml-1">
                    Return Date
                  </label>
                  <div className="relative">
                    <input
                      type="date"
                      value={endDate}
                      onChange={(e) => setEndDate(e.target.value)}
                      className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-blue-600 outline-none font-bold transition-all"
                    />
                    <Calendar
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-blue-600"
                      size={20}
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-3 mb-8 bg-gray-50 p-6 rounded-2xl border border-dashed border-gray-200">
                <div className="flex justify-between text-sm font-medium">
                  <span className="text-gray-500">Daily Rate</span>
                  <span className="text-gray-900 font-bold">€{car.price}</span>
                </div>
                <div className="flex justify-between text-sm font-medium">
                  <span className="text-gray-500">Insurance</span>
                  <span className="text-green-600 font-bold">Free</span>
                </div>
                <div className="pt-3 border-t border-gray-200 flex justify-between items-end">
                  <span className="text-xs font-black uppercase tracking-widest text-blue-600">
                    Grand Total
                  </span>
                  <span className="text-3xl font-black italic tracking-tighter">
                    €{car.price}
                  </span>
                </div>
              </div>

              <Link href="/booking/dates">
                <button className="w-full bg-blue-600 text-white py-5 rounded-2xl hover:bg-blue-700 transition-all font-black uppercase tracking-widest text-sm shadow-lg shadow-blue-200 active:scale-[0.98]">
                  Start Booking Process
                </button>
              </Link>

              <div className="mt-6 space-y-3">
                <div className="flex items-center gap-2 text-[10px] font-bold text-gray-400 uppercase tracking-widest justify-center">
                  <Shield size={12} className="text-green-500" />
                  Free Cancellation (24h)
                </div>
                <div className="flex items-center gap-2 text-[10px] font-bold text-gray-400 uppercase tracking-widest justify-center">
                  <CheckCircle2 size={12} className="text-green-500" />
                  Instant Confirmation
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
