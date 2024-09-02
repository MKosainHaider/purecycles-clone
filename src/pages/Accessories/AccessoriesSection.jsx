import React from 'react';
import BarTape from '../../components/Accessories/BarTape';
import ProFootstrap from '../../components/Accessories/ProFootstrap';
import BullhornBars from '../../components/Accessories/BullhornBars';
import AssortmentOne from '../../components/Accessories/AssortmentOne';
import PureFixDropBars from '../../components/Accessories/PureFixDropBars';
import WaterBottleCage from '../../components/Accessories/WaterBottleCage';
import NylonPlatformPedals from '../../components/Accessories/NylonPlatformPedals';
import ThickslickPure from '../../components/Accessories/ThickslickPure';
import PureFixRiserBars from '../../components/Accessories/PureFixRiserBars';
import PrestaValveAdapter from '../../components/Accessories/PrestaValveAdapter';
import ThreadlessStem from '../../components/Accessories/ThreadlessStem';
import WoodenCityCrate from '../../components/Accessories/WoodenCityCrate';

const AccessoriesSection = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container px-4 mx-auto md:px-8">
        <h2 className="mb-8 text-4xl font-bold text-center">ACCESSORIES</h2>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <BarTape />
          <ProFootstrap />
          <BullhornBars />
          <AssortmentOne />
          <PureFixDropBars />
          <WaterBottleCage />
          <NylonPlatformPedals />
          <ThickslickPure />
          <PureFixRiserBars />
          <PrestaValveAdapter />
          <ThreadlessStem />
          <WoodenCityCrate />
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

export default AccessoriesSection;
