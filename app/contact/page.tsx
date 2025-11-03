"use client";

import { useState } from "react";
import Button from "@/components/Button";
import PurpleRayBackground from "@/components/PurpleRayBackground";
import { motion } from "framer-motion";
import { Mail, MessageSquare, Send } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: "",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    // TODO: Implement actual form submission (email API, etc.)
    // For now, just simulate a successful submission
    setTimeout(() => {
      setStatus("sent");
      setFormData({ name: "", email: "", company: "", service: "", message: "" });
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden">
        <PurpleRayBackground />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              Let's Talk About Your{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-primary to-purple-accent">
                AI Future
              </span>
            </h1>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto">
              Ready to transform your business with AI? Get in touch and we'll show you what's possible.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-6">Get Started Today</h2>
                <p className="text-text-secondary text-lg mb-6">
                  Fill out the form and we'll get back to you within 24 hours. Or, take our free
                  AI Readiness Assessment for instant, personalized recommendations.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-purple-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-purple-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-1">Email Us</h3>
                    <p className="text-text-secondary">info@nyeai.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-purple-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <MessageSquare className="w-6 h-6 text-purple-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-1">Quick Assessment</h3>
                    <p className="text-text-secondary">
                      Not ready to reach out? Take our 3-minute assessment for personalized insights.
                    </p>
                    <Button href="/assessment" variant="outline" className="mt-3">
                      Take Assessment
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <form onSubmit={handleSubmit} className="space-y-6 bg-dark-gray border border-purple-primary/20 rounded-lg p-8">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-background border border-purple-primary/20 rounded-lg text-foreground focus:outline-none focus:border-purple-primary transition-colors"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-background border border-purple-primary/20 rounded-lg text-foreground focus:outline-none focus:border-purple-primary transition-colors"
                    placeholder="john@company.com"
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-foreground mb-2">
                    Company Name
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-background border border-purple-primary/20 rounded-lg text-foreground focus:outline-none focus:border-purple-primary transition-colors"
                    placeholder="Your Business Name"
                  />
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-foreground mb-2">
                    Service Interested In
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-background border border-purple-primary/20 rounded-lg text-foreground focus:outline-none focus:border-purple-primary transition-colors"
                  >
                    <option value="">Select a service...</option>
                    <option value="training">AI Tool Training & Education</option>
                    <option value="automation">Process Automation & Integration</option>
                    <option value="data">Data Strategy & Business Intelligence</option>
                    <option value="consultation">Free Consultation</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-background border border-purple-primary/20 rounded-lg text-foreground focus:outline-none focus:border-purple-primary transition-colors resize-none"
                    placeholder="Tell us about your business and what you'd like to achieve with AI..."
                  />
                </div>

                <Button type="submit" variant="primary" className="w-full flex items-center justify-center gap-2">
                  {status === "sending" ? (
                    "Sending..."
                  ) : status === "sent" ? (
                    "Message Sent!"
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Send Message
                    </>
                  )}
                </Button>

                {status === "sent" && (
                  <p className="text-green-400 text-center">
                    Thank you! We'll get back to you within 24 hours.
                  </p>
                )}
                {status === "error" && (
                  <p className="text-red-400 text-center">
                    Something went wrong. Please try again or email us directly.
                  </p>
                )}
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-dark-gray/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-foreground mb-4">Frequently Asked Questions</h2>
          </motion.div>

          <div className="space-y-6">
            {[
              {
                q: "How much do your services cost?",
                a: "Pricing varies based on your specific needs. We offer flexible packages starting from affordable hourly training sessions to comprehensive implementation projects. Contact us for a custom quote.",
              },
              {
                q: "How long does implementation take?",
                a: "Most small business implementations take 2-6 weeks, depending on complexity. Training sessions can start as soon as next week.",
              },
              {
                q: "Do I need technical skills?",
                a: "Not at all! We specialize in making AI accessible for non-technical business owners. Our training is hands-on and designed for beginners.",
              },
              {
                q: "What if I've never used AI before?",
                a: "Perfect! That's exactly who we help. We start from the basics and build up your skills and confidence step by step.",
              },
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-dark-gray border border-purple-primary/20 rounded-lg p-6"
              >
                <h3 className="text-lg font-semibold text-foreground mb-2">{faq.q}</h3>
                <p className="text-text-secondary">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
