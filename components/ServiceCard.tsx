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
      whileHover={{ y: -8, scale: 1.02 }}
      className="bg-dark-gray/80 backdrop-blur-sm border border-purple-primary/30 rounded-lg p-8 hover:border-purple-primary hover:shadow-[0_0_40px_rgba(168,85,247,0.4)] transition-all duration-300 group"
    >
      {/* Icon */}
      <div className="mb-6 relative">
        <div className="absolute inset-0 bg-purple-primary/30 rounded-full blur-2xl group-hover:blur-3xl group-hover:bg-purple-primary/50 transition-all duration-300" />
        <div className="relative w-24 h-24 mx-auto group-hover:scale-110 transition-transform duration-300">
          <Image
            src={icon}
            alt={title}
            fill
            className="object-contain drop-shadow-[0_0_15px_rgba(168,85,247,0.6)]"
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
