import { getFirestore, collection, addDoc, serverTimestamp } from "firebase/firestore";
import app from "../firebaseConfig";

interface User {
  id: string;
  email: string;
}

interface Answer {
  id: string;
  question: string;
  answer: string;
  optionText: string;
}

interface SendAnswersPayload {
  user: User;
  answers: Answer[];
  selectedProduct: string;
}

export const sendAnswers = async (payload: SendAnswersPayload) => {

  const db = getFirestore(app);

  const collectionName = payload.selectedProduct === 'hygiene' ? 'userHygieneAnswers' : 'userAnswers';
  const answersCollection = collection(db, collectionName);

  try {
    const docRef = await addDoc(answersCollection, {
      ...payload,
      timestamp: serverTimestamp()
    });
    console.log("Document written with ID: ", docRef.id);
    return { status: 'success' };
  } catch (e) {
    console.error("Error adding document: ", e);
    return { status: 'error', error: e };
  }
};
