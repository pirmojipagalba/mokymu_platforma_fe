import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import Container from "../../components/Container/Container";
import Table from "../../components/Table/Table";
import { useAppContext } from "../../context/AppContext";
import "./section.scss";
import PremisesTable from "../../components/PremisesTable/PremisesTable";
import IntervalTable from "../../components/IntervalTable/IntervalTable";
import TemperatureTable from "../../components/TemperatureTable/TemperatureTable";
import PlantTable from "../../components/PlantTable/PlantTable";
import SanitizationTable from "../../components/SanitizationTable/SanitizationTable";
import ToolTable from "../../components/ToolTable/ToolTable";
import LightingTable from "../../components/LightingTable/LightingTable";
import TemperatureTablePremises from "../../components/TemperatureTablePremises/TemperatureTablePremises";
import MaitenanceTable from "../../components/MaitenanceTable/MaitenanceTable";
import AnimalTable from "../../components/AnimalTable/AnimalTable";
import RequirementsTable from "../../components/RequirementsTable/RequirementsTable";
import FeedingTable from "../../components/FeedingTable/FeedingTable";
import PoisonousPlantsTable from "../../components/PoisonousPlantsTable/PoisonousPlantsTable";
import LuminosityTable from "../../components/LuminosityTable/LuminosityTable";
import LegendTable from "../../components/LegendTable/LegendTable";
import MicrobialTable from "../../components/MicrobialTable/MicrobialTable";
import MicrobialSizeTable from "../../components/MicrobialSizeTable/MicrobialSizeTable";
import HandTable from "../../components/HandTable/HandTable";
import AntisepticTable from "../../components/AntisepticTable/AntisepticTable";
import ChirurgicalHandTable from "../../components/ChirurgicalHandTable/ChirurgicalHandTable";
import IllnessTable from "../../components/IllnessTable/IllnessTable";
import MeaningsTable from "../../components/MeaningsTable/MeaningsTable";

interface PageContent {
  type: string;
  class: string;
  text: string | string[];
  list_type?: string;
  img_orientation?: string;
  list_item_class?: string;
  url?: string;
  label?: string;
}

interface SectionProps {
  topic_image: string;
  title: string;
  sectionId: string;
  content: { page: number; page_content: PageContent[] }[];
  nextRoute: string;
}

const Pagination: React.FC<{
  currentPage: number;
  totalPages: number;
  onPrevious: () => void;
  onNext: () => void;
  onBack: () => void;
  onComplete: () => void;
  isCompleted: boolean;
  isTop: boolean | null;
}> = ({
  currentPage,
  totalPages,
  onPrevious,
  onNext,
  onBack,
  onComplete,
  isCompleted,
  isTop = false,
}) => (
  <div className={`section__pagination ${isTop && "section__pagination--top"}`}>
    <button
      className={"section__pagination-back-button"}
      onClick={currentPage === 1 ? onBack : onPrevious}
    >
      <img
        className="section__pagination-back-button-arrow"
        src="/assets/arrow-left.svg"
        alt="chevron pointing left"
      />
      Grižti atgal
    </button>
    <div className="section__pagination-dots">
      {Array.from({ length: totalPages }).map((_, index) => (
        <span
          key={index}
          className={`section__pagination-dot ${
            currentPage === index + 1 ? "active" : ""
          }`}
        />
      ))}
    </div>
    <button
      className={"section__pagination-next-button"}
      onClick={currentPage === totalPages ? onComplete : onNext}
      disabled={currentPage === totalPages && isCompleted}
    >
      {currentPage === totalPages ? "Spręsti testą" : "Toliau"}
      <img
        className="section__pagination-back-button-arrow"
        src="/assets/arrow-right.svg"
        alt="arrow pointing right"
      />
    </button>
  </div>
);

