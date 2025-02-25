import { useEffect, useState } from "react";

const NavBar = () => {
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
        setData(result);
        console.log(result);
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
      <div id="navbar-card"></div>
    </>
  );
};
export default NavBar;
