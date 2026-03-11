import { createContext, useContext, useState } from "react";

export type Language = "en" | "hi";

interface LanguageContextType {
  lang: Language;
  toggle: () => void;
  t: (en: string, hi: string) => string;
}

const LanguageContext = createContext<LanguageContextType>({
  lang: "en",
  toggle: () => {},
  t: (en) => en,
});

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Language>("en");

  const toggle = () => setLang((prev) => (prev === "en" ? "hi" : "en"));
  const t = (en: string, hi: string) => (lang === "en" ? en : hi);

  return (
    <LanguageContext.Provider value={{ lang, toggle, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
