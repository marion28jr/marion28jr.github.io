import { FunctionComponent, useContext } from "react";
import { QuestionsContext, QuestionsContextType } from "../../../shared/utils/context";
import { Question } from "../../../shared/models/questions";

interface QuestionItemProps {
  question: Question;
}

const QuestionItem: FunctionComponent<QuestionItemProps> = (
  props: QuestionItemProps
) => {
  const { question } = props;
  const { questions, setQuestions } =
    useContext<QuestionsContextType>(QuestionsContext);

  const handleChoiceAnswer = (idQuestion: number, answer: string): void => {
    setQuestions(
      questions.map((question: Question) => ({
        ...question,
        choice_answer:
          question.id === idQuestion ? answer : question.choice_answer,
      }))
    );
  };

  return (
    <div>
      <p dangerouslySetInnerHTML={{ __html: question.wording }} />
      <div>
        {question.answers.map((answer: string, index: number) => (
          <button
            className={`btn ${
              question.choice_answer === answer
                ? "btn-success"
                : "btn-outline-success"
            }`}
            key={index}
            onClick={() => handleChoiceAnswer(question.id, answer)}
          >
            {answer}
          </button>
        ))}
      </div>
    </div>
  );
};

export default QuestionItem;
