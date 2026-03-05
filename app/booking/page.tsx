export default function BookingPage() {
  return (
    <div className="max-w-xl mx-auto px-6 py-16">
      <div className="rounded-3xl bg-white p-8 shadow-2xl border border-slate-50">
        <h2 className="text-2xl font-bold text-slate-900 mb-6">
          Booking Summary
        </h2>
        <div className="space-y-4 mb-8">
          <div className="flex justify-between text-slate-600">
            <span>Daily Rate</span>
            <span>$85.00</span>
          </div>
          <div className="flex justify-between text-slate-600">
            <span>Insurance</span>
            <span>$15.00</span>
          </div>
          <div className="flex justify-between text-xl font-black text-slate-900 pt-4 border-t">
            <span>Total</span>
            <span>$100.00</span>
          </div>
        </div>
        <button className="w-full rounded-xl bg-blue-600 py-4 text-lg font-bold text-white hover:bg-blue-700 transition-colors shadow-lg shadow-blue-200">
          Confirm and Pay
        </button>
      </div>
    </div>
  );
}
