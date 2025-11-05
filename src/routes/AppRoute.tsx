import { Routes, Route, Navigate } from "react-router-dom";
import PublicRoutes from "./PublicRoute";
import { useSelector } from "react-redux";
import type { RootState } from "@/slice/store";
import { useEffect, useState } from "react";
import SuperAdminRoutes from "./SuperAdminRoute";
import UserRoutes from "./UserRoute";
import TemRoute from "./TemRoute";

function AppRoutes() {
  const user = useSelector((state: RootState) => state.auth.user);
  const [navigateRoute, setNavigateRoute] = useState("/login");


useEffect(() => {
    if (!user) return;

    switch (user.role) {
      case "super_admin":
        setNavigateRoute("/superDashboard");
        break;
      case "user":
        setNavigateRoute("/userDashboard");
        break;
      default:
        setNavigateRoute("/login");
    }
  }, [user]);

  const renderRoleRoutes = () => {
    if (!user) return null;

    switch (user.role) {
      case "super_admin":
        return SuperAdminRoutes();
      case "admin":
        return UserRoutes();
      default:
        return null;
    }
  };

  const isAuthenticated = false;
  return (
    <Routes>
      {isAuthenticated ? (
        <>
          {user ? (
            <>
              {renderRoleRoutes()}
              <Route path="*" element={<Navigate to={navigateRoute} replace />} />
            </>
          ) : (
            <>
              {PublicRoutes()}
              <Route path="*" element={<Navigate to="/login" replace />} />
            </>
          )}
        </>
      ) : (
        <>
          {TemRoute()}
        </>
      )}
    </Routes>
  );
}

export default AppRoutes;
