import { FunctionComponent, useMemo } from "react";
import { Question } from "../../datas/question";

interface QuestionCorrectionProps {
  question: Question;
}

const QuestionCorrection: FunctionComponent<QuestionCorrectionProps> = (
  props: QuestionCorrectionProps
) => {
  const { question } = props;

  const answers = useMemo(
    () => [...question.incorrect_answers, question.correct_answer],
    [question]
  );
  const getcClassNameButton = (answer: string) => {
    if (
      answer === question.correct_answer
    ) {
      return "btn-success";
    } else if (question.choice_answer === answer) {
      return "btn-danger";
    }
    return "btn-outline-success";
  };

  return (
    <div>
      <p dangerouslySetInnerHTML={{ __html: question.question }} />
      <div>
        {answers.map((answer: string, index) => (
          <button className={`btn ${getcClassNameButton(answer)}`} key={index}>
            {answer}
          </button>
        ))}
      </div>
    </div>
  );
};

export default QuestionCorrection;
