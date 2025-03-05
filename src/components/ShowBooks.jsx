import { useContext } from "react";
import { Context } from "./ContextWindow";
import { Link, Outlet } from "react-router-dom";
import "../styles/ShowBooks.css";

const ShowBooks = () => {
  const {
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
        {loading === true ? <p>Loading...</p> : null}
        {data === null || data === undefined ? null : (
          <span id="btn-card">
            <button
              id="prev-page"
              onClick={() => {
                setPage(page - 1);
              }}
            >
              Prev
            </button>
            <p id="page-counter">{page} </p>
            <button
              id="next-page"
              onClick={() => {
                setPage(page + 1);
              }}
            >
              Next
            </button>
          </span>
        )}

        {data === null || data === undefined
          ? null
          : data.results.map((book) => (
              <>
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
                    <p id="book-title">{book.title} </p>
                    <img
                      id="book-img"
                      src={book.formats["image/jpeg"]}
                      alt=""
                    />
                    <ul id="author-list">
                      {book.authors.map((author) => (
                        <li id="book-authors">Authors: {author.name} </li>
                      ))}
                    </ul>
                  </div>
                </Link>
              </>
            ))}
      </div>
      <Outlet />
    </>
  );
};
export default ShowBooks;
