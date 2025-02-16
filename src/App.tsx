import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
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

const App: React.FC = () => {
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

  const sectionContent = [
    {
      title: material.first_topic.title,
      content: material.first_topic.content,
      sectionId: material.first_topic.sectionId,
      nextRoute: "/questionnaire1",
    },
    {
      title: material.second_topic.title,
      content: material.second_topic.content,
      sectionId: material.second_topic.sectionId,
      nextRoute: "/questionnaire2",
    },
    {
      title: material.third_topic.title,
      content: material.third_topic.content,
      sectionId: material.third_topic.sectionId,
      nextRoute: "/questionnaire3",
    },
    {
      title: material.fourth_topic.title,
      content: material.fourth_topic.content,
      sectionId: material.fourth_topic.sectionId,
      nextRoute: "/questionnaire4",
    },
    {
      title: material.fifth_topic.title,
      content: material.fifth_topic.content,
      sectionId: material.fifth_topic.sectionId,
      nextRoute: "/questionnaire5",
    },
  ];

  const sections = sectionContent.map((section, index) => ({
    ...section,
  }));

  const handleAnswersCollected = async (answers: { id: string; question: string; answer: string; optionText: string }[]) => {
    const updatedAnswers = [...collectedAnswers, ...answers];

    // Filter out duplicate answers based on the question field
    const uniqueAnswers = updatedAnswers.filter((answer, index, self) =>
      index === self.findIndex((a) => a.question === answer.question)
    );

    setCollectedAnswers(uniqueAnswers);
    console.log("Answers collected so far:", uniqueAnswers); // Log collected answers so far

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
      console.log("Sending collected answers to the API..."); // Log before sending API request

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
    { name: 'hygiene', title: 'Higienos mokymai' },
  ];

  return (
    <Router>
      <div className="app-container">
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
              path="/dashboard"
              element={isAuthenticated ? <Dashboard sections={sections.map(section => section.title)} /> : <Navigate to="/login" />}
            />
            <Route path="/thankyoupage" element={<ThankYouPage />} />
            {sections.map((section, index) => (
              <Route
                key={section.title}
                path={`/section${index + 1}`}
                element={<Section {...section} />}
              />
            ))}
            {questionnaire_material.content.map((questionnaire: QuestionnairePageProps, index: number) => (
              <Route
                key={questionnaire.title}
                path={`/questionnaire${index + 1}`}
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
      </div>
    </Router>
  );
};

export default App;
