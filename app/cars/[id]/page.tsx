import Link from "next/link";

export default function CarDetail({ params }: { params: { id: string } }) {
  return (
    <div className="max-w-5xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
      <div className="aspect-square bg-slate-100 rounded-3xl flex items-center justify-center text-slate-400 text-2xl font-bold">
        {params.id.toUpperCase()} Gallery
      </div>
      <div>
        <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-bold uppercase tracking-wider mb-4">
          Verified Vehicle
        </span>
        <h1 className="text-4xl font-extrabold text-slate-900 mb-4">
          Ready for your trip?
        </h1>
        <ul className="space-y-3 mb-8 text-slate-600">
          <li>✅ Fast-charging enabled</li>
          <li>✅ Contactless pickup via App</li>
          <li>✅ Fully sanitized</li>
        </ul>
        <Link
          href="/booking"
          className="block w-full rounded-2xl bg-slate-900 py-4 text-center text-lg font-bold text-white shadow-lg hover:bg-slate-800 active:scale-95 transition-all"
        >
          Proceed to Checkout
        </Link>
      </div>
    </div>
  );
}
