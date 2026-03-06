"use client";

import Link from "next/link";
import {
  ChevronLeft,
  Shield,
  CheckCircle2,
  Info,
  ArrowRight,
  Camera,
  PhoneCall,
  FileCheck,
  Search,
} from "lucide-react";

const coverageItems = [
  "Collision Damage Waiver (CDW)",
  "Theft Protection",
  "Third-Party Liability",
  "Personal Accident Insurance",
  "Roadside Assistance 24/7",
  "Replacement Vehicle Coverage",
];

export default function InsurancePage() {
  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      {/* Navigation Bar */}
      <div className="bg-white/80 backdrop-blur-md border-b border-slate-200 sticky top-0 z-30">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <Link
            href="/support"
            className="flex items-center gap-2 text-slate-500 hover:text-blue-600 transition-colors w-fit font-black uppercase tracking-widest text-[10px]"
          >
            <ChevronLeft size={16} />
            <span>Back to Support</span>
          </Link>
        </div>
      </div>

      {/* Hero Header */}
      <div className="bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-transparent" />
        <div className="max-w-7xl mx-auto px-6 py-20 relative z-10">
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-blue-500/20 p-2 rounded-lg">
              <Shield className="text-blue-400" size={20} />
            </div>
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-blue-400">
              Security Guaranteed
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl font-black italic uppercase tracking-tighter mb-4">
            Insurance <span className="text-blue-500">&</span> Protection
          </h1>
          <p className="text-gray-400 font-medium text-lg max-w-2xl leading-relaxed">
            Drive with confidence knowing that every trip is backed by top-tier
            coverage and a 24/7 rapid response team.
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 -mt-10 relative z-20 pb-24">
        {/* Main Coverage Card */}
        <div className="bg-white rounded-[2.5rem] shadow-xl shadow-slate-200/60 p-8 md:p-12 border border-white mb-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10">
            <div>
              <h2 className="text-2xl font-black italic uppercase tracking-tight text-slate-900 mb-2">
                Standard Protection
              </h2>
              <p className="text-slate-500 text-sm font-medium">
                Included in every rental at no extra cost.
              </p>
            </div>
            <div className="px-4 py-2 bg-green-50 text-green-600 rounded-full flex items-center gap-2 text-[10px] font-black uppercase tracking-widest">
              <CheckCircle2 size={14} /> Active for all trips
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {coverageItems.map((item) => (
              <div
                key={item}
                className="flex items-center gap-4 p-5 bg-slate-50 rounded-2xl border border-slate-100 group hover:border-blue-200 transition-colors"
              >
                <div className="bg-white p-2 rounded-lg shadow-sm text-green-500">
                  <CheckCircle2 size={18} />
                </div>
                <span className="font-bold text-slate-700 text-sm tracking-tight">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Deductible & Premium Upgrade */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="md:col-span-2 bg-white rounded-[2.5rem] p-10 border border-slate-100 shadow-sm">
            <h3 className="text-lg font-black italic uppercase tracking-tight text-slate-900 mb-4">
              Understanding Deductibles
            </h3>
            <p className="text-slate-500 text-sm font-medium leading-relaxed mb-6">
              The standard deductible is{" "}
              <span className="text-slate-900 font-bold">€500</span>. This is
              the maximum amount you would be responsible for in case of damage
              to the vehicle.
            </p>
            <div className="flex items-center gap-3 text-blue-600">
              <Info size={18} />
              <span className="text-[10px] font-black uppercase tracking-[0.2em]">
                Full terms and conditions apply
              </span>
            </div>
          </div>

          <div className="bg-blue-600 rounded-[2.5rem] p-10 text-white shadow-xl shadow-blue-600/30 flex flex-col justify-between group cursor-pointer hover:bg-blue-700 transition-all">
            <div>
              <h3 className="text-lg font-black italic uppercase tracking-tight mb-2">
                Premium Protection
              </h3>
              <p className="text-blue-100 text-xs font-bold uppercase tracking-widest leading-relaxed">
                Reduce deductible to{" "}
                <span className="text-white text-base">€0</span>
              </p>
            </div>
            <div className="mt-8">
              <p className="text-2xl font-black mb-4">
                €15
                <span className="text-sm font-medium text-blue-200">/day</span>
              </p>
              <button className="w-full bg-white text-blue-600 py-3 rounded-xl font-black uppercase tracking-widest text-[10px] flex items-center justify-center gap-2 group-hover:gap-3 transition-all">
                Upgrade Now <ArrowRight size={14} />
              </button>
            </div>
          </div>
        </div>

        {/* Claims Process Section */}
        <div className="bg-white rounded-[2.5rem] p-12 border border-slate-100 shadow-sm">
          <h2 className="text-2xl font-black italic uppercase tracking-tight text-slate-900 mb-12 text-center">
            How to File a <span className="text-blue-600">Claim</span>
          </h2>

          <div className="relative">
            {/* Connection Line */}
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-slate-100 -translate-y-1/2 z-0" />

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
              {[
                {
                  icon: PhoneCall,
                  title: "Report",
                  desc: "Call our 24/7 hotline immediately.",
                },
                {
                  icon: Camera,
                  title: "Document",
                  desc: "Take clear photos of all damages.",
                },
                {
                  icon: FileCheck,
                  title: "Submit",
                  desc: "Upload docs via the app dashboard.",
                },
                {
                  icon: Search,
                  title: "Review",
                  desc: "We process claims within 5 days.",
                },
              ].map((step, idx) => (
                <div
                  key={idx}
                  className="flex flex-col items-center text-center group"
                >
                  <div className="w-16 h-16 bg-white border-4 border-slate-50 rounded-2xl flex items-center justify-center text-blue-600 shadow-sm group-hover:scale-110 group-hover:border-blue-100 transition-all mb-4">
                    <step.icon size={28} />
                  </div>
                  <h4 className="font-black uppercase tracking-widest text-xs text-slate-900 mb-2">
                    {step.title}
                  </h4>
                  <p className="text-slate-400 text-[11px] font-bold leading-relaxed px-4">
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Legal Disclaimer */}
        <p className="mt-12 text-center text-[10px] font-bold text-slate-400 uppercase tracking-widest leading-relaxed max-w-3xl mx-auto">
          Insurance services are provided by RentEase Global Insurance Partners
          Ltd. Subject to policy terms and driver verification. Roadside
          assistance available in participating regions only.
        </p>
      </div>
    </div>
  );
}
