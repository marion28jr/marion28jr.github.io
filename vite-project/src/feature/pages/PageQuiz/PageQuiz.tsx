import { MouseEvent, useState } from "react";
import { Question } from "../../../datas/question";
import { handleFetchResponse } from "../../../utils/fetch";
import QuestionForm from "../../forms/QuestionForm";
import SearchForm from "../../forms/SearchForm";

const PageQuiz = () => {
  const [questions, setQuestions] = useState<Question[]>([]);

  const handleSubmit = (
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

  return (
    <div className="container">
      <h1>Quiz maker</h1>
      <SearchForm handleSubmit={handleSubmit} />
      {questions.map((question: Question, index) => (
        <QuestionForm key={index} question={question} />
      ))}
    </div>
  );
};

export default PageQuiz;
