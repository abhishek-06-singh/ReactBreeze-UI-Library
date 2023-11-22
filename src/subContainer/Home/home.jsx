import React, { useState, useEffect } from "react";
import HeroSubComp from "../../subcomponent/hero/hero";
import Section from "../../subcomponent/componetsSection/section";
import Footer from "./Footer";
import "./Home.css";

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
    <div className="parallax-container">
      <div
        className="hero-section"
        style={{ top: `${scrollPosition * 0.3}px` }}
      >
        <HeroSubComp />
      </div>
      <div className="content-section">
        <Section />
      </div>
      {/* <Footer  /> */}
    </div>
  );
};

export default Home;
