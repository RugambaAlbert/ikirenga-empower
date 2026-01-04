import { serve } from "https://deno.land/std@0.190.0/http/server.ts";

const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface PasswordResetRequest {
  email: string;
  resetLink: string;
  language?: string;
}

const translations = {
  en: {
    subject: "Reset Your Password - COOPEC Ikirenga",
    heading: "Password Reset Request",
    message: "You requested to reset your password. Click the button below to create a new password:",
    button: "Reset Password",
    expiry: "This link will expire in 1 hour.",
    ignore: "If you didn't request a password reset, you can safely ignore this email.",
    regards: "Best regards",
    team: "The COOPEC Ikirenga Team",
  },
  fr: {
    subject: "Réinitialiser Votre Mot de Passe - COOPEC Ikirenga",
    heading: "Demande de Réinitialisation du Mot de Passe",
    message: "Vous avez demandé à réinitialiser votre mot de passe. Cliquez sur le bouton ci-dessous pour créer un nouveau mot de passe:",
    button: "Réinitialiser le Mot de Passe",
    expiry: "Ce lien expirera dans 1 heure.",
    ignore: "Si vous n'avez pas demandé de réinitialisation de mot de passe, vous pouvez ignorer cet email.",
    regards: "Cordialement",
    team: "L'Équipe COOPEC Ikirenga",
  },
  rw: {
    subject: "Hindura Ijambo ry'Ibanga - COOPEC Ikirenga",
    heading: "Gusaba Guhindura Ijambo ry'Ibanga",
    message: "Wasabye guhindura ijambo ry'ibanga. Kanda buto iri hepfo kugira ngo ukore ijambo ry'ibanga rishya:",
    button: "Hindura Ijambo ry'Ibanga",
    expiry: "Iyi link izashira mu isaha 1.",
    ignore: "Niba utasabye guhindura ijambo ry'ibanga, ushobora kwirengagiza iyi imeyili.",
    regards: "Murakoze",
    team: "Ikipe ya COOPEC Ikirenga",
  },
};

const handler = async (req: Request): Promise<Response> => {
  console.log("Password reset email function called");
  
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { email, resetLink, language = "en" }: PasswordResetRequest = await req.json();
    
    console.log(`Sending password reset email to: ${email}`);
    
    const t = translations[language as keyof typeof translations] || translations.en;

    const emailHtml = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
      </head>
      <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
        <div style="background: linear-gradient(135deg, #166534 0%, #22c55e 100%); padding: 30px; text-align: center; border-radius: 10px 10px 0 0;">
          <h1 style="color: white; margin: 0; font-size: 28px;">COOPEC Ikirenga</h1>
        </div>
        
        <div style="background: #ffffff; padding: 30px; border: 1px solid #e5e5e5; border-top: none; border-radius: 0 0 10px 10px;">
          <h2 style="color: #166534; margin-top: 0;">${t.heading}</h2>
          
          <p style="margin-bottom: 20px;">${t.message}</p>
          
          <div style="text-align: center; margin: 30px 0;">
            <a href="${resetLink}" style="background: #166534; color: white; padding: 15px 30px; text-decoration: none; border-radius: 8px; font-weight: bold; display: inline-block;">${t.button}</a>
          </div>
          
          <p style="color: #666; font-size: 14px;">${t.expiry}</p>
          
          <p style="color: #666; font-size: 14px;">${t.ignore}</p>
          
          <hr style="border: none; border-top: 1px solid #e5e5e5; margin: 30px 0;">
          
          <p style="margin-bottom: 5px;">${t.regards},</p>
          <p style="margin-top: 0; font-weight: bold; color: #166534;">${t.team}</p>
        </div>
      </body>
      </html>
    `;

    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "COOPEC Ikirenga <onboarding@resend.dev>",
        to: [email],
        subject: t.subject,
        html: emailHtml,
      }),
    });

    const data = await res.json();
    
    if (!res.ok) {
      console.error("Resend API error:", data);
      throw new Error(data.message || "Failed to send email");
    }

    console.log("Email sent successfully:", data);

    return new Response(JSON.stringify(data), {
      status: 200,
      headers: { "Content-Type": "application/json", ...corsHeaders },
    });
  } catch (error: any) {
    console.error("Error sending password reset email:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
