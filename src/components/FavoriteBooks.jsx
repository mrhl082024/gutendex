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
      <div id="showbooks-card">
        {favorite.map((book) => (
          <Link to="/Book">
            <div
              id="showbook-card"
              onClick={() => {
                clearContent();
                setType("ids");
                setValue(book.id.toString());
                console.log("click");
              }}
            >
              <h1 id="book-title">{book.title} </h1>
              <img id="book-img" src={book.formats["image/jpeg"]} alt="" />
              <ul id="author-list">
                Authors:
                {book.authors.map((authors) => (
                  <li id="book-authors">Authors: {authors.name}</li>
                ))}
              </ul>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};
export default FavoriteBooks;
