export interface ServiceItem {
  id: string;
  name: string;
  category: "ultrasound" | "xray" | "special-procedure" | "ct-mri" | "multispeciality" | "laboratory";
  shortDescription: string;
  fullDescription: string;
  indications: string[];
  preparation: string;
  durationMinutes: number;
  resultsTurnaround: string;
  featured?: boolean;
  tag?: string;
}

export const ULTRASOUND_SERVICES: ServiceItem[] = [
  {
    id: "abdominal-us",
    name: "Abdominal Ultrasound",
    category: "ultrasound",
    shortDescription: "Comprehensive diagnostic evaluation of liver, gallbladder, pancreas, spleen, kidneys, and abdominal aorta.",
    fullDescription: "High-resolution sonographic imaging assessing abdominal organs for gallstones, fatty liver disease, cysts, tumors, pancreatitis, splenomegaly, and vascular abnormalities.",
    indications: ["Unexplained abdominal pain", "Abnormal liver function tests", "Jaundice", "Suspected gallstones or kidney stones", "Bloating or organ enlargement"],
    preparation: "Fast for 6 to 8 hours prior to the scan (water permitted). Reduces bowel gas for optimal image clarity.",
    durationMinutes: 20,
    resultsTurnaround: "Immediate preliminary report, formal radiologist report within 2 hours.",
    featured: true,
    tag: "High Demand"
  },
  {
    id: "abdominopelvic-us",
    name: "Abdominopelvic Ultrasound",
    category: "ultrasound",
    shortDescription: "Complete examination spanning the entire abdominal cavity and pelvic region in a single comprehensive session.",
    fullDescription: "Simultaneous evaluation of upper gastrointestinal and urinary tract organs alongside pelvic reproductive organs and urinary bladder.",
    indications: ["Diffuse lower abdominal discomfort", "Suspected pelvic masses", "Urinary and digestive symptoms combined", "Comprehensive health screening"],
    preparation: "Fast 6 hours before scan, then drink 3-4 glasses of water 1 hour prior to maintain a comfortably full bladder.",
    durationMinutes: 30,
    resultsTurnaround: "Same-day reporting within 2 hours.",
    featured: true
  },
  {
    id: "pelvic-us",
    name: "Pelvic Ultrasound",
    category: "ultrasound",
    shortDescription: "Transabdominal imaging of uterus, endometrium, ovaries, adnexa, and urinary bladder.",
    fullDescription: "Accurate assessment for uterine fibroids, endometrial thickness, ovarian cysts, polycystic ovary syndrome (PCOS), and pelvic pain etiology.",
    indications: ["Irregular bleeding", "Pelvic pain", "Ovarian cyst surveillance", "Suspected uterine fibroids or polyps"],
    preparation: "Drink 1 liter of plain water 1 hour before appointment; do not empty your bladder before the scan.",
    durationMinutes: 20,
    resultsTurnaround: "Within 1-2 hours."
  },
  {
    id: "tvs-us",
    name: "Transvaginal Ultrasound (TVS)",
    category: "ultrasound",
    shortDescription: "High-frequency internal ultrasound offering unmatched resolution of the endometrium and ovaries.",
    fullDescription: "Provides exceptionally close visualization of pelvic structures for early pregnancy detection, ectopic pregnancy exclusion, follicular tracking, and fine ovarian pathology.",
    indications: ["Early pregnancy evaluation (weeks 5-10)", "Ectopic pregnancy rule-out", "Infertility & follicular monitoring", "Abnormal uterine bleeding", "Deep pelvic endometriosis"],
    preparation: "Empty bladder completely immediately prior to the examination. Performed with full patient dignity and gentle technique.",
    durationMinutes: 15,
    resultsTurnaround: "Immediate preliminary review, formal report in 1 hour.",
    featured: true,
    tag: "Specialized"
  },
  {
    id: "trus-us",
    name: "Transrectal Ultrasound (TRUS)",
    category: "ultrasound",
    shortDescription: "Detailed internal acoustic assessment of the prostate gland and seminal vesicles.",
    fullDescription: "High-precision diagnostic imaging to measure prostate volume, characterize benign prostatic hyperplasia (BPH), and detect suspicious focal lesions.",
    indications: ["Elevated PSA levels", "Obstructive urinary symptoms", "Prostate enlargement evaluation", "Pre-biopsy assessment"],
    preparation: "Mild cleansing enema may be advised 2 hours prior. Follow clinic-specific instructions on booking.",
    durationMinutes: 20,
    resultsTurnaround: "Within 2 hours."
  },
  {
    id: "obstetric-us",
    name: "Obstetric Ultrasound",
    category: "ultrasound",
    shortDescription: "Routine and specialized prenatal fetal scanning across first, second, and third trimesters.",
    fullDescription: "Assessment of fetal viability, gestational age, anatomical survey, placental localization, amniotic fluid volume, and fetal growth curve tracking.",
    indications: ["Pregnancy confirmation", "Dating and viability", "Anatomy anomaly scan (18-22 weeks)", "Third-trimester growth & well-being"],
    preparation: "Mildly full bladder for scans under 14 weeks. Normal hydration for second/third trimesters.",
    durationMinutes: 25,
    resultsTurnaround: "Immediate report with printed photos and digital scan clips.",
    featured: true,
    tag: "Maternal Care"
  },
  {
    id: "scrotal-us",
    name: "Scrotal Ultrasound (Testicular Doppler)",
    category: "ultrasound",
    shortDescription: "High-frequency imaging of testes, epididymides, and testicular vascular flow.",
    fullDescription: "Evaluates acute scrotal pain, testicular torsion, varicocele, hydrocele, epididymitis, orchitis, and testicular masses.",
    indications: ["Acute scrotal pain (Emergency)", "Testicular swelling or lump", "Male fertility workup (varicocele)", "Trauma"],
    preparation: "No dietary restrictions. Wear loose, comfortable clothing.",
    durationMinutes: 15,
    resultsTurnaround: "Stat reporting for acute torsion emergencies; 1 hour routine."
  },
  {
    id: "thyroid-us",
    name: "Thyroid Ultrasound",
    category: "ultrasound",
    shortDescription: "High-resolution neck sonography examining thyroid lobes, isthmus, and parathyroid glands.",
    fullDescription: "Classifies solitary nodules and multinodular goiters according to TI-RADS risk criteria and inspects cervical lymph node chains.",
    indications: ["Palpable neck lump", "Abnormal thyroid hormone levels (TSH)", "Goiter monitoring", "TI-RADS surveillance"],
    preparation: "No special preparation needed. Avoid high-collared shirts or necklaces.",
    durationMinutes: 20,
    resultsTurnaround: "Within 1-2 hours."
  },
  {
    id: "breast-us",
    name: "Breast Ultrasound (BI-RADS)",
    category: "ultrasound",
    shortDescription: "Targeted acoustic imaging to evaluate breast lumps, cysts, fibroadenomas, and axillary nodes.",
    fullDescription: "A gentle, radiation-free diagnostic modality essential for dense breast tissue, young women, and evaluating palpable abnormalities.",
    indications: ["Palpable breast lump", "Pain or nipple discharge", "Complementary to mammography", "Targeted BI-RADS assessment"],
    preparation: "Do not apply powders, deodorants, or creams to the chest area on exam day.",
    durationMinutes: 25,
    resultsTurnaround: "Same-day reporting within 2 hours."
  },
  {
    id: "msk-us",
    name: "MSK Ultrasound (Musculoskeletal)",
    category: "ultrasound",
    shortDescription: "Dynamic real-time evaluation of joints, muscles, tendons, ligaments, and soft tissues.",
    fullDescription: "Examines rotator cuff tears, Achilles tendonitis, ligament sprains, bursitis, ganglion cysts, and muscle tears with dynamic movement tests.",
    indications: ["Joint pain and sports injuries", "Tendon rupture or tendinitis", "Suspected rotator cuff injury", "Soft tissue swelling"],
    preparation: "Wear clothing allowing easy exposure of the examined joint.",
    durationMinutes: 25,
    resultsTurnaround: "Within 2 hours."
  },
  {
    id: "cranial-us",
    name: "Cranial Ultrasound (Neonatal & Infant)",
    category: "ultrasound",
    shortDescription: "Gentle neuro-sonography through the open anterior fontanelle in infants.",
    fullDescription: "Screens for intraventricular hemorrhage (IVH), hydrocephalus, hypoxic-ischemic injury, and congenital structural brain anomalies without sedation.",
    indications: ["Premature infants", "Rapidly expanding head circumference", "Suspected congenital infection or birth trauma", "Seizures in neonates"],
    preparation: "Perform scan when infant is calm or sleeping; feeding right before the appointment is welcomed.",
    durationMinutes: 20,
    resultsTurnaround: "Immediate specialist reading."
  },
  {
    id: "spinal-us",
    name: "Spinal Ultrasound (Infant)",
    category: "ultrasound",
    shortDescription: "Sonographic visualization of neonatal spinal cord and cauda equina.",
    fullDescription: "Evaluates the infant lower spine to exclude tethered cord syndrome, spina bifida occulta, sacral dimples, and dermal sinus tracts.",
    indications: ["Sacral dimple or hair tuft", "Suspected spinal dysraphism in neonate", "Lower limb asymmetry in infant"],
    preparation: "Performed during the first few months of life while posterior elements remain cartilaginous.",
    durationMinutes: 20,
    resultsTurnaround: "Within 2 hours."
  },
  {
    id: "renal-arteries-doppler",
    name: "Renal Arteries Duplex Doppler Ultrasound",
    category: "ultrasound",
    shortDescription: "Hemodynamic Doppler evaluation of main renal arteries and intra-parenchymal flow.",
    fullDescription: "Measures peak systolic velocities and resistive indices to detect renovascular hypertension and renal artery stenosis.",
    indications: ["Refractory or secondary hypertension", "Unexplained kidney function decline", "Renal transplant monitoring"],
    preparation: "Fast for 8 hours prior to minimize bowel gas overlying the retroperitoneum and aorta.",
    durationMinutes: 35,
    resultsTurnaround: "Detailed hemodynamic report within 2 hours.",
    featured: true,
    tag: "Advanced Doppler"
  },
  {
    id: "carotid-doppler",
    name: "Carotid Duplex Doppler Ultrasound",
    category: "ultrasound",
    shortDescription: "Non-invasive acoustic imaging of common, internal, and external carotid arteries and vertebral arteries.",
    fullDescription: "Quantifies atherosclerotic plaque burden, lumen stenosis, and stroke risk using Color and Spectral Doppler velocity criteria.",
    indications: ["Transient ischemic attack (TIA) or stroke", "Cervical carotid bruit", "Dizziness, syncopal episodes", "Pre-operative vascular clearance"],
    preparation: "No fasting required. Wear open-collared clothing.",
    durationMinutes: 30,
    resultsTurnaround: "Formal vascular report within 2 hours.",
    featured: true,
    tag: "Stroke Prevention"
  },
  {
    id: "venous-doppler",
    name: "Venous Duplex Doppler Ultrasound (Upper/Lower Extremity)",
    category: "ultrasound",
    shortDescription: "Venous compression sonography and color flow analysis of deep and superficial veins.",
    fullDescription: "Accurately detects Deep Vein Thrombosis (DVT), superficial thrombophlebitis, and chronic venous valvular insufficiency / varicose veins.",
    indications: ["Unilateral leg swelling, calf tenderness or redness", "Suspected DVT", "Post-thrombotic syndrome", "Varicose vein mapping"],
    preparation: "No fasting necessary. Fast-track emergency protocols available for acute DVT.",
    durationMinutes: 30,
    resultsTurnaround: "Stat emergency notification, complete report in 1 hour."
  },
  {
    id: "arterial-doppler",
    name: "Arterial Duplex Doppler Ultrasound (Upper/Lower Extremity)",
    category: "ultrasound",
    shortDescription: "Spectral velocity mapping of peripheral limb arteries.",
    fullDescription: "Detects peripheral arterial disease (PAD), arterial occlusion, claudication causes, pseudoaneurysms, and vascular graft patency.",
    indications: ["Claudication (pain while walking)", "Non-healing foot ulcers", "Absent peripheral pulses", "Diabetic foot vascular assessment"],
    preparation: "Rest quietly for 10 minutes prior to scan; keep limbs warm.",
    durationMinutes: 35,
    resultsTurnaround: "Comprehensive hemodynamic mapping within 2 hours."
  },
  {
    id: "pregnancy-doppler",
    name: "Pregnancy Doppler Ultrasound (for IUGR)",
    category: "ultrasound",
    shortDescription: "Fetal-maternal vascular assessment examining umbilical, middle cerebral (MCA), and uterine arteries.",
    fullDescription: "Critical hemodynamic surveillance detecting intrauterine growth restriction (IUGR), placental insufficiency, and fetal hypoxia.",
    indications: ["Suspected fetal growth restriction", "Maternal preeclampsia or hypertension", "Decreased fetal movement", "Twin pregnancies"],
    preparation: "No fasting needed. Relaxed, hydrated state recommended.",
    durationMinutes: 30,
    resultsTurnaround: "Immediate specialist evaluation and obstetrician consultation.",
    featured: true,
    tag: "High-Risk Pregnancy"
  },
  {
    id: "bpp-us",
    name: "Ultrasound for Biophysical Profile (BPP)",
    category: "ultrasound",
    shortDescription: "Multifactorial ultrasound assessment evaluating fetal breathing, movement, tone, and amniotic fluid index.",
    fullDescription: "Combined with non-stress scoring to determine acute and chronic fetal well-being in late-trimester pregnancies.",
    indications: ["Post-date pregnancy", "Maternal diabetes or chronic illness", "Oligohydramnios or polyhydramnios", "Altered fetal movement"],
    preparation: "Have a light meal or juice 30 minutes before appointment to encourage active fetal state.",
    durationMinutes: 30,
    resultsTurnaround: "Immediate composite score delivered to referring clinician."
  },
  {
    id: "fnac-us",
    name: "Ultrasound-Guided FNAC (Fine Needle Aspiration Cytology)",
    category: "ultrasound",
    shortDescription: "Interventional sonography providing millimeter-accurate needle biopsy of thyroid, breast, or lymph nodes.",
    fullDescription: "Real-time needle tip visualization ensuring safe, painless cellular aspiration with minimal trauma and maximal diagnostic yield.",
    indications: ["Suspicious thyroid nodules", "Palpable or non-palpable breast masses", "Enlarged cervical/axillary lymph nodes", "Focal soft tissue lesions"],
    preparation: "Disclose any blood-thinning medications in advance. Performed under local antiseptic and comfort care.",
    durationMinutes: 30,
    resultsTurnaround: "Cytopathology report prepared in collaboration with pathology team.",
    featured: true,
    tag: "Interventional"
  },
  {
    id: "ocular-us",
    name: "Ocular Ultrasound (B-Scan)",
    category: "ultrasound",
    shortDescription: "High-frequency orbital acoustic scan through closed eyelids.",
    fullDescription: "Visualizes the posterior eye segment when optical media are opaque due to cataracts or vitreous hemorrhage. Detects retinal detachment and ocular tumors.",
    indications: ["Dense cataracts preventing fundus exam", "Sudden vision loss", "Vitreous hemorrhage", "Suspected retinal detachment or intraocular foreign body"],
    preparation: "Remove contact lenses; eyes remain gently closed with gel applied on lids.",
    durationMinutes: 15,
    resultsTurnaround: "Immediate bedside interpretation."
  },
  {
    id: "3d-4d-us",
    name: "Fully Functional 3D/4D Ultrasound Services",
    category: "ultrasound",
    shortDescription: "Cutting-edge volumetric real-time surface rendering of the developing baby.",
    fullDescription: "Brings parents face-to-face with their unborn child through lifelike live-motion 4D imaging, while empowering radiologists to evaluate cleft lip/palate, facial dysmorphism, and spinal integrity.",
    indications: ["Detailed fetal facial and structural assessment", "Parental bonding experience (ideal at 26-30 weeks)", "Complex anomaly verification"],
    preparation: "Drink plenty of water in the 3 days preceding your scan to ensure abundant clear amniotic fluid window.",
    durationMinutes: 30,
    resultsTurnaround: "Includes digital high-res clips and color printed portraits.",
    featured: true,
    tag: "Flagship 3D/4D"
  },
  {
    id: "nerve-us",
    name: "Peripheral Nerve Ultrasound",
    category: "ultrasound",
    shortDescription: "High-frequency acoustic exploration of median, ulnar, radial, and peroneal nerves.",
    fullDescription: "Pinpoints nerve entrapment syndromes (such as carpal tunnel syndrome, cubital tunnel syndrome), traumatic nerve lacerations, and neuromas.",
    indications: ["Hand numbness, tingling, or weakness", "Suspected Carpal Tunnel Syndrome", "Traumatic peripheral nerve injury", "Morton's neuroma"],
    preparation: "No special preparation needed.",
    durationMinutes: 20,
    resultsTurnaround: "Within 2 hours."
  },
  {
    id: "tendon-ligament-us",
    name: "Tendon & Ligament Ultrasound",
    category: "ultrasound",
    shortDescription: "Dedicated sub-millimeter sonography for connective tissue strain, tear, and inflammation.",
    fullDescription: "Focuses on patellar tendon, Achilles tendon, plantar fascia, lateral epicondyle (tennis elbow), and ligament integrity with dynamic stress maneuvers.",
    indications: ["Heel pain (plantar fasciitis)", "Achilles swelling or rupture", "Athletic ligament sprains", "Chronic joint tendinopathy"],
    preparation: "Wear comfortable attire allowing joint inspection.",
    durationMinutes: 20,
    resultsTurnaround: "Within 2 hours."
  },
  {
    id: "ecg-service",
    name: "12-Lead Electrocardiogram (ECG / EKG)",
    category: "ultrasound",
    shortDescription: "Rapid electrical conduction recording of the heart's rhythm and coronary perfusion.",
    fullDescription: "Diagnoses cardiac arrhythmias, conduction blocks, myocardial ischemia, acute coronary syndromes, and chamber hypertrophy.",
    indications: ["Chest discomfort or palpitation", "Shortness of breath", "Pre-operative cardiac clearance", "Hypertension & diabetes monitoring"],
    preparation: "Avoid oily body lotions prior to test. No fasting required.",
    durationMinutes: 15,
    resultsTurnaround: "Immediate computerized tracing & cardiologist review.",
    featured: true
  },
  {
    id: "echocardiography",
    name: "Transthoracic Echocardiography (Echo)",
    category: "ultrasound",
    shortDescription: "Comprehensive ultrasound examination of cardiac chambers, valves, ejection fraction, and pericardium.",
    fullDescription: "Assesses systolic and diastolic ventricular function, valvular stenosis/regurgitation, pulmonary hypertension, congenital heart defects, and pericardial effusions.",
    indications: ["Heart murmur investigation", "Heart failure symptom evaluation", "Post-myocardial infarction surveillance", "Cardiomyopathy workup"],
    preparation: "No special dietary restrictions. Wear a front-opening shirt or gown.",
    durationMinutes: 30,
    resultsTurnaround: "Formal echocardiography report with Doppler hemodynamics within 2 hours.",
    featured: true,
    tag: "Cardiology"
  },
  {
    id: "ddh-hip-us",
    name: "Infant Hips Ultrasound for DDH",
    category: "ultrasound",
    shortDescription: "Graf technique sonographic screening for Developmental Dysplasia of the Hip in newborns and infants.",
    fullDescription: "Standard non-invasive evaluation of neonatal acetabular alpha and beta angles and femoral head positioning to enable early non-surgical correction.",
    indications: ["Breech presentation at birth", "Positive Barlow or Ortolani clinical sign", "Family history of DDH", "Asymmetric thigh skin folds"],
    preparation: "Best performed between 4 weeks and 6 months of age. Ensure baby is warm and comfortable.",
    durationMinutes: 20,
    resultsTurnaround: "Immediate Graf classification and pediatric guidance.",
    featured: true,
    tag: "Pediatric Ortho"
  },
  {
    id: "bone-fracture-us",
    name: "Bones Ultrasound for Fractures & Cortical Defects",
    category: "ultrasound",
    shortDescription: "Ultrasound assessment for cortical bone disruption in pediatric and superficial fractures.",
    fullDescription: "Helpful in pediatric populations, clavicle, rib fractures, and stress fractures where standard radiographs are inconclusive or radiation avoidance is paramount.",
    indications: ["Pediatric greenstick fractures", "Rib fractures unconfirmed on CXR", "Superficial bone tenderness after blunt trauma"],
    preparation: "Careful positioning with gentle acoustic standoff pad.",
    durationMinutes: 15,
    resultsTurnaround: "Immediate report."
  }
];

