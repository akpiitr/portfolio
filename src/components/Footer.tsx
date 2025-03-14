import { Github, Linkedin, BookOpen } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    {
      name: "GitHub",
      icon: <Github className="h-4 w-4" />,
      href: "https://github.com/akpiitr",
      label: "GitHub Profile"
    },
    {
      name: "LinkedIn",
      icon: <Linkedin className="h-4 w-4" />,
      href: "https://www.linkedin.com/in/abhishek-kumar-prajapati-34279614a",
      label: "LinkedIn Profile"
    },
    {
      name: "Google Scholar",
      icon: <BookOpen className="h-4 w-4" />,
      href: "https://scholar.google.com/citations?user=abhishek",
      label: "Google Scholar Profile"
    }
  ];

  const footerLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Journey", href: "/journey" },
    { name: "Projects", href: "/projects" },
    { name: "Publications", href: "/publications" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <footer className="w-full px-6 py-12 bg-secondary/50 backdrop-blur-sm">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand and info */}
          <div className="space-y-4">
            <h3 className="font-display text-lg font-semibold">Abhishek Kumar Prajapati</h3>
            <p className="text-sm text-foreground/70 max-w-xs">
              Transportation Engineering | Artificial Intelligence | Machine Learning
            </p>
            
            {/* Social links */}
            <div className="flex space-x-4 pt-2">
              {socialLinks.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  className="p-2 rounded-full bg-background/80 text-foreground/80 hover:text-primary transition-colors duration-300"
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.97 }}
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>
          </div>
          
          {/* Quick links */}
          <div className="space-y-4">
            <h3 className="font-display text-sm font-semibold uppercase tracking-wider">Quick Links</h3>
            <nav className="flex flex-col space-y-2">
              {footerLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className="text-sm text-foreground/70 hover:text-primary transition-colors duration-300"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>
          
          {/* Newsletter/contact */}
          <div className="space-y-4">
            <h3 className="font-display text-sm font-semibold uppercase tracking-wider">Get in Touch</h3>
            <p className="text-sm text-foreground/70">
              Have a project in mind or want to collaborate? Feel free to reach out.
            </p>
            <Link
              to="/contact"
              className="inline-block px-4 py-2 mt-2 text-sm font-medium text-primary border border-primary rounded-md hover:bg-primary hover:text-white transition-colors duration-300"
            >
              Contact Me
            </Link>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="border-t border-border mt-8 pt-8 text-center text-xs text-foreground/60">
          &copy; {currentYear} Abhishek Kumar Prajapati. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
