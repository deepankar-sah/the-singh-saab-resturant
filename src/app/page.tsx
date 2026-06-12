"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Star, ChevronRight, Sparkles, UtensilsCrossed, CalendarDays, Award, Heart } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Navbar from "@/shared/components/Navbar";
import Footer from "@/shared/components/Footer";

// Register ScrollTrigger plugin with GSAP for hardware-accelerated scroll interactions
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

/**
 * Homepage Component for The Singh Saab.
 * Features:
 * - Premium hero section with text glows and gold reveal animations.
 * - Welcome banner ("Welcome, Saab") with ambient interior photography.
 * - Cuisine category grid showcasing restaurant breadth.
 * - "What Saab Recommends" signature cards.
 * - Social proof section with Google reviews.
 */
export default function Home() {
  const [particles, setParticles] = useState<{ id: number; left: number; delay: number; duration: number; drift: string }[]>([]);

  const heroRef = useRef<HTMLDivElement>(null);
  
  const aboutSectionRef = useRef<HTMLDivElement>(null);
  const aboutTextRef = useRef<HTMLDivElement>(null);
  const aboutImageRef = useRef<HTMLDivElement>(null);

  const categoriesSectionRef = useRef<HTMLDivElement>(null);
  const categoryCardsRef = useRef<HTMLDivElement>(null);

  const signatureSectionRef = useRef<HTMLDivElement>(null);
  const signatureCardsRef = useRef<HTMLDivElement>(null);

  const pillarsSectionRef = useRef<HTMLDivElement>(null);
  const pillarCardsRef = useRef<HTMLDivElement>(null);

  const reviewsSectionRef = useRef<HTMLDivElement>(null);
  const reviewCardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Generate floating gold particles properties dynamically on mount
    const generatedParticles = Array.from({ length: 26 }).map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 14,
      duration: 10 + Math.random() * 10,
      drift: `${Math.random() * 80 - 40}px`,
    }));
    setParticles(generatedParticles);
  }, []);

  useEffect(() => {
    // ----------------------------------------------------
    // GSAP ANIMATIONS: Entrance & Scroll Triggers
    // ----------------------------------------------------

    const ctx = gsap.context(() => {
      const container = heroRef.current;
      if (!container) return;

      const logo = container.querySelector(".logo-wrap");
      const eyebrow = container.querySelector(".eyebrow");
      const title = container.querySelector(".hero-title");
      const underline = container.querySelector(".underline");
      const sub = container.querySelector(".hero-sub");
      const ctas = container.querySelector(".hero-ctas");
      const trustRow = container.querySelector(".trust-row");
      const scrollCue = container.querySelector(".scroll-cue");
      const content = container.querySelector(".hero-content");
      const ringA = container.querySelector(".hero-ring-a");
      const ringB = container.querySelector(".hero-ring-b");
      const particlesContainer = container.querySelector(".particles");

      const tl = gsap.timeline();

      // 1. Hero Entrance animations
      tl.fromTo(
        logo,
        { opacity: 0, y: -24, scale: 0.9 },
        { opacity: 1, y: 0, scale: 1, duration: 1.2, ease: "power4.out" }
      )
      .fromTo(
        eyebrow,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.9, ease: "power3.out" },
        "-=0.8"
      )
      .fromTo(
        title,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.9, ease: "power3.out" },
        "-=0.7"
      )
      .fromTo(
        underline,
        { width: 0 },
        { width: 280, duration: 1.0, ease: "power4.inOut" },
        "-=0.4"
      )
      .fromTo(
        sub,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.9, ease: "power3.out" },
        "-=0.7"
      )
      .fromTo(
        ctas?.children || [],
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8, stagger: 0.15, ease: "power2.out" },
        "-=0.6"
      )
      .fromTo(
        trustRow?.children || [],
        { opacity: 0, y: 15 },
        { opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: "power2.out" },
        "-=0.5"
      )
      .fromTo(
        scrollCue,
        { opacity: 0, y: 10 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" },
        "-=0.4"
      );

      // 2. Hero ScrollTrigger animations (Parallax and Scroll Rotation)
      if (content) {
        gsap.to(content, {
          yPercent: 25,
          opacity: 0.1,
          ease: "none",
          scrollTrigger: {
            trigger: container,
            start: "top top",
            end: "bottom top",
            scrub: true,
          }
        });
      }

      if (ringA) {
        gsap.to(ringA, {
          rotation: 180,
          ease: "none",
          scrollTrigger: {
            trigger: container,
            start: "top top",
            end: "bottom top",
            scrub: 1,
          }
        });
      }

      if (ringB) {
        gsap.to(ringB, {
          rotation: -180,
          ease: "none",
          scrollTrigger: {
            trigger: container,
            start: "top top",
            end: "bottom top",
            scrub: 1.2,
          }
        });
      }

      if (particlesContainer) {
        gsap.to(particlesContainer, {
          opacity: 0,
          ease: "none",
          scrollTrigger: {
            trigger: container,
            start: "top top",
            end: "bottom 40%",
            scrub: true,
          }
        });
      }

      // 3. About Section Reveal on Scroll
      gsap.fromTo(
        aboutTextRef.current,
        { opacity: 0, x: -30 },
        {
          opacity: 1,
          x: 0,
          duration: 1.0,
          ease: "power3.out",
          scrollTrigger: {
            trigger: aboutSectionRef.current,
            start: "top 75%",
            toggleActions: "play none none none",
          },
        }
      );

      gsap.fromTo(
        aboutImageRef.current,
        { opacity: 0, scale: 0.95, filter: "brightness(0.3)" },
        {
          opacity: 1,
          scale: 1,
          filter: "brightness(0.7)",
          duration: 1.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: aboutSectionRef.current,
            start: "top 75%",
            toggleActions: "play none none none",
          },
        }
      );

      // 4. Cuisine Categories Grid Scroll Stagger
      if (categoryCardsRef.current) {
        gsap.fromTo(
          categoryCardsRef.current.children,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.15,
            ease: "power2.out",
            scrollTrigger: {
              trigger: categoriesSectionRef.current,
              start: "top 75%",
              toggleActions: "play none none none",
            },
          }
        );
      }

      // 5. Chef Recommendations Stagger
      if (signatureCardsRef.current) {
        gsap.fromTo(
          signatureCardsRef.current.children,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.9,
            stagger: 0.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: signatureSectionRef.current,
              start: "top 75%",
              toggleActions: "play none none none",
            },
          }
        );
      }

      // 6. Brand Pillars Stagger
      if (pillarCardsRef.current) {
        gsap.fromTo(
          pillarCardsRef.current.children,
          { opacity: 0, scale: 0.95, y: 20 },
          {
            opacity: 1,
            scale: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.15,
            ease: "power2.out",
            scrollTrigger: {
              trigger: pillarsSectionRef.current,
              start: "top 75%",
              toggleActions: "play none none none",
            },
          }
        );
      }

      // 7. Google Reviews Stagger
      if (reviewCardsRef.current) {
        gsap.fromTo(
          reviewCardsRef.current.children,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.15,
            ease: "power2.out",
            scrollTrigger: {
              trigger: reviewsSectionRef.current,
              start: "top 75%",
              toggleActions: "play none none none",
            },
          }
        );
      }
    });

    return () => ctx.revert(); // Cleanup GSAP animations when component unmounts
  }, []);

  return (
    <>
      <Navbar />

      <main className="flex-grow pt-20">
        
        {/* ====================================================
            1. HERO SECTION
            ==================================================== */}
        <section
          ref={heroRef}
          className="relative h-screen min-h-[680px] flex items-center justify-center overflow-hidden bg-dark-bg"
          style={{
            background: "radial-gradient(circle at 50% 40%, rgba(212,175,55,0.06) 0%, transparent 60%), radial-gradient(circle at 50% 50%, #161616 0%, #0A0A0A 75%)"
          }}
        >
          {/* Floating gold particles */}
          <div className="particles">
            {particles.map((p) => (
              <div
                key={p.id}
                className="particle"
                style={{
                  left: `${p.left}%`,
                  bottom: "-10px",
                  "--drift": p.drift,
                  animationDuration: `${p.duration}s`,
                  animationDelay: `${p.delay}s`,
                } as React.CSSProperties}
              />
            ))}
          </div>

          {/* Concentric rotating background rings */}
          <div className="hero-ring hero-ring-a"></div>
          <div className="hero-ring hero-ring-b"></div>

          {/* Hero Main Content */}
          <div className="hero-content relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center gap-7 px-6">
            
            {/* Logo wrap with pulsing glow and SVG logo */}
            <div className="logo-wrap">
              <div className="logo-glow"></div>
              <div className="hero-logo w-[120px] filter drop-shadow-[0_0_24px_rgba(212,175,55,0.25)]">
                <svg viewBox="0 0 300 340" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto block">
                  <path
                    className="lp fill-gold-primary"
                    fillRule="evenodd"
                    d="M150,60 C110,40 60,55 50,100 C45,125 60,140 85,148 C110,155 130,150 150,135 C170,150 190,155 215,148 C240,140 255,125 250,100 C240,55 190,40 150,60 Z M150,60 C140,75 140,110 150,135 C160,110 160,75 150,60 Z"
                  />
                  <text
                    className="lp fill-gold-primary"
                    x="150"
                    y="195"
                    textAnchor="middle"
                    fontFamily="Noto Sans Devanagari, Arial, sans-serif"
                    fontSize="34"
                    fontWeight="700"
                  >
                    सिंह
                  </text>
                  <text
                    className="lp fill-gold-primary"
                    x="150"
                    y="232"
                    textAnchor="middle"
                    fontFamily="Georgia, serif"
                    fontSize="36"
                    fontWeight="800"
                    letterSpacing="3"
                  >
                    SAAB
                  </text>
                  <path
                    className="lp fill-gold-primary"
                    d="M150,248 C115,250 100,265 95,290 C92,305 95,318 105,330 C112,300 122,288 135,282 C140,300 145,312 150,320 C155,312 160,300 165,282 C178,288 188,300 195,330 C205,318 208,305 205,290 C200,265 185,250 150,248 Z"
                  />
                </svg>
              </div>
            </div>

            {/* Eyebrow tag */}
            <div className="eyebrow font-lora text-[11px] font-semibold text-text-champagne uppercase tracking-[0.25em]">
              ✦ Fine Dining <span className="text-gold-primary">·</span> Multi-Cuisine <span className="text-gold-primary">·</span> Mango, Jamshedpur ✦
            </div>

            {/* Main Headline with draw line */}
            <h1 className="hero-title font-cormorant text-4xl sm:text-5xl md:text-7xl font-bold text-text-ivory leading-[1.15] max-w-[820px]">
              Every Texture Chosen <span className="text-gold-primary">With Intent.</span><br />
              Every Detail Built With Soul.
              <span className="underline"></span>
            </h1>

            {/* Sub-headline */}
            <p className="hero-sub font-lora italic text-sm sm:text-base md:text-lg text-text-champagne/80 max-w-2xl mx-auto leading-relaxed">
              A dining experience crafted with the same care a Saab gives his guests — warm hospitality, bold flavours, and a space that feels like an occasion.
            </p>

            {/* CTAs */}
            <div className="hero-ctas flex flex-col sm:flex-row gap-6 w-full sm:w-auto z-10 justify-center">
              <a
                href="tel:09418814444"
                className="px-10 py-5 bg-gold-primary text-dark-black font-lora text-xs font-bold uppercase tracking-[0.2em] rounded-[2px] border border-gold-primary hover:bg-gold-accent hover:border-gold-accent hover:shadow-[0_0_28px_rgba(255,215,0,0.35)] transition-all duration-300 hover:scale-[1.02]"
              >
                Reserve a Table
              </a>
              <Link
                href="/menu"
                className="px-10 py-5 bg-transparent border border-gold-primary text-gold-primary font-lora text-xs font-bold uppercase tracking-[0.2em] rounded-[2px] hover:bg-gold-primary hover:text-dark-black transition-all duration-300"
              >
                View Our Menu
              </Link>
            </div>

            {/* Trust Signals */}
            <div className="trust-row flex flex-wrap justify-center gap-8 md:gap-12 opacity-80 mt-6">
              <div className="trust-item font-hanken text-[11px] tracking-wider uppercase text-text-champagne/80 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-gold-primary"></span>
                <span>4.6 Rated (1,097+ Reviews)</span>
              </div>
              <div className="trust-item font-hanken text-[11px] tracking-wider uppercase text-text-champagne/80 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-gold-primary"></span>
                <span>Multi-Cuisine</span>
              </div>
              <div className="trust-item font-hanken text-[11px] tracking-wider uppercase text-text-champagne/80 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-gold-primary"></span>
                <span>Open Until 11 PM</span>
              </div>
              <div className="trust-item font-hanken text-[11px] tracking-wider uppercase text-text-champagne/80 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-gold-primary"></span>
                <span>Perfect for Celebrations</span>
              </div>
            </div>
          </div>

          {/* Animated Scroll Cue */}
          <div className="scroll-cue">
            <span>Scroll</span>
            <div className="scroll-line"></div>
          </div>
        </section>

        {/* ====================================================
            2. ABOUT STRIP — "The Saab Welcomes You"
            ==================================================== */}
        <section
          ref={aboutSectionRef}
          className="py-24 px-margin-mobile md:px-margin-desktop bg-dark-black border-y border-border-bronze/20"
        >
          <div className="max-w-container-max mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Story Text Box */}
            <div ref={aboutTextRef} className="flex flex-col gap-6">
              <h2 className="font-cormorant text-3xl md:text-5xl font-semibold text-gold-primary uppercase tracking-wide">
                Welcome, Saab.
              </h2>
              <div className="h-[1px] w-24 bg-gold-primary mb-2"></div>
              
              <p className="font-lora text-base sm:text-lg text-text-champagne leading-relaxed">
                The Singh Saab isn't just a restaurant — it's a statement. Every corner of this space, every dish on this menu, every moment of service has been considered with one goal: to make you feel like the most important guest in the room.
              </p>
              
              <p className="font-hanken text-sm text-text-champagne/75 leading-relaxed">
                From intimate dinners to celebrations that deserve a backdrop worthy of the occasion — this is where Jamshedpur comes to dine with intent. Explore our architectural elegance and taste our soul-filled cuisine.
              </p>

              <div className="flex items-center gap-4 mt-4">
                <span className="font-lora italic text-xs text-gold-primary uppercase tracking-widest">
                  Est. Mango, Jamshedpur
                </span>
              </div>
            </div>

            {/* Ambient image box */}
            <div
              ref={aboutImageRef}
              className="relative h-[480px] rounded-[4px] overflow-hidden border border-border-bronze/40 group shadow-[0_4px_30px_rgba(0,0,0,0.5)]"
            >
              <div className="absolute inset-0 bg-dark-bg/30 z-10 transition-colors duration-500 group-hover:bg-transparent"></div>
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCLKe-99J9HjCG-y5JD7M-yvf6fhNs_HV_n90q1uerZcbSJhYWa10exl9iE3edeBl33rs_joZku36b64UVzWxEmg-uhcXfWPU1bbGqZEdmdr4fdHNWc07Z-kZ7zSxF9cbfw8IH5pBnTStUbsrcmi6FQIupx7bXMwtlWrxde2f5w5Mtm-NLrxxIuDWzvhxPJTuJePRr05EvETezkAlAkCxbCarcxq7qvUX103akxptg5JW9VqjX1QcSPQKotVfz26hfjw_G6D8k_Yok"
                alt="The Singh Saab Sophisticated Noir Interior"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover opacity-60 group-hover:opacity-85 transition-all duration-700 group-hover:scale-105"
              />
            </div>
          </div>
        </section>

        {/* ====================================================
            3. CUISINE CATEGORIES SECTION — "A Menu Without Borders"
            ==================================================== */}
        <section
          ref={categoriesSectionRef}
          className="py-32 px-margin-mobile md:px-margin-desktop bg-dark-bg relative"
        >
          <div className="absolute right-0 top-1/4 w-[500px] h-[500px] rounded-full bg-gold-primary/5 blur-[100px] pointer-events-none"></div>
          
          <div className="max-w-container-max mx-auto">
            
            {/* Headers */}
            <div className="text-center mb-20">
              <span className="font-lora italic text-sm text-gold-primary tracking-widest block mb-4">
                A Culinary Journey
              </span>
              <h2 className="font-cormorant text-3xl md:text-5xl font-semibold text-gold-primary uppercase tracking-widest">
                A Menu Without Borders.
              </h2>
              <div className="menu-category-divider max-w-sm mx-auto"></div>
              <p className="font-lora text-sm sm:text-base text-text-champagne/80 max-w-xl mx-auto mt-6">
                From sizzling Chinese starters to comforting soups, tandoor classics to indulgent appetizers — every cuisine, done with the same intent.
              </p>
            </div>

            {/* Grid layout */}
            <div ref={categoryCardsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              
              {/* Category Card 1 */}
              <div className="bg-dark-surface rounded-[4px] p-8 border border-border-bronze/30 hover:border-gold-primary/45 transition-all duration-300 group relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-gold-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <span className="font-italiana text-3xl text-gold-primary mb-6 block">01</span>
                <h3 className="font-cormorant text-xl text-text-ivory font-semibold mb-3 group-hover:text-gold-primary transition-colors">
                  Chinese Non-Veg
                </h3>
                <p className="font-hanken text-xs text-text-champagne/70 leading-relaxed">
                  Bold flavors, wok-tossed perfection. Featuring Chicken 65, Lollipop, and fiery Tandoori Chilli Chicken.
                </p>
              </div>

              {/* Category Card 2 */}
              <div className="bg-dark-surface rounded-[4px] p-8 border border-border-bronze/30 hover:border-gold-primary/45 transition-all duration-300 group relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-gold-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <span className="font-italiana text-3xl text-gold-primary mb-6 block">02</span>
                <h3 className="font-cormorant text-xl text-text-ivory font-semibold mb-3 group-hover:text-gold-primary transition-colors">
                  Chinese Veg
                </h3>
                <p className="font-hanken text-xs text-text-champagne/70 leading-relaxed">
                  Vegetarian, never an afterthought. Crispy Babycorn, Honey Chilli Potato, and Paneer 65 crafted with soul.
                </p>
              </div>

              {/* Category Card 3 */}
              <div className="bg-dark-surface rounded-[4px] p-8 border border-border-bronze/30 hover:border-gold-primary/45 transition-all duration-300 group relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-gold-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <span className="font-italiana text-3xl text-gold-primary mb-6 block">03</span>
                <h3 className="font-cormorant text-xl text-text-ivory font-semibold mb-3 group-hover:text-gold-primary transition-colors">
                  Warm Soups
                </h3>
                <p className="font-hanken text-xs text-text-champagne/70 leading-relaxed">
                  Start the evening right. Featuring Manchow, Lemon Coriander, and our legendary signature Singh Saab Spl. Soup.
                </p>
              </div>

              {/* Category Card 4 */}
              <div className="bg-dark-surface rounded-[4px] p-8 border border-border-bronze/30 hover:border-gold-primary/45 transition-all duration-300 group relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-gold-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <span className="font-italiana text-3xl text-gold-primary mb-6 block">04</span>
                <h3 className="font-cormorant text-xl text-text-ivory font-semibold mb-3 group-hover:text-gold-primary transition-colors">
                  Appetizers & Main
                </h3>
                <p className="font-hanken text-xs text-text-champagne/70 leading-relaxed">
                  Small plates and rich gravies. Indulge in Paneer in Hot Garlic Sauce, French Fries, and Cheese Balls.
                </p>
              </div>
            </div>

            {/* Menu CTA Link */}
            <div className="text-center mt-16 z-10 relative">
              <Link
                href="/menu"
                className="inline-flex items-center gap-1.5 text-gold-primary font-lora text-sm uppercase tracking-widest border-b border-transparent hover:border-gold-primary transition-all pb-1 hover:text-gold-accent"
              >
                See Full Menu
                <ChevronRight size={16} />
              </Link>
            </div>
          </div>
        </section>

        {/* ====================================================
            4. SIGNATURE SECTION — "Saab's Picks"
            ==================================================== */}
        <section
          ref={signatureSectionRef}
          className="py-32 px-margin-mobile md:px-margin-desktop bg-dark-black border-y border-border-bronze/20"
        >
          <div className="max-w-container-max mx-auto">
            
            {/* Section Header */}
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
              <div>
                <span className="font-lora italic text-xs text-gold-primary uppercase tracking-[0.2em] block mb-3">
                  Signature Selection
                </span>
                <h2 className="font-cormorant text-3xl md:text-5xl font-semibold text-gold-primary uppercase tracking-wide">
                  What Saab Recommends.
                </h2>
              </div>
              <Link
                href="/menu"
                className="px-6 py-3 bg-transparent border border-border-bronze text-text-champagne hover:text-gold-primary hover:border-gold-primary font-lora text-xs uppercase tracking-widest rounded-[2px] transition-colors"
              >
                View Full Menu
              </Link>
            </div>

            {/* Signature Cards List */}
            <div ref={signatureCardsRef} className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              
              {/* Card 1 */}
              <div className="group cursor-pointer">
                <div className="h-80 w-full bg-dark-surface rounded-t-[4px] overflow-hidden relative border border-border-bronze/35 border-b-0">
                  <div className="absolute inset-0 bg-dark-black/45 z-10 group-hover:bg-dark-black/20 transition-colors duration-500"></div>
                  <div className="absolute top-4 left-4 z-20 px-3 py-1 bg-dark-black border border-gold-primary/30 rounded-[2px] font-lora text-xs text-gold-primary tracking-widest uppercase backdrop-blur-sm">
                    ⭐ House Special
                  </div>
                  <Image
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCou02aAdVB_V8d8ShXmaGWbTg5sxLbH6xP0XXkUpKEyFjeYe44P4DK8gl3LoFip7WWA-IHlVjkkN-1W-DijKYI8XcsjjlvnCTTxvGflCO5iq_gwFqo3Qs9W-KAGmKImCTwxCif5GvNgdh4h84qp2TeIo5CwtjRomZRIED-3w4WI4-6kXcTA78gK0JVh9DYVHKYAS9np5_pvKZLOmqI9y-JfW4H7ALn1vc2_dddFql59MYd3cBYTIAiu6mEnVQSaFm9tJaWGarMqMQ"
                    alt="Singh Saab Spl. Soup"
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transform group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="bg-[#121212] p-8 rounded-b-[4px] border border-border-bronze/35 group-hover:border-gold-primary/40 transition-colors duration-300 relative z-20 shadow-[0_-10px_20px_-10px_rgba(0,0,0,0.5)]">
                  <div className="flex justify-between items-baseline mb-2">
                    <h3 className="font-cormorant text-xl text-gold-primary font-semibold">
                      Singh Saab Spl. Soup
                    </h3>
                    <span className="font-cormorant text-sm text-text-champagne">₹140 / 160</span>
                  </div>
                  <p className="font-lora text-xs italic text-text-champagne/60 mb-4">
                    "Our name. Our recipe. Our welcome to you."
                  </p>
                  <p className="font-hanken text-xs text-text-champagne/80 leading-relaxed">
                    A house-special blend that opens every great meal here — warm, layered, and entirely our own recipe.
                  </p>
                </div>
              </div>

              {/* Card 2 */}
              <div className="group cursor-pointer">
                <div className="h-80 w-full bg-dark-surface rounded-t-[4px] overflow-hidden relative border border-border-bronze/35 border-b-0">
                  <div className="absolute inset-0 bg-dark-black/45 z-10 group-hover:bg-dark-black/20 transition-colors duration-500"></div>
                  <div className="absolute top-4 left-4 z-20 px-3 py-1 bg-dark-black border border-gold-primary/30 rounded-[2px] font-lora text-xs text-gold-primary tracking-widest uppercase backdrop-blur-sm">
                    🔥 Spicy Favourite
                  </div>
                  <Image
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBzKdcsRnRac1bL83b8HZyb-10FBr7Wsv7TrsLjQ1jmFja8Qh9qCvISwZ4HA2MbvuWdiLHXJygQfeUfZvTuj1UuSzN-RO59h2kt2Ub8eqhuRdAbKEeoDnWEdPm5mtMp6CmEJZQAUK7L-wFVTryWsthpX1nvrWlZRmaWNnLn62Bq-ADwe9ueexTeU7i0iKlSWphpLXtDqfva5E4nMQPVHvxd510IbERxTq-7IYQGTc3mZJ6poNAFDRMpApY8Ez_sXfGA4zRBH-vaJSU"
                    alt="Pan Fried Chilli Fish"
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transform group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="bg-[#121212] p-8 rounded-b-[4px] border border-border-bronze/35 group-hover:border-gold-primary/40 transition-colors duration-300 relative z-20 shadow-[0_-10px_20px_-10px_rgba(0,0,0,0.5)]">
                  <div className="flex justify-between items-baseline mb-2">
                    <h3 className="font-cormorant text-xl text-gold-primary font-semibold">
                      Pan Fried Chilli Fish
                    </h3>
                    <span className="font-cormorant text-sm text-text-champagne">₹359</span>
                  </div>
                  <p className="font-lora text-xs italic text-text-champagne/60 mb-4">
                    "For those who like their evening with a kick."
                  </p>
                  <p className="font-hanken text-xs text-text-champagne/80 leading-relaxed">
                    Pan-seared to crisp perfection, tossed in our signature chili sauce — a guest favourite for a reason.
                  </p>
                </div>
              </div>

              {/* Card 3 */}
              <div className="group cursor-pointer">
                <div className="h-80 w-full bg-dark-surface rounded-t-[4px] overflow-hidden relative border border-border-bronze/35 border-b-0">
                  <div className="absolute inset-0 bg-dark-black/45 z-10 group-hover:bg-dark-black/20 transition-colors duration-500"></div>
                  <div className="absolute top-4 left-4 z-20 px-3 py-1 bg-dark-black border border-gold-primary/30 rounded-[2px] font-lora text-xs text-gold-primary tracking-widest uppercase backdrop-blur-sm">
                    🌿 Vegetarian Star
                  </div>
                  <Image
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuB9t7eBfs0J-1wCTAjDMsMqmrN38uKSix3V2GAbgSijzILwYgSPpJncT3dGCbhmSHYlFYk8ca24ZESsag32aLNHON-Ct2ZPAgGALMCINaiGz7gcW3FyPTUFt28WvxsaBoJDeuFarPSUlZpRmOAuMa5NNm_TrMPA9l9E0sGEeZxTiPxDrlizpfeNmA_7AWt7qEOVdZMwz0JUCyN1TkMfcHFgKmVmU0z6pcUe06vGNO5iUWa7uAp5ChD9_IRl4630O_19UiKmO9WkwFw"
                    alt="Paneer in Hot Garlic Sauce"
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transform group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="bg-[#121212] p-8 rounded-b-[4px] border border-border-bronze/35 group-hover:border-gold-primary/40 transition-colors duration-300 relative z-20 shadow-[0_-10px_20px_-10px_rgba(0,0,0,0.5)]">
                  <div className="flex justify-between items-baseline mb-2">
                    <h3 className="font-cormorant text-xl text-gold-primary font-semibold">
                      Paneer in Hot Garlic
                    </h3>
                    <span className="font-cormorant text-sm text-text-champagne">₹295</span>
                  </div>
                  <p className="font-lora text-xs italic text-text-champagne/60 mb-4">
                    "Garlic, heat, and paneer — a love story."
                  </p>
                  <p className="font-hanken text-xs text-text-champagne/80 leading-relaxed">
                    Soft, silky paneer cubes in a bold garlic-chili sauce. A main course that holds its own on any table.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ====================================================
            5. WHY THE SINGH SAAB — "Why Guests Return"
            ==================================================== */}
        <section
          ref={pillarsSectionRef}
          className="py-32 px-margin-mobile md:px-margin-desktop bg-dark-bg relative overflow-hidden"
        >
          <div className="absolute left-0 top-1/2 -translate-y-1/2 w-96 h-96 bg-gold-primary/5 rounded-full blur-[100px] pointer-events-none"></div>
          
          <div className="max-w-container-max mx-auto relative z-10">
            
            {/* Headers */}
            <div className="text-center mb-20">
              <span className="font-lora italic text-xs text-gold-primary uppercase tracking-[0.2em] block mb-3">
                The Standard of Excellence
              </span>
              <h2 className="font-cormorant text-3xl md:text-5xl font-semibold text-gold-primary uppercase tracking-wide">
                It's Not Just a Meal. It's an Experience.
              </h2>
              <div className="menu-category-divider max-w-sm mx-auto"></div>
            </div>

            {/* Pillars Column Grid */}
            <div ref={pillarCardsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              
              {/* Pillar 1: Ambience */}
              <div className="flex flex-col gap-4 p-6 border border-border-bronze/20 bg-dark-surface/50 rounded-[2px] hover:border-gold-primary/30 transition-all duration-300">
                <div className="w-12 h-12 rounded-full border border-gold-primary/20 flex items-center justify-center text-gold-primary">
                  <Sparkles size={20} />
                </div>
                <h3 className="font-cormorant text-xl text-gold-primary font-semibold">
                  A Space Worth the Visit
                </h3>
                <p className="font-hanken text-xs text-text-champagne/70 leading-relaxed">
                  Thoughtfully designed interiors that make every visit feel like an occasion — guests consistently call it "Instagrammable" for a reason.
                </p>
              </div>

              {/* Pillar 2: Cuisine */}
              <div className="flex flex-col gap-4 p-6 border border-border-bronze/20 bg-dark-surface/50 rounded-[2px] hover:border-gold-primary/30 transition-all duration-300">
                <div className="w-12 h-12 rounded-full border border-gold-primary/20 flex items-center justify-center text-gold-primary">
                  <UtensilsCrossed size={20} />
                </div>
                <h3 className="font-cormorant text-xl text-gold-primary font-semibold">
                  One Menu, Every Craving
                </h3>
                <p className="font-hanken text-xs text-text-champagne/70 leading-relaxed">
                  From Chinese to Continental, Tandoor to Soups — a menu built for groups where everyone finds something they love.
                </p>
              </div>

              {/* Pillar 3: Celebrations */}
              <div className="flex flex-col gap-4 p-6 border border-border-bronze/20 bg-dark-surface/50 rounded-[2px] hover:border-gold-primary/30 transition-all duration-300">
                <div className="w-12 h-12 rounded-full border border-gold-primary/20 flex items-center justify-center text-gold-primary">
                  <Award size={20} />
                </div>
                <h3 className="font-cormorant text-xl text-gold-primary font-semibold">
                  Perfect for Celebrations
                </h3>
                <p className="font-hanken text-xs text-text-champagne/70 leading-relaxed">
                  Guests choose The Singh Saab for the moments that matter — intimate dinners and big celebrations alike.
                </p>
              </div>

              {/* Pillar 4: Service */}
              <div className="flex flex-col gap-4 p-6 border border-border-bronze/20 bg-dark-surface/50 rounded-[2px] hover:border-gold-primary/30 transition-all duration-300">
                <div className="w-12 h-12 rounded-full border border-gold-primary/20 flex items-center justify-center text-gold-primary">
                  <Heart size={20} />
                </div>
                <h3 className="font-cormorant text-xl text-gold-primary font-semibold">
                  Service With Soul
                </h3>
                <p className="font-hanken text-xs text-text-champagne/70 leading-relaxed">
                  Polite, attentive staff and a warm welcome — because hospitality isn't a checklist here, it's a value.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ====================================================
            6. SOCIAL PROOF — "What Guests Are Saying"
            ==================================================== */}
        <section
          ref={reviewsSectionRef}
          className="py-32 px-margin-mobile md:px-margin-desktop bg-dark-black border-y border-border-bronze/20"
        >
          <div className="max-w-container-max mx-auto">
            
            {/* Headers */}
            <div className="text-center mb-20">
              <span className="font-lora italic text-xs text-gold-primary uppercase tracking-[0.2em] block mb-3">
                Guest Impressions
              </span>
              <h2 className="font-cormorant text-3xl md:text-5xl font-semibold text-gold-primary uppercase tracking-wide">
                4.6 Stars. 1,097 Reasons to Visit.
              </h2>
              <div className="menu-category-divider max-w-sm mx-auto"></div>
            </div>

            {/* Reviews Cards List */}
            <div ref={reviewCardsRef} className="grid grid-cols-1 md:grid-cols-3 gap-8">
              
              {/* Review 1 */}
              <div className="bg-dark-surface p-8 border border-border-bronze/30 rounded-[4px] relative flex flex-col justify-between h-full">
                <div>
                  <div className="flex gap-1 text-gold-primary mb-6">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={16} className="fill-gold-primary" />
                    ))}
                  </div>
                  <p className="font-lora text-sm text-text-champagne leading-relaxed mb-6">
                    "This was our first visit to this restaurant and honestly it did not disappoint. With pretty interiors, great ambience and good food, the place served all at once. Good for family dinner or celebrating intimate events."
                  </p>
                </div>
                <div className="border-t border-border-bronze/35 pt-4">
                  <span className="block font-hanken text-xs font-bold text-text-ivory">Anindita Gupta</span>
                  <span className="block font-hanken text-[10px] text-text-champagne/60 mt-1 uppercase tracking-wider">
                    Google Local Guide · 5★ Review
                  </span>
                </div>
              </div>

              {/* Review 2 */}
              <div className="bg-dark-surface p-8 border border-border-bronze/30 rounded-[4px] relative flex flex-col justify-between h-full">
                <div>
                  <div className="flex gap-1 text-gold-primary mb-6">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={16} className="fill-gold-primary" />
                    ))}
                  </div>
                  <p className="font-lora text-sm text-text-champagne leading-relaxed mb-6">
                    "The staff were very polite, clean and cozy place. Overall, a lovely spot to hang out with friends. There's a lot of seating space, so it's perfect for gatherings or group visits."
                  </p>
                </div>
                <div className="border-t border-border-bronze/35 pt-4">
                  <span className="block font-hanken text-xs font-bold text-text-ivory">Ashrita</span>
                  <span className="block font-hanken text-[10px] text-text-champagne/60 mt-1 uppercase tracking-wider">
                    Google Local Guide · 5★ Review
                  </span>
                </div>
              </div>

              {/* Review 3 */}
              <div className="bg-dark-surface p-8 border border-border-bronze/30 rounded-[4px] relative flex flex-col justify-between h-full">
                <div>
                  <div className="flex gap-1 text-gold-primary mb-6">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={16} className="fill-gold-primary" />
                    ))}
                  </div>
                  <p className="font-lora text-sm text-text-champagne leading-relaxed mb-6">
                    "Good restaurant. Nice service. Quality and tasty food. Perfect ambiance for celebration."
                  </p>
                </div>
                <div className="border-t border-border-bronze/35 pt-4">
                  <span className="block font-hanken text-xs font-bold text-text-ivory">Google Reviewer</span>
                  <span className="block font-hanken text-[10px] text-text-champagne/60 mt-1 uppercase tracking-wider">
                    5★ Google Review
                  </span>
                </div>
              </div>
            </div>

            {/* Review Link CTA */}
            <div className="text-center mt-16 z-10 relative">
              <a
                href="https://google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-gold-primary font-lora text-xs uppercase tracking-widest border-b border-transparent hover:border-gold-primary transition-all pb-1 hover:text-gold-accent"
              >
                Write a Review on Google →
              </a>
            </div>
          </div>
        </section>

        {/* ====================================================
            7. CLOSING CTA SECTION
            ==================================================== */}
        <section className="relative py-36 px-margin-mobile md:px-margin-desktop overflow-hidden text-center bg-dark-bg">
          <div className="absolute inset-0 bg-noise pointer-events-none z-0"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gold-primary/5 blur-[100px] pointer-events-none z-0"></div>
          
          <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center">
            
            {/* Small Turban/Beard logo watermark */}
            <div className="relative w-16 h-16 rounded-full border border-gold-primary/20 overflow-hidden mb-8 opacity-75">
              <Image
                src="/logo.jpeg"
                alt="The Singh Saab Logo Watermark"
                fill
                sizes="64px"
                className="object-cover"
              />
            </div>
            
            <h2 className="font-cormorant text-3xl sm:text-4xl md:text-6xl font-bold text-gold-primary mb-6 text-glow leading-tight">
              Where Every Detail Has a Story.
            </h2>
            
            <p className="font-lora text-sm sm:text-base text-text-champagne/80 mb-12 max-w-xl">
              Join us for an evening of uncompromised culinary excellence. Make a booking or find directions to our restaurant today.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 w-full sm:w-auto">
              <a
                href="tel:09418814444"
                className="px-10 py-5 bg-gradient-to-r from-gold-bronze to-gold-primary text-dark-black font-lora text-xs font-bold uppercase tracking-[0.2em] rounded-[2px] hover:from-gold-accent hover:to-gold-primary transition-all duration-300 shadow-[0_0_20px_rgba(212,175,55,0.2)]"
              >
                Call: 094188 14444
              </a>
              <a
                href="https://maps.google.com/?q=The+Singh+Saab+Jamshedpur"
                target="_blank"
                rel="noopener noreferrer"
                className="px-10 py-5 bg-transparent border border-gold-primary text-gold-primary font-lora text-xs font-bold uppercase tracking-[0.2em] rounded-[2px] hover:bg-gold-primary/10 transition-colors duration-300"
              >
                Get Directions
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
