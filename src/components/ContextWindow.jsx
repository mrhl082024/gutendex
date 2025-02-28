import { createContext, useEffect, useState } from "react";

export const Context = createContext();

export const ContextWindow = ({ children }) => {
  const [category, setCategory] = useState();
  const [error, setError] = useState(null);
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    try {
      const response = await fetch(
        `https://gutendex.com/books?topic=${category}`
      );
      const result = await response.json();
      setData(result);
      console.log(result);
      console.log("DATA");
      setLoading(false);
    } catch (err) {
      setError(err);
    }
  };
  useEffect(() => {
    if (category === "" || category === undefined) return;
    fetchData();
  }, [category]);

  function runFunc() {}

  return (
    <Context.Provider
      value={{
        setCategory,
        error,
        data,
        setData,
        fetchData,
        loading,
        setLoading,
      }}
    >
      {children}
    </Context.Provider>
  );
};
