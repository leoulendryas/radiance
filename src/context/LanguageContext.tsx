"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { CLINIC_INFO } from "@/data/clinicInfo";

export type Language = "en" | "ti" | "am";

interface Translations {
  motto: string;
  subMotto: string;
  tagline: string;
  nav: {
    home: string;
    services: string;
    ultrasound: string;
    xray: string;
    ctMri: string;
    multispeciality: string;
    about: string;
    doctors: string;
    patients: string;
    contact: string;
    book: string;
    callNow: string;
  };
  hero: {
    badge: string;
    titleLine1: string;
    titleHighlight: string;
    subtitle: string;
    description: string;
    bookCta: string;
    callCta: string;
    exploreCta: string;
  };
  branches: {
    adiDeroTitle: string;
    adiDeroAddress: string;
    adiDeroTagline: string;
    adiDeroMotto: string;
    bahirDarTitle: string;
    bahirDarAddress: string;
    bahirDarTagline: string;
    bahirDarMotto: string;
  };
  common: {
    emergency: string;
    hours: string;
    viewAll: string;
    learnMore: string;
    directions: string;
    scheduleScan: string;
    prepChecklist: string;
    sameDayReports: string;
    addressLabel: string;
  };
}

const TRANSLATIONS: Record<Language, Translations> = {
  en: {
    motto: CLINIC_INFO.motto.en,
    subMotto: CLINIC_INFO.subMotto.en,
    tagline: CLINIC_INFO.tagline.en,
    nav: {
      home: "Home",
      services: "Services",
      ultrasound: "3G Ultrasound",
      xray: "Digital X-Ray & Procedures",
      ctMri: "CT & MRI Reading",
      multispeciality: "Specialty Clinics & Lab",
      about: "About",
      doctors: "Specialists",
      patients: "Patient Prep",
      contact: "Contact & Locations",
      book: "Book Appointment",
      callNow: "Call Us",
    },
    hero: {
      badge: "Diagnostic Excellence & Clinical Care",
      titleLine1: "Your Health,",
      titleHighlight: "Our Priority",
      subtitle: "Better Health. Brighter Tomorrow.",
      description: "Comprehensive diagnostic imaging and multispeciality care under one roof. Providing 27+ ultrasound modalities, digital radiography, specialized fluoroscopy (HSG), and consultant second opinions in Adi Dero and Bahir Dar.",
      bookCta: "Book a Scan or Visit",
      callCta: "Direct Line",
      exploreCta: "Explore All Services",
    },
    branches: {
      adiDeroTitle: "3G Diagnostic Imaging Center",
      adiDeroAddress: CLINIC_INFO.branches[0].addressEn,
      adiDeroTagline: CLINIC_INFO.branches[0].taglineEn,
      adiDeroMotto: "3G Puts Healthcare Safety First!",
      bahirDarTitle: "Radiance Multispeciality Clinic",
      bahirDarAddress: CLINIC_INFO.branches[1].addressEn,
      bahirDarTagline: CLINIC_INFO.branches[1].taglineEn,
      bahirDarMotto: "Better Health. Brighter Tomorrow.",
    },
    common: {
      emergency: "24/7 Emergency Support",
      hours: "Mon - Sun: 7:30 AM - 8:30 PM",
      viewAll: "View All Services",
      learnMore: "Learn More",
      directions: "Directions",
      scheduleScan: "Schedule Examination",
      prepChecklist: "Preparation Guidelines",
      sameDayReports: "Same-Day Reports",
      addressLabel: "Address & Location:",
    },
  },
  ti: {
    motto: CLINIC_INFO.motto.ti,
    subMotto: CLINIC_INFO.subMotto.ti,
    tagline: CLINIC_INFO.tagline.ti,
    nav: {
      home: "መበገሲ",
      services: "ኣገልግሎታት",
      ultrasound: "3ጂ አልትራሳውንድ",
      xray: "ዲጂታል ኤክስሬይን ፍሉይ መርመራን",
      ctMri: "ሲቲን ኤምአርአይን ንባብ",
      multispeciality: "ስፔሻሊቲ ክሊኒክን ላቦራቶሪን",
      about: "ብዛዕባና",
      doctors: "ሓካይምና",
      patients: "መምርሒ ሕሙማን",
      contact: "ኣድራሻን ርክብን",
      book: "ቆጸራ ይሓዙ",
      callNow: "ደውሉልና",
    },
    hero: {
      badge: "ላዕለዋይ ደረጃ ዘለዎ መርመራን ሕክምናን",
      titleLine1: "ጥዕናኹም፣",
      titleHighlight: "ቀዳምነትና እዩ",
      subtitle: "ዝበለጸ ጥዕና ንብሩህ መጻኢ",
      description: "ኣብ ትሕቲ ሓደ ናሕሲ ኩለመዳያዊ ናይ መርመራን ስፔሻሊቲ ሕክምናን ኣገልግሎት። ልዕሊ 27 ዓይነት ኣልትራሳውንድ፣ ዲጂታል ኤክስሬይ፣ ፍሉይ ናይ ማህጸን ቱቦ መርመራ (HSG) ከምኡ'ውን ናይ ሲቲን ኤምአርአይን ንባብ ኣብ ዓዲደሮን ባህርዳርን።",
      bookCta: "ቆጸራ ንመርመራ ይሓዙ",
      callCta: "ብቐጥታ ደውሉ",
      exploreCta: "ኩሎም ኣገልግሎታት ርኣዩ",
    },
    branches: {
      adiDeroTitle: "3ጂ ማእኸል ምርመራን ምስልን",
      adiDeroAddress: CLINIC_INFO.branches[0].addressTigrinya,
      adiDeroTagline: CLINIC_INFO.branches[0].taglineTigrinya,
      adiDeroMotto: "3ጂ ንድሕነት ሕክምና ቅድሚያ ይሀብ!",
      bahirDarTitle: "ራድያንስ ብዙሕ-ስፔሻሊቲ ክሊኒክ",
      bahirDarAddress: CLINIC_INFO.branches[1].addressTigrinya,
      bahirDarTagline: CLINIC_INFO.branches[1].taglineTigrinya,
      bahirDarMotto: "ዝበለጸ ጥዕና ንብሩህ መጻኢ",
    },
    common: {
      emergency: "24/7 ህጹጽ ረድኤት",
      hours: "ሰኑይ - ሰንበት: 7:30 ንጉሆ - 8:30 ምሸት",
      viewAll: "ኩሎም ኣገልግሎታት",
      learnMore: "ተወሳኺ ሓበሬታ",
      directions: "ኣንፈት መንገዲ",
      scheduleScan: "ምርመራ መደብ",
      prepChecklist: "ቅድመ-ምርመራ ምድላው",
      sameDayReports: "ናይ ሓደ መዓልቲ ውጽኢት",
      addressLabel: "ኣድራሻ፦",
    },
  },
  am: {
    motto: CLINIC_INFO.motto.am,
    subMotto: CLINIC_INFO.subMotto.am,
    tagline: CLINIC_INFO.tagline.am,
    nav: {
      home: "ዋና ገጽ",
      services: "አገልግሎቶች",
      ultrasound: "3ጂ አልትራሳውንድ",
      xray: "ዲጂታል ኤክስሬይ እና ልዩ ምርመራዎች",
      ctMri: "የሲቲ እና ኤምአርአይ ንባብ",
      multispeciality: "ልዩ ክሊኒኮች እና ላቦራቶሪ",
      about: "ስለ እኛ",
      doctors: "ሐኪሞቻችን",
      patients: "የታካሚ መመሪያ",
      contact: "አድራሻ እና ግንኙነት",
      book: "ቀጠሮ ይያዙ",
      callNow: "ይደውሉልን",
    },
    hero: {
      badge: "ከፍተኛ ጥራት ያለው የህክምና እና የላቀ ምርመራ",
      titleLine1: "ጤናዎ፣",
      titleHighlight: "ቀዳሚ ተግባራችን ነው",
      subtitle: "የተሻለ ጤና ለብሩህ ነገ",
      description: "በአንድ ጣሪያ ስር የተሟላ የዲያግኖስቲክ እና ሁለገብ የህክምና አገልግሎት። ከ27 በላይ የአልትራሳውንድ ዓይነቶች፣ ዲጂታል ኤክስሬይ፣ የማህጸን ቱቦ ምርመራ (HSG) እና የሲቲ/ኤምአርአይ ንባብ በአዲደሮ እና በባህር ዳር።",
      bookCta: "ቀጠሮ ይያዙ",
      callCta: "በቀጥታ ይደውሉ",
      exploreCta: "ሁሉንም አገልግሎቶች ይመልከቱ",
    },
    branches: {
      adiDeroTitle: "3ጂ የዲያግኖስቲክ ኢሜጂንግ ማዕከል",
      adiDeroAddress: CLINIC_INFO.branches[0].addressAmharic,
      adiDeroTagline: CLINIC_INFO.branches[0].taglineAmharic,
      adiDeroMotto: "3ጂ ለደህንነቱ የተጠበቀ ህክምና ቅድሚያ ይሰጣል!",
      bahirDarTitle: "ራዲያንስ ሁለገብ ስፔሻሊቲ ክሊኒክ",
      bahirDarAddress: CLINIC_INFO.branches[1].addressAmharic,
      bahirDarTagline: CLINIC_INFO.branches[1].taglineAmharic,
      bahirDarMotto: "የተሻለ ጤና ለብሩህ ነገ",
    },
    common: {
      emergency: "24/7 የድንገተኛ አገልግሎት",
      hours: "ሰኞ - እሑድ፡ 7:30 ጠዋት - 8:30 ማታ",
      viewAll: "ሁሉንም አገልግሎቶች ይመልከቱ",
      learnMore: "ተጨማሪ መረጃ",
      directions: "አቅጣጫ",
      scheduleScan: "ምርመራ ያቅዱ",
      prepChecklist: "የቅድመ-ምርመራ ዝግጅት",
      sameDayReports: "በተመሳሳይ ቀን ሪፖርት",
      addressLabel: "አድራሻ፦",
    },
  },
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextType>({
  language: "en",
  setLanguage: () => {},
  t: TRANSLATIONS.en,
});

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>("en");

  useEffect(() => {
    try {
      const saved = localStorage.getItem("radiance_lang") as Language | null;
      if (saved && (saved === "en" || saved === "ti" || saved === "am")) {
        setLanguageState(saved);
      }
    } catch {
      // Ignore localStorage access errors
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    try {
      localStorage.setItem("radiance_lang", lang);
    } catch {
      // Ignore
    }
  };

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
        t: TRANSLATIONS[language] || TRANSLATIONS.en,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
