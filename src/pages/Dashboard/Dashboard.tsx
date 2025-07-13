import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Container from "../../components/Container/Container";
import { sendAnswers } from "../../services/api";
import { useAppContext } from "../../context/AppContext";
import "./dashboard.scss";

interface DashboardProps {
  sections: {
    topic_image: string;
    type: string;
    title: string;
    content: string;
    sectionId: string;
    nextRoute: string;
  }[];
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

  const handleSectionClick = (sectionIndex: number, type: string, nextRoute: string) => {
    if (sectionIndex <= enabledSections && !type) {
      localStorage.setItem(
        `currentSection_${selectedProduct}`,
        String(sectionIndex)
      );
      navigate(`/${selectedProduct}/section${sectionIndex}`);
    } else if (type === "practical-task") {
      // If the section is a practical task, allow access regardless of enabled sections
      localStorage.setItem(
        `currentSection_${selectedProduct}`,
        String(sectionIndex)
      );
      navigate(`/${selectedProduct}${nextRoute}`);
    }
  };

  const handleRestartClick = () => {
    localStorage.removeItem(`completedSections_${selectedProduct}`);
    localStorage.removeItem(`collectedAnswers_${selectedProduct}`);
    setEnabledSections(1);
    setAllSectionsCompleted(false);
    navigate(`/${selectedProduct}/dashboard`);
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
        {selectedProduct === "hygieneh3" ? (
          <div className="dashboard__info">
            <h2 className="dashboard__heading">
              PRIVALOMOJO HIGIENOS ĮGŪDŽIŲ MOKYMO SPECIALIOSIOS PROGRAMOS
              MEDŽIAGA (KODAS H3)
            </h2>
            <p>
              Privalomojo higienos įgūdžių specialioji programa (H3) nustatyta
              Lietuvos Respublikos sveikatos apsaugos ministro 2008 m. sausio 28
              d. įsakymu Nr. V-69 „Dėl Privalomųjų pirmosios pagalbos, higienos
              įgūdžių, alkoholio, narkotinių ir psichotropinių ar kitų psichiką
              veikiančių medžiagų vartojimo poveikio žmogaus sveikatai mokymų ir
              atestavimo tvarkos aprašo ir Asmenų, kuriems privalomas sveikatos
              ir (ar) pirmosios pagalbos mokymas, profesijų ir veiklos sričių
              sąrašo, mokymo programų kodų ir mokymo periodiškumo patvirtinimo“.
            </p>
            <p>
              Ši higienos norma nustato pagrindinius grožio paslaugų sveikatos
              saugos reikalavimus. Ji privaloma visiems Lietuvos Respublikos
              juridiniams ir fiziniams asmenims, projektuojantiems, statantiems,
              įrengiantiems, rekonstruojantiems statinius ir patalpas, kuriose
              teikiamos grožio paslaugos, paslaugų teikėjams bei
              kontroliuojančioms institucijoms.
            </p>
            <p>
              <strong>H3 – Higienos pažymėjimas.</strong> Grožio paslaugas
              teikiantiems darbuotojams
            </p>
          </div>
        ) : (
          ""
        )}
        <h2 className={"dashboard__heading"}>Pasirinkite temą</h2>
        <div className={"dashboard__content"}>
          <ul className={"dashboard__list"}>
            {sections.map((section, index) => (
              <div className={"dashboard__list-item-container"} key={index}>
                <button
                  className={"dashboard__list-item"}
                  onClick={() => handleSectionClick(index + 1, section.type, section.nextRoute)}
                  disabled={index + 1 > enabledSections}
                >
                  {section.title}
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
          {/* <img
            className="dashboard__image"
            src="/assets/logo-blue.svg"
            alt="woman doing cpr"
          /> */}
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
