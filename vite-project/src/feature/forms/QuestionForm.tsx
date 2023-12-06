import { FunctionComponent, useContext } from "react";
import { QuestionsContext } from "../../utils/context";
import { Question } from "../../utils/datas";

interface QuestionFormProps {
  question: Question;
}

const QuestionForm: FunctionComponent<QuestionFormProps> = (
  props: QuestionFormProps
) => {
  const { question } = props;
  const { questions, setQuestions } = useContext(QuestionsContext);

  const handleChoiceAnswers = (idQuestion: number, answers: string): void => {
    let list = [...questions];
    const selectedQuestion = list.find((q: Question) => q.id === idQuestion);
    if (selectedQuestion) {
      selectedQuestion.choice_answer = answers;
      setQuestions(list);
    }
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
            onClick={() => handleChoiceAnswers(question.id, answer)}
          >
            {answer}
          </button>
        ))}
      </div>
    </div>
  );
};

export default QuestionForm;
