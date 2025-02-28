import { useContext } from "react";
import { Context } from "./ContextWindow";

const ShowBooks = (props) => {
  const { setCategory, error, data, fetchData } = useContext(Context);

  return (
    <>
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
      {/* <button onClick={() => setCategory("fiction")}>fetch some data</button> */}
    </>
  );
};
export default ShowBooks;
