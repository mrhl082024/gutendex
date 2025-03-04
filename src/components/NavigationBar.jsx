import { Outlet, Link } from "react-router-dom";
import "../styles/NavigationBar.css";
import { Context } from "./ContextWindow";
import { useContext } from "react";

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

  const { setValue, setData, fetchData, setType, setLoading, clearContent } =
    useContext(Context);

  function handleClick() {
    clearContent();
    setLoading(true);
    setType("search");
    setValue(searchField.value);
    document.getElementById("searchField").value = "";
    console.log("TRYKK");
  }

  // document.getElementById("searchField").addEventListener("keyUp", (e) => {
  //   if (e.key === "Enter") {
  //     document.getElementById("search-btn").click();
  //   }
  // });

  return (
    <div id="navigationbar-card">
      <section id="top-card">
        <Link to="/">
          <h1 id="title" onClick={() => setData(null)}>
            Gutendex
          </h1>
        </Link>
        <div id="btn-search-card">
          <Link to="/FavoriteBooks">
            <button id="favorite-btn">Favorites</button>
          </Link>
          <input
            id="searchField"
            type="text"
            placeholder="Search Author or Book name"
            onKeyUp={(e) => {
              e.key === "Enter" ? handleClick() : null;
            }}
          />
          <Link to="/ShowBooks">
            <button
              id="search-btn"
              onClick={() => {
                handleClick();
              }}
            >
              Search
            </button>
          </Link>
        </div>
      </section>
      <section id="category-card">
        <ul id="category-list">
          Categories:
          {categoryArr.map((name, i) => (
            <li>
              <Link to="ShowBooks">
                <button
                  id="category-btn"
                  value={name}
                  onClick={() => {
                    clearContent();
                    setType("topic");
                    setValue(name);
                  }}
                >
                  {name}
                </button>
              </Link>
            </li>
          ))}
        </ul>
      </section>
      <Outlet />
    </div>
  );
};
export default NavBar;
