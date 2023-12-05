import { ChangeEvent, FunctionComponent, useEffect, useState } from "react";
import { Category } from "../../datas/category";

interface SearchFormProps {
  currentIdCategory?: string;
  currentLevel?: string;
  setCurrentIdCategory: (currentIdCategory?: string) => void;
  setCurrentLevel: (currentLevel?: string) => void;
}

const SearchForm: FunctionComponent<SearchFormProps> = (
  props: SearchFormProps
) => {
  const {
    currentIdCategory,
    currentLevel,
    setCurrentIdCategory,
    setCurrentLevel,
  } = props;

  const [categories, setCategories] = useState<Category[]>([]);
  const levels = ["easy", "medium", "hard"];

  useEffect(() => {
    fetch("https://opentdb.com/api_category.php")
      .then((res) => res.json())
      .then((data) => setCategories(data.trivia_categories));
  }, []);

  const onChangeCategory = (event: ChangeEvent<HTMLSelectElement>) => {
    setCurrentIdCategory(event.target.value);
  };

  const onChangeLevel = (event: ChangeEvent<HTMLSelectElement>) => {
    setCurrentLevel(event.target.value);
  };

  const handleSubmit = () => {};

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
      <input id="createBtn" type="submit" value="Create" />
    </form>
  );
};
export default SearchForm;
