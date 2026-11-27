import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";
import { ThemeProvider } from "@/context/ThemeContext";
import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

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
    "Doppler Ultrasound"
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
    <html lang="en" className={`${plusJakarta.variable} h-full antialiased scroll-smooth`} suppressHydrationWarning>
      <body className="min-h-full flex flex-col bg-[#FBFCFE] dark:bg-[#050B14] text-slate-800 dark:text-slate-100 selection:bg-[#B61F32] selection:text-white">
        <ThemeProvider>
          <LanguageProvider>
            <TopBar />
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
