import React from "react";
import Navbar from "../../subcomponent/Navbar/navbar";
import HeroSubComp from "../../subcomponent/hero/hero";
import Section from "../../subcomponent/componetsSection/section";
import Footer from "./Footer";

const Home = () => {
  return (
    <div>
      <HeroSubComp />
      <div className="">
        <Section />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
