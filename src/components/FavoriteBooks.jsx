import { useContext } from "react";
import { Context } from "./ContextWindow";
import { Link } from "react-router-dom";

const FavoriteBooks = () => {
  const {
    favorite,
    data,
    loading,
    page,
    setPage,
    type,
    setType,
    value,
    setValue,
    fetchData,
    clearContent,
  } = useContext(Context);
  return (
    <>
      {favorite.map((book) => (
        <Link to="/Book">
          <div
            id="favorite-card"
            onClick={() => {
              clearContent();
              setType("ids");
              setValue(book.id.toString());
              console.log("click");
            }}
          >
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
