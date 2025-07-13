import React, { useEffect, useState, useMemo } from "react";
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
import PictogramTable from "../../components/PictogramTable/PictogramTable";
import TransportTable from "../../components/TransportTable/TransportTable";

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
  onAnswersCollected: (
    answers: {
      id: string;
      question: string;
      answer: string;
      optionText: string;
    }[]
  ) => void;
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
  sectionId: string;
  onAnswersCollected: (
    answers: {
      id: string;
      question: string;
      answer: string;
      optionText: string;
    }[]
  ) => void;
}> = ({
  currentPage,
  totalPages,
  onPrevious,
  onNext,
  onBack,
  onComplete,
  isCompleted,
  isTop = false,
  sectionId,
  onAnswersCollected,
}) => {
    const { questionnaire_material } = useAppContext();

  const questionnaire_section = questionnaire_material.content.find(
    (item: { sectionId: string }) => item.sectionId === sectionId
  );

  // console.log(sectionId);

  console.log(questionnaire_section);

  if(!questionnaire_section.questions.length) {
    // onComplete();
    // onAnswersCollected([]);
  }


  return (
    <div
      className={`section__pagination ${isTop && "section__pagination--top"}`}
    >
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
};

// Helper component for rendering each content item
const SectionContentItem: React.FC<{
  item: PageContent;
  selectedProduct: string;
  sectionId: string;
}> = ({ item, selectedProduct, sectionId }) => {
  switch (item.type) {
    case "list":
      return (
        <ul className={`section__list ${item.list_type} ${item.class || ""}`}>
          {Array.isArray(item.text) &&
            item.text.map((textItem: any, textIndex: number) => {
              if (typeof textItem === "object" && textItem.type === "img") {
                return (
                  <div
                    key={textIndex}
                    className={`section__image-container ${item.class || ""}`}
                  >
                    <img
                      src={`/assets/${selectedProduct}/${sectionId}/${textItem.text}`}
                      alt="#"
                      className="section__image"
                    />
                  </div>
                );
              } else if (typeof textItem === "object" && textItem.type === "anchor") {
                return (
                  <div key={textIndex}>
                    <a
                      href={textItem.url || textItem.text}
                      className={`section__anchor ${textItem.class || ""}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {textItem.label || textItem.text}
                    </a>
                  </div>
                );
              } else if (Array.isArray(textItem)) {
                return (
                  <ul className="section__list unordered" key={textIndex}>
                    {textItem.map((nestedItem, nestedIndex) => (
                      <li className="section__list-item" key={nestedIndex}>
                        <ReactMarkdown className={"section__paragraph"} components={{ div: "span", p: "span" }}>
                          {nestedItem}
                        </ReactMarkdown>
                      </li>
                    ))}
                  </ul>
                );
              } else {
                return (
                  <li className={`section__list-item ${item.list_item_class || ""}`} key={textIndex}>
                    <ReactMarkdown className={"section__paragraph"} components={{ div: "span", p: "span" }}>
                      {textItem}
                    </ReactMarkdown>
                  </li>
                );
              }
            })}
        </ul>
      );
    case "heading":
      return <h2 className={`section__sub-heading ${item.class || ""}`}>{item.text}</h2>;
    case "divider":
      return <hr className={`section__divider ${item.class || ""}`} />;
    case "floating-heading":
      return (
        <div className={`section__floating-heading ${item.class || ""}`}>
          <h2 className={`section__floating-heading__text`}>{item.text}</h2>
        </div>
      );
    case "main-heading":
      return <h2 className={`section__heading section__heading--title ${item.class || ""}`}>{item.text}</h2>;
    case "section-heading":
      return <h2 className={`section__heading ${item.class || ""}`}>{item.text}</h2>;
    case "table":
      return <Table />;
    case "premises-table":
      return <PremisesTable />;
    case "plant-table":
      return <PlantTable />;
    case "poisonous-plants-table":
      return <PoisonousPlantsTable />;
    case "interval-table":
      return <IntervalTable />;
    case "tool-table":
      return <ToolTable />;
    case "lighting-table":
      return <LightingTable />;
    case "luminosity-table":
      return <LuminosityTable />;
    case "feeding-table":
      return <FeedingTable />;
    case "temperature-table":
      return <TemperatureTable />;
    case "temperature-table-premises":
      return <TemperatureTablePremises />;
    case "maitenance-table":
      return <MaitenanceTable />;
    case "microbial-table":
      return <MicrobialTable />;
    case "microbial-size-table":
      return <MicrobialSizeTable />;
    case "legend-table":
      return <LegendTable />;
    case "animal-table":
      return <AnimalTable />;
    case "antiseptic-table":
      return <AntisepticTable />;
    case "sanitization-table":
      return <SanitizationTable />;
    case "hand-table":
      return <HandTable />;
    case "chirurgical-hand-table":
      return <ChirurgicalHandTable />;
    case "illness-table":
      return <IllnessTable />;
    case "pictogram-table":
      return <PictogramTable />;
    case "transport-table":
      return <TransportTable />;
    case "meanings-table":
      return <MeaningsTable />;
    case "requirements-table":
      return <RequirementsTable />;
    case "anchor":
      return (
        <a
          href={item.text as string}
          className={`section__anchor ${item.class || ""}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          {item.text}
        </a>
      );
    case "img":
      return (
        <div className={`section__image-container ${item.class || ""}`}>
          <img
            src={`/assets/${selectedProduct}/${sectionId}/${item.text}`}
            alt="#"
            className="section__image"
          />
        </div>
      );
    default:
      return (
        <ReactMarkdown className={`section__paragraph ${item.class || ""}`} components={{ div: "span", p: "span" }}>
          {typeof item.text === "string" ? item.text : Array.isArray(item.text) ? item.text.join(" ") : ""}
        </ReactMarkdown>
      );
  }
};

const Section: React.FC<SectionProps> = React.memo(({
  topic_image,
  title,
  sectionId,
  content,
  nextRoute,
  onAnswersCollected,
}) => {
  const navigate = useNavigate();
  const { selectedProduct } = useAppContext();
  const [isCompleted, setIsCompleted] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  console.log(sectionId);

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

  const currentPageContent = useMemo(() => {
    return content.find((page) => page.page === currentPage)?.page_content || [];
  }, [content, currentPage]);

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
          onAnswersCollected={onAnswersCollected}
          sectionId={sectionId}
        />
        <div className="section__content">
          {currentPageContent.map((item, index) => (
            <SectionContentItem
              key={index}
              item={item}
              selectedProduct={selectedProduct}
              sectionId={sectionId}
            />
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
          onAnswersCollected={onAnswersCollected}
          sectionId={sectionId}
        />
      </div>
    </Container>
  );
});

export default Section;
