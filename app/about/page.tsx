import Link from "next/link"; // Changed
import { Heart, Users, Shield, Target, Award, CheckCircle } from "lucide-react";

// Replace this with your actual image path in the public folder
const communityImage =
  "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=1200";

const values = [
  {
    icon: Heart,
    title: "Community First",
    description:
      "Building a trusted network where renters and hosts support each other.",
  },
  {
    icon: Shield,
    title: "Safety & Trust",
    description:
      "Every user is verified, and every rental is protected with insurance.",
  },
  {
    icon: Target,
    title: "Transparency",
    description: "No hidden fees. We believe in honest, upfront pricing.",
  },
  {
    icon: Award,
    title: "Quality Service",
    description:
      "From booking to return, we strive for exceptional experiences.",
  },
];

const stats = [
  { value: "10K+", label: "Happy Customers" },
  { value: "5K+", label: "Vehicles" },
  { value: "50+", label: "Cities" },
  { value: "4.9/5", label: "Average Rating" },
];

const milestones = [
  {
    year: "2020",
    event: "DriveDash Founded",
    description: "Started with 50 cars in Zagreb",
  },
  {
    year: "2022",
    event: "Nationwide Coverage",
    description: "Operating in 50+ cities across Croatia",
  },
  {
    year: "2024",
    event: "Digital Key Launch",
    description: "Introducing instant mobile unlocking",
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header - Using CRAP Contrast */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <Users className="mx-auto mb-6 opacity-80" size={60} />
          <h1 className="text-5xl font-extrabold mb-4 tracking-tight">
            About DriveDash
          </h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto leading-relaxed">
            Revolutionizing mobility through transparency and technology.
          </p>
        </div>
      </div>

      {/* Mission & Stats */}
      <div className="max-w-6xl mx-auto px-6 -mt-12">
        <div className="bg-white rounded-2xl shadow-xl p-10 border border-gray-100">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Our Mission
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              We connect people who need a specific car with local owners,
              eliminating the "or similar" gamble of traditional rentals.
            </p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 pt-10 border-t border-gray-100">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-4xl font-black text-blue-600 mb-1">
                  {stat.value}
                </div>
                <div className="text-sm font-bold text-gray-500 uppercase tracking-widest">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Values Grid - Using Repetition */}
      <div className="max-w-7xl mx-auto px-6 py-24">
        <h2 className="text-3xl font-bold text-center mb-16">What Drives Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {values.map((v) => (
            <div
              key={v.title}
              className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="bg-blue-50 w-14 h-14 rounded-xl flex items-center justify-center mb-6">
                <v.icon className="text-blue-600" size={30} />
              </div>
              <h3 className="text-2xl font-bold mb-3">{v.title}</h3>
              <p className="text-gray-600 leading-relaxed">{v.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Community Image - Proximity */}
      <div className="max-w-7xl mx-auto px-6 mb-24">
        <div className="relative rounded-3xl overflow-hidden shadow-2xl">
          <img
            src={communityImage}
            alt="Our Community"
            className="w-full h-[500px] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-12">
            <p className="text-white text-2xl font-medium max-w-xl">
              "DriveDash changed how I travel for work. I know exactly what I'm
              getting every single time."
            </p>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-slate-900 py-20 px-6 text-center">
        <h2 className="text-3xl font-bold text-white mb-8">
          Ready to experience the difference?
        </h2>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/search"
            className="bg-blue-600 text-white px-10 py-4 rounded-xl font-bold hover:bg-blue-500 transition-all"
          >
            Start Renting
          </Link>
          <Link
            href="/support"
            className="border border-white/30 text-white px-10 py-4 rounded-xl font-bold hover:bg-white/10 transition-all"
          >
            Contact Support
          </Link>
        </div>
      </div>
    </div>
  );
}
