export default function ProfilePage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-12">
      <h2 className="text-3xl font-black text-slate-900 mb-8">My Garage</h2>
      <div className="rounded-3xl bg-gradient-to-br from-blue-600 to-indigo-700 p-8 text-white shadow-2xl overflow-hidden relative">
        <div className="relative z-10">
          <p className="text-blue-100 font-bold uppercase tracking-widest text-xs mb-2">
            Active Trip
          </p>
          <h3 className="text-3xl font-black mb-1">Tesla Model 3</h3>
          <p className="text-blue-200 mb-10">Terminal 4 • Parking Spot #88</p>

          <button className="w-full bg-white text-blue-600 py-6 rounded-2xl font-black text-2xl shadow-xl hover:bg-blue-50 active:scale-95 transition-all">
            TAP TO UNLOCK 🔓
          </button>
        </div>
        <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
      </div>
    </div>
  );
}
