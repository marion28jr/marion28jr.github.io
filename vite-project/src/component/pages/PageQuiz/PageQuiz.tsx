import { useContext, useMemo } from "react";
import { Link } from "react-router-dom";
import {
  NUMBER_OF_QUESTIONS,
  Question,
  getNumberOfAnswers,
} from "../../../shared/models/questions";
import {
  QuestionsContext,
  QuestionsContextType,
} from "../../../shared/utils/context";
import { PATH_RESULTAT } from "../../../shared/utils/path";
import QuestionItem from "./QuestionItem";
import SearchForm from "./SearchForm";

const PageQuiz = () => {
  const { questions } = useContext<QuestionsContextType>(QuestionsContext);

  const showSubmitButton: boolean = useMemo<boolean>(
    () => getNumberOfAnswers(questions) === NUMBER_OF_QUESTIONS,
    [questions]
  );

  return (
    <div>
      <h1 className="mb-4 text-center text-uppercase">Quiz maker</h1>
      <SearchForm />
      <div className="mx-4 my-5">
        {questions.map((question: Question) => (
          <QuestionItem key={question.id} question={question} />
        ))}
      </div>
      {showSubmitButton && (
        <div className="d-grid gap-2 col-8 mx-auto">
          <Link className="btn btn-outline-dark" to={PATH_RESULTAT}>
            Save
          </Link>
        </div>
      )}
    </div>
  );
};

export default PageQuiz;
