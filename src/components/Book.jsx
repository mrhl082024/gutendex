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
                  <div>
                    <button>Favorite</button>
                    <h1>{book.title} </h1>
                    <img
                      src={book.formats["image/jpeg"]}
                      alt="cover picture of book"
                    />
                    <p>{book.download_count}</p>
                    <p>category</p>
                    <p>language</p>
                    <a href={book.formats["text/html"]} target="_blank">
                      web book link
                    </a>
                  </div>
                </section>
              </>
            ))}
      </div>
    </>
  );
};

export default Book;
