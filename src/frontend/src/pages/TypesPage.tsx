import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { useState } from "react";
import { useLanguage } from "../contexts/LanguageContext";
import { getCategoryClass } from "../data/personalityData";
import { useAllPersonalityTypes } from "../hooks/useQueries";

const ALL_CATEGORIES = [
  "All",
  "Analysts",
  "Diplomats",
  "Sentinels",
  "Explorers",
];
const CATEGORY_HI: Record<string, string> = {
  All: "सभी",
  Analysts: "विश्लेषक",
  Diplomats: "राजनयिक",
  Sentinels: "प्रहरी",
  Explorers: "अन्वेषक",
};

const CATEGORY_COLORS: Record<string, string> = {
  All: "bg-primary text-white",
  Analysts: "bg-analyst text-purple-700",
  Diplomats: "bg-diplomat text-green-700",
  Sentinels: "bg-sentinel text-blue-700",
  Explorers: "bg-explorer text-amber-700",
};

export default function TypesPage() {
  const { lang, t } = useLanguage();
  const { data: types, isLoading } = useAllPersonalityTypes();
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered =
    activeCategory === "All"
      ? types
      : types?.filter((tp) => tp.category === activeCategory);

  return (
    <main className="container mx-auto px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-10"
      >
        <h1
          className="font-display text-4xl md:text-5xl mb-3 text-primary"
          style={{ textShadow: "2px 2px 0 oklch(15 0.02 265)" }}
        >
          {t("16 Personality Types", "16 व्यक्तित्व प्रकार")}
        </h1>
        <p className="text-foreground/70 text-lg max-w-2xl mx-auto font-body">
          {t(
            "Every person is unique — but we all share patterns. Explore all 16 MBTI types.",
            "हर व्यक्ति अद्वितीय है — लेकिन हम सभी में कुछ पैटर्न समान होते हैं। सभी 16 MBTI प्रकारों का अन्वेषण करें।",
          )}
        </p>
      </motion.div>

      {/* Category Filter Tabs */}
      <div className="flex flex-wrap gap-2 justify-center mb-10">
        {ALL_CATEGORIES.map((cat) => (
          <button
            type="button"
            key={cat}
            data-ocid={`types.${cat.toLowerCase()}.tab`}
            onClick={() => setActiveCategory(cat)}
            className={`font-display text-sm px-5 py-2 rounded-full border-2 border-foreground transition-all ${
              activeCategory === cat
                ? `${CATEGORY_COLORS[cat]} shadow-cartoon-sm`
                : "bg-white text-foreground hover:bg-accent/30"
            }`}
            style={
              activeCategory === cat
                ? { boxShadow: "2px 2px 0 oklch(15 0.02 265)" }
                : {}
            }
          >
            {lang === "en" ? cat : CATEGORY_HI[cat]}
          </button>
        ))}
      </div>

      {isLoading ? (
        <div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4"
          data-ocid="types.loading_state"
        >
          {["a", "b", "c", "d", "e", "f", "g", "h"].map((k) => (
            <Skeleton key={k} className="h-44 rounded-2xl" />
          ))}
        </div>
      ) : (
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4"
          data-ocid="types.list"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.05 } },
          }}
        >
          {filtered?.map((type, i) => (
            <motion.div
              key={type.code}
              data-ocid={`types.item.${i + 1}`}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.4 }}
            >
              <Link to="/types/$code" params={{ code: type.code }}>
                <div
                  className={`card-regal p-5 bg-${getCategoryClass(type.category)} cursor-pointer h-full flex flex-col`}
                >
                  <Badge
                    variant="outline"
                    className={`self-start mb-3 text-xs category-${getCategoryClass(type.category)} border-current font-body border-2`}
                  >
                    {lang === "en" ? type.category : CATEGORY_HI[type.category]}
                  </Badge>
                  <span
                    className="font-display text-3xl text-primary block mb-1"
                    style={{ textShadow: "1px 1px 0 oklch(15 0.02 265 / 0.3)" }}
                  >
                    {type.code}
                  </span>
                  <span className="text-sm font-bold text-foreground mb-1 font-body">
                    {lang === "en" ? type.englishName : type.hindiName}
                  </span>
                  <p className="text-xs text-foreground/60 line-clamp-2 mt-auto font-body">
                    {lang === "en"
                      ? type.englishDescription
                      : type.hindiDescription}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      )}
    </main>
  );
}
