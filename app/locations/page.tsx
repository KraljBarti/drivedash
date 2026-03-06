"use client";

import Link from "next/link";
import {
  MapPin,
  Search,
  Car,
  Users,
  TrendingUp,
  ArrowRight,
} from "lucide-react";

const featuredCities = [
  {
    name: "Zagreb",
    region: "Central Croatia",
    cars: 850,
    image:
      "https://images.unsplash.com/photo-1578666517422-97d3ca5c5cf0?q=80&w=1080",
    popular: true,
  },
  {
    name: "Split",
    region: "Dalmatia",
    cars: 620,
    image:
      "https://images.unsplash.com/photo-1631456520779-7b09bc9c15bd?q=80&w=1080",
    popular: true,
  },
  {
    name: "Dubrovnik",
    region: "Southern Dalmatia",
    cars: 480,
    image:
      "https://images.unsplash.com/photo-1623998022049-6fd5add63d8b?q=80&w=1080",
    popular: true,
  },
  {
    name: "Rijeka",
    region: "Kvarner",
    cars: 340,
    image:
      "https://images.unsplash.com/photo-1621277169649-a992dec5ac8b?q=80&w=1080",
    popular: false,
  },
  {
    name: "Zadar",
    region: "Northern Dalmatia",
    cars: 290,
    image:
      "https://images.unsplash.com/photo-1562519350-b7e58e05e733?q=80&w=1080",
    popular: false,
  },
  {
    name: "Pula",
    region: "Istria",
    cars: 380,
    image:
      "https://images.unsplash.com/photo-1624623934098-8d3bd5e6c558?q=80&w=1080",
    popular: false,
  },
];

const allCities = [
  { name: "Zagreb", cars: 850 },
  { name: "Split", cars: 620 },
  { name: "Dubrovnik", cars: 480 },
  { name: "Pula", cars: 380 },
  { name: "Rijeka", cars: 340 },
  { name: "Zadar", cars: 290 },
  { name: "Osijek", cars: 180 },
  { name: "Šibenik", cars: 150 },
  { name: "Poreč", cars: 140 },
  { name: "Rovinj", cars: 130 },
  { name: "Slavonski Brod", cars: 95 },
  { name: "Karlovac", cars: 85 },
];

const stats = [
  { label: "Cities", value: "50+", icon: MapPin },
  { label: "Total Cars", value: "5,000+", icon: Car },
  { label: "Active Hosts", value: "2,500+", icon: Users },
  { label: "Growth", value: "+15%", icon: TrendingUp },
];

