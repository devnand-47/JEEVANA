"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";

const navLinks = [
  { name: "ABOUT", href: "/about" },
  { name: "SERVICES", href: "/services" },
  { name: "PROJECTS", href: "/projects" },
  { name: "AWARDS", href: "/awards" },
  { name: "PROGRAMMES", href: "/programmes" },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollState, setScrollState] = useState({ scrolled: false, hidden: false });
  const pathname = usePathname();

  useEffect(() => {
    let lastScrollY = window.scrollY;
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const currentScrollY = window.scrollY;
          
          setScrollState(prev => {
            const isScrolled = currentScrollY > 80;
            let isHidden = prev.hidden;
            
            if (currentScrollY <= 80) {
              isHidden = false;
            } else if (currentScrollY > lastScrollY && currentScrollY > 250) {
              // Hide when scrolling down past 250px
              isHidden = true;
            } else if (currentScrollY < lastScrollY) {
              // Show when scrolling up
              isHidden = false;
            }
            
            return { scrolled: isScrolled, hidden: isHidden };
          });

          lastScrollY = currentScrollY;
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent background scrolling when mobile menu is open, and handle Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileMenuOpen(false);
    };

    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [mobileMenuOpen]);

  return (
    <>
      <header 
        className={`fixed z-[1000] left-1/2 -translate-x-1/2 transition-all duration-[500ms] ease-[cubic-bezier(0.22,1,0.36,1)] flex items-center ${
          scrollState.hidden ? "-translate-y-[120px] opacity-0 pointer-events-none" : "translate-y-0 opacity-100"
        } ${
          scrollState.scrolled 
            ? "w-[calc(100vw-32px)] md:w-[min(940px,calc(100vw-48px))] h-[52px] md:h-[56px] top-[14px] md:top-[18px] bg-white/72 border border-white/55 shadow-[0_4px_20px_rgba(1,47,41,0.04)] backdrop-blur-[16px] backdrop-saturate-[140%] rounded-[28px] px-4 md:px-5" 
            : "w-full max-w-full h-[58px] md:h-[64px] top-0 bg-white/80 border-b border-[#012f29]/[0.08] shadow-none backdrop-blur-[20px] backdrop-saturate-[140%] rounded-none px-6 md:px-8"
        }`}
      >
        <div className={`w-full h-full flex items-center justify-between lg:grid lg:grid-cols-3 relative transition-all duration-[500ms] ${scrollState.scrolled ? "max-w-full" : "max-w-[1440px] mx-auto"}`}>
          
          {/* Left: Logo */}
          <div className="flex items-center h-full">
            <Link 
              href="/" 
              className="flex items-center justify-start z-50 relative min-h-[44px] min-w-[44px] transition-opacity duration-200 hover:opacity-70 cursor-pointer py-2 pr-4" 
              onClick={(e) => {
                if (pathname === "/") {
                  e.preventDefault();
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }
                setMobileMenuOpen(false);
              }}
              aria-label="Jeevana Builders — Home"
            >
              <div className="relative h-[22px] w-[100px] md:h-[24px] md:w-[105px] transition-all duration-[500ms]">
                <Image 
                  src="/logo.png" 
                  alt="Jeevana Builders" 
                  fill 
                  sizes="150px"
                  className="object-contain object-left" 
                  priority
                />
              </div>
            </Link>
          </div>

          {/* Center: Desktop Nav */}
          <nav className="hidden lg:flex items-center justify-center space-x-6 xl:space-x-8 h-full">
            {navLinks.map((link) => {
              const isActive = pathname === link.href || (pathname.startsWith(link.href) && link.href !== '/');
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`relative flex items-center py-2 group text-[11px] xl:text-[11px] font-semibold tracking-[0.08em] uppercase transition-colors duration-300 ${
                    isActive ? "text-[#012F29]" : "text-[#012F29]/70 hover:text-[#025346]"
                  }`}
                >
                  {link.name}

                  {/* Active / Hover Line */}
                  <span 
                    className={`absolute -bottom-0.5 left-0 h-[2px] bg-[#BCD530] transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                      isActive ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </Link>
              );
            })}
          </nav>

          {/* Right: CTA & Mobile Toggle */}
          <div className="flex items-center justify-end h-full">
            {/* Desktop CTA */}
            <Link
              href="/contact"
              className="hidden lg:flex group relative items-center h-[36px] xl:h-[38px] px-5 xl:px-6 bg-[#025346] border border-[#025346]/10 text-white overflow-hidden transition-colors duration-300 hover:bg-[#012F29] rounded-[20px]"
            >
              <span className="relative z-10 text-[10px] xl:text-[11px] font-bold tracking-[0.08em] uppercase flex items-center">
                START A PROJECT
                <ArrowRight className="w-3.5 h-3.5 ml-1.5 transition-transform duration-300 group-hover:translate-x-1" />
              </span>
            </Link>

            {/* Mobile Hamburger */}
            <button
              className="lg:hidden z-50 relative flex items-center justify-center w-11 h-11 rounded-full bg-transparent hover:bg-black/5 transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Menu"
              aria-expanded={mobileMenuOpen}
            >
              <div className="flex flex-col items-center justify-center w-5 h-4 space-y-1.5">
                <span className={`block w-5 h-[1.5px] bg-[#012F29] transition-transform duration-300 ${mobileMenuOpen ? "translate-y-[7.5px] rotate-45" : ""}`} />
                <span className={`block w-5 h-[1.5px] bg-[#012F29] transition-opacity duration-300 ${mobileMenuOpen ? "opacity-0" : ""}`} />
                <span className={`block w-5 h-[1.5px] bg-[#012F29] transition-transform duration-300 ${mobileMenuOpen ? "-translate-y-[7.5px] -rotate-45" : ""}`} />
              </div>
            </button>
          </div>

        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ clipPath: "inset(0 0 100% 0)" }}
            animate={{ clipPath: "inset(0 0 0% 0)" }}
            exit={{ clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.45, ease: [0.77, 0, 0.175, 1] }}
            className="fixed inset-0 w-full h-[100dvh] bg-[#012F29] z-[990] flex flex-col pt-28 px-6 pb-12"
          >
            <div className="flex-1 flex flex-col justify-center max-w-lg mx-auto w-full">
              <nav className="flex flex-col space-y-6">
                {navLinks.map((link, i) => {
                  const isActive = pathname === link.href || (pathname.startsWith(link.href) && link.href !== '/');
                  return (
                    <motion.div
                      key={link.name}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.1 + i * 0.05, ease: [0.25, 0.1, 0.25, 1] }}
                    >
                      <Link
                        href={link.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className={`group flex items-end py-3 text-3xl md:text-4xl font-display uppercase tracking-wider transition-colors duration-300 ${
                          isActive ? "text-[#BCD530]" : "text-white hover:text-[#BCD530]"
                        }`}
                      >
                        <span className="text-xs font-sans font-bold tracking-[0.2em] opacity-50 mr-4 mb-1.5 md:mb-2 w-8">0{i + 1}</span>
                        {link.name}
                      </Link>
                    </motion.div>
                  );
                })}
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.1 + navLinks.length * 0.05, ease: [0.25, 0.1, 0.25, 1] }}
                  className="pt-8 mt-4 border-t border-white/10"
                >
                  <Link
                    href="/contact"
                    onClick={() => setMobileMenuOpen(false)}
                    className="group flex items-center py-3 text-2xl md:text-3xl font-display uppercase tracking-wider text-[#BCD530] transition-colors duration-300 hover:text-white"
                  >
                    <span className="text-xs font-sans font-bold tracking-[0.2em] opacity-50 mr-4 w-8">0{navLinks.length + 1}</span>
                    START A PROJECT
                    <ArrowRight className="w-5 h-5 ml-4 transition-transform duration-300 group-hover:translate-x-2" />
                  </Link>
                </motion.div>
              </nav>
            </div>

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.4 }}
              className="max-w-lg mx-auto w-full text-[10px] uppercase font-bold tracking-[0.2em] text-white/40 border-t border-white/10 pt-6 mt-12 flex justify-between items-center"
            >
              <span>JEEVANA BUILDERS</span>
              <span>EST. KERALA</span>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
