import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Container from "../../components/Container/Container";
import { sendAnswers } from "../../services/api";
import { useAppContext } from "../../context/AppContext";
import { PDFDocument, StandardFonts, rgb } from "pdf-lib";
import { useAuth0 } from "@auth0/auth0-react";
import { Worker, Viewer } from "@react-pdf-viewer/core";
import "./dashboard.scss";
import Modal from "../../components/Modal/Modal";

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

// Product config object
const PRODUCT_CONFIG: Record<
  string,
  {
    FIELD_CODE: string;
    PRODUCT_CODE: string;
    HOURS: string;
  }
> = {
  hygiene1: {
    FIELD_CODE: "007",
    PRODUCT_CODE: "H1",
    HOURS: "6 a.k.",
  },
  hygiene2: {
    FIELD_CODE: "008",
    PRODUCT_CODE: "H2",
    HOURS: "6 a.k.",
  },
  // Add more products here as needed
};

const Dashboard: React.FC<DashboardProps> = ({ sections }) => {
  const navigate = useNavigate();
  const { selectedProduct } = useAppContext();
  const [enabledSections, setEnabledSections] = useState<number>(1);
  const [allSectionsCompleted, setAllSectionsCompleted] =
    useState<boolean>(false);
  const [isPdfModalOpen, setPdfModalOpen] = useState(false);
  const [pdfBlob, setPdfBlob] = useState<Blob | null>(null);
  const [birthDate, setBirthDate] = useState("");
  const [fieldCode, setFieldCode] = useState("");
  const [productCode, setProductCode] = useState("");
  const [hours, setHours] = useState("");
  const [date, setDate] = useState("2024 m. gruodžio 5 d.");
  const [countNumber, setCountNumber] = useState("Nr. H100002");
  const [agreed, setAgreed] = useState(false);
  const { user } = useAuth0();

  console.log("User from Auth0:", user);

  // Add new state for middle name and surname
  const [name, setName] = useState("");
  const [middleName, setMiddleName] = useState("");
  const [surname, setSurname] = useState("");

  // Set name from Auth0 user on initial render
  useEffect(() => {
    if (user && user.name) {
      setName(user.name);
    }
  }, [user]);

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

  const handleSectionClick = (
    sectionIndex: number,
    type: string,
    nextRoute: string
  ) => {
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

  const generatePdf = async (
    name: string,
    middleName: string,
    surname: string,
    birthDate: string
  ) => {
    const existingPdfBytes = await fetch("/certificate.pdf").then((res) =>
      res.arrayBuffer()
    );
    const pdfDoc = await PDFDocument.load(existingPdfBytes);
    const pages = pdfDoc.getPages();
    const firstPage = pages[0];
    const font = await pdfDoc.embedFont(StandardFonts.Helvetica);

    // Set starting x coordinate and gap
    let x = 66;
    const y = 405;
    const gap = 10;

    // Draw Name
    firstPage.drawText(name, {
      x,
      y,
      size: 16,
      font,
      color: rgb(0, 0, 0),
    });
    x += font.widthOfTextAtSize(name, 16) + gap;

    // Draw Middle Name
    firstPage.drawText(middleName, {
      x,
      y,
      size: 16,
      font,
      color: rgb(0, 0, 0),
    });
    x += font.widthOfTextAtSize(middleName, 16) + gap;

    // Draw Surname
    firstPage.drawText(surname, {
      x,
      y,
      size: 16,
      font,
      color: rgb(0, 0, 0),
    });

    // Calculate the width of the birthDate text
    const birthDateWidth = font.widthOfTextAtSize(birthDate, 16);
    const rightEdgeX = 530; // your original rightmost coordinate

    // Draw birthDate
    firstPage.drawText(birthDate, {
      x: rightEdgeX - birthDateWidth,
      y: 405,
      size: 16,
      font,
      color: rgb(0, 0, 0),
    });

    firstPage.drawText(productCode, {
      x: 392,
      y: 220,
      size: 14,
      font,
      color: rgb(0, 0, 0),
    });
    // Set the rightmost coordinate for date
    const rightEdgeDateX = 320; // adjust this value to your template

    // Calculate the width of the date text
    const dateWidth = font.widthOfTextAtSize(date, 16);

    // Draw date so it expands from right to left
    firstPage.drawText(date, {
      x: rightEdgeDateX - dateWidth,
      y: 460,
      size: 16,
      font,
      color: rgb(0, 0, 0),
    });

    // Set a small gap between the fields (e.g., 10px)
    const gapDate = 4;

    firstPage.drawText(countNumber, {
      x: rightEdgeDateX + gapDate,
      y: 460,
      size: 16,
      font,
      color: rgb(0, 0, 0),
    });

    firstPage.drawText(hours, {
      x: 205,
      y: 239,
      size: 14,
      font,
      color: rgb(0, 0, 0),
    });
    firstPage.drawText(fieldCode, {
      x: 280,
      y: 355,
      size: 16,
      font,
      color: rgb(0, 0, 0),
    });

    const pdfBytes = await pdfDoc.save();
    return new Blob([pdfBytes], { type: "application/pdf" });
  };

  useEffect(() => {
    if (isPdfModalOpen) {
      (async () => {
        const blob = await generatePdf(name, middleName, surname, birthDate);
        setPdfBlob(blob);
      })();
    }
  }, [isPdfModalOpen, name, middleName, surname, birthDate]);

  // Set initial PDF values from config when selectedProduct changes
  useEffect(() => {
    if (selectedProduct && PRODUCT_CONFIG[selectedProduct]) {
      setFieldCode(PRODUCT_CONFIG[selectedProduct].FIELD_CODE);
      setProductCode(PRODUCT_CONFIG[selectedProduct].PRODUCT_CODE);
      setHours(PRODUCT_CONFIG[selectedProduct].HOURS);
    }
  }, [selectedProduct]);

  return (
    <Container type="wide">
      <div className={"dashboard"}>
        {allSectionsCompleted && selectedProduct === "firstaid" && (
          <>
            <div className="dashboard__message-container">
              <p className="dashboard__message">
                Testas atliktas. Su jumis susisieks <strong>Firstaid.lt</strong>{" "}
                konsultantė(-as) testo rezultatams aptarti.
              </p>
            </div>
          </>
        )}
        {allSectionsCompleted && selectedProduct !== "firstaid" && (
          <>
            <div className="dashboard__message-container">
              <p className="dashboard__message">Testas atliktas sėkmingai!</p>
            </div>
            <div className="dashboard__divider"></div>
            <p className="dashboard__message">
              Galite atsisiųsti savo sertifikatą jau čia. Užpildykite duomenis
              ir pasirinkite "Peržiūrėti sertifikatą", kad pamatytumėte ir
              atsisiųstumėte savo pažymėjimą.
            </p>

            <button
              className="dashboard__certificate-button"
              onClick={() => setPdfModalOpen(true)}
            >
              Peržiūrėti pažymėjimą
            </button>
            <div className="dashboard__divider"></div>
            <Modal
              isOpen={isPdfModalOpen}
              onClose={() => setPdfModalOpen(false)}
            >
              <div className="pdf-modal">
                <div className="pdf-modal__content">
                  <div className="labels">
                    <label>
                      Vardas: *
                      <input
                        value={name}
                        onChange={(e) => {
                          // Only allow letters (any language) and spaces
                          const val = e.target.value.replace(
                            /[^\p{L}\s]/gu,
                            ""
                          );
                          setName(val);
                        }}
                        required
                      />
                    </label>
                    <label>
                      Vidurinis vardas:
                      <input
                        value={middleName}
                        onChange={(e) => {
                          const val = e.target.value.replace(
                            /[^\p{L}\s]/gu,
                            ""
                          );
                          setMiddleName(val);
                        }}
                      />
                    </label>
                    <label>
                      Pavardė: *
                      <input
                        value={surname}
                        onChange={(e) => {
                          const val = e.target.value.replace(
                            /[^\p{L}\s]/gu,
                            ""
                          );
                          setSurname(val);
                        }}
                        required
                      />
                    </label>
                    <label>
                      Gimimo data: *
                      <input
                        type="date"
                        value={birthDate}
                        onChange={(e) => setBirthDate(e.target.value)}
                      />
                    </label>
                    <div className="checkbox-label">
                      <input
                        type="checkbox"
                        checked={agreed}
                        onChange={(e) => setAgreed(e.target.checked)}
                      />
                      <p>
                        Sutinku, kad sertifikate matomi duomenys yra teisingi.
                      </p>
                    </div>
                    <button
                      disabled={!agreed || !name.trim() || !surname.trim() || !birthDate}
                      onClick={() => {
                        if (pdfBlob) {
                          const url = URL.createObjectURL(pdfBlob);
                          const a = document.createElement("a");
                          a.href = url;
                          a.download = "certificate.pdf";
                          a.click();
                          URL.revokeObjectURL(url);
                        }
                      }}
                    >
                      Atsisiųsti PDF
                    </button>
                    <button onClick={() => setPdfModalOpen(false)}>
                      Uždaryti
                    </button>
                  </div>
                  {pdfBlob && (
                    <div className="pdf-modal__viewer">
                      <Worker
                        workerUrl={`https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js`}
                      >
                        <Viewer fileUrl={URL.createObjectURL(pdfBlob)} />
                      </Worker>
                    </div>
                  )}
                </div>
              </div>
            </Modal>
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
              sąrašo, mokymo programų kodų and mokymo periodiškumo
              patvirtinimo“.
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
        ) : selectedProduct === "hygiene1" ? (
          <div className="dashboard__info">
            <h2 className="dashboard__heading">
              PRIVALOMOJO HIGIENOS ĮGŪDŽIŲ MOKYMO SPECIALIOSIOS PROGRAMOS
              MEDŽIAGA (KODAS H1)
            </h2>
            <p>
              Privalomojo higienos įgūdžių specialioji programa (H1) nustatyta
              Lietuvos Respublikos sveikatos apsaugos ministro 2008 m. sausio 28
              d. įsakymu Nr. V-69 „Dėl Privalomųjų pirmosios pagalbos, higienos
              įgūdžių, alkoholio, narkotinių ir psichotropinių ar kitų psichiką
              veikiančių medžiagų vartojimo poveikio žmogaus sveikatai mokymų ir
              atestavimo tvarkos aprašo ir Asmenų, kuriems privalomas sveikatos
              ir (ar) pirmosios pagalbos mokymas, profesijų ir veiklos sričių
              sąrašo, mokymo programų kodų and mokymo periodiškumo
              patvirtinimo“.
            </p>
            <p>
              Švietimo teikėjų, vykdančių asmenų iki 18 metų ugdymą pagal
              formaliojo ir (ar) neformaliojo švietimo programas, pedagoginiai
              darbuotojai, laisvieji mokytojai, vykdantys asmenų iki 18 metų
              ugdymą pagal formaliojo ir (ar) neformaliojo švietimo programas,
              auklėtojų padėjėjai, vaikų socialinės globos įstaigų socialiniai
              darbuotojai, socialiniai pedagogai, individualios priežiūros
              personalas.
            </p>
            <p>
              <strong>H1 – Higienos pažymėjimas.</strong> Vaikų poilsio
              stovyklų, vaikų žaidimų patalpų darbuotojams
            </p>
          </div>
        ) : selectedProduct === "hygiene2" ? (
          <div className="dashboard__info">
            <h2 className="dashboard__heading">
              PRIVALOMOJO HIGIENOS ĮGŪDŽIŲ MOKYMO SPECIALIOSIOS PROGRAMOS
              MEDŽIAGA (KODAS H2)
            </h2>
            <p>
              Privalomojo higienos įgūdžių specialioji programa (H1) nustatyta
              Lietuvos Respublikos sveikatos apsaugos ministro 2008 m. sausio 28
              d. įsakymu Nr. V-69 „Dėl Privalomųjų pirmosios pagalbos, higienos
              įgūdžių, alkoholio, narkotinių ir psichotropinių ar kitų psichiką
              veikiančių medžiagų vartojimo poveikio žmogaus sveikatai mokymų ir
              atestavimo tvarkos aprašo ir Asmenų, kuriems privalomas sveikatos
              ir (ar) pirmosios pagalbos mokymas, profesijų ir veiklos sričių
              sąrašo, mokymo programų kodų ir mokymo periodiškumo patvirtinimo“.
            </p>
            <p>
              Švietimo teikėjų, vykdančių asmenų iki 18 metų ugdymą pagal
              formaliojo ir (ar) neformaliojo švietimo programas, pedagoginiai
              darbuotojai, laisvieji mokytojai, vykdantys asmenų iki 18 metų
              ugdymą pagal formaliojo ir (ar) neformaliojo švietimo programas,
              auklėtojų padėjėjai, vaikų socialinės globos įstaigų socialiniai
              darbuotojai, socialiniai pedagogai, individualios priežiūros
              personalas.
            </p>
            <p>
              <strong>H1 – Higienos pažymėjimas.</strong> Švietimo įstaigų
              darbuotojams – vaikų globos įstaigų darbuotojams
            </p>
          </div>
        ) : selectedProduct === "hygiene3" ? (
          <div className="dashboard__info">
            <h2 className="dashboard__heading">
              PRIVALOMOJO HIGIENOS ĮGŪDŽIŲ MOKYMO SPECIALIOSIOS PROGRAMOS
              MEDŽIAGA (KODAS H3)
            </h2>
            <p>
              Privalomojo higienos įgūdžių specialioji programa (H1) nustatyta
              Lietuvos Respublikos sveikatos apsaugos ministro 2008 m. sausio 28
              d. įsakymu Nr. V-69 „Dėl Privalomųjų pirmosios pagalbos, higienos
              įgūdžių, alkoholio, narkotinių ir psichotropinių ar kitų psichiką
              veikiančių medžiagų vartojimo poveikio žmogaus sveikatai mokymų ir
              atestavimo tvarkos aprašo ir Asmenų, kuriems privalomas sveikatos
              ir (ar) pirmosios pagalbos mokymas, profesijų ir veiklos sričių
              sąrašo, mokymo programų kodų ir mokymo periodiškumo patvirtinimo“.
            </p>
            <p>
              Švietimo teikėjų, vykdančių asmenų iki 18 metų ugdymą pagal
              formaliojo ir (ar) neformaliojo švietimo programas, pedagoginiai
              darbuotojai, laisvieji mokytojai, vykdantys asmenų iki 18 metų
              ugdymą pagal formaliojo ir (ar) neformaliojo švietimo programas,
              auklėtojų padėjėjai, vaikų socialinės globos įstaigų socialiniai
              darbuotojai, socialiniai pedagogai, individualios priežiūros
              personalas.
            </p>
            <p>
              <strong>H1 – Higienos pažymėjimas.</strong> Švietimo įstaigų
              darbuotojams – ikimokyklinių įstaigų darbuotojams
            </p>
          </div>
        ) : selectedProduct === "hygiene4" ? (
          <div className="dashboard__info">
            <h2 className="dashboard__heading">
              PRIVALOMOJO HIGIENOS ĮGŪDŽIŲ MOKYMO SPECIALIOSIOS PROGRAMOS
              MEDŽIAGA (KODAS H4)
            </h2>
            <p>
              Privalomojo higienos įgūdžių specialioji programa (H1) nustatyta
              Lietuvos Respublikos sveikatos apsaugos ministro 2008 m. sausio 28
              d. įsakymu Nr. V-69 „Dėl Privalomųjų pirmosios pagalbos, higienos
              įgūdžių, alkoholio, narkotinių ir psichotropinių ar kitų psichiką
              veikiančių medžiagų vartojimo poveikio žmogaus sveikatai mokymų ir
              atestavimo tvarkos aprašo ir Asmenų, kuriems privalomas sveikatos
              ir (ar) pirmosios pagalbos mokymas, profesijų ir veiklos sričių
              sąrašo, mokymo programų kodų ir mokymo periodiškumo patvirtinimo“.
            </p>
            <p>
              <strong>H1 – Higienos pažymėjimas.</strong> Švietimo įstaigų
              darbuotojams – mokyklų darbuotojams
            </p>
          </div>
        ) : selectedProduct === "hygieneh4" ? (
          <div className="dashboard__info">
            <h2 className="dashboard__heading">
              PRIVALOMOJO HIGIENOS ĮGŪDŽIŲ MOKYMO (KODAS H4) SPECIALIOSIOS
              PROGRAMOS MEDŽIAGA
            </h2>
            <p>
              <strong>H4 – Higienos pažymėjimas.</strong> Soliariumų paslaugas
              teikiantys darbuotojai
            </p>
          </div>
        ) : selectedProduct === "hygieneh7" ? (
          <div className="dashboard__info">
            <h2 className="dashboard__heading">
              PRIVALOMOJO HIGIENOS ĮGŪDŽIŲ MOKYMO (KODAS H7) SPECIALIOSIOS
              PROGRAMOS MEDŽIAGA
            </h2>
            <p>Skirta keleivinio transporto darbuotojams.</p>
          </div>
        ) : selectedProduct === "hygieneh10" ? (
          <div className="dashboard__info">
            <h2 className="dashboard__heading">
              PRIVALOMOJO HIGIENOS ĮGŪDŽIŲ MOKYMO SPECIALIOSIOS PROGRAMOS
              MEDŽIAGA (KODAS H10)
            </h2>
            <p>
              Privalomojo higienos įgūdžių specialioji programa (H1) nustatyta
              Lietuvos Respublikos sveikatos apsaugos ministro 2008 m. sausio 28
              d. įsakymu Nr. V-69 „Dėl Privalomųjų pirmosios pagalbos, higienos
              įgūdžių, alkoholio, narkotinių ir psichotropinių ar kitų psichiką
              veikiančių medžiagų vartojimo poveikio žmogaus sveikatai mokymų ir
              atestavimo tvarkos aprašo ir Asmenų, kuriems privalomas sveikatos
              ir (ar) pirmosios pagalbos mokymas, profesijų ir veiklos sričių
              sąrašo, mokymo programų kodų ir mokymo periodiškumo patvirtinimo“.
            </p>
            <p>
              <strong>H10 – Higienos pažymėjimas.</strong> Tiesiogiai maistą
              tvarkantiems darbuotojams
            </p>
          </div>
        ) : selectedProduct === "hygieneh12" ? (
          <div className="dashboard__info">
            <h2 className="dashboard__heading">
              PRIVALOMOJO HIGIENOS ĮGŪDŽIŲ MOKYMO (KODAS H12) SPECIALIOSIOS
              PROGRAMOS MEDŽIAGA
            </h2>
            <p>
              <strong>H12 – Higienos pažymėjimas.</strong> Skalbimą ir sausą
              (cheminį) valymą atliekantys darbuotojai
            </p>
          </div>
        ) : selectedProduct === "hygieneh15" ? (
          <div className="dashboard__info">
            <h2 className="dashboard__heading">
              PRIVALOMOJO HIGIENOS ĮGŪDŽIŲ MOKYMO (KODAS H15) SPECIALIOSIOS
              PROGRAMOS MEDŽIAGA
            </h2>
            <p>
              Programa skirta su nuodingosiomis medžiagomis dirbantiems
              darbuotojams.
            </p>
            <p>
              <strong>H15 – Higienos pažymėjimas.</strong> Su nuodingosiomis
              medžiagomis dirbantys darbuotojai
            </p>
          </div>
        ) : selectedProduct === "hygienehb" ? (
          <div className="dashboard__info">
            <h2 className="dashboard__heading">
              PRIVALOMOJO HIGIENOS ĮGŪDŽIŲ (KODAS HB) MOKYMO PROGRAMOS MEDŽIAGA
            </h2>
            <p>
              Privalomojo higienos įgūdžių mokymo bendroji programa (HB)
              nustatyta Lietuvos Respublikos sveikatos apsaugos ministro 2008 m.
              sausio 28 d. įsakymu Nr. V-69 „Dėl Privalomųjų pirmosios pagalbos,
              higienos įgūdžių, alkoholio, narkotinių ir psichotropinių ar kitų
              psichiką veikiančių medžiagų vartojimo poveikio žmogaus sveikatai
              mokymų ir atestavimo tvarkos aprašo ir Asmenų, kuriems privalomas
              sveikatos ir (ar) pirmosios pagalbos mokymas, profesijų ir veiklos
              sričių sąrašo, mokymo programų kodų ir mokymo periodiškumo
              patvirtinimo“.
            </p>
            <p>
              Ši privalomojo higienos įgūdžių mokymo bendroji programa
              (programos kodas HB) skirta visiems asmenims, kurie pradeda dirbti
              ir kuriems numatytas privalomas higienos įgūdžių mokymas. Asmenys,
              kurių darbo funkcijos apima kelias veiklos sritis, bendrąją
              programą išklauso vieną kartą ir jos nekartoja.
            </p>
            <p>
              <strong>HB pažymėjimas.</strong> Bendroji higienos įgūdžių
              programa darbuotojams
            </p>
          </div>
        ) : selectedProduct === "hygienehbb" ? (
          <div className="dashboard__info">
            <h2 className="dashboard__heading">
              PRIVALOMOJO HIGIENOS ĮGŪDŽIŲ MOKYMO (KODAS HBB) SPECIALIOSIOS
              PROGRAMOS MEDŽIAGA
            </h2>
            <p>Kam skirti šie mokymai?</p>
            <p>
              <strong>HBB- Higienos pažymėjimas.</strong> Netiesiogiai maistą
              tvarkantiems darbuotojams
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
                  onClick={() =>
                    handleSectionClick(
                      index + 1,
                      section.type,
                      section.nextRoute
                    )
                  }
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
