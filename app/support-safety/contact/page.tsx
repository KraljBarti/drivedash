"use client";

import Link from "next/link";
import {
  ChevronLeft,
  Mail,
  Phone,
  MapPin,
  Send,
  Headphones,
  Clock,
  ExternalLink,
} from "lucide-react";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      {/* Sticky Header */}
      <div className="bg-white/80 backdrop-blur-md border-b border-slate-200 sticky top-0 z-30">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <Link
            href="/support"
            className="flex items-center gap-2 text-slate-500 hover:text-blue-600 transition-colors w-fit font-black uppercase tracking-widest text-[10px]"
          >
            <ChevronLeft size={16} />
            <span>Back to Support Hub</span>
          </Link>
        </div>
      </div>

      {/* Hero Header */}
      <div className="bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-transparent" />
        <div className="max-w-7xl mx-auto px-6 py-20 relative z-10 text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-3 mb-4">
            <div className="w-10 h-1 rounded-full bg-blue-500" />
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-blue-400">
              Direct Line
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl font-black italic uppercase tracking-tighter mb-4">
            Contact <span className="text-blue-500">Support</span>
          </h1>
          <p className="text-gray-400 font-medium text-lg max-w-2xl">
            Have a question about your booking? Our dedicated team is ready to
            assist you around the clock.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 -mt-10 relative z-20 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Contact Form Section */}
          <div className="lg:col-span-8">
            <div className="bg-white rounded-[2.5rem] shadow-xl shadow-slate-200/60 p-8 md:p-12 border border-white">
              <div className="flex items-center gap-3 mb-10">
                <div className="bg-blue-50 text-blue-600 p-3 rounded-xl">
                  <Headphones size={24} />
                </div>
                <h2 className="text-2xl font-black italic uppercase tracking-tight text-slate-900">
                  Send A Message
                </h2>
              </div>

              <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-500 ml-1">
                      First Name
                    </label>
                    <input
                      type="text"
                      placeholder="Jane"
                      className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all font-bold text-slate-900"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-500 ml-1">
                      Last Name
                    </label>
                    <input
                      type="text"
                      placeholder="Doe"
                      className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all font-bold text-slate-900"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-500 ml-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="jane@example.com"
                    className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all font-bold text-slate-900"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-500 ml-1">
                    What can we help with?
                  </label>
                  <select className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all font-bold text-slate-900 appearance-none cursor-pointer">
                    <option value="">Select a topic...</option>
                    <option value="booking">Booking Issue</option>
                    <option value="payment">Payment Question</option>
                    <option value="insurance">Insurance Inquiry</option>
                    <option value="technical">Technical Support</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-500 ml-1">
                    Message Details
                  </label>
                  <textarea
                    rows={6}
                    placeholder="Please describe your inquiry in detail..."
                    className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all font-bold text-slate-900 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full md:w-fit bg-blue-600 text-white px-12 py-5 rounded-2xl hover:bg-blue-700 transition-all font-black uppercase tracking-widest text-xs flex items-center justify-center gap-3 shadow-xl shadow-blue-600/20 active:scale-95"
                >
                  <Send size={18} />
                  Post Message
                </button>
              </form>
            </div>
          </div>

          {/* Contact Information Sidebar */}
          <div className="lg:col-span-4 space-y-6">
            {/* Phone Info */}
            <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm group hover:border-blue-100 transition-all">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-blue-50 text-blue-600 p-3 rounded-xl group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  <Phone size={24} />
                </div>
                <div>
                  <h3 className="font-black uppercase tracking-tight text-slate-900">
                    Phone
                  </h3>
                  <div className="flex items-center gap-1.5 text-slate-400">
                    <Clock size={12} />
                    <span className="text-[9px] font-bold uppercase tracking-widest">
                      Mon-Fri • 9am-6pm
                    </span>
                  </div>
                </div>
              </div>
              <a
                href="tel:+385123456789"
                className="text-xl font-black text-slate-900 hover:text-blue-600 transition-colors block mb-1"
              >
                +385 123 456 789
              </a>
              <p className="text-xs font-medium text-slate-400 italic">
                Standard rates apply.
              </p>
            </div>

            {/* Email Info */}
            <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm group hover:border-blue-100 transition-all">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-blue-50 text-blue-600 p-3 rounded-xl group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  <Mail size={24} />
                </div>
                <div>
                  <h3 className="font-black uppercase tracking-tight text-slate-900">
                    Email
                  </h3>
                  <span className="text-[9px] font-black uppercase tracking-widest text-green-500 bg-green-50 px-2 py-0.5 rounded-full">
                    24/7 Priority
                  </span>
                </div>
              </div>
              <a
                href="mailto:support@rentease.com"
                className="text-lg font-black text-slate-900 hover:text-blue-600 transition-colors break-all"
              >
                support@rentease.com
              </a>
            </div>

            {/* Office Info */}
            <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm group hover:border-blue-100 transition-all">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-blue-50 text-blue-600 p-3 rounded-xl group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="font-black uppercase tracking-tight text-slate-900">
                    Office
                  </h3>
                  <span className="text-[9px] font-black uppercase tracking-widest text-slate-400">
                    Global HQ
                  </span>
                </div>
              </div>
              <p className="text-slate-600 font-bold leading-relaxed mb-6">
                RentEase HQ
                <br />
                Ilica 123
                <br />
                10000 Zagreb, Croatia
              </p>
              <button className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-blue-600 hover:gap-4 transition-all">
                Get Directions <ExternalLink size={14} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
