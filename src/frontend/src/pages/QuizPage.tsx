import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Link } from "@tanstack/react-router";
import { Brain, ChevronRight, Crown, RotateCcw } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { useLanguage } from "../contexts/LanguageContext";
import {
  STATIC_PERSONALITY_TYPES,
  getCategoryClass,
} from "../data/personalityData";
import {
  useCalculatePersonalityType,
  useQuizQuestions,
} from "../hooks/useQueries";

type QuizState = "intro" | "in-progress" | "result";

export default function QuizPage() {
  const { lang, t } = useLanguage();
  const { data: questions } = useQuizQuestions();
  const calculateMutation = useCalculatePersonalityType();

  const [quizState, setQuizState] = useState<QuizState>("intro");
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [resultCode, setResultCode] = useState<string | null>(null);

  const totalQuestions = questions?.length ?? 12;
  const progress =
    quizState === "result" ? 100 : (currentQuestion / totalQuestions) * 100;

  const resultType = resultCode
    ? STATIC_PERSONALITY_TYPES.find((tp) => tp.code === resultCode)
    : null;

  const handleStart = () => {
    setQuizState("in-progress");
    setCurrentQuestion(0);
    setAnswers([]);
    setResultCode(null);
  };

  const handleAnswer = async (answerIndex: number) => {
    const newAnswers = [...answers, answerIndex];
    setAnswers(newAnswers);

    if (currentQuestion + 1 >= totalQuestions) {
      const code = await calculateMutation.mutateAsync(newAnswers);
      setResultCode(code);
      setQuizState("result");
    } else {
      setCurrentQuestion((prev) => prev + 1);
    }
  };

  const handleReset = () => {
    setQuizState("intro");
    setCurrentQuestion(0);
    setAnswers([]);
    setResultCode(null);
    calculateMutation.reset();
  };

  const currentQ = questions?.[currentQuestion];

  return (
    <main className="container mx-auto px-4 py-12 max-w-2xl">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-8"
      >
        <div className="flex justify-center mb-4">
          <div className="w-12 h-12 rounded-full gradient-gold flex items-center justify-center glow-gold">
            <Brain className="w-6 h-6 text-accent-foreground" />
          </div>
        </div>
        <h1 className="font-display text-3xl md:text-4xl font-bold text-gradient-gold mb-2">
          {t("Personality Quiz", "व्यक्तित्व क्विज़")}
        </h1>
        <p className="text-muted-foreground">
          {t(
            "Answer 12 questions to discover your MBTI type",
            "अपना MBTI प्रकार जानने के लिए 12 प्रश्नों का उत्तर दें",
          )}
        </p>
      </motion.div>

      {quizState !== "intro" && (
        <div className="mb-8">
          <div className="flex justify-between text-sm text-muted-foreground mb-2">
            <span>
              {quizState === "result"
                ? t("Completed!", "पूर्ण!")
                : `${t("Question", "प्रश्न")} ${currentQuestion + 1} / ${totalQuestions}`}
            </span>
            <span>{Math.round(progress)}%</span>
          </div>
          <Progress value={progress} className="h-2" />
        </div>
      )}

      <AnimatePresence mode="wait">
        {quizState === "intro" && (
          <motion.div
            key="intro"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="card-regal rounded-2xl p-8 text-center"
          >
            <div className="text-6xl mb-6">👑</div>
            <h2 className="font-display text-2xl font-bold mb-4">
              {t(
                "Are you ready to discover your personality?",
                "क्या आप अपना व्यक्तित्व जानने के लिए तैयार हैं?",
              )}
            </h2>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              {t(
                "This quiz consists of 12 carefully crafted questions. Answer honestly for the most accurate result. There are no right or wrong answers!",
                "इस क्विज़ में 12 सावधानीपूर्वक तैयार किए गए प्रश्न हैं। सबसे सटीक परिणाम के लिए ईमानदारी से उत्तर दें। कोई सही या गलत उत्तर नहीं है!",
              )}
            </p>
            <Button
              size="lg"
              onClick={handleStart}
              data-ocid="quiz.start_button"
              className="gradient-gold text-accent-foreground font-bold text-base px-10 py-6 glow-gold hover:opacity-90"
            >
              <Crown className="mr-2 w-5 h-5" />
              {t("Begin the Quiz", "क्विज़ शुरू करें")}
              <ChevronRight className="ml-2 w-5 h-5" />
            </Button>
          </motion.div>
        )}

        {quizState === "in-progress" && currentQ && (
          <motion.div
            key={`question-${currentQuestion}`}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -40 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="card-regal rounded-2xl p-8"
          >
            <p className="text-xs text-muted-foreground uppercase tracking-widest mb-4">
              {t("Question", "प्रश्न")} {currentQuestion + 1}
            </p>
            <h2 className="font-display text-xl md:text-2xl font-bold mb-2 leading-snug">
              {lang === "en" ? currentQ.englishText : currentQ.hindiText}
            </h2>
            {lang === "en" && (
              <p className="text-muted-foreground text-sm mb-8">
                {currentQ.hindiText}
              </p>
            )}
            {lang === "hi" && (
              <p className="text-muted-foreground text-sm mb-8">
                {currentQ.englishText}
              </p>
            )}

            <div className="space-y-3">
              {currentQ.answerOptions.map((option, optIdx) => (
                <motion.button
                  key={option.englishText}
                  data-ocid={optIdx === 0 ? "quiz.answer.1" : "quiz.answer.2"}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => handleAnswer(optIdx)}
                  className="w-full text-left p-4 rounded-xl border border-border/70 bg-secondary/20 hover:border-accent/60 hover:bg-accent/10 transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <span className="w-8 h-8 rounded-full border border-border/70 group-hover:border-accent/60 group-hover:bg-accent/20 flex items-center justify-center text-sm font-bold text-muted-foreground group-hover:text-accent transition-all flex-shrink-0">
                      {String.fromCharCode(65 + optIdx)}
                    </span>
                    <div>
                      <p className="font-medium text-foreground/90">
                        {lang === "en" ? option.englishText : option.hindiText}
                      </p>
                      {lang === "en" && (
                        <p className="text-xs text-muted-foreground mt-0.5">
                          {option.hindiText}
                        </p>
                      )}
                      {lang === "hi" && (
                        <p className="text-xs text-muted-foreground mt-0.5">
                          {option.englishText}
                        </p>
                      )}
                    </div>
                  </div>
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}

        {quizState === "result" && (
          <motion.div
            key="result"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, type: "spring", stiffness: 200 }}
          >
            {calculateMutation.isPending ? (
              <div
                className="card-regal rounded-2xl p-12 text-center"
                data-ocid="quiz.loading_state"
              >
                <div className="w-12 h-12 rounded-full gradient-gold animate-spin mx-auto mb-4" />
                <p className="text-muted-foreground">
                  {t("Calculating your type...", "आपका प्रकार गणना हो रही है...")}
                </p>
              </div>
            ) : resultType ? (
              <div data-ocid="quiz.result_card">
                <div
                  className={`card-regal rounded-2xl p-8 border bg-${getCategoryClass(resultType.category)} mb-6 text-center`}
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                  >
                    <Crown className="w-12 h-12 text-gold mx-auto mb-4" />
                  </motion.div>
                  <p className="text-muted-foreground text-sm mb-2 uppercase tracking-widest">
                    {t("Your Personality Type", "आपका व्यक्तित्व प्रकार")}
                  </p>
                  <h2 className="font-display text-7xl font-bold text-gradient-gold mb-2">
                    {resultType.code}
                  </h2>
                  <h3 className="font-display text-2xl font-semibold mb-1">
                    {lang === "en"
                      ? resultType.englishName
                      : resultType.hindiName}
                  </h3>
                  <p className="text-muted-foreground">
                    {lang === "en"
                      ? resultType.hindiName
                      : resultType.englishName}
                  </p>
                </div>

                <div className="card-regal rounded-xl p-6 mb-6">
                  <p className="text-foreground/85 leading-relaxed">
                    {lang === "en"
                      ? resultType.englishDescription
                      : resultType.hindiDescription}
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="card-regal rounded-xl p-5">
                    <h4 className="font-bold text-emerald-400 mb-3 text-sm uppercase tracking-wide">
                      {t("Top Strengths", "प्रमुख शक्तियां")}
                    </h4>
                    <ul className="space-y-1.5">
                      {(lang === "en"
                        ? resultType.englishStrengths
                        : resultType.hindiStrengths
                      )
                        .slice(0, 3)
                        .map((s) => (
                          <li
                            key={s}
                            className="flex items-center gap-2 text-sm text-foreground/80"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                            {s}
                          </li>
                        ))}
                    </ul>
                  </div>
                  <div className="card-regal rounded-xl p-5">
                    <h4 className="font-bold text-gold mb-3 text-sm uppercase tracking-wide">
                      {t("Famous Examples", "प्रसिद्ध उदाहरण")}
                    </h4>
                    <ul className="space-y-1.5">
                      {(lang === "en"
                        ? resultType.englishFamousExamples
                        : resultType.hindiFamousExamples
                      )
                        .slice(0, 3)
                        .map((name) => (
                          <li
                            key={name}
                            className="flex items-center gap-2 text-sm text-foreground/80"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-gold" />
                            {name}
                          </li>
                        ))}
                    </ul>
                  </div>
                </div>

                <div className="flex gap-3 flex-wrap">
                  <Link
                    to="/types/$code"
                    params={{ code: resultType.code }}
                    className="flex-1"
                  >
                    <Button className="w-full gradient-gold text-accent-foreground font-bold glow-gold hover:opacity-90">
                      {t("View Full Profile", "पूर्ण प्रोफाइल देखें")}
                    </Button>
                  </Link>
                  <Button
                    variant="outline"
                    onClick={handleReset}
                    data-ocid="quiz.next_button"
                    className="border-border/70 text-muted-foreground hover:text-foreground"
                  >
                    <RotateCcw className="w-4 h-4 mr-2" />
                    {t("Retake", "फिर से लें")}
                  </Button>
                </div>
              </div>
            ) : (
              <div
                className="card-regal rounded-2xl p-8 text-center"
                data-ocid="quiz.error_state"
              >
                <p className="text-muted-foreground mb-4">
                  {t(
                    "Could not determine your type. Please try again.",
                    "आपका प्रकार निर्धारित नहीं हो सका। कृपया फिर से प्रयास करें।",
                  )}
                </p>
                <Button onClick={handleReset} variant="outline">
                  {t("Try Again", "फिर से प्रयास करें")}
                </Button>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
