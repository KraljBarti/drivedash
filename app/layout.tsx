import { Navigation } from "./_components/navigation";
import { Footer } from "./_components/footer";
import "./globals.css";
import { Inter } from "next/font/google"; // Bonus: Next.js optimizacija fontova

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "DriveDash | Najam vozila",
  description: "Rezervirajte idealno vozilo u nekoliko klikova.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="hr">
      <body
        className={`${inter.className} min-h-screen bg-white flex flex-col`}
      >
        <Navigation />
        <main className="flex-grow">
          {/* 'children' ovdje mijenja 'Outlet' iz React Routera */}
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
