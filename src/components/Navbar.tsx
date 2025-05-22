
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    e.currentTarget.style.display = 'none';
    // Using optional chaining to safely access nextSibling
    const sibling = e.currentTarget.nextSibling as HTMLElement;
    if (sibling) {
      sibling.style.display = 'block';
    }
  };

  return (
    <nav className={`fixed w-full z-20 top-0 left-0 transition-all duration-300 ${scrolled ? "bg-white/90 backdrop-blur-md shadow-md" : "bg-transparent"}`}>
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="/" className="flex items-center">
          <img 
            src={scrolled ? "/logo-purple.png" : "/logo-white.png"} 
            alt="Frenies Studio" 
            className="h-8 mr-3 transition-all duration-300" 
            style={{ objectFit: "contain" }}
            onError={handleImageError}
          />
          <span className={`self-center text-2xl font-semibold whitespace-nowrap transition-colors duration-300 ${scrolled ? "text-gray-900" : "text-white"}`}>
            Frenies Studio
          </span>
        </a>
        <div className="flex md:order-2">
          <Button 
            className={`hidden md:flex bg-purple-600 hover:bg-purple-700 transition-all duration-300 transform hover:scale-105`}
            onClick={() => window.open("https://calendar.app.google/akSVg2rC9YGMkj468", "_blank")}
          >
            Get Started
          </Button>
          <button
            type="button"
            className={`inline-flex items-center p-2 w-10 h-10 justify-center text-sm rounded-lg md:hidden focus:outline-none focus:ring-2 ${scrolled ? "text-gray-500 hover:bg-gray-100 focus:ring-gray-200" : "text-white hover:bg-white/20 focus:ring-white/30"}`}
            onClick={() => setIsOpen(!isOpen)}
          >
            <span className="sr-only">Open main menu</span>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        <div
          className={`${
            isOpen ? "block" : "hidden"
          } w-full md:block md:w-auto md:order-1`}
        >
          <ul className={`flex flex-col p-4 md:p-0 mt-4 font-medium rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0 ${
            scrolled 
              ? "border border-gray-100 bg-gray-50 md:bg-transparent" 
              : "border border-white/20 bg-black/50 backdrop-blur-md md:bg-transparent"
          }`}>
            <li>
              <a
                href="#"
                className={`block py-2 pl-3 pr-4 rounded md:p-0 ${
                  scrolled 
                    ? "text-purple-700 bg-transparent md:text-purple-700" 
                    : "text-white bg-purple-700/80 md:bg-transparent md:text-white"
                } hover:underline`}
                aria-current="page"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#services"
                className={`block py-2 pl-3 pr-4 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-purple-700 md:p-0 transition-colors ${
                  scrolled ? "text-gray-900" : "text-white"
                }`}
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#testimonials"
                className={`block py-2 pl-3 pr-4 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-purple-700 md:p-0 transition-colors ${
                  scrolled ? "text-gray-900" : "text-white"
                }`}
              >
                Testimonials
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className={`block py-2 pl-3 pr-4 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-purple-700 md:p-0 transition-colors ${
                  scrolled ? "text-gray-900" : "text-white"
                }`}
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
