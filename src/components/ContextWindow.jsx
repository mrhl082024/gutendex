import { createContext, useEffect, useState } from "react";

export const Context = createContext();

export const ContextWindow = ({ children }) => {
  const [value, setValue] = useState();
  const [error, setError] = useState(null);
  const [data, setData] = useState();
  const [loading, setLoading] = useState();
  const [type, setType] = useState(null);
  const [page, setPage] = useState(1);

  if (page < 1) {
    setPage(1);
  }

  function clearContent() {
    setData(null);
    setPage(null);
    setType(null);
    setValue(null);
    console.log("cleared content");
  }

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        `https://gutendex.com/books/?page=${page}&${type}=${value.replace(
          " ",
          "%20"
        )}`
      );
      const result = await response.json();
      setData(result);
      console.log(result);
      console.log("DATA");
    } catch (err) {
      setError(err);
    } finally {
      setLoading(null);
    }
  };
  useEffect(() => {
    if (page === null || page === undefined) return;
    if (type === "" || value === undefined) return;
    if (value === "" || value === undefined) return;
    fetchData();
  }, [page, type, value]);

  return (
    <Context.Provider
      value={{
        value,
        setValue,
        setType,
        data,
        setData,
        fetchData,
        loading,
        setLoading,
        page,
        setPage,
        clearContent,
      }}
    >
      {children}
    </Context.Provider>
  );
};
