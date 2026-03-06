"use client";

import {
  PlusCircle,
  Car,
  TrendingUp,
  Calendar,
  DollarSign,
  Settings,
  ArrowUpRight,
} from "lucide-react";
import Link from "next/link";

// 1. Define Types for better stability
type ColorKey = "green" | "blue" | "purple" | "yellow";

interface Stat {
  label: string;
  value: string;
  icon: React.ElementType;
  color: ColorKey;
  trend: string;
}

const stats: Stat[] = [
  {
    label: "Total Earnings",
    value: "€2,450",
    icon: DollarSign,
    color: "green",
    trend: "+12.5%",
  },
  {
    label: "Active Listings",
    value: "2",
    icon: Car,
    color: "blue",
    trend: "Stable",
  },
  {
    label: "Monthly Bookings",
    value: "8",
    icon: Calendar,
    color: "purple",
    trend: "+3",
  },
  {
    label: "Avg. Performance",
    value: "4.9",
    icon: TrendingUp,
    color: "yellow",
    trend: "Top 5%",
  },
];

const listings = [
  {
    id: 1,
    model: "Mercedes-Benz E-Class",
    price: 85,
    status: "Active",
    bookings: 12,
    earnings: 1020,
    image:
      "https://images.unsplash.com/photo-1758216383800-7023ee8ed42b?q=80&w=1080",
  },
  {
    id: 2,
    model: "Toyota RAV4",
    price: 65,
    status: "Active",
    bookings: 18,
    earnings: 1170,
    image:
      "https://images.unsplash.com/photo-1758411898280-2dc7c95e0ba7?q=80&w=1080",
  },
];

export default function HostPage() {
  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* Header Section */}
      <div className="bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-transparent" />
        <div className="max-w-7xl mx-auto px-6 py-20 relative z-10">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-blue-600 text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full">
                  Host Pro
                </span>
              </div>
              <h1 className="text-4xl md:text-6xl font-black italic uppercase tracking-tighter mb-2 leading-none">
                Host <span className="text-blue-500">Dashboard</span>
              </h1>
              <p className="text-gray-400 font-medium max-w-md">
                Monitor your fleet performance and optimize your revenue streams
                in real-time.
              </p>
            </div>

            <Link href="/host/manage_listing">
              <button className="bg-blue-600 text-white px-8 py-5 rounded-2xl hover:bg-blue-700 transition-all flex items-center gap-3 shadow-xl shadow-blue-600/20 active:scale-95 group font-black uppercase tracking-widest text-sm">
                <PlusCircle
                  size={20}
                  className="group-hover:rotate-90 transition-transform"
                />
                Add New Listing
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="max-w-7xl mx-auto px-6 -mt-10 mb-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat) => {
            const Icon = stat.icon;

            // Fixed Color Logic: Define the map inside the scope to avoid hoisting/initialization errors
            const colorMap = {
              green: "bg-green-500 text-white shadow-green-200",
              blue: "bg-blue-500 text-white shadow-blue-200",
              purple: "bg-purple-500 text-white shadow-purple-200",
              yellow: "bg-yellow-500 text-white shadow-yellow-200",
            };

            const activeColorClass = colorMap[stat.color];

            return (
              <div
                key={stat.label}
                className="bg-white rounded-[2rem] shadow-xl shadow-gray-200/50 p-8 border border-gray-100 hover:border-blue-500 transition-all group"
              >
                <div className="flex items-center justify-between mb-6">
                  <div
                    className={`p-4 rounded-2xl shadow-lg transition-transform group-hover:scale-110 ${activeColorClass}`}
                  >
                    <Icon size={24} />
                  </div>
                  <span className="text-[10px] font-black text-green-500 bg-green-50 px-2 py-1 rounded-md uppercase tracking-tight">
                    {stat.trend}
                  </span>
                </div>
                <h3 className="text-3xl font-black italic tracking-tighter text-gray-900 mb-1">
                  {stat.value}
                </h3>
                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">
                  {stat.label}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Listings Section */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between mb-10">
          <div>
            <h2 className="text-3xl font-black italic uppercase tracking-tighter text-gray-900">
              Your Fleet
            </h2>
            <p className="text-gray-400 text-xs font-bold uppercase tracking-widest mt-1">
              Management Console
            </p>
          </div>
          <Link href="/host/manage_listing">
            <button className="flex items-center gap-2 bg-white border-2 border-gray-100 px-6 py-3 rounded-2xl hover:border-blue-600 hover:text-blue-600 transition-all font-black uppercase tracking-widest text-xs">
              <Settings size={18} />
              Manage All
            </button>
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {listings.map((listing) => (
            <div
              key={listing.id}
              className="bg-white rounded-[2.5rem] shadow-sm overflow-hidden border border-gray-100 flex flex-col md:flex-row group hover:shadow-2xl transition-all duration-500"
            >
              <div className="md:w-1/3 h-56 md:h-auto relative overflow-hidden">
                <img
                  src={listing.image}
                  alt={listing.model}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-white/90 backdrop-blur-md text-gray-900 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest shadow-sm">
                    {listing.status}
                  </span>
                </div>
              </div>

              <div className="p-8 md:w-2/3 flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-start mb-6">
                    <h3 className="text-2xl font-black italic uppercase tracking-tighter text-gray-900 group-hover:text-blue-600 transition-colors">
                      {listing.model}
                    </h3>
                    <ArrowUpRight className="text-gray-300 group-hover:text-blue-600 transition-colors" />
                  </div>

                  <div className="grid grid-cols-2 gap-8 mb-8">
                    <div>
                      <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">
                        Bookings
                      </p>
                      <p className="text-2xl font-black italic tracking-tighter text-gray-900">
                        {listing.bookings}
                      </p>
                    </div>
                    <div>
                      <p className="text-[10px] font-black text-blue-600 uppercase tracking-widest mb-1">
                        Total Revenue
                      </p>
                      <p className="text-2xl font-black italic tracking-tighter text-gray-900">
                        €{listing.earnings}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex gap-3 mt-auto">
                  <button className="flex-1 bg-gray-900 text-white py-4 rounded-2xl hover:bg-blue-600 transition-all font-black uppercase tracking-widest text-[10px]">
                    Edit Listing
                  </button>
                  <button className="flex-1 border-2 border-gray-100 py-4 rounded-2xl hover:border-gray-900 transition-all font-black uppercase tracking-widest text-[10px]">
                    View History
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
