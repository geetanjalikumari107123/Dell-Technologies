import { useEffect, useRef, useState } from "react";
import { Play, X } from "lucide-react";
import gsap from "gsap";

import { heroBackground, heroVideo } from "../assets/images";
import AppImage from "./common/AppImage";

import "./Hero.css";

function Hero() {
  const heroRef = useRef(null);
  const modalRef = useRef(null);
  const videoRef = useRef(null);

  const [videoOpen, setVideoOpen] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const timeline = gsap.timeline();

      timeline
        .from(".hero-title", {
          y: 70,
          opacity: 0,
          duration: 1,
          ease: "power4.out",
        })
        .from(
          ".hero-subtitle",
          {
            y: 25,
            opacity: 0,
            duration: 0.7,
            ease: "power3.out",
          },
          "-=0.5"
        )
        .from(
          ".play-button",
          {
            scale: 0.7,
            opacity: 0,
            duration: 0.6,
            ease: "back.out(1.7)",
          },
          "-=0.3"
        )
        .from(
          ".price-circle",
          {
            scale: 0.7,
            opacity: 0,
            duration: 0.8,
            ease: "power3.out",
          },
          "-=0.3"
        );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const openVideo = () => {
    setVideoOpen(true);

    requestAnimationFrame(() => {
      const modal = modalRef.current;

      if (!modal) return;

      gsap.fromTo(
        modal,
        { opacity: 0 },
        {
          opacity: 1,
          duration: 0.3,
          ease: "power2.out",
        }
      );

      const container = modal.querySelector(".video-container");

      gsap.fromTo(
        container,
        {
          opacity: 0,
          scale: 0.85,
          y: 30,
        },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 0.5,
          ease: "power3.out",
        }
      );

      videoRef.current?.play().catch(() => {});
    });
  };

  const closeVideo = () => {
    const modal = modalRef.current;

    if (!modal) {
      setVideoOpen(false);
      return;
    }

    const container = modal.querySelector(".video-container");

    gsap.to(container, {
      opacity: 0,
      scale: 0.9,
      y: 20,
      duration: 0.3,
      ease: "power2.in",
    });

    gsap.to(modal, {
      opacity: 0,
      duration: 0.3,
      delay: 0.1,
      onComplete: () => {
        videoRef.current?.pause();
        setVideoOpen(false);
      },
    });
  };

  return (
    <section className="hero" ref={heroRef}>
      {/* Background */}
      <div className="hero-background">
        {/* Desktop Video */}
        <video
          className="hero-background-video"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
        >
          <source src={heroVideo} type="video/mp4" />
        </video>

        {/* Tablet + Mobile Image */}
        <AppImage
          className="hero-background-image"
          src={heroBackground}
          alt="Dell Inspiron laptop"
        />
      </div>

      <div className="hero-overlay" />

      {/* Content - Tablet & Mobile Only */}
      <div className="hero-main-content">
        <h1 className="hero-title">Dell Inspiron</h1>

        <p className="hero-subtitle">
          14 Plus 2-in-1 Laptop
        </p>

        <button
          type="button"
          className="play-button"
          onClick={openVideo}
          aria-label="Play product video"
        >
          <Play
            className="play-icon"
            size={60}
            fill="currentColor"
            strokeWidth={0}
          />
        </button>
      </div>

      {/* Price Circle */}
      <div className="price-circle">
        <div className="price-inner">
          <span className="price-label">Price</span>

          <span className="price-start">
            Starting from
          </span>

          <strong className="price">
            ₹56,000<sup>*</sup>
          </strong>
        </div>
      </div>

      {/* Footer */}
      <div className="hero-footer">
        <span>Copyright © 2025 Dell Inc.</span>
        <span>*T&Cs apply</span>
      </div>

      {/* Video Modal - Tablet & Mobile */}
      {videoOpen && (
        <div
          className="video-modal"
          ref={modalRef}
          role="dialog"
          aria-modal="true"
          aria-label="Product video"
        >
          <div className="video-container">
            <button
              type="button"
              className="video-close"
              onClick={closeVideo}
              aria-label="Close video"
            >
              <X size={24} />
            </button>

            <video
              ref={videoRef}
              className="hero-video"
              controls
              playsInline
            >
              <source src={heroVideo} type="video/mp4" />
            </video>
          </div>
        </div>
      )}
    </section>
  );
}

export default Hero;