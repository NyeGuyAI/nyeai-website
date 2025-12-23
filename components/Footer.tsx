"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Mail, Loader2, CheckCircle } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setStatus("success");
        setEmail("");
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        setStatus("error");
        setTimeout(() => setStatus("idle"), 5000);
      }
    } catch (error) {
      console.error("Newsletter signup error:", error);
      setStatus("error");
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  return (
    <footer className="bg-dark-gray border-t border-purple-primary/20 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <Image
                src="/logo.webp"
                alt="NyeAI Logo"
                width={40}
                height={40}
                className="rounded-md"
              />
              <span className="text-xl font-bold text-foreground">NyeAI</span>
            </Link>
            <p className="text-text-secondary text-sm max-w-md">
              Empowering small businesses with practical AI solutions, expert training,
              and automation services. Transform your business today.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-foreground font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-text-secondary hover:text-purple-primary transition-colors duration-200 text-sm"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-text-secondary hover:text-purple-primary transition-colors duration-200 text-sm"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-text-secondary hover:text-purple-primary transition-colors duration-200 text-sm"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-text-secondary hover:text-purple-primary transition-colors duration-200 text-sm"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-foreground font-semibold mb-4">Get Started</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/assessment"
                  className="text-text-secondary hover:text-purple-primary transition-colors duration-200 text-sm"
                >
                  AI Readiness Assessment
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-text-secondary hover:text-purple-primary transition-colors duration-200 text-sm"
                >
                  Book Consultation
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="mt-12 pt-8 border-t border-purple-primary/10">
          <div className="max-w-md mx-auto text-center">
            <div className="flex justify-center mb-3">
              <div className="w-12 h-12 bg-purple-primary/20 rounded-full flex items-center justify-center">
                <Mail className="w-6 h-6 text-purple-primary" />
              </div>
            </div>
            <h3 className="text-foreground font-semibold text-lg mb-2">Stay Updated on AI</h3>
            <p className="text-text-secondary text-sm mb-4">
              Get practical AI tips, tools, and insights delivered to your inbox.
            </p>

            <form onSubmit={handleNewsletterSubmit} className="flex gap-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                disabled={status === "loading" || status === "success"}
                className="flex-1 px-4 py-2 bg-background border border-purple-primary/20 rounded-lg text-foreground placeholder:text-text-secondary focus:outline-none focus:border-purple-primary transition-colors disabled:opacity-50"
              />
              <button
                type="submit"
                disabled={status === "loading" || status === "success"}
                className="px-6 py-2 bg-gradient-to-r from-purple-primary to-purple-accent text-white rounded-lg font-semibold hover:opacity-90 transition-opacity duration-200 disabled:opacity-50 flex items-center gap-2 min-w-[120px] justify-center"
              >
                {status === "loading" && <Loader2 className="w-4 h-4 animate-spin" />}
                {status === "success" && <CheckCircle className="w-4 h-4" />}
                {status === "loading" ? "Sending..." : status === "success" ? "Subscribed!" : "Subscribe"}
              </button>
            </form>

            {status === "error" && (
              <p className="text-red-400 text-sm mt-2">
                Failed to subscribe. Please try again.
              </p>
            )}
            {status === "success" && (
              <p className="text-green-400 text-sm mt-2">
                Thanks for subscribing! Check your inbox soon.
              </p>
            )}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-purple-primary/10">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-text-secondary text-sm">
              © {currentYear} NyeAI. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link
                href="/privacy"
                className="text-text-secondary hover:text-purple-primary transition-colors duration-200 text-sm"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-text-secondary hover:text-purple-primary transition-colors duration-200 text-sm"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
