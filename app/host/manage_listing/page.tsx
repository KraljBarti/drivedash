"use client";

import { ChevronLeft, Upload, Save, Info } from "lucide-react";
import Link from "next/link";

export default function ManageListingPage() {
  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* Top Navigation */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <Link
            href="/host"
            className="flex items-center gap-2 text-gray-500 hover:text-blue-600 transition-all w-fit font-bold uppercase tracking-widest text-[10px]"
          >
            <ChevronLeft size={16} />
            <span>Back to Dashboard</span>
          </Link>
        </div>
      </div>

      {/* Page Header */}
      <div className="bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-transparent" />
        <div className="max-w-7xl mx-auto px-6 py-16 relative z-10">
          <h1 className="text-4xl md:text-6xl font-black italic uppercase tracking-tighter mb-2">
            Manage <span className="text-blue-500">Listing</span>
          </h1>
          <p className="text-gray-400 font-medium max-w-md uppercase tracking-widest text-xs">
            Showcase your vehicle to the world
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 -mt-10">
        <div className="bg-white rounded-[2.5rem] shadow-xl shadow-gray-200/50 p-8 md:p-12 border border-gray-100">
          <div className="flex items-center gap-3 mb-10">
            <div className="h-1 w-12 bg-blue-600 rounded-full" />
            <h2 className="text-2xl font-black italic uppercase tracking-tighter text-gray-900">
              Vehicle Specifications
            </h2>
          </div>

          <div className="space-y-8">
            {/* Make and Model */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <InputGroup label="Vehicle Make" placeholder="e.g., Porsche" />
              <InputGroup label="Model Name" placeholder="e.g., 911 Carrera" />
            </div>

            {/* Technical Specs */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <InputGroup
                label="Manufacture Year"
                type="number"
                placeholder="2024"
              />

              <div className="space-y-2">
                <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">
                  Seating Capacity
                </label>
                <select className="w-full px-5 py-4 bg-gray-50 border-2 border-transparent rounded-2xl focus:bg-white focus:border-blue-600 focus:outline-none transition-all font-bold text-gray-900 appearance-none">
                  <option value="">Select...</option>
                  <option value="2">2 Seats</option>
                  <option value="4">4 Seats</option>
                  <option value="5">5 Seats</option>
                  <option value="7">7+ Seats</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">
                  Transmission
                </label>
                <select className="w-full px-5 py-4 bg-gray-50 border-2 border-transparent rounded-2xl focus:bg-white focus:border-blue-600 focus:outline-none transition-all font-bold text-gray-900 appearance-none">
                  <option value="">Select...</option>
                  <option value="automatic">Automatic</option>
                  <option value="manual">Manual</option>
                </select>
              </div>
            </div>

            {/* Description */}
            <div className="space-y-2">
              <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">
                Vehicle Description
              </label>
              <textarea
                rows={5}
                placeholder="Share what makes your car unique, any performance upgrades, or special handling instructions..."
                className="w-full px-5 py-4 bg-gray-50 border-2 border-transparent rounded-2xl focus:bg-white focus:border-blue-600 focus:outline-none transition-all font-medium text-gray-900 resize-none"
              />
            </div>

            {/* Pricing and Location */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <InputGroup
                label="Daily Rate (€)"
                type="number"
                placeholder="150"
                helper="Competitive rates increase booking frequency"
              />
              <InputGroup label="Pickup Location" placeholder="Zagreb Center" />
            </div>

            {/* Photo Upload */}
            <div className="pt-6 border-t border-gray-100">
              <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1 block mb-4">
                High-Resolution Gallery
              </label>
              <div className="group relative border-2 border-dashed border-gray-200 rounded-[2rem] p-12 text-center hover:border-blue-600 hover:bg-blue-50/50 transition-all cursor-pointer">
                <div className="bg-blue-50 text-blue-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Upload size={28} />
                </div>
                <p className="text-gray-900 font-black italic uppercase tracking-tighter text-lg mb-1">
                  Upload Car Assets
                </p>
                <p className="text-sm text-gray-500 font-medium">
                  PNG, JPG or HEIC up to 10MB (Max 10 photos)
                </p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-10">
              <Link href="/host" className="flex-1">
                <button className="w-full px-8 py-5 border-2 border-gray-100 text-gray-400 rounded-2xl hover:border-gray-900 hover:text-gray-900 transition-all font-black uppercase tracking-widest text-xs">
                  Discard Changes
                </button>
              </Link>
              <button className="flex-1 px-8 py-5 bg-blue-600 text-white rounded-2xl hover:bg-blue-700 hover:shadow-xl hover:shadow-blue-600/20 transition-all font-black uppercase tracking-widest text-xs flex items-center justify-center gap-3 active:scale-[0.98]">
                <Save size={18} />
                Save & Publish Listing
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function InputGroup({
  label,
  placeholder,
  type = "text",
  helper,
}: {
  label: string;
  placeholder: string;
  type?: string;
  helper?: string;
}) {
  return (
    <div className="space-y-2">
      <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">
        {label}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        className="w-full px-5 py-4 bg-gray-50 border-2 border-transparent rounded-2xl focus:bg-white focus:border-blue-600 focus:outline-none transition-all font-bold text-gray-900 placeholder:text-gray-300 placeholder:font-medium"
      />
      {helper && (
        <div className="flex items-center gap-1 mt-1 ml-1">
          <Info size={12} className="text-blue-500" />
          <p className="text-[10px] text-gray-400 font-medium">{helper}</p>
        </div>
      )}
    </div>
  );
}
