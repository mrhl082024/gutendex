import { Link } from "react-router-dom";

const NavBar = (props) => {
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
        <ul id="drop">
          Categories:
          {categoryArr.map((name, i) => (
            <li key={i}>{name} </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default NavBar;
