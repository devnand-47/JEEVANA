"use server";

import { Resend } from 'resend';

// Initialize Resend with the API key from environment variables
const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;

export async function submitEnquiry(prevState: any, formData: FormData) {
  try {
    // 1. Basic Rate Limiting / Honeypot
    const honeypot = formData.get('bot_field');
    if (honeypot) {
      // Spam detected, silently succeed
      return { success: true, message: "Enquiry received." };
    }

    // 2. Extract and Validate Input
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const phone = formData.get('phone') as string;
    const projectType = formData.get('projectType') as string;
    const location = formData.get('location') as string;
    const message = formData.get('message') as string;

    if (!name || !email || !phone || !projectType || !message) {
      return { success: false, message: "Please fill in all required fields." };
    }

    if (message.length > 5000) {
      return { success: false, message: "Message is too long." };
    }

    // 3. Send Email
    if (!resend) {
      console.warn("RESEND_API_KEY is not configured. Simulating successful email send.");
      console.log("Enquiry data:", { name, email, phone, projectType, location, message });
      // Simulate network delay
      await new Promise(resolve => setTimeout(resolve, 1500));
      return { success: true, message: "Enquiry received successfully (Simulated)." };
    }

    const data = await resend.emails.send({
      from: 'Jeevana Website <onboarding@resend.dev>', // Change to verified domain later
      to: ['info@jeevanabuilders.com'], // Deliver to Jeevana
      replyTo: email,
      subject: 'New Project Enquiry — Jeevana Website',
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #025346;">New Project Enquiry</h2>
          <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
            <tr><td style="padding: 10px; border-bottom: 1px solid #eee;"><strong>Client Name:</strong></td><td style="padding: 10px; border-bottom: 1px solid #eee;">${name}</td></tr>
            <tr><td style="padding: 10px; border-bottom: 1px solid #eee;"><strong>Email:</strong></td><td style="padding: 10px; border-bottom: 1px solid #eee;">${email}</td></tr>
            <tr><td style="padding: 10px; border-bottom: 1px solid #eee;"><strong>Phone:</strong></td><td style="padding: 10px; border-bottom: 1px solid #eee;">${phone}</td></tr>
            <tr><td style="padding: 10px; border-bottom: 1px solid #eee;"><strong>Project Type:</strong></td><td style="padding: 10px; border-bottom: 1px solid #eee;">${projectType}</td></tr>
            <tr><td style="padding: 10px; border-bottom: 1px solid #eee;"><strong>Location:</strong></td><td style="padding: 10px; border-bottom: 1px solid #eee;">${location || 'Not provided'}</td></tr>
          </table>
          <h3 style="margin-top: 30px; color: #025346;">Message:</h3>
          <p style="background: #f9f9f9; padding: 15px; border-left: 4px solid #BCD530; white-space: pre-wrap;">${message}</p>
        </div>
      `,
    });

    if (data.error) {
      console.error("Resend API Error:", data.error);
      return { success: false, message: "We couldn't send your enquiry. Please try again or contact us directly." };
    }

    return { success: true, message: "Thank you for contacting Jeevana. Our team will get back to you shortly." };
  } catch (error) {
    console.error("Form Submission Error:", error);
    return { success: false, message: "An unexpected error occurred. Please try again." };
  }
}
