import type { Metadata } from "next";
import "./globals.css";
import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "Radiance Multispeciality Clinic & 3G Diagnostic Imaging Center",
    template: "%s | Radiance Clinic & 3G Diagnostic Imaging"
  },
  description: "Radiance Multispeciality Clinic and 3G Diagnostic Imaging Center: High-precision 3D/4D Ultrasound, Digital X-Ray, HSG & Fluoroscopy, CT/MRI scan readings, and multispeciality clinical care in Adi Dero and Bahir Dar, Ethiopia.",
  keywords: [
    "3G Diagnostic Imaging",
    "Radiance Clinic",
    "Ultrasound Bahir Dar",
    "Ultrasound Adi Dero",
    "Digital X-Ray Ethiopia",
    "HSG Hysterosalpingography",
    "CT Scan Reading Ethiopia",
    "MRI Second Opinion",
    "4D Ultrasound",
    "Echocardiography",
    "Doppler Ultrasound",
    "3ጂ ንድሕነት ሕክምና ቅድሚያ ይሀብ"
  ],
  icons: {
    icon: "/images/logo-icon.png",
    apple: "/images/logo-icon.png"
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full antialiased scroll-smooth">
      <body className="min-h-full flex flex-col bg-slate-50/50 text-slate-800 selection:bg-[#B61F32] selection:text-white">
        <TopBar />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
