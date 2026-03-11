import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";
import { ArrowRight, Brain, Crown, Sparkles } from "lucide-react";
import { motion } from "motion/react";
import { useLanguage } from "../contexts/LanguageContext";
import {
  STATIC_PERSONALITY_TYPES,
  getCategoryClass,
} from "../data/personalityData";

const categories = [
  {
    name: "Analysts",
    nameHi: "विश्लेषक",
    count: 4,
    desc: "Strategic & Intellectual",
    descHi: "रणनीतिक और बौद्धिक",
  },
  {
    name: "Diplomats",
    nameHi: "राजनयिक",
    count: 4,
    desc: "Empathetic & Idealistic",
    descHi: "सहानुभूतिशील और आदर्शवादी",
  },
  {
    name: "Sentinels",
    nameHi: "प्रहरी",
    count: 4,
    desc: "Dependable & Practical",
    descHi: "भरोसेमंद और व्यावहारिक",
  },
  {
    name: "Explorers",
    nameHi: "अन्वेषक",
    count: 4,
    desc: "Bold & Spontaneous",
    descHi: "साहसी और स्वत:स्फूर्त",
  },
];

export default function HomePage() {
  const { lang, t } = useLanguage();

  return (
    <main>
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 md:py-32">
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse 80% 60% at 50% 0%, oklch(25 0.1 280 / 0.5), transparent)",
            }}
          />
          <div
            className="absolute bottom-0 left-0 right-0 h-48"
            style={{
              background:
                "linear-gradient(to top, oklch(14 0.045 265), transparent)",
            }}
          />
        </div>

        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex justify-center mb-6"
          >
            <div className="relative">
              <img
                src="/assets/generated/crown-hero.dim_800x400.png"
                alt="Crown"
                className="w-48 h-24 object-contain drop-shadow-2xl"
              />
              <div
                className="absolute inset-0"
                style={{
                  filter: "blur(30px)",
                  background: "oklch(78 0.18 80 / 0.3)",
                  borderRadius: "50%",
                }}
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <h1 className="font-display text-5xl md:text-7xl font-bold mb-2">
              <span className="text-gradient-gold">Personality King</span>
            </h1>
            <p className="font-display text-2xl md:text-3xl text-muted-foreground mb-6">
              पर्सनैलिटी किंग
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <p className="text-lg md:text-xl text-foreground/80 max-w-2xl mx-auto mb-3">
              {t(
                "Discover which of the 16 MBTI personality types you are. Explore detailed profiles, strengths, and famous personalities.",
                "पता करें आप 16 MBTI व्यक्तित्व प्रकारों में से कौन से हैं। विस्तृत प्रोफाइल, शक्तियां और प्रसिद्ध व्यक्तित्वों का अन्वेषण करें।",
              )}
            </p>
            <p className="text-base text-muted-foreground max-w-xl mx-auto mb-10">
              {t(
                "Rule your destiny — know your type, own your story.",
                "अपनी नियति पर राज करें — अपना प्रकार जानें, अपनी कहानी को अपनाएं।",
              )}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link to="/types" search={{ category: undefined }}>
              <Button
                size="lg"
                data-ocid="home.explore_button"
                className="gradient-gold text-accent-foreground font-bold text-base px-8 py-6 glow-gold hover:opacity-90 transition-opacity"
              >
                <Sparkles className="mr-2 w-5 h-5" />
                {t("Explore Types", "प्रकार खोजें")}
              </Button>
            </Link>
            <Link to="/quiz">
              <Button
                size="lg"
                variant="outline"
                data-ocid="home.quiz_button"
                className="border-accent/50 text-accent hover:bg-accent/10 font-bold text-base px-8 py-6"
              >
                <Brain className="mr-2 w-5 h-5" />
                {t("Take the Quiz", "क्विज़ लें")}
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="container mx-auto px-4 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-3">
            {t("Four Kingdoms of Personality", "व्यक्तित्व के चार राज्य")}
          </h2>
          <p className="text-muted-foreground text-lg">
            {t(
              "Every person belongs to one of four grand categories",
              "हर व्यक्ति चार महान श्रेणियों में से एक में आता है",
            )}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Link to="/types" search={{ category: cat.name }}>
                <div
                  className={`card-regal rounded-xl p-6 border bg-${getCategoryClass(cat.name)} hover:scale-105 transition-transform cursor-pointer`}
                >
                  <div className="mb-4">
                    <img
                      src={`/assets/generated/type-${getCategoryClass(cat.name)}.dim_400x400.png`}
                      alt={cat.name}
                      className="w-16 h-16 object-contain rounded-lg"
                    />
                  </div>
                  <h3
                    className={`font-display text-xl font-bold category-${getCategoryClass(cat.name)} mb-1`}
                  >
                    {lang === "en" ? cat.name : cat.nameHi}
                  </h3>
                  <p className="text-xs text-muted-foreground mb-2">
                    {lang === "en" ? cat.desc : cat.descHi}
                  </p>
                  <span className="text-xs font-medium text-foreground/60">
                    {cat.count} types
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Featured Types Preview */}
      <section className="container mx-auto px-4 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-3">
            {t("Featured Personalities", "प्रमुख व्यक्तित्व")}
          </h2>
        </motion.div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {STATIC_PERSONALITY_TYPES.slice(0, 4).map((type, i) => (
            <motion.div
              key={type.code}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
            >
              <Link to="/types/$code" params={{ code: type.code }}>
                <div className="card-regal rounded-xl p-5 hover:scale-105 transition-transform cursor-pointer text-center">
                  <span className="text-2xl font-display font-bold text-gradient-gold block mb-1">
                    {type.code}
                  </span>
                  <span className="text-sm text-foreground/80">
                    {lang === "en" ? type.englishName : type.hindiName}
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
}
