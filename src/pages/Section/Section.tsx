import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import Container from "../../components/Container/Container";
import Table from "../../components/Table/Table";
import { useAppContext } from "../../context/AppContext";
import "./section.scss";

interface PageContent {
  type: string;
  class: string;
  text: string | string[];
  list_type?: string;
  img_orientation?: string;
  list_item_class?: string;
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
      navigate(`/section${sectionNumber}`);
    } else if (path.startsWith("/section")) {
      navigate("/dashboard");
    } else {
      navigate(-1);
    }
  };

  const handleComplete = () => {
    navigate(nextRoute);
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
                    item.text.map((textItem, textIndex) => (
                      <li
                        className={`section__list-item ${item.list_item_class && item.list_item_class}`}
                        key={textIndex}
                      >
                        <ReactMarkdown
                          className={"section__paragraph"}
                          components={{ div: "span", p: "span" }}
                        >
                          {textItem}
                        </ReactMarkdown>
                      </li>
                    ))}
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
              ) : item.type === "img" ? (
                <div
                  className={`section__image-container ${
                    item.class && item.class
                  }`}
                >
                  <img
                    src={`/assets/${sectionId}/${item.text}`}
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