const Section: React.FC<SectionProps> = ({
  topic_image,
  title,
  sectionId,
  content,
  nextRoute,
}) => {
  const navigate = useNavigate();
  const { selectedProduct } = useAppContext();
  const [isCompleted, setIsCompleted] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const completedSections = Number(
      localStorage.getItem(`completedSections_${selectedProduct}`) || 0
    );
    const currentSectionIndex = Number(
      localStorage.getItem(`currentSection_${selectedProduct}`) || 0
    );
    setIsCompleted(currentSectionIndex <= completedSections);
  }, [selectedProduct]);

  const handleNextPage = () => {
    if (currentPage < content.length) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleBack = () => {
    const path = window.location.pathname;
    if (path.startsWith("/questionnaire")) {
      const sectionNumber = path.replace("/questionnaire", "");
      navigate(`/${selectedProduct}/section${sectionNumber}`);
    } else if (path.startsWith("/section")) {
      navigate(`/${selectedProduct}/dashboard`);
    } else {
      navigate(-1);
    }
  };

  const handleComplete = () => {
    navigate(`/${selectedProduct}${nextRoute}`);
  };

  const currentPageContent =
    content.find((page) => page.page === currentPage)?.page_content || [];

  return (
    <Container>
      <div className={"section"}>
        <Pagination
          currentPage={currentPage}
          totalPages={content.length}
          onPrevious={handlePreviousPage}
          onNext={handleNextPage}
          onBack={handleBack}
          onComplete={handleComplete}
          isCompleted={isCompleted}
          isTop={true}
        />
        <div className="section__content">
          {currentPageContent.map((item, index) => (
            <div key={index}>
              {item.type === "list" ? (
                <ul
                  className={`section__list ${item.list_type} ${
                    item.class && item.class
                  }`}
                >
                  {Array.isArray(item.text) &&
                    item.text.map((textItem: string | any, textIndex) =>
                      typeof textItem === "object" &&
                      textItem.type === "img" ? (
                        <div
                          key={textIndex}
                          className={`section__image-container ${
                            item.class && item.class
                          }`}
                        >
                          <img
                            src={`/assets/${selectedProduct}/${sectionId}/${textItem.text}`}
                            alt="#"
                            className="section__image"
                          />
                        </div>
                      ) : typeof textItem === "object" &&
                        textItem.type === "anchor" ? (
                        <div key={textIndex}>
                          <a
                            href={textItem.url || textItem.text}
                            className={`section__anchor ${
                              textItem.class && textItem.class
                            }`}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {textItem.label || textItem.text}
                          </a>
                        </div>
                      ) : Array.isArray(textItem) ? (
                        <ul className="section__list unordered" key={textIndex}>
                          {textItem.map((nestedItem, nestedIndex) => (
                            <li
                              className="section__list-item"
                              key={nestedIndex}
                            >
                              <ReactMarkdown
                                className={"section__paragraph"}
                                components={{ div: "span", p: "span" }}
                              >
                                {nestedItem}
                              </ReactMarkdown>
                            </li>
                          ))}
                        </ul>
                      ) : (
                        <li
                          className={`section__list-item ${
                            item.list_item_class && item.list_item_class
                          }`}
                          key={textIndex}
                        >
                          <ReactMarkdown
                            className={"section__paragraph"}
                            components={{ div: "span", p: "span" }}
                          >
                            {textItem}
                          </ReactMarkdown>
                        </li>
                      )
                    )}
                </ul>
              ) : item.type === "heading" ? (
                <h2
                  className={`section__sub-heading ${item.class && item.class}`}
                >
                  {item.text}
                </h2>
              ) : item.type === "divider" ? (
                <hr
                  className={`section__divider ${item.class && item.class}`}
                />
              ) : item.type === "floating-heading" ? (
                <div
                  className={`section__floating-heading ${
                    item.class && item.class
                  }`}
                >
                  <h2 className={`section__floating-heading__text`}>
                    {item.text}
                  </h2>
                </div>
              ) : item.type === "main-heading" ? (
                <h2
                  className={`section__heading section__heading--title ${
                    item.class && item.class
                  }`}
                >
                  {item.text}
                </h2>
              ) : item.type === "section-heading" ? (
                <h2 className={`section__heading ${item.class && item.class}`}>
                  {item.text}
                </h2>
              ) : item.type === "table" ? (
                <Table />
              ) : item.type === "premises-table" ? (
                <PremisesTable />
              ) : item.type === "plant-table" ? (
                <PlantTable />
              ) : item.type === "poisonous-plants-table" ? (
                <PoisonousPlantsTable />
              ) : item.type === "interval-table" ? (
                <IntervalTable />
              ) : item.type === "tool-table" ? (
                <ToolTable />
              ) : item.type === "lighting-table" ? (
                <LightingTable />
              ) : item.type === "luminosity-table" ? (
                <LuminosityTable />
              ) : item.type === "feeding-table" ? (
                <FeedingTable />
              ) : item.type === "temperature-table" ? (
                <TemperatureTable />
              ) : item.type === "temperature-table-premises" ? (
                <TemperatureTablePremises />
              ) : item.type === "maitenance-table" ? (
                <MaitenanceTable />
              ) : item.type === "microbial-table" ? (
                <MicrobialTable />
              ) : item.type === "microbial-size-table" ? (
                <MicrobialSizeTable />
              ) : item.type === "legend-table" ? (
                <LegendTable />
              ) : item.type === "animal-table" ? (
                <AnimalTable />
              ) : item.type === "antiseptic-table" ? (
                <AntisepticTable />
              ) : item.type === "sanitization-table" ? (
                <SanitizationTable />
              ) : item.type === "hand-table" ? (
                <HandTable />
              ) : item.type === "chirurgical-hand-table" ? (
                <ChirurgicalHandTable />
              ) : item.type === "illness-table" ? (
                <IllnessTable />
              ) : item.type === "meanings-table" ? (
                <MeaningsTable />
              ) : item.type === "requirements-table" ? (
                <RequirementsTable />
              ) : item.type === "anchor" ? (
                <a
                  href={item.text as string}
                  className={`section__anchor ${item.class && item.class}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {item.text}
                </a>
              ) : item.type === "img" ? (
                <div
                  className={`section__image-container ${
                    item.class && item.class
                  }`}
                >
                  <img
                    src={`/assets/${selectedProduct}/${sectionId}/${item.text}`}
                    alt="#"
                    className="section__image"
                  />
                </div>
              ) : (
                <ReactMarkdown
                  className={`section__paragraph ${item.class && item.class}`}
                  components={{ div: "span", p: "span" }}
                >
                  {typeof item.text === "string"
                    ? item.text
                    : item.text.join(" ")}
                </ReactMarkdown>
              )}
            </div>
          ))}
        </div>
        <Pagination
          currentPage={currentPage}
          totalPages={content.length}
          onPrevious={handlePreviousPage}
          onNext={handleNextPage}
          onBack={handleBack}
          onComplete={handleComplete}
          isCompleted={isCompleted}
          isTop={false}
        />
      </div>
    </Container>
  );
};

export default Section;
