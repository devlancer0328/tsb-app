"use client";

import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import ServiceImg from "@/app/assets/img/service.jpg";

interface FeatureSectionProps {
  features: string[];
}

export function FeatureSection({ features }: FeatureSectionProps) {
  return (
    <section className="w-full">
      <div className="container px-4 md:px-6">
        <motion.div
          className="grid gap-6 lg:grid-cols-2 lg:gap-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col justify-center space-y-4 gap-6">
            <div className="flex flex-col justify-center gap-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                Comprehensive Election Services
              </h2>
              <p className="text-gray-500 md:text-lg">
                We provide services to Associations of all sizes. No association
                is too small for us.
              </p>
            </div>
            <ul className="grid gap-3">
              {features.map((feature, i) => (
                <motion.li
                  key={feature}
                  className="flex items-center gap-2"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: i * 0.1 }}
                  viewport={{ once: true }}
                >
                  <CheckCircle className="h-5 w-5 text-primary" />
                  {feature}
                </motion.li>
              ))}
            </ul>
          </div>
          <div className="flex items-center justify-center">
            <motion.div
              className="relative w-full h-[400px] bg-gradient-to-r from-cyan-500/20 to-cyan-300/10 rounded-2xl"
              style={{
                backgroundImage: `linear-gradient(to bottom, rgba(25, 182, 218, 0.4), rgba(25, 182, 218, 0.6)), url(${ServiceImg.src})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
