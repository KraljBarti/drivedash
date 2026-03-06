"use client";

import Link from "next/link";
import {
  Shield,
  CheckCircle,
  AlertTriangle,
  FileCheck,
  ArrowRight,
  HelpCircle,
  ShieldAlert,
  ShieldCheck,
  ShieldPlus,
} from "lucide-react";

const insurancePlans = [
  {
    name: "Basic Coverage",
    price: "Included",
    description: "Standard protection included with every rental",
    coverage: [
      "Third-party liability",
      "Collision damage waiver",
      "Theft protection",
      "Roadside assistance 24/7",
    ],
    excess: "€1,000",
    recommended: false,
    icon: Shield,
  },
  {
    name: "Enhanced Protection",
    price: "€15/day",
    description: "Reduced excess and extended protection",
    coverage: [
      "All Basic Coverage benefits",
      "Reduced excess to €300",
      "Windscreen & tire protection",
      "Personal accident insurance",
      "Lost key coverage",
    ],
    excess: "€300",
    recommended: true,
    icon: ShieldCheck,
  },
  {
    name: "Premium Zero",
    price: "€25/day",
    description: "Maximum protection with no excess",
    coverage: [
      "All Enhanced Coverage benefits",
      "Zero excess on all claims",
      "Interior damage coverage",
      "Extended roadside assistance",
      "Priority support",
      "Replacement vehicle guarantee",
    ],
    excess: "€0",
    recommended: false,
    icon: ShieldPlus,
  },
];

const exclusions = [
  "Damage caused by reckless or illegal driving",
  "Driving under the influence of alcohol or drugs",
  "Off-road driving or rallying",
  "Damage to undercarriage or roof",
  "Loss of personal belongings",
  "Fuel misfilling (wrong fuel type)",
];

