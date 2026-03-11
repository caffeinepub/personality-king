import { Crown } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";

export default function Footer() {
  const { lang } = useLanguage();
  const year = new Date().getFullYear();
  const hostname =
    typeof window !== "undefined" ? window.location.hostname : "";

  return (
    <footer className="border-t border-border/50 py-8 mt-16">
      <div className="container mx-auto px-4 text-center">
        <div className="flex items-center justify-center gap-2 mb-3">
          <Crown className="w-5 h-5 text-gold" />
          <span className="font-display text-lg text-gradient-gold font-bold">
            {lang === "en" ? "Personality King" : "पर्सनैलिटी किंग"}
          </span>
        </div>
        <p className="text-muted-foreground text-sm">
          {lang === "en"
            ? "Discover your true self through the power of MBTI"
            : "MBTI की शक्ति से अपने सच्चे स्वरूप की खोज करें"}
        </p>
        <p className="text-muted-foreground/60 text-xs mt-3">
          © {year}.{" "}
          <a
            href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(hostname)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gold transition-colors"
          >
            Built with ♥ using caffeine.ai
          </a>
        </p>
      </div>
    </footer>
  );
}
