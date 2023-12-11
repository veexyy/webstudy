import { Navigate, Outlet, useLocation } from "react-router-dom";

export default function PrivateRoute({}: any) {
  const user = localStorage.getItem("tokens");
  const location = useLocation();

  return (
    <>
      {user ? <Outlet /> : <Navigate to="/login" />}
      {user && location.pathname === "/login" ? <Navigate to="/" /> : null}
    </>
  );
}
