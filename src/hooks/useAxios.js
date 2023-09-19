import axios from "axios";
import React, { useEffect, useState } from "react";

const useAxios = (apiEndpoint) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const getData = () => {
    setLoading(true);
    axios
      .get(apiEndpoint)
      .then((response) => {
        setData(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  };

  return { data, loading, error, getData };
};
export default useAxios;
