import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { name, email, request, notes } = await req.json();
  const RESEND_API_KEY = process.env.RESEND_API_KEY;
  const RESEND_FROM = process.env.RESEND_FROM || "StageLeads <hi@stageleads.io>";
  const TO = process.env.REQUEST_TO || "hi@stageleads.io";

  if (!RESEND_API_KEY) {
    // No server email configured; tell client to fallback to mailto
    return new NextResponse("Email service not configured", { status: 501 });
  }

  try {
    // Lightweight inline call without installing extra libs (simple fetch to Resend API)
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${RESEND_API_KEY}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        from: RESEND_FROM,
        to: [TO],
        subject: "StageLeads – Custom list request",
        html: `<p><b>Name:</b> ${name}</p>
               <p><b>Email:</b> ${email}</p>
               <p><b>Event/bundle:</b> ${request}</p>
               <p><b>Notes:</b> ${notes || ""}</p>`
      })
    });
    if (!res.ok) {
      const t = await res.text();
      return new NextResponse(t || "Failed to send", { status: 500 });
    }
    return NextResponse.json({ ok: true });
  } catch (e:any) {
    return new NextResponse(e?.message || "Send error", { status: 500 });
  }
}
