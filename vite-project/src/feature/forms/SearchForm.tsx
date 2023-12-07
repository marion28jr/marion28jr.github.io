import {
  ChangeEvent,
  FunctionComponent,
  MouseEvent,
  useContext,
  useEffect,
  useState,
} from "react";
import { QuestionsContext, QuestionsContextType } from "../../utils/context";
import { Category, QuestionQuery, convertToQuestions } from "../../utils/datas";
import { handleFetchResponse } from "../../utils/fetch";

const SearchForm: FunctionComponent = () => {
  const { setQuestions } = useContext<QuestionsContextType>(QuestionsContext);
  const [categories, setCategories] = useState<Category[]>([]);
  const levels: string[] = ["easy", "medium", "hard"];
  const [currentIdCategory, setCurrentIdCategory] = useState<string>();
  const [currentLevel, setCurrentLevel] = useState<string>();

  useEffect(() => {
    fetch("https://opentdb.com/api_category.php")
      .then((res) => res.json())
      .then((data) => setCategories(data.trivia_categories));
  }, []);

  const onChangeCategory = (event: ChangeEvent<HTMLSelectElement>): void => {
    setCurrentIdCategory(event.target.value);
  };

  const onChangeLevel = (event: ChangeEvent<HTMLSelectElement>): void => {
    setCurrentLevel(event.target.value);
  };

  const handleSubmit = (
    event: MouseEvent<HTMLButtonElement>,
    currentIdCategory?: string,
    currentLevel?: string
  ): void => {
    event.preventDefault();
    fetch(
      `https://opentdb.com/api.php?amount=5&category=${currentIdCategory}&difficulty=${currentLevel}&type=multiple`
    )
      .then(handleFetchResponse)
      .then((data) => {
        const questions: QuestionQuery[] = data.results;
        setQuestions(convertToQuestions(questions));
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <form>
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
      <button
        id="createBtn"
        onClick={(event) =>
          handleSubmit(event, currentIdCategory, currentLevel)
        }
      >
        Create
      </button>
    </form>
  );
};
export default SearchForm;
