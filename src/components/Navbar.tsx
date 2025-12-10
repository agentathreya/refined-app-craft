import { Search, Menu, Bell, User, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Home", href: "#" },
  { label: "Live", href: "#live" },
  { label: "Highlights", href: "#highlights" },
  { label: "Matches", href: "#matches" },
  { label: "Teams", href: "#teams" },
];

export function Navbar() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center">
              <span className="font-display text-2xl text-primary-foreground">CH</span>
            </div>
            <span className="font-display text-2xl hidden sm:block text-foreground">
              Cricket<span className="text-primary">Hub</span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={cn(
                  "px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors rounded-lg hover:bg-secondary/50",
                  link.label === "Home" && "text-foreground"
                )}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Side Actions */}
          <div className="flex items-center gap-2">
            {/* Search */}
            <div className={cn(
              "transition-all duration-300 overflow-hidden",
              isSearchOpen ? "w-48 md:w-64" : "w-0"
            )}>
              <div className="flex items-center bg-secondary rounded-lg px-3 py-2">
                <input
                  type="text"
                  placeholder="Search highlights..."
                  className="bg-transparent outline-none text-sm w-full text-foreground placeholder:text-muted-foreground"
                />
              </div>
            </div>
            
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="text-muted-foreground hover:text-foreground"
            >
              {isSearchOpen ? <X className="h-5 w-5" /> : <Search className="h-5 w-5" />}
            </Button>

            <Button variant="ghost" size="icon" className="hidden md:flex text-muted-foreground hover:text-foreground relative">
              <Bell className="h-5 w-5" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-destructive rounded-full"></span>
            </Button>

            <Button variant="ghost" size="icon" className="hidden md:flex text-muted-foreground hover:text-foreground">
              <User className="h-5 w-5" />
            </Button>

            <Button variant="hero" size="sm" className="hidden sm:flex">
              Subscribe
            </Button>

            {/* Mobile Menu Button */}
            <Button 
              variant="ghost" 
              size="icon" 
              className="lg:hidden text-muted-foreground hover:text-foreground"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-background border-t border-border animate-fade-in">
          <nav className="container mx-auto px-4 py-4 flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="px-4 py-3 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-secondary/50 rounded-lg transition-colors"
              >
                {link.label}
              </a>
            ))}
            <Button variant="hero" className="mt-4">
              Subscribe Now
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
