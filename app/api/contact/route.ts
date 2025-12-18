import { NextResponse } from "next/server";
import { Resend } from "resend";
import { z } from "zod";

const schema = z.object({
    name: z.string().min(1),
    email: z.string().email(),
    message: z.string().min(1),
    company: z.string().max(0).optional().default(""), // honeypot
});

export async function POST(req: Request) {
    try {
        // 1) Validate env at runtime (don’t crash builds)
        const RESEND_API_KEY = process.env.RESEND_API_KEY;
        const MAIL_FROM = process.env.MAIL_FROM;
        const MAIL_TO = process.env.MAIL_TO || "micaelarslanian@gmail.com";

        if (!RESEND_API_KEY || !MAIL_FROM) {
            return NextResponse.json(
                { error: "Missing RESEND_API_KEY or MAIL_FROM env vars" },
                { status: 500 }
            );
        }

        const resend = new Resend(RESEND_API_KEY);

        // 2) Validate payload
        const json = await req.json();
        const parsed = schema.safeParse(json);

        if (!parsed.success) {
            // If it’s honeypot, pretend success (quiet bot trap)
            const honeypotTriggered = parsed.error.issues.some((i) => i.path[0] === "company");
            if (honeypotTriggered) return NextResponse.json({ ok: true });

            return NextResponse.json({ error: "Invalid payload" }, { status: 400 });
        }

        const { name, email, message, company } = parsed.data;

        if (company && company.length > 0) return NextResponse.json({ ok: true });

        // 3) Send email
        await resend.emails.send({
            from: MAIL_FROM,
            to: MAIL_TO,
            subject: `New inquiry from ${name}`,
            replyTo: email, 
            text: `Name: ${name}\nEmail: ${email}\n\n${message}\n`,
        });

        return NextResponse.json({ ok: true });
    } catch (err) {
        console.error(err);
        return NextResponse.json({ error: "Email failed" }, { status: 500 });
    }
}
