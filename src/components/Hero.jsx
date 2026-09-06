import { useEffect, useRef, useState } from "react";
import { Play, X } from "lucide-react";
import gsap from "gsap";
import { heroBackground, heroVideo } from "../assets/images";
import AppImage from "./common/AppImage";

import "./Hero.css";

function Hero() {
  const heroRef = useRef(null);
  const videoModalRef = useRef(null);
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
            scale: 0.5,
            opacity: 0,
            duration: 0.8,
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
          "-=0.4"
        );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  // Open video
  const openVideo = () => {
    setVideoOpen(true);

    setTimeout(() => {
      const modal = videoModalRef.current;

      gsap.fromTo(
        modal,
        {
          opacity: 0,
        },
        {
          opacity: 1,
          duration: 0.4,
          ease: "power2.out",
        }
      );

      gsap.fromTo(
        ".video-container",
        {
          scale: 0.8,
          opacity: 0,
          y: 40,
        },
        {
          scale: 1,
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: "power4.out",
        }
      );

      videoRef.current?.play();
    }, 50);
  };

  // Close video
  const closeVideo = () => {
    const modal = videoModalRef.current;
    const container = modal.querySelector(".video-container");

    gsap.to(container, {
      scale: 0.85,
      opacity: 0,
      y: 30,
      duration: 0.4,
      ease: "power3.in",
    });

    gsap.to(modal, {
      opacity: 0,
      duration: 0.4,
      delay: 0.15,
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
        <AppImage
          src={heroBackground}
          alt="Dell Inspiron lifestyle"
        />
      </div>

      <div className="hero-overlay" />

      {/* Main Content */}
      <div className="hero-main-content">
        <h1 className="hero-title">Dell Inspiron</h1>

        <p className="hero-subtitle">
          14 Plus 2-in-1 Laptop
        </p>

        <button
          className="play-button"
          onClick={openVideo}
          aria-label="Play video"
        >
          <Play
            className="play-icon"
            size={120}
            fill="white"
            color="white"
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
            ₹56000<sup>*</sup>
          </strong>
        </div>
      </div>

      {/* Footer */}
      <div className="hero-footer">
        <span>Copyright © 2025 Dell Inc.</span>
        <span>*T&Cs apply</span>
      </div>

      {/* VIDEO MODAL */}
      {videoOpen && (
        <div
          className="video-modal"
          ref={videoModalRef}
        >
          <div className="video-container">
            <button
              className="video-close"
              onClick={closeVideo}
              aria-label="Close video"
            >
              <X size={28} />
            </button>

            <video
              ref={videoRef}
              className="hero-video"
              controls
              playsInline
            >
              <source
                src={heroVideo}
                type="video/mp4"
              />
            </video>
          </div>
        </div>
      )}
    </section>
  );
}

export default Hero;
