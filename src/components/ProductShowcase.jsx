import { useEffect, useState } from "react";
import "./ProductShowcase.css";

const products = [
  {
    id: 1,
    category: "PREMIUM LAPTOP",
    title: "Dell XPS 13",
    subtitle: "Power meets effortless creativity.",
    priceLabel: "Starting from",
    price: "₹53,364",
    emi: "EMI starting at ₹2,224",
    image: "/assets/product-xps13.png",
    imageClass: "xps-product",
    scale: 1,
    accent: "#6d8cff",
  },
  {
    id: 2,
    category: "ACCESSORIES",
    title: "Dell Pro 7-in-1",
    subtitle: "USB-C Travel Hub built for productivity anywhere.",
    priceLabel: "Starting from",
    price: "₹9,999",
    emi: "EMI starting at ₹1,999",
    image: "/assets/product-adapter.png",
    imageClass: "adapter-product",
    scale: 1,
    accent: "#5cc8ff",
  },
  {
    id: 3,
    category: "ACCESSORIES",
    title: "USB-C Travel Hub",
    subtitle: "Expand your workspace without compromising portability.",
    priceLabel: "Starting from",
    price: "₹9,999",
    emi: "EMI starting at ₹1,999",
    image: "/assets/product-travelhub.png",
    imageClass: "hub-product",
    scale: 0.7,
    accent: "#9b7bff",
  },
  {
    id: 4,
    category: "ACCESSORIES",
    title: "Dell Dock",
    subtitle: "One powerful connection for your entire workspace.",
    priceLabel: "Starting from",
    price: "₹9,999",
    emi: "EMI starting at ₹1,999",
    image: "/assets/product-dock.png",
    imageClass: "dock-product",
    scale: 1,
    accent: "#3dd6c6",
  },
];

const ProductShowcase = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.querySelector(".product-showcase");

      if (!section) return;

      const rect = section.getBoundingClientRect();
      const sectionHeight = section.offsetHeight;
      const viewportHeight = window.innerHeight;

      const scrollableDistance = sectionHeight - viewportHeight;

      const scrolled = Math.max(0, Math.min(-rect.top, scrollableDistance));

      const progress =
        scrollableDistance > 0 ? scrolled / scrollableDistance : 0;

      const index = Math.min(
        products.length - 1,
        Math.floor(progress * products.length),
      );

      setActiveIndex(index);
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const activeProduct = products[activeIndex];

  return (
    <section id="products"
      className="product-showcase"
      style={{
        "--total-slides": products.length,
        "--accent": activeProduct.accent,
      }}
    >
      <div className="product-sticky">
        {/* PREMIUM BACKGROUND */}
        <div className="showcase-background">
          <div className="background-grid" />
          <div className="background-glow glow-one" />
          <div className="background-glow glow-two" />
          <div className="background-noise" />
        </div>

        {/* QR */}
        <div className="showcase-qr">
          <img src="/assets/qr.png" alt="QR Code" />
        </div>

        {/* PRODUCTS */}
        <div className="products-wrapper">
          {products.map((product, index) => (
            <div
              key={product.id}
              className={`product-slide
            ${index === activeIndex ? "active" : ""}
            ${index < activeIndex ? "previous" : ""}
            ${index > activeIndex ? "next" : ""}
          `}
            >
              {/* IMAGE */}
              <div className="product-image-area">
                <div className="product-orbit orbit-one" />
                <div className="product-orbit orbit-two" />

                <div className="product-image-glow" />

                <div className="image-reflection" />

                <img
                  src={product.image}
                  alt={product.title}
                  className={`product-image ${product.imageClass}`}
                  style={{
                    "--product-scale": product.scale,
                  }}
                />
              </div>

              {/* CONTENT */}
              <div className="product-content">
                <div className="category-row">
                  <span className="product-category">{product.category}</span>

                  <span className="category-dot" />
                </div>

                <h2 className="product-title">{product.title}</h2>

                <div className="product-line">
                  <span />
                </div>

                <p className="product-subtitle">{product.subtitle}</p>

                <div className="product-price-area">
                  <span className="price-label">{product.priceLabel}</span>

                  <h4 className="product-price">{product.price}</h4>

                  <p className="product-emi">{product.emi}</p>
                </div>

                <div className="product-actions">
                  <button className="product-button">
                    <span>Explore Product</span>

                    <span className="button-arrow">↗</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* VERTICAL BRAND */}
        <div className="vertical-text">DELL TECHNOLOGIES</div>

        {/* SCROLL INDICATOR */}
        <div className="scroll-indicator">
          <span>SCROLL TO EXPLORE</span>

          <div className="scroll-mouse">
            <i />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
