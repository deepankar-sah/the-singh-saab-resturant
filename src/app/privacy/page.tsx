import React from "react";
import Navbar from "@/shared/components/Navbar";
import Footer from "@/shared/components/Footer";

/**
 * Privacy Policy Page Component for The Singh Saab.
 * Clean, typography-forward text layout with gold borders.
 */
export default function PrivacyPage() {
  return (
    <>
      <Navbar />

      <main className="flex-grow pt-32 pb-24 bg-dark-bg">
        <div className="absolute inset-0 bg-noise pointer-events-none z-0"></div>

        <div className="max-w-3xl mx-auto px-margin-mobile md:px-margin-desktop relative z-10">
          
          {/* Header */}
          <div className="text-center mb-16">
            <span className="font-lora italic text-xs text-gold-primary uppercase tracking-widest block mb-4">
              Legal Documents
            </span>
            <h1 className="font-cormorant text-4xl md:text-5xl font-bold text-gold-primary uppercase tracking-wider text-glow">
              Privacy Policy
            </h1>
            <div className="menu-category-divider max-w-xs mx-auto"></div>
          </div>

          {/* Legal Text Content */}
          <div className="glass-panel p-8 sm:p-12 rounded-[4px] border border-border-bronze/40 shadow-[0_4px_30px_rgba(0,0,0,0.5)] font-lora text-sm sm:text-base text-text-champagne/85 leading-relaxed space-y-8">
            
            <section className="space-y-3">
              <h2 className="font-cormorant text-xl text-gold-primary font-semibold uppercase tracking-wider">
                1. Information We Collect
              </h2>
              <p>
                When you visit The Singh Saab restaurant or interact with our website, we may collect minimal contact information if you dial our phone numbers or write review feedback on linked services (e.g. Google Reviews).
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-cormorant text-xl text-gold-primary font-semibold uppercase tracking-wider">
                2. How We Use Information
              </h2>
              <p>
                We use collected details solely to manage reservations, process catering requests, improve our culinary offerings, and send requested details or updates regarding table bookings. We never sell, distribute, or share client details.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-cormorant text-xl text-gold-primary font-semibold uppercase tracking-wider">
                3. Third-Party Links
              </h2>
              <p>
                Our site includes maps directions (Google Maps), review portals (Google Profile), and social handles (Instagram). These platforms are governed by their respective privacy terms, and we encourage you to review their conditions.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-cormorant text-xl text-gold-primary font-semibold uppercase tracking-wider">
                4. Policy Updates
              </h2>
              <p>
                This policy remains active as of 2026. Any changes made to our service guidelines or privacy terms will be updated directly on this page. For any legal inquiries, please contact our administrative desk at Mango, Jamshedpur.
              </p>
            </section>

          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
