import ScrollReveal from "@/components/ui/ScrollReveal";
import ContactForm from "@/components/ui/ContactForm";
import Link from "next/link";
import { ArrowDown, Mail, MessageCircle, PhoneCall, MapPin, ArrowRight } from "lucide-react";
import { contactData } from "@/data/contact";

export const metadata = {
  title: "Contact Jeevana Builders | Start Your Project in Kerala",
  description: "Contact Jeevana Builders for residential, commercial, or interior projects in Kerala. Call, WhatsApp, or send us an enquiry.",
};

export default function ContactPage() {
  return (
    <main className="bg-background min-h-screen">
      {/* 01 HERO */}
      <section className="relative w-full bg-jeevana-dark pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden flex items-center">
        {/* Subtle Architectural Line Animation */}
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <line x1="0" y1="20%" x2="100%" y2="20%" stroke="#BCD530" strokeWidth="1" className="animate-[dash_10s_linear_infinite]" strokeDasharray="10 20" />
            <line x1="10%" y1="0" x2="10%" y2="100%" stroke="#BCD530" strokeWidth="1" className="animate-[dash_15s_linear_infinite]" strokeDasharray="10 20" />
            <line x1="90%" y1="0" x2="90%" y2="100%" stroke="#61BB46" strokeWidth="1" className="animate-[dash_20s_linear_infinite]" strokeDasharray="5 30" />
            <line x1="0" y1="80%" x2="100%" y2="80%" stroke="#61BB46" strokeWidth="1" className="animate-[dash_12s_linear_infinite]" strokeDasharray="10 10" />
          </svg>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <ScrollReveal>
            <span className="font-sans text-xs tracking-[0.2em] uppercase text-jeevana-lime font-bold mb-6 block">Start A Project</span>
            <h1 className="h1 text-white mb-6 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200 fill-mode-both">
              LET'S CREATE<br />WHAT COMES NEXT.
            </h1>
            <p className="text-gray-400 text-lg max-w-xl animate-in fade-in slide-in-from-bottom-4 duration-700 delay-400 fill-mode-both">
              Tell us about the space you're planning. Our team is ready to turn your vision into a structural reality.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* 02 QUICK CONTACT OPTIONS */}
      <section className="py-16 md:py-24 bg-gray-50 border-b border-gray-200">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            
            {/* WhatsApp Card */}
            <ScrollReveal>
              <div className="bg-white p-8 md:p-10 border border-gray-100 hover:border-jeevana-lime hover:shadow-xl hover:-translate-y-1 transition-all duration-300 h-full flex flex-col group">
                <MessageCircle className="w-10 h-10 text-jeevana-green mb-6 group-hover:text-jeevana-lime transition-colors" />
                <h3 className="font-display text-2xl font-bold text-jeevana-dark mb-2 uppercase">CHAT ON WHATSAPP</h3>
                <p className="text-gray-500 mb-8 flex-grow">Talk to Jeevana directly. We usually respond within an hour.</p>
                <a 
                  href={`https://wa.me/${contactData.whatsapp.replace('+', '')}?text=Hello Jeevana Builders, I found your website and would like to discuss a project.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-xs font-bold tracking-[0.2em] uppercase text-jeevana-dark group-hover:text-jeevana-green transition-colors min-h-[44px]"
                >
                  CHAT NOW <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </ScrollReveal>

            {/* Call Card */}
            <ScrollReveal delay={0.1}>
              <div className="bg-white p-8 md:p-10 border border-gray-100 hover:border-jeevana-lime hover:shadow-xl hover:-translate-y-1 transition-all duration-300 h-full flex flex-col group">
                <PhoneCall className="w-10 h-10 text-jeevana-green mb-6 group-hover:text-jeevana-lime transition-colors" />
                <h3 className="font-display text-2xl font-bold text-jeevana-dark mb-2 uppercase">CALL JEEVANA</h3>
                <p className="text-gray-500 mb-8 flex-grow">Speak with our team to discuss requirements and initial details.</p>
                <a 
                  href={`tel:${contactData.phonePrimary}`}
                  className="inline-flex items-center text-xs font-bold tracking-[0.2em] uppercase text-jeevana-dark group-hover:text-jeevana-green transition-colors min-h-[44px]"
                >
                  CALL NOW <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </ScrollReveal>

            {/* Email Card */}
            <ScrollReveal delay={0.2}>
              <div className="bg-white p-8 md:p-10 border border-gray-100 hover:border-jeevana-lime hover:shadow-xl hover:-translate-y-1 transition-all duration-300 h-full flex flex-col group">
                <Mail className="w-10 h-10 text-jeevana-green mb-6 group-hover:text-jeevana-lime transition-colors" />
                <h3 className="font-display text-2xl font-bold text-jeevana-dark mb-2 uppercase">SEND AN EMAIL</h3>
                <p className="text-gray-500 mb-8 flex-grow">Send us your project enquiry and any attached documents.</p>
                <a 
                  href="#contact-form"
                  className="inline-flex items-center text-xs font-bold tracking-[0.2em] uppercase text-jeevana-dark group-hover:text-jeevana-green transition-colors min-h-[44px]"
                >
                  EMAIL US <ArrowDown className="ml-2 w-4 h-4 group-hover:translate-y-1 transition-transform" />
                </a>
              </div>
            </ScrollReveal>

          </div>
        </div>
      </section>

      {/* 03 CONTACT FORM & DETAILS */}
      <section className="py-16 md:py-24 bg-white relative">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
            
            {/* Form Column */}
            <div className="lg:col-span-7">
              <ScrollReveal>
                <div className="mb-10">
                  <h2 className="h2 text-jeevana-dark mb-4">PROJECT ENQUIRY.</h2>
                  <p className="text-gray-600">Please provide details about your project and we will contact you to arrange a consultation.</p>
                </div>
                <ContactForm />
              </ScrollReveal>
            </div>

            {/* Info Column */}
            <div className="lg:col-span-5 flex flex-col pt-4 md:pt-24">
              <ScrollReveal delay={0.2}>
                <div className="bg-gray-50 p-8 md:p-12 border border-gray-100 mb-8">
                  <span className="font-sans text-xs tracking-[0.2em] uppercase text-jeevana-green font-bold mb-6 block">Contact Information</span>
                  
                  <div className="space-y-8">
                    <div>
                      <h4 className="font-bold text-jeevana-dark mb-1 uppercase tracking-wider text-sm">Phone</h4>
                      <a href={`tel:${contactData.phonePrimary}`} className="text-gray-600 hover:text-jeevana-green transition-colors block text-lg font-serif">
                        {contactData.phonePrimaryDisplay}
                      </a>
                      <a href={`tel:${contactData.phoneSecondary}`} className="text-gray-600 hover:text-jeevana-green transition-colors block text-lg font-serif mt-1">
                        {contactData.phoneSecondaryDisplay}
                      </a>
                    </div>
                    
                    <div>
                      <h4 className="font-bold text-jeevana-dark mb-1 uppercase tracking-wider text-sm">WhatsApp</h4>
                      <a 
                        href={`https://wa.me/${contactData.whatsapp.replace('+', '')}`} 
                        target="_blank" rel="noopener noreferrer"
                        className="text-gray-600 hover:text-jeevana-green transition-colors block text-lg font-serif"
                      >
                        {contactData.phonePrimaryDisplay}
                      </a>
                    </div>

                    <div>
                      <h4 className="font-bold text-jeevana-dark mb-1 uppercase tracking-wider text-sm">Email</h4>
                      <a href={`mailto:${contactData.email}`} className="text-gray-600 hover:text-jeevana-green transition-colors block text-lg font-serif break-all">
                        {contactData.email}
                      </a>
                    </div>
                  </div>
                </div>

                {/* Location Box */}
                <div className="bg-jeevana-dark text-white p-8 md:p-12">
                  <div className="flex items-start gap-4 mb-6">
                    <MapPin className="w-6 h-6 text-jeevana-lime shrink-0" />
                    <div>
                      <span className="font-sans text-xs tracking-[0.2em] uppercase text-jeevana-lime font-bold block mb-4">Visit Jeevana</span>
                      <h4 className="font-display font-bold text-xl uppercase mb-4 leading-tight">
                        {contactData.name}<br />
                        <span className="text-base text-gray-400">{contactData.subtitle}</span>
                      </h4>
                      <address className="not-italic text-gray-300 font-serif leading-relaxed">
                        {contactData.address.line1}<br />
                        {contactData.address.line2}<br />
                        {contactData.address.line3}
                      </address>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}
