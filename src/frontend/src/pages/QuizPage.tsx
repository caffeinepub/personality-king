import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Link } from "@tanstack/react-router";
import { Brain, ChevronRight, RotateCcw } from "lucide-react";
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
          <motion.div
            className="w-16 h-16 rounded-full bg-secondary border-3 border-foreground flex items-center justify-center"
            style={{
              border: "3px solid oklch(15 0.02 265)",
              boxShadow: "3px 3px 0 oklch(15 0.02 265)",
            }}
            animate={{ rotate: [0, -5, 5, 0] }}
            transition={{
              repeat: Number.POSITIVE_INFINITY,
              duration: 3,
              ease: "easeInOut",
            }}
          >
            <Brain className="w-7 h-7 text-white" />
          </motion.div>
        </div>
        <h1
          className="font-display text-3xl md:text-4xl text-primary mb-2"
          style={{ textShadow: "2px 2px 0 oklch(15 0.02 265)" }}
        >
          {t("Personality Quiz", "व्यक्तित्व क्विज़")}
        </h1>
        <p className="text-foreground/70 font-body">
          {t(
            "Answer 12 questions to discover your MBTI type",
            "अपना MBTI प्रकार जानने के लिए 12 प्रश्नों का उत्तर दें",
          )}
        </p>
      </motion.div>

      {quizState !== "intro" && (
        <div className="mb-8">
          <div className="flex justify-between text-sm text-foreground/70 mb-2 font-body">
            <span>
              {quizState === "result"
                ? t("Completed!", "पूर्ण!")
                : `${t("Question", "प्रश्न")} ${currentQuestion + 1} / ${totalQuestions}`}
            </span>
            <span>{Math.round(progress)}%</span>
          </div>
          <div
            className="h-4 rounded-full border-2 border-foreground overflow-hidden"
            style={{ boxShadow: "2px 2px 0 oklch(15 0.02 265)" }}
          >
            <motion.div
              className="h-full bg-primary rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            />
          </div>
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
            className="card-regal p-8 text-center"
          >
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{
                repeat: Number.POSITIVE_INFINITY,
                duration: 2,
                ease: "easeInOut",
              }}
              className="text-6xl mb-6"
            >
              👑
            </motion.div>
            <h2 className="font-display text-2xl mb-4 text-foreground">
              {t(
                "Are you ready to discover your personality?",
                "क्या आप अपना व्यक्तित्व जानने के लिए तैयार हैं?",
              )}
            </h2>
            <p className="text-foreground/70 mb-8 leading-relaxed font-body">
              {t(
                "This quiz consists of 12 carefully crafted questions. Answer honestly for the most accurate result. There are no right or wrong answers!",
                "इस क्विज़ में 12 सावधानीपूर्वक तैयार किए गए प्रश्न हैं। सबसे सटीक परिणाम के लिए ईमानदारी से उत्तर दें। कोई सही या गलत उत्तर नहीं है!",
              )}
            </p>
            <button
              type="button"
              onClick={handleStart}
              data-ocid="quiz.start_button"
              className="btn-cartoon bg-primary text-white font-display text-lg px-10 py-3 rounded-2xl flex items-center gap-2 mx-auto"
            >
              <span className="text-xl">🎯</span>
              {t("Begin the Quiz", "क्विज़ शुरू करें")}
              <ChevronRight className="w-5 h-5" />
            </button>
          </motion.div>
        )}

        {quizState === "in-progress" && currentQ && (
          <motion.div
            key={`question-${currentQuestion}`}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -40 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="card-regal p-8"
          >
            <p className="text-xs text-foreground/50 uppercase tracking-widest mb-4 font-body">
              {t("Question", "प्रश्न")} {currentQuestion + 1}
            </p>
            <h2 className="font-display text-xl md:text-2xl mb-2 leading-snug text-foreground">
              {lang === "en" ? currentQ.englishText : currentQ.hindiText}
            </h2>
            {lang === "en" && (
              <p className="text-foreground/50 text-sm mb-8 font-body">
                {currentQ.hindiText}
              </p>
            )}
            {lang === "hi" && (
              <p className="text-foreground/50 text-sm mb-8 font-body">
                {currentQ.englishText}
              </p>
            )}

            <div className="space-y-3">
              {currentQ.answerOptions.map((option, optIdx) => (
                <motion.button
                  key={option.englishText}
                  data-ocid={optIdx === 0 ? "quiz.answer.1" : "quiz.answer.2"}
                  whileHover={{ x: -2, y: -2 }}
                  whileTap={{ x: 2, y: 2 }}
                  onClick={() => handleAnswer(optIdx)}
                  className="w-full text-left p-4 rounded-2xl border-2 border-foreground bg-white hover:bg-accent/30 transition-colors font-body"
                  style={{
                    boxShadow: "3px 3px 0 oklch(15 0.02 265)",
                    transition: "box-shadow 0.1s ease",
                  }}
                >
                  <div className="flex items-center gap-3">
                    <span className="w-9 h-9 rounded-full border-2 border-foreground bg-accent/50 flex items-center justify-center text-sm font-display text-foreground flex-shrink-0">
                      {String.fromCharCode(65 + optIdx)}
                    </span>
                    <div>
                      <p className="font-medium text-foreground">
                        {lang === "en" ? option.englishText : option.hindiText}
                      </p>
                      {lang === "en" && (
                        <p className="text-xs text-foreground/50 mt-0.5">
                          {option.hindiText}
                        </p>
                      )}
                      {lang === "hi" && (
                        <p className="text-xs text-foreground/50 mt-0.5">
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
                className="card-regal p-12 text-center"
                data-ocid="quiz.loading_state"
              >
                <motion.div
                  className="w-14 h-14 rounded-full bg-primary border-2 border-foreground mx-auto mb-4 flex items-center justify-center"
                  animate={{ rotate: 360 }}
                  transition={{
                    repeat: Number.POSITIVE_INFINITY,
                    duration: 1,
                    ease: "linear",
                  }}
                >
                  <span className="text-white text-xl">⚙️</span>
                </motion.div>
                <p className="text-foreground/70 font-body">
                  {t("Calculating your type...", "आपका प्रकार गणना हो रही है...")}
                </p>
              </div>
            ) : resultType ? (
              <div data-ocid="quiz.result_card">
                <div
                  className={`card-regal p-8 bg-${getCategoryClass(resultType.category)} mb-6 text-center`}
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                    className="text-5xl mb-4"
                  >
                    👑
                  </motion.div>
                  <p className="text-foreground/60 text-sm mb-2 uppercase tracking-widest font-body">
                    {t("Your Personality Type", "आपका व्यक्तित्व प्रकार")}
                  </p>
                  <h2
                    className="font-display text-7xl text-primary mb-2"
                    style={{ textShadow: "3px 3px 0 oklch(15 0.02 265 / 0.3)" }}
                  >
                    {resultType.code}
                  </h2>
                  <h3 className="font-display text-2xl text-foreground mb-1">
                    {lang === "en"
                      ? resultType.englishName
                      : resultType.hindiName}
                  </h3>
                  <p className="text-foreground/60 font-body">
                    {lang === "en"
                      ? resultType.hindiName
                      : resultType.englishName}
                  </p>
                </div>

                <div className="card-regal p-6 mb-6">
                  <p className="text-foreground/85 leading-relaxed font-body">
                    {lang === "en"
                      ? resultType.englishDescription
                      : resultType.hindiDescription}
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div
                    className="card-regal p-5"
                    style={{ background: "oklch(92 0.08 155)" }}
                  >
                    <h4
                      className="font-display text-base mb-3"
                      style={{ color: "oklch(40 0.20 155)" }}
                    >
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
                            className="flex items-center gap-2 text-sm text-foreground/80 font-body"
                          >
                            <span className="w-2 h-2 rounded-full bg-green-500 border border-green-700" />
                            {s}
                          </li>
                        ))}
                    </ul>
                  </div>
                  <div
                    className="card-regal p-5"
                    style={{ background: "oklch(93 0.08 305)" }}
                  >
                    <h4
                      className="font-display text-base mb-3"
                      style={{ color: "oklch(40 0.25 305)" }}
                    >
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
                            className="flex items-center gap-2 text-sm text-foreground/80 font-body"
                          >
                            <span className="w-2 h-2 rounded-full bg-purple-500 border border-purple-700" />
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
                    <button
                      type="button"
                      className="w-full btn-cartoon bg-primary text-white font-display py-3 px-6 rounded-2xl"
                    >
                      {t("View Full Profile", "पूर्ण प्रोफाइल देखें")}
                    </button>
                  </Link>
                  <button
                    type="button"
                    onClick={handleReset}
                    data-ocid="quiz.next_button"
                    className="btn-cartoon bg-white text-foreground font-display py-3 px-6 rounded-2xl flex items-center gap-2"
                  >
                    <RotateCcw className="w-4 h-4" />
                    {t("Retake", "फिर से लें")}
                  </button>
                </div>
              </div>
            ) : (
              <div
                className="card-regal p-8 text-center"
                data-ocid="quiz.error_state"
              >
                <p className="text-foreground/70 mb-4 font-body">
                  {t(
                    "Could not determine your type. Please try again.",
                    "आपका प्रकार निर्धारित नहीं हो सका। कृपया फिर से प्रयास करें।",
                  )}
                </p>
                <button
                  type="button"
                  onClick={handleReset}
                  className="btn-cartoon bg-secondary text-white font-display px-6 py-2 rounded-2xl"
                >
                  {t("Try Again", "फिर से प्रयास करें")}
                </button>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
