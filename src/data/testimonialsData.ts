export interface Testimonial {
  id: string;
  name: string;
  location: string;
  service: string;
  rating: number;
  date: string;
  comment: string;
  verified: boolean;
}

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: "test-1",
    name: "Almaz K. Mengesha",
    location: "Adi Dero",
    service: "3D/4D Fetal Ultrasound",
    rating: 5,
    date: "November 2026",
    comment: "The 3D/4D scan in Adi Dero was an unforgettable experience for my husband and me. The radiologist took time to explain every detail of our baby's facial features and heart rate with incredible kindness. Highly recommended!",
    verified: true
  },
  {
    id: "test-2",
    name: "Tadesse W. Gebre",
    location: "Bahir Dar",
    service: "Carotid & Venous Doppler",
    rating: 5,
    date: "October 2026",
    comment: "I had severe leg swelling and needed urgent Doppler sonography on a weekend. The 3G imaging team performed the scan within 20 minutes and sent the certified report directly to my doctor. Exceptional speed and clinical care.",
    verified: true
  },
  {
    id: "test-3",
    name: "Hellen B. Tesfaye",
    location: "Adi Dero",
    service: "HSG Fluoroscopy Procedure",
    rating: 5,
    date: "November 2026",
    comment: "I was extremely nervous about the HSG procedure, but Dr. Selamawit and the nursing team were so gentle, respectful, and reassuring throughout. The environment was clean and completely private.",
    verified: true
  },
  {
    id: "test-4",
    name: "Yohannes A. Berhe",
    location: "Bahir Dar",
    service: "Digital Skeletal X-Ray",
    rating: 5,
    date: "October 2026",
    comment: "Crisp digital X-ray images, minimal waiting time, and clean modern facilities. The WhatsApp digital report dispatch saved me a whole return trip to pick up physical films.",
    verified: true
  }
];
