import { useLocation } from "react-router-dom";

const ShowBooks = (props) => {
  return (
    <>
      <div id="ShowBooks-card">
        <section>
          <h2>book title</h2>
          {/* <img src="" alt="" /> */}
          <p>authors</p>
          <p>bookshelves</p>
          <p>subject</p>
          <p>download count</p>
          <p>languages</p>
          <p>media type</p>
        </section>
        <section>
          <p>summary</p>
        </section>
      </div>
    </>
  );
};
export default ShowBooks;
