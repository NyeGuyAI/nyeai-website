"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import Button from "@/components/Button";
import ProgressBar from "@/components/ProgressBar";
import { questions } from "@/lib/assessment-questions";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function QuizPage() {
  const router = useRouter();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [email, setEmail] = useState("");
  const [showEmailCapture, setShowEmailCapture] = useState(false);

  const question = questions[currentQuestion];
  const totalQuestions = questions.length;
  const isLastQuestion = currentQuestion === totalQuestions - 1;

  const handleAnswer = (points: number) => {
    setAnswers({
      ...answers,
      [question.id]: points,
    });
  };

  const handleNext = () => {
    if (!answers[question.id] && answers[question.id] !== 0) {
      alert("Please select an answer before continuing.");
      return;
    }

    if (isLastQuestion) {
      setShowEmailCapture(true);
    } else {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!email) {
      alert("Please enter your email to see results.");
      return;
    }

    // Store answers and email in sessionStorage
    sessionStorage.setItem("assessmentAnswers", JSON.stringify(answers));
    sessionStorage.setItem("assessmentEmail", email);

    // Navigate to results
    router.push("/assessment/results");
  };

  if (showEmailCapture) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background py-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl w-full mx-auto px-4"
        >
          <div className="bg-dark-gray border border-purple-primary/20 rounded-lg p-8 md:p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              You're Almost Done!
            </h2>
            <p className="text-lg text-text-secondary mb-8">
              Enter your email to receive your personalized AI Readiness Report
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  required
                  className="w-full px-6 py-4 bg-background border border-purple-primary/20 rounded-lg text-foreground text-lg focus:outline-none focus:border-purple-primary transition-colors text-center"
                />
              </div>

              <Button type="submit" variant="primary" className="w-full text-lg px-8 py-4">
                See My Results
              </Button>

              <p className="text-sm text-text-secondary">
                We respect your privacy. Your email will only be used to send your assessment
                results and occasional AI tips. Unsubscribe anytime.
              </p>
            </form>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Progress Bar */}
        <div className="mb-8">
          <ProgressBar current={currentQuestion + 1} total={totalQuestions} />
        </div>

        {/* Question Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentQuestion}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="bg-dark-gray border border-purple-primary/20 rounded-lg p-8 md:p-12"
          >
            {/* Category Tag */}
            <div className="inline-block px-4 py-1 bg-purple-primary/20 rounded-full text-sm text-purple-primary mb-6">
              {question.category}
            </div>

            {/* Question */}
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8">
              {question.question}
            </h2>

            {/* Options */}
            <div className="space-y-4">
              {question.options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswer(option.points)}
                  className={`w-full text-left px-6 py-4 rounded-lg border-2 transition-all duration-200 ${
                    answers[question.id] === option.points
                      ? "border-purple-primary bg-purple-primary/10 text-foreground"
                      : "border-purple-primary/20 bg-background hover:border-purple-primary/50 text-text-secondary hover:text-foreground"
                  }`}
                >
                  <div className="flex items-center">
                    <div
                      className={`w-5 h-5 rounded-full border-2 mr-4 flex items-center justify-center flex-shrink-0 ${
                        answers[question.id] === option.points
                          ? "border-purple-primary bg-purple-primary"
                          : "border-purple-primary/40"
                      }`}
                    >
                      {answers[question.id] === option.points && (
                        <div className="w-2 h-2 bg-white rounded-full" />
                      )}
                    </div>
                    <span className="text-lg">{option.text}</span>
                  </div>
                </button>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation Buttons */}
        <div className="mt-8 flex justify-between gap-4">
          <Button
            onClick={handlePrevious}
            variant="secondary"
            className={`${currentQuestion === 0 ? "invisible" : ""}`}
          >
            <ChevronLeft className="w-5 h-5 mr-2" />
            Previous
          </Button>

          <Button onClick={handleNext} variant="primary">
            {isLastQuestion ? "Finish" : "Next"}
            {!isLastQuestion && <ChevronRight className="w-5 h-5 ml-2" />}
          </Button>
        </div>
      </div>
    </div>
  );
}
