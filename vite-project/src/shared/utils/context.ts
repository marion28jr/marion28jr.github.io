import React from "react";
import { Question } from "../models/questions";

export interface QuestionsContextType {
  questions: Question[];
  setQuestions: (questions: Question[]) => void;
}

/**
 * Le context Question
 */
export const QuestionsContext = React.createContext<QuestionsContextType>({
  questions: [],
  setQuestions: () => {},
});