export default function InsurancePage() {
  return (
    <div className="min-h-screen bg-[#FDFDFD]">
      {/* Header */}
      <div className="bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/30 to-transparent" />
        <div className="max-w-7xl mx-auto px-6 py-24 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 px-4 py-2 rounded-full mb-8">
            <Shield size={16} className="text-blue-500" />
            <span className="text-[10px] font-black uppercase tracking-widest text-blue-400">
              Total Peace of Mind
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black italic uppercase tracking-tighter mb-6">
            Drive <span className="text-blue-500">Protected</span>
          </h1>
          <p className="text-gray-400 font-medium max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
            From basic liability to total zero-excess freedom. Choose the shield
            that fits your journey.
          </p>
        </div>
      </div>

      {/* Insurance Plan Grid */}
      <div className="max-w-7xl mx-auto px-6 -mt-16 relative z-20 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {insurancePlans.map((plan) => (
            <div
              key={plan.name}
              className={`bg-white rounded-[2.5rem] flex flex-col transition-all duration-500 group border-2 ${
                plan.recommended
                  ? "border-blue-600 shadow-2xl shadow-blue-900/10 scale-105 z-10"
                  : "border-gray-100 shadow-xl shadow-slate-200/50"
              }`}
            >
              {plan.recommended && (
                <div className="bg-blue-600 text-white text-center py-2 text-[10px] font-black uppercase tracking-[0.2em] rounded-t-[1.2rem]">
                  Best Value Choice
                </div>
              )}
              <div className="p-10 flex-grow">
                <div className="mb-6">
                  <plan.icon
                    size={40}
                    className={
                      plan.recommended ? "text-blue-600" : "text-gray-400"
                    }
                  />
                </div>
                <h3 className="text-2xl font-black italic uppercase tracking-tighter text-gray-900 mb-1">
                  {plan.name}
                </h3>
                <div className="text-4xl font-black text-blue-600 italic tracking-tighter mb-4">
                  {plan.price}
                </div>
                <p className="text-gray-500 text-sm font-medium mb-8 leading-relaxed">
                  {plan.description}
                </p>

                <div className="bg-slate-50 rounded-2xl p-5 mb-8 border border-slate-100">
                  <div className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-1">
                    Your Max Liability (Excess)
                  </div>
                  <div className="text-3xl font-black italic text-slate-900">
                    {plan.excess}
                  </div>
                </div>

                <ul className="space-y-4 mb-10">
                  {plan.coverage.map((item) => (
                    <li key={item} className="flex items-center gap-3">
                      <CheckCircle
                        className="text-green-500 shrink-0"
                        size={18}
                      />
                      <span className="text-sm font-bold text-gray-700">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-10 pt-0">
                <Link href="/browse_cars">
                  <button
                    className={`w-full py-4 rounded-2xl font-black uppercase tracking-widest text-xs transition-all flex items-center justify-center gap-2 ${
                      plan.recommended
                        ? "bg-blue-600 text-white hover:bg-blue-700 shadow-lg shadow-blue-600/20"
                        : "bg-slate-900 text-white hover:bg-slate-800"
                    }`}
                  >
                    Select {plan.name} <ArrowRight size={16} />
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Exclusions Box */}
        <div className="bg-orange-50/50 border-2 border-orange-200 rounded-[3rem] p-8 md:p-12 mt-16">
          <div className="flex flex-col md:flex-row items-start gap-8">
            <div className="bg-orange-500 p-4 rounded-2xl shadow-lg shadow-orange-500/20 shrink-0">
              <ShieldAlert className="text-white" size={32} />
            </div>
            <div>
              <h3 className="text-2xl font-black italic uppercase tracking-tighter text-gray-900 mb-4">
                Critical <span className="text-orange-600">Exclusions</span>
              </h3>
              <p className="text-gray-600 font-medium mb-6 leading-relaxed max-w-2xl text-sm">
                Insurance coverage is voided if terms of service are breached.
                Ensure you drive within local laws to maintain protection.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-3">
                {exclusions.map((exclusion) => (
                  <div key={exclusion} className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 bg-orange-500 rounded-full" />
                    <span className="text-sm font-bold text-gray-700 uppercase tracking-tight">
                      {exclusion}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Workflow Section */}
      <div className="bg-white py-24 border-t border-gray-100">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black italic uppercase tracking-tighter text-gray-900">
              The Claims <span className="text-blue-600">Process</span>
            </h2>
            <div className="h-1 w-20 bg-blue-600 mx-auto mt-4" />
          </div>

          <div className="grid grid-cols-1 gap-12">
            {[
              {
                step: "01",
                title: "Instant Report",
                desc: "Notify our 24/7 hotline immediately after any incident or discovery of damage.",
                icon: HelpCircle,
              },
              {
                step: "02",
                title: "Visual Evidence",
                desc: "Capture high-quality photos of the vehicle, surrounding scene, and third-party documents.",
                icon: FileCheck,
              },
              {
                step: "03",
                title: "Claim Submission",
                desc: "Submit your digital report via the DriveDash app or portal within 24 hours.",
                icon: CheckCircle,
              },
              {
                step: "04",
                title: "Swift Resolution",
                desc: "Our assessors review the claim within 48 hours and handle all garage communications.",
                icon: Shield,
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="flex flex-col md:flex-row gap-6 md:items-center group"
              >
                <div className="text-5xl font-black italic text-slate-100 group-hover:text-blue-50 transition-colors md:w-24">
                  {item.step}
                </div>
                <div className="bg-slate-50 p-4 rounded-2xl group-hover:bg-blue-600 transition-colors shrink-0">
                  <item.icon
                    size={24}
                    className="text-blue-600 group-hover:text-white transition-colors"
                  />
                </div>
                <div>
                  <h4 className="text-xl font-black uppercase tracking-tight text-gray-900">
                    {item.title}
                  </h4>
                  <p className="text-gray-500 text-sm font-medium">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="max-w-5xl mx-auto px-6 pb-24">
        <div className="bg-slate-900 rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-64 h-64 bg-blue-600/10 blur-[100px] rounded-full" />
          <h2 className="text-3xl md:text-5xl font-black italic uppercase tracking-tighter text-white mb-8 relative z-10">
            Still unsure about <span className="text-blue-500">coverage?</span>
          </h2>
          <div className="flex flex-wrap justify-center gap-4 relative z-10">
            <Link href="/support&safety/contact">
              <button className="bg-blue-600 text-white px-10 py-5 rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-blue-700 transition-all">
                Talk to an Agent
              </button>
            </Link>
            <Link href="/pricing">
              <button className="bg-white/5 border border-white/10 text-white px-10 py-5 rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-white/10 transition-all">
                Back to Pricing
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
