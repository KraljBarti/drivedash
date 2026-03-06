"use client";

import Link from "next/link";
import {
  CreditCard,
  Clock,
  CheckCircle,
  AlertCircle,
  RefreshCw,
  ArrowRight,
  ShieldCheck,
  ChevronRight,
} from "lucide-react";

const depositAmounts = [
  {
    category: "Economy Cars",
    amount: "€300",
    description: "Compact cars and small vehicles",
  },
  {
    category: "Standard Cars",
    amount: "€500",
    description: "Mid-size sedans and SUVs",
  },
  {
    category: "Premium Cars",
    amount: "€1,000",
    description: "Luxury and high-performance vehicles",
  },
];

const refundTimeline = [
  {
    day: "Day 0",
    event: "Vehicle Return",
    description: "Final drop-off and physical condition inspection report.",
  },
  {
    day: "Day 1-2",
    event: "Initial Review",
    description:
      "Technical team verifies mechanical integrity and cleanliness.",
  },
  {
    day: "Day 3-5",
    event: "Final Check",
    description: "Administrative check for new traffic fines or toll charges.",
  },
  {
    day: "Day 5-7",
    event: "Refund Processed",
    description: "Funds released to your original payment method.",
  },
];

const deductions = [
  {
    title: "Vehicle Damage",
    detail: "Scratches or dents beyond wear and tear.",
    icon: AlertCircle,
  },
  {
    title: "Missing Fuel",
    detail: "Market rate plus €30 refueling service fee.",
    icon: AlertCircle,
  },
  {
    title: "Traffic Fines",
    detail: "Fines incurred + €5 processing fee per incident.",
    icon: AlertCircle,
  },
  {
    title: "Late Return",
    detail: "€20 per hour after the 59-min grace period.",
    icon: AlertCircle,
  },
  {
    title: "Deep Cleaning",
    detail: "€50 fee for upholstery stains or smoke odor.",
    icon: AlertCircle,
  },
  {
    title: "Unpaid Tolls",
    detail: "Actual toll cost plus admin handling fee.",
    icon: AlertCircle,
  },
];

export default function DepositPage() {
  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      {/* Header */}
      <div className="bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-transparent" />
        <div className="max-w-7xl mx-auto px-6 py-24 relative z-10 text-center">
          <div className="bg-blue-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-xl shadow-blue-600/20 rotate-3">
            <CreditCard className="text-white" size={32} />
          </div>
          <h1 className="text-4xl md:text-6xl font-black italic uppercase tracking-tighter mb-4">
            Deposit <span className="text-blue-500">Security</span>
          </h1>
          <p className="text-gray-400 font-medium max-w-xl mx-auto text-sm uppercase tracking-widest">
            Fair holds, fast refunds. Learn how we protect our fleet and your
            funds.
          </p>
        </div>
      </div>

      {/* Deposit Values */}
      <div className="max-w-7xl mx-auto px-6 -mt-12 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {depositAmounts.map((item) => (
            <div
              key={item.category}
              className="bg-white rounded-[2rem] p-10 border border-gray-100 shadow-xl shadow-slate-200/50 group hover:border-blue-600 transition-all duration-300"
            >
              <h3 className="text-xs font-black uppercase tracking-widest text-gray-400 mb-2 group-hover:text-blue-600 transition-colors">
                {item.category}
              </h3>
              <div className="text-5xl font-black italic tracking-tighter text-gray-900 mb-4">
                {item.amount}
              </div>
              <p className="text-sm text-gray-500 font-medium">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-24 grid grid-cols-1 lg:grid-cols-2 gap-20">
        {/* Policy Details */}
        <div>
          <h2 className="text-3xl font-black italic uppercase tracking-tighter text-gray-900 mb-8">
            Policy <span className="text-blue-600">Overview</span>
          </h2>
          <div className="space-y-4">
            {[
              "The deposit is an authorization hold, not a direct charge.",
              "Debit card holds may take longer to process than credit cards.",
              "Amounts vary if you select 'Premium Protection' insurance.",
              "Holds are released automatically upon verified return.",
            ].map((text, i) => (
              <div
                key={i}
                className="flex gap-4 p-5 bg-white rounded-2xl border border-gray-100 shadow-sm"
              >
                <ShieldCheck className="text-blue-600 shrink-0" size={24} />
                <p className="text-sm font-bold text-gray-700 leading-relaxed">
                  {text}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Timeline */}
        <div className="bg-white rounded-[3rem] p-10 border border-gray-100 shadow-sm">
          <div className="flex items-center gap-3 mb-10">
            <RefreshCw className="text-blue-600" size={24} />
            <h2 className="text-xl font-black uppercase tracking-widest">
              Refund Timeline
            </h2>
          </div>

          <div className="space-y-12 relative">
            <div className="absolute left-[15px] top-2 bottom-2 w-0.5 bg-gray-100" />
            {refundTimeline.map((item, idx) => (
              <div key={idx} className="relative pl-12">
                <div className="absolute left-0 top-1 w-8 h-8 bg-blue-50 rounded-full border-2 border-blue-600 flex items-center justify-center z-10">
                  <div className="w-2 h-2 bg-blue-600 rounded-full" />
                </div>
                <div className="text-[10px] font-black uppercase tracking-[0.2em] text-blue-600 mb-1">
                  {item.day}
                </div>
                <h4 className="text-lg font-black italic uppercase tracking-tight text-gray-900 mb-1">
                  {item.event}
                </h4>
                <p className="text-sm text-gray-500 font-medium">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Deductions Section */}
      <div className="max-w-7xl mx-auto px-6 py-20 bg-slate-900 rounded-[3rem] mb-24 overflow-hidden relative">
        <div className="absolute top-0 right-0 p-20 opacity-10">
          <AlertCircle size={200} className="text-white" />
        </div>

        <div className="relative z-10">
          <div className="mb-12 text-center md:text-left">
            <h2 className="text-3xl font-black italic uppercase tracking-tighter text-white">
              Avoid <span className="text-orange-500">Deductions</span>
            </h2>
            <p className="text-gray-400 text-xs font-bold uppercase tracking-widest mt-2">
              Ensure your full deposit is returned by following these guidelines
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {deductions.map((item, i) => (
              <div
                key={i}
                className="bg-white/5 border border-white/10 p-6 rounded-2xl hover:bg-white/10 transition-colors group"
              >
                <item.icon
                  className="text-orange-500 mb-4 group-hover:scale-110 transition-transform"
                  size={24}
                />
                <h3 className="text-white font-black uppercase tracking-tight text-sm mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-400 text-xs font-medium leading-relaxed">
                  {item.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer CTA */}
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-black italic uppercase tracking-tighter mb-8">
          Still Have <span className="text-blue-600">Questions?</span>
        </h2>
        <div className="flex gap-4 justify-center flex-wrap">
          <Link href="/support&safety/contact">
            <button className="bg-blue-600 text-white px-10 py-5 rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-blue-700 transition-all flex items-center gap-2">
              Contact Support <ChevronRight size={16} />
            </button>
          </Link>
          <Link href="/pricing">
            <button className="bg-gray-900 text-white px-10 py-5 rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-slate-800 transition-all">
              View All Pricing
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
