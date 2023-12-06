import { FunctionComponent } from "react";
import { Question } from "../../utils/datas";

interface QuestionCorrectionProps {
  question: Question;
}

const QuestionCorrection: FunctionComponent<QuestionCorrectionProps> = (
  props: QuestionCorrectionProps
) => {
  const { question } = props;

  const getClassNameButton = (answer: string): string => {
    if (answer === question.correct_answer) {
      return "btn-success";
    } else if (question.choice_answer === answer) {
      return "btn-danger";
    }
    return "btn-outline-success";
  };

  return (
    <div>
      <p dangerouslySetInnerHTML={{ __html: question.wording }} />
      <div>
        {question.answers.map((answer: string, index: number) => (
          <button className={`btn ${getClassNameButton(answer)}`} key={index}>
            {answer}
          </button>
        ))}
      </div>
    </div>
  );
};

export default QuestionCorrection;
