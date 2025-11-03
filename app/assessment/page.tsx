"use client";

import Button from "@/components/Button";
import PurpleRayBackground from "@/components/PurpleRayBackground";
import { motion } from "framer-motion";
import { CheckCircle2, Clock, Target } from "lucide-react";

export default function AssessmentPage() {
  const benefits = [
    "Discover your business's AI readiness level",
    "Get personalized recommendations for your specific needs",
    "Identify quick wins and automation opportunities",
    "Learn which AI tools match your business goals",
    "Receive a detailed breakdown by category",
  ];

  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <PurpleRayBackground />

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              Discover Your{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-primary to-purple-accent">
                AI Potential
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-text-secondary max-w-3xl mx-auto">
              Take our free 3-minute assessment and get personalized insights on how AI can
              transform your business.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mt-8">
              <div className="flex items-center gap-3 text-text-secondary">
                <Clock className="w-6 h-6 text-purple-primary" />
                <span>3 minutes</span>
              </div>
              <div className="flex items-center gap-3 text-text-secondary">
                <Target className="w-6 h-6 text-purple-primary" />
                <span>15 questions</span>
              </div>
              <div className="flex items-center gap-3 text-text-secondary">
                <CheckCircle2 className="w-6 h-6 text-purple-primary" />
                <span>Instant results</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* What You'll Learn Section */}
      <section className="py-20 bg-dark-gray/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-foreground mb-4">What You'll Learn</h2>
            <p className="text-lg text-text-secondary">
              Our assessment evaluates your business across 5 key categories:
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {[
              {
                title: "AI Tool Awareness",
                description: "Your current knowledge and usage of AI tools",
              },
              {
                title: "Automation Potential",
                description: "Opportunities to save time with AI automation",
              },
              {
                title: "Data & Technology",
                description: "Your technical readiness for AI implementation",
              },
              {
                title: "Business Goals",
                description: "How AI aligns with your growth objectives",
              },
            ].map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-dark-gray border border-purple-primary/20 rounded-lg p-6"
              >
                <h3 className="text-xl font-bold text-foreground mb-2">{category.title}</h3>
                <p className="text-text-secondary">{category.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-dark-gray border border-purple-primary/20 rounded-lg p-8"
          >
            <h3 className="text-2xl font-bold text-foreground mb-6 text-center">
              You'll Receive:
            </h3>
            <ul className="space-y-4">
              {benefits.map((benefit, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle2 className="w-6 h-6 text-purple-primary flex-shrink-0 mt-0.5" />
                  <span className="text-text-secondary text-lg">{benefit}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <PurpleRayBackground />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-text-secondary mb-8">
              No credit card required. No sales pressure. Just valuable insights for your business.
            </p>
            <Button href="/assessment/quiz" variant="primary" className="text-lg px-10 py-4">
              Start Assessment Now
            </Button>
            <p className="text-sm text-text-secondary mt-4">
              Takes less than 3 minutes • Completely free • Instant results
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
