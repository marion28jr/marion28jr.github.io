import { useState } from "react";
import { Category } from "../../../datas/category";
import SearchForm from "../../forms/SearchForm";

const PageQuiz = () => {
  const [currentCategory, setCurrentCategory] = useState<Category>();
  const [currentLevel, setCurrentLevel] = useState<string>();

  return (
    <div className="container">
      <h1>Quiz maker</h1>
      <SearchForm
        currentCategory={currentCategory}
        currentLevel={currentLevel}
        setCurrentCategory={setCurrentCategory}
        setCurrentLevel={setCurrentLevel}
      />
    </div>
  );
};

export default PageQuiz;
