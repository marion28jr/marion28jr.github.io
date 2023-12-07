import { useContext, useMemo } from "react";
import { Link } from "react-router-dom";
import { QuestionsContext, QuestionsContextType } from "../../../shared/utils/context";
import AnswerItem from "./AnswerItem";
import { Question, getNumberOfCorrectAnswers } from "../../../shared/models/questions";

const PageResultat = () => {
  const { questions, setQuestions } =
    useContext<QuestionsContextType>(QuestionsContext);

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

  return (
    <div className="container">
      <h1>Résultats</h1>
      {questions.map((question: Question) => (
        <AnswerItem key={question.id} question={question} />
      ))}
      <p className={getClassNameBg()}>
        You scored {score} out of {questions.length}
      </p>
      <Link className="btn btn-primary" to="/" onClick={() => setQuestions([])}>
        Create a new quiz
      </Link>
    </div>
  );
};
export default PageResultat;
