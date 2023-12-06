import { useContext, useMemo } from "react";
import { Link } from "react-router-dom";
import { QuestionsContext } from "../../../utils/context";
import { Question, getNumberOfAnswers } from "../../../utils/datas";
import QuestionForm from "../../forms/QuestionForm";
import SearchForm from "../../forms/SearchForm";

const PageQuiz = () => {
  const { questions } = useContext(QuestionsContext);

  const showSubmitButton = useMemo(
    () => getNumberOfAnswers(questions) === 5,
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
