"use client";

import Link from "next/link";
import {
  HelpCircle,
  ChevronDown,
  MessageCircle,
  BookOpen,
  CreditCard,
  ArrowRight,
} from "lucide-react";
import { useState } from "react";

const faqCategories = [
  {
    category: "Booking & Reservations",
    questions: [
      {
        question: "How far in advance can I book a car?",
        answer:
          "You can book a car up to 12 months in advance. We recommend booking at least 48 hours ahead for better availability, especially during peak seasons.",
      },
      {
        question: "Can I modify or cancel my reservation?",
        answer:
          "Yes! You can modify your reservation anytime up to 48 hours before pickup for free. Cancellations made more than 48 hours in advance receive a full refund. Within 48 hours, a 50% cancellation fee applies.",
      },
      {
        question: "Do I need to create an account to book?",
        answer:
          "Yes, an account is required to ensure secure bookings and enable you to manage your reservations. Creating an account only takes a minute.",
      },
    ],
  },
  {
    category: "Insurance & Protection",
    questions: [
      {
        question: "What insurance is included in the rental?",
        answer:
          "Basic coverage includes third-party liability, collision damage waiver, theft protection, and 24/7 roadside assistance. You can upgrade to Premium Zero Excess at checkout.",
      },
      {
        question: "What is an excess amount?",
        answer:
          "The excess is the maximum amount you're liable to pay if the vehicle is damaged. Basic coverage has €1,000 excess, while Premium has €0.",
      },
    ],
  },
  {
    category: "Vehicle & Pickup",
    questions: [
      {
        question: "Can I choose a specific car model?",
        answer:
          "Yes. Unlike traditional rental agencies, we don't do 'or similar'—when you book a specific listing, that exact vehicle is reserved for you.",
      },
      {
        question: "What is the fuel policy?",
        answer:
          "We operate a full-to-full policy. The car is provided with a full tank and must be returned full to avoid refueling fees.",
      },
    ],
  },
];

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={`transition-all duration-300 rounded-[1.5rem] border ${isOpen ? "bg-white border-blue-600 shadow-xl" : "bg-white border-gray-100 shadow-sm"}`}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-8 py-6 flex items-center justify-between hover:bg-gray-50/50 transition-colors text-left rounded-[1.5rem]"
      >
        <span className="font-black italic uppercase tracking-tighter text-gray-900 pr-4">
          {question}
        </span>
        <div
          className={`p-2 rounded-full transition-all ${isOpen ? "bg-blue-600 text-white rotate-180" : "bg-gray-100 text-gray-400"}`}
        >
          <ChevronDown size={18} />
        </div>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}
      >
        <div className="px-8 pb-8 pt-0">
          <p className="text-gray-500 font-medium leading-relaxed border-t border-gray-50 pt-4 italic">
            {answer}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function FAQPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Premium Header */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full -mr-20 -mt-20 blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-400 rounded-full -ml-20 -mb-20 blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md px-4 py-2 rounded-full mb-6 border border-white/30">
              <HelpCircle size={16} />
              <span className="text-[10px] font-black uppercase tracking-widest">
                Support Center
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-black italic uppercase tracking-tighter mb-6 leading-none">
              How Can We <span className="text-blue-200">Help?</span>
            </h1>
            <p className="text-lg md:text-xl text-blue-100 max-w-2xl mx-auto font-medium">
              Everything you need to know about the DriveDash experience
            </p>
          </div>
        </div>
      </div>

      {/* FAQ Categories */}
      <div className="max-w-4xl mx-auto px-6 py-20">
        <div className="space-y-16">
          {faqCategories.map((category) => (
            <div key={category.category}>
              <div className="flex items-center gap-4 mb-8">
                <div className="h-1 w-12 bg-blue-600 rounded-full" />
                <h2 className="text-2xl font-black italic uppercase tracking-tighter text-gray-900">
                  {category.category}
                </h2>
              </div>
              <div className="space-y-4">
                {category.questions.map((item) => (
                  <FAQItem
                    key={item.question}
                    question={item.question}
                    answer={item.answer}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Support Options */}
      <div className="bg-white py-24 border-t border-gray-100">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black italic uppercase tracking-tighter text-gray-900 mb-4">
              Still Have Questions?
            </h2>
            <p className="text-gray-500 font-bold uppercase tracking-widest text-xs">
              Our elite support team is on standby 24/7
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <SupportCard
              icon={<MessageCircle size={24} />}
              title="Direct Support"
              desc="Chat with our team for personalized help"
              link="/contact"
              cta="Start Chat"
            />
            <SupportCard
              icon={<BookOpen size={24} />}
              title="Rental Guides"
              desc="Step-by-step how-to's and documentation"
              link="/guides"
              cta="View Guides"
            />
            <SupportCard
              icon={<CreditCard size={24} />}
              title="Pricing Info"
              desc="Learn about deposits and fee structures"
              link="/pricing"
              cta="View Pricing"
            />
          </div>
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="max-w-7xl mx-auto px-6 pb-20">
        <div className="bg-gray-900 rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden group">
          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-black italic uppercase tracking-tighter text-white mb-6">
              Ready to Hit <span className="text-blue-500">The Road?</span>
            </h2>
            <Link href="/browse_cars">
              <button className="bg-blue-600 text-white px-10 py-5 rounded-2xl hover:bg-blue-700 transition-all font-black uppercase tracking-widest text-sm flex items-center gap-3 mx-auto shadow-xl shadow-blue-600/20 active:scale-95">
                Browse Fleet
                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </button>
            </Link>
          </div>
          {/* Background Decorative Element */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-blue-600/5 scale-150 rounded-full blur-3xl" />
        </div>
      </div>
    </div>
  );
}

function SupportCard({
  icon,
  title,
  desc,
  link,
  cta,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
  link: string;
  cta: string;
}) {
  return (
    <Link
      href={link}
      className="bg-gray-50 rounded-[2rem] p-8 border border-gray-100 hover:border-blue-600 hover:bg-white hover:shadow-2xl transition-all group"
    >
      <div className="bg-blue-50 text-blue-600 w-14 h-14 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all">
        {icon}
      </div>
      <h3 className="text-xl font-black italic uppercase tracking-tighter text-gray-900 mb-2">
        {title}
      </h3>
      <p className="text-gray-500 text-sm font-medium mb-6 leading-relaxed">
        {desc}
      </p>
      <div className="flex items-center gap-2 text-blue-600 font-black uppercase tracking-widest text-[10px]">
        {cta}{" "}
        <ArrowRight
          size={14}
          className="group-hover:translate-x-1 transition-transform"
        />
      </div>
    </Link>
  );
}
