import { NextResponse } from "next/server";
import { Resend } from "resend";
import { z } from "zod";

const resend = new Resend(process.env.RESEND_API_KEY);

// Mirror the client schema (keeps validation consistent)
const schema = z.object({
    name: z.string().min(1),
    email: z.string().email(),
    message: z.string().min(1),
    company: z.string().max(0).optional().default(""), // honeypot must be empty
});

export async function POST(req: Request) {
    try {
        const json = await req.json();
        const data = schema.safeParse(json);

        // If invalid (or honeypot filled), bail
        if (!data.success) {
            // If it's just the honeypot, pretend success to avoid tipping off bots
            const hasHoneypot = Array.isArray(data.error.issues) &&
                data.error.issues.some((i) => i.path[0] === "company");
            if (hasHoneypot) return NextResponse.json({ ok: true });
            return NextResponse.json({ error: "Invalid payload" }, { status: 400 });
        }

        const { name, email, message } = data.data;

        const from = process.env.MAIL_FROM!; // must be a verified sender in Resend
        const to = process.env.MAIL_TO || "micaela.arslanian@gmail.com";

        await resend.emails.send({
            from,
            to,
            subject: `New inquiry from ${name}`,
            reply_to: email,
            text: `Name: ${name}
Email: ${email}

${message}
`,

        });

        return NextResponse.json({ ok: true });
    } catch (err) {
        console.error(err);
        return NextResponse.json({ error: "Email failed" }, { status: 500 });
    }
}
