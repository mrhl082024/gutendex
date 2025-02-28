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

  function clearContent() {
    setData(null);
  }

  const { setCategory, error, data, setData, fetchData, loading, setLoading } =
    useContext(Context);

  return (
    <div id="navigationbar-card">
      <h1 id="title" onClick={() => setData(null)}>
        Gutendex
      </h1>
      <input
        id="search-field"
        type="search"
        placeholder="Search Author or Book name"
      />
      <section>
        <div id="dropdown">
          &#10507; Categories:
          <ul id="drop-ul">
            {categoryArr.map((name, i) => (
              <li id="dropdown-content" key={i}>
                <button
                  id="dropdown-btn"
                  value={name}
                  onClick={() => {
                    setLoading(true);
                    setData(null);
                    setCategory(name);
                    fetchData();
                    console.log("TRYKK");
                  }}
                >
                  <Link id="dropdown-name" to="/ShowBooks">
                    {name}
                  </Link>
                </button>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <Outlet />
    </div>
  );
};
export default NavBar;
