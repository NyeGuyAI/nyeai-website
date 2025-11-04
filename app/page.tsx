"use client";

import Image from "next/image";
import Button from "@/components/Button";
import ServiceCard from "@/components/ServiceCard";
import PurpleRayBackground from "@/components/PurpleRayBackground";
import { motion } from "framer-motion";
import { Sparkles, Zap, TrendingUp } from "lucide-react";

export default function Home() {
  const services = [
    {
      title: "AI Tool Training & Education",
      description:
        "Learn ChatGPT, Claude, Gemini, and industry-specific AI tools. Custom training for your team with ongoing support and best practices.",
      icon: "/AutomationIcon_NyeAI.jpeg",
    },
    {
      title: "Process Automation & Integration",
      description:
        "Identify automation opportunities, implement AI workflows, and connect your tools to streamline operations and save hours every week.",
      icon: "/SecurityIcon_NyeAI.jpeg",
    },
    {
      title: "Data Strategy & Business Intelligence",
      description:
        "Organize and centralize your data, gain AI-powered insights, and make data-driven decisions that grow your business.",
      icon: "/BusinessGrowthIcon_NyeAI.jpeg",
    },
  ];

  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <PurpleRayBackground />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Logo */}
            <div className="flex justify-center mb-8">
              <div className="relative bg-background/90 backdrop-blur-sm rounded-2xl p-4">
                <Image
                  src="/logo.png"
                  alt="NyeAI Logo"
                  width={220}
                  height={220}
                  className="drop-shadow-[0_0_50px_rgba(168,85,247,0.8)] drop-shadow-[0_0_100px_rgba(217,70,239,0.6)]"
                  priority
                />
              </div>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6" style={{
              textShadow: '0 0 40px rgba(0,0,0,0.8), 0 2px 10px rgba(0,0,0,0.9), 0 0 20px rgba(168,85,247,0.5)'
            }}>
              <span className="text-foreground">Transform Your Business</span>
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-primary to-purple-accent">
                with AI
              </span>
            </h1>

            <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-8 text-white" style={{
              textShadow: '0 2px 20px rgba(0,0,0,0.9), 0 0 30px rgba(0,0,0,0.7)'
            }}>
              Expert AI training, automation, and implementation services for small and local businesses.
              Practical solutions that save time and drive growth.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button href="/assessment" variant="primary" className="text-lg px-8 py-4">
                Take Free AI Assessment
              </Button>
              <Button href="/services" variant="outline" className="text-lg px-8 py-4">
                Discover Our Services
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Preview Section */}
      <section className="py-20 bg-dark-gray/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Our Expertise in AI Solutions
            </h2>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto">
              We help small businesses harness the power of AI through training, automation, and strategic implementation.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard
                key={service.title}
                title={service.title}
                description={service.description}
                icon={service.icon}
                index={index}
              />
            ))}
          </div>

          <div className="text-center mt-12">
            <Button href="/services" variant="secondary">
              View All Services
            </Button>
          </div>
        </div>
      </section>

      {/* Why AI Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background to-dark-gray/30" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Why AI for Small Business?
            </h2>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto">
              AI isn't just for big corporations. Small businesses can benefit even more from the right AI tools and strategies.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0 }}
              viewport={{ once: true }}
              className="bg-dark-gray border border-purple-primary/20 rounded-lg p-8 text-center"
            >
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-purple-primary/20 rounded-full flex items-center justify-center">
                  <Zap className="w-8 h-8 text-purple-primary" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-3">Save Time</h3>
              <p className="text-text-secondary">
                Automate repetitive tasks and free up 10-30 hours per week for strategic work that grows your business.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-dark-gray border border-purple-primary/20 rounded-lg p-8 text-center"
            >
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-purple-primary/20 rounded-full flex items-center justify-center">
                  <TrendingUp className="w-8 h-8 text-purple-primary" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-3">Reduce Costs</h3>
              <p className="text-text-secondary">
                Cut operational costs by 20-40% with smart automation while maintaining or improving quality.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-dark-gray border border-purple-primary/20 rounded-lg p-8 text-center"
            >
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-purple-primary/20 rounded-full flex items-center justify-center">
                  <Sparkles className="w-8 h-8 text-purple-primary" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-3">Stay Competitive</h3>
              <p className="text-text-secondary">
                Level the playing field against larger competitors with AI tools and strategies tailored to your needs.
              </p>
            </motion.div>
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
              Ready to Discover Your AI Potential?
            </h2>
            <p className="text-xl text-text-secondary mb-8">
              Take our free 3-minute AI Readiness Assessment and get personalized recommendations
              for transforming your business with AI.
            </p>
            <Button href="/assessment" variant="primary" className="text-lg px-8 py-4">
              Start Assessment Now
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
