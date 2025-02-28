import { Outlet, Link } from "react-router-dom";
import "../styles/NavBar.css";
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

  const { setCategory, error, data, fetchData } = useContext(Context);

  return (
    <div id="navigationbar-card">
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
                    setCategory(name);
                    fetchData();
                    console.log("TRYKK");
                  }}
                >
                  <Link to="/ShowBooks">{name}</Link>
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
