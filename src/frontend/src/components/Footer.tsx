import { useLanguage } from "../contexts/LanguageContext";

export default function Footer() {
  const { lang } = useLanguage();
  const year = new Date().getFullYear();
  const hostname =
    typeof window !== "undefined" ? window.location.hostname : "";

  return (
    <footer className="border-t-4 border-foreground py-8 mt-16 bg-accent/20">
      <div className="container mx-auto px-4 text-center">
        <div className="flex items-center justify-center gap-3 mb-3">
          <img
            src="/assets/generated/crown-cartoon-transparent.dim_400x400.png"
            alt="Crown"
            className="w-8 h-8 object-contain"
          />
          <span
            className="font-display text-xl text-primary"
            style={{ textShadow: "1px 1px 0 oklch(15 0.02 265)" }}
          >
            {lang === "en" ? "Personality King" : "पर्सनैलिटी किंग"}
          </span>
        </div>
        <p className="text-foreground/70 text-sm font-body">
          {lang === "en"
            ? "Discover your true self through the power of MBTI"
            : "MBTI की शक्ति से अपने सच्चे स्वरूप की खोज करें"}
        </p>
        <p className="text-foreground/50 text-xs mt-3">
          © {year}.{" "}
          <a
            href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(hostname)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition-colors font-bold"
          >
            Built with ♥ using caffeine.ai
          </a>
        </p>
      </div>
    </footer>
  );
}
