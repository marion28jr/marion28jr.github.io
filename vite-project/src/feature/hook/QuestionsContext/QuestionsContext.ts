import React from "react";
import { Question } from "../../../datas/question";

interface QuestionsContextType {
  questions: Question[];
  setQuestions: (questions: Question[]) => void;
}

export const QuestionsContext = React.createContext<QuestionsContextType>({
  questions: [],
  setQuestions: () => {},
});