export default function LocationsPage() {
  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* Dynamic Header */}
      <div className="bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-transparent" />
        <div className="max-w-7xl mx-auto px-6 py-24 relative z-10">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 bg-blue-600/10 border border-blue-500/30 px-4 py-2 rounded-full mb-6">
              <MapPin size={16} className="text-blue-500" />
              <span className="text-[10px] font-black uppercase tracking-widest text-blue-400">
                Nationwide Coverage
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-black italic uppercase tracking-tighter mb-4">
              Explore <span className="text-blue-500">Locations</span>
            </h1>
            <p className="text-gray-400 font-medium max-w-xl mx-auto mb-10 text-sm md:text-base">
              From the coast of Dalmatia to the heart of Zagreb, find the
              perfect ride waiting exactly where you need it.
            </p>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
              <div className="relative">
                <Search
                  className="absolute left-6 top-1/2 transform -translate-y-1/2 text-gray-400"
                  size={20}
                />
                <input
                  type="text"
                  placeholder="Enter city, region, or airport code..."
                  className="w-full pl-16 pr-6 py-6 rounded-2xl bg-slate-800 border-2 border-slate-700 text-white focus:outline-none focus:border-blue-500 transition-all font-bold placeholder:text-gray-500"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="max-w-7xl mx-auto px-6 -mt-10 mb-20 relative z-20">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.label}
                className="bg-white rounded-3xl shadow-xl shadow-gray-200/50 p-8 border border-gray-100 flex flex-col items-center text-center group hover:border-blue-500 transition-all"
              >
                <div className="p-4 rounded-2xl bg-gray-50 text-gray-900 mb-4 group-hover:bg-blue-600 group-hover:text-white transition-all">
                  <Icon size={24} />
                </div>
                <div className="text-3xl font-black italic tracking-tighter text-gray-900 mb-1">
                  {stat.value}
                </div>
                <div className="text-[10px] font-black text-gray-400 uppercase tracking-widest">
                  {stat.label}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Featured Cities Grid */}
      <div className="max-w-7xl mx-auto px-6 mb-24">
        <div className="flex items-end justify-between mb-12">
          <div>
            <h2 className="text-4xl font-black italic uppercase tracking-tighter text-gray-900">
              Popular Hubs
            </h2>
            <div className="h-1 w-20 bg-blue-600 mt-2" />
          </div>
          <p className="hidden md:block text-gray-400 font-bold uppercase tracking-widest text-xs">
            High Demand Areas
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {featuredCities.map((city) => (
            <Link
              key={city.name}
              href={`/browse_cars?location=${encodeURIComponent(city.name)}`}
              className="group relative bg-white rounded-[2.5rem] shadow-sm overflow-hidden border border-gray-100 hover:shadow-2xl transition-all duration-500"
            >
              {city.popular && (
                <div className="absolute top-6 left-6 z-20">
                  <span className="bg-blue-600 text-white px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest shadow-lg">
                    Trending
                  </span>
                </div>
              )}
              <div className="h-72 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
                <img
                  src={city.image}
                  alt={city.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="p-8">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-2xl font-black italic uppercase tracking-tighter text-gray-900 group-hover:text-blue-600 transition-colors">
                    {city.name}
                  </h3>
                  <ArrowRight className="text-gray-300 group-hover:text-blue-600 transform group-hover:translate-x-2 transition-all" />
                </div>
                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-6">
                  {city.region}
                </p>
                <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-2xl">
                  <Car className="text-blue-600" size={18} />
                  <span className="text-sm font-black text-gray-900 uppercase tracking-tight">
                    {city.cars}{" "}
                    <span className="text-gray-400 font-bold">
                      Vehicles Nearby
                    </span>
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* All Cities List Section */}
      <div className="bg-white py-24 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16">
            <h2 className="text-3xl font-black italic uppercase tracking-tighter text-gray-900 mb-2 text-center">
              Complete Directory
            </h2>
            <p className="text-center text-gray-400 font-bold uppercase tracking-widest text-xs italic">
              Scroll to find your specific destination
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {allCities.map((city) => (
              <Link
                key={city.name}
                href={`/browse_cars?location=${encodeURIComponent(city.name)}`}
                className="flex items-center justify-between p-6 bg-gray-50 rounded-2xl border-2 border-transparent hover:border-blue-600 hover:bg-white transition-all group"
              >
                <div>
                  <h3 className="font-black italic uppercase tracking-tighter text-gray-900 group-hover:text-blue-600">
                    {city.name}
                  </h3>
                  <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">
                    {city.cars} Available
                  </p>
                </div>
                <MapPin
                  size={18}
                  className="text-gray-300 group-hover:text-blue-600"
                />
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Modern CTA */}
      <div className="max-w-5xl mx-auto px-6 mt-24">
        <div className="bg-slate-900 rounded-[3rem] p-12 md:p-20 relative overflow-hidden text-center">
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/20 blur-[100px] rounded-full" />
          <h2 className="text-3xl md:text-5xl font-black italic uppercase tracking-tighter text-white mb-6 relative z-10">
            Missing Your <span className="text-blue-500">City?</span>
          </h2>
          <p className="text-gray-400 font-medium mb-10 relative z-10 max-w-lg mx-auto uppercase tracking-widest text-xs">
            We're scaling fast. Let us know where we should drop our next fleet.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
            <Link
              href="/browse_cars"
              className="bg-blue-600 text-white px-10 py-5 rounded-2xl font-black uppercase tracking-widest text-sm hover:bg-blue-700 hover:shadow-xl hover:shadow-blue-600/20 transition-all active:scale-95"
            >
              Browse Fleet
            </Link>
            <Link
              href="/support&safety/contact"
              className="border-2 border-white/10 text-white px-10 py-5 rounded-2xl font-black uppercase tracking-widest text-sm hover:bg-white hover:text-slate-900 transition-all active:scale-95"
            >
              Request Location
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
