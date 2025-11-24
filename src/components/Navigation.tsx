import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, User } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState<any>(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Check initial session
    const checkUser = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      setUser(session?.user ?? null);
    };
    checkUser();

    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });

    return () => subscription.unsubscribe();
  }, []);

  const navLinks = [
    { to: "/explore", label: "Explore Campaign" },
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
            EDI SPORTS
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
            {user ? (
              <Button
                variant="ghost"
                size="sm"
                className="text-foreground hover:text-primary transition-colors"
                asChild
              >
                <Link to="/profile">
                  <User className="w-4 h-4 mr-2" />
                  Profile
                </Link>
              </Button>
            ) : (
              <Button variant="default" size="sm" asChild>
                <Link to="/auth">Login</Link>
              </Button>
            )}
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
            {user ? (
              <Button
                variant="ghost"
                className="text-foreground hover:text-primary transition-colors w-full justify-start"
                asChild
              >
                <Link to="/profile" onClick={() => setIsOpen(false)}>
                  <User className="w-4 h-4 mr-2" />
                  Profile
                </Link>
              </Button>
            ) : (
              <Button variant="default" className="w-full" asChild>
                <Link to="/auth" onClick={() => setIsOpen(false)}>Login</Link>
              </Button>
            )}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
