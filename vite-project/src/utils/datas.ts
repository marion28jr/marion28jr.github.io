export interface Category {
  id: number;
  name: string;
}

export interface Question {
  type: string;
  difficulty: string;
  category: string;
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
  choice_answer: string;
}