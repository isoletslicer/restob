import { Outlet, Navigate } from "react-router-dom";

export default function PrivateRoute() {
  const accessToken = localStorage.getItem("access_token");
  if (!accessToken) {
    return <Navigate to="/login" />;
  }

  return <Outlet />;
}
