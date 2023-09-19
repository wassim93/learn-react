import React from "react";
import CustomHookFetchData from "./CustomHookFetchData";
import StandardFetchData from "./StandardFetchData";
import "./fetch.css";

const FetchDataMainComponent = () => {
  return (
    <div>
      <span>Converting Axios API Calls to a Custom React Hook</span>

      <div className="container">
        <StandardFetchData />
        <CustomHookFetchData />
      </div>
    </div>
  );
};

export default FetchDataMainComponent;
