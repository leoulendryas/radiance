"use client";

import { useState } from "react";
import Link from "next/link";
import {
  FileText,
  Clock,
  CheckCircle2,
  AlertTriangle,
  HelpCircle,
  ChevronDown,
  ShieldCheck,
  Calendar,
  Phone,
  Waves,
  Zap,
  Sparkles,
  FlaskConical
} from "lucide-react";
import { CLINIC_INFO } from "@/data/clinicInfo";
import SectionHeading from "@/components/SectionHeading";

export default function PatientsPage() {
  const [activeTab, setActiveTab] = useState<"ultrasound" | "xray" | "special" | "lab">("ultrasound");
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const prepGuides = {
    ultrasound: [
      {
        title: "Abdominal & Gallbladder Ultrasound",
        rules: [
          "Fast for 6 to 8 hours prior to the examination (plain water is allowed).",
          "Avoid carbonated beverages, milk, and fatty meals the evening before.",
          "Fasting allows the gallbladder to remain distended and reduces obscuring bowel gas."
        ]
      },
      {
        title: "Pelvic, Urinary Bladder & Early Pregnancy (<14 Weeks)",
        rules: [
          "A full bladder is essential to provide an acoustic window to the uterus, ovaries, or prostate.",
          "Drink 3 to 4 large glasses of plain water (approx. 1 liter) 1 hour before your exam.",
          "Do not urinate until after your scan is finished."
        ]
      },
      {
        title: "Transvaginal Ultrasound (TVS)",
        rules: [
          "You will be asked to completely empty your bladder immediately before the scan.",
          "Can be performed during light menstruation if medically necessary.",
          "Conducted with utmost gentleness, privacy, and full dignity."
        ]
      },
      {
        title: "3D/4D Live Fetal Ultrasound",
        rules: [
          "Best performed between 26 and 30 weeks of gestation for optimal facial detail.",
          "Drink plenty of water for 3 to 4 days leading up to the appointment to increase amniotic fluid clarity.",
          "Have a light snack or juice 20 minutes prior to encourage gentle fetal activity."
        ]
      }
    ],
    xray: [
      {
        title: "General Skeletal & Chest Digital X-Rays",
        rules: [
          "Wear loose, comfortable clothing without metallic buttons, zippers, or underwire.",
          "Remove all necklaces, earrings, hairpins, and glasses prior to entering the exposure suite.",
          "Female patients: Please notify the radiographer immediately if there is any possibility of pregnancy."
        ]
      },
      {
        title: "KUB & Abdominal X-Rays (AXR)",
        rules: [
          "Eat a light, low-residue dinner the evening prior to minimize intestinal gas and stool shadows.",
          "Arrive wearing clothing without heavy belts or metal snaps."
        ]
      }
    ],
    special: [
      {
        title: "HSG (Hysterosalpingography) for Infertility",
        rules: [
          "Strict scheduling: Must be scheduled between Day 7 and Day 10 of your menstrual cycle (after menstrual bleeding has completely ceased, but before ovulation).",
          "Refrain from unprotected intercourse from the start of your cycle until the examination is completed.",
          "A light snack is fine beforehand. Mild prophylactic analgesia may be advised by your gynecologist."
        ]
      },
      {
        title: "IVU / IVP (Intravenous Urogram)",
        rules: [
          "Serum Creatinine laboratory test must be completed within 30 days prior to confirm healthy kidney filtration.",
          "Fast for 6 hours prior to the exam.",
          "Drink abundant water following the procedure to rapidly flush the contrast agent."
        ]
      },
      {
        title: "Barium Swallow & Barium Meal",
        rules: [
          "Strict overnight fasting for at least 8 hours (no food, water, tea, chewing gum, or cigarettes on the morning of the exam).",
          "Inform our staff if you have severe constipation or suspected bowel perforation."
        ]
      },
      {
        title: "Barium Enema",
        rules: [
          "Requires full bowel cleansing the day prior (clear fluid diet and prescribed bowel prep kit).",
          "Detailed prep instructions and medication instructions will be supplied upon scheduling."
        ]
      }
    ],
    lab: [
      {
        title: "Fasting Blood Sugar & Lipid Profiles",
        rules: [
          "Fast overnight for 10 to 12 hours (water is permitted).",
          "Avoid heavy fatty foods or alcohol the night before.",
          "Continue routine prescribed blood pressure medications unless instructed otherwise."
        ]
      },
      {
        title: "Routine Complete Blood Count (CBC) & Serology",
        rules: [
          "No dietary fasting needed.",
          "Ensure good hydration so veins are easily accessible for gentle collection."
        ]
      }
    ]
  };

  const faqs = [
    {
      q: "Is ultrasound safe during pregnancy?",
      a: "Yes, diagnostic ultrasound uses high-frequency sound waves, not ionizing radiation. It is completely safe for both mother and developing fetus when performed by certified sonologists."
    },
    {
      q: "Do I need a doctor's referral to get an ultrasound or X-ray?",
      a: "While a doctor's referral slip is recommended to pinpoint specific clinical questions, we also accept self-requested routine health check-ups, early pregnancy scans, and wellness screenings."
    },
    {
      q: "How soon will my examination results and report be ready?",
      a: "Most ultrasound scans and digital X-rays receive immediate preliminary review, with formal written reports ready within 1 to 2 hours. Digital copies and high-resolution images can be delivered directly to your phone via WhatsApp or email."
    },
    {
      q: "What is the best time in pregnancy to do a 3D/4D ultrasound?",
      a: "The ideal window is between 26 and 30 weeks of pregnancy, when the baby has developed sufficient subcutaneous facial fat and ample amniotic fluid surrounds the face for clear surface rendering."
    },
    {
      q: "Why do I need to fast before an abdominal ultrasound?",
      a: "Eating triggers the gallbladder to contract and empty its bile, making it impossible to see gallstones. Digestion also generates stomach and intestinal gas that reflects sound waves and blocks views of the pancreas and aorta."
    },
    {
      q: "What should I bring on the day of my appointment?",
      a: "Please bring a valid ID, your doctor's requisition or referral letter (if any), previous imaging reports or discs for comparison, and wear comfortable, loose-fitting two-piece clothing."
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50/60 pb-24">
      {/* Header */}
      <div className="bg-[#002047] text-white py-14 sm:py-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-red-600/15 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-3">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#B61F32] text-white text-xs font-bold uppercase tracking-wider">
              Patient Care & Preparation
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
              Patient Preparation & Guide
            </h1>
            <p className="text-base sm:text-lg text-slate-200 leading-relaxed">
              Proper preparation ensures crisp diagnostic clarity and reduces unnecessary scan repeats. Review our step-by-step instructions before your scan.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 space-y-16">
        {/* Preparation Guide Interactive Tabs */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-xl">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 pb-4 border-b border-slate-100">
            <div>
              <span className="text-xs font-bold text-[#B61F32] uppercase tracking-wider">
                Pre-Examination Instructions
              </span>
              <h2 className="text-2xl font-extrabold text-[#002047] mt-1">
                How to Prepare for Your Examination
              </h2>
            </div>

            {/* Tab switchers */}
            <div className="flex flex-wrap items-center gap-2">
              <button
                onClick={() => setActiveTab("ultrasound")}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                  activeTab === "ultrasound"
                    ? "bg-[#B61F32] text-white shadow-md"
                    : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                }`}
              >
                Ultrasound (27 Scans)
              </button>
              <button
                onClick={() => setActiveTab("special")}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                  activeTab === "special"
                    ? "bg-[#B61F32] text-white shadow-md"
                    : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                }`}
              >
                Special Procedures (HSG/Barium)
              </button>
              <button
                onClick={() => setActiveTab("xray")}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                  activeTab === "xray"
                    ? "bg-[#B61F32] text-white shadow-md"
                    : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                }`}
              >
                Digital X-Ray
              </button>
              <button
                onClick={() => setActiveTab("lab")}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                  activeTab === "lab"
                    ? "bg-[#B61F32] text-white shadow-md"
                    : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                }`}
              >
                Laboratory Tests
              </button>
            </div>
          </div>

          {/* Tab Content Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {prepGuides[activeTab].map((item, idx) => (
              <div key={idx} className="p-5 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col justify-between">
                <div>
                  <h3 className="text-base font-bold text-[#002047] mb-3 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#B61F32]" />
                    <span>{item.title}</span>
                  </h3>
                  <ul className="space-y-2">
                    {item.rules.map((rule, rIdx) => (
                      <li key={rIdx} className="text-xs text-slate-600 flex items-start gap-2.5 leading-relaxed">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                        <span>{rule}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* Quick Notice */}
          <div className="mt-8 p-4 rounded-2xl bg-amber-50 border border-amber-200 flex items-start gap-3 text-xs text-amber-900">
            <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
            <div>
              <strong className="font-bold">Unsure about your doctor&apos;s requisition?</strong>
              <p className="mt-0.5 text-amber-800">
                Contact our triage desk at <a href="tel:0342409043" className="font-bold underline">03 42 40 90 43</a> prior to your appointment. Our nursing staff will clarify exact fasting or hydration protocols.
              </p>
            </div>
          </div>
        </section>

        {/* Results & Digital Reporting */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-sm">
          <SectionHeading
            badge="Digital Health Access"
            title="Fast, Transparent"
            highlightText="Report Delivery"
            subtitle="Choose the most convenient way to receive your imaging results and formal radiological interpretations."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-100">
              <span className="w-10 h-10 rounded-xl bg-red-100 text-[#B61F32] flex items-center justify-center font-bold text-sm mb-3">
                01
              </span>
              <h4 className="font-bold text-[#002047] text-sm">Printed Films & Photos</h4>
              <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                High-definition physical glossy prints for ultrasound baby portraits and high-contrast digital X-ray film sheets.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-100">
              <span className="w-10 h-10 rounded-xl bg-blue-100 text-[#002047] flex items-center justify-center font-bold text-sm mb-3">
                02
              </span>
              <h4 className="font-bold text-[#002047] text-sm">WhatsApp Direct Dispatch</h4>
              <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                Receive certified PDF reports and high-resolution images straight to your phone for rapid consultation.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-100">
              <span className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold text-sm mb-3">
                03
              </span>
              <h4 className="font-bold text-[#002047] text-sm">DICOM Digital Disc</h4>
              <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                Complete raw DICOM slice datasets burned to CD/DVD or flash drive for surgical teams and overseas specialists.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-100">
              <span className="w-10 h-10 rounded-xl bg-indigo-100 text-indigo-800 flex items-center justify-center font-bold text-sm mb-3">
                04
              </span>
              <h4 className="font-bold text-[#002047] text-sm">Physician Direct Call</h4>
              <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                For urgent or unexpected findings, our radiologist directly contacts your treating doctor immediately.
              </p>
            </div>
          </div>
        </section>

        {/* FAQs Accordion */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-sm">
          <SectionHeading
            badge="Common Questions"
            title="Frequently Asked"
            highlightText="Questions"
            subtitle="Answers to common patient inquiries regarding scan safety, turnaround times, and preparation."
            centered
          />

          <div className="max-w-3xl mx-auto space-y-3 mt-6">
            {faqs.map((faq, i) => {
              const isOpen = openFaq === i;
              return (
                <div
                  key={i}
                  className="rounded-2xl border border-slate-200 overflow-hidden transition-colors"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : i)}
                    className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 bg-slate-50 hover:bg-slate-100 transition-colors"
                  >
                    <span className="font-bold text-[#002047] text-sm sm:text-base">
                      {faq.q}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-200 ${
                        isOpen ? "rotate-180 text-[#B61F32]" : ""
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="p-5 bg-white border-t border-slate-100 text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>
      </div>
    </div>
  );
}
