import { Link } from "react-router-dom";
import { FileText, Mic, Bot, Github, Twitter, Linkedin } from "lucide-react";
import LogoImage from "../../assets/images/janshoai-logo-2-bg-dark.png";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-black text-zinc-500 border-t border-white/5">
      {/* Main Footer */}
      <div className="container mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          {/* Brand */}
          <div className="md:col-span-4">
            <Link to="/" className="inline-block mb-6 group">
              <img
                src={LogoImage}
                alt="JanshoAI"
                className="h-11 md:h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              />
            </Link>
            <p className="text-sm text-zinc-500 leading-relaxed max-w-xs mb-6">
              Empowering creators, researchers, and professionals with unified
              AI tools for document analysis, voice generation, and intelligent
              chat.
            </p>
            {/* Social Links */}
            <div className="flex gap-3">
              <a
                href="#"
                aria-label="Twitter"
                className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 hover:border-white/20 transition-colors"
              >
                <Twitter className="w-4 h-4 text-zinc-400" />
              </a>
              <a
                href="#"
                aria-label="GitHub"
                className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 hover:border-white/20 transition-colors"
              >
                <Github className="w-4 h-4 text-zinc-400" />
              </a>
              <a
                href="#"
                aria-label="LinkedIn"
                className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 hover:border-white/20 transition-colors"
              >
                <Linkedin className="w-4 h-4 text-zinc-400" />
              </a>
            </div>
          </div>

          {/* Product Links */}
          <div className="md:col-span-2">
            <h4 className="text-white text-sm font-semibold mb-5 uppercase tracking-wider">
              Product
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  to="/features"
                  className="hover:text-white transition-colors flex items-center gap-2 group"
                >
                  <FileText className="w-3.5 h-3.5 text-blue-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                  Features
                </Link>
              </li>
              <li>
                <Link
                  to="/resources"
                  className="hover:text-white transition-colors flex items-center gap-2 group"
                >
                  <Mic className="w-3.5 h-3.5 text-purple-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                  Voice Generator
                </Link>
              </li>
              <li>
                <Link
                  to="/features"
                  className="hover:text-white transition-colors flex items-center gap-2 group"
                >
                  <Bot className="w-3.5 h-3.5 text-pink-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                  AI Assistant
                </Link>
              </li>
              <li>
                <Link to="/faqs" className="hover:text-white transition-colors">
                  FAQ's
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Links */}
          <div className="md:col-span-2">
            <h4 className="text-white text-sm font-semibold mb-5 uppercase tracking-wider">
              Company
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  to="/about"
                  className="hover:text-white transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/contactUs"
                  className="hover:text-white transition-colors"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  to="/resources"
                  className="hover:text-white transition-colors"
                >
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal Links */}
          <div className="md:col-span-2">
            <h4 className="text-white text-sm font-semibold mb-5 uppercase tracking-wider">
              Legal
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link to="#" className="hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:text-white transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:text-white transition-colors">
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact info */}
          <div className="md:col-span-2">
            <h4 className="text-white text-sm font-semibold mb-5 uppercase tracking-wider">
              Get In Touch
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="mailto:ommistry1376@gmail.com"
                  className="hover:text-white transition-colors break-all"
                >
                  ommistry1376@gmail.com
                </a>
              </li>
              <li className="text-zinc-500">
                Vadodara, Gujarat
                <br />
                India
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/5">
        <div className="container mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm">
            &copy; {year} JanshoAI. All rights reserved. Made with ❤️ in India.
          </div>
          <div className="flex gap-6 text-sm">
            <Link to="#" className="hover:text-white transition-colors">
              Privacy
            </Link>
            <Link to="#" className="hover:text-white transition-colors">
              Terms
            </Link>
            <Link to="#" className="hover:text-white transition-colors">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
