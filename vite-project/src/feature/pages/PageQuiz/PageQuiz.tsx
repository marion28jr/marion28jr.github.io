import { useContext, useEffect, useState } from "react";
import QuestionForm from "../../forms/QuestionForm";
import SearchForm from "../../forms/SearchForm";
import { QuestionsContext } from "../../../utils/context";
import { Link } from "react-router-dom";
import { Question } from "../../../utils/datas";

const PageQuiz = () => {
  const { questions } = useContext(QuestionsContext);
  const [showSubmitButton, setShowSubmitButton] = useState<boolean>(false);

  useEffect(() => {
    const numberAnswer = questions.reduce(
      (accumulator: number, question: Question) =>
        accumulator + (question.choice_answer ? 1 : 0),
      0
    );
    setShowSubmitButton(numberAnswer === 5);
  }, [questions]);

  return (
    <div className="container">
      <h1>Quiz maker</h1>
        <SearchForm />
        {questions.map((question: Question) => (
          <QuestionForm key={question.id} question={question} />
        ))}
      {showSubmitButton && <Link className="btn btn-primary" to="/resultat">Save</Link>}
    </div>
  );
};

export default PageQuiz;
