import AuthPage from "@/pages/Auth/AuthPage";
import LoginPage from "@/pages/LoginPage";
import { Route } from "react-router-dom";

function PublicRoutes() {
  return (
      <Route element={<AuthPage />} key="auth">
        <Route path="/login" element={<LoginPage />} />
        {/* <Route path="/register" element={<Register />} /> */}
      </Route>
  );
}

export default PublicRoutes;
