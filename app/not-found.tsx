import Link from "next/link";
import Button from "@/components/Button";
import { SearchX, Home, Mail } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4">
      <div className="max-w-2xl mx-auto text-center">
        {/* 404 Icon */}
        <div className="flex justify-center mb-8">
          <div className="relative">
            <div className="w-32 h-32 bg-purple-primary/20 rounded-full flex items-center justify-center">
              <SearchX className="w-16 h-16 text-purple-primary" />
            </div>
            <div className="absolute -top-2 -right-2 w-12 h-12 bg-purple-accent/30 rounded-full blur-xl" />
            <div className="absolute -bottom-2 -left-2 w-12 h-12 bg-purple-primary/30 rounded-full blur-xl" />
          </div>
        </div>

        {/* Error Message */}
        <h1 className="text-6xl md:text-8xl font-bold text-foreground mb-4">
          404
        </h1>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
          Page Not Found
        </h2>
        <p className="text-xl text-text-secondary mb-8 max-w-md mx-auto">
          Looks like this page doesn't exist. Perhaps it's been moved, or you've stumbled upon a broken link.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button href="/" variant="primary" className="min-w-[200px]">
            <Home className="w-5 h-5 mr-2" />
            Back to Home
          </Button>
          <Button href="/contact" variant="outline" className="min-w-[200px]">
            <Mail className="w-5 h-5 mr-2" />
            Contact Us
          </Button>
        </div>

        {/* Helpful Links */}
        <div className="border-t border-purple-primary/20 pt-8">
          <p className="text-text-secondary mb-4">Looking for something specific?</p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <Link
              href="/services"
              className="text-purple-primary hover:text-purple-accent transition-colors underline"
            >
              Our Services
            </Link>
            <span className="text-text-secondary">•</span>
            <Link
              href="/about"
              className="text-purple-primary hover:text-purple-accent transition-colors underline"
            >
              About Us
            </Link>
            <span className="text-text-secondary">•</span>
            <Link
              href="/assessment"
              className="text-purple-primary hover:text-purple-accent transition-colors underline"
            >
              AI Assessment
            </Link>
            <span className="text-text-secondary">•</span>
            <Link
              href="/contact"
              className="text-purple-primary hover:text-purple-accent transition-colors underline"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
