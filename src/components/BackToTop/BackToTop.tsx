import React, { useState, useEffect } from "react";
import "./backToTop.scss";

const BackToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isAboveFooter, setIsAboveFooter] = useState(false);

  const handleScroll = () => {
    const scrollY = window.scrollY;
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;

    if (scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }

    if (scrollY + windowHeight >= documentHeight - 147) {
      setIsAboveFooter(true);
    } else {
      setIsAboveFooter(false);
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
      } ${isAboveFooter ? "back-to-top--above-footer" : ""}`}
      onClick={scrollToTop}
    >
      <img className="back-to-top__image" src="/assets/up.svg" alt="arrow up" />
    </button>
  );
};

export default BackToTop;
