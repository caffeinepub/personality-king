import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { Link, useParams } from "@tanstack/react-router";
import {
  AlertTriangle,
  ArrowLeft,
  Heart,
  Star,
  ThumbsDown,
  User,
} from "lucide-react";
import { motion } from "motion/react";
import { useLanguage } from "../contexts/LanguageContext";
import { getCategoryClass, getCategoryImage } from "../data/personalityData";
import { usePersonalityType } from "../hooks/useQueries";

const CATEGORY_HI: Record<string, string> = {
  Analysts: "विश्लेषक",
  Diplomats: "राजनयिक",
  Sentinels: "प्रहरी",
  Explorers: "अन्वेषक",
};

export default function TypeDetailPage() {
  const { code } = useParams({ from: "/types/$code" });
  const { data: type, isLoading } = usePersonalityType(code);
  const { lang, t } = useLanguage();

  if (isLoading) {
    return (
      <main
        className="container mx-auto px-4 py-12"
        data-ocid="types.loading_state"
      >
        <Skeleton className="h-8 w-32 mb-8" />
        <Skeleton className="h-48 w-full mb-6" />
        <div className="grid grid-cols-2 gap-4">
          <Skeleton className="h-40" />
          <Skeleton className="h-40" />
        </div>
      </main>
    );
  }

  if (!type) {
    return (
      <main
        className="container mx-auto px-4 py-12 text-center"
        data-ocid="types.error_state"
      >
        <h2 className="font-display text-3xl text-gold mb-4">
          {t("Type not found", "प्रकार नहीं मिला")}
        </h2>
        <Link to="/types" search={{ category: undefined }}>
          <span className="text-accent hover:underline">
            {t("Back to all types", "सभी प्रकारों पर वापस")}
          </span>
        </Link>
      </main>
    );
  }

  const catClass = getCategoryClass(type.category);
  const catImg = getCategoryImage(type.category);
  const strengths = lang === "en" ? type.englishStrengths : type.hindiStrengths;
  const weaknesses =
    lang === "en" ? type.englishWeaknesses : type.hindiWeaknesses;
  const likes = lang === "en" ? type.englishLikes : type.hindiLikes;
  const dislikes = lang === "en" ? type.englishDislikes : type.hindiDislikes;
  const famous =
    lang === "en" ? type.englishFamousExamples : type.hindiFamousExamples;

  return (
    <main className="container mx-auto px-4 py-12 max-w-4xl">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4 }}
      >
        <Link
          to="/types"
          search={{ category: undefined }}
          data-ocid="types.back_button"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-gold transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          {t("All Types", "सभी प्रकार")}
        </Link>
      </motion.div>

      {/* Header Card */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className={`card-regal rounded-2xl p-8 border bg-${catClass} mb-8 relative overflow-hidden`}
      >
        <div className="absolute right-6 top-6 opacity-20">
          <img
            src={catImg}
            alt={type.category}
            className="w-32 h-32 object-contain"
          />
        </div>
        <div className="relative z-10">
          <Badge
            variant="outline"
            className={`category-${catClass} border-current mb-4`}
          >
            {lang === "en" ? type.category : CATEGORY_HI[type.category]}
          </Badge>
          <h1 className="font-display text-6xl md:text-7xl font-bold text-gradient-gold mb-2">
            {type.code}
          </h1>
          <h2 className="font-display text-2xl md:text-3xl font-semibold text-foreground/90 mb-1">
            {lang === "en" ? type.englishName : type.hindiName}
          </h2>
          <p className="text-muted-foreground text-lg">
            {lang === "en" ? type.hindiName : type.englishName}
          </p>
        </div>
      </motion.div>

      {/* Description */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="card-regal rounded-xl p-6 mb-6"
      >
        <h3 className="font-display text-xl font-bold text-gold mb-3">
          {t("About this Type", "इस प्रकार के बारे में")}
        </h3>
        <p className="text-foreground/85 leading-relaxed text-base">
          {lang === "en" ? type.englishDescription : type.hindiDescription}
        </p>
      </motion.div>

      {/* Strengths & Weaknesses */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="card-regal rounded-xl p-6"
        >
          <h3 className="font-display text-xl font-bold text-emerald-400 mb-4 flex items-center gap-2">
            <Star className="w-5 h-5" />
            {t("Strengths", "शक्तियां")}
          </h3>
          <ul className="space-y-2">
            {strengths.map((s) => (
              <li
                key={s}
                className="flex items-center gap-2 text-foreground/85"
              >
                <span className="w-2 h-2 rounded-full bg-emerald-400 flex-shrink-0" />
                {s}
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="card-regal rounded-xl p-6"
        >
          <h3 className="font-display text-xl font-bold text-amber-400 mb-4 flex items-center gap-2">
            <AlertTriangle className="w-5 h-5" />
            {t("Weaknesses", "कमज़ोरियां")}
          </h3>
          <ul className="space-y-2">
            {weaknesses.map((w) => (
              <li
                key={w}
                className="flex items-center gap-2 text-foreground/85"
              >
                <span className="w-2 h-2 rounded-full bg-amber-400 flex-shrink-0" />
                {w}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>

      {/* Likes & Dislikes */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="card-regal rounded-xl p-6"
        >
          <h3 className="font-display text-xl font-bold text-pink-400 mb-4 flex items-center gap-2">
            <Heart className="w-5 h-5" />
            {t("Likes", "पसंद")}
          </h3>
          <ul className="space-y-2">
            {likes.map((item) => (
              <li
                key={item}
                className="flex items-center gap-2 text-foreground/85"
              >
                <span className="w-2 h-2 rounded-full bg-pink-400 flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="card-regal rounded-xl p-6"
        >
          <h3 className="font-display text-xl font-bold text-red-400 mb-4 flex items-center gap-2">
            <ThumbsDown className="w-5 h-5" />
            {t("Dislikes", "नापसंद")}
          </h3>
          <ul className="space-y-2">
            {dislikes.map((item) => (
              <li
                key={item}
                className="flex items-center gap-2 text-foreground/85"
              >
                <span className="w-2 h-2 rounded-full bg-red-400 flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>

      {/* Famous Examples */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.45 }}
        className="card-regal rounded-xl p-6 mb-8"
      >
        <h3 className="font-display text-xl font-bold text-gold mb-4 flex items-center gap-2">
          <User className="w-5 h-5" />
          {t("Famous Examples", "प्रसिद्ध उदाहरण")}
        </h3>
        <div className="flex flex-wrap gap-3">
          {famous.map((name) => (
            <Badge
              key={name}
              variant="secondary"
              className="text-sm py-1.5 px-3 bg-secondary/50 text-foreground/80"
            >
              {name}
            </Badge>
          ))}
        </div>
      </motion.div>

      <div className="flex gap-4">
        <Link to="/types" search={{ category: undefined }}>
          <Badge
            variant="outline"
            className="text-accent border-accent/50 cursor-pointer hover:bg-accent/10 py-2 px-4"
            data-ocid="types.all_link"
          >
            {t("← All Types", "← सभी प्रकार")}
          </Badge>
        </Link>
        <Link to="/quiz">
          <Badge
            variant="outline"
            className="text-gold border-gold/50 cursor-pointer hover:bg-gold/10 py-2 px-4"
            data-ocid="types.quiz_link"
          >
            {t("Take the Quiz →", "क्विज़ लें →")}
          </Badge>
        </Link>
      </div>
    </main>
  );
}
