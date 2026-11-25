export interface Doctor {
  id: string;
  name: string;
  title: string;
  specialty: string;
  subspecialty?: string;
  experienceYears: number;
  qualifications: string[];
  languages: string[];
  schedule: string;
  location: string;
  bio: string;
  avatarUrl: string;
  badge?: string;
}

export const DOCTORS_DATA: Doctor[] = [
  {
    id: "dr-alemayehu-radiologist",
    name: "Dr. Alemayehu Tesfaye",
    title: "Senior Consultant Radiologist & Imaging Director",
    specialty: "Diagnostic Radiology & Cross-Sectional Imaging",
    subspecialty: "CT, MRI Subspecialty & Advanced Color Doppler",
    experienceYears: 16,
    qualifications: ["MD", "Specialty Certificate in Radiology (AAU)", "Fellowship in Advanced Body Imaging"],
    languages: ["Amharic", "English", "Tigrinya"],
    schedule: "Monday – Friday: 8:00 AM – 4:00 PM",
    location: "3G Diagnostic Imaging & Radiance Center",
    bio: "Over 16 years leading high-volume tertiary diagnostic imaging departments. Renowned for meticulous CT/MRI cross-sectional reading, Doppler vascular analysis, and complex obstetric ultrasound interpretations.",
    avatarUrl: "/images/photo-doctors-team.jpg",
    badge: "Clinical Lead"
  },
  {
    id: "dr-selamawit-sonologist",
    name: "Dr. Selamawit G. Kidane",
    title: "Consultant Radiologist & Fetal Imaging Specialist",
    specialty: "Obstetric 3D/4D & Women's Imaging",
    subspecialty: "Fetal Doppler, High-Risk Pregnancy & HSG Procedures",
    experienceYears: 12,
    qualifications: ["MD", "Specialist in Radiodiagnosis", "Diploma in Fetal Medicine & 4D Sonography"],
    languages: ["Tigrinya", "Amharic", "English"],
    schedule: "Monday – Saturday: 8:30 AM – 3:30 PM",
    location: "3G Diagnostic Imaging Center (Adi Dero)",
    bio: "Pioneered advanced 3D/4D surface rendering and Doppler fetal surveillance in the region. Specializes in empathetic, gentle HSG examinations for couples undergoing fertility evaluations.",
    avatarUrl: "/images/photo-doctor-hero.jpg",
    badge: "Fetal Medicine"
  },
  {
    id: "dr-biruk-cardiologist",
    name: "Dr. Biruk Hailu",
    title: "Consultant Cardiologist & Internist",
    specialty: "Adult Cardiology & Cardiovascular Diagnostics",
    subspecialty: "Echocardiography, Doppler Hemodynamics & ECG Analysis",
    experienceYears: 14,
    qualifications: ["MD", "Internal Medicine (Specialty)", "Subspecialty Fellowship in Cardiology"],
    languages: ["Amharic", "English"],
    schedule: "Tuesday, Thursday, Saturday: 9:00 AM – 2:00 PM",
    location: "Radiance Multispeciality Center",
    bio: "Specializes in echocardiographic assessment of valvular heart diseases, ischemic cardiomyopathy, and rigorous hypertension risk stratification.",
    avatarUrl: "/images/photo-consultation.jpg",
    badge: "Heart Specialist"
  },
  {
    id: "dr-meron-pediatrician",
    name: "Dr. Meron Assefa",
    title: "Consultant Pediatrician & Neonatologist",
    specialty: "Pediatrics & Child Health",
    subspecialty: "Neonatal Cranial Ultrasound & Infant Hip (DDH) Screening",
    experienceYears: 11,
    qualifications: ["MD", "Specialty in Pediatrics & Child Health", "Certified Infant Hip Sonologist"],
    languages: ["Amharic", "Tigrinya", "English"],
    schedule: "Monday, Wednesday, Friday: 9:00 AM – 5:00 PM",
    location: "Radiance Multispeciality Hub",
    bio: "Dedicated to compassionate neonatal and pediatric care, with unique expertise in gentle fontanelle cranial ultrasound and early Graf screening for developmental dysplasia of the hip.",
    avatarUrl: "/images/photo-doctor-hero.jpg",
    badge: "Child Health"
  },
  {
    id: "dr-tewodros-orthopedic",
    name: "Dr. Tewodros Haile",
    title: "Consultant Orthopedic Surgeon",
    specialty: "Orthopedics, Joint Care & Trauma",
    subspecialty: "MSK Ultrasound & Fracture Care",
    experienceYears: 13,
    qualifications: ["MD", "Master of Surgery (Orthopedic Surgery)", "AO Trauma Fellow"],
    languages: ["Tigrinya", "Amharic", "English"],
    schedule: "Monday – Thursday: 10:00 AM – 4:00 PM",
    location: "3G Diagnostic Imaging & Radiance Center",
    bio: "Works at the intersection of immediate digital X-ray diagnostics and conservative fracture care, tendon injuries, and sports rehabilitation.",
    avatarUrl: "/images/photo-doctors-team.jpg",
    badge: "Bone & Joint"
  }
];
