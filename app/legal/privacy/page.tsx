"use client";

import Link from "next/link";
import {
  Shield,
  Lock,
  Eye,
  FileText,
  AlertCircle,
  CheckCircle2,
} from "lucide-react";

const sections = [
  {
    title: "Information We Collect",
    content: [
      {
        subtitle: "Personal Information",
        text: "When you create an account, we collect your name, email address, phone number, date of birth, and driver's license information. This information is necessary to verify your identity and ensure platform safety.",
      },
      {
        subtitle: "Payment Information",
        text: "We collect payment card details and billing information through our secure payment processors. We do not store complete credit card numbers on our servers.",
      },
      {
        subtitle: "Usage Data",
        text: "We collect information about how you use our platform, including search queries, booking history, device information, IP address, and browsing behavior.",
      },
      {
        subtitle: "Location Data",
        text: "With your permission, we may collect location data to help you find nearby vehicles and improve our services.",
      },
    ],
  },
  {
    title: "How We Use Your Information",
    content: [
      {
        subtitle: "Service Delivery",
        text: "We use your information to facilitate bookings, process payments, verify your identity, communicate about your rentals, and provide customer support.",
      },
      {
        subtitle: "Safety & Security",
        text: "Your data helps us verify users, detect and prevent fraud, ensure platform security, and resolve disputes between users.",
      },
      {
        subtitle: "Improvement & Analytics",
        text: "We analyze usage data to improve our platform, personalize your experience, develop new features, and conduct research.",
      },
      {
        subtitle: "Marketing",
        text: "With your consent, we may send promotional emails, notifications about new features, and personalized offers. You can opt out anytime.",
      },
    ],
  },
  {
    title: "Information Sharing",
    content: [
      {
        subtitle: "With Other Users",
        text: "When you book a rental, necessary information is shared with the host (name, profile photo, verified status). Hosts can see your basic profile and reviews.",
      },
      {
        subtitle: "Service Providers",
        text: "We share data with trusted third parties who help us operate our platform: payment processors, identity verification services, insurance providers, and customer support tools.",
      },
      {
        subtitle: "Legal Requirements",
        text: "We may disclose information when required by law, in response to legal requests, to protect our rights and safety, or to prevent fraud and abuse.",
      },
      {
        subtitle: "Business Transfers",
        text: "If RentEase is acquired or merged, your information may be transferred to the new entity.",
      },
    ],
  },
  {
    title: "Data Security",
    content: [
      {
        subtitle: "Technical Measures",
        text: "We use industry-standard encryption (SSL/TLS), secure servers with regular backups, access controls and authentication, and regular security audits.",
      },
      {
        subtitle: "Organizational Measures",
        text: "Employee training on data protection, limited access to personal data, confidentiality agreements with partners, and incident response procedures.",
      },
      {
        subtitle: "User Responsibility",
        text: "You are responsible for maintaining the security of your account credentials. Never share your password with anyone.",
      },
    ],
  },
];

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Premium Header */}
      <div className="bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-600/20 to-transparent" />
        <div className="max-w-7xl mx-auto px-6 py-24 relative z-10 text-center">
          <Shield className="mx-auto mb-6 text-blue-500" size={64} />
          <h1 className="text-4xl md:text-6xl font-black italic uppercase tracking-tighter mb-4">
            Privacy <span className="text-blue-500">Policy</span>
          </h1>
          <p className="text-lg text-gray-400 font-medium max-w-2xl mx-auto uppercase tracking-widest text-xs">
            Effective Date: March 4, 2026 • Version 2.4
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 -mt-12 relative z-20">
        {/* Introduction Card */}
        <div className="bg-white rounded-[2.5rem] shadow-xl shadow-gray-200/50 p-8 md:p-12 border border-gray-100 mb-12">
          <div className="flex items-start gap-6">
            <div className="bg-blue-50 p-4 rounded-2xl text-blue-600">
              <AlertCircle size={32} />
            </div>
            <div>
              <h2 className="text-2xl font-black italic uppercase tracking-tighter text-gray-900 mb-4">
                Introduction
              </h2>
              <p className="text-gray-600 leading-relaxed text-lg italic">
                "At RentEase, your trust is our engine. We are committed to
                transparency in how we handle your digital exhaust."
              </p>
              <div className="h-1 w-20 bg-blue-600 rounded-full my-6" />
              <p className="text-gray-600 leading-relaxed mb-4">
                This Privacy Policy explains how we collect, use, and safeguard
                your information when you use our platform. By using our
                services, you agree to these practices.
              </p>
            </div>
          </div>
        </div>

        {/* Main Content Sections */}
        <div className="space-y-12">
          {sections.map((section, index) => (
            <div
              key={section.title}
              className="bg-white rounded-[2.5rem] shadow-sm p-8 md:p-12 border border-gray-100 group hover:border-blue-500 transition-colors"
            >
              <div className="flex items-center gap-4 mb-10">
                <span className="flex items-center justify-center bg-gray-900 text-white font-black italic w-10 h-10 rounded-xl text-lg group-hover:bg-blue-600 transition-colors">
                  0{index + 1}
                </span>
                <h2 className="text-3xl font-black italic uppercase tracking-tighter text-gray-900">
                  {section.title}
                </h2>
              </div>

              <div className="grid gap-8">
                {section.content.map((item) => (
                  <div
                    key={item.subtitle}
                    className="border-l-4 border-gray-100 pl-6 hover:border-blue-600 transition-colors"
                  >
                    <h3 className="text-sm font-black text-blue-600 uppercase tracking-widest mb-2">
                      {item.subtitle}
                    </h3>
                    <p className="text-gray-600 leading-relaxed font-medium">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* GDPR Section */}
        <div className="bg-slate-900 rounded-[2.5rem] shadow-2xl p-8 md:p-12 border border-slate-800 mt-12 text-white">
          <div className="flex items-start gap-6 mb-8">
            <div className="bg-blue-600 p-4 rounded-2xl">
              <Lock size={32} />
            </div>
            <div>
              <h2 className="text-3xl font-black italic uppercase tracking-tighter mb-2">
                GDPR & Data Protection
              </h2>
              <p className="text-gray-400 font-medium">
                Your data rights under EU Law
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              "Lawful & Fair Processing",
              "Specific Purpose Limitation",
              "Data Minimization Protocol",
              "Accuracy & Integrity Verification",
              "Strict Storage Limitation",
              "Advanced Security Measures",
            ].map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 bg-slate-800/50 p-4 rounded-2xl border border-slate-700"
              >
                <CheckCircle2 className="text-blue-500 shrink-0" size={20} />
                <span className="text-sm font-bold tracking-tight text-gray-200">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Footer */}
        <div className="bg-white rounded-[2.5rem] shadow-sm p-8 md:p-12 border border-gray-100 mt-12 text-center">
          <Eye className="mx-auto mb-4 text-blue-600" size={40} />
          <h2 className="text-2xl font-black italic uppercase tracking-tighter text-gray-900 mb-6">
            Privacy Inquiries
          </h2>
          <div className="space-y-4 inline-block text-left">
            <div className="flex items-center gap-4 text-gray-600">
              <span className="text-[10px] font-black uppercase tracking-widest bg-gray-100 px-2 py-1 rounded">
                Email
              </span>
              <span className="font-bold">privacy@rentease.hr</span>
            </div>
            <div className="flex items-center gap-4 text-gray-600">
              <span className="text-[10px] font-black uppercase tracking-widest bg-gray-100 px-2 py-1 rounded">
                DPO
              </span>
              <span className="font-bold">dpo@rentease.hr</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="max-w-4xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <QuickLink
            href="/pricing/terms"
            icon={FileText}
            title="Terms of Use"
          />
          <QuickLink href="/support&safety" icon={Shield} title="Safety Hub" />
          <QuickLink
            href="/support&safety/contact"
            icon={AlertCircle}
            title="Report Abuse"
          />
        </div>
      </div>
    </div>
  );
}

function QuickLink({
  href,
  icon: Icon,
  title,
}: {
  href: string;
  icon: any;
  title: string;
}) {
  return (
    <Link href={href}>
      <div className="bg-white p-8 rounded-3xl border border-gray-100 hover:border-blue-600 hover:shadow-xl transition-all text-center group">
        <Icon
          className="mx-auto mb-4 text-gray-300 group-hover:text-blue-600 transition-colors"
          size={32}
        />
        <h3 className="text-xs font-black uppercase tracking-widest text-gray-900">
          {title}
        </h3>
      </div>
    </Link>
  );
}
