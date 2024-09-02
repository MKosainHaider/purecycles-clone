import React from "react";
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";


const HomePage = () => {
  return (
    <div>
      <NavBar />
      <HeroSection />
      <FeaturedBikes />
      <VideoSection />
      <FeaturedCollections />
      <Footer />
    </div>
  );
};

export default HomePage;
