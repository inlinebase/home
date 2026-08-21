import { neon } from "@neondatabase/serverless";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, company, service, budget, message } = body || {};

    // Input Validation & Sanitization
    if (!name || typeof name !== "string" || !name.trim()) {
      return NextResponse.json(
        { success: false, error: "Full name is required." },
        { status: 400 }
      );
    }

    if (!email || typeof email !== "string" || !/\S+@\S+\.\S+/.test(email)) {
      return NextResponse.json(
        { success: false, error: "Valid work email is required." },
        { status: 400 }
      );
    }

    if (!message || typeof message !== "string" || message.trim().length < 10) {
      return NextResponse.json(
        { success: false, error: "Message must be at least 10 characters long." },
        { status: 400 }
      );
    }

    const databaseUrl = process.env.DATABASE_URL;
    if (!databaseUrl) {
      console.error("DATABASE_URL is missing in environment variables.");
      return NextResponse.json(
        { success: false, error: "Server database configuration error." },
        { status: 500 }
      );
    }

    // Execute optimized query using Neon Serverless client over HTTP/WebSocket connection pool
    const sql = neon(databaseUrl);

    const result = await sql`
      INSERT INTO contact_submissions (
        name,
        email,
        phone,
        company,
        service,
        budget,
        message
      ) VALUES (
        ${name.trim()},
        ${email.trim().toLowerCase()},
        ${phone?.trim() || null},
        ${company?.trim() || null},
        ${service?.trim() || null},
        ${budget?.trim() || null},
        ${message.trim()}
      )
      RETURNING id, created_at;
    `;

    return NextResponse.json(
      {
        success: true,
        message: "Inquiry stored successfully in Neon database.",
        id: result[0]?.id,
        createdAt: result[0]?.created_at,
      },
      { status: 201 }
    );
  } catch (error: unknown) {
    console.error("Error processing contact submission:", error);
    return NextResponse.json(
      {
        success: false,
        error: "Failed to submit inquiry. Please try again or contact us directly.",
      },
      { status: 500 }
    );
  }
}
