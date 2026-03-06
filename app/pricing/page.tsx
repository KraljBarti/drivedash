"use client";

import Link from "next/link";
import {
  DollarSign,
  Shield,
  FileText,
  AlertCircle,
  CheckCircle,
  Clock,
  TrendingUp,
  ArrowRight,
  Zap,
} from "lucide-react";

const pricingTiers = [
  {
    name: "Economy",
    priceRange: "€25-40",
    description: "Perfect for city driving and daily errands",
    features: [
      "Compact & fuel-efficient",
      "Easy to park anywhere",
      "Basic insurance included",
      "200 km/day limit",
      "Manual transmission",
    ],
    popular: false,
  },
  {
    name: "Standard",
    priceRange: "€45-70",
    description: "Great balance of comfort and affordability",
    features: [
      "Mid-size sedans & SUVs",
      "Comfortable for 5 passengers",
      "Enhanced insurance options",
      "Unlimited mileage",
      "Automatic transmission",
    ],
    popular: true,
  },
  {
    name: "Premium",
    priceRange: "€90-150+",
    description: "Luxury vehicles for special occasions",
    features: [
      "High-end brands (BMW, Audi)",
      "Advanced safety features",
      "Premium insurance included",
      "Unlimited mileage",
      "Concierge service",
    ],
    popular: false,
  },
];

