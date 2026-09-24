import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import LogoImage from "../../assets/images/janshoai-logo-2-bg-dark-2.png";
import { cn } from "@/lib/utils";

interface NavLink {
  to: string;
  label: string;
}

const links: NavLink[] = [
  { to: "/", label: "Home" },
  { to: "/features", label: "Features" },
  { to: "/resources", label: "Resources" },
  { to: "/about", label: "About" },
  { to: "/contactUs", label: "Contact" },
  { to: "/faqs", label: "FAQ's" },
];

const Logo = () => (
  <Link to="/" className="flex items-center space-x-2">
    <img
      src={LogoImage}
      alt="Jansho AI"
      className="h-12 w-auto object-contain"
    />
  </Link>
);

const Navbar = () => {
  const { pathname } = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-black/80 backdrop-blur-md border-b border-white/10 py-3"
          : "bg-transparent py-5"
      )}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Logo />

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={cn(
                "text-sm font-medium transition-colors hover:text-purple-400 relative group",
                pathname === link.to ? "text-white" : "text-zinc-400"
              )}
            >
              {link.label}
              <span className={cn(
                "absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-500 transition-all duration-300 group-hover:w-full",
                pathname === link.to ? "w-full" : ""
              )} />
            </Link>
          ))}
        </nav>

        {/* Action Buttons */}
        <div className="hidden lg:flex items-center gap-4">
          <Button
            variant="ghost"
            className="text-zinc-300 hover:text-white hover:bg-white/5"
            onClick={() => navigate("/login")}
          >
            Log in
          </Button>
          <Button
            className="bg-purple-600 text-white hover:bg-purple-700 rounded-full px-6"
            onClick={() => navigate("/register")}
          >
            Sign Up
          </Button>
        </div>

        {/* Mobile Menu */}
        <div className="lg:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="text-white">
                <Menu className="w-6 h-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-zinc-950 border-zinc-800 text-white w-[300px]">
              <div className="flex flex-col gap-6 mt-8">
                <Logo />
                <div className="flex flex-col gap-4">
                  {links.map((link) => (
                    <Link
                      key={link.to}
                      to={link.to}
                      onClick={() => setIsOpen(false)}
                      className={cn(
                        "text-lg font-medium transition-colors border-l-2 pl-4 py-2",
                        pathname === link.to
                          ? "text-purple-400 border-purple-500 bg-purple-500/10"
                          : "text-zinc-400 border-transparent hover:text-white"
                      )}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
                <div className="flex flex-col gap-3 mt-4">
                  <Button
                    variant="outline"
                    className="w-full justify-center border-zinc-700 text-white hover:bg-zinc-800"
                    onClick={() => { setIsOpen(false); navigate("/login"); }}
                  >
                    Log in
                  </Button>
                  <Button
                    className="w-full justify-center bg-purple-600 hover:bg-purple-700 text-white"
                    onClick={() => { setIsOpen(false); navigate("/register"); }}
                  >
                    Sign Up
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
