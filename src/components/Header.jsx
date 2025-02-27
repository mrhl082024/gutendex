import NavBar from "./NavBar.jsx";
import SearchBar from "./SearchBar.jsx";
import "../styles/Header.css";

const Header = () => {
  // const data = props.data.results;

  return (
    <>
      <div id="header-card">
        <h2 id="header-title">Gutendex Book Library</h2>
        <SearchBar />
        <NavBar />
      </div>
    </>
  );
};
export default Header;
