import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

export default function PublicRoutes({ children }) {
  const { isLogged } = useSelector((state) => state.user);
  return !isLogged ? <Outlet /> : <Navigate to={"/companies"} />;
}
