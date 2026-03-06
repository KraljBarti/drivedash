"use client";

import Link from "next/link";
import {
  CheckCircle,
  Calendar,
  MapPin,
  User,
  Car,
  Phone,
  Mail,
  CreditCard,
} from "lucide-react";

export default function BookConfirmationPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Header */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <Link href="/" className="inline-flex items-center gap-2 mb-6 group">
            <Car
              className="text-blue-200 group-hover:text-white transition-colors"
              size={28}
            />
            <span className="text-xl font-bold tracking-tight">DriveDash</span>
          </Link>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-3 italic uppercase tracking-tight">
            Complete Your Booking
          </h1>
          <p className="text-blue-100 text-lg font-medium max-w-xl">
            Almost there! Please verify your information and rental details to
            finalize your reservation.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 -mt-10 pb-20">
        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
          {/* Car Preview Header */}
          <div className="bg-green-50/50 flex items-center gap-4 p-8 border-b border-gray-100">
            <div className="bg-white p-3 rounded-xl shadow-sm">
              <CheckCircle className="text-green-600" size={32} />
            </div>
            <div>
              <p className="text-xs font-bold text-green-700 uppercase tracking-widest mb-1">
                Vehicle Selected
              </p>
              <h2 className="text-2xl font-bold text-gray-900">
                Mercedes-Benz E-Class
              </h2>
              <p className="text-gray-500 text-sm">
                Premium Sedan • Automatic • 2024 Model
              </p>
            </div>
          </div>

          <div className="p-8 space-y-10">
            {/* Section 1: Driver Info */}
            <div>
              <div className="flex items-center gap-2 mb-6">
                <div className="h-8 w-1 bg-blue-600 rounded-full" />
                <h3 className="text-xl font-bold text-gray-900">
                  Driver Information
                </h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                    <User size={14} className="text-blue-600" /> Full Name
                  </label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all placeholder:text-gray-400"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                    <Mail size={14} className="text-blue-600" /> Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="john@example.com"
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                    <Phone size={14} className="text-blue-600" /> Phone Number
                  </label>
                  <input
                    type="tel"
                    placeholder="+385 123 456 789"
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                    <CreditCard size={14} className="text-blue-600" /> License
                    Number
                  </label>
                  <input
                    type="text"
                    placeholder="DL123456789"
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                  />
                </div>
              </div>
            </div>

            {/* Section 2: Rental Details */}
            <div className="pt-8 border-t border-gray-100">
              <div className="flex items-center gap-2 mb-6">
                <div className="h-8 w-1 bg-blue-600 rounded-full" />
                <h3 className="text-xl font-bold text-gray-900">
                  Rental Details
                </h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                    <Calendar size={14} className="text-blue-600" /> Pickup Date
                  </label>
                  <input
                    type="date"
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                    <Calendar size={14} className="text-blue-600" /> Return Date
                  </label>
                  <input
                    type="date"
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                  />
                </div>

                <div className="md:col-span-2 space-y-2">
                  <label className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                    <MapPin size={14} className="text-blue-600" /> Pickup &
                    Return Location
                  </label>
                  <input
                    type="text"
                    placeholder="Zagreb City Center Office"
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                  />
                </div>
              </div>
            </div>

            {/* Terms & Conditions */}
            <div className="bg-blue-50/50 p-6 rounded-2xl border border-blue-100">
              <label className="flex items-start gap-4 cursor-pointer group">
                <input
                  type="checkbox"
                  className="mt-1 w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500 cursor-pointer"
                />
                <div className="text-sm text-gray-600 leading-relaxed">
                  I agree to the{" "}
                  <Link
                    href="/support&safety"
                    className="text-blue-600 font-bold hover:underline"
                  >
                    Terms and Conditions
                  </Link>{" "}
                  and{" "}
                  <Link
                    href="/support&safety"
                    className="text-blue-600 font-bold hover:underline"
                  >
                    Privacy Policy
                  </Link>
                  . I confirm that all provided information is accurate and that
                  I hold a valid driver's license.
                </div>
              </label>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link href="/booking" className="flex-1">
                <button className="w-full px-6 py-4 border-2 border-gray-200 text-gray-600 rounded-xl hover:bg-gray-50 hover:border-gray-300 transition-all font-bold">
                  Edit Selection
                </button>
              </Link>
              <Link href="/booking/payment_options" className="flex-1">
                <button className="w-full px-6 py-4 bg-blue-600 text-white rounded-xl hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-200 transition-all font-bold text-lg active:scale-[0.98]">
                  Confirm & Pay
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
