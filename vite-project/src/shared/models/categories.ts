export interface Category {
  id: number;
  name: string;
}

export interface CategoriesQuery {
  trivia_categories: Category[];
}
