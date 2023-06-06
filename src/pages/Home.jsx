import React from "react";
import Carousel from "../components/Carousel";
import Evolve from "../components/home/Evolve";
import Leaders from "../components/home/Leaders";
import Stats from "../components/home/Stats";
import WhyUs from "../components/home/WhyUs";

const Home = () => {
  return (
    <div className="w-full flex flex-col z-0">
      {/* section one  */}
      <Carousel/>
      {/* section one end  */}
      {/* section two  */}
      <WhyUs/>
      {/* section two end  */}
      {/* section three  */}
      <Evolve/>
      {/* section three end  */}
      {/* section four  */}
      <Stats/>
      {/* section four end  */}
      {/* section five  */}
      <Leaders/>
      {/* section five end  */}
    </div>
  );
};

export default Home;
