
import { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/journey", label: "My Journey" },
    { to: "/projects", label: "Projects" },
    { to: "/publications", label: "Publications" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 px-6 py-4 transition-all duration-300 ${
        scrolled ? "backdrop-blur-md bg-background/80 shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="container flex items-center justify-between">
        <NavLink 
          to="/" 
          className="font-display font-semibold text-xl tracking-tight"
        >
          Abhishek Kumar
        </NavLink>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) => `
                py-2 text-sm font-medium transition-all duration-300
                ${isActive 
                  ? "text-primary font-semibold" 
                  : "text-foreground/70 hover:text-foreground"}
              `}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        {/* Mobile menu button */}
        <button 
          className="md:hidden text-foreground focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>

        {/* Mobile menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, x: "100%" }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: "100%" }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="fixed inset-0 top-16 bg-background z-40 md:hidden"
            >
              <div className="flex flex-col items-center justify-center h-full space-y-8 p-8">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.to}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <NavLink
                      to={link.to}
                      className={({ isActive }) => `
                        py-2 px-4 text-lg font-medium transition-all duration-300
                        ${isActive 
                          ? "text-primary font-semibold" 
                          : "text-foreground/70 hover:text-foreground"}
                      `}
                      onClick={() => setIsOpen(false)}
                    >
                      {link.label}
                    </NavLink>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Navbar;
