"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight, Eye } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Navbar from "@/shared/components/Navbar";
import Footer from "@/shared/components/Footer";

// Register ScrollTrigger plugin
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

// Interface for Gallery Photo Item
interface GalleryItem {
  id: number;
  url: string;
  category: "space" | "craft" | "moments";
  title: string;
  description: string;
}

/**
 * Gallery Page Component for The Singh Saab.
 * Features:
 * - Filter tabs (All, The Space, The Craft, Moments).
 * - Interactive Lightbox modal overlay (supports navigation and keyboards).
 * - Hover zoom + glow outline reveal animations.
 * - GSAP ScrollTrigger grid entry animations.
 */
export default function GalleryPage() {
  const [activeFilter, setActiveFilter] = useState<"all" | "space" | "craft" | "moments">("all");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  
  const heroRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  // Gallery images with descriptions from the Stitch code files
  const galleryItems: GalleryItem[] = [
    {
      id: 0,
      category: "space",
      title: "The Fine Dining Salon",
      description: "Sophisticated, dimly lit dining hall featuring charcoal booths, wood paneling, and warm gold wall sconces.",
      url: "https://lh3.googleusercontent.com/aida-public/AB6AXuCICdDjf9wzhqPm0dQwtxNNLnN3rYGR6gL9DPKQzc0WNXvvIYENQ8fkal-0YgkbEaWF9b_YhxpS9Gb7oAznVJ1sssfh1rr8fdErY3-Wd6JYTahfd8oKKaAhlAA3NdBV-7D6IusAqW5I_45t3VvxVtcJLv1_YGCSdvUNSOFrOxyCV198BPvW9dUanLK4ELbx3d8NeLi21Zg0ygjxX6JjtWdi_eLTVQWS7dI0C2o3nJN2FoV1pQnaC-y-RJTBNuvbHdO7v0kTmSZf0OM",
    },
    {
      id: 1,
      category: "space",
      title: "Elegant Table Settings",
      description: "Gold cutlery and white porcelain table settings capturing the light in our intimate atmosphere.",
      url: "https://lh3.googleusercontent.com/aida-public/AB6AXuDx5HwGJh2vbsyY4D04Z2W8VeWBWrHf0CXkiW9k52mpK4kuIQvxx-R9YvA25DBQ8zT72rlDATSzsHQM1td5cD2wzTFbxX-9sktMrC3O81WaF0xxL7ZKXL6-5XsqIu-WbQ24HY3dBG7vJ0DtRNHMEypHcTO4eTiG0mLQxumkhaO1jHTieWBu9r0POI2SgHhjIFsh6yyLEQau8IXdtF40Vla2reYRpXyrZ2CXmi2jVn5uo15FKZvDhPV7sB10SOKKibP8b9nGpApEsfw",
    },
    {
      id: 2,
      category: "space",
      title: "Bespoke Lighting Art",
      description: "An intricate custom chandelier in brass and dark metal hanging from shadowed ceilings.",
      url: "https://lh3.googleusercontent.com/aida-public/AB6AXuC_dEgCqVF7ejYI3y-k_ube4FYlFDMNuGbM6nf0HsdtBa_dCpi2ZgL3ZJ-oAsDWhZknWa5a-aqxwPno0nDhqDN3nLT5HBqd9ifwfxWoGLgD71yB0IGbBQSiXNal1c4L0rYd8ePyBKeYnh1KXHvci9HOWk3Rgm3rQzkqFGiJ5wY1ARVtECV5Qu5TUbwEalxt7JUGOkmLJvRGIDUNJITDzg2BzxLuNmdm4sDyYwzAKqA1FTFI-GXfVmdT-3nVuODmhiC2NxNOAbwZ1_E",
    },
    {
      id: 3,
      category: "craft",
      title: "Singh Saab Spl. Soup",
      description: "A macro culinary shot of our signature broth served in a dark ceramic bowl on black stone.",
      url: "https://lh3.googleusercontent.com/aida-public/AB6AXuCou02aAdVB_V8d8ShXmaGWbTg5sxLbH6xP0XXkUpKEyFjeYe44P4DK8gl3LoFip7WWA-IHlVjkkN-1W-DijKYI8XcsjjlvnCTTxvGflCO5iq_gwFqo3Qs9W-KAGmKImCTwxCif5GvNgdh4h84qp2TeIo5CwtjRomZRIED-3w4WI4-6kXcTA78gK0JVh9DYVHKYAS9np5_pvKZLOmqI9y-JfW4H7ALn1vc2_dddFql59MYd3cBYTIAiu6mEnVQSaFm9tJaWGarMqMQ",
    },
    {
      id: 4,
      category: "craft",
      title: "Pan Fried Chilli Fish",
      description: "Crispy pan-fried fish fillets tossed with red peppers in a glistening chili glaze.",
      url: "https://lh3.googleusercontent.com/aida-public/AB6AXuBzKdcsRnRac1bL83b8HZyb-10FBr7Wsv7TrsLjQ1jmFja8Qh9qCvISwZ4HA2MbvuWdiLHXJygQfeUfZvTuj1UuSzN-RO59h2kt2Ub8eqhuRdAbKEeoDnWEdPm5mtMp6CmEJZQAUK7L-wFVTryWsthpX1nvrWlZRmaWNnLn62Bq-ADwe9ueexTeU7i0iKlSWphpLXtDqfva5E4nMQPVHvxd510IbERxTq-7IYQGTc3mZJ6poNAFDRMpApY8Ez_sXfGA4zRBH-vaJSU",
    },
    {
      id: 5,
      category: "craft",
      title: "Paneer in Hot Garlic Sauce",
      description: "Golden paneer cubes tossed in a bold, glossy garlic-chili glaze, garnished with scallions.",
      url: "https://lh3.googleusercontent.com/aida-public/AB6AXuB9t7eBfs0J-1wCTAjDMsMqmrN38uKSix3V2GAbgSijzILwYgSPpJncT3dGCbhmSHYlFYk8ca24ZESsag32aLNHON-Ct2ZPAgGALMCINaiGz7gcW3FyPTUFt28WvxsaBoJDeuFarPSUlZpRmOAuMa5NNm_TrMPA9l9E0sGEeZxTiPxDrlizpfeNmA_7AWt7qEOVdZMwz0JUCyN1TkMfcHFgKmVmU0z6pcUe06vGNO5iUWa7uAp5ChD9_IRl4630O_19UiKmO9WkwFw",
    },
    {
      id: 6,
      category: "moments",
      title: "Celebration Toast",
      description: "Candid capture of couples clinking champagne glasses in our warm candlelit room.",
      url: "https://lh3.googleusercontent.com/aida-public/AB6AXuDP_YYVTEOfWDe-OPYtu8H8NKg0bTXtmMXEibhy37lZkiMGXc0k-OpoejwCdZwFAclohcQMnpa22vM31y6vKuDr9wN2O_jcUfjA8YgH33OclsCuJZEITyN__dG-9yi9qlfzGjn8VPIDt4LJM6iDkfrfQZGKpRoyZHxE_6Zs6r4v2BPnjVOAcPwkcY43Y8EZOvhaDpAKCLIGaNFcqej378_eL-fljbCX02SwkO1G6CHRyJDY1tNSBJcnOJXjv3Ww6O3S9AjSGUf46qo",
    },
    {
      id: 7,
      category: "moments",
      title: "Sommelier Service",
      description: " Attentive wine pouring service highlighting classic fine-dining hospitality.",
      url: "https://lh3.googleusercontent.com/aida-public/AB6AXuC9FZwfLJ16cbc9RaOEIDw58ovwTAkDo2-HMpAP07KlI2V5QOcnUgKf5p8_MZlYC_0l_h5hrjYH8AnhbCo7-JtK3mhDGZ6I9OJhNgGFrSntFOIPvNmXYKl643KmCf6BC0u2N3cnkruKDlnQelAWUrsRZuQVNnz75NglcmhpO_s1gytU0aFaQeevosWG51FeUqXMyCcSCSkPvtn63RkA9fvnVhr53uNqnu1RNUdVI8JBRcTgX0s6NVvsEH6uWlwoNRUR8e7lz6Dd7Jg",
    },
    {
      id: 8,
      category: "moments",
      title: "Decadent Sparkler Cake",
      description: "Decadent dark chocolate cake accented with gold leaf, lit with celebratory table sparkler sparks.",
      url: "https://lh3.googleusercontent.com/aida-public/AB6AXuAXECo7-t-3f0MmZoeF8CVgPTdLX-4xytFuceVNxEJhXj-c4TEh6H2Lp69dQoDJEP_NOSqU8q_Z0j6dLIZ12fAPkvKWd9jeIJqu17_-33gN25ae_YAUpW8VCoibyFFku5WgYnldgJHf3nCmxKtHbURJc_dqArzYVbVHGyoyZ-JV95t4vxhWgqPN7ZzCm9nYmZMZOedwK_Yv9P8shq-k-wH84xLPdMc3mBlZvQL2wwn3YQX0d9rxDC8ZJQXsinUHGB6FyraCHKNikms",
    },
  ];

  // Filters items dynamically
  const filteredItems = activeFilter === "all"
    ? galleryItems
    : galleryItems.filter((item) => item.category === activeFilter);

  // Lightbox navigation
  const openLightbox = (index: number) => {
    // Find absolute index in the filtered items array
    const actualIdx = filteredItems.findIndex((item) => item.id === index);
    setLightboxIndex(actualIdx !== -1 ? actualIdx : 0);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const showPrev = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((prev) => (prev !== null && prev > 0 ? prev - 1 : filteredItems.length - 1));
    }
  };

  const showNext = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((prev) => (prev !== null && prev < filteredItems.length - 1 ? prev + 1 : 0));
    }
  };

  // Keyboard navigation for Lightbox modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") showPrev();
      if (e.key === "ArrowRight") showNext();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxIndex]);

  useEffect(() => {
    // GSAP Entrance reveals
    const ctx = gsap.context(() => {
      const heroChildren = heroRef.current?.children;
      if (heroChildren && heroChildren.length > 0) {
        gsap.fromTo(
          heroChildren,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 1.0, stagger: 0.15, ease: "power3.out" }
        );
      }

      // Trigger grid items transition on scroll (only if elements are present in the DOM)
      const cards = gridRef.current?.querySelectorAll(".gallery-card");
      if (cards && cards.length > 0) {
        gsap.fromTo(
          cards,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: gridRef.current,
              start: "top 80%",
              toggleActions: "play none none none",
            },
          }
        );
      }
    });

    return () => ctx.revert();
  }, [activeFilter]);

  const filterTabs = [
    { label: "All Details", value: "all" },
    { label: "The Space", value: "space" },
    { label: "The Craft", value: "craft" },
    { label: "Moments", value: "moments" },
  ] as const;

  return (
    <>
      <Navbar />

      <main className="flex-grow pt-32 pb-24 bg-dark-bg">
        <div className="absolute inset-0 bg-noise pointer-events-none z-0"></div>

        {/* ====================================================
            GALLERY HERO SECTION
            ==================================================== */}
        <section
          ref={heroRef}
          className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop mb-16 text-center relative z-10"
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="ornamental-line"></div>
            <span className="font-lora italic text-xs text-gold-primary uppercase tracking-widest">
              Visual Narrative
            </span>
            <div className="ornamental-line"></div>
          </div>
          
          <h1 className="font-cormorant text-4xl md:text-6xl font-bold text-glow text-gold-primary mb-6">
            Gallery. Every Detail Captured.
          </h1>
          
          <p className="font-lora text-sm md:text-base text-text-champagne/80 max-w-2xl mx-auto leading-relaxed mb-12">
            A glimpse into the soul of Jamshedpur's premier dining destination—from the moody lighting of our booths to the exquisite textures of our dishes.
          </p>

          {/* Dynamic Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-3 md:gap-4 font-lora text-xs uppercase tracking-wider">
            {filterTabs.map((tab) => (
              <button
                key={tab.value}
                onClick={() => setActiveFilter(tab.value)}
                className={`px-5 py-2.5 rounded-[2px] transition-all cursor-pointer ${
                  activeFilter === tab.value
                    ? "bg-gold-primary text-dark-black font-semibold shadow-[0_0_15px_rgba(212,175,55,0.15)]"
                    : "text-text-champagne/70 border border-border-bronze/40 hover:border-gold-primary hover:text-gold-primary"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </section>

        {/* Shimmer divider line */}
        <div className="menu-category-divider max-w-container-max mx-auto mb-20"></div>

        {/* ====================================================
            GALLERY PHOTO GRID
            ==================================================== */}
        <section
          ref={gridRef}
          className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop relative z-10"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item, index) => (
              <div
                key={item.id}
                onClick={() => openLightbox(item.id)}
                className="gallery-card group bg-dark-surface rounded-[4px] border border-border-bronze/35 overflow-hidden cursor-pointer shadow-[0_4px_20px_rgba(0,0,0,0.6)] hover:border-gold-primary/40 transition-colors relative"
              >
                {/* Photo container */}
                <div className="relative h-[320px] w-full overflow-hidden">
                  {/* Subtle dark layout overlay */}
                  <div className="absolute inset-0 bg-dark-black/35 z-10 group-hover:bg-dark-black/10 transition-colors duration-300"></div>
                  
                  {/* Eye symbol indicator overlay */}
                  <div className="absolute inset-0 flex items-center justify-center z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-12 h-12 rounded-full bg-dark-black/80 border border-gold-primary/30 flex items-center justify-center text-gold-primary">
                      <Eye size={20} />
                    </div>
                  </div>

                  <Image
                    src={item.url}
                    alt={item.title}
                    fill
                    priority={index < 3}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>

                {/* Metadata block below */}
                <div className="p-6">
                  <span className="block font-lora text-[10px] text-gold-primary uppercase tracking-[0.25em] mb-1">
                    {item.category === "space" ? "The Space" : item.category === "craft" ? "The Craft" : "Moments"}
                  </span>
                  <h3 className="font-cormorant text-lg text-text-ivory font-semibold mb-2 group-hover:text-gold-primary transition-colors">
                    {item.title}
                  </h3>
                  <p className="font-hanken text-xs text-text-champagne/75 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* ====================================================
          LIGHTBOX MODAL VIEWPORT
          ==================================================== */}
      {lightboxIndex !== null && (
        <div
          onClick={closeLightbox}
          className="fixed inset-0 bg-dark-black/95 z-50 flex flex-col justify-between items-center py-10 px-4 backdrop-blur-md"
        >
          {/* Top Panel Actions */}
          <div className="w-full max-w-5xl flex justify-between items-center z-10">
            <span className="font-lora text-xs uppercase tracking-widest text-text-champagne/60">
              {lightboxIndex + 1} / {filteredItems.length}
            </span>
            <button
              onClick={closeLightbox}
              className="w-10 h-10 rounded-full border border-border-bronze/40 flex items-center justify-center text-text-champagne hover:text-gold-primary hover:border-gold-primary transition-colors cursor-pointer"
              aria-label="Close Lightbox"
            >
              <X size={20} />
            </button>
          </div>

          {/* Central Image Panel & Arrows */}
          <div className="relative w-full max-w-4xl h-[55vh] sm:h-[65vh] flex items-center justify-center">
            
            {/* Prev Trigger */}
            <button
              onClick={showPrev}
              className="absolute left-0 sm:left-4 z-10 w-12 h-12 rounded-full border border-border-bronze/30 bg-dark-black/60 flex items-center justify-center text-text-champagne hover:text-gold-primary hover:border-gold-primary transition-colors cursor-pointer"
              aria-label="Previous Image"
            >
              <ChevronLeft size={24} />
            </button>

            {/* Main Image View */}
            <div
              onClick={(e) => e.stopPropagation()}
              className="relative w-full h-full max-h-[500px] sm:max-h-[600px] border border-border-bronze/20 rounded-[4px] overflow-hidden"
            >
              <Image
                src={filteredItems[lightboxIndex].url}
                alt={filteredItems[lightboxIndex].title}
                fill
                sizes="(max-width: 1024px) 100vw, 80vw"
                className="object-contain"
                priority
              />
            </div>

            {/* Next Trigger */}
            <button
              onClick={showNext}
              className="absolute right-0 sm:right-4 z-10 w-12 h-12 rounded-full border border-border-bronze/30 bg-dark-black/60 flex items-center justify-center text-text-champagne hover:text-gold-primary hover:border-gold-primary transition-colors cursor-pointer"
              aria-label="Next Image"
            >
              <ChevronRight size={24} />
            </button>
          </div>

          {/* Bottom Descriptive Caption Panel */}
          <div
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-2xl text-center z-10 px-4"
          >
            <span className="block font-lora text-[10px] text-gold-primary uppercase tracking-[0.25em] mb-2">
              {filteredItems[lightboxIndex].category === "space" ? "The Space" : filteredItems[lightboxIndex].category === "craft" ? "The Craft" : "Moments"}
            </span>
            <h2 className="font-cormorant text-xl md:text-2xl text-text-ivory font-semibold mb-2 text-glow">
              {filteredItems[lightboxIndex].title}
            </h2>
            <p className="font-hanken text-xs sm:text-sm text-text-champagne/80 leading-relaxed max-w-xl mx-auto">
              {filteredItems[lightboxIndex].description}
            </p>
          </div>
        </div>
      )}

      <Footer />
    </>
  );
}
