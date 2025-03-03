import { useContext } from "react";
import { Context } from "./ContextWindow";

const ShowBooks = () => {
  const { data, loading, page, setPage } = useContext(Context);

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
                <div id="showbook-card">
                  <p>{book.title} </p>
                  <img src={book.formats["image/jpeg"]} alt="" />
                  {book.authors.map((author) => (
                    <p>{author.name} </p>
                  ))}
                </div>
              </>
            ))}
      </div>
    </>
  );
};
export default ShowBooks;
