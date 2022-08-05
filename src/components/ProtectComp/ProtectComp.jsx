import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import jwt_decode from "jwt-decode";

const ProtectComp = () => {
  let token = localStorage.getItem("token");

  try {
    let decoded = jwt_decode(token);

    console.log(decoded);
  } catch (error) {
    localStorage.clear();
    <Navigate to="/login" />;
  }

  return token ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectComp;
