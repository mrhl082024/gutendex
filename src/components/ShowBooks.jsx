import { useContext } from "react";
import { Context } from "./ContextWindow";

const ShowBooks = () => {
  const { setCategory, error, data, fetchData, loading } = useContext(Context);

  return (
    <>
      <div>
        <button className="nav-button">Previous</button>
        <button className="nav-button">Next</button>
      </div>
      <section>
        <span id="showbooks-card">
          {loading === true ? <p>Loading...</p> : null}
          {data === null || data === undefined
            ? null
            : data.results.map((book) => (
                <>
                  <div id="showbook-card">
                    <p>{book.title} </p>
                    <img src={book.formats["image/jpeg"]} alt="" />
                    {console.log(book.formats["image/jpeg"])}
                    {book.authors.map((author) => (
                      <p>{author.name} </p>
                    ))}
                  </div>
                </>
              ))}
        </span>
      </section>
    </>
  );
};
export default ShowBooks;
