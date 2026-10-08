import { NextResponse } from "next/server";

export async function POST() {
  return NextResponse.json(
    { success: false, error: "Contact form is not available yet." },
    { status: 503 }
  );
}
