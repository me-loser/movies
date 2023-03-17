import { useState, useEffect } from "react";

export const useFetchData = (url) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      const response = await fetch(url);
      const resData = await response.json();
      setData(resData);
      setIsLoading(false);
    };
    loadData();
  }, []);
  return { isLoading, data };
};
