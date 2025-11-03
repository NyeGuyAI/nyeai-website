"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import Button from "@/components/Button";
import { calculateResults, getScoreMessage } from "@/lib/scoring";
import type { AssessmentResult } from "@/lib/scoring";
import { CheckCircle2, Target, TrendingUp, Lightbulb } from "lucide-react";

export default function ResultsPage() {
  const router = useRouter();
  const [results, setResults] = useState<AssessmentResult | null>(null);
  const [email, setEmail] = useState("");

  useEffect(() => {
    // Get results from sessionStorage
    const answersData = sessionStorage.getItem("assessmentAnswers");
    const emailData = sessionStorage.getItem("assessmentEmail");

    if (!answersData || !emailData) {
      // Redirect to assessment if no data found
      router.push("/assessment");
      return;
    }

    const answers = JSON.parse(answersData);
    const calculatedResults = calculateResults(answers);
    setResults(calculatedResults);
    setEmail(emailData);
  }, [router]);

  if (!results) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-text-secondary">Loading your results...</div>
      </div>
    );
  }

  const getLevelColor = (level: AssessmentResult["level"]) => {
    switch (level) {
      case "Getting Started":
        return "text-yellow-400";
      case "Building Momentum":
        return "text-blue-400";
      case "AI-Ready Leader":
        return "text-green-400";
    }
  };

  const getLevelIcon = (level: AssessmentResult["level"]) => {
    switch (level) {
      case "Getting Started":
        return "🌱";
      case "Building Momentum":
        return "🚀";
      case "AI-Ready Leader":
        return "⭐";
    }
  };

  return (
    <div className="min-h-screen bg-background py-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Your AI Readiness Results
          </h1>
          <p className="text-lg text-text-secondary">
            Results for: <span className="text-purple-primary">{email}</span>
          </p>
        </motion.div>

        {/* Overall Score Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="bg-dark-gray border border-purple-primary/20 rounded-lg p-8 md:p-12 mb-8 text-center"
        >
          <div className="text-6xl mb-4">{getLevelIcon(results.level)}</div>
          <h2 className={`text-3xl md:text-4xl font-bold mb-2 ${getLevelColor(results.level)}`}>
            {results.level}
          </h2>
          <p className="text-text-secondary text-lg mb-6">{getScoreMessage(results.level)}</p>

          {/* Score Circle */}
          <div className="flex justify-center mb-6">
            <div className="relative w-40 h-40">
              <svg className="w-full h-full transform -rotate-90">
                {/* Background circle */}
                <circle
                  cx="80"
                  cy="80"
                  r="70"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="12"
                  className="text-dark-gray opacity-30"
                />
                {/* Progress circle */}
                <motion.circle
                  cx="80"
                  cy="80"
                  r="70"
                  fill="none"
                  stroke="url(#gradient)"
                  strokeWidth="12"
                  strokeLinecap="round"
                  strokeDasharray={`${2 * Math.PI * 70}`}
                  initial={{ strokeDashoffset: 2 * Math.PI * 70 }}
                  animate={{
                    strokeDashoffset: 2 * Math.PI * 70 * (1 - results.percentage / 100),
                  }}
                  transition={{ duration: 1.5, ease: "easeOut" }}
                />
                <defs>
                  <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#a855f7" />
                    <stop offset="100%" stopColor="#d946ef" />
                  </linearGradient>
                </defs>
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-4xl font-bold text-foreground">{results.totalScore}</div>
                  <div className="text-sm text-text-secondary">out of {results.maxScore}</div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-2xl font-semibold text-foreground">
            {results.percentage}% AI Ready
          </div>
        </motion.div>

        {/* Category Breakdown */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-dark-gray border border-purple-primary/20 rounded-lg p-8 mb-8"
        >
          <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
            <Target className="w-6 h-6 text-purple-primary" />
            Category Breakdown
          </h3>

          <div className="space-y-6">
            {results.categoryScores.map((category, index) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
              >
                <div className="flex justify-between items-center mb-2">
                  <span className="text-foreground font-semibold">{category.category}</span>
                  <span className="text-text-secondary">
                    {category.score}/{category.maxScore}
                  </span>
                </div>
                <div className="w-full h-3 bg-background rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-purple-primary to-purple-accent"
                    initial={{ width: 0 }}
                    animate={{ width: `${category.percentage}%` }}
                    transition={{ duration: 1, delay: 0.5 + index * 0.1, ease: "easeOut" }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Recommendations */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-dark-gray border border-purple-primary/20 rounded-lg p-8 mb-8"
        >
          <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
            <Lightbulb className="w-6 h-6 text-purple-primary" />
            Personalized Recommendations
          </h3>

          <ul className="space-y-4">
            {results.recommendations.map((recommendation, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
                className="flex items-start gap-3"
              >
                <CheckCircle2 className="w-6 h-6 text-purple-primary flex-shrink-0 mt-0.5" />
                <span className="text-text-secondary text-lg">{recommendation}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* Recommended Service */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="bg-gradient-to-r from-purple-primary/20 to-purple-accent/20 border border-purple-primary/30 rounded-lg p-8 text-center mb-8"
        >
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 bg-purple-primary/30 rounded-full flex items-center justify-center">
              <TrendingUp className="w-8 h-8 text-purple-primary" />
            </div>
          </div>
          <h3 className="text-2xl font-bold text-foreground mb-2">Recommended Next Step</h3>
          <p className="text-xl text-purple-primary font-semibold mb-4">{results.recommendedService}</p>
          <p className="text-text-secondary mb-6">
            Based on your results, this service would be the best starting point for your AI journey.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/contact" variant="primary" className="text-lg px-8 py-3">
              Book Free Consultation
            </Button>
            <Button href="/services" variant="outline" className="text-lg px-8 py-3">
              Learn More About Services
            </Button>
          </div>
        </motion.div>

        {/* Retake */}
        <div className="text-center">
          <Button href="/assessment" variant="secondary">
            Retake Assessment
          </Button>
        </div>
      </div>
    </div>
  );
}
