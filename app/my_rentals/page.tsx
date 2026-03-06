"use client";

import {
  Calendar,
  MapPin,
  Clock,
  CheckCircle,
  ArrowRight,
  Wallet,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

// Placeholder for your ImageWithFallback or standard Next.js Image
const currentRentals = [
  {
    id: 1,
    car: "Mercedes-Benz E-Class",
    image:
      "https://images.unsplash.com/photo-1758216383800-7023ee8ed42b?q=80&w=1080",
    pickupDate: "Dec 20, 2025",
    returnDate: "Dec 23, 2025",
    location: "Zagreb Center",
    status: "Active",
    price: 255,
  },
];

const upcomingRentals = [
  {
    id: 2,
    car: "Tesla Model 3",
    image:
      "https://images.unsplash.com/photo-1593941707874-ef25b8b4a92b?q=80&w=1080",
    pickupDate: "Jan 5, 2026",
    returnDate: "Jan 8, 2026",
    location: "Split",
    status: "Upcoming",
    price: 285,
  },
];

export default function MyRentalsPage() {
  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      {/* Dynamic Header */}
      <div className="bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-transparent" />
        <div className="max-w-7xl mx-auto px-6 py-20 relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <h1 className="text-4xl md:text-6xl font-black italic uppercase tracking-tighter mb-4">
                My <span className="text-blue-500">Rentals</span>
              </h1>
              <p className="text-gray-400 font-medium uppercase tracking-widest text-xs">
                Active Reservations & Fleet Management
              </p>
            </div>
            <div className="flex gap-4">
              <div className="bg-slate-800/50 border border-slate-700 p-4 rounded-2xl">
                <p className="text-[10px] font-black text-gray-500 uppercase mb-1">
                  Total Spent
                </p>
                <p className="text-xl font-black italic">€540.00</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Section: Active Rentals */}
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-8">
            <h2 className="text-2xl font-black italic uppercase tracking-tighter text-gray-900">
              Active Now
            </h2>
            <div className="h-[2px] flex-grow bg-gray-100" />
            <span className="bg-green-500/10 text-green-600 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest border border-green-500/20">
              {currentRentals.length} Live
            </span>
          </div>

          {currentRentals.length > 0 ? (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {currentRentals.map((rental) => (
                <div
                  key={rental.id}
                  className="group bg-white rounded-[2.5rem] shadow-xl shadow-blue-900/5 border-2 border-green-500 overflow-hidden hover:shadow-2xl transition-all duration-500"
                >
                  <div className="relative h-64">
                    <img
                      src={rental.image}
                      alt={rental.car}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute top-6 left-6">
                      <div className="bg-green-500 text-white px-4 py-1.5 rounded-xl text-[10px] font-black uppercase tracking-widest flex items-center gap-2 shadow-lg animate-pulse">
                        <div className="w-2 h-2 bg-white rounded-full" />
                        Live Trip
                      </div>
                    </div>
                  </div>
                  <div className="p-8">
                    <div className="flex justify-between items-start mb-6">
                      <div>
                        <h3 className="text-2xl font-black italic uppercase tracking-tighter text-gray-900 mb-1">
                          {rental.car}
                        </h3>
                        <p className="text-xs font-bold text-gray-400 uppercase tracking-widest flex items-center gap-2">
                          <MapPin size={14} className="text-blue-600" />
                          {rental.location}
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="text-[10px] font-black text-gray-400 uppercase">
                          Total Paid
                        </p>
                        <p className="text-2xl font-black italic text-gray-900">
                          €{rental.price}
                        </p>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4 mb-8 bg-gray-50 p-4 rounded-2xl border border-gray-100">
                      <div>
                        <p className="text-[10px] font-black text-gray-400 uppercase mb-1">
                          Pickup
                        </p>
                        <p className="text-sm font-bold text-gray-900">
                          {rental.pickupDate}
                        </p>
                      </div>
                      <div className="border-l border-gray-200 pl-4">
                        <p className="text-[10px] font-black text-gray-400 uppercase mb-1">
                          Return
                        </p>
                        <p className="text-sm font-bold text-gray-900">
                          {rental.returnDate}
                        </p>
                      </div>
                    </div>

                    <button className="w-full py-4 bg-gray-900 text-white rounded-2xl font-black uppercase tracking-widest text-sm hover:bg-blue-600 transition-all flex items-center justify-center gap-2 group/btn">
                      Manage Reservation
                      <ArrowRight
                        size={18}
                        className="group-hover/btn:translate-x-1 transition-transform"
                      />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="bg-white rounded-[3rem] border-2 border-dashed border-gray-200 p-20 text-center">
              <div className="bg-gray-50 w-20 h-20 rounded-3xl flex items-center justify-center mx-auto mb-6">
                <Clock className="text-gray-300" size={40} />
              </div>
              <h3 className="text-2xl font-black italic uppercase tracking-tighter text-gray-900 mb-2">
                The Garage is Empty
              </h3>
              <p className="text-gray-400 font-medium mb-8 max-w-xs mx-auto">
                No active rentals found. Ready to hit the road?
              </p>
              <Link
                href="/browse_cars"
                className="inline-block bg-blue-600 text-white px-10 py-4 rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-blue-700 transition-all shadow-lg shadow-blue-600/20"
              >
                Find a Car
              </Link>
            </div>
          )}
        </div>

        {/* Section: Upcoming Rentals */}
        <div className="mb-16">
          <h2 className="text-2xl font-black italic uppercase tracking-tighter text-gray-900 mb-8">
            Upcoming <span className="text-gray-400">Journeys</span>
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {upcomingRentals.map((rental) => (
              <div
                key={rental.id}
                className="bg-white rounded-[2.5rem] shadow-sm border border-gray-100 overflow-hidden flex flex-col md:flex-row"
              >
                <div className="md:w-1/3 h-48 md:h-auto relative">
                  <img
                    src={rental.image}
                    alt={rental.car}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-8 flex-grow">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-black italic uppercase tracking-tighter text-gray-900">
                      {rental.car}
                    </h3>
                    <span className="bg-blue-50 text-blue-600 px-3 py-1 rounded-lg text-[10px] font-black uppercase tracking-widest border border-blue-100">
                      Confirmed
                    </span>
                  </div>
                  <div className="space-y-3 mb-6 text-sm font-bold text-gray-500">
                    <div className="flex items-center gap-3">
                      <Calendar size={16} className="text-blue-600" />
                      {rental.pickupDate}
                    </div>
                    <div className="flex items-center gap-3">
                      <MapPin size={16} className="text-blue-600" />
                      {rental.location}
                    </div>
                  </div>
                  <button className="text-blue-600 text-xs font-black uppercase tracking-widest hover:text-gray-900 transition-colors flex items-center gap-2">
                    View Details <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Section: History CTA */}
        <div className="bg-slate-900 rounded-[2.5rem] p-8 md:p-12 relative overflow-hidden">
          <div className="absolute right-0 top-0 w-64 h-64 bg-blue-600/10 blur-[80px] rounded-full" />
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
            <div className="flex items-center gap-6">
              <div className="bg-blue-600 p-5 rounded-[2rem] shadow-xl shadow-blue-600/40">
                <CheckCircle className="text-white" size={32} />
              </div>
              <div>
                <h3 className="text-2xl font-black italic uppercase tracking-tighter text-white mb-1">
                  Rental History
                </h3>
                <p className="text-gray-400 text-sm font-medium">
                  Review your past 12 months of activity and invoices.
                </p>
              </div>
            </div>
            <Link
              href="/my_rentals/history"
              className="w-full md:w-auto px-10 py-4 bg-white text-slate-900 rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-blue-500 hover:text-white transition-all text-center"
            >
              Access History
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
