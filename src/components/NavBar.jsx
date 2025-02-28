import { Link, Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import "../styles/NavBar.css";
import ShowBooks from "./ShowBooks.jsx";

const NavBar = () => {
  const testObj = {
    name: "Lars",
    age: 25,
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
  const [error, setError] = useState([null]);
  const [category, setCategory] = useState("");

  useEffect(async () => {
    const req = await fetch(`https://gutendex.com/books?topic=${category}`);
    const res = await req.json();
    setData(res);
  }, []);

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