export const DIGITAL_XRAY_SERVICES: ServiceItem[] = [
  { id: "xray-skull", name: "Skull X-Ray", category: "xray", shortDescription: "AP and Lateral views of cranial vault and cranial bones.", fullDescription: "Evaluates skull fractures, lytic lesions, suture alignment, and cranial trauma.", indications: ["Head trauma", "Bone lesions", "Congenital shape anomalies"], preparation: "Remove all hairpins, earrings, glasses.", durationMinutes: 10, resultsTurnaround: "Digital image in 10 mins, report in 1 hour." },
  { id: "xray-sinus", name: "Paranasal Sinus X-Rays (Water's & Caldwell)", category: "xray", shortDescription: "Frontal and oblique views of maxillary, frontal, and ethmoid sinuses.", fullDescription: "Identifies fluid levels, mucosal thickening, and sinusitis.", indications: ["Chronic or acute sinusitis", "Facial pressure and headaches"], preparation: "Remove facial piercings, glasses, and dentures.", durationMinutes: 10, resultsTurnaround: "Report within 1 hour." },
  { id: "xray-facial", name: "Facial Bone X-Rays", category: "xray", shortDescription: "Targeted views for zygomatic arches, orbits, and nasal bones.", fullDescription: "Detects facial fractures following blunt force injury or sports collision.", indications: ["Facial trauma", "Nasal deviation after blow", "Zygoma tenderness"], preparation: "Remove glasses and jewelry.", durationMinutes: 15, resultsTurnaround: "Stat reporting." },
  { id: "xray-neck", name: "Soft Tissue Neck X-Ray", category: "xray", shortDescription: "Lateral airway imaging for retropharyngeal and laryngeal soft tissues.", fullDescription: "Screens for foreign body ingestion, croup, epiglottitis, and airway narrowing.", indications: ["Suspected swallowed coin or foreign body", "Stridor", "Neck swelling"], preparation: "Remove necklaces and metallic items.", durationMinutes: 10, resultsTurnaround: "Stat report." },
  { id: "xray-cervical", name: "Cervical Spine X-Rays (AP/Lat/Flexion/Extension)", category: "xray", shortDescription: "Detailed radiographic assessment of the 7 cervical vertebrae.", fullDescription: "Detects degenerative disc disease, cervical spondylosis, trauma fractures, and instability.", indications: ["Neck stiffness and radiculopathy", "Whiplash injury", "Post-trauma clearance"], preparation: "Remove necklaces and clothing with metal snaps.", durationMinutes: 15, resultsTurnaround: "Within 1 hour." },
  { id: "xray-clavicle", name: "Clavicular Bone X-Ray", category: "xray", shortDescription: "Focused examination of the collarbone and acromioclavicular joint.", fullDescription: "Accurately visualizes midshaft clavicle fractures and joint separation.", indications: ["Shoulder fall", "Collarbone deformity", "AC joint separation"], preparation: "Wear sleeveless or gown top.", durationMinutes: 10, resultsTurnaround: "Digital view in 10 minutes." },
  { id: "xray-shoulder", name: "Shoulder Joint X-Ray (AP, Axillary, Y-view)", category: "xray", shortDescription: "Multi-projection study of glenohumeral and subacromial spaces.", fullDescription: "Identifies shoulder dislocations, calcific tendinitis, arthritis, and fractures.", indications: ["Shoulder dislocation", "Inability to raise arm", "Chronic shoulder impingement"], preparation: "Remove shirts with metal zippers.", durationMinutes: 15, resultsTurnaround: "Within 1 hour." },
  { id: "xray-arm", name: "Arm (Humerus) X-Ray", category: "xray", shortDescription: "Full-length views of the upper arm bone.", fullDescription: "Diagnoses humeral shaft fractures, bone cysts, and post-reduction alignment.", indications: ["Arm trauma", "Localized arm swelling"], preparation: "Comfortable gown provided.", durationMinutes: 10, resultsTurnaround: "Within 1 hour." },
  { id: "xray-elbow", name: "Elbow Joint X-Ray", category: "xray", shortDescription: "AP, lateral, and oblique views of the elbow joint articulation.", fullDescription: "Detects supracondylar fractures, radial head fractures, and posterior fat pad signs.", indications: ["Elbow hyperextension injury", "Inability to bend elbow", "Childhood elbow falls"], preparation: "Roll sleeves above elbow.", durationMinutes: 10, resultsTurnaround: "Within 1 hour." },
  { id: "xray-forearm", name: "Forearm X-Ray (Radius & Ulna)", category: "xray", shortDescription: "Full visualization of both forearm bones from elbow to wrist.", fullDescription: "Diagnoses Monteggia and Galeazzi fracture-dislocations and shaft fractures.", indications: ["Fall on outstretched hand (FOOSH)", "Forearm deformity"], preparation: "Remove wristwatches and rings.", durationMinutes: 10, resultsTurnaround: "Within 1 hour." },
  { id: "xray-wrist", name: "Wrist Joint X-Ray", category: "xray", shortDescription: "Scaphoid views, AP, and lateral projections of carpal bones.", fullDescription: "Pinpoints Colles fractures, scaphoid fractures, and carpal instability.", indications: ["Wrist fall", "Snuffbox tenderness", "Chronic wrist arthritis"], preparation: "Remove jewelry.", durationMinutes: 10, resultsTurnaround: "Within 1 hour." },
  { id: "xray-hand", name: "Hand X-Ray", category: "xray", shortDescription: "Metacarpal and interphalangeal joint imaging.", fullDescription: "Detects Boxer's fractures, rheumatoid arthritis erosions, and dislocations.", indications: ["Hand crush injury", "Punch trauma", "Arthritic deformity"], preparation: "Remove all rings.", durationMinutes: 10, resultsTurnaround: "Within 1 hour." },
  { id: "xray-digits", name: "Specific Hand Digit X-Ray", category: "xray", shortDescription: "Targeted magnification radiography of individual fingers or thumb.", fullDescription: "Evaluates tuft fractures, mallet finger avulsions, and joint sprains.", indications: ["Jammed finger in sports", "Direct fingertip crush"], preparation: "Remove rings.", durationMinutes: 10, resultsTurnaround: "Within 1 hour." },
  { id: "xray-cxr", name: "CXR (Chest X-Ray PA/Lateral)", category: "xray", shortDescription: "High-definition digital thoracic imaging of lungs, heart silhouette, and ribs.", fullDescription: "Primary investigation for pneumonia, tuberculosis (TB), cardiomegaly, pneumothorax, pulmonary nodules, and pre-operative evaluation.", indications: ["Cough lasting >2 weeks", "Shortness of breath", "Chest pain", "Pre-employment / Visa screening", "Fever with lung crackles"], preparation: "Remove brassieres, necklaces, and shirts with prints or buttons. Deep breath hold during 1-second exposure.", durationMinutes: 10, resultsTurnaround: "Immediate image review, formal report in 45 minutes.", featured: true, tag: "Essential Screen" },
  { id: "xray-axr", name: "AXR (Abdominal X-Ray Erect/Supine)", category: "xray", shortDescription: "Plain abdominal radiography for intestinal gas distribution and calculi.", fullDescription: "Detects bowel obstruction, free peritoneal air (pneumoperitoneum), and foreign bodies.", indications: ["Acute abdominal distension", "Suspected bowel obstruction", "Perforation rule-out"], preparation: "Remove clothing with metal fasteners.", durationMinutes: 10, resultsTurnaround: "Stat reporting." },
  { id: "xray-kub", name: "KUB X-Ray (Kidneys, Ureters, Bladder)", category: "xray", shortDescription: "Targeted plain radiograph for radiopaque urinary calculi.", fullDescription: "Identifies calcium oxalate or phosphate stones along the urinary tract trajectory.", indications: ["Renal colic", "Flank pain", "Hematuria workup"], preparation: "Low-residue diet prior helps minimize obscuring bowel gas.", durationMinutes: 10, resultsTurnaround: "Within 1 hour." },
  { id: "xray-pelvis", name: "Pelvic X-Ray (AP)", category: "xray", shortDescription: "Comprehensive view of the pelvic ring, iliac bones, sacrum, and pubic symphysis.", fullDescription: "Diagnoses pelvic ring fractures, sacroiliac arthritis, and metastatic bone lesions.", indications: ["Major fall or vehicular trauma", "Sacroiliitis", "Pelvic pain"], preparation: "Wear hospital gown, remove belt.", durationMinutes: 10, resultsTurnaround: "Within 1 hour." },
  { id: "xray-hip", name: "Hip Joint X-Ray (AP and Frog-Leg Lateral)", category: "xray", shortDescription: "High-resolution views of femoral head, acetabulum, and neck.", fullDescription: "Detects femoral neck fractures in elderly, avascular necrosis (AVN), and osteoarthritis.", indications: ["Inability to bear weight after fall", "Groin pain", "Suspected AVN"], preparation: "Remove trousers with metal zippers.", durationMinutes: 15, resultsTurnaround: "Within 1 hour." },
  { id: "xray-thigh", name: "Thigh (Femur) X-Ray", category: "xray", shortDescription: "Full-length imaging of the femur including hip and knee joints.", fullDescription: "Assesses femoral shaft fractures, bone tumors, and orthopedic hardware.", indications: ["Femur trauma", "Thigh deformity"], preparation: "Gown provided.", durationMinutes: 15, resultsTurnaround: "Within 1 hour." },
  { id: "xray-knee", name: "Knee Joint X-Ray (AP, Lateral, Skyline/Sunrise)", category: "xray", shortDescription: "Weight-bearing and tangential views of knee compartments and patella.", fullDescription: "Evaluates patellofemoral tracking, joint space narrowing, and tibial plateau fractures.", indications: ["Knee twist injury", "Osteoarthritis evaluation", "Patellar dislocation"], preparation: "Wear loose shorts or gown.", durationMinutes: 15, resultsTurnaround: "Within 1 hour." },
  { id: "xray-leg", name: "Leg (Tibia & Fibula) X-Ray", category: "xray", shortDescription: "Full-length views of the lower leg bones.", fullDescription: "Identifies stress fractures, spiral fractures, and cortical defects.", indications: ["Shin splints vs stress fracture", "Direct kick or athletic impact"], preparation: "Roll pants above knee.", durationMinutes: 10, resultsTurnaround: "Within 1 hour." },
  { id: "xray-ankle", name: "Ankle Joint X-Ray (AP, Lateral, Mortise)", category: "xray", shortDescription: "Accurate assessment of malleoli and talar dome articulation.", fullDescription: "Diagnoses Weber fractures, bimalleolar / trimalleolar fractures, and ligamentous avulsions.", indications: ["Ankle inversion sprain", "Inability to walk 4 steps"], preparation: "Remove shoes and socks.", durationMinutes: 10, resultsTurnaround: "Within 1 hour." },
  { id: "xray-calcaneus", name: "Calcaneal Bone X-Ray (Lateral and Axial)", category: "xray", shortDescription: "Specialized axial projection measuring Bohler's and Gissane's angles.", fullDescription: "Detects heel bone crush fractures resulting from falls from height.", indications: ["Fall landing on heels", "Severe heel pain"], preparation: "Remove footwear.", durationMinutes: 10, resultsTurnaround: "Within 1 hour." },
  { id: "xray-foot", name: "Foot X-Ray (AP, Oblique, Lateral)", category: "xray", shortDescription: "Metatarsal and tarsal bone alignment under digital radiography.", fullDescription: "Identifies Lisfranc injuries, Jones fractures of 5th metatarsal, and stress fractures.", indications: ["Dropped heavy object on foot", "Twisting injury of midfoot", "Diabetic foot infection"], preparation: "Barefoot examination.", durationMinutes: 10, resultsTurnaround: "Within 1 hour." }
];

