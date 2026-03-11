import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
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
        <h1 className="font-display text-4xl md:text-5xl font-bold mb-3">
          <span className="text-gradient-gold">
            {t("16 Personality Types", "16 व्यक्तित्व प्रकार")}
          </span>
        </h1>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          {t(
            "Every person is unique — but we all share patterns. Explore all 16 MBTI types.",
            "हर व्यक्ति अद्वितीय है — लेकिन हम सभी में कुछ पैटर्न समान होते हैं। सभी 16 MBTI प्रकारों का अन्वेषण करें।",
          )}
        </p>
      </motion.div>

      <Tabs
        value={activeCategory}
        onValueChange={setActiveCategory}
        className="mb-10"
      >
        <TabsList className="flex-wrap h-auto gap-1 p-1 bg-secondary/30">
          {ALL_CATEGORIES.map((cat) => (
            <TabsTrigger
              key={cat}
              value={cat}
              data-ocid={`types.${cat.toLowerCase()}.tab`}
              className="data-[state=active]:bg-accent data-[state=active]:text-accent-foreground"
            >
              {lang === "en" ? cat : CATEGORY_HI[cat]}
            </TabsTrigger>
          ))}
        </TabsList>
      </Tabs>

      {isLoading ? (
        <div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4"
          data-ocid="types.loading_state"
        >
          {["a", "b", "c", "d", "e", "f", "g", "h"].map((k) => (
            <Skeleton key={k} className="h-44 rounded-xl" />
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
                  className={`card-regal rounded-xl p-5 border bg-${getCategoryClass(type.category)} hover:scale-105 hover:glow-gold transition-all cursor-pointer h-full flex flex-col`}
                >
                  <Badge
                    variant="outline"
                    className={`self-start mb-3 text-xs category-${getCategoryClass(type.category)} border-current`}
                  >
                    {lang === "en" ? type.category : CATEGORY_HI[type.category]}
                  </Badge>
                  <span className="font-display text-3xl font-bold text-gradient-gold block mb-1">
                    {type.code}
                  </span>
                  <span className="text-sm font-semibold text-foreground/90 mb-1">
                    {lang === "en" ? type.englishName : type.hindiName}
                  </span>
                  <p className="text-xs text-muted-foreground line-clamp-2 mt-auto">
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
