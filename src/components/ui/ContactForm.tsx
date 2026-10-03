"use client";

import React, { useActionState, useEffect } from 'react';
import { submitEnquiry } from '@/app/actions/contact';
import { ArrowRight, CheckCircle2, MessageCircle, PhoneCall, XCircle } from 'lucide-react';
import { contactData } from '@/data/contact';
import Link from 'next/link';

const initialState = {
  success: false,
  message: '',
};

export default function ContactForm() {
  const [state, formAction, isPending] = useActionState(submitEnquiry, initialState);

  if (state.success) {
    return (
      <div className="bg-white p-12 border border-gray-200 text-center animate-in fade-in zoom-in duration-500">
        <div className="w-20 h-20 bg-jeevana-lime/20 text-jeevana-green rounded-full flex items-center justify-center mx-auto mb-8">
          <CheckCircle2 className="w-10 h-10" />
        </div>
        <h3 className="font-display text-3xl font-bold text-jeevana-dark mb-4 uppercase">ENQUIRY RECEIVED</h3>
        <p className="text-gray-600 mb-2">Thank you for contacting Jeevana.</p>
        <p className="text-gray-600 mb-10">Our team will get back to you shortly.</p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            href={`https://wa.me/${contactData.whatsapp.replace('+', '')}?text=Hello Jeevana Builders, I found your website and would like to discuss a project.`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-4 bg-jeevana-dark text-white font-bold tracking-widest text-xs hover:bg-jeevana-green transition-colors"
          >
            <MessageCircle className="w-4 h-4 mr-2" /> CHAT ON WHATSAPP
          </Link>
          <a 
            href={`tel:${contactData.phonePrimary}`}
            className="inline-flex items-center justify-center px-8 py-4 border border-jeevana-dark text-jeevana-dark font-bold tracking-widest text-xs hover:bg-gray-50 transition-colors"
          >
            <PhoneCall className="w-4 h-4 mr-2" /> CALL JEEVANA
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white p-8 md:p-12 border border-gray-200" id="contact-form">
      {state.message && !state.success && (
        <div className="mb-8 p-6 bg-red-50 border border-red-100 flex flex-col items-center text-center animate-in fade-in zoom-in duration-300">
          <XCircle className="w-8 h-8 text-red-500 mb-4" />
          <h4 className="font-display font-bold text-red-900 mb-2 uppercase">WE COULDN'T SEND YOUR ENQUIRY</h4>
          <p className="text-sm text-red-800 mb-6">{state.message}</p>
          <div className="flex gap-4">
            <a 
              href={`https://wa.me/${contactData.whatsapp.replace('+', '')}?text=Hello Jeevana Builders, I'm trying to send an enquiry.`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-bold tracking-widest uppercase text-jeevana-dark hover:text-jeevana-green flex items-center"
            >
              <MessageCircle className="w-3 h-3 mr-1" /> WHATSAPP
            </a>
            <a 
              href={`tel:${contactData.phonePrimary}`}
              className="text-xs font-bold tracking-widest uppercase text-jeevana-dark hover:text-jeevana-green flex items-center"
            >
              <PhoneCall className="w-3 h-3 mr-1" /> CALL
            </a>
          </div>
        </div>
      )}

      <form action={formAction} className="space-y-8">
        {/* Honeypot Field */}
        <div className="hidden" aria-hidden="true">
          <label htmlFor="bot_field">Don't fill this out if you're human:</label>
          <input type="text" id="bot_field" name="bot_field" tabIndex={-1} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="relative group">
            <input 
              type="text" 
              id="name" 
              name="name" 
              required 
              className="peer w-full border-b border-gray-300 py-3 text-jeevana-dark bg-transparent focus:outline-none focus:border-jeevana-green transition-colors placeholder-transparent"
              placeholder="Name *"
            />
            <label 
              htmlFor="name" 
              className="absolute left-0 top-3 text-gray-400 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-3 peer-focus:-top-4 peer-focus:text-xs peer-focus:text-jeevana-green peer-valid:-top-4 peer-valid:text-xs pointer-events-none"
            >
              Name *
            </label>
          </div>

          <div className="relative group">
            <input 
              type="email" 
              id="email" 
              name="email" 
              required 
              className="peer w-full border-b border-gray-300 py-3 text-jeevana-dark bg-transparent focus:outline-none focus:border-jeevana-green transition-colors placeholder-transparent"
              placeholder="Email *"
            />
            <label 
              htmlFor="email" 
              className="absolute left-0 top-3 text-gray-400 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-3 peer-focus:-top-4 peer-focus:text-xs peer-focus:text-jeevana-green peer-valid:-top-4 peer-valid:text-xs pointer-events-none"
            >
              Email *
            </label>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="relative group">
            <input 
              type="tel" 
              id="phone" 
              name="phone" 
              required 
              className="peer w-full border-b border-gray-300 py-3 text-jeevana-dark bg-transparent focus:outline-none focus:border-jeevana-green transition-colors placeholder-transparent"
              placeholder="Phone *"
            />
            <label 
              htmlFor="phone" 
              className="absolute left-0 top-3 text-gray-400 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-3 peer-focus:-top-4 peer-focus:text-xs peer-focus:text-jeevana-green peer-valid:-top-4 peer-valid:text-xs pointer-events-none"
            >
              Phone *
            </label>
          </div>

          <div className="relative group">
            <select 
              id="projectType" 
              name="projectType" 
              required 
              className="peer w-full border-b border-gray-300 py-3 text-jeevana-dark bg-transparent focus:outline-none focus:border-jeevana-green transition-colors appearance-none"
              defaultValue=""
            >
              <option value="" disabled className="text-gray-400">Select Project Type *</option>
              <option value="Residential">Residential</option>
              <option value="Commercial">Commercial</option>
              <option value="Interior">Interior</option>
              <option value="Renovation">Renovation</option>
              <option value="Hospitality">Hospitality</option>
              <option value="Landscaping">Landscaping</option>
              <option value="Other">Other</option>
            </select>
          </div>
        </div>

        <div className="relative group">
          <input 
            type="text" 
            id="location" 
            name="location" 
            className="peer w-full border-b border-gray-300 py-3 text-jeevana-dark bg-transparent focus:outline-none focus:border-jeevana-green transition-colors placeholder-transparent"
            placeholder="Location"
          />
          <label 
            htmlFor="location" 
            className="absolute left-0 top-3 text-gray-400 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-3 peer-focus:-top-4 peer-focus:text-xs peer-focus:text-jeevana-green peer-valid:-top-4 peer-valid:text-xs pointer-events-none"
          >
            Location
          </label>
        </div>

        <div className="relative group">
          <textarea 
            id="message" 
            name="message" 
            required 
            rows={4}
            className="peer w-full border-b border-gray-300 py-3 text-jeevana-dark bg-transparent focus:outline-none focus:border-jeevana-green transition-colors placeholder-transparent resize-y min-h-[100px]"
            placeholder="Message *"
          />
          <label 
            htmlFor="message" 
            className="absolute left-0 top-3 text-gray-400 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-3 peer-focus:-top-4 peer-focus:text-xs peer-focus:text-jeevana-green peer-valid:-top-4 peer-valid:text-xs pointer-events-none"
          >
            Tell us about the space you're planning *
          </label>
        </div>

        <button 
          type="submit" 
          disabled={isPending}
          className="w-full inline-flex items-center justify-center px-10 py-5 bg-jeevana-dark text-white font-bold tracking-widest text-sm hover:bg-jeevana-lime hover:text-jeevana-dark transition-colors group shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isPending ? 'SENDING...' : (
            <span className="flex items-center">
              SUBMIT ENQUIRY <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </span>
          )}
        </button>
      </form>
    </div>
  );
}
