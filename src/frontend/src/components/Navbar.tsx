import { Button } from "@/components/ui/button";
import { Link, useLocation } from "@tanstack/react-router";
import { motion } from "motion/react";
import { useLanguage } from "../contexts/LanguageContext";

export default function Navbar() {
  const { lang, toggle } = useLanguage();
  const location = useLocation();

  const navLinks = [
    { to: "/", label: "Home", labelHi: "होम" },
    { to: "/types", label: "Types", labelHi: "प्रकार" },
    { to: "/quiz", label: "Quiz", labelHi: "क्विज़" },
  ];

  return (
    <header
      className="sticky top-0 z-50 bg-white border-b-4 border-foreground"
      style={{ boxShadow: "0 4px 0 oklch(15 0.02 265)" }}
    >
      <nav className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link
          to="/"
          data-ocid="nav.home_link"
          className="flex items-center gap-2 group"
        >
          <motion.div
            whileHover={{ rotate: 15, scale: 1.15 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <img
              src="/assets/generated/crown-cartoon-transparent.dim_400x400.png"
              alt="Crown"
              className="w-10 h-10 object-contain"
            />
          </motion.div>
          <span
            className="font-display text-xl text-primary hidden sm:block"
            style={{ textShadow: "1px 1px 0 oklch(15 0.02 265)" }}
          >
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
              className={`px-3 py-1.5 rounded-full text-sm font-bold border-2 transition-all ${
                location.pathname === link.to
                  ? "bg-primary text-white border-foreground shadow-cartoon-sm"
                  : "text-foreground border-transparent hover:border-foreground hover:bg-accent/50"
              }`}
            >
              {lang === "en" ? link.label : link.labelHi}
            </Link>
          ))}

          <Button
            variant="outline"
            size="sm"
            onClick={toggle}
            data-ocid="nav.language_toggle"
            className="ml-1 font-display font-bold text-sm px-4 border-2 border-foreground rounded-full hover:bg-accent/50"
            style={{ boxShadow: "2px 2px 0 oklch(15 0.02 265)" }}
          >
            {lang === "en" ? "हिं" : "EN"}
          </Button>
        </div>
      </nav>
    </header>
  );
}
