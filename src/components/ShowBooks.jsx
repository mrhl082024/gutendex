import { useContext } from "react";
import { Context } from "./ContextWindow";

const ShowBooks = () => {
  const { setCategory, error, data, fetchData } = useContext(Context);

  return (
    <>
      <div id="showbooks-card">
        {data === null || data === undefined
          ? null
          : data.results.map((book, i) => (
              <>
                <div id="showbook-card" key={i}>
                  <p key={i}>{book.title} </p>
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
