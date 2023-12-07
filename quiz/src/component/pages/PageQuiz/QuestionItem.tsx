import { FunctionComponent, MouseEvent, useContext } from "react";
import { Question } from "../../../shared/models/questions";
import {
  QuestionsContext,
  QuestionsContextType,
} from "../../../shared/utils/context";

interface QuestionItemProps {
  question: Question;
}

/**
 * Composent qui permet d'afficher une question avec son wording et ses réponses
 */
const QuestionItem: FunctionComponent<QuestionItemProps> = (
  props: QuestionItemProps
) => {
  const { question } = props;
  const { questions, setQuestions } =
    useContext<QuestionsContextType>(QuestionsContext);

  /**
   * Permet d'enregistrer la réponse choisie pour une question
   * @param event Événement
   * @param idQuestion l'id de la question
   * @param answer la réponse choisie
   */
  const handleChoiceAnswer = (
    event: MouseEvent<HTMLButtonElement>,
    idQuestion: number,
    answer: string
  ): void => {
    event.preventDefault();
    setQuestions(
      questions.map((question: Question) => ({
        ...question,
        choice_answer:
          question.id === idQuestion ? answer : question.choice_answer,
      }))
    );
  };

  return (
    <div className="mt-2 mb-4">
      <p dangerouslySetInnerHTML={{ __html: question.wording }} />
      <div>
        {question.answers.map((answer: string, index: number) => (
          <button
            className={`btn me-2 ${
              question.choice_answer === answer
                ? "btn-success"
                : "btn-outline-success"
            }`}
            key={index}
            onClick={(event) => handleChoiceAnswer(event, question.id, answer)}
          >
            {answer}
          </button>
        ))}
      </div>
    </div>
  );
};

export default QuestionItem;
