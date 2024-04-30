import React from "react";
import { Outlet, Navigate } from "react-router-dom";

function Protected() {
  const token = localStorage.getItem("token");
  return (
    <div>
      token ? <Outlet /> : <Navigate to="/login" />
    </div>
  );
}

export default Protected;
