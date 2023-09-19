import axios from "axios";
import React, { useEffect, useState } from "react";
import "./fetch.css";

const StandardFetchData = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const getData = () => {
    setLoading(true);
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        setData(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <div className="inner-container">
      <h1>Get Data using the old way</h1>
      <button onClick={getData}>Get Data</button>
      {data &&
        data.map((item) => (
          <div className="result-container">
            <h5>{item?.title}</h5>
            <div>{item?.body}</div>
          </div>
        ))}
    </div>
  );
};

export default StandardFetchData;
