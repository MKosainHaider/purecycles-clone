import React from "react";
import AdventureAL from "../../components/Products/AdventureAL";
import CityStepThrough from "../../components/Products/CityStepThrough";
import Charter from "../../components/Products/Charter";
import UrbanCommuter from "../../components/Products/UrbanCommuter";

const FeaturedBikes = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4 md:px-8">
        <h2 className="text-center text-4xl font-bold mb-8">FEATURED BIKES</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <AdventureAL />
          <CityStepThrough />
          <Charter />
          <UrbanCommuter />
        </div>
        <div className="text-center mt-8">
          <button className="bg-[#b5985a] text-white px-8 py-2 font-bold">
            VIEW ALL
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedBikes;
