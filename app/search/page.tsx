import Link from "next/link";

const CARS = [
  {
    id: "tesla-3",
    name: "Tesla Model 3",
    price: 85,
    type: "Electric",
    img: "bg-blue-100",
  },
  {
    id: "bmw-x5",
    name: "BMW X5",
    price: 120,
    type: "Luxury SUV",
    img: "bg-slate-200",
  },
  {
    id: "vw-golf",
    name: "VW Golf",
    price: 55,
    type: "Economy",
    img: "bg-green-100",
  },
];

export default function SearchPage() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <h2 className="text-3xl font-extrabold text-slate-900 mb-8">
        Available Near You
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {CARS.map((car) => (
          <div
            key={car.id}
            className="group rounded-3xl border border-slate-100 bg-white p-4 shadow-sm hover:shadow-xl transition-all"
          >
            <div
              className={`aspect-video w-full rounded-2xl mb-4 ${car.img} flex items-center justify-center text-slate-400 font-bold uppercase tracking-widest`}
            >
              Vehicle Image
            </div>
            <div className="px-2">
              <h3 className="text-xl font-bold text-slate-900">{car.name}</h3>
              <p className="text-sm font-medium text-slate-500">{car.type}</p>
              <div className="mt-4 flex items-center justify-between">
                <p className="text-2xl font-black text-slate-900">
                  ${car.price}
                  <span className="text-sm font-normal text-slate-500">
                    /day
                  </span>
                </p>
                <Link
                  href={`/cars/${car.id}`}
                  className="rounded-lg bg-slate-100 px-4 py-2 text-sm font-bold text-slate-900 group-hover:bg-blue-600 group-hover:text-white transition-colors"
                >
                  Details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
