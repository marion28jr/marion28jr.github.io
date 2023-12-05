import { useEffect, useState } from "react";
import { Question } from "../../../datas/question";
import QuestionForm from "../../forms/QuestionForm";
import SearchForm from "../../forms/SearchForm";
import { QuestionsContext } from "../../hook/QuestionsContext/QuestionsContext";

const PageQuiz = () => {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [showSubmitButton, setShowSubmitButton] = useState<boolean>(false);

  useEffect(() => {
    const numberAnswer = questions.reduce(
      (accumulator: number, question: Question) =>
        accumulator + (question.choice_answer ? 1 : 0),
      0
    );
    setShowSubmitButton(numberAnswer === 5);
  }, [questions]);

  return (
    <div className="container">
      <h1>Quiz maker</h1>
      <QuestionsContext.Provider value={{ questions, setQuestions }}>
        <SearchForm />
        {questions.map((question: Question, index) => (
          <QuestionForm key={index} question={question} />
        ))}
      </QuestionsContext.Provider>
      {showSubmitButton && <button>Save</button>}
    </div>
  );
};

export default PageQuiz;
