import { useContext } from "react";
import { Context } from "./ContextWindow";

const FavoriteBooks = () => {
  const { favorite } = useContext(Context);
  return <>{}</>;
};
export default FavoriteBooks;
