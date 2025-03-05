import { useContext } from "react";
import { Context } from "./ContextWindow";
import "../styles/Book.css";

const Book = () => {
  const { data, loading, favorite, setFavorite } = useContext(Context);

  function addFavorite(book) {
    if (favorite.map((obj) => obj.id === book.id).includes(true))
      console.log("its a dupe");
    else {
      setFavorite([...favorite, book]);
      console.log("youre good");
    }
  }
  return (
    <>
      <div>
        {loading === true ? <p id="loading">Loading...</p> : null}
        {data === null || data === undefined
          ? null
          : data.results.map((book) => (
              <>
                <div id="book-card">
                  <section id="book-cover-info">
                    <h1>{book.title} </h1>
                    <img
                      src={book.formats["image/jpeg"]}
                      alt="cover picture of book"
                    />
                  </section>
                  <section id="book-details">
                    <ul>
                      Authors:
                      {book.authors.map((authors) => (
                        <li>{authors.name}</li>
                      ))}
                    </ul>
                    <ul>
                      Downloads:
                      <li>{book.download_count}</li>
                    </ul>
                    <ul>
                      Languages:
                      {book.languages.map((languages) => (
                        <li>{languages}</li>
                      ))}
                    </ul>
                    <button id="read-btn">
                      <a
                        href={book.formats["text/plain; charset=us-ascii"]}
                        target="_blank"
                      >
                        Read
                      </a>
                    </button>
                    <button
                      id="add-favorite-btn"
                      onClick={() => {
                        addFavorite(book);
                      }}
                    >
                      Favorite
                    </button>
                  </section>
                  <section id="bookshelves">
                    <ul>
                      Bookshelves:
                      {book.bookshelves.map((categories) => (
                        <li>{categories} </li>
                      ))}
                    </ul>
                  </section>
                </div>
              </>
            ))}
      </div>
    </>
  );
};

export default Book;
