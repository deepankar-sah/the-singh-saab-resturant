"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Phone, Utensils, Award, Flame, Wheat } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Navbar from "@/shared/components/Navbar";
import Footer from "@/shared/components/Footer";

// Register ScrollTrigger plugin with GSAP
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

// Interface for Menu Items
interface MenuItem {
  name: string;
  price: string;
  tag?: string;
  tagType?: "special" | "spicy" | "veg";
  description: string;
}

// Interface for Menu Sections
interface MenuSection {
  id: string;
  title: string;
  intro: string;
  items: MenuItem[];
}

/**
 * Menu Page Component for The Singh Saab.
 * Features:
 * - Tabbed category navigation (scroll to category).
 * - Premium dotted leader styling for names and prices.
 * - Special card highlight for House Special "Singh Saab Spl. Soup".
 * - GSAP stagger reveals on category content.
 */
export default function MenuPage() {
  const [activeCategory, setActiveCategory] = useState("all");
  const menuContainerRef = useRef<HTMLDivElement>(null);
  const sectionsRef = useRef<{ [key: string]: HTMLElement | null }>({});

  // Core menu data based on SINGH-SAAB-COPY.md
  const menuData: MenuSection[] = [
    {
      id: "chinese-non-veg",
      title: "Chinese Non-Veg Starters",
      intro: "Bold, fiery, and unmissable wok-tossed starters.",
      items: [
        { name: "Chicken Momo (Steam/Fried)", price: "₹249", description: "Comfort, steamed or crisp — your call." },
        { name: "Chilli Chicken (Dry)", price: "₹249", description: "The classic. Done right, every time." },
        { name: "Chicken Salt & Pepper", price: "₹260", description: "Simple ingredients, big flavour." },
        { name: "Chicken 65", price: "₹260", tag: "South meets Saab", tagType: "spicy", description: "Spicy, punchy, addictive curry leaf temper." },
        { name: "Tandoori Chilli Chicken", price: "₹349", tag: "Smoky Char", tagType: "special", description: "Tender chicken with smoky char and a fiery finish." },
        { name: "Crispy Chicken in Sweet Chilli Sauce", price: "₹390", tag: "Guest Favourite", tagType: "special", description: "Sweet heat, crispy texture — highly recommended." },
        { name: "Kung Pao Chicken", price: "₹349", description: "Bold, nutty, unapologetically spicy." },
        { name: "Green Pepper Chicken", price: "₹359", description: "Pepper-forward and full of punch." },
        { name: "Chicken Schezwan 🌶️", price: "₹349", tag: "Fiery Hot", tagType: "spicy", description: "For the brave. You've been warned." },
        { name: "Smoked BBQ Chicken", price: "₹349", description: "Smoky, sticky, and absolutely irresistible." },
        { name: "Chicken Lollipop (6pcs)", price: "₹359", description: "The crowd favourite. Perfect for sharing." },
        { name: "Pan Fried Chicken", price: "₹349", description: "Crisp on the outside, juicy on the inside." },
        { name: "Pan Fried Chilli Fish", price: "₹359", tag: "Must Try", tagType: "spicy", description: "For those who like their evening with a kick." },
        { name: "Prawn Chilli Dry", price: "₹380", description: "Bold seafood with robust spices." },
        { name: "Golden Fried Prawn", price: "₹449", tag: "Saab's Choice", tagType: "special", description: "Crisp, golden, and absolutely worth it." },
      ],
    },
    {
      id: "chinese-veg",
      title: "Chinese Veg Starters",
      intro: "Vegetarian starters, crafted with pure intent.",
      items: [
        { name: "Veg Momo (Steam/Fry)", price: "₹249", description: "Light, comforting, perfectly spiced." },
        { name: "Veg Spring Roll", price: "₹249", description: "Crisp on the outside, packed with fresh vegetables inside." },
        { name: "Veg Manchurian (Dry)", price: "₹260", description: "A timeless favourite, done with deep intent." },
        { name: "American Corn Steamed", price: "₹249", description: "Simple, sweet, and satisfying." },
        { name: "American Corn Salt & Pepper", price: "₹260", description: "Corn never tasted this good." },
        { name: "Crispy Chana Chilli", price: "₹260", description: "Crunchy, spicy, and extremely moreish." },
        { name: "Chana Salt & Pepper", price: "₹260", description: "A quiet favourite for chickpea lovers." },
        { name: "Crispy Babycorn Chilli", price: "₹260", description: "Babycorn at its crispiest best." },
        { name: "Crispy Babycorn Salt & Pepper", price: "₹260", description: "Light, crunchy, and addictive." },
        { name: "Crispy Honey Chilli Potato", price: "₹260", tag: "Sweet & Spicy", tagType: "veg", description: "Sweet, spicy, can't-stop-eating territory." },
        { name: "Paneer 65", price: "₹260", tag: "Chef Special", tagType: "special", description: "Paneer's spiciest, crispiest avatar." },
        { name: "Paneer Manchurian (Dry)", price: "₹260", description: "A classic cottage cheese starter, elevated." },
        { name: "Paneer Schezwan Chilli", price: "₹260", description: "Bold paneer for bold palates." },
        { name: "Kung Pao Paneer", price: "₹295", description: "Nutty, spicy, and deeply satisfying." },
        { name: "Tandoori Chilli Paneer", price: "₹295", tag: "Smoky Tandoor", tagType: "special", description: "Smoky tandoor meets Chinese wok heat." },
        { name: "Chinese Bhel", price: "₹295", description: "A street-food favourite, reimagined for fine dining." },
        { name: "Mushroom Chilli (Dry)", price: "₹295", description: "Earthy, spicy, and umami-rich." },
        { name: "Mushroom Salt & Pepper", price: "₹295", description: "Simple, elegant, and full of flavour." },
        { name: "Gobhi Manchurian (Dry)", price: "₹230", description: "A timeless vegetarian classic." },
      ],
    },
    {
      id: "soups",
      title: "Warm Soups",
      intro: "Rich, aromatic broths to open your dining experience.",
      items: [
        { name: "Sweet Corn Soup", price: "₹130 / 150", description: "Light, sweet, comforting bowl." },
        { name: "Manchow Soup", price: "₹130 / 150", tag: "Crowd Special", tagType: "special", description: "Spicy and sour with crispy noodles on top." },
        { name: "Hot & Sour Soup 🌶️", price: "₹130 / 150", description: "Tangy, spicy, the perfect palate opener." },
        { name: "Lemon Coriander Soup", price: "₹130 / 150", description: "Fresh, zesty, and light on the palate." },
        { name: "Talumein Soup", price: "₹130 / 150", description: "A hearty bowl loaded with noodles and greens." },
        { name: "Cream of Tomato Soup", price: "₹140", description: "Velvety, classic, always satisfying." },
      ],
    },
    {
      id: "main-course",
      title: "Main Course — Chinese Veg",
      intro: "Rich, luscious gravies to complete your meal.",
      items: [
        { name: "Paneer Chilli Gravy", price: "₹295", description: "Paneer in a spicy soy-based sauce that means business." },
        { name: "Paneer Schezwan Gravy 🌶️", price: "₹295", tag: "Fiery Hot", tagType: "spicy", description: "For the heat-seekers at the table." },
        { name: "Schezwan Paneer Gravy", price: "₹295", description: "Bold, saucy, and soul-satisfying." },
        { name: "Paneer in Hot Garlic Sauce", price: "₹295", tag: "Saab Recommend", tagType: "special", description: "Garlic, heat, and paneer — a true love story." },
        { name: "Assorted Veg in Hot Garlic Sauce", price: "₹295", description: "Everything good, tossed in one hot garlic bowl." },
        { name: "Assorted Veg in Schezwan Sauce 🌶️", price: "₹295", description: "A medley of fresh seasonal vegetables with a kick." },
        { name: "Veg Manchurian Gravy", price: "₹295", description: "The classic vegetable dumplings in a rich saucy form." },
        { name: "Mushroom in Hot Garlic Sauce", price: "₹280", description: "Earthy mushrooms met with bold garlic-chili heat." },
        { name: "Mushroom Manchurian Gravy", price: "₹280", description: "Comfort food done the iconic Singh Saab style." },
        { name: "Mushroom Chilli Gravy", price: "₹260", description: "Spicy, hearty, and deeply flavourful." },
      ],
    },
    {
      id: "appetizers",
      title: "Continental Appetizers & Sides",
      intro: "Small plates, big flavor. Perfect accompaniments.",
      items: [
        { name: "Papad (Roasted/Fried)", price: "₹69 / 99", description: "The perfect crunchy way to begin." },
        { name: "Peanut Masala", price: "₹70", description: "Simple, spiced, and satisfying." },
        { name: "Wafers", price: "₹129", description: "A light, crispy start to your conversation." },
        { name: "Kaju Fry", price: "₹249", tag: "Premium", tagType: "special", description: "Rich, golden fried cashews, perfect with drinks." },
        { name: "Cheese Cherry Pineapple Masala", price: "₹210", tag: "Unusual Twist", tagType: "special", description: "Sweet, savoury, and surprisingly addictive." },
        { name: "Masala Cheese Balls", price: "₹249", tag: "House Favorite", tagType: "special", description: "Gooey, cheesy, pure comfort in every bite." },
        { name: "French Fry / Masala Fry", price: "₹189 / 259", description: "Crispy classic potato cuts with spice upgrade options." },
        { name: "Veg/Onion/Paneer Pakoda", price: "₹189", description: "Crispy, golden, monsoon-evening favourite." },
        { name: "Chicken Pakoda (Boneless)", price: "₹320", description: "Crispy outside, juicy on the inside." },
        { name: "Chicken Fry (Boneless)", price: "₹299", description: "A flavourful, satisfying boneless chicken bite." },
        { name: "Fish Fry (Bone)", price: "₹249", description: "Crisp, golden, classic fish recipe." },
        { name: "Boiled Egg (3pc) / Egg Bhujia", price: "₹120 / 199", description: "Simple proteins, spiced to your liking." },
        { name: "Omlette (Spl/Cheese)", price: "₹199 / 249", description: "Comfort food, cooked to fluffy perfection." },
        { name: "Fish Finger", price: "₹299", tag: "Kid Favourite", tagType: "veg", description: "Crispy, golden breaded fish strips served with dip." },
      ],
    },
  ];

  // Scroll to section handler
  const handleScrollTo = (id: string) => {
    setActiveCategory(id);
    const targetElement = sectionsRef.current[id];
    if (targetElement) {
      const offset = 100; // Account for fixed navbar
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = targetElement.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    // GSAP scroll trigger to activate category tab dynamically based on viewport scroll position
    const ctx = gsap.context(() => {
      menuData.forEach((section) => {
        const el = sectionsRef.current[section.id];
        if (el) {
          ScrollTrigger.create({
            trigger: el,
            start: "top 120",
            end: "bottom 120",
            onEnter: () => setActiveCategory(section.id),
            onEnterBack: () => setActiveCategory(section.id),
          });

          // Stagger reveal menu items per category on scroll
          const items = el.querySelectorAll(".menu-item-row");
          gsap.fromTo(
            items,
            { opacity: 0, y: 15 },
            {
              opacity: 1,
              y: 0,
              duration: 0.6,
              stagger: 0.08,
              ease: "power2.out",
              scrollTrigger: {
                trigger: el,
                start: "top 80%",
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

      <main className="flex-grow pt-32 pb-24 bg-dark-bg">
        <div className="absolute inset-0 bg-noise pointer-events-none z-0"></div>

        {/* ====================================================
            HERO SECTION
            ==================================================== */}
        <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop mb-16 text-center relative z-10">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="ornamental-line"></div>
            <span className="font-lora italic text-xs text-gold-primary uppercase tracking-widest">
              Culinary Excellence
            </span>
            <div className="ornamental-line"></div>
          </div>
          <h1 className="font-cormorant text-4xl md:text-6xl font-bold text-glow text-gold-primary mb-6">
            The Menu. <br className="md:hidden" />Crafted With Intent.
          </h1>
          <p className="font-lora text-sm md:text-base text-text-champagne/80 max-w-2xl mx-auto leading-relaxed">
            A symphony of bold spices, tender textures, and heritage recipes reimagined for the modern palate. Discover our curated selection of signature dishes.
          </p>
        </section>

        {/* ====================================================
            TAB NAVIGATION BAR (Sticky Category Filter)
            ==================================================== */}
        <section className="sticky top-[70px] z-40 bg-dark-bg/95 border-y border-border-bronze/30 py-4 mb-16 backdrop-blur-md">
          <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop flex gap-4 overflow-x-auto no-scrollbar scroll-smooth whitespace-nowrap justify-start lg:justify-center">
            {menuData.map((category) => (
              <button
                key={category.id}
                onClick={() => handleScrollTo(category.id)}
                className={`font-lora text-xs uppercase tracking-widest px-4 py-2.5 rounded-[2px] transition-all cursor-pointer ${
                  activeCategory === category.id
                    ? "bg-gold-primary text-dark-black font-semibold shadow-[0_0_15px_rgba(212,175,55,0.15)] scale-[1.03]"
                    : "text-text-champagne/75 border border-border-bronze/40 hover:border-gold-primary hover:text-gold-primary"
                }`}
              >
                {category.title.split(" — ")[0]}
              </button>
            ))}
          </div>
        </section>

        {/* ====================================================
            MENU SECTIONS LIST
            ==================================================== */}
        <div ref={menuContainerRef} className="max-w-4xl mx-auto px-margin-mobile md:px-margin-desktop relative z-10">
          
          {menuData.map((section, sectionIdx) => (
            <div key={section.id}>
              
              <section
                id={section.id}
                ref={(el) => {
                  sectionsRef.current[section.id] = el;
                }}
                className="scroll-mt-36"
              >
                {/* Category Header */}
                <div className="text-center mb-12">
                  <h2 className="font-cormorant text-2xl md:text-4xl text-gold-primary tracking-widest uppercase">
                    {section.title}
                  </h2>
                  <p className="font-lora text-xs md:text-sm text-text-champagne/60 mt-2 italic">
                    {section.intro}
                  </p>
                </div>

                {/* Items layout */}
                <div className="space-y-8">
                  {section.items.map((item, itemIdx) => {
                    // Check if it's the signature Singh Saab Spl Soup (High-end card styling)
                    const isSignatureSoup = item.name.includes("Singh Saab Spl. Soup");

                    if (isSignatureSoup) {
                      return (
                        <div
                          key={item.name}
                          className="menu-item-row glass-panel p-6 sm:p-8 rounded-[4px] border border-gold-primary/20 relative overflow-hidden group shadow-[0_4px_20px_rgba(0,0,0,0.5)] hover:border-gold-primary/45 transition-colors"
                        >
                          {/* Absolute Badge */}
                          <div className="absolute top-0 right-0 bg-gold-primary text-dark-black font-lora font-bold text-[10px] px-3.5 py-1 rounded-bl uppercase tracking-widest">
                            {item.tag || "HOUSE SPECIAL"}
                          </div>
                          
                          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4">
                            <div className="pr-4 max-w-lg">
                              <div className="flex items-center gap-2 mb-2">
                                <Award className="text-gold-primary shrink-0" size={18} />
                                <h3 className="font-cormorant text-xl md:text-2xl text-gold-primary font-bold text-glow">
                                  {item.name}
                                </h3>
                              </div>
                              <p className="font-lora text-xs italic text-text-champagne/50 mb-3">
                                "Our name. Our recipe. Our welcome to you."
                              </p>
                              <p className="font-hanken text-xs sm:text-sm text-text-champagne/80 leading-relaxed">
                                {item.description}
                              </p>
                            </div>
                            <div className="text-right shrink-0 w-full sm:w-auto">
                              <span className="block font-lora text-[10px] text-text-champagne/50 tracking-widest uppercase mb-1">
                                Veg / Non-Veg
                              </span>
                              <span className="font-cormorant text-lg md:text-2xl text-gold-primary font-bold">
                                {item.price}
                              </span>
                            </div>
                          </div>
                        </div>
                      );
                    }

                    return (
                      <div
                        key={item.name}
                        className="menu-item-row flex flex-col gap-1 transition-all duration-300"
                      >
                        {/* Upper row: Name --- Price */}
                        <div className="flex items-end justify-between group">
                          <div className="flex items-baseline gap-2 max-w-[70%]">
                            <h3 className="font-lora text-sm sm:text-base font-medium text-text-ivory group-hover:text-gold-primary transition-colors">
                              {item.name}
                            </h3>
                            {item.tag && (
                              <span className={`text-[9px] uppercase tracking-wider px-2 py-0.5 rounded-[2px] font-bold ${
                                item.tagType === "spicy" 
                                  ? "bg-red-900/40 text-red-300 border border-red-800/40" 
                                  : item.tagType === "veg"
                                  ? "bg-green-950/40 text-green-300 border border-green-800/40"
                                  : "bg-gold-bronze/35 text-gold-primary border border-gold-primary/30"
                              }`}>
                                {item.tag}
                              </span>
                            )}
                          </div>
                          
                          {/* Dotted lines leader */}
                          <div className="dotted-leader"></div>
                          
                          <div className="font-cormorant text-base sm:text-lg text-gold-primary font-semibold shrink-0">
                            {item.price}
                          </div>
                        </div>
                        
                        {/* Description */}
                        <p className="font-hanken text-xs text-text-champagne/70 max-w-xl">
                          {item.description}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </section>

              {/* Show ornamental divider between sections */}
              {sectionIdx < menuData.length - 1 && (
                <div className="menu-category-divider my-20"></div>
              )}
            </div>
          ))}
        </div>

        {/* ====================================================
            CTA STRIP
            ==================================================== */}
        <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop mt-24 relative z-10">
          <div className="glass-panel p-8 sm:p-12 text-center rounded-[4px] border border-gold-primary/20 relative overflow-hidden shadow-[0_4px_30px_rgba(0,0,0,0.6)]">
            <div className="absolute -top-24 -left-24 w-64 h-64 bg-gold-primary/5 rounded-full blur-3xl pointer-events-none"></div>
            <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-gold-primary/5 rounded-full blur-3xl pointer-events-none"></div>
            
            <h2 className="font-cormorant text-2xl sm:text-3xl text-gold-primary uppercase tracking-widest mb-4">
              Can't decide where to start?
            </h2>
            <p className="font-lora text-sm sm:text-base text-text-champagne/75 mb-8 max-w-xl mx-auto">
              Begin with the Singh Saab Spl. Soup — it's our signature welcome to you. Or call our team to guide you through today's special pairings.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
              <a
                href="tel:09418814444"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-gold-bronze to-gold-primary text-dark-black font-lora text-xs font-bold px-8 py-4 rounded-[2px] uppercase tracking-widest hover:from-gold-accent hover:to-gold-primary transition-all duration-300 w-full sm:w-auto shadow-[0_0_20px_rgba(212,175,55,0.2)] hover:scale-[1.02]"
              >
                <Phone size={14} />
                Call: 094188 14444
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
