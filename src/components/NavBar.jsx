import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import "../styles/NavBar.css";

const NavBar = () => {
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

  function yipp(e) {
    setQuery(e.target.value.toLowerCase());
  }

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
              <li key={i}>
                <button value={name} onClick={yipp}>
                  {name}
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
