import {
  ChangeEvent,
  FormEvent,
  FunctionComponent,
  useContext,
  useEffect,
  useState,
} from "react";
import { CategoriesQuery, Category } from "../../../shared/models/categories";
import {
  NUMBER_OF_QUESTIONS,
  QuestionsQuery,
  convertToQuestions,
} from "../../../shared/models/questions";
import {
  QuestionsContext,
  QuestionsContextType,
} from "../../../shared/utils/context";
import { handleFetchResponse } from "../../../shared/utils/fetch";

/**
 * Composent qui permet d'afficher la recherche des questions
 */
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

  /**
   * Permet de changer la catégorie choisie
   * @param event Événement
   */
  const onChangeCategory = (event: ChangeEvent<HTMLSelectElement>): void => {
    setCurrentIdCategory(event.target.value);
  };

  /**
   * Permet de changer le niveau choisi
   * @param event Événement
   */
  const onChangeLevel = (event: ChangeEvent<HTMLSelectElement>): void => {
    setCurrentLevel(event.target.value);
  };

  /**
   * Permet de récupérer 5 questions en fonction de la catégorie et du niveau choisis
   * @param event Événement
   */
  const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();

    const categoryQuery: string = currentIdCategory
      ? `&category=${currentIdCategory}`
      : "";
    const levelQuery: string = currentLevel
      ? `&difficulty=${currentLevel}`
      : "";

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
      <div className="row gx-2">
        <div className="col-5">
          <select
            id="categorySelect"
            value={currentIdCategory ?? "default"}
            onChange={onChangeCategory}
            className="form-select"
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
        </div>
        <div className="col-5">
          <select
            id="difficultySelect"
            value={currentLevel ?? "default"}
            onChange={onChangeLevel}
            className="form-select"
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
        </div>
        <div className="col-2">
          <button id="createBtn" type="submit" className="btn btn-outline-dark">
            Create
          </button>
        </div>
      </div>
    </form>
  );
};
export default SearchForm;
