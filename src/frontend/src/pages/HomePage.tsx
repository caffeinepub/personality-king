import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";
import { ArrowRight, Brain, Sparkles } from "lucide-react";
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
    img: "/assets/generated/type-analyst-cartoon-transparent.dim_400x400.png",
    bg: "bg-analyst",
    color: "#8B5CF6",
  },
  {
    name: "Diplomats",
    nameHi: "राजनयिक",
    count: 4,
    desc: "Empathetic & Idealistic",
    descHi: "सहानुभूतिशील और आदर्शवादी",
    img: "/assets/generated/type-diplomat-cartoon-transparent.dim_400x400.png",
    bg: "bg-diplomat",
    color: "#10B981",
  },
  {
    name: "Sentinels",
    nameHi: "प्रहरी",
    count: 4,
    desc: "Dependable & Practical",
    descHi: "भरोसेमंद और व्यावहारिक",
    img: "/assets/generated/type-sentinel-cartoon-transparent.dim_400x400.png",
    bg: "bg-sentinel",
    color: "#3B82F6",
  },
  {
    name: "Explorers",
    nameHi: "अन्वेषक",
    count: 4,
    desc: "Bold & Spontaneous",
    descHi: "साहसी और स्वत:स्फूर्त",
    img: "/assets/generated/type-explorer-cartoon-transparent.dim_400x400.png",
    bg: "bg-explorer",
    color: "#F59E0B",
  },
];

export default function HomePage() {
  const { lang, t } = useLanguage();

  return (
    <main>
      {/* Hero Section */}
      <section className="relative overflow-hidden py-16 md:py-24">
        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex justify-center mb-6"
          >
            <motion.img
              src="/assets/generated/crown-cartoon-transparent.dim_400x400.png"
              alt="Crown"
              className="w-36 h-36 object-contain drop-shadow-xl"
              animate={{ y: [0, -10, 0] }}
              transition={{
                repeat: Number.POSITIVE_INFINITY,
                duration: 2.5,
                ease: "easeInOut",
              }}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <h1
              className="font-display text-5xl md:text-7xl mb-2 text-primary"
              style={{
                textShadow:
                  "3px 3px 0 oklch(15 0.02 265), -1px -1px 0 oklch(15 0.02 265)",
              }}
            >
              {lang === "en" ? "Personality King" : "पर्सनैलिटी किंग"}
            </h1>
            <p className="font-display text-xl md:text-2xl text-foreground/60 mb-4">
              {lang === "en" ? "पर्सनैलिटी किंग" : "Personality King"}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <p className="text-lg md:text-xl text-foreground/80 max-w-2xl mx-auto mb-3 font-body">
              {t(
                "Discover which of the 16 MBTI personality types you are. Explore detailed profiles, strengths, and famous personalities.",
                "पता करें आप 16 MBTI व्यक्तित्व प्रकारों में से कौन से हैं। विस्तृत प्रोफाइल, शक्तियां और प्रसिद्ध व्यक्तित्वों का अन्वेषण करें।",
              )}
            </p>
            <p className="text-base text-foreground/60 max-w-xl mx-auto mb-10 font-body">
              {t(
                "Rule your destiny — know your type, own your story!",
                "अपनी नियति पर राज करें — अपना प्रकार जानें, अपनी कहानी को अपनाएं!",
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
              <button
                type="button"
                data-ocid="home.explore_button"
                className="btn-cartoon bg-primary text-white font-display text-lg px-8 py-3 rounded-2xl flex items-center gap-2 hover:bg-primary/90"
              >
                <Sparkles className="w-5 h-5" />
                {t("Explore Types", "प्रकार खोजें")}
              </button>
            </Link>
            <Link to="/quiz">
              <button
                type="button"
                data-ocid="home.quiz_button"
                className="btn-cartoon bg-secondary text-white font-display text-lg px-8 py-3 rounded-2xl flex items-center gap-2 hover:bg-secondary/90"
              >
                <Brain className="w-5 h-5" />
                {t("Take the Quiz", "क्विज़ लें")}
                <ArrowRight className="w-5 h-5" />
              </button>
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
          <h2
            className="font-display text-3xl md:text-4xl mb-3 text-primary"
            style={{ textShadow: "2px 2px 0 oklch(15 0.02 265)" }}
          >
            {t("Four Kingdoms of Personality", "व्यक्तित्व के चार राज्य")}
          </h2>
          <p className="text-foreground/70 text-lg font-body">
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
                  className={`card-regal ${cat.bg} p-6 cursor-pointer text-center`}
                >
                  <div className="flex justify-center mb-4">
                    <img
                      src={cat.img}
                      alt={cat.name}
                      className="w-24 h-24 object-contain drop-shadow-lg"
                    />
                  </div>
                  <h3
                    className="font-display text-2xl mb-1"
                    style={{
                      color: cat.color,
                      textShadow: "1px 1px 0 oklch(15 0.02 265 / 0.4)",
                    }}
                  >
                    {lang === "en" ? cat.name : cat.nameHi}
                  </h3>
                  <p className="text-sm text-foreground/70 font-body mb-2">
                    {lang === "en" ? cat.desc : cat.descHi}
                  </p>
                  <span
                    className="text-xs font-bold border-2 border-current rounded-full px-2 py-0.5"
                    style={{ color: cat.color }}
                  >
                    {cat.count} {t("types", "प्रकार")}
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
          <h2
            className="font-display text-3xl md:text-4xl mb-3 text-primary"
            style={{ textShadow: "2px 2px 0 oklch(15 0.02 265)" }}
          >
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
                <div
                  className={`card-regal p-5 cursor-pointer text-center bg-${getCategoryClass(type.category)}`}
                >
                  <span
                    className="text-3xl font-display block mb-1 text-primary"
                    style={{ textShadow: "2px 2px 0 oklch(15 0.02 265 / 0.3)" }}
                  >
                    {type.code}
                  </span>
                  <span className="text-sm text-foreground/80 font-body">
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
