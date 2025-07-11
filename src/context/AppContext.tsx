import React, {
  createContext,
  useContext,
  ReactNode,
  useState,
  useEffect,
} from "react";

interface AppContextProps {
  material: any;
  setMaterial: React.Dispatch<React.SetStateAction<any>>;
  questionnaire_material: any;
  setQuestionnaireMaterial: React.Dispatch<React.SetStateAction<any>>;
  selectedProduct: string;
  setSelectedProduct: React.Dispatch<React.SetStateAction<string>>;
}

const AppContext = createContext<AppContextProps | undefined>(undefined);

export const AppProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  // Get initial product from URL if available
  const getInitialProduct = (): string => {
    const path = window.location.pathname;
    const productFromPath = path.split("/")[1];
    if (
      [
        "firstaid",
        "hygiene1",
        "hygiene2",
        "hygiene3",
        "hygiene4",
        "hygieneh3",
        "hygienehb",
        "hygieneh10",
        "hygienehbb",
        "hygieneh15",
        "hygieneh4",
        "hygieneh7",
      ].includes(productFromPath)
    ) {
      return productFromPath;
    }
    return "";
  };

  const [material, setMaterial] = useState(require("../content.json"));
  const [questionnaire_material, setQuestionnaireMaterial] = useState(
    require("../questions.json")
  );
  const [selectedProduct, setSelectedProduct] = useState<string>(
    getInitialProduct()
  );

  // Update material based on selectedProduct
  useEffect(() => {
    if (selectedProduct === "firstaid") {
      setMaterial(require("../content.json"));
      setQuestionnaireMaterial(require("../questions.json"));
    } else if (selectedProduct === "hygiene1") {
      setMaterial(require("../contentHygiene1.json"));
      setQuestionnaireMaterial(require("../questionsHygiene.json"));
    } else if (selectedProduct === "hygiene2") {
      setMaterial(require("../contentHygiene2.json"));
      setQuestionnaireMaterial(require("../questionsHygiene.json"));
    } else if (selectedProduct === "hygiene3") {
      setMaterial(require("../contentHygiene3.json"));
      setQuestionnaireMaterial(require("../questionsHygiene.json"));
    } else if (selectedProduct === "hygiene4") {
      setMaterial(require("../contentHygiene4.json"));
      setQuestionnaireMaterial(require("../questionsHygiene.json"));
    } else if (selectedProduct === "hygieneh3") {
      setMaterial(require("../contentHygieneh3.json"));
      setQuestionnaireMaterial(require("../questionsHygiene.json"));
    } else if (selectedProduct === "hygienehb") {
      setMaterial(require("../contentHygienehb.json"));
      setQuestionnaireMaterial(require("../questionsHygiene.json"));
    } else if (selectedProduct === "hygieneh10") {
      setMaterial(require("../contentHygieneh10.json"));
      setQuestionnaireMaterial(require("../questionsHygiene.json"));
    } else if (selectedProduct === "hygienehbb") {
      setMaterial(require("../contentHygienehbb.json"));
      setQuestionnaireMaterial(require("../questionsHygiene.json"));
    } else if (selectedProduct === "hygieneh15") {
      setMaterial(require("../contentHygieneh15.json"));
      setQuestionnaireMaterial(require("../questionsHygiene.json"));
    } else if (selectedProduct === "hygieneh12") {
      setMaterial(require("../contentHygieneh12.json"));
      setQuestionnaireMaterial(require("../questionsHygiene.json"));
    } else if (selectedProduct === "hygieneh4") {
      setMaterial(require("../contentHygieneh4.json"));
      setQuestionnaireMaterial(require("../questionsHygiene.json"));
    } else if (selectedProduct === "hygieneh7") {
      setMaterial(require("../contentHygieneh7.json"));
      setQuestionnaireMaterial(require("../questionsHygiene.json"));
    }
  }, [selectedProduct]);

  return (
    <AppContext.Provider
      value={{
        material,
        setMaterial,
        questionnaire_material,
        setQuestionnaireMaterial,
        selectedProduct,
        setSelectedProduct,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used within an AppProvider");
  }
  return context;
};
