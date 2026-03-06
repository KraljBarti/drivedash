"use client";

import {
  Calendar,
  CreditCard,
  Shield,
  CheckCircle,
  Car,
  ArrowRight,
  Info,
} from "lucide-react";
import Link from "next/link";

const steps = [
  {
    number: 1,
    title: "Select Dates",
    description: "Pickup & Return",
    icon: Calendar,
    status: "active",
  },
  {
    number: 2,
    title: "Driver Info",
    description: "Personal Details",
    icon: Car,
    status: "pending",
  },
  {
    number: 3,
    title: "Payment",
    description: "Secure Checkout",
    icon: CreditCard,
    status: "pending",
  },
];

const paymentMethods = [
  {
    name: "Credit/Debit Card",
    description: "Visa, Mastercard, Amex",
    id: "card",
  },
  { name: "PayPal", description: "Express secure checkout", id: "paypal" },
];

export default function BookingPage() {
  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="flex items-center justify-between flex-wrap gap-8">
            <div>
              <Link
                href="/"
                className="inline-flex items-center gap-2 mb-6 group"
              >
                <Car
                  className="text-blue-200 group-hover:text-white transition-colors"
                  size={28}
                />
                <span className="text-xl font-bold tracking-tight">
                  DriveDash
                </span>
              </Link>
              <h1 className="text-4xl md:text-5xl font-extrabold italic uppercase tracking-tighter mb-3">
                Reserve Your Ride
              </h1>
              <p className="text-blue-100 text-lg font-medium">
                Complete the steps below to secure your vehicle.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-md px-6 py-5 rounded-2xl border border-white/20 shadow-xl">
              <div className="flex items-center gap-3 mb-2">
                <div className="bg-blue-500 p-2 rounded-lg">
                  <Shield size={20} className="text-white" />
                </div>
                <span className="font-bold uppercase tracking-widest text-sm">
                  Secure Booking
                </span>
              </div>
              <p className="text-xs text-blue-100 font-medium">
                Verified 256-bit SSL Protection
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Booking Steps Indicator */}

      <div className="max-w-7xl mx-auto px-6 -mt-10 mb-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {steps.map((step) => {
            const Icon = step.icon;
            const isActive = step.status === "active";
            return (
              <div
                key={step.number}
                className={`bg-white rounded-2xl p-6 shadow-sm border-2 transition-all ${
                  isActive
                    ? "border-blue-600 shadow-blue-100 shadow-lg scale-[1.02]"
                    : "border-transparent opacity-80"
                }`}
              >
                <div className="flex items-center gap-4">
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center text-lg font-black ${
                      isActive
                        ? "bg-blue-600 text-white"
                        : "bg-gray-100 text-gray-400"
                    }`}
                  >
                    {step.number}
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <Icon
                        size={16}
                        className={isActive ? "text-blue-600" : "text-gray-400"}
                      />
                      <h3
                        className={`font-bold uppercase tracking-tight ${isActive ? "text-gray-900" : "text-gray-500"}`}
                      >
                        {step.title}
                      </h3>
                    </div>
                    <p className="text-xs text-gray-500 font-medium">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Left Side: Form Selection */}
          <div className="lg:col-span-2 space-y-8">
            {/* 1. Date Selection Card */}
            <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-1.5 h-8 bg-blue-600 rounded-full" />
                <h2 className="text-2xl font-black text-gray-900 uppercase tracking-tight">
                  Select Rental Dates
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className="text-xs font-bold text-gray-500 uppercase tracking-widest ml-1">
                    Pickup Date
                  </label>
                  <div className="relative">
                    <input
                      type="date"
                      className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-blue-600 focus:bg-white outline-none transition-all font-semibold"
                    />
                    <Calendar
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-blue-600"
                      size={20}
                    />
                  </div>
                </div>

                <div className="space-y-3">
                  <label className="text-xs font-bold text-gray-500 uppercase tracking-widest ml-1">
                    Return Date
                  </label>
                  <div className="relative">
                    <input
                      type="date"
                      className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-blue-600 focus:bg-white outline-none transition-all font-semibold"
                    />
                    <Calendar
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-blue-600"
                      size={20}
                    />
                  </div>
                </div>
              </div>

              <div className="mt-8 p-4 bg-blue-50 rounded-2xl border border-blue-100 flex items-start gap-3">
                <Info size={20} className="text-blue-600 shrink-0 mt-0.5" />
                <p className="text-sm text-blue-800 font-medium leading-relaxed">
                  Most rentals require a minimum of 24 hours. You can modify
                  these dates in the next step if needed.
                </p>
              </div>
            </div>

            {/* 2. Quick Payment Preview (Optional/Reference) */}
            <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8">
              <h2 className="text-xl font-bold text-gray-900 mb-6 uppercase tracking-tight">
                Preferred Payment
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {paymentMethods.map((method) => (
                  <label
                    key={method.id}
                    className="group flex items-center gap-4 p-5 border-2 border-gray-100 rounded-2xl hover:border-blue-600 cursor-pointer transition-all hover:bg-blue-50/30"
                  >
                    <input
                      type="radio"
                      name="payment_pref"
                      className="w-5 h-5 text-blue-600"
                    />
                    <div>
                      <div className="font-bold text-gray-900">
                        {method.name}
                      </div>
                      <div className="text-xs text-gray-500 font-medium">
                        {method.description}
                      </div>
                    </div>
                  </label>
                ))}
              </div>
            </div>
          </div>

          {/* Right Side: Sticky Summary */}
          <div className="lg:col-span-1">
            <div className="bg-gray-900 rounded-3xl shadow-2xl p-8 text-white sticky top-10 border border-gray-800">
              <h2 className="text-sm font-bold text-blue-400 uppercase tracking-widest mb-8 flex items-center gap-2">
                <CheckCircle size={16} />
                Live Summary
              </h2>

              <div className="space-y-6 mb-8">
                <div className="flex justify-between items-center text-sm border-b border-gray-800 pb-4">
                  <span className="text-gray-400 font-medium">
                    Vehicle Base Rate
                  </span>
                  <span className="font-bold text-lg">
                    €85.00 <span className="text-xs text-gray-500">/day</span>
                  </span>
                </div>

                <div className="flex justify-between items-center text-sm border-b border-gray-800 pb-4">
                  <span className="text-gray-400 font-medium">
                    Rental Period
                  </span>
                  <span className="font-bold">3 Days</span>
                </div>

                <div className="flex justify-between items-center text-sm border-b border-gray-800 pb-4">
                  <span className="text-gray-400 font-medium">
                    Standard Insurance
                  </span>
                  <span className="font-bold text-green-400">INCLUDED</span>
                </div>

                <div className="pt-4 flex justify-between items-end">
                  <div>
                    <p className="text-[10px] font-bold text-blue-400 uppercase mb-1">
                      Estimated Total
                    </p>
                    <span className="text-4xl font-black italic tracking-tighter">
                      €255.00
                    </span>
                  </div>
                </div>
              </div>

              <Link href="/booking/book">
                <button className="group w-full bg-blue-600 text-white py-5 rounded-2xl hover:bg-blue-700 transition-all font-bold text-lg flex items-center justify-center gap-3 active:scale-[0.98] shadow-xl shadow-blue-900/20">
                  Next Step: Driver Details
                  <ArrowRight
                    size={20}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </button>
              </Link>

              <p className="text-[10px] text-gray-500 text-center mt-6 uppercase font-bold tracking-widest leading-loose">
                Prices include all local taxes <br />
                Free cancellation up to 48h before
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
