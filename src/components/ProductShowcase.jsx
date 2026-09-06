import { useEffect, useState } from "react";
import "./ProductShowcase.css";

const products = [
  {
    id: 1,
    title: "Dell XPS 13",
    subtitle: "Power meets effortless creativity.",
    priceLabel: "Starting from",
    price: "₹53,364",
    emi: "EMI starting at ₹2,224",
    image: "/assets/product-xps13.png",
    imageClass: "xps-product",
    Scale: 1,
  },

  {
    id: 2,
    title: "ACCESSORIES",
    subtitle: "Dell Pro 7-in-1 USB-C Travel hub",
    priceLabel: "Starting from",
    price: "₹9,999/-",
    emi: "EMI starting at ₹1,999/-",
    image: "/assets/product-adapter.png",
    imageClass: "adapter-product",
    Scale: 1,
  },

  {
    id: 3,
    title: "ACCESSORIES",
    subtitle: "USB-C Travel Hub",
    priceLabel: "Starting from",
    price: "₹9,999/-",
    emi: "EMI starting at ₹1,999/-",
    image: "/assets/product-travelhub.png",
    imageClass: "hub-product",
    Scale: 0.7,
  },

  {
    id: 4,
    title: "ACCESSORIES",
    subtitle: "USB-C Travel Hub",
    priceLabel: "Starting from",
    price: "₹9,999/-",
    emi: "EMI starting at ₹1,999/-",
    image: "/assets/product-dock.png",
    imageClass: "dock-product",
    Scale: 1,
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

      const scrolled = Math.max(
        0,
        Math.min(-rect.top, scrollableDistance)
      );

      const progress =
        scrollableDistance > 0
          ? scrolled / scrollableDistance
          : 0;

      const index = Math.min(
        products.length - 1,
        Math.floor(progress * products.length)
      );

      setActiveIndex(index);
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    handleScroll();

    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      className="product-showcase"
      style={{
        "--total-slides": products.length,
      }}
    >
      <div className="product-sticky">

        {/* Background */}
        <div className="showcase-background">
          <div className="background-glow" />
          <div className="background-grid" />
        </div>

        {/* TOP RIGHT QR DECORATION */}
        <div className="showcase-qr">
          <img
            src="/assets/qr.png"
            alt=""
          />
        </div>


        {/* Products */}
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

              {/* PRODUCT IMAGE */}
              <div className="product-image-area">
                <div className="product-image-glow" />

                <img
                  src={product.image}
                  alt={product.title}
                  style={{
                    transform: `scale(${product.Scale})`,
                  }}
                  className={`product-image ${product.imageClass}`}
                />
              </div>

              {/* PRODUCT CONTENT */}
              <div className="product-content">

                <span className="product-category">
                  {product.category}
                </span>

                <h2 className="product-title">
                  {product.title}
                </h2>

                <div className="product-line" />

                <p className="product-subtitle">
                  {product.subtitle}
                </p>

                <div className="product-price-area">

                  {product.priceLabel && (
                    <span className="price-label">
                      {product.priceLabel}
                    </span>
                  )}

                  <h4 className="product-price">
                    {product.price}
                  </h4>

                  {product.emi && (
                    <p className="product-emi">
                      {product.emi}
                    </p>
                  )}

                </div>

                <button className="product-button">
                  Explore Product
                  <span>↗</span>
                </button>

              </div>
            </div>
          ))}
        </div>

        {/* Progress Navigation */}
        {/* <div className="product-progress">
          {products.map((product, index) => (
            <div
              key={product.id}
              className={`progress-bar
                ${index === activeIndex ? "active" : ""}
                ${index < activeIndex ? "completed" : ""}
              `}
            >
              <span />
            </div>
          ))}
        </div> */}

        {/* Side Text */}
        <div className="vertical-text">
          DELL TECHNOLOGY
        </div>

      </div>
    </section>
  );
};

export default ProductShowcase;