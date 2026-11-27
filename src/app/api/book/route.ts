import { NextResponse } from "next/server";
import fs from "fs/promises";
import path from "path";

export interface AppointmentRecord {
  id: string;
  bookingRef: string;
  patientName: string;
  patientPhone: string;
  patientAge?: string;
  serviceId: string;
  serviceName: string;
  branch: string;
  appointmentDate: string;
  appointmentTime: string;
  referringDoctor?: string;
  notes?: string;
  status: "pending" | "confirmed" | "completed" | "cancelled";
  createdAt: string;
}

const DATA_DIR = path.join(process.cwd(), "data");
const APPOINTMENTS_FILE = path.join(DATA_DIR, "appointments.json");

async function ensureDataFile(): Promise<void> {
  try {
    await fs.mkdir(DATA_DIR, { recursive: true });
    try {
      await fs.access(APPOINTMENTS_FILE);
    } catch {
      await fs.writeFile(APPOINTMENTS_FILE, JSON.stringify([], null, 2), "utf-8");
    }
  } catch (err) {
    console.error("Failed to ensure appointments data file:", err);
  }
}

async function getAppointments(): Promise<AppointmentRecord[]> {
  await ensureDataFile();
  try {
    const raw = await fs.readFile(APPOINTMENTS_FILE, "utf-8");
    return JSON.parse(raw);
  } catch {
    return [];
  }
}

async function saveAppointments(list: AppointmentRecord[]): Promise<void> {
  await ensureDataFile();
  await fs.writeFile(APPOINTMENTS_FILE, JSON.stringify(list, null, 2), "utf-8");
}

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const {
      patientName,
      patientPhone,
      patientAge,
      serviceId,
      serviceName,
      branch,
      appointmentDate,
      appointmentTime,
      referringDoctor,
      notes,
      bookingRef
    } = body;

    if (!patientName || !patientPhone) {
      return NextResponse.json(
        { success: false, error: "Patient name and phone number are required." },
        { status: 400 }
      );
    }

    const ref = bookingRef || "RAD-" + Math.floor(100000 + Math.random() * 900000);

    const newRecord: AppointmentRecord = {
      id: "apt_" + Date.now() + "_" + Math.floor(Math.random() * 1000),
      bookingRef: ref,
      patientName: patientName.trim(),
      patientPhone: patientPhone.trim(),
      patientAge: patientAge?.trim() || "",
      serviceId: serviceId || "general",
      serviceName: serviceName || "General Ultrasound / Consultation",
      branch: branch || "adi-dero",
      appointmentDate: appointmentDate || new Date().toISOString().split("T")[0],
      appointmentTime: appointmentTime || "09:00 AM",
      referringDoctor: referringDoctor?.trim() || "",
      notes: notes?.trim() || "",
      status: "pending",
      createdAt: new Date().toISOString()
    };

    const existing = await getAppointments();
    existing.unshift(newRecord);
    await saveAppointments(existing);

    return NextResponse.json({
      success: true,
      bookingRef: ref,
      appointment: newRecord,
      message: "Appointment successfully booked and saved to clinical system."
    });
  } catch (error) {
    console.error("Error saving appointment:", error);
    return NextResponse.json(
      { success: false, error: "Failed to process appointment." },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const list = await getAppointments();
    return NextResponse.json({
      success: true,
      count: list.length,
      appointments: list
    });
  } catch (error) {
    console.error("Error retrieving appointments:", error);
    return NextResponse.json(
      { success: false, error: "Failed to retrieve appointments." },
      { status: 500 }
    );
  }
}
