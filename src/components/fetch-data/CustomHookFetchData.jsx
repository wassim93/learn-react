import axios from "axios";
import React, { useEffect, useState } from "react";
import useAxios from "../../hooks/useAxios";

const CustomHookFetchData = () => {
  const { data, loading, error, getData } = useAxios("https://jsonplaceholder.typicode.com/posts");

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <div className="inner-container">
      <h1>Get Data using custom hook</h1>
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

export default CustomHookFetchData;
