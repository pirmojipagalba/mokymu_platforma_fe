import React, { useState, useEffect } from "react";
import "./backToTop.scss";

const BackToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <button
      className={`back-to-top ${
        isVisible ? "back-to-top--visible" : "back-to-top--hidden"
      }`}
      onClick={scrollToTop}
    >
      <img className="back-to-top__image" src="/assets/up.svg" alt="arrow up" />
    </button>
  );
};

export default BackToTop;
