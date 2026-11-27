export interface ClinicBranch {
  id: string;
  name: string;
  badge: string;
  addressEn: string;
  addressTigrinya: string;
  addressAmharic: string;
  phone1: string;
  phone2: string;
  email: string;
  operatingHours: string;
  emergency: string;
  taglineEn: string;
  taglineTigrinya: string;
  taglineAmharic: string;
  servicesSummary: string[];
}

export const CLINIC_INFO = {
  name: "Radiance Multispeciality Clinic & 3G Diagnostic Imaging",
  shortName: "Radiance & 3G Imaging",
  phone1: "+251 990 084 747",
  phone2: "+251 985 414 949",
  primaryPhone: "+251 990 084 747",
  alternatePhone1: "+251 985 414 949",
  email: "info@radianceclinic.com",
  website: "www.radianceclinic.com",

  motto: {
    en: "Better Health. Brighter Tomorrow.",
    ti: "3ጂ ንድሕነት ሕክምና ቅድሚያ ይሀብ!",
    am: "3ጂ ለደህንነቱ የተጠበቀ ህክምና ቅድሚያ ይሰጣል!"
  },
  subMotto: {
    en: "Your Health, Our Priority",
    ti: "ጥዕናኹም ቀዳምነትና እዩ",
    am: "ጤናዎ ቀዳሚ ተግባራችን ነው"
  },
  tagline: {
    en: "3G Puts Healthcare Safety First!",
    ti: "3ጂ ንድሕነት ሕክምና ቅድሚያ ይሀብ!",
    am: "3ጂ ለህክምና ደህንነት ቅድሚያ ይሰጣል!"
  },

  branches: [
    {
      id: "adi-dero",
      name: "3G Diagnostic Imaging Center",
      badge: "Flagship Imaging Hub",
      addressEn: "300 meters down from Upper Gate Adi Dero Raphael Hospital toward Adi Shum road",
      addressTigrinya: "ካብ ላዕለዋይ በሬ ዓዲደሮ ራፈራኤል ሆስፒታል ናብ መስመር ዓዲሹም 300 ሜትር ወሪድ ኢልካ ይርከብ",
      addressAmharic: "ከአዲደሮ ራፋኤል ሆስፒታል የላይኛው በር ወደ አዲሹም መስመር 300 ሜትር ወረድ ብሎ ይገኛል",
      phone1: "+251 990 084 747",
      phone2: "+251 985 414 949",
      email: "info@radianceclinic.com",
      operatingHours: "Monday – Sunday: 7:30 AM – 8:30 PM",
      emergency: "24/7 On-Call Emergency Diagnostic Support",
      taglineEn: "3G Puts Healthcare Safety First",
      taglineTigrinya: "3ጂ ንድሕነት ሕክምና ቅድሚያ ይሀብ!",
      taglineAmharic: "3ጂ ለደህንነቱ የተጠበቀ ህክምና ቅድሚያ ይሰጣል!",
      servicesSummary: [
        "27 Comprehensive Ultrasound Modalities (Doppler, 3D/4D, MSK)",
        "Digital X-Ray & Special Contrast Procedures (HSG, IVU, Barium)",
        "CT & MRI Scan Reading & Second Opinions",
        "Echocardiography & 12-Lead ECG"
      ]
    },
    {
      id: "bahir-dar",
      name: "Radiance Multispeciality Clinic",
      badge: "Multispeciality Medical Hub",
      addressEn: "Bahir Dar, Kebele 14, Ethiopia",
      addressTigrinya: "ባሕር ዳር፣ ቀበሌ 14፣ ኢትዮጵያ",
      addressAmharic: "ባሕር ዳር፣ ቀበሌ 14፣ ኢትዮጵያ",
      phone1: "+251 990 084 747",
      phone2: "+251 985 414 949",
      email: "info@radianceclinic.com",
      operatingHours: "Monday – Saturday: 8:00 AM – 8:00 PM | Sunday: 8:30 AM – 5:00 PM",
      emergency: "Emergency Triage Available",
      taglineEn: "Multispeciality Care. Accurate Diagnosis. Better Outcomes.",
      taglineTigrinya: "ብዙሕ-ስፔሻሊቲ ክንክን፣ ትክክለኛ ምርመራ፣ ዝበለጸ ውጽኢት",
      taglineAmharic: "ሁለገብ የህክምና እንክብካቤ፣ ትክክለኛ ምርመራ፣ የተሻለ ውጤት",
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
    { label: "Special Contrast Studies", value: "5" },
    { label: "Diagnostic Accuracy", value: "99.4%" }
  ]
};
