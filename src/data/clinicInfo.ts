export interface ClinicBranch {
  id: string;
  name: string;
  badge: string;
  addressEn: string;
  addressTigrinya?: string;
  phone: string;
  mobile: string;
  email: string;
  operatingHours: string;
  emergency: string;
  tagline: string;
  servicesSummary: string[];
}

export const CLINIC_INFO = {
  name: "Radiance Multispeciality Clinic & Diagnostic Center",
  shortName: "Radiance & 3G Diagnostic Imaging",
  brandMotto: "Better Health. Brighter Tomorrow.",
  subMotto: "Your Health, Our Priority",
  tigrinyaMotto: "3ጂ ንድሕነት ሕክምና ቅድሚያ ይሀብ!",
  primaryPhone: "03 42 40 90 43",
  alternatePhone1: "+251 990 084 747",
  alternatePhone2: "+251 985 414 949",
  email: "info@radianceclinic.com",
  website: "www.radianceclinic.com",
  branches: [
    {
      id: "adi-dero",
      name: "3G Diagnostic Imaging Center",
      badge: "Flagship Imaging & Sonography",
      addressEn: "300m down from Upper Gate Adi Dero Raphael Hospital, along the Adi Shum route",
      addressTigrinya: "ካብ ላዕለዋይ በሬ ዓዲደሮ ራፈራኤል ሆስፒታል ናብ መስመር ዓዲሹም 300 ሜትር ወሪድ ኢልካ ይርከብ",
      phone: "03 42 40 90 43",
      mobile: "+251 990 084 747",
      email: "3gimaging@radianceclinic.com",
      operatingHours: "Monday – Sunday: 7:30 AM – 8:30 PM",
      emergency: "24/7 On-Call Emergency Sonography & Digital X-Ray",
      tagline: "3ጂ ንድሕነት ሕክምና ቅድሚያ ይሀብ! (3G Gives Priority to Quality Healthcare!)",
      servicesSummary: [
        "All 27 Ultrasound Modalities (Doppler, 3D/4D, MSK)",
        "Digital X-Ray & Special Contrast Procedures (HSG, IVU, Barium)",
        "CT & MRI Scan Reading & Second Opinions",
        "Echocardiography & 12-Lead ECG"
      ]
    },
    {
      id: "bahir-dar",
      name: "Radiance Multispeciality Clinic & Diagnostic Center",
      badge: "Multispeciality Medical Hub",
      addressEn: "Bahir Dar, Kebele 14, Ethiopia",
      phone: "+251 990 084 747",
      mobile: "+251 985 414 949",
      email: "info@radianceclinic.com",
      operatingHours: "Monday – Saturday: 8:00 AM – 8:00 PM | Sunday: 8:30 AM – 5:00 PM",
      emergency: "Emergency Triage Available",
      tagline: "Multispeciality Care. Accurate Diagnosis. Better Outcomes.",
      servicesSummary: [
        "Cardiology, Neurology, Pulmonology & Orthopedics",
        "Maternal, Fetal & Gynecological Specialty Care",
        "Pediatric & Child Health Wellness",
        "Automated Clinical Laboratory Services"
      ]
    }
  ],
  stats: [
    { label: "Ultrasound Modalities", value: "27+" },
    { label: "Digital X-Ray Views", value: "24+" },
    { label: "Special Contrast Procedures", value: "5" },
    { label: "Patient Satisfaction", value: "99.4%" },
    { label: "Report Turnaround", value: "Same-Day" }
  ]
};
