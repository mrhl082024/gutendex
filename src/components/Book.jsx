import { useContext } from "react";
import "../styles/Book.css";
import { Context } from "./ContextWindow";

function Book() {
  const [data, loading] = useContext(Context);

  return (
    <>
      <section>
        {data.results.map((book) => (
          <>
            <h1>{book.title} </h1>
            <img src={book.formats["image/jpeg"]} alt="Picture of book cover" />
          </>
        ))}
        <button>favorite</button>
        <h1>title</h1>
        <img src="" alt="" />
        <ul>
          <li>
            <p>author</p>
          </li>
          <li>
            <p>category</p>
          </li>
          <li>
            <p>language</p>
          </li>
          <li>
            <p>downloads</p>
          </li>
          <li>
            <a href="">link to web book</a>
          </li>
        </ul>
      </section>
      <section>
        <p>summary</p>
      </section>
    </>
  );
}
export default Book;
