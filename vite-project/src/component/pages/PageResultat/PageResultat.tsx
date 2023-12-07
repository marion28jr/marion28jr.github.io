import { useContext, useMemo } from "react";
import { useNavigate } from "react-router-dom";
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

const PageResultat = () => {
  const { questions, setQuestions } =
    useContext<QuestionsContextType>(QuestionsContext);
  const navigate = useNavigate();

  const score: number = useMemo<number>(
    () => getNumberOfCorrectAnswers(questions),
    [questions]
  );

  const getClassNameBg = (): string => {
    if (score < 2) {
      return "bg-danger";
    } else if (score < 4) {
      return "bg-warning";
    }
    return "bg-success";
  };

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
