import { useContext, useEffect, useState } from "react";
import QuestionCorrection from "../../forms/QuestionCorrection";
import { QuestionsContext } from "../../../utils/context";
import { Question } from "../../../utils/datas";

const PageResultat = () => {
  const { questions } = useContext(QuestionsContext);
  const [score, setScore] = useState<number>(0);

  useEffect(() => {
    setScore(
      questions.reduce(
        (accumulator: number, question: Question) =>
          accumulator +
          (question.choice_answer === question.correct_answer ? 1 : 0),
        0
      )
    );
  }, []);

  return (
    <div className="container">
      <h1>Résultats</h1>
      {questions.map((question: Question) => (
        <QuestionCorrection key={question.id} question={question} />
      ))}
      <p>
        You scored {score} out of {questions.length}{" "}
      </p>
    </div>
  );
};
export default PageResultat;
