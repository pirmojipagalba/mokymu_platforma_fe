import React from "react";
import Container from "../../components/Container/Container";
import { useNavigate } from "react-router-dom";
import "./thankYouPage.scss";

const ThankYouPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <div className="thank-you-page">
        <h2 className="thank-you-page__heading">Ačiū!</h2>
        <p className="thank-you-page__message">Atsakymai į temos testo klausimus užregistruoti.</p>
        <button className="thank-you-page__back" onClick={() => navigate("/dashboard")}>
          Atgal į temų sąrašą
        </button>
      </div>
    </Container>
  );
};

export default ThankYouPage;
