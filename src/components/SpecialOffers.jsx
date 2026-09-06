import "./SpecialOffers.css";

const SpecialOffers = () => {
  return (
    <section className="special-offers">
      
      {/* Background Elements */}
      <div className="offer-bg-glow glow-one"></div>
      <div className="offer-bg-glow glow-two"></div>
      <div className="offer-grid"></div>

      {/* Decorative Circles */}
      <div className="offer-circle circle-one"></div>
      <div className="offer-circle circle-two"></div>

      <div className="offer-container">

        {/* LEFT PRODUCT AREA */}
        <div className="offer-product-area">

          {/* Special Badge */}
          <div className="special-badge">
            <span className="badge-dot"></span>
            LIMITED TIME OFFER
          </div>

          {/* Product Glow */}
          <div className="headphone-glow"></div>

          <img
            src="/assets/product-jbl.png"
            alt="JBL Tune 770NC Headphones"
            className="headphone-image"
          />

        </div>


        {/* RIGHT CONTENT */}
        <div className="offer-content">

          <div className="offer-top-label">
            EXCLUSIVE DEAL
          </div>

          <h2>
            SPECIAL
            <span> OFFERS</span>
          </h2>

          <div className="title-accent"></div>

          <p className="offer-description">
            JBL Tune 770NC Headphones
          </p>

          <p className="offer-subtext">
            Premium sound. Powerful bass. All-day comfort.
          </p>


          {/* PRICE CARD */}
          <div className="offer-price-card">

            <div className="price-card-top">
              <span>ORIGINAL PRICE</span>
              <strong>₹9,999/-</strong>
            </div>

            <div className="price-divider"></div>

            <div className="offer-price-main">
              <span>GET IT AT</span>

              <h3>₹1,999/-*</h3>

              <small>Special promotional offer</small>
            </div>

          </div>


        </div>

      </div>


      {/* Bottom Offer Strip */}
      <div className="offer-bottom-strip">

        <div>
          <span>⚡</span>
          LIMITED PERIOD DEAL
        </div>

        <div>
          <span>✓</span>
          PREMIUM AUDIO EXPERIENCE
        </div>

        <div>
          <span>★</span>
          EXCLUSIVE SPECIAL OFFER
        </div>

      </div>

    </section>
  );
};

export default SpecialOffers;