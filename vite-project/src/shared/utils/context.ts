import React from "react";
import { Question } from "../models/questions";

export interface QuestionsContextType {
  questions: Question[];
  setQuestions: (questions: Question[]) => void;
}

export const QuestionsContext = React.createContext<QuestionsContextType>({
  questions: [],
  setQuestions: () => {},
});

