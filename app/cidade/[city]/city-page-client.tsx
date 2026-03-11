

"use client";

import React, { useState, useEffect } from "react";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/sections/hero";
import { Manifesto } from "@/components/sections/manifesto";
import { Services } from "@/components/sections/services";
import { BeforeAfter } from "@/components/sections/before-after";
import { GeoDomination } from "@/components/sections/geo-domination";
import { WhoIsItFor } from "@/components/sections/who-is-it-for";
import { About } from "@/components/sections/about";
import { BlogSection } from "@/components/sections/blog-section";
import { PricingModal } from "@/components/ui/pricing-modal";
import { OfferData } from "@/lib/types";
import { serviceData } from "@/lib/city-service-data";
import { ArrowRight } from "lucide-react";
import { WHATSAPP_URL } from "@/lib/constants";
import { motion, AnimatePresence } from "framer-motion";
import dynamic from "next/dynamic";

const FloatingWhatsApp = dynamic(() => import("@/components/ui/floating-whatsapp").then(mod => mod.FloatingWhatsApp), { ssr: false });

export default function CityPageClient({ cityName, citySlug }: { cityName: string, citySlug: string }) {
  const [activeOffer, setActiveOffer] = useState<OfferData | null>(null);
  const [activeService, setActiveService] = useState<string | null>(null);
  const [activeFaq, setActiveFaq] = useState<string | null>(null);
  const [activeSpy, setActiveSpy] = useState<string | null>(null);

  useEffect(() => {
    // Handle initial hash routing
    if (typeof window !== "undefined") {
      const hash = window.location.hash.replace("#", "");
      if (hash && serviceData[hash]) {
        setActiveService(hash);
        setTimeout(() => {
          const element = document.getElementById(hash);
          if (element) {
            const offset = 120;
            const bodyRect = document.body.getBoundingClientRect().top;
            const elementRect = element.getBoundingClientRect().top;
            const elementPosition = elementRect - bodyRect;
            window.scrollTo({ top: elementPosition - offset, behavior: "smooth" });
          }
        }, 300);
      }
    }

    // Scroll spy for services
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries.filter((entry) => entry.isIntersecting);
        if (visibleEntries.length > 0) {
          setActiveSpy(visibleEntries[0].target.id);
        }
      },
      { rootMargin: "-20% 0px -60% 0px" } // trigger when near middle of screen
    );

    Object.keys(serviceData).forEach((key) => {
      const el = document.getElementById(key);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [cityName]);

  const handleTriggerSecretOffer = () => {
    setActiveOffer({
      originalPrice: "1.490,00",
      offerPrice: "987",
      bonuses: ["Consultoria de Atendimento"]
    });
  };

  const cityLinks = [
    { id: 'inicio', label: 'Home' },
    { id: 'seo-local', label: 'SEO Local' },
    { id: 'geo-ia', label: 'GEO & IA' },
    { id: 'automacao-whatsapp', label: 'WhatsApp' },
    { id: 'landing-page', label: 'Landing Page' },
    { id: 'site-institucional', label: 'Sites' },
    { id: 'automacao-ia', label: 'IA' },
    { id: 'blog', label: 'Blog' }
  ];

  return (
    <div className="bg-[#fdfaf3]">
      <Navbar onTriggerSecretOffer={handleTriggerSecretOffer} customLinks={cityLinks} />

      <main>
        <Hero cityName={cityName} />

        {/* Dynamic Services Section (Collapsible Accordion with Sidebar) */}
        <section className="py-24 px-4 md:px-8 border-b border-[#2d2d2d]/10 bg-[#fdfaf3] relative">
          <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-16">
            
            {/* Sticky Sidebar Navigation */}
            <aside className="lg:w-64 shrink-0 lg:sticky lg:top-32 h-fit space-y-8 hidden lg:block">
              <div className="space-y-2">
                <p className="text-[10px] font-sketch font-bold uppercase tracking-[0.3em] text-[#2d2d2d]/30">Metodologia em {cityName}</p>
                <nav className="flex flex-col gap-1">
                  {Object.entries(serviceData).map(([key, s]) => (
                    <a
                      key={key}
                      href={`#${key}`}
                      onClick={(e) => {
                         e.preventDefault();
                         setActiveService(key);
                         window.history.pushState(null, "", `#${key}`);
                         setTimeout(() => {
                           const el = document.getElementById(key);
                           if (el) {
                             const y = el.getBoundingClientRect().top + window.scrollY - 100;
                             window.scrollTo({ top: y, behavior: 'smooth' });
                           }
                         }, 50);
                      }}
                      className={`group flex items-center gap-3 py-3 px-4 rounded-xl transition-all hover:bg-white hover:shadow-sm text-left ${activeSpy === key ? 'bg-white shadow-sm' : ''}`}
                    >
                      <span className={`w-1.5 h-1.5 rounded-full transition-colors ${activeSpy === key ? 'bg-[#1DBA8A]' : 'bg-[#2d2d2d]/10 group-hover:bg-[#1DBA8A]'}`} />
                      <span className={`text-[11px] font-sketch font-black uppercase tracking-widest transition-colors ${activeSpy === key ? 'text-[#1a1a1a]' : 'text-[#2d2d2d]/60 group-hover:text-[#1a1a1a]'}`}>
                        {s.label}
                      </span>
                    </a>
                  ))}
                </nav>
              </div>
            </aside>

            {/* Services Content Column (Accordion Cards) */}
            <div className="flex-1 space-y-12">
              <div className="space-y-4">
                <h2 className="text-3xl md:text-5xl font-marker text-[#1a1a1a] uppercase tracking-tighter leading-tight pen-text">
                  Nossos Serviços <br className="hidden md:block"/> de Infraestrutura Digital
                </h2>
              </div>
              
              <div className="space-y-4 pb-16">
                {Object.entries(serviceData).map(([key, s], index) => {
                  const isOpen = activeService === key;
                  const getBackgroundColor = () => {
                    if (isOpen) return 'bg-[#e8f7f2]';
                    // Alternate colors based on user request loosely matched to index
                    // SEO Local(0): #f0faf6, GEO & IA(1): #f7f3ec, WhatsApp(2): #f0faf6, Landing Page(3): #f7f3ec...
                    return index % 2 === 0 ? 'bg-[#f0faf6]' : 'bg-[#f7f3ec]';
                  };

                  const renderIcon = (key: string) => {
                    switch (key) {
                      case 'seo-local': return (
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="sketch-icon">
                          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                          <circle cx="12" cy="10" r="3"></circle>
                        </svg>
                      );
                      case 'geo-ia': return (
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="sketch-icon">
                          <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.98-3A2.5 2.5 0 0 1 9.5 2Z"></path>
                          <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 14.5 2Z"></path>
                        </svg>
                      );
                      case 'automacao-whatsapp': return (
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="sketch-icon">
                          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                          <polygon points="13 2 13 10 17 10 11 22 11 14 7 14 13 2"></polygon>
                        </svg>
                      );
                      case 'landing-page': return (
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="sketch-icon">
                          <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                          <circle cx="12" cy="12" r="3"></circle>
                          <path d="M12 15v4"></path>
                        </svg>
                      );
                      case 'site-institucional': return (
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="sketch-icon">
                          <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                          <line x1="8" y1="21" x2="16" y2="21"></line>
                          <line x1="12" y1="17" x2="12" y2="21"></line>
                          <polyline points="7 9 10 12 16 6"></polyline>
                        </svg>
                      );
                      case 'automacao-ia': return (
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="sketch-icon">
                          <circle cx="12" cy="12" r="3"></circle>
                          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
                        </svg>
                      );
                      default: return (
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="sketch-icon">
                          <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                          <line x1="8" y1="21" x2="16" y2="21"></line>
                          <line x1="12" y1="17" x2="12" y2="21"></line>
                        </svg>
                      );
                    }
                  };

                  return (
                    <div
                      key={key}
                      id={key}
                      style={{ scrollMarginTop: '120px' }}
                      onClick={() => {
                        setActiveService(isOpen ? null : key);
                        if (!isOpen) {
                          window.history.pushState(null, "", `#${key}`);
                          setTimeout(() => {
                             const el = document.getElementById(key);
                             if (el) {
                               const y = el.getBoundingClientRect().top + window.scrollY - 100;
                               window.scrollTo({ top: y, behavior: 'smooth' });
                             }
                          }, 50);
                        }
                      }}
                      className={`sketch-border overflow-hidden transition-all duration-500 ease-in-out cursor-pointer ${
                        isOpen ? `border-[#1DBA8A] shadow-sm ${getBackgroundColor()}` : `hover:brightness-95 ${getBackgroundColor()}`
                      }`}
                    >
                      {/* Header - Fixed Height */}
                      <div className="h-[80px] px-6 md:px-8 flex items-center justify-between gap-4">
                        {/* Icon + Title + City */}
                        <div className="flex items-center gap-4">
                          <div className="text-[#1DBA8A] shrink-0">
                             {renderIcon(key)}
                          </div>
                          <h3 className="text-lg md:text-xl font-marker text-[#1a1a1a] uppercase tracking-wide truncate">
                            {s.label} <span className="text-[#2d2d2d]/40 text-sm hidden sm:inline">em {cityName}</span>
                          </h3>
                        </div>
                        
                        <motion.span animate={{ rotate: isOpen ? 180 : 0 }} className="text-[#2d2d2d]/20 shrink-0">
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                             <polyline points="6 9 12 15 18 9"></polyline>
                          </svg>
                        </motion.span>
                      </div>

                      {/* Content */}
                      <AnimatePresence>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.35, ease: "easeInOut" }}
                            className="overflow-hidden"
                          >
                            <div className="px-6 md:px-8 pb-8 pt-2 space-y-6">
                              <p className="text-[#2d2d2d]/80 font-hand italic text-lg leading-relaxed max-w-3xl">
                                {s.description}
                              </p>
                              
                              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {s.benefits.slice(0, 4).map((benefit, i) => (
                                  <li key={i} className="flex items-center gap-3">
                                    <div className="text-[#1DBA8A] shrink-0">
                                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="sketch-icon">
                                        <polyline points="20 6 9 17 4 12" />
                                      </svg>
                                    </div>
                                    <span className="text-[#2d2d2d] font-hand text-base md:text-lg italic leading-none truncate">
                                      {benefit.split(':')[0]}
                                    </span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        <Manifesto cityName={cityName} />
        <Services cityName={cityName} />
        <BeforeAfter cityName={cityName} />
        <GeoDomination cityName={cityName} />
        <WhoIsItFor cityName={cityName} />
        <About cityName={cityName} />
        <BlogSection limit={3} cityName={cityName} citySlug={citySlug} />

        {/* Global Unified FAQ Section */}
        <section className="py-24 px-4 md:px-8 bg-white/40 border-b border-[#2d2d2d]/10">
          <div className="max-w-4xl mx-auto space-y-16">
            <div className="text-center space-y-4">
              <h2 className="text-3xl md:text-5xl font-marker text-[#1a1a1a] uppercase tracking-tighter leading-tight pen-text">
                Dúvidas sobre a infraestrutura em {cityName}
              </h2>
              <p className="text-[#2d2d2d]/60 font-hand italic text-lg">Tudo o que você precisa saber para começar.</p>
            </div>

            <div className="space-y-8">
              {Object.entries(serviceData).map(([key, s]) => (
                <div key={key} className="space-y-4">
                  <h3 className="text-[10px] font-sketch font-bold uppercase tracking-[0.4em] text-[#2d2d2d]/30 px-6">{s.label}</h3>
                  <div className="space-y-3">
                    {s.faqQuestions.map((faq, i) => {
                      const faqId = `${key}-${i}`;
                      const isFaqOpen = activeFaq === faqId;
                      return (
                        <div
                          key={faqId}
                          onClick={() => setActiveFaq(isFaqOpen ? null : faqId)}
                          className={`bg-white sketch-border overflow-hidden transition-all duration-500 cursor-pointer ${
                             isFaqOpen ? 'bg-[#f0faf6]' : 'hover:bg-gray-50'
                          }`}
                        >
                          <div className="h-[70px] px-6 md:px-8 flex items-center justify-between gap-4">
                            <div className="flex items-center gap-3 truncate">
                              <span className="text-[#1DBA8A] font-marker text-lg shrink-0">Q.</span>
                              <h4 className="text-[12px] md:text-sm font-marker text-[#1a1a1a] uppercase tracking-tight truncate">
                                {faq.q.includes('?') ? faq.q.replace('?', ` em ${cityName}?`) : `${faq.q} em ${cityName}?`}
                              </h4>
                            </div>
                            <motion.span animate={{ rotate: isFaqOpen ? 180 : 0 }} className="text-[#2d2d2d]/20 shrink-0">
                               <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                 <polyline points="6 9 12 15 18 9"></polyline>
                               </svg>
                            </motion.span>
                          </div>
                          <AnimatePresence>
                            {isFaqOpen && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.35, ease: "easeInOut" }}
                                className="overflow-hidden"
                              >
                                <div className="px-6 md:px-8 pb-6 pt-2 border-l-4 border-[#1DBA8A] ml-8 mb-6 mr-6 md:mr-8 bg-[#f0faf6]">
                                  <p className="text-[#2d2d2d]/80 text-base font-hand italic leading-relaxed pl-4">
                                    {faq.a.replace(/\.$/, ` em ${cityName}.`)}
                                  </p>
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <FloatingWhatsApp />
      <Footer />
      <PricingModal offer={activeOffer} onClose={() => setActiveOffer(null)} />
    </div>
  );
}
