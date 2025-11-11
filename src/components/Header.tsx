import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Header = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <span className="font-bold text-xl text-primary">India Payments Pro</span>
        </Link>
        
        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
          <button
            onClick={() => scrollToSection("problem")}
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            Challenge
          </button>
          <button
            onClick={() => scrollToSection("solution")}
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            Solution
          </button>
          <button
            onClick={() => scrollToSection("about")}
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            About
          </button>
          <button
            onClick={() => scrollToSection("testimonials")}
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            Testimonials
          </button>
          <Link to="/blog" className="text-muted-foreground hover:text-foreground transition-colors">
            Blog
          </Link>
        </nav>

        <Button
          variant="cta"
          size="sm"
          onClick={() => scrollToSection("contact")}
        >
          Get Started
        </Button>
      </div>
    </header>
  );
};

export default Header;
