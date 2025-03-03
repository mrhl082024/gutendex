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
    setType("");
    setValue("");
    console.log("cleared content");
  }
  const { setValue, setData, fetchData, setType, setLoading } =
    useContext(Context);

  return (
    <div id="navigationbar-card">
      <section id="top-card">
        <h1 id="title" onClick={() => setData(null)}>
          <Link to="/">Gutendex</Link>
        </h1>
        <input
          id="searchField"
          type="text"
          placeholder="Search Author or Book name"
        />
        <button
          id="search-btn"
          onClick={() => {
            clearContent();
            setLoading(true);
            setType("search");
            setValue(searchField.value);
            fetchData();
            console.log("TRYKK");
          }}
        >
          <Link id="dropdown-name" to="/ShowBooks">
            Search
          </Link>
        </button>
      </section>
      <section>
        <div id="dropdown">
          Categories:
          <ul id="drop-ul">
            {categoryArr.map((name, i) => (
              <li id="dropdown-content" key={i}>
                <Link to="ShowBooks">
                  <button
                    id="dropdown-btn"
                    value={name}
                    onClick={() => {
                      clearContent();
                      setLoading(true);
                      setType("topic");
                      setValue(name);
                      fetchData();
                      // console.log("TRYKK");
                    }}
                  >
                    {name}
                  </button>
                </Link>
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
