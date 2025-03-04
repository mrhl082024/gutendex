import { useContext } from "react";
import { Context } from "./ContextWindow";

const FavoriteBooks = () => {
  const { favorite } = useContext(Context);
  return (
    <>
      {favorite.map((book) => (
        <div id="favorite-card">
          <h1>{book.title} </h1>
          <img src={book.formats["image/jpeg"]} alt="" />
          <ul>
            Authors:
            {book.authors.map((authors) => (
              <li>{authors.name}</li>
            ))}
          </ul>
        </div>
      ))}
    </>
  );
};
export default FavoriteBooks;
