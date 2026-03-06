"use client";

import Link from "next/link";
import Image from "next/image";
import {
  Star,
  StarHalf,
  Pencil,
  MessageSquare,
  ShieldCheck,
  ThumbsUp,
} from "lucide-react";

const ratingBreakdown = [
  { stars: 5, count: 124, percentage: 68 },
  { stars: 4, count: 42, percentage: 23 },
  { stars: 3, count: 12, percentage: 7 },
  { stars: 2, count: 3, percentage: 2 },
  { stars: 1, count: 1, percentage: 0.5 },
];

const reviews = [
  {
    id: 1,
    userName: "Sarah Martinez",
    avatar:
      "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=200&h=200&auto=format&fit=crop",
    rating: 5,
    date: "November 28, 2025",
    comment:
      "Excellent experience! The Mercedes was in pristine condition and the owner was very professional. Pick-up and drop-off were smooth. Highly recommend for anyone looking for a luxury car rental.",
    carRented: "Mercedes-Benz E-Class",
  },
  {
    id: 2,
    userName: "Michael Chen",
    avatar:
      "https://images.unsplash.com/photo-1672685667592-0392f458f46f?q=80&w=200&h=200&auto=format&fit=crop",
    rating: 5,
    date: "November 25, 2025",
    comment:
      "Great car and even better service. The Toyota RAV4 was perfect for our family road trip. Clean, comfortable, and fuel-efficient. The booking process was seamless!",
    carRented: "Toyota RAV4",
  },
  {
    id: 3,
    userName: "Emma Johnson",
    avatar:
      "https://images.unsplash.com/photo-1724941407869-f8fb46a3cc38?q=80&w=200&h=200&auto=format&fit=crop",
    rating: 4,
    date: "November 22, 2025",
    comment:
      "Good value for money. The VW Golf was perfect for navigating the city. Only minor issue was a small scratch on the bumper, but the owner was upfront about it.",
    carRented: "VW Golf",
  },
];

function StarRating({ rating, size = 18 }: { rating: number; size?: number }) {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;

  return (
    <div className="flex items-center gap-0.5">
      {[...Array(fullStars)].map((_, i) => (
        <Star
          key={`full-${i}`}
          size={size}
          className="fill-blue-600 text-blue-600"
        />
      ))}
      {hasHalfStar && (
        <StarHalf size={size} className="fill-blue-600 text-blue-600" />
      )}
      {[...Array(5 - Math.ceil(rating))].map((_, i) => (
        <Star key={`empty-${i}`} size={size} className="text-slate-200" />
      ))}
    </div>
  );
}

export default function ReviewsPage() {
  const totalReviews = ratingBreakdown.reduce(
    (acc, item) => acc + item.count,
    0,
  );
  const averageRating = 4.8;

  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      {/* Hero Section */}
      <div className="bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-transparent" />
        <div className="max-w-7xl mx-auto px-6 py-20 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-center md:text-left">
              <h1 className="text-4xl md:text-6xl font-black italic uppercase tracking-tighter mb-4">
                Community <span className="text-blue-500">Feedback</span>
              </h1>
              <p className="text-gray-400 font-medium text-sm md:text-base tracking-widest uppercase">
                Trusted by {totalReviews}+ drivers worldwide
              </p>
            </div>
            <Link href="/reviews/review">
              <button className="group bg-blue-600 text-white px-10 py-5 rounded-2xl hover:bg-blue-700 transition-all flex items-center gap-3 shadow-xl shadow-blue-600/20 font-black uppercase tracking-widest text-xs">
                <Pencil size={18} />
                Write A Review
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Ratings Dashboard */}
      <div className="max-w-7xl mx-auto px-6 -mt-10 relative z-20 pb-16">
        <div className="bg-white rounded-[2.5rem] shadow-xl shadow-slate-200/60 p-8 md:p-12 border border-white">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Average Score */}
            <div className="lg:col-span-4 flex flex-col items-center justify-center text-center lg:border-r border-slate-100 py-4">
              <div className="text-8xl font-black italic tracking-tighter text-slate-900 mb-2">
                {averageRating}
              </div>
              <StarRating rating={averageRating} size={24} />
              <div className="mt-4 inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest">
                <ShieldCheck size={14} /> Verified Score
              </div>
            </div>

            {/* Breakdown Bars */}
            <div className="lg:col-span-8 space-y-4">
              <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-4">
                Rating Distribution
              </p>
              {ratingBreakdown.map((item) => (
                <div key={item.stars} className="flex items-center gap-4 group">
                  <div className="flex items-center gap-1 w-12 shrink-0">
                    <span className="text-xs font-black text-slate-600">
                      {item.stars}
                    </span>
                    <Star
                      size={12}
                      className="fill-slate-300 text-slate-300 group-hover:fill-blue-500 group-hover:text-blue-500 transition-colors"
                    />
                  </div>
                  <div className="flex-1 h-3 bg-slate-100 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-blue-600 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${item.percentage}%` }}
                    />
                  </div>
                  <span className="text-[10px] font-bold text-slate-400 w-12 text-right">
                    {item.count}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Reviews Feed */}
        <div className="mt-16 max-w-4xl mx-auto">
          <div className="flex items-center justify-between mb-8 px-4">
            <h2 className="text-2xl font-black italic uppercase tracking-tight text-slate-900">
              Latest <span className="text-blue-600">Reviews</span>
            </h2>
            <div className="flex items-center gap-2 text-slate-400">
              <MessageSquare size={18} />
              <span className="text-xs font-bold uppercase tracking-widest">
                {totalReviews} Total
              </span>
            </div>
          </div>

          <div className="space-y-6">
            {reviews.map((review) => (
              <div
                key={review.id}
                className="bg-white rounded-[2rem] shadow-sm p-8 border border-slate-100 hover:border-blue-200 transition-all hover:shadow-xl hover:shadow-slate-200/40"
              >
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="w-14 h-14 rounded-2xl overflow-hidden shrink-0 border-2 border-slate-50 shadow-sm">
                    <Image
                      src={review.avatar}
                      alt={review.userName}
                      width={56}
                      height={56}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-4">
                      <div>
                        <h3 className="font-black uppercase tracking-tight text-slate-900 text-lg leading-tight">
                          {review.userName}
                        </h3>
                        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                          {review.date}
                        </p>
                      </div>
                      <div className="flex flex-col items-end">
                        <StarRating rating={review.rating} />
                        <span className="text-[9px] font-black text-green-600 uppercase tracking-widest mt-1 bg-green-50 px-2 py-0.5 rounded-full">
                          Verified Trip
                        </span>
                      </div>
                    </div>

                    <p className="text-slate-600 leading-relaxed font-medium text-sm mb-6 italic">
                      "{review.comment}"
                    </p>

                    <div className="flex items-center justify-between pt-4 border-t border-slate-50">
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 bg-slate-900 rounded flex items-center justify-center text-[10px] text-white font-bold uppercase">
                          R
                        </div>
                        <span className="text-[10px] font-black uppercase text-slate-500 tracking-wider">
                          Rented {review.carRented}
                        </span>
                      </div>
                      <button className="flex items-center gap-1.5 text-slate-300 hover:text-blue-600 transition-colors">
                        <ThumbsUp size={14} />
                        <span className="text-[10px] font-black uppercase tracking-widest">
                          Helpful
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 flex justify-center">
            <button className="px-10 py-4 border-2 border-slate-200 text-slate-400 rounded-2xl hover:border-blue-600 hover:text-blue-600 transition-all font-black uppercase tracking-widest text-[10px]">
              Load More Experiences
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
