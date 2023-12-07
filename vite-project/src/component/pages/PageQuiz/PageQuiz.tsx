import { useContext, useMemo } from "react";
import { Link } from "react-router-dom";
import { QuestionsContext, QuestionsContextType } from "../../../shared/utils/context";
import SearchForm from "./SearchForm";
import QuestionItem from "./QuestionItem";
import { NUMBER_OF_QUESTIONS, Question, getNumberOfAnswers } from "../../../shared/models/questions";

const PageQuiz = () => {
  const { questions } = useContext<QuestionsContextType>(QuestionsContext);

  const showSubmitButton: boolean = useMemo<boolean>(
    () => getNumberOfAnswers(questions) === NUMBER_OF_QUESTIONS,
    [questions]
  );

  return (
    <div className="container">
      <h1>Quiz maker</h1>
      <SearchForm />
      {questions.map((question: Question) => (
        <QuestionItem key={question.id} question={question} />
      ))}
      {showSubmitButton && (
        <Link className="btn btn-primary" to="/resultat">
          Save
        </Link>
      )}
    </div>
  );
};

export default PageQuiz;
