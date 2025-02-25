import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div id="header-card">
        <h1 id="title">Gutendex</h1>
        <input id="search-field" type="text" />

        <button id="dropdown-btn">
          <div id="dropdown-content">
            <Link></Link>
            <Link></Link>
            <Link></Link>
          </div>
        </button>
      </div>
    </>
  );
};
export default Header;
