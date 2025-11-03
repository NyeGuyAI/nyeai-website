"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: string;
  index?: number;
}

export default function ServiceCard({
  title,
  description,
  icon,
  index = 0,
}: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      className="bg-dark-gray border border-purple-primary/20 rounded-lg p-8 hover:border-purple-primary/50 transition-all duration-300 group"
    >
      {/* Icon */}
      <div className="mb-6 relative">
        <div className="absolute inset-0 bg-purple-primary/20 rounded-lg blur-lg group-hover:blur-xl transition-all duration-300" />
        <div className="relative w-20 h-20 mx-auto">
          <Image
            src={icon}
            alt={title}
            fill
            className="object-contain"
          />
        </div>
      </div>

      {/* Content */}
      <h3 className="text-xl font-bold text-foreground mb-3 text-center">
        {title}
      </h3>
      <p className="text-text-secondary text-center leading-relaxed">
        {description}
      </p>
    </motion.div>
  );
}
