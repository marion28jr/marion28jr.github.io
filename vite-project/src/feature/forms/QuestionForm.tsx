import { FunctionComponent, useMemo } from "react";
import { Question } from "../../datas/question";

interface QuestionFormProps {
  question: Question;
  handleChoiceQuestion: (question: string, answers: string) => void;
}

const QuestionForm: FunctionComponent<QuestionFormProps> = (
  props: QuestionFormProps
) => {
  const { question, handleChoiceQuestion } = props;

  const sortAnswers = (incorrectAnswers: string[], correctAnswer: string) => {
    const list = [...incorrectAnswers, correctAnswer];
    list.sort(() => 0.5 - Math.random());
    return list;
  };

  const answers = useMemo(
    () => sortAnswers(question.incorrect_answers, question.correct_answer),
    [question]
  );

  return (
    <div>
      <p dangerouslySetInnerHTML={{ __html: question.question }} />
      <div>
        {answers.map((answer: string, index) => (
          <button className={`btn ${ question.choice_answer === answer ? "btn-success" : "btn-outline-success"}`} key={index} onClick={() => handleChoiceQuestion(question.question,answer)}>{answer}</button>
        ))}
      </div>
    </div>
  );
};

export default QuestionForm;
