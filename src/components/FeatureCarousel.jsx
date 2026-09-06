import { useEffect, useState } from "react";
import { ShieldCheck, Sun, ChevronLeft, ChevronRight } from "lucide-react";
import "./FeatureCarousel.css";

const slides = [
  {
    id: 1,
    title: "Secure and reliable",
    description:
      "Experience powerful, immersive sound designed to keep you connected wherever life takes you.",
    image: "/assets/hero-1.jpg",
    type: "shield",
  },
  {
    id: 2,
    title: "New AI expriences",
    description:
      "Sleek 14-inch 2-in-1 with on-device Copilot+ powered by Intel® Core™ Ultra processors, with stunning performance that powers the newest AI experiences.",
    image: "/assets/hero-2.jpg",
    type: "ai",
  },
  {
    id: 3,
    title: "Built-in sustainability",
    description:
      "Sleek 14-inch 2-in-1 with on-device Copilot+ powered by Intel® Core™ Ultra processors, with stunning performance that powers the newest AI experiences.",
    image: "/assets/hero-3.jpg",
    type: "leaf",
  },
  {
    id: 4,
    title: "Powered by four modes",
    description:
      "Enjoy a seamless experience that adapts beautifully to the way you work, create and explore.",
    image: "/assets/hero-4.jpg",
    type: "sun",
  },
];

const FeatureCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setActiveIndex((prev) =>
      prev === 0 ? slides.length - 1 : prev - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % slides.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  const renderIcon = (type) => {
    switch (type) {
      case "shield":
        return <ShieldCheck size={68} strokeWidth={1.5} />;

      case "ai":
        return (
          <img
            src="/assets/ai.png"
            alt="AI"
            className="feature-custom-icon"
          />
        );

      case "leaf":
        return (
          <img
            src="/assets/leaf.png"
            alt="Sustainability"
            className="feature-custom-icon"
          />
        );

      case "sun":
        return <Sun size={68} strokeWidth={1.5} />;

      default:
        return null;
    }
  };

  return (
    <section className="feature-carousel">
      <div className="feature-slides">
        {slides.map((slide, index) => (
          <article
            className={`feature-slide ${
              index === activeIndex ? "active" : ""
            }`}
            key={slide.id}
          >
            {/* Background Image */}
            <div className="feature-media">
              <img src={slide.image} alt={slide.title} />
              <div className="feature-overlay" />
            </div>

            {/* Content */}
            <div className="feature-content">
              <div className="feature-content-inner">

                <div className="feature-icon">
                  {renderIcon(slide.type)}
                </div>

                <h2>{slide.title}</h2>

                <div className="feature-line" />

                <p className="feature-description">
                  {slide.description}
                </p>

              </div>
            </div>
          </article>
        ))}
      </div>

      {/* PREVIOUS / NEXT ARROWS */}
      <div className="feature-navigation">

        <button
          className="feature-arrow feature-prev"
          onClick={prevSlide}
          aria-label="Previous slide"
        >
          <ChevronLeft size={24} />
        </button>

        <button
          className="feature-arrow feature-next"
          onClick={nextSlide}
          aria-label="Next slide"
        >
          <ChevronRight size={24} />
        </button>

      </div>

      {/* Slide Counter */}
      <div className="feature-counter">
        <span>
          {String(activeIndex + 1).padStart(2, "0")}
        </span>

        <span className="counter-line" />

        <span>
          {String(slides.length).padStart(2, "0")}
        </span>
      </div>
    </section>
  );
};

export default FeatureCarousel;