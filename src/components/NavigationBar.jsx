import { Link, Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import "../styles/NavBar.css";
import ShowBooks from "./ShowBooks.jsx";

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

  return (
    <>
      <section>
        <div id="dropdown">
          &#10507; Categories:
          <ul id="drop-ul">
            {categoryArr.map((name, i) => (
              <li id="dropdown-content" key={i}>
                <button id="dropdown-btn" value={name}>
                  <Link to="/ShowBooks">{name}</Link>
                </button>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <Outlet />
    </>
  );
};
export default NavBar;
