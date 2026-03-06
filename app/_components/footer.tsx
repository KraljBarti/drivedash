"use client"; // Required for dynamic Date and interactive hover states

import Link from "next/link";
import {
  Car,
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
} from "lucide-react";

const footerSections = [
  {
    title: "Company",
    links: [
      { name: "About Us", path: "/about" },
      { name: "Locations", path: "/locations" },
      { name: "Pricing", path: "/pricing" },
      { name: "FAQ", path: "/faq" },
    ],
  },
  {
    title: "For Renters",
    links: [
      { name: "Browse Cars", path: "/browse_cars" },
      { name: "How It Works", path: "/about" },
      { name: "Insurance Options", path: "/pricing/insurance" },
      // Path updated from support&safety to support
      { name: "Rental Guides", path: "/support" },
    ],
  },
  {
    title: "For Hosts",
    links: [
      { name: "Become a Host", path: "/host" },
      { name: "Earnings Calculator", path: "/host" },
      { name: "Host Resources", path: "/host" },
      { name: "Vehicle Listings", path: "/host/manage_listing" },
    ],
  },
  {
    title: "Support",
    links: [
      // Paths updated to match your new folder structure
      { name: "Help Center", path: "/support" },
      { name: "Contact Us", path: "/support/contact" },
      { name: "Terms & Conditions", path: "/pricing/terms" },
      { name: "Privacy Policy", path: "/legal/privacy" },
    ],
  },
];

const socialLinks = [
  { icon: Facebook, url: "#", label: "Facebook" },
  { icon: Twitter, url: "#", label: "Twitter" },
  { icon: Instagram, url: "#", label: "Instagram" },
  { icon: Linkedin, url: "#", label: "LinkedIn" },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4 group w-fit">
              <div className="bg-gradient-to-br from-blue-600 to-blue-700 p-2 rounded-lg group-hover:scale-110 transition-transform">
                <Car className="text-white" size={24} />
              </div>
              <span className="text-xl font-bold text-white tracking-tight italic uppercase">
                DriveDash
              </span>
            </Link>
            <p className="text-gray-400 mb-6 leading-relaxed text-sm">
              Smart car sharing platform connecting renters with local car
              owners across Croatia.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm group">
                <div className="bg-gray-800 p-1.5 rounded-md">
                  <Mail size={14} className="text-blue-400" />
                </div>
                <a
                  href="mailto:support@rentease.hr"
                  className="hover:text-blue-400 transition-colors"
                >
                  support@drivedash.hr
                </a>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <div className="bg-gray-800 p-1.5 rounded-md">
                  <Phone size={14} className="text-blue-400" />
                </div>
                <a
                  href="tel:+38512345678"
                  className="hover:text-blue-400 transition-colors"
                >
                  +385 1 234 5678
                </a>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <div className="bg-gray-800 p-1.5 rounded-md">
                  <MapPin size={14} className="text-blue-400" />
                </div>
                <span>Zagreb, Croatia</span>
              </div>
            </div>
          </div>

          {/* Mapping Sections */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="text-white font-black uppercase tracking-widest text-[10px] mb-6">
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.path}
                      className="text-sm text-gray-400 hover:text-blue-400 transition-colors font-medium"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800/50">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.url}
                    aria-label={social.label}
                    className="bg-gray-800/50 p-2.5 rounded-xl hover:bg-blue-600 hover:text-white transition-all group"
                  >
                    <Icon
                      size={18}
                      className="group-hover:scale-110 transition-transform"
                    />
                  </a>
                );
              })}
            </div>

            <div className="text-[11px] font-bold text-gray-500 uppercase tracking-[0.2em]">
              © {currentYear} DriveDash. Built for the road.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