export const SPECIAL_PROCEDURES: ServiceItem[] = [
  {
    id: "hsg-procedure",
    name: "HSG (Hysterosalpingography)",
    category: "special-procedure",
    shortDescription: "Fluoroscopic contrast procedure evaluating uterine cavity shape and fallopian tube patency.",
    fullDescription: "A cornerstone fertility examination where water-soluble radiopaque contrast is gently instilled into the uterus under real-time fluoroscopy to confirm free peritoneal spillage or locate tubal blockages, adhesions, and uterine septum.",
    indications: ["Primary and secondary infertility workup", "Recurrent pregnancy loss", "Suspected fallopian tube blockage", "Post-tubal surgery verification"],
    preparation: "Schedule between Day 7 and Day 10 of your menstrual cycle (after bleeding ceases, before ovulation). Pregnancy test performed beforehand. Light prophylactic analgesia provided for optimal comfort.",
    durationMinutes: 30,
    resultsTurnaround: "Immediate image consultation with gynecologist and comprehensive written report.",
    featured: true,
    tag: "Fertility Specialist"
  },
  {
    id: "ivu-ivp-procedure",
    name: "IVU / IVP (Intravenous Urogram / Pyelogram)",
    category: "special-procedure",
    shortDescription: "Functional contrast imaging of kidneys, ureteral peristalsis, and urinary bladder emptying.",
    fullDescription: "Sequential fluoroscopic/X-ray exposures following intravenous non-ionic iodinated contrast injection to visualize renal excretion, detect ureteral strictures, hydronephrosis, and filling defects.",
    indications: ["Unexplained hematuria", "Recurrent ureteral stones", "Congenital urinary tract duplication", "Suspected ureteral stricture or obstruction"],
    preparation: "Serum creatinine test required within 30 days to verify normal renal function. Fast for 6 hours prior. Drink plenty of fluids post-procedure.",
    durationMinutes: 45,
    resultsTurnaround: "Formal radiologist series report within 3 hours.",
    featured: true
  },
  {
    id: "cug-procedure",
    name: "CUG / MCU (Cystourethrogram / Micturating Cystourethrography)",
    category: "special-procedure",
    shortDescription: "Real-time radiographic study examining bladder filling and urethral emptying.",
    fullDescription: "Catheter-introduced contrast study critical for diagnosing Vesicoureteral Reflux (VUR) in children with recurrent UTIs and urethral strictures or posterior urethral valves in adults.",
    indications: ["Pediatric recurrent urinary tract infections (rule out VUR)", "Urethral stricture evaluation", "Post-operative urethral reconstruction review", "Neurogenic bladder"],
    preparation: "Urine culture must confirm absence of active infection before the study. Gentle technique with pediatric expertise.",
    durationMinutes: 35,
    resultsTurnaround: "Same-day detailed dynamic report."
  },
  {
    id: "barium-swallow-meal",
    name: "Barium Swallow & Barium Meal",
    category: "special-procedure",
    shortDescription: "Dynamic fluoroscopic tracking of swallowed high-density barium contrast through the esophagus, stomach, and duodenum.",
    fullDescription: "Evaluates swallowing motility, esophageal webs, achalasia, gastroesophageal reflux, hiatal hernia, peptic ulcer craters, and gastric outlet obstruction.",
    indications: ["Difficulty or pain while swallowing (dysphagia/odynophagia)", "Suspected hiatal hernia or severe GERD", "Persistent unexplained vomiting", "Gastric ulcer surveillance"],
    preparation: "Strict overnight fasting for at least 8 hours (no food, liquids, chewing gum, or smoking on the morning of examination).",
    durationMinutes: 40,
    resultsTurnaround: "Comprehensive multi-phase dynamic fluoroscopy report within 2 hours.",
    featured: true,
    tag: "GI Fluoroscopy"
  },
  {
    id: "barium-enema",
    name: "Barium Enema (Single & Double Contrast)",
    category: "special-procedure",
    shortDescription: "Retrograde fluoroscopic colon examination evaluating the large intestine and rectum.",
    fullDescription: "Contrast visualization providing high-contrast mucosal relief to detect colonic polyps, diverticular disease, ulcerative colitis, Hirschsprung disease, and strictures.",
    indications: ["Altered bowel habits", "Unexplained lower GI bleeding (when colonoscopy is incomplete)", "Diverticular disease mapping", "Hirschsprung disease evaluation in children"],
    preparation: "Thorough bowel preparation required (low-residue diet 2 days prior, clear fluids, and prescribed laxative kit the day before). Full instruction sheet provided upon booking.",
    durationMinutes: 45,
    resultsTurnaround: "Same-day comprehensive report."
  }
];

