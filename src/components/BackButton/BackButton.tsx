import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useAppContext } from "../../context/AppContext";

import "./backbutton.scss";

const BackButton: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { selectedProduct } = useAppContext();

  const handleBack = () => {
    const path = location.pathname;
    if (path.startsWith("/questionnaire")) {
      const sectionNumber = path.replace("/questionnaire", "");
      navigate(`/${selectedProduct}/section${sectionNumber}`);
    } else if (path.startsWith("/section")) {
      navigate(`/${selectedProduct}/dashboard`);
    } else {
      navigate(-1);
    }
  };

  return (
    <button className="back-button" onClick={handleBack}>
      <img
        className="back-button__arrow"
        src="/assets/arrow-left.svg"
        alt="chevron pointing left"
      />
      Grižti atgal
    </button>
  );
};

export default BackButton;
