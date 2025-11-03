import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark-gray border-t border-purple-primary/20 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <Image
                src="/logo.png"
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

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-purple-primary/10 text-center">
          <p className="text-text-secondary text-sm">
            © {currentYear} NyeAI. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
