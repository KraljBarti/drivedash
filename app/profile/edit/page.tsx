"use client";

import Link from "next/link";
import Image from "next/image";
import { ChevronLeft, Save, Camera, X } from "lucide-react";

export default function EditProfilePage() {
  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      {/* Navigation Bar */}
      <div className="bg-white/80 backdrop-blur-md border-b border-slate-200 sticky top-0 z-30">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <Link
            href="/profile"
            className="flex items-center gap-2 text-slate-500 hover:text-blue-600 transition-colors w-fit font-bold uppercase tracking-widest text-[10px]"
          >
            <ChevronLeft size={16} />
            <span>Discard & Return</span>
          </Link>
        </div>
      </div>

      {/* Header Section */}
      <div className="bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-transparent" />
        <div className="max-w-7xl mx-auto px-6 py-16 relative z-10 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-black italic uppercase tracking-tighter mb-2">
            Edit <span className="text-blue-500">Identity</span>
          </h1>
          <p className="text-gray-400 font-medium text-sm tracking-widest uppercase">
            Keep your information accurate for seamless rentals
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 -mt-8 relative z-20 pb-24">
        <div className="bg-white rounded-[2.5rem] shadow-xl shadow-slate-200/60 overflow-hidden border border-white">
          <div className="p-8 md:p-12">
            {/* Avatar Upload Section */}
            <div className="flex flex-col items-center mb-12">
              <div className="relative group cursor-pointer">
                <div className="w-32 h-32 rounded-[2.5rem] overflow-hidden border-4 border-slate-50 shadow-lg">
                  <Image
                    src="https://images.unsplash.com/photo-1683342599486-761e6afce7e4?q=80&w=400&h=400&auto=format&fit=crop"
                    alt="Current Avatar"
                    width={128}
                    height={128}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80"
                  />
                </div>
                <div className="absolute inset-0 flex items-center justify-center bg-slate-900/40 rounded-[2.5rem] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Camera className="text-white" size={32} />
                </div>
              </div>
              <button className="mt-4 text-[10px] font-black uppercase tracking-widest text-blue-600 hover:text-blue-700 transition-colors">
                Change Profile Photo
              </button>
            </div>

            {/* Form Fields */}
            <div className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 ml-1">
                    First Name
                  </label>
                  <input
                    type="text"
                    defaultValue="John"
                    className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all font-bold text-slate-900"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 ml-1">
                    Last Name
                  </label>
                  <input
                    type="text"
                    defaultValue="Doe"
                    className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all font-bold text-slate-900"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 ml-1">
                  Email Address
                </label>
                <input
                  type="email"
                  defaultValue="john.doe@example.com"
                  className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all font-bold text-slate-900"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 ml-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    defaultValue="+385 123 456 789"
                    className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all font-bold text-slate-900"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 ml-1">
                    Current Location
                  </label>
                  <input
                    type="text"
                    defaultValue="Zagreb, Croatia"
                    className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all font-bold text-slate-900"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 ml-1">
                  Date of Birth
                </label>
                <input
                  type="date"
                  defaultValue="1990-01-15"
                  className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all font-bold text-slate-900"
                />
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-10 mt-10 border-t border-slate-100">
                <Link href="/profile" className="flex-1 order-2 sm:order-1">
                  <button className="w-full px-8 py-5 border-2 border-slate-100 text-slate-400 rounded-2xl hover:bg-slate-50 hover:text-slate-600 transition-all font-black uppercase tracking-widest text-[10px] flex items-center justify-center gap-2">
                    <X size={16} />
                    Discard Changes
                  </button>
                </Link>
                <Link href="/profile" className="flex-1 order-1 sm:order-2">
                  <button className="w-full px-8 py-5 bg-blue-600 text-white rounded-2xl hover:bg-blue-700 hover:shadow-xl hover:shadow-blue-600/20 transition-all font-black uppercase tracking-widest text-[10px] flex items-center justify-center gap-2">
                    <Save size={16} />
                    Confirm & Save
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Support Note */}
        <p className="mt-8 text-center text-slate-400 text-xs font-medium">
          Need to change your official name or verified ID?{" "}
          <Link
            href="/support&safety/contact"
            className="text-blue-600 font-bold hover:underline"
          >
            Contact our legal team
          </Link>
          .
        </p>
      </div>
    </div>
  );
}
