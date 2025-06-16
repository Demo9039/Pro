import React, { useEffect, useState } from "react";

const Welcome = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  function fetchData() {
    fetch("https://fca0ca90-e115-4196-a1d6-d529be6858be.mock.pstmn.io")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        setData(data);
      })
      .catch((error) => {
        console.error("Fetch error:", error);
        setError(error.message);
      });
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <h2>API Data (with fetch):</h2>
      {error ? (
        <p style={{ color: "red" }}>Error: {error}</p>
      ) : (
        <pre>{data ? JSON.stringify(data, null, 2) : "Loading..."}</pre>
      )}
    </div>
  );
};

export default Welcome;
