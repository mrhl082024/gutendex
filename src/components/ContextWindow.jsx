import { createContext, useEffect, useState } from "react";

export const Context = createContext();

export const ContextWindow = ({ children }) => {
  const [value, setValue] = useState();
  const [error, setError] = useState(null);
  const [data, setData] = useState();
  const [loading, setLoading] = useState();
  const [type, setType] = useState(null);

  const fetchData = async () => {
    try {
      const response = await fetch(
        `https://gutendex.com/books?${type}=${value.replace(" ", "%20")}`
      );
      const result = await response.json();
      setData(result);
      console.log(result);
      console.log("DATA");
      setLoading(null);
    } catch (err) {
      setError(err);
    }
  };
  useEffect(() => {
    if (type === "" || value === undefined) return;
    if (value === "" || value === undefined) return;
    fetchData();
  }, [type, value]);

  return (
    <Context.Provider
      value={{
        setValue,
        setType,
        setData,
        fetchData,
        setLoading,
      }}
    >
      {children}
    </Context.Provider>
  );
};
