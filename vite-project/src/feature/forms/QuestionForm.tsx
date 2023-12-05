import { FunctionComponent, useContext, useMemo } from "react";
import { Question } from "../../datas/question";
import { QuestionsContext } from "../hook/QuestionsContext/QuestionsContext";

interface QuestionFormProps {
  question: Question;
}

const QuestionForm: FunctionComponent<QuestionFormProps> = (
  props: QuestionFormProps
) => {
  const { question } = props;
  const { questions ,setQuestions } = useContext(QuestionsContext);

  const sortAnswers = (incorrectAnswers: string[], correctAnswer: string) => {
    const list = [...incorrectAnswers, correctAnswer];
    list.sort(() => 0.5 - Math.random());
    return list;
  };

  const answers = useMemo(
    () => sortAnswers(question.incorrect_answers, question.correct_answer),
    [question]
  );

  const handleChoiceAnswers = (question: string, answers: string) => {
    let list = [...questions];
    const selectedQuestion = list.find(
      (q: Question) => q.question === question
    );
    if (selectedQuestion) {
      selectedQuestion.choice_answer = answers;
      setQuestions(list);
    }
  };

  return (
    <div>
      <p dangerouslySetInnerHTML={{ __html: question.question }} />
      <div>
        {answers.map((answer: string, index) => (
          <button className={`btn ${ question.choice_answer === answer ? "btn-success" : "btn-outline-success"}`} key={index} onClick={() => handleChoiceAnswers(question.question,answer)}>{answer}</button>
        ))}
      </div>
    </div>
  );
};

export default QuestionForm;
