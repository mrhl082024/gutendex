import { useContext } from "react";
import { Context } from "./ContextWindow";
import { Link } from "react-router-dom";

const FavoriteBooks = () => {
  const { favorite } = useContext(Context);
  return (
    <>
      {favorite.map((book) => (
        <Link>
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
        </Link>
      ))}
    </>
  );
};
export default FavoriteBooks;
