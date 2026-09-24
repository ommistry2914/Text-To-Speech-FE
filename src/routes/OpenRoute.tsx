import LandingPage from "@/pages/LandingPage";
import { Navigate, Route } from "react-router-dom";

function OpenRoutes() {
  return (
    <Route key="open">
      <Route path="/" element={<LandingPage />} />
      {/* Redirect old standalone pages back to landing page with anchor */}
      <Route path="/features" element={<Navigate to="/#features" replace />} />
      <Route path="/about" element={<Navigate to="/" replace />} />
      <Route path="/contactUs" element={<Navigate to="/#contact" replace />} />
      <Route path="/resources" element={<Navigate to="/" replace />} />
      <Route path="/faqs" element={<Navigate to="/#faq" replace />} />
    </Route>
  );
}

export default OpenRoutes;
