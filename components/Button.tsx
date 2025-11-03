import Link from "next/link";
import { ReactNode } from "react";

interface ButtonProps {
  href?: string;
  onClick?: () => void;
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline";
  className?: string;
  type?: "button" | "submit" | "reset";
}

export default function Button({
  href,
  onClick,
  children,
  variant = "primary",
  className = "",
  type = "button",
}: ButtonProps) {
  const baseClasses =
    "px-6 py-3 rounded-lg font-semibold transition-all duration-200 inline-block text-center";

  const variantClasses = {
    primary:
      "bg-gradient-to-r from-purple-primary to-purple-accent text-white hover:opacity-90 shadow-lg shadow-purple-primary/30",
    secondary:
      "bg-dark-gray text-foreground border-2 border-purple-primary hover:bg-purple-primary/10",
    outline:
      "bg-transparent text-purple-primary border-2 border-purple-primary hover:bg-purple-primary hover:text-white",
  };

  const combinedClasses = `${baseClasses} ${variantClasses[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={combinedClasses}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={combinedClasses} type={type}>
      {children}
    </button>
  );
}
