import React, { useState, useEffect } from "react";
import "./App.css";

function DataFetcher() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch");
        }
        return response.json();
      })
      .then((json) => {
        setData(json);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  return (
    <div className="container">
      <h1>Data Fetching</h1>
      {loading && <p>Loading data...</p>}
      {error && <p className="error">Error: {error}</p>}
      {data && (
        <div className="data-box">
          <p><strong>ID:</strong> {data.id}</p>
          <p><strong>Title:</strong> {data.title}</p>
          <p><strong>Completed:</strong> {data.completed ? "Yes" : "No"}</p>
        </div>
      )}
    </div>
  );
}

export default DataFetcher;
