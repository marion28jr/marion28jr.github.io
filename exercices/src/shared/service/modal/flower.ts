export interface Flower {
  id: number;
  name: string;
  src: string;
}
export const flowers: Flower[] = [
  { id: 1, name: "rose", src: "/flowers/rose.jpg" },
  {
    id: 2,
    name: "white rose",
    src: "/flowers/white-rose.jpg",
  },
  {
    id: 3,
    name: "flower",
    src: "/flowers/flower.png",
  },
];
