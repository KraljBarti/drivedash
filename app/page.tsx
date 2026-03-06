"use client"; // Required since we use useState and useRouter

import {
  Search,
  MapPin,
  Calendar,
  User,
  Shield,
  Clock,
  Car,
  Zap,
  Users2,
  Baby,
  Navigation,
} from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Image from "next/image"; // Recommended for Next.js optimization
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

// Vehicle type categories
const vehicleTypes = [
  {
    id: "suv",
    name: "SUV",
    icon: Car,
    description: "Spacious & Family-Friendly",
    image:
      "https://images.unsplash.com/photo-1767749995450-7b63ab7cd4fd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBTVVYlMjB2ZWhpY2xlfGVufDF8fHx8MTc3MjcyNDYzN3ww&ixlib=rb-4.1.0&q=80&w=1080",
    count: "450+ vehicles",
  },
  {
    id: "luxury",
    name: "Luxury",
    icon: Shield,
    description: "Premium & Professional",
    image:
      "https://images.unsplash.com/photo-1542906042-f41e62496963?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcG9ydHMlMjBsdXh1cnklMjBzZWRhbnxlbnwxfHx8fDE3NzI3NDA0MTV8MA&ixlib=rb-4.1.0&q=80&w=1080",
    count: "280+ vehicles",
  },
  {
    id: "ev",
    name: "Electric",
    icon: Zap,
    description: "Eco-Friendly & Modern",
    image:
      "https://images.unsplash.com/photo-1593941707874-ef25b8b4a92b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVjdHJpYyUyMGNhciUyMGNoYXJnaW5nfGVufDF8fHx8MTc3Mjc0MDQxNXww&ixlib=rb-4.1.0&q=80&w=1080",
    count: "320+ vehicles",
  },
];

const searchFeatures = [
  { icon: Baby, name: "Child Seats" },
  { icon: Navigation, name: "GPS" },
  { icon: Users2, name: "Extra Space" },
  { icon: Shield, name: "Insurance" },
];

const bookingSteps = [
  {
    number: "1",
    title: "Search",
    description: "Find your perfect car with filters",
    icon: Search,
  },
  {
    number: "2",
    title: "Book",
    description: "Instant confirmation and payment",
    icon: Calendar,
  },
  {
    number: "3",
    title: "Drive",
    description: "Pick up and enjoy your rental",
    icon: Car,
  },
];

export default function HomePage() {
  const router = useRouter();
  const [location, setLocation] = useState("");
  const [pickupDate, setPickupDate] = useState("");
  const [returnDate, setReturnDate] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // In Next.js, we use router.push for navigation
    const query = new URLSearchParams({
      location,
      pickupDate,
      returnDate,
    }).toString();
    router.push(`/browse_cars/search?${query}`);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* ========== HERO WITH SEARCH ========== */}
      <div className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
              backgroundSize: "40px 40px",
            }}
          />
        </div>

        <div className="max-w-7xl mx-auto px-6 py-20 relative z-10">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-black mb-4 tracking-tight">
              The car you book is the car you drive
            </h1>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              No surprises. Search, book, and unlock instantly from any device.
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <form
              onSubmit={handleSearch}
              className="bg-white rounded-2xl shadow-2xl p-8"
            >
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    <MapPin className="inline mr-2" size={16} />
                    Location
                  </label>
                  <input
                    type="text"
                    placeholder="Zagreb, Split, Dubrovnik..."
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 text-gray-900"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    <Calendar className="inline mr-2" size={16} />
                    Pick-up
                  </label>
                  <input
                    type="date"
                    value={pickupDate}
                    onChange={(e) => setPickupDate(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 text-gray-900"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    <Calendar className="inline mr-2" size={16} />
                    Return
                  </label>
                  <input
                    type="date"
                    value={returnDate}
                    onChange={(e) => setReturnDate(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 text-gray-900"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-4 rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all font-bold text-lg shadow-lg flex items-center justify-center gap-2"
              >
                <Search size={24} />
                Search Available Cars
              </button>
            </form>

            <div className="flex flex-wrap justify-center gap-4 mt-6">
              {searchFeatures.map((feature) => {
                const Icon = feature.icon;
                return (
                  <div
                    key={feature.name}
                    className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full flex items-center gap-2 border border-white/20"
                  >
                    <Icon size={16} />
                    <span className="text-sm font-medium">{feature.name}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* ========== VEHICLE TYPE CATEGORIES ========== */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
              Browse by Category
            </h2>
            <p className="text-xl text-gray-600">
              Find the perfect vehicle type for your needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {vehicleTypes.map((type) => {
              const Icon = type.icon;
              return (
                <Link
                  key={type.id}
                  href={`/browse_cars/search?type=${type.id}`}
                  className="group"
                >
                  <div className="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all hover:-translate-y-2">
                    <div className="h-64 overflow-hidden bg-gray-200">
                      <ImageWithFallback
                        src={type.image}
                        alt={type.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="bg-blue-100 p-3 rounded-xl">
                          <Icon className="text-blue-600" size={24} />
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-gray-900">
                            {type.name}
                          </h3>
                          <p className="text-sm text-gray-500">
                            {type.description}
                          </p>
                        </div>
                      </div>
                      <p className="text-blue-600 font-semibold">
                        {type.count}
                      </p>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>

      {/* ========== DASHBOARD FEATURES ========== */}
      <div className="py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-12">
            Manage Everything in One Place
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
              <Calendar className="text-blue-400 mb-4 mx-auto" size={32} />
              <h3 className="text-xl font-bold mb-2">Active Bookings</h3>
              <p className="text-gray-300">
                View and manage all rentals in real-time.
              </p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
              <Clock className="text-blue-400 mb-4 mx-auto" size={32} />
              <h3 className="text-xl font-bold mb-2">Rental History</h3>
              <p className="text-gray-300">
                Access your complete rental history.
              </p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
              <User className="text-blue-400 mb-4 mx-auto" size={32} />
              <h3 className="text-xl font-bold mb-2">Profile Settings</h3>
              <p className="text-gray-300">
                Update preferences and payment info.
              </p>
            </div>
          </div>
          <Link href="/my_rentals">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-lg hover:bg-blue-50 transition-all font-bold shadow-lg">
              Go to Dashboard
            </button>
          </Link>
        </div>
      </div>

      {/* ========== FINAL CTA ========== */}
      <div className="py-24 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-6">
            Ready to Start Driving?
          </h2>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link href="/browse_cars">
              <button className="bg-white text-blue-600 px-10 py-4 rounded-lg hover:bg-blue-50 transition-all font-bold text-lg shadow-lg">
                Find Your Car
              </button>
            </Link>
            <Link href="/support-safety">
              <button className="border-2 border-white text-white px-10 py-4 rounded-lg hover:bg-white hover:text-blue-600 transition-all font-bold text-lg">
                Learn More
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
