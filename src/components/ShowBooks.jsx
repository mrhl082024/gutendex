import { useContext } from "react";
import { Context } from "./ContextWindow";

const ShowBooks = () => {
  const { data, loading } = useContext(Context);

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
