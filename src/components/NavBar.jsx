import { Link } from "react-router-dom";
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

  function categoryList() {}

  return (
    <>
      <div id="dropdown">
        <ul id="drop-ul">
          &#10507; Categories:
          <div id="dropdown-content">
            {categoryArr.map((name, i) => (
              <li key={i}>{name} </li>
            ))}
          </div>
        </ul>
      </div>
    </>
  );
};

export default NavBar;
