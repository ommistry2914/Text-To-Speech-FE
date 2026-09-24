import Navbar from "@/components/landingPage/Navbar";
import HeroSection from "@/components/landingPage/HeroSection";
import FeaturesSection from "@/components/landingPage/FeaturesSection";
import CTASection from "@/components/landingPage/CTASection";
import Footer from "@/components/landingPage/Footer";

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-purple-500/30 selection:text-purple-200 font-sans overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default LandingPage;
