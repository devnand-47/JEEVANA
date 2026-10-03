import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Public Programmes | Jeevana Builders",
  description: "Building beyond structures — contributing to the communities around us.",
};

// Data structure prepared for future content
interface Programme {
  id: string;
  year: string;
  title: string;
  organization: string;
  description: string;
  image: string;
  location: string;
}

const programmesData: Programme[] = []; // Empty state

export default function ProgrammesPage() {
  return (
    <main className="bg-background min-h-screen">
      {/* 01 HERO */}
      <section className="pt-32 pb-24 md:pt-40 md:pb-32 bg-white relative border-b border-gray-200">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <span className="font-sans text-xs tracking-[0.2em] uppercase text-jeevana-green font-bold mb-6 block">Community & Impact</span>
          <h1 className="h1 text-jeevana-dark mb-6">PUBLIC<br/>PROGRAMMES</h1>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Building beyond structures &mdash; contributing to the communities around us.
          </p>
        </div>
      </section>

      {/* 02 EMPTY STATE */}
      <section className="py-24 md:py-48 bg-gray-50 relative overflow-hidden flex items-center justify-center min-h-[50vh]">
        {/* Subtle Architectural Linework */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.15]">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="programmes-grid" width="60" height="60" patternUnits="userSpaceOnUse">
                <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#012F29" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#programmes-grid)" />
            <line x1="50%" y1="0" x2="50%" y2="100%" stroke="#BCD530" strokeWidth="1" strokeDasharray="4,8" />
            <line x1="0" y1="50%" x2="100%" y2="50%" stroke="#61BB46" strokeWidth="1" strokeDasharray="4,8" />
          </svg>
        </div>

        <div className="relative z-10 text-center max-w-xl px-6 bg-white py-16 md:py-20 border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] w-full mx-auto m-6">
          <h2 className="font-display font-bold text-2xl md:text-3xl text-jeevana-dark mb-4 tracking-tight uppercase">CONTENT COMING SOON</h2>
          <p className="text-gray-500 mb-12">Programme details and initiatives<br/>will be published here.</p>
          <div className="flex flex-col items-center justify-center text-xs font-bold tracking-[0.2em] text-jeevana-green">
            <span>01 / JEEVANA</span>
            <div className="w-24 h-px bg-jeevana-lime mt-4" />
          </div>
        </div>
      </section>
    </main>
  );
}
