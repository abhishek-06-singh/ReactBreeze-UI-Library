import React, { useState, useEffect } from "react";
import HeroSubComp from "../../subcomponent/hero/hero";
import Section from "../../subcomponent/componetsSection/section";
import Navbar from "../../subcomponent/Navbar/navbar";
import Footer from "./Footer";
import "./Home.css";
import HomeMain from "../../subcomponent/hero/HomeMain";

const Home = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      {/* <Navbar /> */}
      {/* <HeroSubComp /> */}
      <HomeMain />
      <Section />
      <Footer />
    </div>
  );
};

export default Home;
