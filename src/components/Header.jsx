import NavBar from "./NavBar";
import "../styles/Header.css";

const Header = (props) => {
  // const data = props.data.results;

  return (
    <>
      <div id="navbar-card">
        <h2 id="header-title">Gutendex Book Library</h2>
        <input id="search-field" type="text" placeholder="Search" />
        <NavBar />
      </div>
    </>
  );
};
export default Header;
