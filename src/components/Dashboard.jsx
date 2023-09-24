import React from "react";
import { Route, Routes } from "react-router-dom";
import { Revenues } from "./Revenues";
import { Stats } from "./Stats";
import { Charts } from "./Charts";

export const Dashboard = () => {
  return (
    <div>
      Dashboard
      <Routes>
        <Route path="revenues" element={<Revenues />} />
        <Route path="stats" element={<Stats />} />
        <Route path="charts" element={<Charts />} />
      </Routes>
    </div>
  );
};
