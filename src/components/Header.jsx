import { Outlet, Link } from "react-router-dom";
import NavBar from "./NavBar";
import { useEffect, useState } from "react";

const Header = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState([true]);
  const [error, setError] = useState([null]);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch(`https://gutendex.com/books`);
        if (!response.ok) {
          throw new Error(`HTTP Error. Status ${response.status}`);
        }
        const result = await response.json();
        const _data = result.results;
        setData(_data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <NavBar data={data} />
    </>
  );
};
export default Header;
