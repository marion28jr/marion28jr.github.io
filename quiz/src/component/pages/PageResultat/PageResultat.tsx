import { useContext, useMemo } from "react";
import { NavigateFunction, useNavigate } from "react-router-dom";
import {
  Question,
  getNumberOfCorrectAnswers,
} from "../../../shared/models/questions";
import {
  QuestionsContext,
  QuestionsContextType,
} from "../../../shared/utils/context";
import { PATH_HOME } from "../../../shared/utils/path";
import AnswerItem from "./AnswerItem";

/**
 * Composent qui permet d'afficher la page résultat
 */
const PageResultat = () => {
  const { questions, setQuestions } =
    useContext<QuestionsContextType>(QuestionsContext);
  const navigate: NavigateFunction = useNavigate();

  /**
   * Le nombre de réponses correctes
   */
  const score: number = useMemo<number>(
    () => getNumberOfCorrectAnswers(questions),
    [questions]
  );

  /**
   * Permet de définir la couleur du texte en fonction du nombre de réponses correctes
   * @param answer réponse
   */
  const getClassNameBg = (): string => {
    if (score < 2) {
      return "bg-danger";
    } else if (score < 4) {
      return "bg-warning";
    }
    return "bg-success";
  };

  /**
   * Permet la redirection vers la page du quiz
   */
  const handleCreateNewQuiz = (): void => {
    setQuestions([]);
    navigate(PATH_HOME);
  };

  return (
    <div className="row justify-content-center">
      <div className="col-12">
        <h1 className="mb-4 text-center text-uppercase">Résultats</h1>
      </div>
      <div className="col-12">
        {questions.map((question: Question) => (
          <AnswerItem key={question.id} question={question} />
        ))}
      </div>
      <div className="col-6">
        <p className={`p-2 ${getClassNameBg()}`}>
          You scored {score} out of {questions.length}
        </p>
      </div>
      <div className="col-12">
        <button
          type="button"
          className="mt-4 btn btn-outline-dark w-100"
          onClick={handleCreateNewQuiz}
        >
          Create a new quiz
        </button>
      </div>
    </div>
  );
};
export default PageResultat;
