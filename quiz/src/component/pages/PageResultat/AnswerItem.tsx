import { FunctionComponent } from "react";
import { Question } from "../../../shared/models/questions";

interface AnswerItemProps {
  question: Question;
}

/**
 * Composent qui permet d'afficher la correction d'une question avec son wording et ses réponses
 */
const AnswerItem: FunctionComponent<AnswerItemProps> = (
  props: AnswerItemProps
) => {
  const { question } = props;

  /**
   * Permet de définir la couleur d'une réponse
   * @param answer réponse
   */
  const getClassNameColorAnswer = (answer: string): string => {
    if (answer === question.correct_answer) {
      return "bg-success text-white";
    } else if (question.choice_answer === answer) {
      return "bg-danger text-white";
    }
    return "";
  };

  return (
    <div className="mt-2 mb-4">
      <p dangerouslySetInnerHTML={{ __html: question.wording }} />
      <div className="row row-cols-auto ms-1">
        {question.answers.map((answer: string, index: number) => (
          <div
            className={`col me-2 px-2 py-1 border border-success rounded ${getClassNameColorAnswer(
              answer
            )}`}
            key={index}
          >
            {answer}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnswerItem;
