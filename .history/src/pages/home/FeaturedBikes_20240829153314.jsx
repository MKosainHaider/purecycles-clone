import React from "react";
import AdventureAL from "../../components/Products/AdventureAL";
import CityStepThrough from "../../components/Products/CityStepThrough";
import Charter from "../../components/Products/Charter";
import UrbanCommuter from "../../components/Products/UrbanCommuter";

const FeaturedBikes = () => {
  return (
    <section className="py-16">
      <div className="container px-4 mx-auto md:px-8">
        <h2 className="mb-8 text-4xl font-bold text-center">FEATURED BIKES</h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <AdventureAL />
          <CityStepThrough />
          <Charter />
          <UrbanCommuter />
        </div>
        <div className="mt-8 text-center">
          <button className="bg-[#b5985a] text-white px-8 py-2 font-bold">
            VIEW ALL
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedBikes;
