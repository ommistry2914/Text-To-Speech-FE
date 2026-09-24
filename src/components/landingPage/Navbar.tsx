import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, X } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import LogoImage from "../../assets/images/janshoai-logo-2.png";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "#features", label: "Features" },
  { href: "#pricing", label: "Pricing" },
  { href: "#faq", label: "FAQ" },
  { href: "#contact", label: "Contact" },
];

const scrollToSection = (href: string) => {
  const id = href.replace("#", "");
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  }
};

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        scrolled
          ? "bg-black/85 backdrop-blur-xl border-b border-white/10 py-3 shadow-2xl"
          : "bg-transparent py-4"
      )}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo - Single image, works in light and dark */}
        <Link to="/" className="flex items-center group">
          <img
            src={LogoImage}
            alt="JanshoAI"
            className="h-8 md:h-9 w-auto object-contain filter contrast-125 brightness-95 dark:contrast-100 dark:brightness-100"
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => scrollToSection(link.href)}
              className="text-sm font-medium text-zinc-400 hover:text-white transition-colors relative group"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-blue-500 group-hover:w-full transition-all duration-300" />
            </button>
          ))}
        </nav>

        {/* CTA Buttons */}
        <div className="hidden lg:flex items-center gap-3">
          <Button
            variant="ghost"
            className="text-zinc-300 hover:text-white hover:bg-white/5 rounded-full px-5"
            onClick={() => navigate("/login")}
          >
            Log in
          </Button>
          <Button
            className="bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-500 hover:to-violet-500 text-white rounded-full px-6 shadow-lg shadow-purple-500/20 transition-all hover:shadow-purple-500/40"
            onClick={() => navigate("/register")}
          >
            Get Started Free
          </Button>
        </div>

        {/* Mobile Menu */}
        <div className="lg:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
                {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-zinc-950/98 backdrop-blur-xl border-zinc-800 text-white w-[280px]">
              <div className="flex flex-col gap-6 mt-8">
                <Link to="/" className="flex items-center" onClick={() => setIsOpen(false)}>
                  <img
                    src={LogoImage}
                    alt="JanshoAI"
                    className="h-8 w-auto object-contain filter contrast-125 brightness-95 dark:contrast-100 dark:brightness-100"
                  />
                </Link>
                <div className="flex flex-col gap-1">
                  {navLinks.map((link) => (
                    <button
                      key={link.href}
                      onClick={() => { scrollToSection(link.href); setIsOpen(false); }}
                      className="text-base font-medium text-zinc-400 hover:text-white hover:bg-white/5 transition-all rounded-xl px-4 py-3 text-left"
                    >
                      {link.label}
                    </button>
                  ))}
                </div>
                <div className="flex flex-col gap-3 pt-4 border-t border-zinc-800">
                  <Button variant="outline" className="w-full rounded-full border-zinc-700 text-white hover:bg-zinc-800" onClick={() => { setIsOpen(false); navigate("/login"); }}>Log in</Button>
                  <Button className="w-full rounded-full bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-500 hover:to-violet-500 text-white" onClick={() => { setIsOpen(false); navigate("/register"); }}>Get Started Free</Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
