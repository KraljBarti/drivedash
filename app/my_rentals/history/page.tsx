"use client";

import {
  Calendar,
  MapPin,
  ChevronLeft,
  Star,
  FileText,
  CheckCircle2,
} from "lucide-react";
import Link from "next/link";

const pastRentals = [
  {
    id: 1,
    car: "Toyota RAV4",
    image:
      "https://images.unsplash.com/photo-1758411898280-2dc7c95e0ba7?q=80&w=1080",
    pickupDate: "Nov 15, 2025",
    returnDate: "Nov 18, 2025",
    location: "Split",
    price: 195,
    reviewed: true,
  },
  {
    id: 2,
    car: "VW Golf",
    image:
      "https://images.unsplash.com/photo-1701314860844-cd2152fa9071?q=80&w=1080",
    pickupDate: "Oct 10, 2025",
    returnDate: "Oct 12, 2025",
    location: "Rijeka",
    price: 90,
    reviewed: false,
  },
];

export default function RentalHistoryPage() {
  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      {/* Navigation Header */}
      <div className="bg-white border-b border-gray-100 sticky top-0 z-30">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <Link
            href="/my_rentals"
            className="flex items-center gap-2 text-gray-500 hover:text-blue-600 transition-all font-bold uppercase tracking-widest text-[10px] w-fit"
          >
            <ChevronLeft size={16} />
            Back to Dashboard
          </Link>
        </div>
      </div>

      {/* Hero Header */}
      <div className="bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-transparent" />
        <div className="max-w-7xl mx-auto px-6 py-16 relative z-10">
          <h1 className="text-4xl md:text-5xl font-black italic uppercase tracking-tighter mb-2">
            Rental <span className="text-blue-500">History</span>
          </h1>
          <p className="text-gray-400 font-medium uppercase tracking-widest text-xs">
            Review your past journeys and managed invoices
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="space-y-8">
          {pastRentals.map((rental) => (
            <div
              key={rental.id}
              className="group bg-white rounded-[2rem] shadow-sm border border-gray-100 overflow-hidden hover:shadow-xl hover:shadow-blue-900/5 transition-all duration-500"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12">
                {/* Image Section */}
                <div className="lg:col-span-3 h-56 lg:h-auto relative overflow-hidden">
                  <img
                    src={rental.image}
                    alt={rental.car}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-slate-900/80 backdrop-blur-md text-white px-3 py-1 rounded-lg text-[10px] font-black uppercase tracking-widest">
                      Completed
                    </span>
                  </div>
                </div>

                {/* Info Section */}
                <div className="lg:col-span-6 p-8 border-r border-gray-50">
                  <div className="mb-6">
                    <h3 className="text-2xl font-black italic uppercase tracking-tighter text-gray-900 mb-2">
                      {rental.car}
                    </h3>
                    <div className="flex flex-wrap gap-4">
                      <div className="flex items-center gap-2 text-xs font-bold text-gray-400 uppercase tracking-widest">
                        <Calendar size={14} className="text-blue-600" />
                        {rental.pickupDate} — {rental.returnDate}
                      </div>
                      <div className="flex items-center gap-2 text-xs font-bold text-gray-400 uppercase tracking-widest">
                        <MapPin size={14} className="text-blue-600" />
                        {rental.location}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <button className="flex items-center gap-2 px-5 py-2.5 bg-gray-50 text-gray-900 rounded-xl text-xs font-black uppercase tracking-widest border border-gray-100 hover:bg-gray-100 transition-colors">
                      <FileText size={14} />
                      View Receipt
                    </button>

                    {rental.reviewed ? (
                      <div className="flex items-center gap-2 px-5 py-2.5 bg-green-50 text-green-600 rounded-xl text-xs font-black uppercase tracking-widest border border-green-100">
                        <CheckCircle2 size={14} />
                        Reviewed
                      </div>
                    ) : (
                      <Link href="/reviews/review">
                        <button className="flex items-center gap-2 px-5 py-2.5 bg-blue-600 text-white rounded-xl text-xs font-black uppercase tracking-widest border border-blue-600 hover:bg-blue-700 transition-colors shadow-lg shadow-blue-600/20">
                          <Star size={14} />
                          Write Review
                        </button>
                      </Link>
                    )}
                  </div>
                </div>

                {/* Financial Summary Section */}
                <div className="lg:col-span-3 p-8 bg-gray-50/50 flex flex-col justify-center items-center lg:items-end text-center lg:text-right">
                  <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">
                    Total Amount Paid
                  </p>
                  <div className="text-4xl font-black italic tracking-tighter text-gray-900">
                    €{rental.price}
                  </div>
                  <div className="mt-4 flex items-center gap-1 text-[10px] font-bold text-green-600 uppercase tracking-widest">
                    <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
                    Transaction Secured
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Support Section */}
        <div className="mt-16 bg-white rounded-[2.5rem] p-10 border border-gray-100 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <h4 className="text-xl font-black italic uppercase tracking-tighter text-gray-900 mb-1">
              Need help with a past trip?
            </h4>
            <p className="text-sm text-gray-400 font-medium">
              Reporting an issue or requesting a refund for a previous rental.
            </p>
          </div>
          <Link href="/support&safety/contact">
            <button className="px-8 py-4 bg-slate-900 text-white rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-blue-600 transition-all">
              Contact Support
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
