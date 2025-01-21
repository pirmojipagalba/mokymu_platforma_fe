import React, { createContext, useContext, ReactNode, useState } from 'react';

interface AppContextProps {
  material: any;
  setMaterial: React.Dispatch<React.SetStateAction<any>>;
  questionnaire_material: any;
  setQuestionnaireMaterial: React.Dispatch<React.SetStateAction<any>>;
  selectedProduct: string;
  setSelectedProduct: React.Dispatch<React.SetStateAction<string>>;
}

const AppContext = createContext<AppContextProps | undefined>(undefined);

export const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [material, setMaterial] = useState(require('../content.json'));
  const [questionnaire_material, setQuestionnaireMaterial] = useState(require('../questions.json'));
  const [selectedProduct, setSelectedProduct] = useState<string>('');

  return (
    <AppContext.Provider value={{ material, setMaterial, questionnaire_material, setQuestionnaireMaterial, selectedProduct, setSelectedProduct }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
};
