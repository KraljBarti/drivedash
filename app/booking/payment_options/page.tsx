"use client";

import Link from "next/link";
import {
  CreditCard,
  Shield,
  CheckCircle,
  Lock,
  Car,
  BadgeEuro,
  Wallet,
  CalendarDays,
} from "lucide-react";
import { useState } from "react";

const paymentOptions = [
  {
    id: "card",
    name: "Credit/Debit Card",
    description: "Visa, Mastercard, American Express",
    icon: CreditCard,
    popular: true,
  },
  {
    id: "paypal",
    name: "PayPal",
    description: "Fast and secure online payment",
    icon: Wallet,
    popular: false,
  },
  {
    id: "transfer",
    name: "Bank Transfer",
    description: "Direct wire transfer (takes 1-2 days)",
    icon: CheckCircle,
    popular: false,
  },
];

export default function PaymentOptionsPage() {
  const [selectedMethod, setSelectedMethod] = useState("card");

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <Link href="/" className="inline-flex items-center gap-2 mb-6 group">
            <Car
              className="text-blue-200 group-hover:text-white transition-colors"
              size={28}
            />
            <span className="text-xl font-bold tracking-tight">DriveDash</span>
          </Link>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-3 italic uppercase tracking-tight">
            Payment Options
          </h1>
          <p className="text-blue-100 text-lg font-medium">
            Choose your preferred payment method and finalize your trip
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 -mt-10">
        {/* Security Notice */}
        <div className="bg-blue-50 border border-blue-100 rounded-2xl p-6 mb-8 flex items-start gap-4 shadow-sm">
          <div className="bg-white p-2 rounded-lg shadow-sm">
            <Lock className="text-blue-600" size={20} />
          </div>
          <div>
            <h3 className="text-blue-900 font-bold text-sm mb-1 uppercase tracking-wider">
              Secure Checkout
            </h3>
            <p className="text-sm text-blue-800/80 leading-relaxed">
              Your payment information is encrypted with bank-grade 256-bit SSL
              technology. We never store your full card details on our servers.
            </p>
          </div>
        </div>

        {/* Payment Selection */}
        <div className="grid grid-cols-1 gap-4 mb-10">
          {paymentOptions.map((option) => {
            const Icon = option.icon;
            const isSelected = selectedMethod === option.id;
            return (
              <label
                key={option.id}
                className={`group block bg-white rounded-2xl p-6 border-2 transition-all cursor-pointer shadow-sm hover:shadow-md ${
                  isSelected
                    ? "border-blue-600 ring-4 ring-blue-50"
                    : "border-gray-100"
                }`}
                onClick={() => setSelectedMethod(option.id)}
              >
                <div className="flex items-center gap-5">
                  <div
                    className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all ${
                      isSelected
                        ? "border-blue-600 bg-blue-600"
                        : "border-gray-300"
                    }`}
                  >
                    {isSelected && (
                      <div className="w-2 h-2 bg-white rounded-full" />
                    )}
                  </div>

                  <div
                    className={`p-3 rounded-xl transition-colors ${
                      isSelected
                        ? "bg-blue-100 text-blue-600"
                        : "bg-gray-50 text-gray-400 group-hover:bg-gray-100"
                    }`}
                  >
                    <Icon size={24} />
                  </div>

                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-0.5">
                      <h3
                        className={`font-bold ${isSelected ? "text-gray-900" : "text-gray-500"}`}
                      >
                        {option.name}
                      </h3>
                      {option.popular && (
                        <span className="bg-green-100 text-green-700 px-2 py-0.5 rounded-full text-[10px] font-black uppercase tracking-tighter">
                          Recommended
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-gray-500">
                      {option.description}
                    </p>
                  </div>
                </div>
              </label>
            );
          })}
        </div>

        {/* Card Details Form - Only show if card is selected */}
        {selectedMethod === "card" && (
          <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8 mb-8 animate-in fade-in slide-in-from-top-4 duration-500">
            <h2 className="text-xl font-black text-gray-900 mb-8 uppercase tracking-tight flex items-center gap-2">
              <CreditCard className="text-blue-600" size={24} />
              Card Details
            </h2>
            <div className="space-y-6">
              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-500 uppercase tracking-widest ml-1">
                  Cardholder Name
                </label>
                <input
                  type="text"
                  placeholder="JOHN DOE"
                  className="w-full px-5 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:ring-2 focus:ring-blue-600 focus:bg-white outline-none transition-all font-medium uppercase"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-500 uppercase tracking-widest ml-1">
                  Card Number
                </label>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="0000 0000 0000 0000"
                    className="w-full pl-14 pr-5 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:ring-2 focus:ring-blue-600 focus:bg-white outline-none transition-all font-mono text-lg"
                  />
                  <CreditCard
                    className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400"
                    size={20}
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-500 uppercase tracking-widest ml-1">
                    Expiry Date
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="MM/YY"
                      className="w-full pl-12 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:ring-2 focus:ring-blue-600 focus:bg-white outline-none transition-all font-mono"
                    />
                    <CalendarDays
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                      size={18}
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-500 uppercase tracking-widest ml-1">
                    CVV
                  </label>
                  <div className="relative">
                    <input
                      type="password"
                      placeholder="•••"
                      className="w-full pl-12 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:ring-2 focus:ring-blue-600 focus:bg-white outline-none transition-all font-mono"
                    />
                    <Shield
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                      size={18}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Order Summary */}

        <div className="bg-gray-900 rounded-3xl shadow-2xl p-8 mb-8 text-white">
          <h3 className="text-sm font-bold text-blue-400 uppercase tracking-widest mb-6">
            Price Breakdown
          </h3>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-gray-400">
                Mercedes-Benz E-Class (3 Days)
              </span>
              <span className="font-bold">€255.00</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-400">Full Coverage Insurance</span>
              <span className="font-bold">€45.00</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-400">Transaction Fee</span>
              <span className="font-bold">€15.00</span>
            </div>
            <div className="pt-6 border-t border-gray-800 flex justify-between items-end">
              <div>
                <p className="text-xs font-bold text-blue-400 uppercase mb-1">
                  Total Amount
                </p>
                <span className="text-4xl font-black italic tracking-tighter">
                  €315.00
                </span>
              </div>
              <BadgeEuro size={40} className="text-blue-600 opacity-50" />
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-4">
          <Link href="/booking/book" className="flex-1">
            <button className="w-full px-6 py-4 border-2 border-gray-200 text-gray-600 rounded-2xl hover:bg-gray-50 transition-all font-bold">
              Back to Details
            </button>
          </Link>
          <Link href="/my_rentals" className="flex-1">
            <button className="w-full px-6 py-4 bg-blue-600 text-white rounded-2xl hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-200 transition-all font-bold text-lg active:scale-[0.98]">
              Complete Booking
            </button>
          </Link>
        </div>

        <p className="text-[10px] text-gray-400 text-center mt-8 uppercase font-bold tracking-widest leading-loose">
          Secure payment gateway • Protected by DriveDash Guarantee <br />
          By clicking complete, you agree to our Rental Agreement and Privacy
          Policy.
        </p>
      </div>
    </div>
  );
}
