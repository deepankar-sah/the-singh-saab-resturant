"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { Award, Compass, Heart, MapPin, Landmark } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Navbar from "@/shared/components/Navbar";
import Footer from "@/shared/components/Footer";

// Register ScrollTrigger plugin
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

/**
 * Our Story Page Component for The Singh Saab.
 * Features:
 * - Large visual narrative with parallax scroll indicators.
 * - Conceptual sections: "The Vision", "What's in a Name", "A Table for Every Craving", "More Than a Meal".
 * - Fully animated with GSAP ScrollTriggers (slide reveals, image scales, and watermark sweeps).
 */
export default function StoryPage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const sectionsContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Hero text fade-in on load
      gsap.fromTo(
        heroRef.current?.querySelectorAll(".story-hero-element") || [],
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1.0, stagger: 0.15, ease: "power3.out" }
      );

      // 2. Animate sections as they scroll into view
      const storySections = sectionsContainerRef.current?.querySelectorAll(".story-section");
      
      storySections?.forEach((sec) => {
        const textElements = sec.querySelectorAll(".story-text");
        const imageElement = sec.querySelector(".story-image-box");

        // Animate text column (slide in)
        if (textElements.length > 0) {
          gsap.fromTo(
            textElements,
            { opacity: 0, x: -30 },
            {
              opacity: 1,
              x: 0,
              duration: 0.8,
              stagger: 0.1,
              ease: "power2.out",
              scrollTrigger: {
                trigger: sec,
                start: "top 75%",
                toggleActions: "play none none none",
              },
            }
          );
        }

        // Animate image column (scale + brightness reveal)
        if (imageElement) {
          gsap.fromTo(
            imageElement,
            { opacity: 0, scale: 0.95, filter: "brightness(0.3) grayscale(100%)" },
            {
              opacity: 1,
              scale: 1,
              filter: "brightness(0.75) grayscale(0%)",
              duration: 1.2,
              ease: "power3.out",
              scrollTrigger: {
                trigger: sec,
                start: "top 75%",
                toggleActions: "play none none none",
              },
            }
          );
        }
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <>
      <Navbar />

      <main className="flex-grow pt-24 bg-dark-bg relative">
        <div className="absolute inset-0 bg-noise pointer-events-none z-0"></div>

        {/* ====================================================
            STORY HERO SECTION
            ==================================================== */}
        <section
          ref={heroRef}
          className="min-h-[80vh] flex flex-col items-center justify-center px-margin-mobile md:px-margin-desktop relative overflow-hidden text-center z-10"
        >
          {/* Subtle watermark logo in background */}
          <div className="absolute inset-0 z-0 opacity-[0.03] flex items-center justify-center pointer-events-none">
            <Image
              src="/logo.png"
              alt="The Singh Saab Logo Watermark"
              width={600}
              height={600}
              className="object-contain filter grayscale blur-sm"
              priority
            />
          </div>

          <div className="max-w-4xl mx-auto z-10 relative mt-16">
            <span className="story-hero-element font-lora italic text-xs text-gold-primary uppercase tracking-[0.2em] mb-6 block">
              Our Story
            </span>
            <h1 className="story-hero-element font-cormorant text-4xl sm:text-5xl md:text-7xl font-bold text-gold-primary mb-8 leading-[1.15] text-glow">
              Every Texture Chosen With Intent.<br />Every Detail Built With Soul.
            </h1>
            <p className="story-hero-element font-lora text-sm sm:text-base md:text-lg text-text-champagne/80 max-w-2xl mx-auto leading-relaxed">
              A journey of passion, precision, and the relentless pursuit of culinary excellence. Welcome to the heart of The Singh Saab.
            </p>
          </div>
        </section>

        {/* ====================================================
            STORY CONTENT CONTAINER
            ==================================================== */}
        <div ref={sectionsContainerRef} className="relative z-10">
          
          {/* Section 1: The Vision */}
          <section className="story-section py-24 px-margin-mobile md:px-margin-desktop bg-dark-black border-y border-border-bronze/20">
            <div className="max-w-container-max mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
              
              <div className="space-y-6">
                <div className="story-text w-12 h-1 bg-gold-primary mb-6"></div>
                <h2 className="story-text font-cormorant text-2xl md:text-4xl text-gold-primary uppercase tracking-wide">
                  Built From the Ground Up, On Purpose
                </h2>
                
                <div className="space-y-6 font-lora text-sm sm:text-base text-text-champagne/80 leading-relaxed">
                  <p className="story-text">
                    We didn't just open a restaurant; we engineered an experience. From the initial sketches to the final polish of the brass fixtures, every element of The Singh Saab was deliberately constructed to evoke a sense of Noir Excellence.
                  </p>
                  <p className="story-text">
                    Our design philosophy embraces minimalism fused with opulence. We utilize generous negative space (or rather, "blackspace") to allow our vibrant gold accents and culinary creations to command attention. It is a space where structural precision meets human passion.
                  </p>
                </div>
              </div>

              {/* Image box */}
              <div className="story-image-box relative h-[500px] bg-dark-surface rounded-[4px] border border-border-bronze/30 overflow-hidden group shadow-[0_4px_25px_rgba(0,0,0,0.5)]">
                <Image
                  src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=800"
                  alt="Ambient interior lighting of fine dining restaurant"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover opacity-60 group-hover:opacity-85 transition-opacity duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-bg via-transparent to-transparent"></div>
              </div>

            </div>
          </section>

          {/* Section 2: What's in a Name */}
          <section className="story-section py-24 px-margin-mobile md:px-margin-desktop relative">
            <div className="max-w-3xl mx-auto text-center space-y-8">
              <div className="story-text inline-flex w-14 h-14 rounded-full border border-gold-primary/20 items-center justify-center text-gold-primary mb-2 shadow-[0_0_15px_rgba(212,175,55,0.1)]">
                <Landmark size={24} />
              </div>
              <h2 className="story-text font-cormorant text-2xl md:text-4xl text-gold-primary uppercase tracking-wide">
                What's in a Name
              </h2>
              <p className="story-text font-lora text-sm sm:text-base md:text-lg text-text-champagne/80 leading-relaxed max-w-2xl mx-auto">
                "Saab" is more than a title; it is a promise of unparalleled hospitality. It signifies respect, warmth, and an unwavering commitment to treating every guest as royalty. The Singh Saab embodies this ethos—a sanctuary where premium service and sophisticated atmosphere converge to create moments of profound indulgence.
              </p>
            </div>
          </section>

          {/* Section 3: The Menu */}
          <section className="story-section py-24 px-margin-mobile md:px-margin-desktop bg-dark-black border-y border-border-bronze/20">
            <div className="max-w-container-max mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
              
              {/* Image box (first on desktop) */}
              <div className="story-image-box order-2 md:order-1 relative h-[500px] bg-dark-surface rounded-[4px] border border-border-bronze/30 overflow-hidden group shadow-[0_4px_25px_rgba(0,0,0,0.5)]">
                <Image
                  src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80&w=800"
                  alt="Meticulously plated multi-cuisine food preparation close-up"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover opacity-60 group-hover:opacity-85 transition-opacity duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-bg via-transparent to-transparent"></div>
              </div>

              <div className="space-y-6 order-1 md:order-2">
                <div className="story-text w-12 h-1 bg-gold-primary mb-6"></div>
                <h2 className="story-text font-cormorant text-2xl md:text-4xl text-gold-primary uppercase tracking-wide">
                  A Table for Every Craving
                </h2>
                
                <div className="space-y-6 font-lora text-sm sm:text-base text-text-champagne/80 leading-relaxed">
                  <p className="story-text">
                    Our culinary narrative is unconstrained by borders. We curate a multi-cuisine repertoire that demands perfection in every dish, whether it's a deeply complex traditional wok-starter or an indulgent contemporary continental plate.
                  </p>
                  <p className="story-text">
                    We source only the finest ingredients, treating them with the reverence they deserve. Each item on our menu is a testament to our chefs' technical mastery and creative vision, designed to provoke thought and pleasure in equal measure.
                  </p>
                </div>
              </div>

            </div>
          </section>

          {/* Section 4: The Experience */}
          <section className="story-section py-24 px-margin-mobile md:px-margin-desktop text-center relative overflow-hidden">
            {/* Fine dotted layout grid background */}
            <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: "radial-gradient(circle at center, #D4AF37 1px, transparent 1px)", backgroundSize: "24px 24px" }}></div>
            
            <div className="max-w-4xl mx-auto relative z-10 space-y-8">
              <h2 className="story-text font-cormorant text-2xl md:text-4xl text-gold-primary uppercase tracking-wide">
                More Than a Meal
              </h2>
              
              <div className="story-text flex items-center justify-center gap-1.5 text-gold-primary mb-4">
                {[...Array(5)].map((_, i) => (
                  <Landmark key={i} size={18} className="fill-gold-primary text-gold-primary" />
                ))}
              </div>
              
              <p className="story-text font-cormorant text-2xl sm:text-3xl md:text-4xl text-text-ivory font-light italic leading-relaxed opacity-95">
                "A resounding 4.6 stars. The premier destination in Mango, Jamshedpur for celebrations that demand perfection."
              </p>
              
              <p className="story-text font-lora text-sm sm:text-base text-text-champagne/75 max-w-2xl mx-auto leading-relaxed">
                We don't just serve food; we curate memories. From intimate anniversaries to monumental business closures, The Singh Saab provides the impeccable backdrop for life's significant moments.
              </p>
            </div>
          </section>

          {/* Closing CTA */}
          <section className="py-32 px-margin-mobile md:px-margin-desktop bg-dark-black border-t border-border-bronze/20 text-center">
            <div className="max-w-2xl mx-auto space-y-10">
              <h2 className="font-cormorant text-2xl md:text-4xl text-gold-primary uppercase tracking-wide text-glow">
                Come experience it for yourself.
              </h2>
              
              <div className="flex flex-col items-center gap-4 text-text-champagne/80 font-lora text-sm">
                <div className="flex items-center gap-2">
                  <MapPin className="text-gold-primary" size={18} />
                  <span>Mango, Dimna Road, Jamshedpur</span>
                </div>
              </div>

              <div className="pt-4">
                <a
                  href="https://maps.google.com/?q=The+Singh+Saab+Jamshedpur"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center bg-transparent border border-gold-primary text-gold-primary px-8 py-4 rounded-[2px] font-lora text-xs font-bold uppercase tracking-widest hover:bg-gold-primary/10 transition-all group hover:scale-[1.02]"
                >
                  <span>Get Directions</span>
                  <Compass className="ml-2 group-hover:rotate-45 transition-transform" size={16} />
                </a>
              </div>
            </div>
          </section>

        </div>
      </main>

      <Footer />
    </>
  );
}
