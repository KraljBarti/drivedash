"use client";

import Link from "next/link";
import Image from "next/image";
import {
  User,
  Mail,
  Phone,
  MapPin,
  Calendar,
  Edit,
  Shield,
  ChevronRight,
  Verified,
  CreditCard,
} from "lucide-react";

// Mock data - In a real app, this would come from an auth hook or database
const userData = {
  name: "John Doe",
  email: "john.doe@example.com",
  phone: "+385 123 456 789",
  location: "Zagreb, Croatia",
  dob: "January 15, 1990",
  memberSince: "November 2023",
  verified: true,
  avatarUrl:
    "https://images.unsplash.com/photo-1683342599486-761e6afce7e4?q=80&w=400&h=400&auto=format&fit=crop",
};

export default function ProfilePage() {
  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      {/* Hero Header */}
      <div className="bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-transparent" />
        <div className="max-w-7xl mx-auto px-6 py-20 relative z-10">
          <h1 className="text-4xl md:text-6xl font-black italic uppercase tracking-tighter mb-2">
            My <span className="text-blue-500">Profile</span>
          </h1>
          <p className="text-gray-400 font-medium text-sm md:text-base tracking-widest uppercase">
            Account Management & Security
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 -mt-12 relative z-20 pb-24">
        {/* Main Profile Card */}
        <div className="bg-white rounded-[2.5rem] shadow-xl shadow-slate-200/60 p-8 md:p-12 mb-8 border border-white">
          <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-8 mb-12">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="relative group">
                <div className="w-32 h-32 rounded-[2.5rem] overflow-hidden border-4 border-slate-50 shadow-inner">
                  <Image
                    src={userData.avatarUrl}
                    alt="Profile"
                    width={128}
                    height={128}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                {userData.verified && (
                  <div className="absolute -bottom-2 -right-2 bg-green-500 text-white p-2 rounded-2xl border-4 border-white shadow-lg">
                    <Verified size={20} />
                  </div>
                )}
              </div>

              <div className="text-center md:text-left">
                <h2 className="text-3xl font-black italic uppercase tracking-tight text-slate-900 mb-1">
                  {userData.name}
                </h2>
                <p className="text-slate-400 font-bold text-xs uppercase tracking-widest mb-3">
                  Member since {userData.memberSince}
                </p>
                <div className="inline-flex items-center gap-2 bg-green-50 px-3 py-1 rounded-full">
                  <Shield size={14} className="text-green-600" />
                  <span className="text-[10px] font-black uppercase text-green-600 tracking-wider">
                    Identity Verified
                  </span>
                </div>
              </div>
            </div>

            <Link href="/profile/edit">
              <button className="flex items-center gap-2 px-8 py-4 bg-slate-900 text-white rounded-2xl hover:bg-slate-800 transition-all font-black uppercase tracking-widest text-[10px] shadow-lg shadow-slate-900/20">
                <Edit size={16} />
                Edit Account
              </button>
            </Link>
          </div>

          {/* Info Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { label: "Full Name", value: userData.name, icon: User },
              { label: "Email Address", value: userData.email, icon: Mail },
              { label: "Phone Number", value: userData.phone, icon: Phone },
              {
                label: "Current Location",
                value: userData.location,
                icon: MapPin,
              },
              { label: "Date of Birth", value: userData.dob, icon: Calendar },
              {
                label: "License Status",
                value: "Verified Active",
                icon: Shield,
                highlight: true,
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="flex items-center gap-4 p-6 bg-slate-50/50 rounded-2xl border border-slate-100 hover:border-blue-100 transition-colors"
              >
                <div className="bg-white p-3 rounded-xl shadow-sm text-blue-600">
                  <item.icon size={20} />
                </div>
                <div>
                  <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1">
                    {item.label}
                  </p>
                  <p
                    className={`font-bold text-slate-900 ${item.highlight ? "text-green-600" : ""}`}
                  >
                    {item.value}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Action Center */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-1">
            <h3 className="text-xl font-black italic uppercase tracking-tight text-slate-900 px-2">
              Action <span className="text-blue-600">Center</span>
            </h3>
          </div>
          <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link href="/profile/verify_license" className="group">
              <div className="h-full flex items-center justify-between p-6 bg-white rounded-[2rem] border border-slate-100 group-hover:border-blue-500 group-hover:shadow-xl transition-all">
                <div className="flex items-center gap-4">
                  <div className="bg-blue-50 p-3 rounded-2xl text-blue-600">
                    <Shield size={24} />
                  </div>
                  <div>
                    <div className="font-black uppercase tracking-tight text-xs text-slate-900">
                      License Verification
                    </div>
                    <div className="text-[10px] font-bold text-slate-400">
                      Manage driving docs
                    </div>
                  </div>
                </div>
                <ChevronRight
                  size={18}
                  className="text-slate-300 group-hover:text-blue-600 transition-colors"
                />
              </div>
            </Link>

            <Link href="/profile/billing" className="group">
              <div className="h-full flex items-center justify-between p-6 bg-white rounded-[2rem] border border-slate-100 group-hover:border-blue-500 group-hover:shadow-xl transition-all">
                <div className="flex items-center gap-4">
                  <div className="bg-blue-50 p-3 rounded-2xl text-blue-600">
                    <CreditCard size={24} />
                  </div>
                  <div>
                    <div className="font-black uppercase tracking-tight text-xs text-slate-900">
                      Payment Methods
                    </div>
                    <div className="text-[10px] font-bold text-slate-400">
                      Cards & Invoices
                    </div>
                  </div>
                </div>
                <ChevronRight
                  size={18}
                  className="text-slate-300 group-hover:text-blue-600 transition-colors"
                />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
