import { Link } from "react-router-dom";
import { useState } from "react";
import "../styles/NavBar.css";

const NavBar = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState([true]);
  const [error, setError] = useState([null]);

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

  async function getBooksCategory(category) {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(
        `https://gutendex.com//books?topic=${category}`
      );
      const result = await response.json();
      setData(result);
      if (!response.ok) {
        throw new Error(`HTTP Error. Status ${response.status}`);
      }
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <section>
        <div id="dropdown">
          <ul id="drop-ul">
            &#10507; Categories:
            <div id="dropdown-content">
              {categoryArr.map((name, i) => (
                <button id="category-btn" key={i}>
                  {name}
                </button>
              ))}
            </div>
          </ul>
        </div>
      </section>
    </>
  );
};

export default NavBar;