export const CT_MRI_CONSULTATIONS: ServiceItem[] = [
  {
    id: "ct-scan-reading",
    name: "CT Scan Reading & Tele-Radiology Second Opinions",
    category: "ct-mri",
    shortDescription: "Expert subspecialty interpretation of high-resolution computed tomography scans from any external facility.",
    fullDescription: "Our senior consultant radiologists provide rigorous second-opinion reviews and comprehensive written reports for Head, Chest, Abdomen, Pelvis, Angiography, and Orthopedic CT studies.",
    indications: ["Verification of complex diagnostic findings", "Oncology staging confirmation", "Pre-surgical planning review", "Tele-radiology for remote clinics"],
    preparation: "Provide external DICOM disc (CD/DVD) or secure cloud PACS upload link.",
    durationMinutes: 20,
    resultsTurnaround: "Formal written report within 12 to 24 hours (Stat 2-hour review available).",
    featured: true,
    tag: "Expert Reading"
  },
  {
    id: "mri-scan-reading",
    name: "MRI Scan Reading & Subspecialty Analysis",
    category: "ct-mri",
    shortDescription: "Subspecialized neuro, musculoskeletal, and abdominal magnetic resonance imaging interpretation.",
    fullDescription: "Detailed multi-planar MRI readings conducted by fellowship-trained radiologists specializing in spinal disc pathology, brain MRI, joint cartilage/ligaments, and pelvic imaging.",
    indications: ["Spinal disc herniation and stenosis second opinion", "Brain lesion characterization", "Knee and shoulder complex ligament tears", "Pelvic and liver mass characterization"],
    preparation: "Submit DICOM image series along with previous clinical history and laboratory reports.",
    durationMinutes: 25,
    resultsTurnaround: "Detailed written consultation report within 12-24 hours.",
    featured: true,
    tag: "Neuro & MSK"
  },
  {
    id: "radiological-consultation",
    name: "Comprehensive Radiological Case Consultation",
    category: "ct-mri",
    shortDescription: "Direct one-on-one clinician-to-radiologist or patient-to-radiologist diagnostic case reviews.",
    fullDescription: "In-depth review sessions reviewing all prior X-rays, Ultrasounds, CTs, and MRIs to synthesize a unified diagnostic impression and recommend optimal next steps.",
    indications: ["Diagnostic dilemmas", "Multiple conflicting scan reports", "Complex multi-organ illness", "Surgical margin clarification"],
    preparation: "Bring all historical imaging discs, film envelopes, and physician referral notes.",
    durationMinutes: 30,
    resultsTurnaround: "Immediate in-person case discussion and formal consultation summary.",
    featured: true
  }
];

