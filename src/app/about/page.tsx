import Image from "next/image";
import Link from "next/link";
import {
  ShieldCheck,
  Award,
  Users,
  Target,
  Sparkles,
  HeartPulse,
  HeartHandshake,
  ArrowRight,
  CheckCircle2,
  Building2,
  Clock,
  Compass
} from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import EcgDivider from "@/components/EcgDivider";

export const metadata = {
  title: "About Radiance Clinic & 3G Diagnostic Imaging",
  description: "Learn about Radiance Multispeciality Clinic and 3G Diagnostic Imaging: our founding background in Bahir Dar and Adi Dero, our healthcare philosophy, vision, mission, and core values."
};

export default function AboutPage() {
  const values = [
    {
      title: "Patient-First Care",
      desc: "We put the health, safety, and well-being of our patients at the center of everything we do.",
      icon: Users,
      color: "bg-[#B61F32]"
    },
    {
      title: "Quality & Safety",
      desc: "We uphold high standards of medical care, accuracy in diagnosis, and a safe, sterile clinical environment.",
      icon: ShieldCheck,
      color: "bg-blue-600"
    },
    {
      title: "Integrity",
      desc: "We act with honesty, transparency, strict patient confidentiality, and professionalism in all our services.",
      icon: Award,
      color: "bg-amber-500"
    },
    {
      title: "Innovation",
      desc: "We embrace modern medical technology, advanced 3D/4D ultrasound systems, and digital radiography for continuous improvement.",
      icon: Sparkles,
      color: "bg-emerald-600"
    },
    {
      title: "Teamwork",
      desc: "We work together with respect, collaboration, and a shared commitment to deliver excellent patient care.",
      icon: HeartHandshake,
      color: "bg-indigo-600"
    },
    {
      title: "Community Commitment",
      desc: "We are dedicated to improving the health and well-being of our community in Adi Dero, Bahir Dar, and beyond.",
      icon: HeartPulse,
      color: "bg-[#B61F32]"
    }
  ];

  const milestones = [
    {
      year: "The Beginning",
      title: "Founding with a Clear Vision",
      desc: "Established by a dedicated team of healthcare professionals to bridge the gap in quality, integrated healthcare and advanced diagnostic imaging."
    },
    {
      year: "Our Growth",
      title: "Expanding to Multispeciality Care",
      desc: "From a focused diagnostic clinic into a multispeciality medical and imaging center, continuously adding high-resolution ultrasound modalities and digital X-ray services."
    },
    {
      year: "Today",
      title: "3G Diagnostic Imaging Excellence",
      desc: "A trusted healthcare destination in Adi Dero and Bahir Dar, recognized for 27+ ultrasound modalities, special fluoroscopy procedures (HSG), and rapid turnaround times."
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50/60 pb-24">
      {/* Header Banner */}
      <div className="bg-[#002047] text-white py-16 sm:py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#B61F32]/15 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-4">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#B61F32] text-white text-xs font-bold uppercase tracking-wider">
              Company Profile & Heritage
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
              About Radiance Clinic & <br />
              <span className="text-red-400">3G Diagnostic Imaging</span>
            </h1>
            <p className="text-base sm:text-lg text-slate-200 leading-relaxed">
              &quot;Better Health. Brighter Tomorrow.&quot; — Delivering accessible, high-quality, and patient-centered diagnostic imaging and multispeciality healthcare.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 space-y-16">
        {/* Story Section with Building Photo */}
        <section className="bg-white rounded-3xl p-6 sm:p-12 border border-slate-200 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-6 space-y-5">
              <span className="text-xs font-bold text-[#B61F32] uppercase tracking-wider">
                Our Story & Background
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#002047] leading-tight">
                Built on a Commitment to Quality Care & Accurate Diagnosis
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                Radiance Multispeciality Clinic and Diagnostic Center was established with a clear purpose — to provide accessible, reliable, and comprehensive healthcare services to our community.
              </p>
              <p className="text-sm text-slate-600 leading-relaxed">
                Recognizing the growing need for quality medical care and modern diagnostic services in the region, Radiance was founded by a team of healthcare professionals with a shared vision of creating a patient-centered, trusted, and modern clinic.
              </p>

              {/* Milestones timeline */}
              <div className="space-y-4 pt-2">
                {milestones.map((m, i) => (
                  <div key={i} className="flex items-start gap-3.5">
                    <div className="w-8 h-8 rounded-full bg-[#002047] text-white flex items-center justify-center shrink-0 text-xs font-bold">
                      {i + 1}
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-[#002047]">{m.title}</h4>
                      <p className="text-xs text-slate-500 mt-0.5 leading-relaxed">{m.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-slate-100">
                <div className="relative h-80 sm:h-96 w-full">
                  <Image
                    src="/images/photo-building.jpg"
                    alt="Radiance Clinic Modern Facility Exterior"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6 bg-[#001533] text-white">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs text-red-300 font-semibold">Bahir Dar & Adi Dero</p>
                      <h4 className="text-sm font-bold">Modern, Patient-Friendly Infrastructure</h4>
                    </div>
                    <span className="px-2.5 py-1 rounded bg-[#B61F32] text-white text-[11px] font-bold">
                      World-Class Standards
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Vision & Mission Cards */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Vision */}
          <div className="bg-white rounded-3xl p-8 border-2 border-slate-200 shadow-sm relative overflow-hidden">
            <div className="w-14 h-14 rounded-2xl bg-[#002047] text-white flex items-center justify-center mb-5 shadow-md">
              <Target className="w-7 h-7 text-red-400" />
            </div>
            <span className="text-xs font-bold text-[#B61F32] uppercase tracking-wider">
              Strategic Direction
            </span>
            <h3 className="text-2xl font-extrabold text-[#002047] mt-1">Our Vision</h3>
            <p className="text-sm text-slate-600 mt-3 leading-relaxed">
              To be a leading and trusted multispeciality clinic and diagnostic center, delivering accessible, high-quality, and patient-centered healthcare in Adi Dero, Bahir Dar, and beyond.
            </p>
          </div>

          {/* Mission */}
          <div className="bg-white rounded-3xl p-8 border-2 border-red-100 shadow-sm relative overflow-hidden">
            <div className="w-14 h-14 rounded-2xl bg-[#B61F32] text-white flex items-center justify-center mb-5 shadow-md">
              <Compass className="w-7 h-7 text-white" />
            </div>
            <span className="text-xs font-bold text-[#002047] uppercase tracking-wider">
              Daily Purpose
            </span>
            <h3 className="text-2xl font-extrabold text-[#002047] mt-1">Our Mission</h3>
            <p className="text-sm text-slate-600 mt-3 leading-relaxed">
              To provide comprehensive, safe, and reliable medical and diagnostic services through skilled professionals, modern technology, and compassionate care, with a commitment to improving the health and well-being of our community.
            </p>
          </div>
        </section>

        {/* Core Values Section */}
        <section className="bg-white rounded-3xl p-6 sm:p-12 border border-slate-200 shadow-sm">
          <SectionHeading
            badge="Guiding Principles"
            title="Our Core Values That"
            highlightText="Shape Every Visit"
            subtitle="Our core values guide everything we do, from the care we provide to the way we serve our patients, staff, and community."
            centered
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {values.map((v, i) => {
              const Icon = v.icon;
              return (
                <div key={i} className="p-6 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col justify-between">
                  <div>
                    <div className={`w-12 h-12 rounded-xl ${v.color} text-white flex items-center justify-center mb-4 shadow-sm`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="font-bold text-[#002047] text-base">{v.title}</h3>
                    <p className="text-xs text-slate-600 mt-2 leading-relaxed">{v.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Healthcare Philosophy */}
        <section className="bg-gradient-to-r from-[#001533] via-[#002047] to-[#092f61] rounded-3xl p-8 sm:p-12 text-white shadow-xl">
          <div className="max-w-3xl space-y-4">
            <span className="px-3 py-1 rounded-full bg-[#B61F32] text-white text-xs font-bold uppercase tracking-wider">
              Our Healthcare Philosophy
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              &quot;Every patient deserves personalized, respectful, and high-quality care that promotes better health.&quot;
            </h2>
            <p className="text-sm text-slate-300 leading-relaxed">
              At Radiance & 3G Diagnostic Imaging, we believe healthcare is not merely treating symptoms—it is about attentive listening, clear explanations, minimizing stress during examinations, and standing beside our patients through every stage of diagnosis and healing.
            </p>

            <div className="pt-4 flex flex-wrap items-center gap-4">
              <Link
                href="/doctors"
                className="inline-flex items-center gap-2 bg-[#B61F32] hover:bg-[#911624] text-white font-bold text-xs sm:text-sm px-6 py-3 rounded-xl transition-all shadow-md"
              >
                <span>Meet Our Healthcare Team</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-bold text-xs sm:text-sm px-6 py-3 rounded-xl border border-white/20 transition-all"
              >
                <span>Visit Our Locations</span>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
