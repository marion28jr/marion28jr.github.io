import { MouseEvent, useEffect, useState } from "react";
import { Question } from "../../../datas/question";
import { handleFetchResponse } from "../../../utils/fetch";
import QuestionForm from "../../forms/QuestionForm";
import SearchForm from "../../forms/SearchForm";

const PageQuiz = () => {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [showSubmitButton, setShowSubmitButton] = useState<boolean>(false);

  const handleSubmitSearch = (
    event: MouseEvent<HTMLButtonElement>,
    currentIdCategory?: string,
    currentLevel?: string
  ) => {
    event.preventDefault();
    fetch(
      `https://opentdb.com/api.php?amount=5&category=${currentIdCategory}&difficulty=${currentLevel}&type=multiple`
    )
      .then(handleFetchResponse)
      .then((data) => setQuestions(data.results))
      .catch((error) => {
        console.log(error);
      });
  };

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
      <SearchForm handleSubmit={handleSubmitSearch} />
      {questions.map((question: Question, index) => (
        <QuestionForm
          key={index}
          question={question}
          handleChoiceAnswers={handleChoiceAnswers}
        />
      ))}
      {
        showSubmitButton && <button>Save</button>
      }
    </div>
  );
};

export default PageQuiz;
