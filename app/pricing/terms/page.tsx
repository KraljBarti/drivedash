"use client";

import Link from "next/link";
import {
  FileText,
  CheckCircle,
  AlertTriangle,
  ArrowRight,
  Scale,
  ChevronRight,
  ShieldCheck,
  Info,
} from "lucide-react";

const terms = [
  {
    title: "Driver Requirements",
    items: [
      "Minimum age: 21 years old (surcharge for drivers < 25)",
      "Valid driver's license held for at least 2 years",
      "Clean driving record (no major violations in past 3 years)",
      "Valid ID or passport for identity verification",
      "Credit/Debit card in driver's name for deposit",
    ],
  },
  {
    title: "Rental Period",
    items: [
      "Minimum rental period: 24 hours",
      "Hourly grace period: 30 minutes",
      "Late return fee: €20 per hour after grace period",
      "Early return: No refunds for unused days",
      "Extensions required 24h in advance",
    ],
  },
  {
    title: "Vehicle Use",
    items: [
      "Personal use only (no commercial use)",
      "EU & Croatia cross-border travel allowed",
      "Maximum occupants as per specs",
      "No off-road driving or racing",
      "Strictly no smoking in all vehicles",
    ],
  },
  {
    title: "Fuel Policy",
    items: [
      "Full-to-full fuel policy applies",
      "Vehicle provided with full tank",
      "Returned with full tank (refueling fee applies)",
      "Refueling charge: €30 + missing fuel cost",
      "Correct fuel type usage is mandatory",
    ],
  },
  {
    title: "Mileage",
    items: [
      "Economy cars: 200 km/day included",
      "Standard & Premium: Unlimited mileage",
      "Excess mileage: €0.25/km (Economy)",
      "Odometer recorded at pickup/return",
    ],
  },
  {
    title: "Cancellation Policy",
    items: [
      "Free cancellation up to 48 hours before pickup",
      "Cancellation within 48h: 50% charge",
      "No-show: 100% rental charge",
      "Refunds processed within 5-7 business days",
    ],
  },
  {
    title: "Damage & Liability",
    items: [
      "Renter responsible for damage during period",
      "Mandatory document check at pickup",
      "Incident report required within 24 hours",
      "Police report mandatory for accidents",
      "Excess applies per selected insurance plan",
    ],
  },
  {
    title: "Prohibited Activities",
    items: [
      "Driving under influence (DUI)",
      "Allowing unauthorized drivers",
      "Transporting hazardous materials",
      "Illegal activities or towing",
      "Participation in motorsport",
    ],
  },
];

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      {/* Header */}
      <div className="bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-transparent" />
        <div className="max-w-7xl mx-auto px-6 py-24 relative z-10 text-center">
          <div className="bg-blue-600/10 border border-blue-500/20 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-8">
            <Scale className="text-blue-500" size={32} />
          </div>
          <h1 className="text-4xl md:text-6xl font-black italic uppercase tracking-tighter mb-4">
            Legal <span className="text-blue-500">Terms</span>
          </h1>
          <p className="text-gray-400 font-medium max-w-xl mx-auto text-sm uppercase tracking-[0.2em]">
            The fine print, simplified for your journey.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Intro */}
        <div className="bg-white rounded-[2.5rem] p-8 md:p-12 mb-12 border border-gray-100 shadow-xl shadow-slate-200/50 flex flex-col md:flex-row items-center gap-8">
          <div className="shrink-0">
            <Info size={48} className="text-blue-600" />
          </div>
          <div>
            <h2 className="text-2xl font-black italic uppercase tracking-tight text-slate-900 mb-2">
              Rental Agreement Overview
            </h2>
            <p className="text-slate-500 text-sm md:text-base leading-relaxed font-medium">
              By reserving a vehicle with DriveDash, you enter a legally binding
              contract. These terms ensure transparency, safety, and mutual
              protection. Please review each section carefully to avoid
              unexpected fees or service termination.
            </p>
          </div>
        </div>

        {/* Terms Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {terms.map((section, idx) => (
            <div
              key={section.title}
              className="bg-white rounded-[2rem] p-8 border border-gray-100 hover:border-blue-200 transition-all duration-300 group shadow-sm hover:shadow-md"
            >
              <div className="flex items-center gap-4 mb-6">
                <span className="text-xs font-black text-blue-600 bg-blue-50 px-3 py-1 rounded-full uppercase tracking-widest">
                  Section {idx + 1}
                </span>
                <h3 className="text-xl font-black italic uppercase tracking-tighter text-slate-900 group-hover:text-blue-600 transition-colors">
                  {section.title}
                </h3>
              </div>
              <ul className="space-y-4">
                {section.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle
                      className="text-blue-500 shrink-0 mt-0.5"
                      size={18}
                    />
                    <span className="text-sm font-bold text-slate-600 leading-snug">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Warning Block */}
        <div className="bg-slate-900 rounded-[2.5rem] p-8 md:p-12 mb-20 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-10 opacity-5">
            <AlertTriangle size={150} className="text-white" />
          </div>
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-6">
              <AlertTriangle className="text-orange-500" size={32} />
              <h3 className="text-2xl font-black italic uppercase tracking-tighter text-white">
                Critical Enforcement
              </h3>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
              <p className="text-slate-400 text-sm font-medium leading-relaxed">
                Violation of these terms—including unauthorized drivers or
                illegal activity—will result in the{" "}
                <span className="text-white font-bold">immediate voiding</span>{" "}
                of insurance coverage and forfeiture of your security deposit.
                DriveDash reserves the right to terminate any rental without
                refund if safety policies are breached.
              </p>
              <p className="text-slate-400 text-sm font-medium leading-relaxed">
                We reserve the right to update these terms. Major changes will
                be communicated via email, but continued use of our platform
                constitutes agreement to the most current version posted here.
              </p>
            </div>
          </div>
        </div>

        {/* Related Links */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-black italic uppercase tracking-tighter text-slate-900">
            Dive <span className="text-blue-600">Deeper</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-24">
          {[
            { title: "Insurance", path: "/pricing/insurance", color: "blue" },
            { title: "Deposits", path: "/pricing/deposit", color: "blue" },
            { title: "Privacy", path: "/legal/privacy", color: "slate" },
            { title: "Safety", path: "/support&safety", color: "slate" },
          ].map((link) => (
            <Link
              key={link.title}
              href={link.path}
              className="bg-white p-6 rounded-2xl border border-slate-100 hover:border-blue-500 hover:shadow-lg transition-all flex items-center justify-between group"
            >
              <span className="font-black uppercase tracking-widest text-xs text-slate-900 group-hover:text-blue-600">
                {link.title} Policy
              </span>
              <ChevronRight
                size={18}
                className="text-slate-300 group-hover:text-blue-500 group-hover:translate-x-1 transition-all"
              />
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="bg-blue-600 rounded-[3rem] py-16 px-6 text-center shadow-2xl shadow-blue-600/30">
          <h2 className="text-3xl md:text-5xl font-black italic uppercase tracking-tighter text-white mb-6">
            Everything <span className="text-blue-200">Clear?</span>
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/browse_cars">
              <button className="bg-slate-900 text-white px-10 py-5 rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-slate-800 transition-all flex items-center gap-2">
                Start Booking <ArrowRight size={16} />
              </button>
            </Link>
            <Link href="/support&safety/contact">
              <button className="bg-white text-blue-600 px-10 py-5 rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-blue-50 transition-all">
                Contact Support
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
