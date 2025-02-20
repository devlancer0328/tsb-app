"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { HIGHLIGHTS, PARTNERSHIPS } from "@/types/index";
export default function About() {
  return (
    <div className="container mx-auto py-12">
      <motion.div
        className="max-w-8xl mx-auto space-y-12 px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* Hero Section */}
        <motion.div
          className="text-center space-y-4  mx-auto max-w-8xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h1 className="text-4xl font-bold">About Us</h1>
          <p className="text-xl text-muted-foreground">
            Bringing effortless election services to homeowner associations
          </p>
        </motion.div>

        {/* Company Highlights */}
        <motion.div
          className="grid gap-6 md:grid-cols-3"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          {HIGHLIGHTS.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + index * 0.1 }}
            >
              <Card>
                <CardContent className="p-6 space-y-2">
                  <item.icon className="h-8 w-8 text-primary" />
                  <h3 className="font-semibold text-lg">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Main Content */}
        <motion.div
          className="space-y-6 text-lg leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <p>
            At The Secret Ballot we guarantee to bring your association
            customized services and provide an{" "}
            <span className="italic">effortless</span> process to all your
            voting needs. Elections will be held fairly and in guidance with the
            laws of the state of California and the governing documents and
            election rules of each individual association.
          </p>

          <p>
            We love everything San Diego, especially the mountains in Alpine. We
            are excited to provide election services to associations across San
            Diego County and surrounding areas.
          </p>

          <div className="my-8">
            <Badge variant="secondary" className="text-base px-4 py-1">
              Our Commitment
            </Badge>
          </div>

          <p>
            The Secret Ballot is committed to always stay informed and up to
            date with the ever changing laws that apply to HOA elections and
            voting guidelines. As such, we are industry partners and members of
            the Community Associations Institute (CAI) and the California
            Association of Community Managers (CACM).
          </p>
        </motion.div>

        {/* Partnerships */}
        <motion.div
          className="grid gap-6 md:grid-cols-3"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          {PARTNERSHIPS.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 + index * 0.1 }}
            >
              <Card>
                <CardContent className="p-6 space-y-2">
                  <item.icon className="h-8 w-8 text-primary" />
                  <h3 className="font-semibold text-lg">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Closing Statement */}
        <motion.div
          className="text-center bg-muted rounded-lg p-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          <p className="text-lg font-medium">
            We look forward to working with our clients, their board members,
            management and members!
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
}
