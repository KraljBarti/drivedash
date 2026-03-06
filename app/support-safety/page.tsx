"use client";

import Link from "next/link";
import {
  Shield,
  HelpCircle,
  Mail,
  Phone,
  FileText,
  Lock,
  AlertTriangle,
  ChevronRight,
  LifeBuoy,
} from "lucide-react";

const quickLinks = [
  {
    title: "Contact Support",
    description: "Get in touch with our 24/7 expert team",
    icon: Mail,
    link: "/support/contact",
  },
  {
    title: "Insurance Info",
    description: "Collision and theft protection details",
    icon: Shield,
    link: "/support/insurance",
  },
  {
    title: "Safety Rules",
    description: "Best practices for a secure rental",
    icon: Lock,
    link: "/support/safety",
  },
  {
    title: "Legal Docs",
    description: "Terms of service and privacy policies",
    icon: FileText,
    link: "/support/legal",
  },
];

const faqs = [
  {
    question: "How does the insurance work?",
    answer:
      "All rentals include comprehensive insurance coverage. This includes collision damage, theft protection, and third-party liability through our global partners.",
  },
  {
    question: "What do I need to rent a car?",
    answer:
      "You need a valid driver's license (held for at least 1 year), a credit card in your name, and to be at least 21 years old. Some luxury models may require age 25+.",
  },
  {
    question: "Can I cancel my booking?",
    answer:
      "Yes, free cancellation is available up to 24 hours before your pickup time. Cancellations within the 24-hour window may incur a standard processing fee.",
  },
];

export default function SupportPage() {
  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      {/* Hero Header */}
      <div className="bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-transparent" />
        <div className="max-w-7xl mx-auto px-6 py-20 relative z-10">
          <div className="flex items-center gap-3 mb-4">
            <LifeBuoy className="text-blue-500 animate-spin-slow" size={24} />
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-blue-400">
              Help Center
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl font-black italic uppercase tracking-tighter mb-4">
            Support <span className="text-blue-500">&</span> Safety
          </h1>
          <p className="text-gray-400 font-medium text-lg max-w-2xl">
            From insurance questions to emergency assistance, our community's
            safety is our #1 priority.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 -mt-10 relative z-20 pb-24">
        {/* Emergency Contact - High Priority */}
        <div className="bg-white rounded-[2rem] p-1 border-2 border-red-100 shadow-2xl shadow-red-900/10 mb-12 overflow-hidden">
          <div className="bg-red-50/50 rounded-[1.8rem] p-8 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-start gap-5">
              <div className="bg-red-600 p-4 rounded-2xl shadow-lg shadow-red-600/30 animate-pulse">
                <Phone className="text-white" size={28} />
              </div>
              <div>
                <h3 className="text-red-900 font-black italic uppercase tracking-tight text-xl mb-1">
                  24/7 Emergency Hotline
                </h3>
                <p className="text-red-700/80 text-sm font-bold uppercase tracking-wide">
                  Accidents • Breakdowns • Urgent Theft
                </p>
              </div>
            </div>
            <a
              href="tel:+385123456789"
              className="w-full md:w-auto flex items-center justify-center gap-3 bg-red-600 text-white px-10 py-5 rounded-2xl hover:bg-red-700 transition-all font-black uppercase tracking-widest text-xs shadow-xl shadow-red-600/20 active:scale-95"
            >
              <AlertTriangle size={18} />
              Call +385 123 456 789
            </a>
          </div>
        </div>

        {/* Quick Links Grid */}
        <div className="mb-20">
          <h2 className="text-2xl font-black italic uppercase tracking-tight text-slate-900 mb-8 px-2">
            Resource <span className="text-blue-600">Hub</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickLinks.map((item) => {
              const Icon = item.icon;
              return (
                <Link key={item.title} href={item.link} className="group">
                  <div className="h-full bg-white rounded-[2rem] p-8 border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-blue-900/5 hover:-translate-y-1 transition-all">
                    <div className="bg-blue-50 text-blue-600 p-4 rounded-2xl w-fit mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                      <Icon size={24} />
                    </div>
                    <h3 className="text-slate-900 font-black uppercase tracking-tight text-sm mb-2 group-hover:text-blue-600 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-slate-500 text-xs font-medium leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>

        {/* FAQs Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 items-start mb-20">
          <div className="lg:col-span-1">
            <h2 className="text-3xl font-black italic uppercase tracking-tighter text-slate-900 mb-4">
              Common <br />
              <span className="text-blue-600">Questions</span>
            </h2>
            <p className="text-slate-500 text-sm font-medium mb-6">
              Can't find what you're looking for? Our documentation covers
              everything from fuel policies to driver requirements.
            </p>
            <button className="flex items-center gap-2 text-blue-600 font-black uppercase tracking-widest text-[10px] hover:gap-4 transition-all">
              View All FAQs <ChevronRight size={16} />
            </button>
          </div>

          <div className="lg:col-span-2 space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm group hover:border-blue-200 transition-colors"
              >
                <div className="flex items-start gap-4">
                  <div className="bg-slate-50 p-2 rounded-xl group-hover:bg-blue-50 transition-colors">
                    <HelpCircle className="text-blue-600" size={20} />
                  </div>
                  <div>
                    <h3 className="text-slate-900 font-black uppercase tracking-tight text-sm mb-3">
                      {faq.question}
                    </h3>
                    <p className="text-slate-500 text-sm font-medium leading-relaxed leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Secondary Support Options */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-[2.5rem] p-10 border border-slate-100 shadow-sm relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:scale-110 transition-transform">
              <Mail size={120} />
            </div>
            <div className="relative z-10">
              <h3 className="text-xl font-black italic uppercase tracking-tight mb-2">
                Email Support
              </h3>
              <p className="text-slate-500 text-sm font-medium mb-6">
                Average response time: 2 hours
              </p>
              <a
                href="mailto:support@rentease.com"
                className="inline-flex items-center gap-2 bg-slate-900 text-white px-6 py-3 rounded-xl hover:bg-blue-600 transition-all font-black uppercase tracking-widest text-[10px]"
              >
                support@rentease.com
              </a>
            </div>
          </div>

          <div className="bg-blue-600 rounded-[2.5rem] p-10 text-white shadow-xl shadow-blue-600/20 relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:scale-110 transition-transform">
              <Shield size={120} />
            </div>
            <div className="relative z-10">
              <h3 className="text-xl font-black italic uppercase tracking-tight mb-2">
                Trust & Safety
              </h3>
              <p className="text-blue-100 text-sm font-medium mb-6">
                Verified drivers & host protection
              </p>
              <Link
                href="/support/safety"
                className="inline-flex items-center gap-2 bg-white text-blue-600 px-6 py-3 rounded-xl hover:bg-slate-900 hover:text-white transition-all font-black uppercase tracking-widest text-[10px]"
              >
                Learn More <ChevronRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
