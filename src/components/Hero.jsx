import { useEffect, useRef } from "react";
import gsap from "gsap";
import { heroVideo } from "../assets/images";
import "./Hero.css";

function Hero() {
  const heroRef = useRef(null);

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

  return (
    <section className="hero" ref={heroRef}>
      
      {/* Video Background */}
      <div className="hero-background">
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
      </div>

      {/* Overlay */}
      <div className="hero-overlay" />

      {/* Main Content */}
      {/* <div className="hero-main-content">
        <h1 className="hero-title">
          Dell Inspiron
        </h1>

        <p className="hero-subtitle">
          14 Plus 2-in-1 Laptop
        </p>
      </div> */}

      {/* Price Circle */}
      <div className="price-circle">
        <div className="price-inner">
          <span className="price-label">
            Price
          </span>

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

    </section>
  );
}

export default Hero;