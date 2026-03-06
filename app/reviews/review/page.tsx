"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Star,
  ChevronLeft,
  CheckCircle2,
  MessageSquarePlus,
} from "lucide-react";

export default function WriteReviewPage() {
  const [rating, setRating] = useState(0);
  const [hoveredRating, setHoveredRating] = useState(0);

  // Categories for granular feedback
  const categories = [
    "Cleanliness",
    "Communication",
    "Value for Money",
    "Vehicle Accuracy",
  ];

  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      {/* Navigation Bar */}
      <div className="bg-white/80 backdrop-blur-md border-b border-slate-200 sticky top-0 z-30">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <Link
            href="/reviews"
            className="flex items-center gap-2 text-slate-500 hover:text-blue-600 transition-colors w-fit font-black uppercase tracking-widest text-[10px]"
          >
            <ChevronLeft size={16} />
            <span>Discard Review</span>
          </Link>
        </div>
      </div>

      {/* Hero Header */}
      <div className="bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-transparent" />
        <div className="max-w-7xl mx-auto px-6 py-16 relative z-10 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-black italic uppercase tracking-tighter mb-2">
            Share Your <span className="text-blue-500">Experience</span>
          </h1>
          <p className="text-gray-400 font-medium text-sm tracking-widest uppercase">
            Your feedback builds a better community
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 -mt-8 relative z-20 pb-24">
        <div className="bg-white rounded-[2.5rem] shadow-xl shadow-slate-200/60 overflow-hidden border border-white">
          <div className="p-8 md:p-12">
            <div className="flex items-center gap-3 mb-10">
              <MessageSquarePlus className="text-blue-600" size={24} />
              <h2 className="text-xl font-black italic uppercase tracking-tight text-slate-900">
                New Review
              </h2>
            </div>

            <div className="space-y-10">
              {/* Overall Rating Hero */}
              <div className="bg-slate-50 rounded-3xl p-8 text-center border border-slate-100">
                <label className="block text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-6">
                  How was your overall trip?
                </label>
                <div className="flex flex-col items-center gap-4">
                  <div className="flex items-center gap-3">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        type="button"
                        onClick={() => setRating(star)}
                        onMouseEnter={() => setHoveredRating(star)}
                        onMouseLeave={() => setHoveredRating(0)}
                        className="transition-all transform hover:scale-125 active:scale-95"
                      >
                        <Star
                          size={48}
                          className={`${
                            star <= (hoveredRating || rating)
                              ? "fill-blue-600 text-blue-600 drop-shadow-[0_0_15px_rgba(37,99,235,0.3)]"
                              : "text-slate-200"
                          } transition-all duration-200`}
                        />
                      </button>
                    ))}
                  </div>
                  {rating > 0 && (
                    <p className="text-blue-600 font-black italic uppercase tracking-widest text-xs animate-in fade-in zoom-in duration-300">
                      {rating === 5
                        ? "Incredible!"
                        : rating === 4
                          ? "Great Experience"
                          : rating === 3
                            ? "It was okay"
                            : "Needs Improvement"}
                    </p>
                  )}
                </div>
              </div>

              {/* Form Content */}
              <div className="grid grid-cols-1 gap-8">
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-500 ml-1">
                    Select Vehicle
                  </label>
                  <select className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all font-bold text-slate-900 appearance-none cursor-pointer">
                    <option value="">Which car did you rent?</option>
                    <option value="1">Mercedes-Benz E-Class</option>
                    <option value="2">Toyota RAV4</option>
                    <option value="3">VW Golf</option>
                    <option value="4">Tesla Model 3</option>
                    <option value="5">Porsche 911</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-500 ml-1">
                    Review Headline
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Smooth ride and excellent host"
                    className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all font-bold text-slate-900"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-500 ml-1">
                    Detailed Review
                  </label>
                  <textarea
                    placeholder="Tell the community about the car's performance, cleanliness, and the host's communication..."
                    rows={6}
                    className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all font-bold text-slate-900 resize-none"
                  />
                  <div className="flex justify-between px-2">
                    <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">
                      Min. 50 characters
                    </p>
                    <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">
                      0 / 500
                    </p>
                  </div>
                </div>
              </div>

              {/* Granular Ratings */}
              <div className="border-t border-slate-100 pt-10">
                <h3 className="text-[11px] font-black uppercase tracking-[0.2em] text-slate-400 mb-6">
                  Granular Feedback
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
                  {categories.map((category) => (
                    <div
                      key={category}
                      className="flex items-center justify-between group"
                    >
                      <span className="text-sm font-bold text-slate-700">
                        {category}
                      </span>
                      <div className="flex items-center gap-1">
                        {[1, 2, 3, 4, 5].map((s) => (
                          <button
                            key={s}
                            type="button"
                            className="text-slate-200 hover:text-blue-500 transition-colors"
                          >
                            <Star size={16} className="hover:fill-current" />
                          </button>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-10 border-t border-slate-100">
                <Link href="/reviews" className="flex-1 order-2 sm:order-1">
                  <button className="w-full px-8 py-5 border-2 border-slate-100 text-slate-400 rounded-2xl hover:bg-slate-50 hover:text-slate-600 transition-all font-black uppercase tracking-widest text-[10px]">
                    Cancel
                  </button>
                </Link>
                <Link href="/reviews" className="flex-1 order-1 sm:order-2">
                  <button className="w-full px-8 py-5 bg-blue-600 text-white rounded-2xl hover:bg-blue-700 hover:shadow-xl hover:shadow-blue-600/20 transition-all font-black uppercase tracking-widest text-[10px] flex items-center justify-center gap-2">
                    <CheckCircle2 size={16} />
                    Post My Review
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
