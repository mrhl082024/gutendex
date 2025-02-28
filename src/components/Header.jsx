import NavigationBar from "./NavigationBar.jsx";
import SearchBar from "./SearchBar.jsx";
import "../styles/Header.css";

const Header = () => {
  return (
    <>
      <div id="header-card">
        <h2 id="header-title">Gutendex Book Library</h2>
        <NavigationBar />
      </div>
    </>
  );
};
export default Header;
