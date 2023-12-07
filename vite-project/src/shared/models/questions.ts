interface QuestionQuery {
  type: string;
  difficulty: string;
  category: string;
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
}

export interface QuestionsQuery {
  results: QuestionQuery[];
}

export interface Question {
  id: number;
  wording: string;
  answers: string[];
  correct_answer: string;
  choice_answer?: string;
}

export const NUMBER_OF_QUESTIONS: number = 5;

export const getNumberOfAnswers = (questions: Question[]): number => {
  return questions.reduce(
    (accumulator: number, question: Question) =>
      accumulator + (question.choice_answer ? 1 : 0),
    0
  );
};

export const getNumberOfCorrectAnswers = (questions: Question[]): number => {
  return questions.reduce(
    (accumulator: number, question: Question) =>
      accumulator +
      (question.choice_answer === question.correct_answer ? 1 : 0),
    0
  );
};

const sortAnswers = (
  incorrectAnswers: string[],
  correctAnswer: string
): string[] => {
  const list: string[] = [...incorrectAnswers, correctAnswer];
  list.sort(() => 0.5 - Math.random());
  return list;
};

export const convertToQuestions = (questions: QuestionQuery[]): Question[] => {
  return questions.map((question: QuestionQuery, index: number) => ({
    id: index,
    answers: sortAnswers(question.incorrect_answers, question.correct_answer),
    correct_answer: question.correct_answer,
    wording: question.question,
  }));
};
