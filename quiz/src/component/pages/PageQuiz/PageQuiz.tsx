import { FormEvent, FunctionComponent, useContext, useMemo } from "react";
import { NavigateFunction, useNavigate } from "react-router-dom";
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

/**
 * Composent qui permet d'afficher la page pour faire le quiz
 */
const PageQuiz: FunctionComponent = () => {
  const { questions } = useContext<QuestionsContextType>(QuestionsContext);
  const navigate: NavigateFunction = useNavigate();

  /**
   * Permet d'indiquer s'il faut rendre visible le bouton "Save"
   */
  const showSubmitButton: boolean = useMemo<boolean>(
    () => getNumberOfAnswers(questions) === NUMBER_OF_QUESTIONS,
    [questions]
  );

  /**
   * Permet la redirection vers la page des résultats
   */
  const handleSubmitQuiz = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    navigate(PATH_RESULTAT);
  };

  return (
    <div>
      <h1 className="mb-4 text-center text-uppercase">Quiz maker</h1>
      <SearchForm />
      <form onSubmit={handleSubmitQuiz}>
        <div className="mx-4 my-5">
          {questions.map((question: Question) => (
            <QuestionItem key={question.id} question={question} />
          ))}
        </div>
        {showSubmitButton && (
          <div className="d-grid gap-2 col-8 mx-auto">
            <button type="submit" className="btn btn-outline-dark">
              Save
            </button>
          </div>
        )}
      </form>
    </div>
  );
};

export default PageQuiz;
