import { useContext } from "react";
import { Context } from "./ContextWindow";

const ShowBooks = () => {
  const { setCategory, error, data, fetchData, loading } = useContext(Context);

  return (
    <>
      <div id="showbooks-card">
        {loading === true ? <p>Loading...</p> : null}
        {data === null || data === undefined
          ? null
          : data.results.map((book) => (
              <>
                <div id="showbook-card">
                  <p>{book.title} </p>
                  {book.authors.map((author) => (
                    <p>{author.name} </p>
                  ))}
                  {book.summaries.map((sum) => (
                    <p>{sum} </p>
                  ))}
                </div>
              </>
            ))}
      </div>
    </>
  );
};
export default ShowBooks;
