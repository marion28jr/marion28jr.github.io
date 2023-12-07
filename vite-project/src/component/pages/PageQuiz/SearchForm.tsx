import {
  ChangeEvent,
  FormEvent,
  FunctionComponent,
  useContext,
  useEffect,
  useState,
} from "react";
import { QuestionsContext, QuestionsContextType } from "../../../shared/utils/context";
import { handleFetchResponse } from "../../../shared/utils/fetch";
import { CategoriesQuery, Category } from "../../../shared/models/categories";
import { NUMBER_OF_QUESTIONS, QuestionsQuery, convertToQuestions } from "../../../shared/models/questions";

const SearchForm: FunctionComponent = () => {
  const { setQuestions } = useContext<QuestionsContextType>(QuestionsContext);
  const [categories, setCategories] = useState<Category[]>([]);
  const levels: string[] = ["easy", "medium", "hard"];
  const [currentIdCategory, setCurrentIdCategory] = useState<string>();
  const [currentLevel, setCurrentLevel] = useState<string>();

  useEffect(() => {
    fetch("https://opentdb.com/api_category.php")
      .then(handleFetchResponse)
      .then((data: CategoriesQuery) => setCategories(data.trivia_categories))
      .catch((error: Error) => {
        console.log(error);
      });
  }, []);

  const onChangeCategory = (event: ChangeEvent<HTMLSelectElement>): void => {
    setCurrentIdCategory(event.target.value);
  };

  const onChangeLevel = (event: ChangeEvent<HTMLSelectElement>): void => {
    setCurrentLevel(event.target.value);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    
    const categoryQuery = currentIdCategory
      ? `&category=${currentIdCategory}`
      : "";
    const levelQuery = currentLevel ? `&difficulty=${currentLevel}` : "";

    fetch(
      `https://opentdb.com/api.php?amount=${NUMBER_OF_QUESTIONS}${categoryQuery}${levelQuery}&type=multiple`
    )
      .then(handleFetchResponse)
      .then((data: QuestionsQuery) => {
        setQuestions(convertToQuestions(data.results));
      })
      .catch((error: Error) => {
        console.log(error);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <select
        id="categorySelect"
        value={currentIdCategory ?? "default"}
        onChange={onChangeCategory}
      >
        <option value="default" disabled hidden>
          Select a category
        </option>
        {categories.map((category: Category) => (
          <option key={category.id} value={category.id}>
            {category.name}
          </option>
        ))}
      </select>
      <select
        id="difficultySelect"
        value={currentLevel ?? "default"}
        onChange={onChangeLevel}
      >
        <option value="default" disabled hidden>
          Select difficulty
        </option>
        {levels.map((level: string) => (
          <option key={level} value={level}>
            {level}
          </option>
        ))}
      </select>
      <button id="createBtn" type="submit">
        Create
      </button>
    </form>
  );
};
export default SearchForm;
