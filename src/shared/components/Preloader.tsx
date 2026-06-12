"use client";

import React, { useState, useEffect } from "react";

/**
 * Preloader Component for The Singh Saab.
 * Features:
 * - Direct representation of the user's custom preloader animation.
 * - Rotating gold rings and SVG line-art path-drawing animation.
 * - Auto fades out after the animation cycle (3.2 seconds) or on window load.
 * - Removes itself from the DOM tree completely once faded to avoid blocking interactions.
 */
export default function Preloader() {
  const [fade, setFade] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    // Lock body scrolling while preloader is active to prevent early page scrolling
    document.body.style.overflow = "hidden";

    let hasLoaded = false;
    let minTimeElapsed = false;

    // Helper function to handle the fade out transition
    const triggerFadeOut = () => {
      setFade(true);
      // Re-enable scrolling as the preloader begins to fade out
      document.body.style.overflow = "";

      // Completely unmount and remove the preloader element after transition completes (700ms)
      setTimeout(() => {
        setHidden(true);
      }, 700);
    };

    // Callback that evaluates if both the page assets are loaded and the logo drawing animation has completed
    const evaluatePreloaderStatus = () => {
      if (hasLoaded && minTimeElapsed) {
        triggerFadeOut();
      }
    };

    // Window load handler
    const handlePageLoadComplete = () => {
      hasLoaded = true;
      evaluatePreloaderStatus();
    };

    // Enforce a minimum display time of 3.2 seconds to allow the SVG line drawing and text fill animations to play out beautifully
    const minDisplayTimer = setTimeout(() => {
      minTimeElapsed = true;
      evaluatePreloaderStatus();
    }, 3200);

    // If the browser has already completed loading, set status to loaded
    if (document.readyState === "complete") {
      hasLoaded = true;
      evaluatePreloaderStatus();
    } else {
      // Otherwise, wait for the window load event to fire
      window.addEventListener("load", handlePageLoadComplete);
    }

    // Cleanup function to restore body styles and clear timers to prevent memory leaks
    return () => {
      document.body.style.overflow = "";
      clearTimeout(minDisplayTimer);
      window.removeEventListener("load", handlePageLoadComplete);
    };
  }, []);

  if (hidden) return null;

  return (
    <div
      id="preloader"
      className={fade ? "fade-out" : ""}
      role="status"
      aria-label="Loading The Singh Saab experience"
    >
      <div className="loader-wrap">
        {/* Animated outer gold rings */}
        <div className="ring"></div>
        <div className="ring ring-2"></div>

        {/* Central Logo SVG with path-drawing animations */}
        <div className="logo-svg">
          <svg viewBox="0 0 300 340" xmlns="http://www.w3.org/2000/svg">
            
            {/* TURBAN PATTERNS */}
            <g className="turban-group">
              <path
                className="draw turban"
                d="M150,60 C110,40 60,55 50,100 C45,125 60,140 85,148 C110,155 130,150 150,135 C170,150 190,155 215,148 C240,140 255,125 250,100 C240,55 190,40 150,60 Z M150,60 C140,75 140,110 150,135 C160,110 160,75 150,60 Z"
                pathLength="1"
              />
              <path
                className="fill-fade turban-fill"
                d="M150,60 C110,40 60,55 50,100 C45,125 60,140 85,148 C110,155 130,150 150,135 C170,150 190,155 215,148 C240,140 255,125 250,100 C240,55 190,40 150,60 Z M150,60 C140,75 140,110 150,135 C160,110 160,75 150,60 Z"
                fillRule="evenodd"
              />
            </g>

            {/* HINDI WORDMARK - "सिंह" */}
            <text
              className="fill-fade text-hindi-fill"
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
              className="draw text-hindi"
              x="150"
              y="195"
              textAnchor="middle"
              fontFamily="Noto Sans Devanagari, Arial, sans-serif"
              fontSize="34"
              fontWeight="700"
              strokeWidth="0.6"
              pathLength="1"
            >
              सिंह
            </text>

            {/* ENGLISH WORDMARK - "SAAB" */}
            <text
              className="fill-fade text-saab-fill"
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
            <text
              className="draw text-saab"
              x="150"
              y="232"
              textAnchor="middle"
              fontFamily="Georgia, serif"
              fontSize="36"
              fontWeight="800"
              letterSpacing="3"
              strokeWidth="0.6"
              pathLength="1"
            >
              SAAB
            </text>

            {/* BEARD PATTERNS */}
            <g className="beard-group">
              <path
                className="draw beard"
                d="M150,248 C115,250 100,265 95,290 C92,305 95,318 105,330 C112,300 122,288 135,282 C140,300 145,312 150,320 C155,312 160,300 165,282 C178,288 188,300 195,330 C205,318 208,305 205,290 C200,265 185,250 150,248 Z"
                pathLength="1"
              />
              <path
                className="fill-fade beard-fill"
                d="M150,248 C115,250 100,265 95,290 C92,305 95,318 105,330 C112,300 122,288 135,282 C140,300 145,312 150,320 C155,312 160,300 165,282 C178,288 188,300 195,330 C205,318 208,305 205,290 C200,265 185,250 150,248 Z"
              />
            </g>

          </svg>
        </div>

        {/* Tagline & Progress Indicator */}
        <div className="tagline">
          Every detail built <span>with soul</span>
        </div>
        <div className="progress-track">
          <div className="progress-fill"></div>
        </div>
      </div>
    </div>
  );
}
