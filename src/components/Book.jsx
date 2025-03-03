import { useContext } from "react";
import { Context } from "./ContextWindow";
import "../styles/Book.css";

const Book = () => {
  const { data, loading } = useContext(Context);

  return (
    <>
      <div id="book-card">
        {loading === true ? <p>Loading...</p> : null}
        {console.log(data)}

        {data === null || data === undefined
          ? null
          : data.results.map((book) => (
              <>
                <section>
                  <button>Favorite</button>
                  <h1>{book.title} </h1>
                  <img
                    src={book.formats["image/jpeg"]}
                    alt="Picture of book cover"
                  />
                </section>
                <section>
                  <ul>
                    {book.bookshelves.map((category) => {
                      <li>{category}</li>;
                    })}
                  </ul>
                  <ul>
                    {book.authors.map((author) => {
                      <li>{author}</li>;
                    })}
                    {book.languages.map((languages) => {
                      <li>{languages} </li>;
                    })}
                    <li>{book.download_count}</li>
                  </ul>
                  <a href={book.formats["text/html"]}></a>
                </section>
              </>
            ))}
      </div>
    </>
  );
};
export default Book;
