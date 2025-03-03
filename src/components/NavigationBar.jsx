import { Outlet, Link } from "react-router-dom";
import "../styles/NavigationBar.css";
import { Context } from "./ContextWindow";
import { useContext, useState, useEffect } from "react";

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
    setValue(null);
  }

  const { setValue, error, data, setData, fetchData, loading, setLoading } =
    useContext(Context);

  return (
    <div id="navigationbar-card">
      <section id="top-card">
        <h1 id="title" onClick={() => setData(null)}>
          Gutendex
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
            searchBook();
            console.log("TRYKK");
          }}
        >
          Search
        </button>
      </section>
      <section>
        <div id="dropdown">
          Categories:
          <ul id="drop-ul">
            {categoryArr.map((name, i) => (
              <li id="dropdown-content" key={i}>
                <button
                  id="dropdown-btn"
                  value={name}
                  onClick={() => {
                    setLoading(true);
                    setData(null);
                    setValue(name);
                    fetchData();
                    // console.log("TRYKK");
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