export const MULTISPECIALITY_SERVICES: ServiceItem[] = [
  {
    id: "cardiology",
    name: "Cardiology & Heart Care",
    category: "multispeciality",
    shortDescription: "Specialized cardiac assessments, ECG analysis, hypertension control, and heart disease prevention.",
    fullDescription: "Comprehensive cardiovascular workups including Echocardiography, 12-lead ECG, blood pressure profiling, and evidence-based heart disease management.",
    indications: ["High blood pressure", "Chest discomfort", "Palpitations", "Shortness of breath on exertion"],
    preparation: "Bring current list of cardiac medications.",
    durationMinutes: 30,
    resultsTurnaround: "Immediate review.",
    featured: true
  },
  {
    id: "neurology",
    name: "Neurology & Nerve Care",
    category: "multispeciality",
    shortDescription: "Expert diagnosis and ongoing treatment for headaches, stroke prevention, neuropathy, and seizures.",
    fullDescription: "Collaborates directly with high-resolution neuro-imaging (carotid Doppler, nerve ultrasound, cranial CT/MRI reviews) for precision neurological care.",
    indications: ["Chronic migraines and headaches", "Tingling or numbness in extremities", "Tremors", "Post-stroke rehabilitation"],
    preparation: "Keep a brief log of headache frequency or symptom onset.",
    durationMinutes: 30,
    resultsTurnaround: "Comprehensive care plan provided."
  },
  {
    id: "pulmonology",
    name: "Pulmonology & Respiratory Care",
    category: "multispeciality",
    shortDescription: "Diagnosis and therapy for asthma, COPD, chronic bronchitis, and post-infectious pulmonary conditions.",
    fullDescription: "Integrates chest radiography with clinical spirometry and symptom assessments to restore pulmonary capacity.",
    indications: ["Chronic cough", "Wheezing or asthma flares", "Post-pneumonia weakness", "Occupational dust exposure"],
    preparation: "Avoid heavy exercise 1 hour prior to consultation.",
    durationMinutes: 25,
    resultsTurnaround: "Immediate treatment plan."
  },
  {
    id: "gastroenterology",
    name: "Gastroenterology & Digestive Health",
    category: "multispeciality",
    shortDescription: "Care for peptic ulcer disease, liver conditions, IBS, and chronic abdominal pain.",
    fullDescription: "Synergizes abdominal sonography, barium GI examinations, and biochemical liver panels for prompt resolution of digestive ailments.",
    indications: ["Acid reflux and heartburn", "Unexplained bloating or bowel irregularities", "Fatty liver management", "H. pylori infection"],
    preparation: "Fasting may be requested if abdominal ultrasound or blood draw is ordered during the visit.",
    durationMinutes: 25,
    resultsTurnaround: "Same-day management."
  },
  {
    id: "urology",
    name: "Urology & Men's Health",
    category: "multispeciality",
    shortDescription: "Targeted clinical care for urinary tract conditions, kidney stones, and prostate health.",
    fullDescription: "Evaluates lower urinary tract symptoms, benign prostatic hyperplasia (BPH), urinary tract infections, and male reproductive health.",
    indications: ["Frequent or painful urination", "Weak urinary stream", "Hematuria", "Kidney stone surveillance"],
    preparation: "Arrive with comfortable hydration.",
    durationMinutes: 25,
    resultsTurnaround: "Immediate evaluation."
  },
  {
    id: "obgyn",
    name: "Obstetrics & Gynecology",
    category: "multispeciality",
    shortDescription: "Complete women's healthcare across maternal care, reproductive health, and routine screening.",
    fullDescription: "From early prenatal visits and fetal wellness monitoring to menstrual irregularities, cervical cancer screenings, and pelvic pain management.",
    indications: ["Antenatal checkups", "Infertility consultations", "Menstrual disorders", "Contraceptive counseling"],
    preparation: "Bring dates of last menstrual period and previous prenatal records.",
    durationMinutes: 30,
    resultsTurnaround: "Personalized care guidance.",
    featured: true
  },
  {
    id: "pediatrics",
    name: "Pediatrics & Child Wellness",
    category: "multispeciality",
    shortDescription: "Compassionate, gentle care for infants, children, and adolescents.",
    fullDescription: "Covers growth monitoring, childhood vaccinations, acute illnesses (fever, respiratory infections), and neonatal hip screening.",
    indications: ["Routine well-child milestone checks", "Childhood fevers and cough", "Nutritional counseling", "DDH screening"],
    preparation: "Bring immunization booklet and child health passport.",
    durationMinutes: 25,
    resultsTurnaround: "Same-day child wellness assessment."
  },
  {
    id: "orthopedics",
    name: "Orthopedics & Joint Care",
    category: "multispeciality",
    shortDescription: "Comprehensive diagnosis and conservative care for fractures, arthritis, and sports injuries.",
    fullDescription: "Supported by on-site digital X-rays and MSK ultrasound for rapid pinpointing of bone and soft-tissue trauma.",
    indications: ["Joint pain and stiffness", "Sports injuries and sprains", "Fracture management and casting", "Back and neck discomfort"],
    preparation: "Wear loose clothing to facilitate physical examination.",
    durationMinutes: 25,
    resultsTurnaround: "Immediate immobilization and treatment."
  }
];

