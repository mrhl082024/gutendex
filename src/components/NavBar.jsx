import { Link, useHistory } from "react-router-dom";
import { useEffect, useState } from "react";
import "../styles/NavBar.css";
import ShowBooks from "./ShowBooks.jsx";

const NavBar = () => {
  const history = useHistory();
  const testdata = {
    title: "test tittel",
    age: "test-age",
  };
  const yippi = () => {
    history.push({ pathname: "/ShowBooks", state: testdata });
  };

  const categoryArr = [
    "Fiction",
    "Mystery",
    "Thriller",
    "Romance",
    "Fantasy",
    "Morality",
    "Society",
    "Power",
    "Justice",
    "Adventure",
    "Tragedy",
    "War",
    "Philosophy",
  ];

  const [data, setData] = useState();
  const [loading, setLoading] = useState([true]);
  const [error, setError] = useState([null]);
  const [query, setQuery] = useState("");

  console.log(data);
  useEffect(() => {
    if (query !== "")
      fetch(`https://gutendex.com/books?topic=${query}`)
        .then((res) => res.json())
        .then((res) => setData(res.results))
        .catch((err) => setError(error.message));
  }, [query]);

  return (
    <>
      <section>
        <div id="dropdown">
          &#10507; Categories:
          <ul id="drop-ul">
            {categoryArr.map((name, i) => (
              <li id="dropdown-content" key={i}>
                <button id="dropdown-btn" value={name} onClick={yippi}>
                  {/* <Link to={<ShowBooks />}>{name}</Link> */}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
};
export default NavBar;
