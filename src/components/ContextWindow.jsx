import { createContext, useEffect, useState } from "react";

export const Context = createContext();

export const ContextWindow = ({ children }) => {
  const [value, setValue] = useState();
  const [error, setError] = useState(null);
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);
  const [type, setType] = useState(null);

  const fetchData = async () => {
    try {
      const response = await fetch(
        `https://gutendex.com/books?${type}=${value}`
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
    if (type === "" || type === undefined) return;
    if (value === "" || value === undefined) return;
    fetchData();
  }, [type, value]);

  return (
    <Context.Provider
      value={{
        setValue,
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
