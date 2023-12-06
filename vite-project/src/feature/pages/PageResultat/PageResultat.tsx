import { useContext, useMemo } from "react";
import { Link } from "react-router-dom";
import { QuestionsContext } from "../../../utils/context";
import { Question } from "../../../utils/datas";
import QuestionCorrection from "../../forms/QuestionCorrection";

const PageResultat = () => {
  const { questions, setQuestions } = useContext(QuestionsContext);

  const score = useMemo(
    () =>
      questions.reduce(
        (accumulator: number, question: Question) =>
          accumulator +
          (question.choice_answer === question.correct_answer ? 1 : 0),
        0
      ),
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
        <QuestionCorrection key={question.id} question={question} />
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
