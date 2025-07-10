import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
  useLocation,
} from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { useFetchProtectedData } from "./hooks/useFetchProtectedData";
import Profile from "./components/Profile/Profile";
import Login from "./components/Login/Login";
import Callback from "./components/Callback/Callback";
import Dashboard from "./pages/Dashboard/Dashboard";
import Section from "./pages/Section/Section";
import QuestionnairePage from "./pages/QuestionnairePage/QuestionnairePage";
import Header from "./components/Header/Header";
import ThankYouPage from "./pages/ThankYouPage/ThankYouPage";
import BackToTop from "./components/BackToTop/BackToTop";
import Loading from "./components/Loading/Loading";
import Footer from "./components/Footer/Footer";
import { sendAnswers } from "./services/api";
import './App.scss';
import { useAppContext } from "./context/AppContext";
import ProductPage from "./pages/ProductPage/ProductPage";

interface Question {
  id: string;
  question: string;
  options: {
    optionId: string;
    optionText: string;
  }[] | null;
  correctAnswer: string | null;
}

interface QuestionnairePageProps {
  title: string;
  sectionId: string;
  questions: Question[];
}

// Component to handle URL changes and update context
const RouteObserver = () => {
  const location = useLocation();
  const { setSelectedProduct } = useAppContext();

  useEffect(() => {
    const path = location.pathname;
    const pathSegments = path.split('/');
    if (pathSegments.length > 1 && ['firstaid', 'hygiene1', 'hygiene2', 'hygiene3', 'hygiene4', 'hygieneh3', 'hygienehb'].includes(pathSegments[1])) {
      setSelectedProduct(pathSegments[1]);
    }
  }, [location.pathname, setSelectedProduct]);

  return null;
};

const AppContent: React.FC = () => {
  const { isAuthenticated, isLoading, user } = useAuth0();
  const [collectedAnswers, setCollectedAnswers] = useState<
    { id: string; question: string; answer: string; optionText: string }[]
  >([]);
  const [completedSections, setCompletedSections] = useState<number>(0);
  const { material, questionnaire_material, selectedProduct } = useAppContext();

  useEffect(() => {
    const storedAnswers = JSON.parse(localStorage.getItem(`collectedAnswers_${selectedProduct}`) || "[]");
    setCollectedAnswers(storedAnswers);
    const storedCompletedSections = Number(localStorage.getItem(`completedSections_${selectedProduct}`) || 0);
    setCompletedSections(storedCompletedSections);
  }, [selectedProduct]);

  useFetchProtectedData();

  if (isLoading) {
    return <Loading />;
  }

  const sectionContent = material.topics.map((item: { topic_image: string; title: string; content: string; sectionId: string }) => ({
    topic_image: item.topic_image,
    title: item.title,
    content: item.content,
    sectionId: item.sectionId,
    nextRoute: "/questionnaire1",
  }));

  const sections = sectionContent.map((section: any, index: any) => ({
    ...section,
  }));

  const handleAnswersCollected = async (answers: { id: string; question: string; answer: string; optionText: string }[]) => {
    const updatedAnswers = [...collectedAnswers, ...answers];

    // Filter out duplicate answers based on the question field
    const uniqueAnswers = updatedAnswers.filter((answer, index, self) =>
      index === self.findIndex((a) => a.question === answer.question)
    );

    setCollectedAnswers(uniqueAnswers);
    try {
      localStorage.setItem(`collectedAnswers_${selectedProduct}`, JSON.stringify(uniqueAnswers)); // Save collected answers to local storage
    } catch (error) {
      console.error("Error saving collected answers:", error);
    }

    const completedSections = Number(localStorage.getItem(`completedSections_${selectedProduct}`) || 0);
    if (completedSections < sectionContent.length) {
      localStorage.setItem(`completedSections_${selectedProduct}`, String(completedSections + 1));
      setCompletedSections(completedSections + 1);
    }

    if (completedSections + 1 >= sectionContent.length) {
      await sendAnswers({ user: { id: user?.sub || '', email: user?.email || '' }, answers: uniqueAnswers, selectedProduct });

      await fetch('https://mokymuplatformabe-production.up.railway.app/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ user, answers: uniqueAnswers, selectedProduct })
      });

      try {
        localStorage.removeItem(`collectedAnswers_${selectedProduct}`); // Clear local storage after sending answers
      } catch (error) {
        console.error("Error clearing collected answers:", error);
      }
    }
  };

  const sampleProducts = [
    { name: 'firstaid', title: 'Pirmosios pagalbos mokymai' },
    { name: 'hygiene1', title: 'Higienos mokymai 1' },
    { name: 'hygiene2', title: 'Higienos mokymai 2' },
    { name: 'hygiene3', title: 'Higienos mokymai 3' },
    { name: 'hygiene4', title: 'Higienos mokymai 4' },
    { name: 'hygieneh3', title: 'Higienos mokymai H3' },
    { name: 'hygienehb', title: 'Higienos mokymai HB' },
  ];

  return (
    <>
      <RouteObserver />
      <Header />
      <BackToTop />
      <div className="content">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/callback" element={<Callback />} />
          <Route
            path="/profile"
            element={isAuthenticated ? <Profile /> : <Navigate to="/login" />}
          />
          <Route
            path={`/${selectedProduct}/dashboard`}
            element={isAuthenticated ? <Dashboard sections={sections.map((section: { title: string }) => section.title)} /> : <Navigate to="/login" />}
          />
          <Route path={`/${selectedProduct}/thankyoupage`} element={<ThankYouPage />} />
          {sections.map((section: any, index: any) => (
            <Route
              key={section.title}
              path={`/${selectedProduct}/section${index + 1}`}
              element={<Section {...section} />}
            />
          ))}
          {questionnaire_material.content.map((questionnaire: QuestionnairePageProps, index: number) => (
            <Route
              key={questionnaire.title}
              path={`/${selectedProduct}/questionnaire${index + 1}`}
              element={<QuestionnairePage {...questionnaire} onAnswersCollected={handleAnswersCollected} />}
            />
          ))}
          <Route path="/product" element={<ProductPage products={sampleProducts} />} />
          <Route
            path="/"
            element={isAuthenticated ? <ProductPage products={sampleProducts} /> : <Navigate to="/login" />}
          />
        </Routes>
      </div>
      <Footer />
    </>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <div className="app-container">
        <AppContent />
      </div>
    </Router>
  );
};

export default App;