export const LABORATORY_SERVICES: ServiceItem[] = [
  {
    id: "lab-hematology",
    name: "Complete Blood Count (CBC) with Differential",
    category: "laboratory",
    shortDescription: "Automated 5-part differential hematology profiling.",
    fullDescription: "Measures hemoglobin, hematocrit, white blood cell count, platelet count, and red blood cell indices to detect anemia, infections, and hematologic disorders.",
    indications: ["Fatigue", "Suspected infection or fever", "Pre-procedure baseline", "Anemia monitoring"],
    preparation: "No fasting needed.",
    durationMinutes: 10,
    resultsTurnaround: "Results ready in 30 minutes."
  },
  {
    id: "lab-biochemistry",
    name: "Comprehensive Clinical Biochemistry Panels",
    category: "laboratory",
    shortDescription: "Liver function tests (LFTs), Renal function tests (RFTs / Creatinine), Lipid profile, and Blood Glucose.",
    fullDescription: "Assesses organ health, diabetes status (Fasting Blood Sugar & HbA1c), renal clearance, and cardiovascular lipid markers.",
    indications: ["Routine annual wellness", "Diabetes management", "Pre-contrast renal clearance (Creatinine)", "Statin monitoring"],
    preparation: "Overnight fasting (10-12 hours) required for fasting glucose and full lipid profiles.",
    durationMinutes: 10,
    resultsTurnaround: "Results ready within 1-2 hours."
  },
  {
    id: "lab-hormones",
    name: "Hormone & Endocrinology Panels",
    category: "laboratory",
    shortDescription: "Thyroid panel (TSH, Free T3, Free T4), Reproductive hormones (FSH, LH, Prolactin, Beta-hCG).",
    fullDescription: "Chemiluminescent immunoassay testing supporting thyroid workup, fertility evaluation, and pregnancy confirmation.",
    indications: ["Thyroid dysfunction", "Irregular cycles", "Infertility workup", "Early pregnancy quantitative Beta-hCG"],
    preparation: "Morning blood collection generally recommended.",
    durationMinutes: 10,
    resultsTurnaround: "Same-day reporting."
  },
  {
    id: "lab-infectious",
    name: "Infectious Disease & Serology Panels",
    category: "laboratory",
    shortDescription: "Rapid and ELISA testing for viral hepatitis, HIV, H. pylori, typhoid, malaria, and CRP.",
    fullDescription: "High-sensitivity diagnostic panels identifying acute bacterial, parasitic, and viral infectious etiologies.",
    indications: ["Acute febrile illness", "Gastritis symptoms", "Routine pre-natal screening", "Inflammatory markers"],
    preparation: "No specific fasting required.",
    durationMinutes: 10,
    resultsTurnaround: "Rapid tests in 20 minutes; serology in 1-2 hours."
  }
];

export const ALL_SERVICES: ServiceItem[] = [
  ...ULTRASOUND_SERVICES,
  ...DIGITAL_XRAY_SERVICES,
  ...SPECIAL_PROCEDURES,
  ...CT_MRI_CONSULTATIONS,
  ...MULTISPECIALITY_SERVICES,
  ...LABORATORY_SERVICES
];