const additionalFees = [
  { name: "Young Driver (18-25)", fee: "€15/day", icon: Zap },
  { name: "Additional Driver", fee: "€10/day", icon: Clock },
  { name: "GPS Navigation", fee: "€5/day", icon: Zap },
  { name: "Child Safety Seat", fee: "€8/day", icon: Shield },
  { name: "Late Return Fee", fee: "€20/hour", icon: AlertCircle },
  { name: "Cleaning Fee", fee: "€50", icon: AlertCircle },
];

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* Header Section */}
      <div className="bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-transparent" />
        <div className="max-w-7xl mx-auto px-6 py-24 relative z-10">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/30 px-4 py-2 rounded-full mb-6">
              <DollarSign size={16} className="text-blue-500" />
              <span className="text-[10px] font-black uppercase tracking-widest text-blue-400">
                Transparent Pricing
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-black italic uppercase tracking-tighter mb-4">
              Value & <span className="text-blue-500">Policies</span>
            </h1>
            <p className="text-gray-400 font-medium max-w-2xl mx-auto text-sm md:text-base">
              No hidden surcharges. No surprises at the counter. Just
              straightforward pricing for the best fleet in Croatia.
            </p>
          </div>
        </div>
      </div>

      {/* Pricing Tiers Section */}
      <div className="max-w-7xl mx-auto px-6 -mt-12 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingTiers.map((tier) => (
            <div
              key={tier.name}
              className={`bg-white rounded-[2.5rem] shadow-xl overflow-hidden transition-all duration-500 group border-2 ${
                tier.popular ? "border-blue-600 scale-105" : "border-white"
              }`}
            >
              {tier.popular && (
                <div className="bg-blue-600 text-white text-center py-2 text-[10px] font-black uppercase tracking-widest">
                  Most Popular Choice
                </div>
              )}
              <div className="p-10">
                <h3 className="text-2xl font-black italic uppercase tracking-tighter text-gray-900 mb-2">
                  {tier.name}
                </h3>
                <div className="flex items-baseline gap-1 mb-6">
                  <span className="text-4xl font-black italic text-blue-600">
                    {tier.priceRange}
                  </span>
                  <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">
                    / Day
                  </span>
                </div>
                <p className="text-gray-500 text-sm font-medium mb-8 leading-relaxed">
                  {tier.description}
                </p>

                <div className="h-[1px] w-full bg-gray-100 mb-8" />

                <ul className="space-y-4 mb-10">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3">
                      <div className="bg-green-100 p-1 rounded-full shrink-0">
                        <CheckCircle className="text-green-600" size={14} />
                      </div>
                      <span className="text-sm font-bold text-gray-700">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <Link href="/browse_cars">
                  <button
                    className={`w-full py-4 rounded-2xl font-black uppercase tracking-widest text-xs transition-all flex items-center justify-center gap-2 ${
                      tier.popular
                        ? "bg-blue-600 text-white hover:bg-blue-700 shadow-lg shadow-blue-600/20"
                        : "bg-gray-900 text-white hover:bg-slate-800"
                    }`}
                  >
                    Browse {tier.name}
                    <ArrowRight size={16} />
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Additional Fees Grid */}
      <div className="max-w-7xl mx-auto px-6 py-24">
        <div className="flex flex-col md:flex-row items-end justify-between mb-12 gap-4">
          <div>
            <h2 className="text-3xl font-black italic uppercase tracking-tighter text-gray-900">
              Service Add-ons
            </h2>
            <div className="h-1 w-20 bg-blue-600 mt-2" />
          </div>
          <p className="text-gray-400 font-bold uppercase tracking-widest text-[10px]">
            Customize your experience
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {additionalFees.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.name}
                className="bg-white rounded-2xl p-6 border border-gray-100 flex items-center justify-between group hover:border-blue-600 transition-all shadow-sm hover:shadow-md"
              >
                <div className="flex items-center gap-4">
                  <div className="bg-gray-50 p-3 rounded-xl group-hover:bg-blue-50 transition-colors">
                    <Icon
                      className="text-gray-400 group-hover:text-blue-600"
                      size={20}
                    />
                  </div>
                  <span className="font-bold text-gray-900 text-sm uppercase tracking-tight">
                    {item.name}
                  </span>
                </div>
                <span className="font-black text-blue-600 italic tracking-tighter text-lg">
                  {item.fee}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Policy Links */}
      <div className="max-w-7xl mx-auto px-6 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              title: "Insurance Plans",
              desc: "Comprehensive coverage options for every trip.",
              icon: Shield,
              link: "/pricing/insurance",
            },
            {
              title: "Deposit Policy",
              desc: "Simple security deposit and refund process.",
              icon: TrendingUp,
              link: "/pricing/deposit",
            },
            {
              title: "Rental Terms",
              desc: "Legal framework and rental requirements.",
              icon: FileText,
              link: "/pricing/terms",
            },
          ].map((card) => (
            <Link
              key={card.title}
              href={card.link}
              className="bg-white p-8 rounded-[2rem] border border-gray-100 hover:shadow-2xl hover:shadow-blue-900/5 transition-all group"
            >
              <card.icon
                className="text-blue-600 mb-6 group-hover:scale-110 transition-transform"
                size={32}
              />
              <h3 className="text-xl font-black italic uppercase tracking-tighter text-gray-900 mb-2">
                {card.title}
              </h3>
              <p className="text-gray-500 text-sm font-medium mb-4">
                {card.desc}
              </p>
              <div className="text-blue-600 font-black uppercase tracking-widest text-[10px] flex items-center gap-2">
                Learn More <ArrowRight size={14} />
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Modern CTA */}
      <div className="max-w-5xl mx-auto px-6">
        <div className="bg-slate-900 rounded-[3rem] p-12 md:p-20 relative overflow-hidden text-center">
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/20 blur-[100px] rounded-full" />
          <h2 className="text-3xl md:text-5xl font-black italic uppercase tracking-tighter text-white mb-6 relative z-10">
            Ready to hit the <span className="text-blue-500">road?</span>
          </h2>
          <p className="text-gray-400 font-medium mb-10 relative z-10 max-w-lg mx-auto uppercase tracking-widest text-xs">
            Start your journey today with the most reliable rental service in
            Croatia.
          </p>
          <Link href="/browse_cars">
            <button className="bg-blue-600 text-white px-10 py-5 rounded-2xl font-black uppercase tracking-widest text-sm hover:bg-blue-700 hover:shadow-xl hover:shadow-blue-600/20 transition-all">
              Browse the Fleet
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
