"use client";

import Link from "next/link";
import {
  ChevronLeft,
  Upload,
  ShieldCheck,
  Info,
  CheckCircle2,
  FileCheck,
  Globe,
} from "lucide-react";

export default function VerifyLicensePage() {
  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      {/* Navigation Header */}
      <div className="bg-white/80 backdrop-blur-md border-b border-slate-200 sticky top-0 z-30">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <Link
            href="/profile"
            className="flex items-center gap-2 text-slate-500 hover:text-blue-600 transition-colors w-fit font-black uppercase tracking-widest text-[10px]"
          >
            <ChevronLeft size={16} />
            <span>Cancel Verification</span>
          </Link>
        </div>
      </div>

      {/* Hero Header */}
      <div className="bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-transparent" />
        <div className="max-w-7xl mx-auto px-6 py-16 relative z-10">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <h1 className="text-4xl md:text-5xl font-black italic uppercase tracking-tighter mb-2">
                License <span className="text-blue-500">Verification</span>
              </h1>
              <p className="text-gray-400 font-medium text-sm tracking-widest uppercase">
                Step 1: Document Submission
              </p>
            </div>
            <div className="hidden md:flex items-center gap-3 bg-white/5 border border-white/10 p-4 rounded-2xl backdrop-blur-sm">
              <ShieldCheck className="text-blue-500" size={32} />
              <div className="text-left">
                <p className="text-[10px] font-black uppercase tracking-widest text-white">
                  Secure Processing
                </p>
                <p className="text-[10px] font-medium text-slate-400">
                  256-bit SSL Encryption
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 -mt-8 relative z-20 pb-24">
        {/* Why Verify Banner */}
        <div className="bg-blue-600 rounded-3xl p-6 mb-8 shadow-xl shadow-blue-600/20 flex items-start gap-4">
          <div className="bg-white/20 p-2 rounded-xl">
            <Info className="text-white" size={24} />
          </div>
          <div>
            <h3 className="text-white font-black italic uppercase tracking-tight mb-1">
              Safety Requirement
            </h3>
            <p className="text-blue-100 text-xs md:text-sm font-medium leading-relaxed">
              To activate your account for rentals, we need to verify your
              driving eligibility. Our automated system typically approves
              documents within{" "}
              <span className="text-white font-black">2-4 business hours</span>.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-[2.5rem] shadow-xl shadow-slate-200/60 overflow-hidden border border-white">
          <div className="p-8 md:p-12">
            <div className="space-y-8">
              {/* Document Details Section */}
              <div className="space-y-6">
                <div className="flex items-center gap-2 mb-2">
                  <FileCheck size={18} className="text-blue-600" />
                  <h3 className="text-[11px] font-black uppercase tracking-[0.2em] text-slate-400">
                    License Metadata
                  </h3>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-500 ml-1">
                    License Number
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. DL123456789"
                    className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all font-bold text-slate-900 placeholder:text-slate-300"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-500 ml-1">
                      Issue Date
                    </label>
                    <input
                      type="date"
                      className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all font-bold text-slate-900"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-500 ml-1">
                      Expiry Date
                    </label>
                    <input
                      type="date"
                      className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all font-bold text-slate-900"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-500 ml-1">
                    Issuing Country
                  </label>
                  <div className="relative">
                    <Globe
                      className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-400"
                      size={18}
                    />
                    <select className="w-full pl-14 pr-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all font-bold text-slate-900 appearance-none cursor-pointer">
                      <option value="">Select country...</option>
                      <option value="hr">Croatia</option>
                      <option value="us">United States</option>
                      <option value="uk">United Kingdom</option>
                      <option value="de">Germany</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Upload Zone */}
              <div className="border-t border-slate-100 pt-8">
                <div className="flex items-center gap-2 mb-4">
                  <Upload size={18} className="text-blue-600" />
                  <h3 className="text-[11px] font-black uppercase tracking-[0.2em] text-slate-400">
                    Document Scan
                  </h3>
                </div>

                <div className="group relative border-2 border-dashed border-slate-200 rounded-[2rem] p-12 text-center hover:border-blue-500 hover:bg-blue-50/30 transition-all cursor-pointer overflow-hidden">
                  <div className="relative z-10">
                    <div className="bg-blue-50 w-20 h-20 rounded-3xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <Upload className="text-blue-600" size={32} />
                    </div>
                    <p className="text-slate-900 font-black uppercase tracking-tight text-sm mb-1">
                      Drop your license scan here
                    </p>
                    <p className="text-slate-400 text-[10px] font-bold uppercase tracking-widest">
                      PNG, JPG or PDF (MAX 5MB)
                    </p>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-50/50 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </div>

              {/* Requirements Checklist */}
              <div className="bg-slate-50 rounded-2xl p-6">
                <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-4">
                  Verification Tips
                </p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <li className="flex items-center gap-2 text-[11px] font-bold text-slate-600">
                    <CheckCircle2 size={14} className="text-green-500" /> All 4
                    corners visible
                  </li>
                  <li className="flex items-center gap-2 text-[11px] font-bold text-slate-600">
                    <CheckCircle2 size={14} className="text-green-500" /> Text
                    is clearly legible
                  </li>
                  <li className="flex items-center gap-2 text-[11px] font-bold text-slate-600">
                    <CheckCircle2 size={14} className="text-green-500" /> No
                    glare or reflections
                  </li>
                  <li className="flex items-center gap-2 text-[11px] font-bold text-slate-600">
                    <CheckCircle2 size={14} className="text-green-500" /> Valid
                    (not expired)
                  </li>
                </ul>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link href="/profile" className="flex-1 order-2 sm:order-1">
                  <button className="w-full px-8 py-5 border-2 border-slate-100 text-slate-400 rounded-2xl hover:bg-slate-50 hover:text-slate-600 transition-all font-black uppercase tracking-widest text-[10px]">
                    Cancel
                  </button>
                </Link>
                <Link href="/profile" className="flex-1 order-1 sm:order-2">
                  <button className="w-full px-8 py-5 bg-blue-600 text-white rounded-2xl hover:bg-blue-700 hover:shadow-xl hover:shadow-blue-600/20 transition-all font-black uppercase tracking-widest text-[10px]">
                    Submit for Review
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
