import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import Container from "../../components/Container/Container";
import BackButton from "../../components/BackButton/BackButton";
import Table from "../../components/Table/Table";
import { useAppContext } from "../../context/AppContext";
import "./section.scss";

interface SectionProps {
  title: string;
  content: any[];
  nextRoute: string;
}

const Section: React.FC<SectionProps> = ({ title, content, nextRoute }) => {
  const navigate = useNavigate();
  const { selectedProduct } = useAppContext();
  const [isCompleted, setIsCompleted] = useState(false);

  useEffect(() => {
    const completedSections = Number(localStorage.getItem(`completedSections_${selectedProduct}`) || 0);
    const currentSectionIndex = Number(localStorage.getItem(`currentSection_${selectedProduct}`) || 0);
    setIsCompleted(currentSectionIndex <= completedSections);
  }, [selectedProduct]);

  return (
    <Container>
      <div className={"section"}>
        <BackButton />
        <h2 className="section__heading section__heading--title">{title}</h2>
        <div className="section__content">
          {content.map((item, index) => (
            <div key={index}>
              {item.type === "list" ? (
                <ul className={`section__list ${item.list_type}`}>
                  {item.text.map((textItem: string, textIndex: number) => (
                    <li className="section__list-item" key={textIndex}>
                      <ReactMarkdown className="section__paragraph" components={{ div: 'span', p: 'span' }}>
                        {textItem}
                      </ReactMarkdown>
                    </li>
                  ))}
                </ul>
              ) : item.type === "heading" ? (
                <h2 className="section__sub-heading">{item.text}</h2>
              ) : item.type === "section-heading" ? (
                <h2 className="section__heading">{item.text}</h2>
              ) : item.type === "table" ? (<Table />) : (
                <p className="section__paragraph">
                  <ReactMarkdown className="section__paragraph" components={{ div: 'span',  p: 'span' }}>
                    {item.text}
                  </ReactMarkdown>
                </p>
              )}
            </div>
          ))}
        </div>
        <hr />
        <button className="section__next" onClick={() => navigate(nextRoute)} disabled={isCompleted}>
          Spręsti testą
        </button>
      </div>
    </Container>
  );
};

export default Section;
