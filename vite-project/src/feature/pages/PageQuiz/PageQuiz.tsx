import { useState } from "react";
import SearchForm from "../../forms/SearchForm";

const PageQuiz = () => {
  const [currentIdCategory, setCurrentIdCategory] = useState<string>();
  const [currentLevel, setCurrentLevel] = useState<string>();

  return (
    <div className="container">
      <h1>Quiz maker</h1>
      <SearchForm
        currentIdCategory={currentIdCategory}
        currentLevel={currentLevel}
        setCurrentIdCategory={setCurrentIdCategory}
        setCurrentLevel={setCurrentLevel}
      />
    </div>
  );
};

export default PageQuiz;
