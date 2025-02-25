import NavBar from "./NavBar";

const Header = (props) => {
  const data = props.data.results;

  return (
    <>
      <div id="navbar-card">
        <h2 id="header-title">Gutendex</h2>
        <input id="search-field" type="text" placeholder="Search" />
      </div>
      <NavBar data={data} />
    </>
  );
};
export default Header;
