import React from "react";
import { Navigate } from "react-router-dom";

export const ProtectedComponent = ({ children }) => {
  const isAuthenticated = false;

  if (!isAuthenticated) {
    return <Navigate to="/unauthorized" />;
  }

  return children;
};
