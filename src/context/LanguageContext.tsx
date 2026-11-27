"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { CLINIC_INFO } from "@/data/clinicInfo";

export type Language = "en" | "ti" | "am";

export interface Translations {
  motto: string;
  subMotto: string;
  tagline: string;
  nav: {
    home: string;
    services: string;
    servicesCatalog: string;
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
    catalogDesc: string;
    usDesc: string;
    xrayDesc: string;
    ctDesc: string;
    multiDesc: string;
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
    stats: { label: string; value: string }[];
  };
  pillars: {
    badge: string;
    swipeHint: string;
    ultrasound: { title: string; count: string; desc: string; cta: string };
    xray: { title: string; count: string; desc: string; cta: string };
    special: { title: string; count: string; desc: string; cta: string };
    ctMri: { title: string; count: string; desc: string; cta: string };
  };
  usSection: {
    badge: string;
    title: string;
    highlight: string;
    subtitle: string;
    swipeHint: string;
    prepLabel: string;
    detailsBtn: string;
    bookScanBtn: string;
    exploreAllBtn: string;
  };
  specialSection: {
    badge: string;
    title: string;
    highlight: string;
    description: string;
    prepBtn: string;
    suiteTitle: string;
    suiteDesc: string;
  };
  aboutSection: {
    badge: string;
    title: string;
    highlight: string;
    p1: string;
    p2: string;
    storyBtn: string;
    leadershipBtn: string;
    flagshipTitle: string;
    flagshipSubtitle: string;
    safeModernBadge: string;
  };
  whyUs: {
    badge: string;
    title: string;
    highlight: string;
    subtitle: string;
    swipeHint: string;
    items: { title: string; desc: string }[];
  };
  doctorsSection: {
    badge: string;
    title: string;
    highlight: string;
    subtitle: string;
    viewAllBtn: string;
    swipeHint: string;
    bookConsultation: string;
    collaborativeBadge: string;
    caseReviewsTitle: string;
    caseReviewsDesc: string;
    callRadiologistBtn: string;
  };
  facilitiesSection: {
    badge: string;
    title: string;
    highlight: string;
    subtitle: string;
    swipeHint: string;
    items: { category: string; title: string; desc: string }[];
  };
  testimonialsSection: {
    badge: string;
    title: string;
    highlight: string;
    subtitle: string;
    verifiedBadge: string;
    swipeHint: string;
    items: { name: string; service: string; location: string; date: string; comment: string }[];
  };
  branchesSection: {
    badge: string;
    title: string;
    highlight: string;
    subtitle: string;
    swipeHint: string;
    locationDirectionsLabel: string;
    locationAddressLabel: string;
    callBtn: string;
    mapsBtn: string;
    bookBtn: string;
  };
  ctaSection: {
    badge: string;
    title: string;
    description: string;
    bookBtn: string;
    contactBtn: string;
  };
  branches: {
    adiDeroTitle: string;
    adiDeroBranchName: string;
    adiDeroAddress: string;
    adiDeroTagline: string;
    adiDeroMotto: string;
    adiDeroHours: string;
    bahirDarTitle: string;
    bahirDarBranchName: string;
    bahirDarAddress: string;
    bahirDarTagline: string;
    bahirDarMotto: string;
    bahirDarHours: string;
  };
  bookingWizard: {
    steps: { service: string; examination: string; dateTime: string; patientInfo: string };
    stepOf: (current: number, total: number) => string;
    step1Title: string;
    step1Desc: string;
    categories: {
      ultrasound: { title: string; desc: string; count: string };
      xray: { title: string; desc: string; count: string };
      special: { title: string; desc: string; count: string };
      ctMri: { title: string; desc: string; count: string };
      clinic: { title: string; desc: string; count: string };
      lab: { title: string; desc: string; count: string };
    };
    continueToScan: string;
    step2Title: string;
    step2Desc: string;
    prepLabel: string;
    continueToSchedule: string;
    step3Title: string;
    step3Desc: string;
    selectClinicLabel: string;
    preferredDateLabel: string;
    preferredTimeLabel: string;
    timeSlots: string[];
    continueToPatient: string;
    step4Title: string;
    step4Desc: string;
    patientNameLabel: string;
    phoneLabel: string;
    ageLabel: string;
    doctorLabel: string;
    notesLabel: string;
    summaryLabel: string;
    examLabel: string;
    locationLabel: string;
    timeLabel: string;
    confirmBtn: string;
    submittingBtn: string;
    step5Badge: string;
    step5Title: string;
    step5Desc: string;
    refLabel: string;
    patientLabel: string;
    serviceLabel: string;
    branchLabel: string;
    scheduledTimeLabel: string;
    dbStatusLabel: string;
    dbStatusValue: string;
    sendWhatsAppBtn: string;
    receptionNotice: string;
    prepAlertPrefix: string;
    returnHomeBtn: string;
    callReceptionBtn: string;
    backBtn: string;
  };
  contactPage: {
    badge: string;
    title: string;
    description: string;
    swipeHint: string;
    primaryPhoneLabel: string;
    mobileLinesLabel: string;
    emailLabel: string;
    hoursLabel: string;
    callBranch1: string;
    bookBranch1: string;
    callBranch2: string;
    bookBranch2: string;
    formTitle: string;
    formDesc: string;
    fullNameLabel: string;
    phoneLabel: string;
    clinicLabel: string;
    serviceLabel: string;
    messageLabel: string;
    sendBtn: string;
    successTitle: string;
    successDesc: (name: string, phone: string) => string;
    alsoWhatsAppBtn: string;
    sendAnotherBtn: string;
    emergencyBadge: string;
    emergencyTitle: string;
    emergencyDesc: string;
    callEmergencyBtn: string;
    referringTitle: string;
    referringDesc: string;
  };
  aboutPage: {
    badge: string;
    title: string;
    highlight: string;
    subtitle: string;
    storyBadge: string;
    storyTitle: string;
    storyP1: string;
    storyP2: string;
    infrastructureTitle: string;
    milestones: { title: string; desc: string }[];
    visionBadge: string;
    visionTitle: string;
    visionDesc: string;
    missionBadge: string;
    missionTitle: string;
    missionDesc: string;
    valuesBadge: string;
    valuesTitle: string;
    valuesHighlight: string;
    valuesSubtitle: string;
    values: { title: string; desc: string }[];
    philosophyBadge: string;
    philosophyQuote: string;
    philosophyDesc: string;
    teamBtn: string;
    locationsBtn: string;
  };
  doctorsPage: {
    badge: string;
    title: string;
    description: string;
    swipeHint: string;
    languagesLabel: string;
    qualificationsLabel: string;
    bookConsultationWith: (name: string) => string;
    collaborativeBadge: string;
    collaborativeTitle: string;
    collaborativeDesc: string;
    callDoctorBtn: string;
  };
  patientsPage: {
    badge: string;
    title: string;
    description: string;
    tabs: {
      ultrasound: string;
      xray: string;
      special: string;
      lab: string;
    };
    faqsTitle: string;
    faqsSubtitle: string;
    callAssistance: string;
  };
  servicesPage: {
    badge: string;
    title: string;
    description: string;
    searchPlaceholder: string;
    showingText: (filtered: number, total: number) => string;
    clearBtn: string;
    categories: {
      all: string;
      ultrasound: string;
      xray: string;
      special: string;
      ctMri: string;
      clinic: string;
      lab: string;
    };
    prepLabel: string;
    detailsBtn: string;
    bookScanBtn: string;
  };
  footer: {
    aboutDesc: string;
    safetyCertified: string;
    imagingTitle: string;
    navTitle: string;
    centersTitle: string;
    copyright: string;
    privacy: string;
    directions: string;
    onlineBooking: string;
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
      servicesCatalog: "Services Catalog",
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
      catalogDesc: "50+ complete ultrasound, x-ray & lab list",
      usDesc: "27 sonography modalities & 4D imaging",
      xrayDesc: "24 digital views + HSG, IVU & Barium",
      ctDesc: "Consultant second opinions & tele-radiology",
      multiDesc: "Cardiology, OB/GYN, Pediatrics & Lab",
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
      stats: [
        { label: "Ultrasound Modalities", value: "27+" },
        { label: "Digital X-Ray Views", value: "24+" },
        { label: "Special Procedures", value: "5" },
        { label: "Diagnostic Accuracy", value: "99.4%" },
      ],
    },
    pillars: {
      badge: "Core Clinical Pillars",
      swipeHint: "Swipe sideways →",
      ultrasound: {
        title: "3G Ultrasound Suite",
        count: "27 Scans",
        desc: "Abdominal, vascular Doppler, 3D/4D fetal scans, MSK, pediatric hip screening, and echocardiography.",
        cta: "View Ultrasound",
      },
      xray: {
        title: "Digital X-Ray",
        count: "24 Views",
        desc: "High-definition digital skeletal imaging for chest, skull, spine, pelvis, and limbs with minimal radiation.",
        cta: "Skeletal Catalog",
      },
      special: {
        title: "Special Procedures",
        count: "Fluoroscopy",
        desc: "HSG fertility tubal patency evaluation, IVU/IVP urinary studies, CUG, and Barium swallow/enema.",
        cta: "Fertility & GI",
      },
      ctMri: {
        title: "CT & MRI Reading",
        count: "Second Opinions",
        desc: "Subspecialty tele-radiology interpretation and case discussions with Senior Consultant Radiologists.",
        cta: "Request Review",
      },
    },
    usSection: {
      badge: "Diagnostic Sonography",
      title: "3G Ultrasound Services:",
      highlight: "27 Precision Modalities",
      subtitle: "From obstetric 3D/4D scans and vascular Doppler to neonatal neuro-sonography and guided FNAC biopsy.",
      swipeHint: "Swipe sideways →",
      prepLabel: "Prep: ",
      detailsBtn: "Details",
      bookScanBtn: "Book Scan",
      exploreAllBtn: "Explore All 27 Ultrasound Modalities",
    },
    specialSection: {
      badge: "Specialized Fluoroscopy",
      title: "Special Procedures: ",
      highlight: "HSG, IVU, CUG & Barium Series",
      description: "When standard non-contrast imaging requires functional visualization, our radiologists perform fluoroscopic investigations with patient dignity, comfort, and immediate report turnaround.",
      prepBtn: "Preparation & Procedure Guides",
      suiteTitle: "Gentle, Dignified Patient Handling",
      suiteDesc: "Private exam environments, compassionate clinical team, and direct coordination with your referring physician.",
    },
    aboutSection: {
      badge: "04 • About the Clinic",
      title: "Better Health. Brighter Tomorrow. ",
      highlight: "Radiance Clinic & 3G Diagnostic Imaging",
      p1: "Radiance Multispeciality Clinic and 3G Diagnostic Imaging Center was established with a singular mission: to provide accessible, reliable, and compassionate healthcare to our community.",
      p2: "Operating high-precision imaging hubs in Adi Dero and Bahir Dar, our centers bring together senior fellowship-trained radiologists, modern 3D/4D ultrasound systems, digital radiography, and an automated pathology lab.",
      storyBtn: "Read Full Clinic Story",
      leadershipBtn: "Clinical Leadership",
      flagshipTitle: "Adi Dero & Bahir Dar Healthcare Hubs",
      flagshipSubtitle: "Flagship Facilities",
      safeModernBadge: "Safe & Modern",
    },
    whyUs: {
      badge: "05 • Why Choose Us?",
      title: "The Radiance Standard: ",
      highlight: "Why Patients Trust Us",
      subtitle: "Guided by our healthcare philosophy: high standards of diagnostic accuracy, patient safety, and compassionate clinical care.",
      swipeHint: "Swipe sideways →",
      items: [
        {
          title: "Patient-First Care",
          desc: "Prioritizing patient comfort, clear communication, gentle scan handling, and dignity at every step.",
        },
        {
          title: "Quality & Safety",
          desc: "Strict acoustic transducer hygiene, ALARA low-radiation X-ray protocols, and daily calibration controls.",
        },
        {
          title: "Modern Technology",
          desc: "High-frequency linear and 3D/4D matrix transducers, digital flat-panel X-rays, and automated analyzers.",
        },
        {
          title: "Clinical Integrity",
          desc: "Honest recommendations, transparent second opinions, and reliable written radiological reporting.",
        },
      ],
    },
    doctorsSection: {
      badge: "06 • Clinical Leadership",
      title: "Meet Our Doctors & ",
      highlight: "Consultant Radiologists",
      subtitle: "Fellowship-trained medical specialists dedicated to diagnostic accuracy and patient well-being.",
      viewAllBtn: "View All Medical Specialists",
      swipeHint: "Swipe profiles →",
      bookConsultation: "Book Consultation",
      collaborativeBadge: "Collaborative Diagnostics",
      caseReviewsTitle: "Direct Clinician-to-Radiologist Case Reviews",
      caseReviewsDesc: "We work closely with referring clinicians across the region. Bring your requisition slip or contact our radiologist directly to coordinate urgent scans or patient case discussions.",
      callRadiologistBtn: "Call Radiologist",
    },
    facilitiesSection: {
      badge: "07 • Modern Infrastructure",
      title: "Medical Facilities & ",
      highlight: "Diagnostic Technology",
      subtitle: "Advanced clinical imaging environments designed for patient safety, sterile comfort, and diagnostic clarity.",
      swipeHint: "Swipe sideways →",
      items: [
        {
          category: "Precision Imaging",
          title: "3G Ultrasound Suite",
          desc: "High-frequency matrix probes with real-time 3D/4D fetal surface rendering and color Doppler hemodynamics.",
        },
        {
          category: "Radiology Suite",
          title: "Digital X-Ray Suite",
          desc: "Flat-panel digital detectors providing instantaneous high-contrast bone views with minimal radiation exposure.",
        },
        {
          category: "Rapid Pathology",
          title: "Clinical Pathology Lab",
          desc: "Automated biochemistry and hematology analyzers with same-day digital result delivery in 30 minutes.",
        },
        {
          category: "Patient Care",
          title: "Reception & Consultation",
          desc: "Spacious, welcoming waiting area, private doctor consultation suites, and 24/7 emergency triage desks.",
        },
      ],
    },
    testimonialsSection: {
      badge: "08 • Patient Reviews",
      title: "Patient Testimonials ",
      highlight: "(Verified Experiences)",
      subtitle: "Read what patients across Adi Dero, Bahir Dar, and the region say about our diagnostic accuracy and care.",
      verifiedBadge: "Verified",
      swipeHint: "Swipe sideways →",
      items: [
        {
          name: "Almaz K. Mengesha",
          service: "3D/4D Fetal Ultrasound",
          location: "Adi Dero",
          date: "November 2026",
          comment: "The 3D/4D scan in Adi Dero was an unforgettable experience for my husband and me. The radiologist took time to explain every detail of our baby's facial features and heart rate with incredible kindness. Highly recommended!",
        },
        {
          name: "Tadesse W. Gebre",
          service: "Carotid & Venous Doppler",
          location: "Bahir Dar",
          date: "October 2026",
          comment: "I had severe leg swelling and needed urgent Doppler sonography on a weekend. The 3G imaging team performed the scan within 20 minutes and sent the certified report directly to my doctor. Exceptional speed and clinical care.",
        },
        {
          name: "Hellen B. Tesfaye",
          service: "HSG Fluoroscopy Procedure",
          location: "Adi Dero",
          date: "November 2026",
          comment: "I was extremely nervous about the HSG procedure, but Dr. Selamawit and the nursing team were so gentle, respectful, and reassuring throughout. The environment was clean and completely private.",
        },
        {
          name: "Yohannes A. Berhe",
          service: "Digital Skeletal X-Ray",
          location: "Bahir Dar",
          date: "October 2026",
          comment: "Crisp digital X-ray images, minimal waiting time, and clean modern facilities. The WhatsApp digital report dispatch saved me a whole return trip to pick up physical films.",
        },
      ],
    },
    branchesSection: {
      badge: "09 • Branches & Google Maps",
      title: "Visit Our Diagnostic Hubs in ",
      highlight: "Adi Dero & Bahir Dar",
      subtitle: "Direct phone lines, verified Google Maps directions, and coordinated patient care across both facilities.",
      swipeHint: "Swipe sideways →",
      locationDirectionsLabel: "Location & Directions:",
      locationAddressLabel: "Location & Address:",
      callBtn: "Call",
      mapsBtn: "Google Maps",
      bookBtn: "Book",
    },
    ctaSection: {
      badge: "10 • Appointment & Direct Contact",
      title: "Schedule an Ultrasound, Digital X-Ray or Doctor Consultation",
      description: "Fast online appointment booking, clear preparation checklists, seasoned consultant radiologists, and same-day digital report delivery to your mobile phone.",
      bookBtn: "Book Appointment Online",
      contactBtn: "Contact Locations",
    },
    branches: {
      adiDeroTitle: "3G Diagnostic Imaging Center",
      adiDeroBranchName: "Branch 1 • Flagship Diagnostic Center",
      adiDeroAddress: CLINIC_INFO.branches[0].addressEn,
      adiDeroTagline: CLINIC_INFO.branches[0].taglineEn,
      adiDeroMotto: "3G Puts Healthcare Safety First!",
      adiDeroHours: "Mon - Sun: 7:30 AM - 8:30 PM (24/7 Emergency Support)",
      bahirDarTitle: "Radiance Multispeciality Clinic",
      bahirDarBranchName: "Branch 2 • Multispeciality Medical Hub",
      bahirDarAddress: CLINIC_INFO.branches[1].addressEn,
      bahirDarTagline: CLINIC_INFO.branches[1].taglineEn,
      bahirDarMotto: "Better Health. Brighter Tomorrow.",
      bahirDarHours: "Mon - Sat: 8:00 AM - 8:00 PM | Sun: 8:30 AM - 5:00 PM",
    },
    bookingWizard: {
      steps: {
        service: "Service",
        examination: "Examination",
        dateTime: "Date & Time",
        patientInfo: "Patient Info",
      },
      stepOf: (current, total) => `Step ${current} of ${total}`,
      step1Title: "Select Service Category",
      step1Desc: "Choose the type of diagnostic scan or clinical consultation you require.",
      categories: {
        ultrasound: { title: "3G Ultrasound", desc: "27 Scans (3D/4D, Doppler, MSK, TVS)", count: "27 Scans" },
        xray: { title: "Digital X-Ray", desc: "24 Full-Body Skeletal Views", count: "24 Views" },
        special: { title: "Special Fluoroscopy", desc: "HSG, IVU, CUG, Barium Studies", count: "5 Procedures" },
        ctMri: { title: "CT & MRI Reading", desc: "Consultant Radiologist Second Opinions", count: "Tele-Radiology" },
        clinic: { title: "Doctor Consultation", desc: "Cardiology, OB/GYN, Pediatrics, Ortho", count: "8 Clinics" },
        lab: { title: "Diagnostic Lab", desc: "Automated CBC, Biochemistry, Hormones", count: "Rapid Panels" },
      },
      continueToScan: "Continue to Specific Scan",
      step2Title: "Select Your Specific Examination",
      step2Desc: "Select the exact examination specified on your doctor's request or referral.",
      prepLabel: "Prep: ",
      continueToSchedule: "Continue to Schedule",
      step3Title: "Choose Location & Date",
      step3Desc: "Select your preferred branch and convenient arrival time.",
      selectClinicLabel: "Select Clinic Center:",
      preferredDateLabel: "Preferred Date *",
      preferredTimeLabel: "Preferred Time Window",
      timeSlots: [
        "08:00 AM - 10:00 AM (Morning Slot)",
        "10:00 AM - 12:00 PM (Midday Slot)",
        "01:30 PM - 03:30 PM (Afternoon Slot)",
        "03:30 PM - 06:00 PM (Evening Slot)",
        "Urgent / Today Walk-In Triage",
      ],
      continueToPatient: "Continue to Patient Details",
      step4Title: "Patient Information",
      step4Desc: "Provide contact details to receive your booking confirmation and preparation instructions.",
      patientNameLabel: "Patient Full Name *",
      phoneLabel: "Phone Number (WhatsApp for Report) *",
      ageLabel: "Age / Gender",
      doctorLabel: "Referring Doctor / Hospital (Optional)",
      notesLabel: "Reason for Scan / Symptoms (Optional)",
      summaryLabel: "Summary:",
      examLabel: "Exam: ",
      locationLabel: "Location: ",
      timeLabel: "Time: ",
      confirmBtn: "Confirm & Book Appointment",
      submittingBtn: "Submitting & Sending...",
      step5Badge: "Booking Received & Registered",
      step5Title: "Appointment Scheduled Successfully!",
      step5Desc: "Your appointment request has been recorded in our clinical database. Send your booking details directly to our reception WhatsApp for instant priority confirmation.",
      refLabel: "Booking Ref:",
      patientLabel: "Patient: ",
      serviceLabel: "Service: ",
      branchLabel: "Branch: ",
      scheduledTimeLabel: "Scheduled Time: ",
      dbStatusLabel: "Database Status: ",
      dbStatusValue: "Logged in Clinical Registry",
      sendWhatsAppBtn: "Send Details to Reception WhatsApp",
      receptionNotice: "Direct message to clinic line: +251 990 084 747",
      prepAlertPrefix: "Important Preparation for ",
      returnHomeBtn: "Return to Home",
      callReceptionBtn: "Call Reception",
      backBtn: "Back",
    },
    contactPage: {
      badge: "Locations & Assistance",
      title: "Contact & Clinic Locations",
      description: "We operate two dedicated centers in Adi Dero and Bahir Dar. Reach out via direct phone, submit an appointment request, or visit our front desk.",
      swipeHint: "Swipe sideways →",
      primaryPhoneLabel: "Primary Telephone",
      mobileLinesLabel: "Direct Mobile Lines",
      emailLabel: "Email Inquiries",
      hoursLabel: "Opening Hours",
      callBranch1: "Call Adi Dero",
      bookBranch1: "Book Scan in Adi Dero",
      callBranch2: "Call Bahir Dar",
      bookBranch2: "Book in Bahir Dar",
      formTitle: "Send Us an Inquiry",
      formDesc: "Our clinical care coordinators typically respond within 1-2 hours during working hours.",
      fullNameLabel: "Full Name *",
      phoneLabel: "Phone Number *",
      clinicLabel: "Preferred Clinic Center",
      serviceLabel: "Service of Interest",
      messageLabel: "Your Message / Questions",
      sendBtn: "Send Message",
      successTitle: "Inquiry Received & Logged",
      successDesc: (name, phone) => `Thank you, ${name}. Your inquiry has been sent to our clinical team. We will call you at ${phone} shortly.`,
      alsoWhatsAppBtn: "Also Send to WhatsApp (+251 990 084 747)",
      sendAnotherBtn: "Send another message",
      emergencyBadge: "24/7 Acute Triage",
      emergencyTitle: "Emergency Ultrasound & X-Ray",
      emergencyDesc: "For acute abdominal emergencies, suspected testicular torsion, deep vein thrombosis (DVT), acute fractures, or severe respiratory distress, our imaging center operates round-the-clock emergency on-call sonographers.",
      callEmergencyBtn: "Call Emergency Line",
      referringTitle: "Referring Physician Inquiries",
      referringDesc: "Clinicians wishing to coordinate urgent tele-radiology readings or discuss anomalous ultrasound findings may request a direct transfer to our Senior Consultant Radiologist.",
    },
    aboutPage: {
      badge: "Company Profile & Heritage",
      title: "About Radiance Clinic & ",
      highlight: "3G Diagnostic Imaging",
      subtitle: "\"Better Health. Brighter Tomorrow.\" — Delivering accessible, high-quality, and patient-centered diagnostic imaging and multispeciality healthcare in Adi Dero and Bahir Dar.",
      storyBadge: "Our Story & Background",
      storyTitle: "Built on a Commitment to Quality Care & Accurate Diagnosis",
      storyP1: "Radiance Multispeciality Clinic and Diagnostic Center was established with a clear purpose — to provide accessible, reliable, and comprehensive healthcare services to our community.",
      storyP2: "Recognizing the growing need for quality medical care and modern diagnostic services in the region, Radiance was founded by a team of healthcare professionals with a shared vision of creating a patient-centered, trusted, and modern clinic.",
      infrastructureTitle: "Modern, Patient-Friendly Infrastructure",
      milestones: [
        {
          title: "Founding with a Clear Vision",
          desc: "Established by a dedicated team of healthcare professionals to bridge the gap in quality, integrated healthcare and advanced diagnostic imaging.",
        },
        {
          title: "Expanding to Multispeciality Care",
          desc: "From a focused diagnostic clinic into a multispeciality medical and imaging center, continuously adding high-resolution ultrasound modalities and digital X-ray services.",
        },
        {
          title: "3G Diagnostic Imaging Excellence",
          desc: "A trusted healthcare destination in Adi Dero and Bahir Dar, recognized for 27+ ultrasound modalities, special fluoroscopy procedures (HSG), and rapid turnaround times.",
        },
      ],
      visionBadge: "Strategic Direction",
      visionTitle: "Our Vision",
      visionDesc: "To be a leading and trusted multispeciality clinic and diagnostic center, delivering accessible, high-quality, and patient-centered healthcare in Adi Dero, Bahir Dar, and beyond.",
      missionBadge: "Daily Purpose",
      missionTitle: "Our Mission",
      missionDesc: "To provide comprehensive, safe, and reliable medical and diagnostic services through skilled professionals, modern technology, and compassionate care, with a commitment to improving the health and well-being of our community.",
      valuesBadge: "Guiding Principles",
      valuesTitle: "Our Core Values That ",
      valuesHighlight: "Shape Every Visit",
      valuesSubtitle: "Our core values guide everything we do, from the care we provide to the way we serve our patients, staff, and community.",
      values: [
        {
          title: "Patient-First Care",
          desc: "We put the health, safety, and well-being of our patients at the center of everything we do.",
        },
        {
          title: "Quality & Safety",
          desc: "We uphold high standards of medical care, accuracy in diagnosis, and a safe, sterile clinical environment.",
        },
        {
          title: "Integrity",
          desc: "We act with honesty, transparency, strict patient confidentiality, and professionalism in all our services.",
        },
        {
          title: "Innovation",
          desc: "We embrace modern medical technology, advanced 3D/4D ultrasound systems, and digital radiography for continuous improvement.",
        },
        {
          title: "Teamwork",
          desc: "We work together with respect, collaboration, and a shared commitment to deliver excellent patient care.",
        },
        {
          title: "Community Commitment",
          desc: "We are dedicated to improving the health and well-being of our community in Adi Dero, Bahir Dar, and beyond.",
        },
      ],
      philosophyBadge: "Our Healthcare Philosophy",
      philosophyQuote: "\"Every patient deserves personalized, respectful, and high-quality care that promotes better health.\"",
      philosophyDesc: "At Radiance & 3G Diagnostic Imaging, we believe healthcare is not merely treating symptoms—it is about attentive listening, clear explanations, minimizing stress during examinations, and standing beside our patients through every stage of diagnosis and healing.",
      teamBtn: "Meet Our Healthcare Team",
      locationsBtn: "Visit Our Locations",
    },
    doctorsPage: {
      badge: "Clinical Leadership",
      title: "Medical Professionals & Healthcare Team",
      description: "A dedicated team of skilled, fellowship-trained radiologists and compassionate specialists committed to your health and well-being in Adi Dero and Bahir Dar.",
      swipeHint: "Swipe profiles →",
      languagesLabel: "Languages: ",
      qualificationsLabel: "Qualifications: ",
      bookConsultationWith: (name) => `Book Consultation With ${name}`,
      collaborativeBadge: "Collaborative Diagnostics",
      collaborativeTitle: "Direct Clinician-to-Radiologist Case Reviews",
      collaborativeDesc: "We work closely with referring clinicians across the region. Bring your requisition slip or contact our radiologist directly to coordinate urgent scans or patient case discussions.",
      callDoctorBtn: "Call Radiologist",
    },
    patientsPage: {
      badge: "Preparation & Care",
      title: "Patient Preparation Guidelines",
      description: "Follow these simple, medically verified instructions to ensure your ultrasound, digital X-ray, or laboratory exam is clear, accurate, and comfortable.",
      tabs: {
        ultrasound: "Ultrasound Scans",
        xray: "Digital X-Ray",
        special: "HSG & Special Studies",
        lab: "Laboratory Tests",
      },
      faqsTitle: "Frequently Asked Questions",
      faqsSubtitle: "Clear answers to common questions about diagnostic imaging, pregnancy ultrasound safety, and test results.",
      callAssistance: "Questions about your preparation? Call our clinical triage desk at",
    },
    servicesPage: {
      badge: "Diagnostic & Clinical Directory",
      title: "Medical & Diagnostic Services",
      description: "Explore our complete directory of 27 ultrasound modalities, 24 digital X-rays, specialized contrast studies (HSG, IVU, Barium), CT/MRI readings, and clinical consultations.",
      searchPlaceholder: "Search scans, organs, or symptoms (Doppler, HSG, Knee, Chest)...",
      showingText: (filtered, total) => `Showing ${filtered} of ${total} examinations`,
      clearBtn: "Clear",
      categories: {
        all: "All Services (50+)",
        ultrasound: "3G Ultrasound (27)",
        xray: "Digital X-Ray (24)",
        special: "Special Procedures (5)",
        ctMri: "CT & MRI Reading",
        clinic: "Specialty Clinics",
        lab: "Diagnostic Lab",
      },
      prepLabel: "Preparation: ",
      detailsBtn: "View Details",
      bookScanBtn: "Book Scan",
    },
    footer: {
      aboutDesc: "Patient-centered diagnostic imaging and multispeciality healthcare committed to international clinical standards, precision diagnosis, and compassionate care.",
      safetyCertified: "Certified Radiation Safety & Diagnostic Sonography",
      imagingTitle: "3G Diagnostic Imaging",
      navTitle: "Patient Care & Navigation",
      centersTitle: "Centers & Contacts",
      copyright: "© 2026 Radiance Multispeciality Clinic & 3G Diagnostic Imaging. All rights reserved.",
      privacy: "Patient Privacy",
      directions: "Directions",
      onlineBooking: "Online Booking",
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
      servicesCatalog: "ዝርዝር ኣገልግሎታት",
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
      catalogDesc: "ልዕሊ 50 ናይ ኣልትራሳውንድ፣ ኤክስሬይን ላቦራቶሪን ዝርዝር",
      usDesc: "27 ዓይነት ኣልትራሳውንድን 4D ቪድዮን",
      xrayDesc: "24 ዲጂታል ምርመራታት ምስ HSG፣ IVUን ባርየምን",
      ctDesc: "ናይ ስፔሻሊስት ሓኪም ካልኣይ ርእይቶ",
      multiDesc: "ካርዲዮሎጂ፣ ማህጸን፣ ቆልዑን ላቦራቶሪን",
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
      stats: [
        { label: "ዓይነታት ኣልትራሳውንድ", value: "27+" },
        { label: "ዲጂታል ኤክስሬይ ምርመራ", value: "24+" },
        { label: "ፍሉያት መርመራታት", value: "5" },
        { label: "ትክክለኛነት መርመራ", value: "99.4%" },
      ],
    },
    pillars: {
      badge: "ቀንዲ ናይ ሕክምና ዓንደ-ዓምድታት",
      swipeHint: "ብጎኒ ኣንሸራትቱ →",
      ultrasound: {
        title: "3ጂ ኣልትራሳውንድ ክፍሊ",
        count: "27 መርመራታት",
        desc: "ናይ ከብዲ፣ ናይ ደም ቱቦ ዶፕለር፣ 3D/4D ናይ ዕሸል፣ መገጣጠሚ ኣዕጽምትን ሕጻናት ዳሌን ኢኮካርዲዮግራፊን።",
        cta: "ኣልትራሳውንድ ርኣዩ",
      },
      xray: {
        title: "ዲጂታል ኤክስሬይ",
        count: "24 ዓይነታት",
        desc: "ንደረት፣ ርእሲ፣ ዓንዲ-ሕቖ፣ መዓኮርን ኣእጋርን ብውሑድ ጨረር ብሉጽ ናይ ዲጂታል ምስሊ መርመራ።",
        cta: "ዝርዝር ኤክስሬይ",
      },
      special: {
        title: "ፍሉያት መርመራታት",
        count: "ፍሎሮስኮፒ",
        desc: "ናይ ማህጸን ቱቦ መርመራ (HSG) ንመኻንነት፣ ናይ ሽንቲ ቱቦ (IVU/IVP) ከምኡ'ውን ናይ ባርየም መርመራታት።",
        cta: "ናይ ማህጸንን ከብድን",
      },
      ctMri: {
        title: "ሲቲን ኤምአርአይን ንባብ",
        count: "ካልኣይ ርእይቶ",
        desc: "ካብ ላዕለዎት ናይ ራዲዮሎጂ ስፔሻሊስት ሓካይም ናይ ቴሌ-ራዲዮሎጂ ትንታነን ካልኣይ ርእይቶን።",
        cta: "ምርመራ ሕተቱ",
      },
    },
    usSection: {
      badge: "ናይ ምስሊ መርመራ ሶኖግራፊ",
      title: "3ጂ ኣገልግሎታት ኣልትራሳውንድ፦",
      highlight: "27 ርጡባት ዓይነታት",
      subtitle: "ካብ 3D/4D ናይ ዕሸልን ናይ ደም ቱቦ ዶፕለርን ክሳብ ናይ ሓደሽቲ ሕጻናት ሓንጎልን ብመርፍእ ዝግበር ባዮፕሲን።",
      swipeHint: "ብጎኒ ኣንሸራትቱ →",
      prepLabel: "ቅድመ-ምድላው፦ ",
      detailsBtn: "ዝርዝር ሓበሬታ",
      bookScanBtn: "ቆጸራ ይሓዙ",
      exploreAllBtn: "ኩሎም 27 ኣልትራሳውንድታት ርኣዩ",
    },
    specialSection: {
      badge: "ፍሉይ ናይ ፍሎሮስኮፒ መርመራ",
      title: "ፍሉያት መርመራታት፦ ",
      highlight: "HSG፣ IVU፣ CUG ከምኡ'ውን ናይ ባርየም ተኸታታሊ",
      description: "ስሩዕ መርመራ ዘይገልጾም ውሽጣዊ ኣካላት ተግባር ንምርኣይ፣ ሓካይምና ብኽብረት፣ ብምቾትን ብቕልጡፍ ውጽኢትን ፍሉይ መርመራታት የካይዱ።",
      prepBtn: "ቅድመ-መርመራ መምርሒ",
      suiteTitle: "ክብረት ዘለዎ ርህሩህ ኣተሓሕዛ ሕሙማን",
      suiteDesc: "ምስጢራዊ ክፍሊ መርመራ፣ ርህሩህ ናይ ሕክምና ጋንታን ምስ ልኡኽ ሓኪምኩም ቀጥታዊ ርክብን።",
    },
    aboutSection: {
      badge: "04 • ብዛዕባ ክሊኒክና",
      title: "ዝበለጸ ጥዕና ንብሩህ መጻኢ፦ ",
      highlight: "ራድያንስ ክሊኒክን 3ጂ ማእኸል መርመራን",
      p1: "ራድያንስ ብዙሕ-ስፔሻሊቲ ክሊኒክን 3ጂ ማእኸል ምርመራ ምስልን ንማሕበረሰብና ተበጻሒ፣ እሙንን ርህሩህን ናይ ጥዕና ኣገልግሎት ንምሃብ ብዝብል ዕላማ ተመስሪቱ።",
      p2: "ኣብ ዓዲደሮን ባህርዳርን ብሉጻት ማእከላት ብምክፋት፣ ብቑዓት ራዲዮሎጂስቲ ሓካይም፣ ዘመናዊ 3D/4D ኣልትራሳውንድ፣ ዲጂታል ኤክስሬይን ኣውቶሜትድ ላቦራቶሪን ኣወሃሂድና ነቕርብ።",
      storyBtn: "ምሉእ ታሪኽ ክሊኒክና ኣንብቡ",
      leadershipBtn: "ሓካይምናን ኣመራርሓን",
      flagshipTitle: "ማእከላት ጥዕና ዓዲደሮን ባህርዳርን",
      flagshipSubtitle: "ቀንዲ ማእከላት",
      safeModernBadge: "ውሑስን ዘመናውን",
    },
    whyUs: {
      badge: "05 • ስለምንታይ ንሕና?",
      title: "ደረጃ ራድያንስ፦ ",
      highlight: "ሕሙማት ስለምንታይ ይመርጹና",
      subtitle: "ብናይ ሕክምና ፍልስፍናና ተመሪሕና፦ ልዑል ትክክለኛነት መርመራ፣ ድሕነት ሕሙማትን ርህራሄ ዝመልኦ ክንክንን ነረጋግጽ።",
      swipeHint: "ብጎኒ ኣንሸራትቱ →",
      items: [
        {
          title: "ንሕሙማት ቀዳምነት",
          desc: "ምቾት ሕሙማት፣ ንጹር ርክብ፣ ልኡም ኣተሓሕዛ መርመራን ሰብኣዊ ክብረትን ኣብ ኩሉ ስጉምቲ ነቐድም።",
        },
        {
          title: "ፅሬትን ድሕነትን",
          desc: "ጽኑዕ ናይ መመርመሪ ጽሬት፣ ትሑት ጨረር ዝጥቀም ኤክስሬይን መዓልታዊ ናይ መሳርሒታት ምፍታሽን ንገብር።",
        },
        {
          title: "ዘመናዊ ቴክኖሎጂ",
          desc: "ላዕለዋይ ብቕዓት ዘለዎም ናይ 3D/4D መመርመሪታት፣ ዲጂታል ኤክስሬይን ብኮምፒተር ዝሰርሑ ናይ ላብ መሳርሒታትን።",
        },
        {
          title: "ሞያዊ ተኣማንነት",
          desc: "ቅኑዕ ምኽሪ፣ ግሉጽ ናይ ካልኣይ ርእይቶ መርመራን ዘተኣማምን ናይ ጽሑፍ ራዲዮሎጂ ሪፖርትን።",
        },
      ],
    },
    doctorsSection: {
      badge: "06 • ናይ ሕክምና ኣመራርሓ",
      title: "ሓካይምናን ",
      highlight: "ስፔሻሊስት ራዲዮሎጂስቲን ተላለዩ",
      subtitle: "ንትክክለኛ መርመራን ጥዕናኹምን ዝተወፈዩ ፍሉይ ስልጠና ዘለዎም ናይ ሕክምና ሰብ-ሞያ።",
      viewAllBtn: "ኩሎም ስፔሻሊስታት ርኣዩ",
      swipeHint: "መገለጺታት ብጎኒ ኣንሸራትቱ →",
      bookConsultation: "ቆጸራ ሕተቱ",
      collaborativeBadge: "ሓባራዊ መርመራ",
      caseReviewsTitle: "ቀጥታዊ ናይ ሓካይምን ራዲዮሎጂስትን ክትዕ",
      caseReviewsDesc: "ምስ ዝልእኩና ሓካይም ብቐረባ ንሰርሕ። ናይ መርመራ ወረቐትኩም ሒዝኩም ብምምጻእ ወይ ብቐጥታ ምስ ራዲዮሎጂስት ብምዝርራብ ቅልጡፍ መርመራ ኣካይዱ።",
      callRadiologistBtn: "ንራዲዮሎጂስት ደውሉ",
    },
    facilitiesSection: {
      badge: "07 • ዘመናዊ መሳርሒታት",
      title: "ናይ ሕክምና ትካላትናን ",
      highlight: "ናይ መርመራ ቴክኖሎጂን",
      subtitle: "ንድሕነት ሕሙማት፣ ንጽህናን ርጡብ መርመራን ተባሂሎም ዝተዳለዉ ዘመናዊ ናይ መርመራ ክፍልታት።",
      swipeHint: "ብጎኒ ኣንሸራትቱ →",
      items: [
        {
          category: "ርጡብ መርመራ",
          title: "3ጂ ኣልትራሳውንድ ክፍሊ",
          desc: "ናይ 3D/4D ናይ ዕሸል ገጽ ብቀጥታ ዘርእይን ናይ ደም ቱቦ ፍሰት ብዶፕለር ዝምርምርን።",
        },
        {
          category: "ናይ ራዲዮሎጂ ክፍሊ",
          title: "ዲጂታል ኤክስሬይ ክፍሊ",
          desc: "ብውሑድ ናይ ጨረር መጠን ብቕጽበት ንጹር ናይ ኣዕጽምቲ ስእሊ ዝህብ ዲጂታል መሳርሒ።",
        },
        {
          category: "ቅልጡፍ ላቦራቶሪ",
          title: "ክሊኒካል ላቦራቶሪ",
          desc: "ኣብ ውሽጢ 30 ደቓይቕ ውጽኢት ዝህቡ ብኮምፒተር ዝሰርሑ ናይ ባዮኬሚስትሪን ደምን መመርመሪታት።",
        },
        {
          category: "ክንክን ሕሙማን",
          title: "መቐበሊ ጋሻን መመርመሪን",
          desc: "ገፊሕ መጸበዪ ኣዳራሽ፣ ፍሉያት ናይ ሓኪም መመርመሪ ክፍልታትን ናይ 24/7 ህጹጽ ረድኤት ጣብያን።",
        },
      ],
    },
    testimonialsSection: {
      badge: "08 • ናይ ሕሙማን ርእይቶ",
      title: "ናይ ሕሙማን መሰኻኽር ",
      highlight: "(ዝተረጋገጹ ተመክሮታት)",
      subtitle: "ኣብ ዓዲደሮ፣ ባህርዳርን ከባቢኡን ዝርከቡ ሕሙማት ብዛዕባ ትክክለኛ መርመራናን ክንክንናን ዝበልዎ ኣንብቡ።",
      verifiedBadge: "ዝተረጋገጸ",
      swipeHint: "ብጎኒ ኣንሸራትቱ →",
      items: [
        {
          name: "ኣልማዝ ከ. መንገሻ",
          service: "3D/4D ናይ ዕሸል ኣልትራሳውንድ",
          location: "ዓዲደሮ",
          date: "ሕዳር 2026",
          comment: "ኣብ ዓዲደሮ ዝገበርናዮ 3D/4D ስካን ንዓይን ንበዓል ቤተይን ፍሉይ ተመክሮ እዩ ነይሩ። እቲ ሓኪም ብፍጹም ርህራሄ ናይ ቆልዓና ገጽን ህርመት ልብን ብዝርዝር ገሊጹልና። ብጣዕሚ የመስግን!",
        },
        {
          name: "ታደሰ ወ. ገብረ",
          service: "ናይ ደም ቱቦ ዶፕለር",
          location: "ባሕር ዳር",
          date: "ጥቅምቲ 2026",
          comment: "እግረይ ብብርቱዕ ሓቢጡ ኣብ ቀዳመ-ሰንበት ህጹጽ ዶፕለር የድልየኒ ነይሩ። ናይ 3ጂ ጋንታ ኣብ ውሽጢ 20 ደቒቕ መርሚሮም ሪፖርት ቀጥታ ናብ ሓኪመይ ሰዲዶሞ። ቅልጡፍን ብሉጽን ኣገልግሎት እዩ።",
        },
        {
          name: "ሄለን በ. ተስፋየ",
          service: "ናይ ማህጸን ቱቦ HSG መርመራ",
          location: "ዓዲደሮ",
          date: "ሕዳር 2026",
          comment: "ቅድሚ HSG ምግባረይ ብዙሕ ፈሪሐ ነይረ፣ ዶ/ር ሰላማዊትን ነርስታትን ግን ብጣዕሚ ብልኡምን ብክብረትን ኣረጋጊኦም ኣካይዶምለይ። እቲ ክፍሊ ኣዝዩ ጽሩይን ውልቃውን እዩ።",
        },
        {
          name: "ዮሃንስ ኣ. በርሀ",
          service: "ዲጂታል ናይ ኣዕጽምቲ ኤክስሬይ",
          location: "ባሕር ዳር",
          date: "ጥቅምቲ 2026",
          comment: "ንጹር ናይ ዲጂታል ኤክስሬይ ምስሊ፣ ዘየጸቢ ቀረባ ጊዜን ዘመናዊ ኣቀባብላን። ውጽኢት ብዋትስኣፕ ብምልኣኾም ድማ ካልኣይ ግዜ ካብ ምምልላስ ኣድሒኑኒ።",
        },
      ],
    },
    branchesSection: {
      badge: "09 • ጨንፈራትን ጉግል ካርታን",
      title: "ማእከላት መርመራና ኣብ ",
      highlight: "ዓዲደሮን ባህርዳርን ይብጽሑ",
      subtitle: "ቀጥታዊ ናይ ቴሌፎን መስመራት፣ ናይ ጉግል ካርታ መምርሒታትን ዝተዋደደ ናይ ሕክምና ክንክንን።",
      swipeHint: "ብጎኒ ኣንሸራትቱ →",
      locationDirectionsLabel: "ቦታን ኣንፈት መንገዲን፦",
      locationAddressLabel: "ቦታን ኣድራሻን፦",
      callBtn: "ደውሉ",
      mapsBtn: "ጉግል ካርታ",
      bookBtn: "ቆጸራ",
    },
    ctaSection: {
      badge: "10 • ቆጸራን ቀጥታዊ ርክብን",
      title: "ናይ ኣልትራሳውንድ፣ ዲጂታል ኤክስሬይ ወይ ሓኪም ቆጸራ ይሓዙ",
      description: "ቅልጡፍ ናይ ኢንተርኔት ቆጸራ ምሓዝ፣ ንጹር ናይ ቅድመ-መርመራ መምርሒ፣ ብቑዓት ራዲዮሎጂስቲን ናይ ሓደ መዓልቲ ውጽኢት ብሞባይል ተሌፎንኩምን።",
      bookBtn: "ብኢንተርኔት ቆጸራ ይሓዙ",
      contactBtn: "ኣድራሻታትና ርኣዩ",
    },
    branches: {
      adiDeroTitle: "3ጂ ማእኸል ምርመራን ምስልን",
      adiDeroBranchName: "ጨንፈር 1 • ቀንዲ ማእኸል መርመራ",
      adiDeroAddress: CLINIC_INFO.branches[0].addressTigrinya,
      adiDeroTagline: CLINIC_INFO.branches[0].taglineTigrinya,
      adiDeroMotto: "3ጂ ንድሕነት ሕክምና ቅድሚያ ይሀብ!",
      adiDeroHours: "ሰኑይ - ሰንበት: 7:30 ንጉሆ - 8:30 ምሸት (24/7 ህጹጽ ረድኤት)",
      bahirDarTitle: "ራድያንስ ብዙሕ-ስፔሻሊቲ ክሊኒክ",
      bahirDarBranchName: "ጨንፈር 2 • ሁለገብ ስፔሻሊቲ ማእኸል",
      bahirDarAddress: CLINIC_INFO.branches[1].addressTigrinya,
      bahirDarTagline: CLINIC_INFO.branches[1].taglineTigrinya,
      bahirDarMotto: "ዝበለጸ ጥዕና ንብሩህ መጻኢ",
      bahirDarHours: "ሰኑይ - ቀዳም: 8:00 ንጉሆ - 8:00 ምሸት | ሰንበት: 8:30 ንጉሆ - 5:00 ድሕሪ ቀትሪ",
    },
    bookingWizard: {
      steps: {
        service: "ኣገልግሎት",
        examination: "ፍሉይ መርመራ",
        dateTime: "መዓልትን ሰዓትን",
        patientInfo: "ሓበሬታ ሕሙም",
      },
      stepOf: (current, total) => `ስጉምቲ ${current} ካብ ${total}`,
      step1Title: "ናይ ኣገልግሎት ዓይነት ይምረጹ",
      step1Desc: "ዘድልየኩም ናይ መርመራ ስካን ወይ ናይ ሓኪም ምኽሪ ዓይነት ይምረጹ።",
      categories: {
        ultrasound: { title: "3ጂ ኣልትራሳውንድ", desc: "27 ስካናት (3D/4D፣ ዶፕለር፣ MSK፣ TVS)", count: "27 ስካናት" },
        xray: { title: "ዲጂታል ኤክስሬይ", desc: "24 ምሉእ ኣካላት ምርመራ", count: "24 ዓይነታት" },
        special: { title: "ፍሉይ ፍሎሮስኮፒ", desc: "HSG፣ IVU፣ CUG፣ ባርየም መርመራታት", count: "5 ፍሉያት" },
        ctMri: { title: "ሲቲን ኤምአርአይን ንባብ", desc: "ናይ ስፔሻሊስት ሓኪም ካልኣይ ርእይቶ", count: "ቴሌ-ራዲዮሎጂ" },
        clinic: { title: "ናይ ሓኪም ምኽሪ", desc: "ልቢ፣ ማህጸን፣ ቆልዑ፣ ኣዕጽምቲ", count: "8 ክሊኒካት" },
        lab: { title: "ዲያግኖስቲክ ላብ", desc: "ኣውቶሜትድ CBC፣ ባዮኬሚስትሪ፣ ሆርሞናት", count: "ቅልጡፍ ላብ" },
      },
      continueToScan: "ናብ ፍሉይ መርመራ ምረጻ ሕለፉ",
      step2Title: "ፍሉይ መርመራኹም ይምረጹ",
      step2Desc: "ኣብ ናይ ሓኪም ወረቐትኩም ዝተጠቕሰ ትክክለኛ መርመራ ይምረጹ።",
      prepLabel: "ቅድመ-ምድላው፦ ",
      continueToSchedule: "ናብ መዓልትን ሰዓትን ሕለፉ",
      step3Title: "ቦታን መዓልትን ይምረጹ",
      step3Desc: "ዝጥዕመኩም ጨንፈርን ናይ ምምጽኢት ሰዓትን ይምረጹ።",
      selectClinicLabel: "ናይ ክሊኒክ ማእከል ይምረጹ፦",
      preferredDateLabel: "ዝመረጽዎ መዓልቲ *",
      preferredTimeLabel: "ዝጥዕመኩም ናይ ሰዓት መስኮት",
      timeSlots: [
        "08:00 ንጉሆ - 10:00 ንጉሆ (ናይ ንጉሆ ሰዓት)",
        "10:00 ንጉሆ - 12:00 ቀትሪ (ናይ ፍርቂ መዓልቲ ሰዓት)",
        "01:30 ድሕሪ ቀትሪ - 03:30 ድሕሪ ቀትሪ (ናይ ድሕሪ ቀትሪ ሰዓት)",
        "03:30 ድሕሪ ቀትሪ - 06:00 ምሸት (ናይ ምሸት ሰዓት)",
        "ህጹጽ / ናይ ሎሚ መርመራ",
      ],
      continueToPatient: "ናብ ሓበሬታ ሕሙም ሕለፉ",
      step4Title: "ሓበሬታ ሕሙም",
      step4Desc: "ናይ ቆጸራ መረጋገጺን ናይ ቅድመ-ምርመራ መምርሒን ንምቕባል ስልክኹም የእትዉ።",
      patientNameLabel: "ምሉእ ስም ሕሙም *",
      phoneLabel: "ቁጽሪ ተሌፎን (ሪፖርት ብዋትስኣፕ ንምቕባል) *",
      ageLabel: "ዕድመ / ጾታ",
      doctorLabel: "ዝለኣኸ ሓኪም / ሆስፒታል (እንተሃልዩ)",
      notesLabel: "ምኽንያት መርመራ / ሕማም ምልክት (እንተሃልዩ)",
      summaryLabel: "ሓጺር መግለጺ፦",
      examLabel: "መርመራ፦ ",
      locationLabel: "ቦታ፦ ",
      timeLabel: "ሰዓት፦ ",
      confirmBtn: "ቆጸራ ኣረጋግጹ",
      submittingBtn: "ይሰድድ ኣሎ...",
      step5Badge: "ቆጸራ ተቐቢልና መዝጊብና ኣለና",
      step5Title: "ቆጸራኹም ብዓወት ተመዝጊቡ ኣሎ!",
      step5Desc: "ናይ ቆጸራ ሕቶኹም ኣብ ናይ ክሊኒክና መዝገብ ሰፊሩ ኣሎ። ቀዳምነት ዝረክብ ቅልጡፍ መረጋገጺ ንምርካብ ናብ ዋትስኣፕ መቐበሊ ጋሻና ስደድዎ።",
      refLabel: "መፍለዪ ቁጽሪ ቆጸራ፦",
      patientLabel: "ሕሙም፦ ",
      serviceLabel: "ኣገልግሎት፦ ",
      branchLabel: "ጨንፈር፦ ",
      scheduledTimeLabel: "ዝተመደበሉ ሰዓት፦ ",
      dbStatusLabel: "ኩነታት ምዝገባ፦ ",
      dbStatusValue: "ኣብ ክሊኒካል ሲስተም ተመዝጊቡ",
      sendWhatsAppBtn: "ዝርዝር ናብ ዋትስኣፕ መቐበሊ ጋሻ ስደዱ",
      receptionNotice: "ቀጥታዊ መልእኽቲ ናብ መስመር ክሊኒክ፦ +251 990 084 747",
      prepAlertPrefix: "ኣገዳሲ ቅድመ-ምድላው ን ",
      returnHomeBtn: "ናብ መበገሲ ገጽ ተመለሱ",
      callReceptionBtn: "ንመቐበሊ ጋሻ ደውሉ",
      backBtn: "ንድሕሪት",
    },
    contactPage: {
      badge: "ኣድራሻታትን ሓገዝን",
      title: "ኣድራሻን ማእከላት ክሊኒክናን",
      description: "ኣብ ዓዲደሮን ባህርዳርን ክልተ ማእከላት ነካይድ። ብቐጥታ ደውሉ፣ ናይ ቆጸራ ሕቶ ስደዱ ወይ ድማ ብኣካል ምጹ።",
      swipeHint: "ብጎኒ ኣንሸራትቱ →",
      primaryPhoneLabel: "ቀንዲ ተሌፎን",
      mobileLinesLabel: "ቀጥታዊ ሞባይል መስመራት",
      emailLabel: "ኢመይል",
      hoursLabel: "ናይ ስራሕ ሰዓታት",
      callBranch1: "ንዓዲደሮ ደውሉ",
      bookBranch1: "ኣብ ዓዲደሮ ቆጸራ ይሓዙ",
      callBranch2: "ንባህርዳር ደውሉ",
      bookBranch2: "ኣብ ባህርዳር ቆጸራ ይሓዙ",
      formTitle: "መልእኽቲ ወይ ሕቶ ስደዱልና",
      formDesc: "ኣተሓባበርቲ ክሊኒክና ኣብ ስራሕ ሰዓት ኣብ ውሽጢ 1-2 ሰዓታት ምላሽ ይህቡ።",
      fullNameLabel: "ምሉእ ስም *",
      phoneLabel: "ቁጽሪ ተሌፎን *",
      clinicLabel: "ዝመረጽዎ ጨንፈር",
      serviceLabel: "ዝደለይዎ ኣገልግሎት",
      messageLabel: "መልእኽቲ / ሕቶኹም",
      sendBtn: "መልእኽቲ ስደዱ",
      successTitle: "መልእኽትኹም ተቐቢልና መዝጊብናዮ ኣለና",
      successDesc: (name, phone) => `የቐንየልና፣ ${name}። መልእኽትኹም ናብ ናይ ሕክምና ጋንታና በጺሑ ኣሎ። ቀልጢፍና ብ ${phone} ክንድውለልኩም ኢና።`,
      alsoWhatsAppBtn: "ናብ ዋትስኣፕ እውን ስደድዎ (+251 990 084 747)",
      sendAnotherBtn: "ካልእ መልእኽቲ ስደዱ",
      emergencyBadge: "24/7 ህጹጽ ረድኤት",
      emergencyTitle: "ህጹጽ ኣልትራሳውንድን ኤክስሬይን",
      emergencyDesc: "ንህጹጽ ናይ ከብዲ ቃንዛ፣ ናይ ደም ቱቦ ምዕጻው (DVT)፣ ስብራት ኣዕጽምቲ ወይ ናይ ምስትንፋስ ጸገም፣ ማእከልና 24 ሰዓት ድሉው ሶኖግራፈር ኣለዎ።",
      callEmergencyBtn: "ናብ ህጹጽ መስመር ደውሉ",
      referringTitle: "ንዝልእኩ ሓካይም ዝምልከት",
      referringDesc: "ህጹጽ ናይ ቴሌ-ራዲዮሎጂ ንባብ ወይ ፍሉይ ናይ ኣልትራሳውንድ ውጽኢት ንምዝርራብ ምስ ላዕለዋይ ራዲዮሎጂስት ቀጥታዊ ርክብ ክግበር ይከኣል እዩ።",
    },
    aboutPage: {
      badge: "ናይ ትካል መገለጺን ታሪኽን",
      title: "ብዛዕባ ራድያንስ ክሊኒክን ",
      highlight: "3ጂ ማእኸል ምርመራን",
      subtitle: "\"ዝበለጸ ጥዕና ንብሩህ መጻኢ\" — ኣብ ዓዲደሮን ባህርዳርን ተበጻሒ፣ ፅሬት ዘለዎን ንሕሙም ማእከል ዝገበረን ናይ መርመራን ሕክምናን ኣገልግሎት ምሃብ።",
      storyBadge: "ታሪኽናን ድሕረ-ባይታናን",
      storyTitle: "ብፅሬት ሕክምናን ትክክለኛ መርመራን ቃል ኪዳን ዝተሃነጸ",
      storyP1: "ራድያንስ ብዙሕ-ስፔሻሊቲ ክሊኒክን ማእኸል መርመራን ንማሕበረሰብና ተበጻሒ፣ ዘተኣማምንን ኩለመዳያውን ናይ ጥዕና ኣገልግሎት ንምሃብ ብንጹር ዕላማ ተመስሪቱ።",
      storyP2: "ኣብ ዞባና ዘሎ ናይ ዘመናዊ መርመራ ጠለብ ብምርዳእ፣ ብቑዓት ናይ ሕክምና ሰብ-ሞያ ብሓባር ብምዃን እሙንን ዘመናውን ክሊኒክ ፈጢሮም።",
      infrastructureTitle: "ዘመናውን ንሕሙማት ምቹእን ትካል",
      milestones: [
        {
          title: "ብንጹር ራእይ ምምስራት",
          desc: "ጥራቱ ዝሓለወ ናይ መርመራን ሕክምናን ኣገልግሎት ንምቕራብ ብዝተወፈዩ ናይ ጥዕና ሰብ-ሞያ ተመስሪቱ።",
        },
        {
          title: "ናብ ብዙሕ-ስፔሻሊቲ ምስፍሕፋሕ",
          desc: "ካብ መርመራ ክሊኒክ ናብ ሁለገብ ስፔሻሊቲ ሕክምና ብምዕባይ፣ ዘመናዊ ኣልትራሳውንድን ዲጂታል ኤክስሬይን ወሲኹ።",
        },
        {
          title: "ናይ 3ጂ መርመራ ብሉጽነት",
          desc: "ኣብ ዓዲደሮን ባህርዳርን ብ27 ዓይነት ኣልትራሳውንድን HSG ፍሉይ መርመራን ቅልጡፍ ውጽኢትን ዝልለ እሙን ማእከል ኮይኑ ኣሎ።",
        },
      ],
      visionBadge: "ስትራቴጂካዊ ኣንፈት",
      visionTitle: "ራእይና",
      visionDesc: "ኣብ ዓዲደሮ፣ ባህርዳርን ካልኦት ከባቢታትን ቀዳማይን እሙንን ብዙሕ-ስፔሻሊቲ ክሊኒክን መርመራ ማእከልን ምዃን።",
      missionBadge: "ዕለታዊ ዕላማ",
      missionTitle: "ተልእኾና",
      missionDesc: "ብብቑዓት ሰብ-ሞያ፣ ዘመናዊ ቴክኖሎጂን ርህራሄ ዝመልኦ ክንክንን ኣቢልና፣ ድሕነቱ ዝተሓለወን ዘተኣማምንን ናይ መርመራን ሕክምናን ኣገልግሎት ምሃብ።",
      valuesBadge: "መሪሕ መትከላት",
      valuesTitle: "ንነፍሲ ወከፍ ዑደት ዝመርሑ ",
      valuesHighlight: "ቀንዲ ክብርታትና",
      valuesSubtitle: "ቀንዲ ክብርታትና ንሕሙማትናን ንማሕበረሰብናን ኣብ እንደልዎ ኩሉ ኣገልግሎት መሪሕና እዮም።",
      values: [
        {
          title: "ንሕሙማት ቀዳምነት",
          desc: "ጥዕና፣ ድሕነትን ምቾትን ሕሙማትና ኣብ ማእከል ኩሉ ንገብሮ ነገራት ነቐምጦ።",
        },
        {
          title: "ፅሬትን ድሕነትን",
          desc: "ላዕለዋይ ደረጃ ሕክምና፣ ትክክለኛ መርመራን ጽሩይ ናይ ክሊኒክ ሃዋህውን ንሕሉ ።",
        },
        {
          title: "ተኣማንነት",
          desc: "ግሉጽነት፣ ሓቀኝነት፣ ምስጢር ሕሙማት ምሕላውን ሞያዊ ስነ-ምግባርን ነተግብር።",
        },
        {
          title: "ምህዞን ዕቤትን",
          desc: "ዘመናዊ 3D/4D ኣልትራሳውንድን ዲጂታል ኤክስሬይን ቴክኖሎጂ ብምጥቃም ኩሉ ግዜ ነመሓይሽ።",
        },
        {
          title: "ናይ ሓባር ስራሕ",
          desc: "ብምክብባር፣ ምትሕግጋዝን ሓባራዊ ቆራጽነትን ብሉጽ ናይ ሕክምና ክንክን ንህብ።",
        },
        {
          title: "ማሕበረሰባዊ ተወፋይነት",
          desc: "ኣብ ዓዲደሮን ባህርዳርን ንዝርከብ ማሕበረሰብና ጥዕና ንምምሕያሽ ብጽንዓት ንሰርሕ።",
        },
      ],
      philosophyBadge: "ናይ ጥዕና ክንክን ፍልስፍናና",
      philosophyQuote: "\"ነፍሲ ወከፍ ሕሙም ውልቃዊ፣ ክብረት ዘለዎን ብሉጽን ናይ ሕክምና ክንክን ክረክብ ይግብኦ።\"",
      philosophyDesc: "ኣብ ራድያንስን 3ጂን፣ ሕክምና ማለት ምልክት ሕማም ምሕካም ጥራይ ዘይኮነስ፤ ብጽሞና ምስማዕ፣ ምግላጽ፣ ጭንቀት ምቕናስን ምስቲ ሕሙም ኣብ ኩሉ መድረኽ ምዕሳልን ማለት እዩ።",
      teamBtn: "ናይ ሕክምና ጋንታና ተላለዩ",
      locationsBtn: "ማእከላትና ይብጽሑ",
    },
    doctorsPage: {
      badge: "ናይ ሕክምና ኣመራርሓ",
      title: "ናይ ሕክምና ሰብ-ሞያናን ጋንታናን",
      description: "ንጥዕናኹምን ድሕነትኩምን ዝተወፈዩ ብቑዓት ራዲዮሎጂስቲን ስፔሻሊስታትን ኣብ ዓዲደሮን ባህርዳርን።",
      swipeHint: "መገለጺታት ብጎኒ ኣንሸራትቱ →",
      languagesLabel: "ቋንቋታት፦ ",
      qualificationsLabel: "ትምህርቲ፦ ",
      bookConsultationWith: (name) => `ምስ ${name} ቆጸራ ይሓዙ`,
      collaborativeBadge: "ሓባራዊ መርመራ",
      collaborativeTitle: "ቀጥታዊ ናይ ሓካይምን ራዲዮሎጂስትን ክትዕ",
      collaborativeDesc: "ምስ ዝልእኩና ሓካይም ብቐረባ ንሰርሕ። ናይ መርመራ ወረቐትኩም ሒዝኩም ብምምጻእ ወይ ብቐጥታ ምስ ራዲዮሎጂስት ብምዝርራብ ቅልጡፍ መርመራ ኣካይዱ።",
      callDoctorBtn: "ንራዲዮሎጂስት ደውሉ",
    },
    patientsPage: {
      badge: "ምድላውን ክንክንን",
      title: "ናይ ቅድመ-መርመራ መምርሒታት",
      description: "ናይ ኣልትራሳውንድ፣ ዲጂታል ኤክስሬይ ወይ ላቦራቶሪ መርመራኹም ንጹርን ትክክለኛን ምእንቲ ክኸውን ነዚኦም መምርሒታት ተኸተሉ።",
      tabs: {
        ultrasound: "ኣልትራሳውንድ",
        xray: "ዲጂታል ኤክስሬይ",
        special: "HSGን ፍሉያትን",
        lab: "ናይ ላቦራቶሪ መርመራታት",
      },
      faqsTitle: "ተደጋጊሞም ዝሕተቱ ሕቶታት",
      faqsSubtitle: "ብዛዕባ ድሕነት መርመራ፣ ጥንሲ ኣልትራሳውንድን ውጽኢትን ንጹር መልስታት።",
      callAssistance: "ብዛዕባ ቅድመ-ምድላው ሕቶ ኣለኩምዶ? ናብ መቐበሊ ደውሉ፦",
    },
    servicesPage: {
      badge: "ናይ መርመራን ሕክምናን ማውጫ",
      title: "ናይ መርመራን ሕክምናን ኣገልግሎታት",
      description: "ኩሎም 27 ኣልትራሳውንድታት፣ 24 ኤክስሬይታት፣ HSG፣ IVU፣ ባርየም፣ ሲቲ/ኤምአርአይ ንባብን ክሊኒካትን ዝሓዘ ምሉእ ማውጫ።",
      searchPlaceholder: "ስካናት፣ ኣካላት ወይ ምልክታት ድለዩ (ዶፕለር፣ HSG፣ ብርኪ፣ ደረት)...",
      showingText: (filtered, total) => `ካብ ${total} መርመራታት ${filtered} ይርከቡ`,
      clearBtn: "ኣጽሪ",
      categories: {
        all: "ኩሎም ኣገልግሎታት (50+)",
        ultrasound: "3ጂ ኣልትራሳውንድ (27)",
        xray: "ዲጂታል ኤክስሬይ (24)",
        special: "ፍሉያት መርመራታት (5)",
        ctMri: "ሲቲን ኤምአርአይን ንባብ",
        clinic: "ስፔሻሊቲ ክሊኒካት",
        lab: "ዲያግኖስቲክ ላብ",
      },
      prepLabel: "ቅድመ-ምድላው፦ ",
      detailsBtn: "ዝርዝር ርኣዩ",
      bookScanBtn: "ቆጸራ ይሓዙ",
    },
    footer: {
      aboutDesc: "ንሕሙማት ቀዳምነት ዝህብ ናይ መርመራን ሕክምናን ማእከል፣ ኣህጉራዊ ደረጃ ዝሓለወ ትክክለኛ መርመራን ርህሩህ ክንክንን ዝህብ።",
      safetyCertified: "ዝተረጋገጸ ድሕነት ጨረርን ኣልትራሳውንድን",
      imagingTitle: "3ጂ ምርመራ ምስልን",
      navTitle: "ክንክን ሕሙማንን መምርሒታትን",
      centersTitle: "ማእከላትን ርክብን",
      copyright: "© 2026 ራድያንስ ክሊኒክን 3ጂ ማእኸል መርመራን። ኩሉ መሰል ሕጉስ እዩ።",
      privacy: "ምስጢር ሕሙማት",
      directions: "ኣንፈት መንገዲ",
      onlineBooking: "ኦንላይን ቆጸራ",
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
      servicesCatalog: "የአገልግሎቶች ዝርዝር",
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
      catalogDesc: "ከ50 በላይ የተሟላ የአልትራሳውንድ፣ ኤክስሬይ እና ላብ ዝርዝር",
      usDesc: "27 የአልትራሳውንድ አይነቶች እና 4D ምስል",
      xrayDesc: "24 የዲጂታል ምርመራዎች ከHSG፣ IVU እና ቤሪየም ጋር",
      ctDesc: "የስፔሻሊስት ሐኪም ሁለተኛ አስተያየት",
      multiDesc: "የልብ፣ የማህጸን፣ የህጻናት እና ላቦራቶሪ",
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
      stats: [
        { label: "የአልትራሳውንድ አይነቶች", value: "27+" },
        { label: "የዲጂታል ኤክስሬይ ምርመራ", value: "24+" },
        { label: "ልዩ ምርመራዎች", value: "5" },
        { label: "የምርመራ ትክክለኛነት", value: "99.4%" },
      ],
    },
    pillars: {
      badge: "ዋና ዋና የህክምና ምሶሶዎች",
      swipeHint: "ወደ ጎን ያንሸራትቱ →",
      ultrasound: {
        title: "3ጂ አልትራሳውንድ ክፍል",
        count: "27 ምርመራዎች",
        desc: "የሆድ ዕቃ፣ የደም ስር ዶፕለር፣ 3D/4D የጽንስ፣ የመገጣጠሚያ እና የህጻናት ዳሌ፣ ኢኮካርዲዮግራፊ።",
        cta: "አልትራሳውንድ ይመልከቱ",
      },
      xray: {
        title: "ዲጂታል ኤክስሬይ",
        count: "24 ዓይነቶች",
        desc: "የደረት፣ የራስ ቅል፣ የአከርካሪ፣ የማህጸን እና የእጅ እግር አጥንት በዝቅተኛ ጨረር ከፍተኛ ጥራት ያለው ምስል።",
        cta: "የኤክስሬይ ዝርዝር",
      },
      special: {
        title: "ልዩ ምርመራዎች",
        count: "ፍሎሮስኮፒ",
        desc: "የማህጸን ቱቦ ምርመራ (HSG) ለመካንነት፣ የሽንት ቧንቧ (IVU/IVP) እና የቤሪየም ተከታታይ ምርመራዎች።",
        cta: "የማህጸን እና የሆድ",
      },
      ctMri: {
        title: "የሲቲ እና ኤምአርአይ ንባብ",
        count: "ሁለተኛ አስተያየት",
        desc: "ከከፍተኛ የራዲዮሎጂ ስፔሻሊስቶች የቴሌ-ራዲዮሎጂ ንባብ፣ ትንታኔ እና የጉዳይ ውይይት።",
        cta: "ምርመራ ይጠይቁ",
      },
    },
    usSection: {
      badge: "የዲያግኖስቲክ ሶኖግራፊ",
      title: "3ጂ አልትራሳውንድ አገልግሎቶች፦",
      highlight: "27 ጥራት ያላቸው ዓይነቶች",
      subtitle: "ከ3D/4D የጽንስ እና የደም ስር ዶፕለር እስከ አዲስ የተወለዱ ህጻናት አእምሮ እና በመርፌ የሚወሰድ ባዮፕሲ።",
      swipeHint: "ወደ ጎን ያንሸራትቱ →",
      prepLabel: "ቅድመ-ዝግጅት፦ ",
      detailsBtn: "ዝርዝር መረጃ",
      bookScanBtn: "ቀጠሮ ይያዙ",
      exploreAllBtn: "ሁሉንም 27 አልትራሳውንዶች ይመልከቱ",
    },
    specialSection: {
      badge: "ልዩ የፍሎሮስኮፒ ምርመራ",
      title: "ልዩ ምርመራዎች፦ ",
      highlight: "HSG፣ IVU፣ CUG እና የቤሪየም ተከታታይ",
      description: "መደበኛ ምስል የማይገልጻቸውን የሰውነት ክፍሎች አሰራር ለመመርመር፣ ሐኪሞቻችን የታካሚውን ክብር እና ምቾት በጠበቀ መልኩ ፈጣን ውጤት ይሰጣሉ።",
      prepBtn: "የቅድመ-ምርመራ መመሪያዎች",
      suiteTitle: "ክብር እና ርህራሄ የተሞላበት የታካሚ እንክብካቤ",
      suiteDesc: "ምስጢራዊ የምርመራ ክፍል፣ ደግ የህክምና ቡድን እና ከላከዎት ሐኪም ጋር ቀጥተኛ ግንኙነት።",
    },
    aboutSection: {
      badge: "04 • ስለ ክሊኒካችን",
      title: "የተሻለ ጤና ለብሩህ ነገ፦ ",
      highlight: "ራዲያንስ ክሊኒክ እና 3ጂ ዲያግኖስቲክ ኢሜጂንግ",
      p1: "ራዲያንስ ሁለገብ ስፔሻሊቲ ክሊኒክ እና 3ጂ የዲያግኖስቲክ ኢሜጂንግ ማዕከል የተመሰረተው ለአካባቢያችን ተደራሽ፣ አስተማማኝ እና ሩህሩህ የህክምና አገልግሎት ለመስጠት ነው።",
      p2: "በአዲደሮ እና በባህር ዳር ዘመናዊ የምስል ማዕከላትን በማስፋፋት፣ ከፍተኛ ስልጠና ያላቸው ራዲዮሎጂስቶች፣ ዘመናዊ 3D/4D አልትራሳውንድ፣ ዲጂታል ኤክስሬይ እና አውቶሜትድ ላቦራቶሪ አሟልተናል።",
      storyBtn: "ሙሉ ታሪካችንን ያንብቡ",
      leadershipBtn: "የህክምና አመራር",
      flagshipTitle: "የአዲደሮ እና የባህር ዳር የጤና ማዕከላት",
      flagshipSubtitle: "ዋና ዋና ማዕከላት",
      safeModernBadge: "ደህንነቱ የተጠበቀ እና ዘመናዊ",
    },
    whyUs: {
      badge: "05 • ለምን እኛን ይመርጣሉ?",
      title: "የራዲያንስ ደረጃ፦ ",
      highlight: "ታካሚዎች ለምን ያምኑናል",
      subtitle: "በህክምና ፍልስፍናችን እየተመራን፦ ከፍተኛ የምርመራ ትክክለኛነት፣ የታካሚ ደህንነት እና ሩህሩህ እንክብካቤ እናረጋግጣለን።",
      swipeHint: "ወደ ጎን ያንሸራትቱ →",
      items: [
        {
          title: "ለታካሚ ቅድሚያ መስጠት",
          desc: "የታካሚ ምቾት፣ ግልጽ ተግባቦት፣ ረጋ ያለ የምርመራ አያያዝ እና ሰብአዊ ክብር በሁሉም ደረጃ ቅድሚያ ይሰጠዋል።",
        },
        {
          title: "ጥራት እና ደህንነት",
          desc: "ጥብቅ የመመርመሪያ መሳሪያዎች ንጽህና፣ አነስተኛ ጨረር የሚጠቀም ኤክስሬይ እና የዕለት ተዕለት የቁጥጥር ስራዎች።",
        },
        {
          title: "ዘመናዊ ቴክኖሎጂ",
          desc: "ከፍተኛ ጥራት ያላቸው 3D/4D መሳሪያዎች፣ ጠፍጣፋ ዲጂታል ኤክስሬይ እና በኮምፒተር የሚሰሩ የላቦራቶሪ እቃዎች።",
        },
        {
          title: "የሙያ ታማኝነት",
          desc: "እውነተኛ የህክምና ምክር፣ ግልጽ የሁለተኛ አስተያየት ምርመራ እና አስተማማኝ የጽሁፍ ራዲዮሎጂ ሪፖርት።",
        },
      ],
    },
    doctorsSection: {
      badge: "06 • የህክምና አመራር",
      title: "ሐኪሞቻችንን እና ",
      highlight: "ስፔሻሊስት ራዲዮሎጂስቶችን ይወቁ",
      subtitle: "ለትክክለኛ ምርመራ እና ለጤናዎ የተተጉ የከፍተኛ ስፔሻሊቲ ስልጠና ያላቸው የህክምና ባለሙያዎች።",
      viewAllBtn: "ሁሉንም ስፔሻሊስቶች ይመልከቱ",
      swipeHint: "መገለጫዎችን ወደ ጎን ያንሸራትቱ →",
      bookConsultation: "ቀጠሮ ይጠይቁ",
      collaborativeBadge: "የጋራ ምርመራ",
      caseReviewsTitle: "ቀጥተኛ የሐኪሞች እና የራዲዮሎጂስቶች ውይይት",
      caseReviewsDesc: "ከሚልኩልን ሐኪሞች ጋር በቅርበት እንሰራለን። የምርመራ ወረቀትዎን ይዘው በመምጣት ወይም ከራዲዮሎጂስቱ ጋር በመነጋገር ፈጣን ምርመራ ያድርጉ።",
      callRadiologistBtn: "ለራዲዮሎጂስት ይደውሉ",
    },
    facilitiesSection: {
      badge: "07 • ዘመናዊ መዋቅር",
      title: "የህክምና ተቋሞቻችን እና ",
      highlight: "የምርመራ ቴክኖሎጂ",
      subtitle: "ለታካሚ ደህንነት፣ ንጽህና እና ጥራት ላለው ምርመራ ተብለው የተዘጋጁ ዘመናዊ የምርመራ ክፍሎች።",
      swipeHint: "ወደ ጎን ያንሸራትቱ →",
      items: [
        {
          category: "ትክክለኛ ምርመራ",
          title: "3ጂ አልትራሳውንድ ክፍል",
          desc: "የ3D/4D የጽንስ ፊት በቀጥታ የሚያሳይ እና የደም ቧንቧ ፍሰት በዶፕለር የሚለካ ዘመናዊ ክፍል ።",
        },
        {
          category: "የራዲዮሎጂ ክፍል",
          title: "ዲጂታል ኤክስሬይ ክፍል",
          desc: "በአነስተኛ የጨረር መጠን በቅጽበት ጥራት ያለው የአጥንት ምስል የሚሰጥ ዲጂታል መመርመሪያ።",
        },
        {
          category: "ፈጣን ላቦራቶሪ",
          title: "ክሊኒካል ላቦራቶሪ",
          desc: "በ30 ደቂቃ ውስጥ ዲጂታል ውጤት የሚያቀርቡ በኮምፒተር የሚሰሩ የባዮኬሚስትሪ እና የደም መመርመሪያዎች።",
        },
        {
          category: "የታካሚ እንክብካቤ",
          title: "የእንግዳ መቀበያ እና ማማከሪያ",
          desc: "ሰፊ የመጠባበቂያ አዳራሽ፣ ጸጥ ያሉ የሐኪም ማማከሪያ ክፍሎች እና የ24/7 የድንገተኛ ክፍል አገልግሎት።",
        },
      ],
    },
    testimonialsSection: {
      badge: "08 • የታካሚዎች አስተያየት",
      title: "የታካሚዎች ምስክርነት ",
      highlight: "(የተረጋገጡ ተሞክሮዎች)",
      subtitle: "በአዲደሮ፣ በባህር ዳር እና በአካባቢው ያሉ ታካሚዎች ስለ ትክክለኛ ምርመራችን እና እንክብካቤያችን የሰጡትን አስተያየት ያንብቡ።",
      verifiedBadge: "የተረጋገጠ",
      swipeHint: "ወደ ጎን ያንሸራትቱ →",
      items: [
        {
          name: "አልማዝ ከ. መንገሻ",
          service: "3D/4D የጽንስ አልትራሳውንድ",
          location: "አዲደሮ",
          date: "ህዳር 2026",
          comment: "በአዲደሮ ያደረግነው 3D/4D ምርመራ ለእኔና ለባለቤቴ የማይረሳ ተሞክሮ ነበር። ሐኪሙ የልጃችንን ፊት እና የልብ ምት በደግነት በዝርዝር አስረድቶናል። በጣም አመሰግናለሁ!",
        },
        {
          name: "ታደሰ ወ. ገብረ",
          service: "የደም ስር ዶፕለር",
          location: "ባሕር ዳር",
          date: "ጥቅምት 2026",
          comment: "እግሬ በድንገት አብጦ በቅዳሜ ቀን አስቸኳይ ዶፕለር አስፈልጎኝ ነበር። የ3ጂ ቡድን በ20 ደቂቃ ውስጥ መርምሮ የተረጋገጠውን ሪፖርት በቀጥታ ለሐኪሜ ላከው። እጅግ ፈጣን እና ድንቅ አገልግሎት ነው።",
        },
        {
          name: "ሄለን በ. ተስፋዬ",
          service: "የማህጸን ቱቦ HSG ምርመራ",
          location: "አዲደሮ",
          date: "ህዳር 2026",
          comment: "ስለ HSG ምርመራ በጣም ፈርቼ ነበር፣ ነገር ግን ዶ/ር ሰላማዊት እና ነርሶቹ በጣም በረጋ እና ክብሬን በጠበቀ ሁኔታ አጽናንተው ምርመራውን አደረጉልኝ። ክፍሉ በጣም ንጹህ እና ምስጢራዊ ነው።",
        },
        {
          name: "ዮሐንስ አ. በርሄ",
          service: "ዲጂታል የአጥንት ኤክስሬይ",
          location: "ባሕር ዳር",
          date: "ጥቅምት 2026",
          comment: "ጥራት ያለው ዲጂታል ኤክስሬይ፣ አጭር የጥበቃ ጊዜ እና ዘመናዊ አቀባበል። ውጤቴን በዋትስአፕ በቀጥታ መላካቸው ፊልም ለመውሰድ ዳግም ከመመላለስ አድኖኛል።",
        },
      ],
    },
    branchesSection: {
      badge: "09 • ቅርንጫፎች እና ጉግል ካርታ",
      title: "የምርመራ ማዕከላቶቻችንን በ ",
      highlight: "አዲደሮ እና ባህር ዳር ይጎብኙ",
      subtitle: "ቀጥተኛ የስልክ መስመሮች፣ የተረጋገጠ የጉግል ካርታ አቅጣጫ እና የተሟላ የህክምና አገልግሎት።",
      swipeHint: "ወደ ጎን ያንሸራትቱ →",
      locationDirectionsLabel: "አካባቢ እና አቅጣጫ፦",
      locationAddressLabel: "አካባቢ እና አድራሻ፦",
      callBtn: "ይደውሉ",
      mapsBtn: "ጉግል ካርታ",
      bookBtn: "ቀጠሮ",
    },
    ctaSection: {
      badge: "10 • ቀጠሮ እና ቀጥተኛ ግንኙነት",
      title: "የአልትራሳውንድ፣ የዲጂታል ኤክስሬይ ወይም የሐኪም ቀጠሮ ይያዙ",
      description: "ፈጣን የኦንላይን ቀጠሮ፣ ግልጽ የቅድመ-ምርመራ መመሪያ፣ አንጋፋ ራዲዮሎጂስቶች እና ፈጣን የዲጂታል ውጤት በሞባይል ስልክዎ።",
      bookBtn: "በኢንተርኔት ቀጠሮ ይያዙ",
      contactBtn: "አድራሻዎቻችንን ይመልከቱ",
    },
    branches: {
      adiDeroTitle: "3ጂ የዲያግኖስቲክ ኢሜጂንግ ማዕከል",
      adiDeroBranchName: "ቅርንጫፍ 1 • ዋና የምርመራ ማዕከል",
      adiDeroAddress: CLINIC_INFO.branches[0].addressAmharic,
      adiDeroTagline: CLINIC_INFO.branches[0].taglineAmharic,
      adiDeroMotto: "3ጂ ለደህንነቱ የተጠበቀ ህክምና ቅድሚያ ይሰጣል!",
      adiDeroHours: "ሰኞ - እሑድ፡ 7:30 ጠዋት - 8:30 ማታ (24/7 የድንገተኛ አገልግሎት)",
      bahirDarTitle: "ራዲያንስ ሁለገብ ስፔሻሊቲ ክሊኒክ",
      bahirDarBranchName: "ቅርንጫፍ 2 • ሁለገብ ስፔሻሊቲ ማዕከል",
      bahirDarAddress: CLINIC_INFO.branches[1].addressAmharic,
      bahirDarTagline: CLINIC_INFO.branches[1].taglineAmharic,
      bahirDarMotto: "የተሻለ ጤና ለብሩህ ነገ",
      bahirDarHours: "ሰኞ - ቅዳሜ፡ 8:00 ጠዋት - 8:00 ማታ | እሑድ፡ 8:30 ጠዋት - 5:00 ከሰዓት",
    },
    bookingWizard: {
      steps: {
        service: "አገልግሎት",
        examination: "ልዩ ምርመራ",
        dateTime: "ቀን እና ሰዓት",
        patientInfo: "የታካሚ መረጃ",
      },
      stepOf: (current, total) => `ደረጃ ${current} ከ ${total}`,
      step1Title: "የአገልግሎት ዘርፍ ይምረጡ",
      step1Desc: "የሚፈልጉትን የምርመራ ስካን ወይም የህክምና ምክክር አይነት ይምረጡ።",
      categories: {
        ultrasound: { title: "3ጂ አልትራሳውንድ", desc: "27 ስካኖች (3D/4D፣ ዶፕለር፣ MSK፣ TVS)", count: "27 ስካኖች" },
        xray: { title: "ዲጂታል ኤክስሬይ", desc: "24 የሙሉ ሰውነት ምርመራዎች", count: "24 ዓይነቶች" },
        special: { title: "ልዩ ፍሎሮስኮፒ", desc: "HSG፣ IVU፣ CUG፣ ቤሪየም ምርመራዎች", count: "5 ምርመራዎች" },
        ctMri: { title: "የሲቲ እና ኤምአርአይ ንባብ", desc: "የስፔሻሊስት ሐኪም ሁለተኛ አስተያየት", count: "ቴሌ-ራዲዮሎጂ" },
        clinic: { title: "የሐኪም ማማከር", desc: "የልብ፣ የማህጸን፣ የህጻናት፣ የአጥንት", count: "8 ክሊኒኮች" },
        lab: { title: "ዲያግኖስቲክ ላብ", desc: "አውቶሜትድ CBC፣ ባዮኬሚስትሪ፣ ሆርሞኖች", count: "ፈጣን ላብ" },
      },
      continueToScan: "ወደ ልዩ ምርመራ ምርጫ ይቀጥሉ",
      step2Title: "የተለየውን ምርመራዎን ይምረጡ",
      step2Desc: "በሐኪምዎ ወረቀት ላይ የተጠቀሰውን ትክክለኛ ምርመራ ይምረጡ።",
      prepLabel: "ቅድመ-ዝግጅት፦ ",
      continueToSchedule: "ወደ ቀን እና ሰዓት ምርጫ ይቀጥሉ",
      step3Title: "ቦታ እና ቀን ይምረጡ",
      step3Desc: "የሚመርጡትን ቅርንጫፍ እና ምቹ የመድረሻ ሰዓት ይምረጡ።",
      selectClinicLabel: "የክሊኒክ ማዕከል ይምረጡ፦",
      preferredDateLabel: "የተመረጠ ቀን *",
      preferredTimeLabel: "ምቹ የሰዓት መስኮት",
      timeSlots: [
        "08:00 ጠዋት - 10:00 ጠዋት (የጠዋት ሰዓት)",
        "10:00 ጠዋት - 12:00 ቀትር (የእኩለ-ቀን ሰዓት)",
        "01:30 ከሰዓት - 03:30 ከሰዓት (የከሰዓት ሰዓት)",
        "03:30 ከሰዓት - 06:00 ማታ (የምሽት ሰዓት)",
        "አስቸኳይ / የዛሬ ምርመራ",
      ],
      continueToPatient: "ወደ ታካሚ መረጃ ይቀጥሉ",
      step4Title: "የታካሚ መረጃ",
      step4Desc: "የቀጠሮ ማረጋገጫ እና የቅድመ-ምርመራ መመሪያዎችን ለመቀበል ስልክዎን ያስገቡ።",
      patientNameLabel: "የታካሚ ሙሉ ስም *",
      phoneLabel: "ስልክ ቁጥር (ሪፖርት በዋትስአፕ ለመቀበል) *",
      ageLabel: "እድሜ / ጾታ",
      doctorLabel: "የላከው ሐኪም / ሆስፒታል (አማራጭ)",
      notesLabel: "የምርመራው ምክንያት / ምልክት (አማራጭ)",
      summaryLabel: "ማጠቃለያ፦",
      examLabel: "ምርመራ፦ ",
      locationLabel: "ቦታ፦ ",
      timeLabel: "ሰዓት፦ ",
      confirmBtn: "ቀጠሮውን አረጋግጥ",
      submittingBtn: "እየተላከ ነው...",
      step5Badge: "ቀጠሮው ተቀባይነት አግኝቶ ተመዝግቧል",
      step5Title: "ቀጠሮዎ በተሳካ ሁኔታ ተመዝግቧል!",
      step5Desc: "የቀጠሮ ጥያቄዎ በክሊኒካችን ሲስተም ውስጥ ተመዝግቧል። ቅድሚያ የሚሰጠው ፈጣን ማረጋገጫ ለማግኘት ዝርዝሩን ወደ ዋትስአፕ መቀበያችን ይላኩት።",
      refLabel: "የቀጠሮ መለያ ቁጥር፦",
      patientLabel: "ታካሚ፦ ",
      serviceLabel: "አገልግሎት፦ ",
      branchLabel: "ቅርንጫፍ፦ ",
      scheduledTimeLabel: "የተመደበ ሰዓት፦ ",
      dbStatusLabel: "የምዝገባ ሁኔታ፦ ",
      dbStatusValue: "በክሊኒካል ሲስተም ተመዝግቧል",
      sendWhatsAppBtn: "ዝርዝሩን ወደ ዋትስአፕ መቀበያ ላክ",
      receptionNotice: "ቀጥተኛ መልእክት ወደ ክሊኒኩ መስመር፦ +251 990 084 747",
      prepAlertPrefix: "አስፈላጊ ቅድመ-ዝግጅት ለ ",
      returnHomeBtn: "ወደ መነሻ ገጽ ተመለስ",
      callReceptionBtn: "ወደ መቀበያ ይደውሉ",
      backBtn: "ተመለስ",
    },
    contactPage: {
      badge: "አድራሻዎች እና ድጋፍ",
      title: "አድራሻ እና የክሊኒክ ቅርንጫፎች",
      description: "በአዲደሮ እና በባህር ዳር ሁለት ልዩ ማዕከላት አሉን። በቀጥታ ስልክ ይደውሉ፣ የቀጠሮ ጥያቄ ይላኩ ወይም በአካል ይጎብኙን።",
      swipeHint: "ወደ ጎን ያንሸራትቱ →",
      primaryPhoneLabel: "ዋና ስልክ",
      mobileLinesLabel: "ቀጥተኛ የሞባይል መስመሮች",
      emailLabel: "ኢሜይል",
      hoursLabel: "የስራ ሰዓታት",
      callBranch1: "ወደ አዲደሮ ይደውሉ",
      bookBranch1: "በአዲደሮ ቀጠሮ ይያዙ",
      callBranch2: "ወደ ባህር ዳር ይደውሉ",
      bookBranch2: "በባህር ዳር ቀጠሮ ይያዙ",
      formTitle: "መልእክት ወይም ጥያቄ ይላኩልን",
      formDesc: "የክሊኒኩ አስተባባሪዎች በስራ ሰዓት ውስጥ በ1-2 ሰዓታት ምላሽ ይሰጣሉ።",
      fullNameLabel: "ሙሉ ስም *",
      phoneLabel: "ስልክ ቁጥር *",
      clinicLabel: "የተመረጠ ቅርንጫፍ",
      serviceLabel: "የሚፈልጉት አገልግሎት",
      messageLabel: "መልእክትዎ / ጥያቄዎ",
      sendBtn: "መልእክት ላክ",
      successTitle: "መልእክትዎ ደርሶ ተመዝግቧል",
      successDesc: (name, phone) => `እናመሰግናለን፣ ${name}። ጥያቄዎ ወደ ህክምና ቡድናችን ደርሷል። በ${phone} በአጭር ጊዜ እንደውልልዎታለን።`,
      alsoWhatsAppBtn: "ወደ ዋትስአፕም ይላኩት (+251 990 084 747)",
      sendAnotherBtn: "ሌላ መልእክት ላክ",
      emergencyBadge: "24/7 የድንገተኛ ክፍል",
      emergencyTitle: "የድንገተኛ አልትራሳውንድ እና ኤክስሬይ",
      emergencyDesc: "ለከባድ የሆድ ህመም፣ ለደም ስር መዘጋት (DVT)፣ ለአጥንት ስብራት ወይም ለመተንፈስ ችግር፣ ማዕከላችን 24 ሰዓት በተጠንቀቅ የሚሰራ ሶኖግራፈር አለው።",
      callEmergencyBtn: "ወደ ድንገተኛ መስመር ይደውሉ",
      referringTitle: "ለሚልኩ ሐኪሞች ጥያቄ",
      referringDesc: "አስቸኳይ የቴሌ-ራዲዮሎጂ ንባብ ወይም ልዩ የአልትራሳውንድ ግኝቶችን ለመወያየት ከዋና ራዲዮሎጂስቱ ጋር ቀጥታ ግንኙነት ማድረግ ይቻላል።",
    },
    aboutPage: {
      badge: "የተቋሙ ታሪክ እና መገለጫ",
      title: "ስለ ራዲያንስ ክሊኒክ እና ",
      highlight: "3ጂ ዲያግኖስቲክ ኢሜጂንግ",
      subtitle: "\"የተሻለ ጤና ለብሩህ ነገ\" — በአዲደሮ እና በባህር ዳር ተደራሽ፣ ጥራት ያለው እና ታካሚን ማዕከል ያደረገ የምርመራ እና የህክምና አገልግሎት ማቅረብ።",
      storyBadge: "ታሪካችን እና አመጣጣችን",
      storyTitle: "በጥራት ህክምና እና ትክክለኛ ምርመራ ቃል ኪዳን ላይ የተመሰረተ",
      storyP1: "ራዲያንስ ሁለገብ ስፔሻሊቲ ክሊኒክ እና የምርመራ ማዕከል ለአካባቢያችን ተደራሽ፣ አስተማማኝ እና የተሟላ የጤና አገልግሎት ለመስጠት በግልጽ ራዕይ ተቋቋመ።",
      storyP2: "በአካባቢያችን ያለውን የዘመናዊ ምርመራ ፍላጎት በመገንዘብ፣ አንጋፋ የህክምና ባለሙያዎች በጋራ በመሆን ታማኝ እና ዘመናዊ ክሊኒክ ፈጥረዋል።",
      infrastructureTitle: "ዘመናዊ እና ለታካሚ ምቹ ተቋም",
      milestones: [
        {
          title: "በግልጽ ራዕይ መመስረት",
          desc: "ጥራቱን የጠበቀ የተቀናጀ የህክምና እና የምስል ምርመራ ክፍተትን ለመሙላት በተቋቋሙ የጤና ባለሙያዎች ተመሰረተ።",
        },
        {
          title: "ወደ ሁለገብ ስፔሻሊቲ ማደግ",
          desc: "ከተናጠል የምርመራ ክሊኒክ ወደ ሁለገብ ስፔሻሊቲ በማደግ፣ ዘመናዊ አልትራሳውንድ እና ዲጂታል ኤክስሬይን በተከታታይ ጨመረ።",
        },
        {
          title: "የ3ጂ የምርመራ የላቀ ደረጃ",
          desc: "በአዲደሮ እና በባህር ዳር በ27 የአልትራሳውንድ ዓይነቶች፣ በልዩ HSG ምርመራ እና በፈጣን ውጤት የታወቀ ተመራጭ ማዕከል ሆነ።",
        },
      ],
      visionBadge: "ስትራቴጂካዊ አቅጣጫ",
      visionTitle: "ራዕያችን",
      visionDesc: "በአዲደሮ፣ በባህር ዳር እና በመላው ክልሉ ግንባር ቀደም፣ ተደራሽ እና ታማኝ ሁለገብ ስፔሻሊቲ እና የምርመራ ማዕከል መሆን።",
      missionBadge: "የዕለት ተዕለት ተልዕኮ",
      missionTitle: "ተልዕኳችን",
      missionDesc: "በሰለጠኑ ባለሙያዎች፣ በዘመናዊ ቴክኖሎጂ እና በርህራሄ የተሞላ እንክብካቤ አስተማማኝ የህክምና እና የምርመራ አገልግሎት መስጠት።",
      valuesBadge: "መርሆቻችን",
      valuesTitle: "እያንዳንዱን ጉብኝት የሚመሩ ",
      valuesHighlight: "ዋና ዋና እሴቶቻችን",
      valuesSubtitle: "ዋና ዋና እሴቶቻችን ለታካሚዎቻችን፣ ለሰራተኞቻችን እና ለማህበረሰባችን በምንሰጠው አገልግሎት ሁሉ መመሪያችን ናቸው።",
      values: [
        {
          title: "ለታካሚ ቅድሚያ መስጠት",
          desc: "የታካሚዎቻችንን ጤና፣ ደህንነት እና ምቾት በምናደርገው ነገር ሁሉ ማዕከል እናደርጋለን።",
        },
        {
          title: "ጥራት እና ደህንነት",
          desc: "ከፍተኛ የህክምና ደረጃ፣ ትክክለኛ ምርመራ እና ንጹህ የክሊኒክ አካባቢን እንጠብቃለን።",
        },
        {
          title: "ታማኝነት",
          desc: "በእውነተኛነት፣ ግልጽነት፣ የታካሚ ምስጢር በመጠበቅ እና በሙያ ስነ-ምግባር እንሰራለን።",
        },
        {
          title: "ፈጠራ እና እድገት",
          desc: "ዘመናዊ 3D/4D አልትራሳውንድ እና ዲጂታል ኤክስሬይ ቴክኖሎጂን ለተሻለ ውጤት እንጠቀማለን።",
        },
        {
          title: "የጋራ ስራ",
          desc: "በመከባበር፣ በመተባበር እና በጋራ ቁርጠኝነት የላቀ የታካሚ እንክብካቤ እናቀርባለን።",
        },
        {
          title: "ለማህበረሰብ ቁርጠኝነት",
          desc: "በአዲደሮ፣ በባህር ዳር እና በአካባቢው ያለውን ማህበረሰብ ጤና ለማሻሻል በቁርጠኝነት እንሰራለን።",
        },
      ],
      philosophyBadge: "የጤና እንክብካቤ ፍልስፍናችን",
      philosophyQuote: "\"እያንዳንዱ ታካሚ የተሻለ ጤናን የሚያበረታታ የግል፣ ክብር ያለው እና ጥራት ያለው እንክብካቤ ይገባዋል።\"",
      philosophyDesc: "በራዲያንስ እና 3ጂ፣ ህክምና የበሽታ ምልክትን ማከም ብቻ አይደለም፤ በትኩረት ማዳመጥ፣ ማስረዳት፣ ፍርሃትን መቀነስ እና በፈውስ ጉዞ ሁሉ ከታካሚው ጎን መቆም ነው።",
      teamBtn: "የህክምና ቡድናችንን ይወቁ",
      locationsBtn: "ማዕከላቶቻችንን ይጎብኙ",
    },
    doctorsPage: {
      badge: "የህክምና አመራር",
      title: "የህክምና ባለሙያዎቻችን እና ሰራተኞቻችን",
      description: "በአዲደሮ እና በባህር ዳር ለጤናዎ እና ለደህንነትዎ የተተጉ የከፍተኛ ስልጠና ባለቤት የሆኑ ራዲዮሎጂስቶች እና ስፔሻሊስቶች ቡድን።",
      swipeHint: "መገለጫዎችን ወደ ጎን ያንሸራትቱ →",
      languagesLabel: "ቋንቋዎች፦ ",
      qualificationsLabel: "የትምህርት ደረጃ፦ ",
      bookConsultationWith: (name) => `ከ ${name} ጋር ቀጠሮ ይያዙ`,
      collaborativeBadge: "የጋራ ምርመራ",
      collaborativeTitle: "ቀጥተኛ የሐኪሞች እና የራዲዮሎጂስቶች ውይይት",
      collaborativeDesc: "ከሚልኩልን ሐኪሞች ጋር በቅርበት እንሰራለን። የምርመራ ወረቀትዎን ይዘው በመምጣት ወይም ከራዲዮሎጂስቱ ጋር በመነጋገር ፈጣን ምርመራ ያድርጉ።",
      callDoctorBtn: "ለራዲዮሎጂስት ይደውሉ",
    },
    patientsPage: {
      badge: "ዝግጅት እና እንክብካቤ",
      title: "የታካሚ ቅድመ-ምርመራ መመሪያዎች",
      description: "የአልትራሳውንድ፣ የዲጂታል ኤክስሬይ ወይም የላቦራቶሪ ምርመራዎ ጥራት ያለው እና ትክክለኛ እንዲሆን እነዚህን ቀላል መመሪያዎች ይከተሉ።",
      tabs: {
        ultrasound: "የአልትራሳውንድ ምርመራ",
        xray: "ዲጂታል ኤክስሬይ",
        special: "HSG እና ልዩ ምርመራዎች",
        lab: "የላቦራቶሪ ምርመራዎች",
      },
      faqsTitle: "ተደጋግመው የሚጠየቁ ጥያቄዎች",
      faqsSubtitle: "ስለ ምርመራ ደህንነት፣ የእርግዝና አልትራሳውንድ እና ውጤት ግልጽ ማብራሪያዎች።",
      callAssistance: "ስለ ዝግጅትዎ ጥያቄ አለዎት? ወደ ህክምና መቀበያችን ይደውሉ፦",
    },
    servicesPage: {
      badge: "የምርመራ እና ህክምና ማውጫ",
      title: "የህክምና እና የምርመራ አገልግሎቶች",
      description: "ሁሉንም 27 አልትራሳውንዶች፣ 24 ኤክስሬዮች፣ HSG፣ IVU፣ ቤሪየም፣ የሲቲ/ኤምአርአይ ንባብ እና ስፔሻሊቲ ክሊኒኮችን የያዘ ሙሉ ማውጫ።",
      searchPlaceholder: "ስካኖችን፣ የሰውነት ክፍሎችን ወይም ምልክቶችን ይፈልጉ (ዶፕለር፣ HSG፣ ጉልበት፣ ደረት)...",
      showingText: (filtered, total) => `ከ ${total} ምርመራዎች ${filtered} እየታዩ ነው`,
      clearBtn: "አጽዳ",
      categories: {
        all: "ሁሉም አገልግሎቶች (50+)",
        ultrasound: "3ጂ አልትራሳውንድ (27)",
        xray: "ዲጂታል ኤክስሬይ (24)",
        special: "ልዩ ምርመራዎች (5)",
        ctMri: "የሲቲ እና ኤምአርአይ ንባብ",
        clinic: "ስፔሻሊቲ ክሊኒኮች",
        lab: "ዲያግኖስቲክ ላብ",
      },
      prepLabel: "ቅድመ-ዝግጅት፦ ",
      detailsBtn: "ዝርዝር ይመልከቱ",
      bookScanBtn: "ቀጠሮ ይያዙ",
    },
    footer: {
      aboutDesc: "ለታካሚ ቅድሚያ የሚሰጥ የምስል ምርመራ እና ሁለገብ የህክምና አገልግሎት፣ ዓለም አቀፍ ደረጃውን የጠበቀ ትክክለኛ ምርመራ እና ሩህሩህ እንክብካቤ።",
      safetyCertified: "የተረጋገጠ የጨረር እና አልትራሳውንድ ደህንነት",
      imagingTitle: "3ጂ ዲያግኖስቲክ ኢሜጂንግ",
      navTitle: "የታካሚ እንክብካቤ እና መመሪያ",
      centersTitle: "ማዕከላት እና አድራሻ",
      copyright: "© 2026 ራዲያንስ ክሊኒክ እና 3ጂ ዲያግኖስቲክ ኢሜጂንግ። መብቱ በህግ የተጠበቀ ነው።",
      privacy: "የታካሚ ምስጢር",
      directions: "አቅጣጫ",
      onlineBooking: "የኦንላይን ቀጠሮ",
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
