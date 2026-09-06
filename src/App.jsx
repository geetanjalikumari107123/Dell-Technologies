import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Intro from "./components/Intro";
import FeatureCarousel from "./components/FeatureCarousel";
import ProductShowcase from "./components/ProductShowcase";
import SpecialOffers from "./components/SpecialOffers";

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <Intro />
        <FeatureCarousel />
        <ProductShowcase />
        <SpecialOffers />
      </main>

    </>
  );
}

export default App;