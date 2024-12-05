import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Newsletter from "./components/Newsletter";
import Analytics from "./components/Analytics";
import Cards from "./components/Cards";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Analytics />
      <Newsletter />
      <Cards />
      <Footer />
    </div>
  );
};

export default App;
