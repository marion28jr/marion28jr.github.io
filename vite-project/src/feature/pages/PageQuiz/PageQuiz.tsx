import { useContext, useMemo } from "react";
import { Link } from "react-router-dom";
import { QuestionsContext, QuestionsContextType } from "../../../utils/context";
import {
  NUMBER_OF_QUESTIONS,
  Question,
  getNumberOfAnswers,
} from "../../../utils/datas";
import QuestionForm from "../../forms/QuestionForm";
import SearchForm from "../../forms/SearchForm";

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
        <QuestionForm key={question.id} question={question} />
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
