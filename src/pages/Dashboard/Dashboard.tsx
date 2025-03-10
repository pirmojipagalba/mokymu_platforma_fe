import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Container from "../../components/Container/Container";
import { sendAnswers } from "../../services/api";
import { useAppContext } from "../../context/AppContext";
import "./dashboard.scss";

interface DashboardProps {
  sections: string[];
}

const Dashboard: React.FC<DashboardProps> = ({ sections }) => {
  const navigate = useNavigate();
  const { selectedProduct } = useAppContext();
  const [enabledSections, setEnabledSections] = useState<number>(1);
  const [allSectionsCompleted, setAllSectionsCompleted] =
    useState<boolean>(false);

  useEffect(() => {
    const completedSections = localStorage.getItem(
      `completedSections_${selectedProduct}`
    );
    if (completedSections) {
      setEnabledSections(Number(completedSections) + 1);
    } else {
      setEnabledSections(1); // Ensure the first section is enabled if no completed sections are found
    }
  }, [selectedProduct]);

  const handleSectionClick = (sectionIndex: number) => {
    if (sectionIndex <= enabledSections) {
      localStorage.setItem(
        `currentSection_${selectedProduct}`,
        String(sectionIndex)
      );
      navigate(`/section${sectionIndex}`);
    }
  };

  const handleRestartClick = () => {
    localStorage.removeItem(`completedSections_${selectedProduct}`);
    localStorage.removeItem(`collectedAnswers_${selectedProduct}`);
    setEnabledSections(1);
    setAllSectionsCompleted(false);
    navigate("/dashboard");
  };

  useEffect(() => {
    if (enabledSections > sections.length) {
      setAllSectionsCompleted(true);
      const collectedAnswers = JSON.parse(
        localStorage.getItem(`collectedAnswers_${selectedProduct}`) || "[]"
      );
      if (collectedAnswers.length > 0) {
        sendAnswers(collectedAnswers).then(() => {
          localStorage.removeItem(`collectedAnswers_${selectedProduct}`); // Clear local storage after sending answers
        });
      }
    }
  }, [enabledSections, sections.length, selectedProduct]);

  return (
    <Container type="wide">
      <div className={"dashboard"}>
        {allSectionsCompleted && (
          <>
            <div className="dashboard__message-container">
              <p className="dashboard__message">
                Testas atliktas. Su jumis susisieks <strong>Firstaid.lt</strong>{" "}
                konsultantė(-as) testo rezultatams aptarti.
              </p>
            </div>
          </>
        )}
        <h2 className={"dashboard__heading"}>Pasirinkite temą</h2>
        <div className={"dashboard__content"}>
          <ul className={"dashboard__list"}>
            {sections.map((section, index) => (
              <div className={"dashboard__list-item-container"} key={index}>
                <button
                  className={"dashboard__list-item"}
                  onClick={() => handleSectionClick(index + 1)}
                  disabled={index + 1 > enabledSections}
                >
                  {section}
                </button>
                {index + 1 < enabledSections && (
                  <img
                    className="dashboard__done"
                    src="/assets/checkmark.svg"
                    alt="checkmark"
                  />
                )}
              </div>
            ))}
          </ul>
          <img
            className="dashboard__image"
            src="/assets/cpr.png"
            alt="woman doing cpr"
          />
        </div>
        {allSectionsCompleted && (
          <button
            onClick={handleRestartClick}
            className="dashboard__restart-button"
          >
            Spręsti dar kartą
          </button>
        )}
      </div>
    </Container>
  );
};

export default Dashboard;
