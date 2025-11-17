import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { to: "/explore", label: "Explore Campaign" },
    { to: "/campaign-design", label: "Campaign Design" },
    { to: "/policy-recommendations", label: "Policy Recommendations" },
    { to: "/visibility-campaign", label: "Visibility Campaign" },
    { to: "/educational-resources", label: "Educational Resources" },
    { to: "/community-engagement", label: "Community Engagement" },
    { to: "/awareness-posters", label: "Awareness Posters" },
    { to: "/join-movement", label: "Join the Movement" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="font-bold text-xl bg-gradient-to-r from-primary to-campaign-end bg-clip-text text-transparent">
            EDI Sports Initiative
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link key={link.to} to={link.to}>
                <Button variant="ghost" size="sm">
                  {link.label}
                </Button>
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden py-4 space-y-2 border-t">
            {navLinks.map((link) => (
              <Link key={link.to} to={link.to} onClick={() => setIsOpen(false)}>
                <Button variant="ghost" className="w-full justify-start">
                  {link.label}
                </Button>
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
