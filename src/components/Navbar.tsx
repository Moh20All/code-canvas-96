import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  const navLinks = [
    { href: isHomePage ? "#about" : "/#about", label: "About", isAnchor: isHomePage },
    { href: "/projects", label: "Projects", isAnchor: false },
    { href: "/blog", label: "Blog", isAnchor: false },
    { href: "/resume", label: "Resume", isAnchor: false },
    { href: isHomePage ? "#contact" : "/#contact", label: "Contact", isAnchor: isHomePage },
  ];

  const isActive = (href: string) => {
    if (href.startsWith("#") || href.startsWith("/#")) return false;
    return location.pathname === href;
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-xl font-bold gradient-text">
            {"<Dev />"}
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) =>
              link.isAnchor ? (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-muted-foreground hover:text-foreground transition-colors duration-300"
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  key={link.href}
                  to={link.href}
                  className={cn(
                    "transition-colors duration-300",
                    isActive(link.href)
                      ? "text-primary font-medium"
                      : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  {link.label}
                </Link>
              )
            )}
            <Link
              to={isHomePage ? "#contact" : "/#contact"}
              className="px-4 py-2 bg-primary text-primary-foreground rounded-lg font-medium hover:opacity-90 transition-opacity"
            >
              Hire Me
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4 flex flex-col gap-4">
            {navLinks.map((link) =>
              link.isAnchor ? (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  key={link.href}
                  to={link.href}
                  className={cn(
                    "transition-colors",
                    isActive(link.href)
                      ? "text-primary font-medium"
                      : "text-muted-foreground hover:text-foreground"
                  )}
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              )
            )}
            <a
              href={isHomePage ? "#contact" : "/#contact"}
              className="px-4 py-2 bg-primary text-primary-foreground rounded-lg font-medium text-center"
              onClick={() => setIsOpen(false)}
            >
              Hire Me
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
