import React from "react";
import Navbar from "../../subcomponent/Navbar/navbar";
import HeroSubComp from "../../subcomponent/hero/hero";
import Section from "../../subcomponent/componetsSection/section";

const Home = () => {
  return (
    <div>
      <HeroSubComp />
      <div className="px-40">
        <Section />
      </div>
    </div>
  );
};

export default Home;
