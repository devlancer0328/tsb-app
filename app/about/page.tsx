"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { AnimatedElement } from "@/components/ui/animated-element";
import { usePageLoading } from "@/hooks/use-page-loading";

export default function About() {
  usePageLoading();
  return (
    <div className="container py-12">
      <div className="max-w-4xl mx-auto space-y-12">
        {/* Hero Section */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold">About Us</h1>
          <p className="text-xl text-muted-foreground">
            Professional Election Services for Homeowner Associations
          </p>
        </div>

        {/* Company Highlights */}
        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              title: "Experience",
              description: "Years of expertise in HOA election management",
            },
            {
              title: "Integrity",
              description: "Committed to fair and transparent elections",
            },
            {
              title: "Service",
              description: "Dedicated support throughout the election process",
            },
          ].map((item, index) => (
            <AnimatedElement key={item.title} delay={0.1 * index}>
              <Card>
                <CardContent className="p-6 space-y-2">
                  <h3 className="font-semibold text-lg">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            </AnimatedElement>
          ))}
        </div>

        {/* Main Content */}
        <motion.div
          className="space-y-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <p className="text-lg">
            The Secret Ballot specializes in providing comprehensive election
            services for homeowner associations. Our mission is to ensure fair,
            transparent, and efficient election processes.
          </p>
          <p className="text-lg">
            With years of experience in the industry, we understand the unique
            challenges and requirements of HOA elections. Our team is dedicated
            to delivering professional service while maintaining the highest
            standards of integrity.
          </p>
        </motion.div>

        {/* Closing Statement */}
        <motion.div
          className="text-center bg-muted rounded-lg p-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <p className="text-lg font-medium">
            We look forward to working with our clients, their board members,
            management and members!
          </p>
        </motion.div>
      </div>
    </div>
  );
}
