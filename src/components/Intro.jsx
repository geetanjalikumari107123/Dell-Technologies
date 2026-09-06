import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { xpsProduct } from "../assets/images";
import AppImage from "./common/AppImage";

import "./Intro.css";

gsap.registerPlugin(ScrollTrigger);

function Intro() {
  const introRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: introRef.current,
          start: "top 75%",
          toggleActions: "play none none reverse",
        },
      });

      timeline
        .from(".intro-content", {
          x: -100,
          opacity: 0,
          duration: 1,
          ease: "power4.out",
        })
        .from(
          ".product-glow",
          {
            scale: 0,
            opacity: 0,
            duration: 1,
            ease: "power3.out",
          },
          "-=0.7"
        )
        .from(
          ".intro-image img",
          {
            x: 150,
            y: 80,
            rotation: 12,
            opacity: 0,
            scale: 0.8,
            duration: 1.4,
            ease: "power4.out",
          },
          "-=0.8"
        );

      /* Floating animation */
      gsap.to(".intro-image img", {
        y: -18,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      /* Rotating background */
      gsap.to(".product-ring", {
        rotation: 360,
        duration: 18,
        repeat: -1,
        ease: "none",
      });
    }, introRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="ai" className="intro" ref={introRef}>
      <div className="intro-container">

        {/* LEFT CONTENT */}
        <div className="intro-content">
          <p className="section-label">
            DESIGNED FOR LIFE
          </p>

          <h2>
            One device.
            <br />
            Endless possibilities.
          </h2>

          <p className="intro-text">
            Whether you're creating, working, exploring,
            or relaxing, Inspiron adapts to the way you live.
          </p>

          <button className="intro-button">
            Explore the XPS
          </button>
        </div>

        {/* RIGHT PRODUCT */}
        <div className="intro-image">

          <div className="product-glow"></div>

          <div className="product-ring"></div>

          <div className="product-ring product-ring-two"></div>

          <AppImage
            src={xpsProduct}
            alt="Dell XPS 13 Laptop"
          />

        </div>

      </div>
    </section>
  );
}

export default Intro;
