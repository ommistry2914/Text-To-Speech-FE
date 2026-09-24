import LandingPage from "@/pages/LandingPage";
import About from "@/pages/About";
import ContactUs from "@/pages/ContactUs";
import Resources from "@/pages/Resources";
import Faqs from "@/pages/Faqs";
import Features from "@/pages/Features";
import { Route } from "react-router-dom";

function OpenRoutes() {
  return (
    <Route key="open">
      <Route path="/" element={<LandingPage />} />
      <Route path="/about" element={<About />} />
      <Route path="/contactUs" element={<ContactUs />} />
      <Route path="/features" element={<Features />} />
      <Route path="/resources" element={<Resources />} />
      <Route path="/faqs" element={<Faqs />} />
    </Route>
  );
}

export default OpenRoutes;
