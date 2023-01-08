import { useState, useEffect } from "react";

export default function useFetch(url) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchItems();
  }, []);

  async function fetchItems() {
    setLoading(true);
    try {
      const response = await fetch(url, {
        method: "GET",
      });

      const data = await response.json();

      setData(data);
      setLoading(false);
    } catch (error) {
      //console.log(error);
      setError(error);
    }
  }

  return [data, loading, error];

}