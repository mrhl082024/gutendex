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
  console.log(favorite);

  return (
    <>
      <div id="book-card">
        {loading === true ? <p>Loading...</p> : null}
        {data === null || data === undefined
          ? null
          : data.results.map((book) => (
              <>
                <section>
                  <button
                    onClick={() => {
                      addFavorite(book);
                    }}
                  >
                    Favorite
                  </button>
                  <h1>{book.title} </h1>
                  <img
                    src={book.formats["image/jpeg"]}
                    alt="Picture of book cover"
                  />
                </section>
                <section>
                  <div>
                    <ul id="categories">
                      {book.bookshelves.map((category) => (
                        <li>{category}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <ul id="authors">
                      {book.authors.map((author) => (
                        <li>{author}test</li>
                      ))}
                      {book.languages.map((languages) => (
                        <li>
                          <p>{languages} test</p>
                        </li>
                      ))}
                      <li>{book.download_count}</li>
                    </ul>
                  </div>
                  <a href={book.formats["text/html"]} target="_blank">
                    Link to Web book
                  </a>
                </section>
                <section>
                  <div>
                    <p>
                      {book.summaries.map((summaries) => (
                        <p>{summaries} </p>
                      ))}
                    </p>
                  </div>
                </section>
              </>
            ))}
      </div>
    </>
  );
};
export default Book;
