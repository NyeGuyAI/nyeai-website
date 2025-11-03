"use client";

import ServiceCard from "@/components/ServiceCard";
import Button from "@/components/Button";
import PurpleRayBackground from "@/components/PurpleRayBackground";
import { motion } from "framer-motion";
import { GraduationCap, Cog, BarChart3, Clock, DollarSign, Target } from "lucide-react";

export default function ServicesPage() {
  const services = [
    {
      title: "AI Tool Training & Education",
      description:
        "Learn ChatGPT, Claude, Gemini, Midjourney, and industry-specific AI tools. Custom training sessions for your team with ongoing support, best practices, and practical use cases tailored to your business needs.",
      icon: "/AutomationIcon_NyeAI.jpeg",
    },
    {
      title: "Process Automation & Integration",
      description:
        "Identify automation opportunities across your workflows, implement AI-powered processes, and connect your existing tools to streamline operations. Save 10-30 hours per week on repetitive tasks.",
      icon: "/SecurityIcon_NyeAI.jpeg",
    },
    {
      title: "Data Strategy & Business Intelligence",
      description:
        "Organize and centralize your business data, implement AI-powered analytics and reporting, and make data-driven decisions that accelerate growth and improve efficiency.",
      icon: "/BusinessGrowthIcon_NyeAI.jpeg",
    },
  ];

  const benefits = [
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Save Time",
      description: "Automate repetitive tasks and reclaim 10-30 hours per week",
    },
    {
      icon: <DollarSign className="w-8 h-8" />,
      title: "Reduce Costs",
      description: "Cut operational costs by 20-40% with smart automation",
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Stay Competitive",
      description: "Level the playing field with enterprise-grade AI tools",
    },
  ];

  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <PurpleRayBackground />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-foreground">
              Our Expertise in{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-primary to-purple-accent">
                AI Solutions
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-text-secondary max-w-3xl mx-auto">
              Practical AI services designed specifically for small and local businesses.
              Training, automation, and implementation that delivers real results.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-dark-gray/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Why Choose NyeAI?
            </h2>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto">
              We focus on practical, measurable outcomes that make a real difference in your business.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-dark-gray border border-purple-primary/20 rounded-lg p-8 text-center hover:border-purple-primary/50 transition-colors"
              >
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 bg-purple-primary/20 rounded-full flex items-center justify-center text-purple-primary">
                    {benefit.icon}
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-3">{benefit.title}</h3>
                <p className="text-text-secondary">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
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
              Our Process
            </h2>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto">
              A simple, proven approach to AI implementation for small businesses.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "1", title: "Discovery", desc: "Understand your business needs and goals" },
              { step: "2", title: "Strategy", desc: "Design a tailored AI implementation plan" },
              { step: "3", title: "Training", desc: "Hands-on training for you and your team" },
              { step: "4", title: "Implementation", desc: "Deploy solutions and ongoing support" },
            ].map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="bg-dark-gray border border-purple-primary/20 rounded-lg p-6 text-center">
                  <div className="text-5xl font-bold text-purple-primary mb-4">{item.step}</div>
                  <h3 className="text-xl font-bold text-foreground mb-2">{item.title}</h3>
                  <p className="text-text-secondary text-sm">{item.desc}</p>
                </div>
                {index < 3 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-purple-primary/30" />
                )}
              </motion.div>
            ))}
          </div>
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
              Not Sure Where to Start?
            </h2>
            <p className="text-xl text-text-secondary mb-8">
              Take our free AI Readiness Assessment to get personalized recommendations
              for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/assessment" variant="primary" className="text-lg px-8 py-4">
                Take Free Assessment
              </Button>
              <Button href="/contact" variant="outline" className="text-lg px-8 py-4">
                Book Consultation
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
