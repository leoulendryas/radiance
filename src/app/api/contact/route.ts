import { NextResponse } from "next/server";
import fs from "fs/promises";
import path from "path";

export interface ContactInquiry {
  id: string;
  name: string;
  phone: string;
  location: string;
  serviceInterest: string;
  message: string;
  createdAt: string;
}

const DATA_DIR = path.join(process.cwd(), "data");
const INQUIRIES_FILE = path.join(DATA_DIR, "inquiries.json");

async function ensureDataFile(): Promise<void> {
  try {
    await fs.mkdir(DATA_DIR, { recursive: true });
    try {
      await fs.access(INQUIRIES_FILE);
    } catch {
      await fs.writeFile(INQUIRIES_FILE, JSON.stringify([], null, 2), "utf-8");
    }
  } catch (err) {
    console.error("Failed to ensure inquiries data file:", err);
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, phone, location, serviceInterest, message } = body;

    if (!name || !phone) {
      return NextResponse.json(
        { success: false, error: "Name and phone are required." },
        { status: 400 }
      );
    }

    const newRecord: ContactInquiry = {
      id: "inq_" + Date.now(),
      name: name.trim(),
      phone: phone.trim(),
      location: location || "adi-dero",
      serviceInterest: serviceInterest || "ultrasound",
      message: message?.trim() || "",
      createdAt: new Date().toISOString()
    };

    await ensureDataFile();
    let existing: ContactInquiry[] = [];
    try {
      const raw = await fs.readFile(INQUIRIES_FILE, "utf-8");
      existing = JSON.parse(raw);
    } catch {
      existing = [];
    }

    existing.unshift(newRecord);
    await fs.writeFile(INQUIRIES_FILE, JSON.stringify(existing, null, 2), "utf-8");

    return NextResponse.json({
      success: true,
      message: "Inquiry received and logged."
    });
  } catch (error) {
    console.error("Error saving inquiry:", error);
    return NextResponse.json(
      { success: false, error: "Failed to save inquiry." },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    await ensureDataFile();
    const raw = await fs.readFile(INQUIRIES_FILE, "utf-8");
    const list = JSON.parse(raw);
    return NextResponse.json({ success: true, inquiries: list });
  } catch {
    return NextResponse.json({ success: true, inquiries: [] });
  }
}
