"use client";

import Button from "@/components/Button";
import PurpleRayBackground from "@/components/PurpleRayBackground";
import { motion } from "framer-motion";
import { Target, Heart, Users, Lightbulb } from "lucide-react";

export default function AboutPage() {
  const values = [
    {
      icon: <Target className="w-8 h-8" />,
      title: "Practical Solutions",
      description: "We focus on AI implementations that deliver measurable results, not hype or buzzwords.",
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Education First",
      description: "We believe in empowering businesses through training and knowledge, not dependency.",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Small Business Focus",
      description: "We specialize in solutions tailored for small businesses, not one-size-fits-all enterprise approaches.",
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Innovation & Accessibility",
      description: "Making cutting-edge AI technology accessible and affordable for local businesses.",
    },
  ];

  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <PurpleRayBackground />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center space-y-6"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              Our{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-primary to-purple-accent">
                Vision
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-text-secondary leading-relaxed">
              To democratize AI for small and local businesses, making enterprise-grade technology
              accessible, practical, and profitable for everyone.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-dark-gray/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-foreground mb-6">Why NyeAI Exists</h2>
              <div className="space-y-4 text-text-secondary text-lg leading-relaxed">
                <p>
                  Small businesses are the backbone of our economy, yet they're often left behind when it comes to
                  technological innovation. While large corporations invest millions in AI, small business owners
                  struggle to understand where to start.
                </p>
                <p>
                  That's where we come in. NyeAI was founded with a simple mission: to bridge the gap between
                  cutting-edge AI technology and practical business applications for small and local businesses.
                </p>
                <p>
                  We believe every business owner deserves access to the same powerful tools that Fortune 500
                  companies use—without the complexity, cost, or corporate jargon.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-dark-gray border border-purple-primary/20 rounded-lg p-8"
            >
              <h3 className="text-2xl font-bold text-foreground mb-6">What We Believe</h3>
              <ul className="space-y-4">
                {[
                  "AI should save you time, not create more work",
                  "Training is more valuable than software alone",
                  "Small businesses can compete with anyone using the right tools",
                  "Technology should serve your business, not the other way around",
                  "Practical results matter more than flashy features",
                ].map((belief, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-purple-primary rounded-full mt-2 flex-shrink-0" />
                    <span className="text-text-secondary">{belief}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Our Values</h2>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto">
              These principles guide everything we do at NyeAI.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-dark-gray border border-purple-primary/20 rounded-lg p-6 hover:border-purple-primary/50 transition-colors"
              >
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 bg-purple-primary/20 rounded-full flex items-center justify-center text-purple-primary">
                    {value.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3 text-center">{value.title}</h3>
                <p className="text-text-secondary text-center text-sm">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-dark-gray/50 relative overflow-hidden">
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
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-text-secondary mb-8">
              Let's work together to unlock your business's AI potential.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/assessment" variant="primary" className="text-lg px-8 py-4">
                Take Free Assessment
              </Button>
              <Button href="/contact" variant="outline" className="text-lg px-8 py-4">
                Get in Touch
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
