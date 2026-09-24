import { Routes, Route, Navigate } from "react-router-dom";
import PublicRoutes from "./PublicRoute";
import { useEffect, useState } from "react";
import SuperAdminRoutes from "./SuperAdminRoute";
import UserRoutes from "./UserRoute";
import { useAppDispatch, useAppSelector } from "@/slice/hook";
import { checkAuth } from "@/slice/auth.slice";
import OpenRoutes from "./OpenRoute";

function AppRoutes() {
  const dispatch = useAppDispatch();
  const { user, isInitialized } = useAppSelector((state) => state.auth);
  const [navigateRoute, setNavigateRoute] = useState("/login");

  // On initial page load or hard refresh, silently check session via HttpOnly cookie
  useEffect(() => {
    dispatch(checkAuth());
  }, [dispatch]);

  useEffect(() => {
    if (!user) return;

    switch (user.role) {
      case "superAdmin":
        setNavigateRoute("/superDashboard");
        break;
      case "user":
        setNavigateRoute("/userDashboard");
        break;
      default:
        setNavigateRoute("/login");
    }
  }, [user]);

  // Loading state while verifying cookie session to prevent flash of wrong screen
  if (!isInitialized) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-[#050508]">
        <div className="w-10 h-10 rounded-full border-2 border-purple-500/20 border-t-purple-500 animate-spin" />
      </div>
    );
  }

  const renderRoleRoutes = () => {
    if (!user) return null;

    switch (user.role) {
      case "superAdmin":
        return SuperAdminRoutes();
      case "user":
        return UserRoutes();
      default:
        return null;
    }
  };

  const isAuthenticated = Boolean(user);
  return (
    <Routes>
      {isAuthenticated ? (
        <>
          {renderRoleRoutes()}
          {/* Redirect any unknown route to correct dashboard */}
          <Route path="*" element={<Navigate to={navigateRoute} replace />} />
        </>
      ) : (
        <>
          {OpenRoutes()}
          {PublicRoutes()}
          {/* Redirect all unknown routes to landing page */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </>
      )}
    </Routes>
  );
}

export default AppRoutes;
