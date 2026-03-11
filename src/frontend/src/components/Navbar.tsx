import { Button } from "@/components/ui/button";
import { Link, useLocation } from "@tanstack/react-router";
import { Crown } from "lucide-react";
import { motion } from "motion/react";
import { useLanguage } from "../contexts/LanguageContext";

export default function Navbar() {
  const { lang, toggle } = useLanguage();
  const location = useLocation();

  const navLinks = [
    { to: "/", label: "Home", labelHi: "होम" },
    { to: "/types", label: "Personality Types", labelHi: "व्यक्तित्व प्रकार" },
    { to: "/quiz", label: "Take Quiz", labelHi: "क्विज़ लें" },
  ];

  return (
    <header
      className="sticky top-0 z-50 border-b border-border/50 backdrop-blur-xl"
      style={{ background: "oklch(14 0.045 265 / 0.95)" }}
    >
      <nav className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link
          to="/"
          data-ocid="nav.home_link"
          className="flex items-center gap-2 group"
        >
          <motion.div
            whileHover={{ rotate: 10, scale: 1.1 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Crown className="w-7 h-7 text-gold" />
          </motion.div>
          <span className="font-display font-bold text-xl text-gradient-gold hidden sm:block">
            {lang === "en" ? "Personality King" : "पर्सनैलिटी किंग"}
          </span>
        </Link>

        <div className="flex items-center gap-1 sm:gap-2">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              data-ocid={
                link.to === "/"
                  ? "nav.home_link"
                  : link.to === "/types"
                    ? "nav.types_link"
                    : "nav.quiz_link"
              }
              className={`px-3 py-1.5 rounded-md text-sm font-medium transition-colors ${
                location.pathname === link.to
                  ? "text-gold bg-accent/10"
                  : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
              }`}
            >
              <span className="hidden sm:block">
                {lang === "en" ? link.label : link.labelHi}
              </span>
              <span className="sm:hidden">
                {lang === "en"
                  ? link.label.split(" ")[0]
                  : link.labelHi.split(" ")[0]}
              </span>
            </Link>
          ))}

          <Button
            variant="outline"
            size="sm"
            onClick={toggle}
            data-ocid="nav.language_toggle"
            className="ml-1 border-accent/40 text-accent hover:bg-accent hover:text-accent-foreground font-bold text-xs px-3"
          >
            {lang === "en" ? "हिं" : "EN"}
          </Button>
        </div>
      </nav>
    </header>
  );
}
