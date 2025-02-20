"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Users,
  Vote,
  Shield,
  ExternalLink,
  Check,
  Calendar,
  HandshakeIcon,
  Award,
  MapPin,
  Building2,
} from "lucide-react";
import { AnimatedElement } from "@/components/ui/animated-element";
import { FeatureSection } from "@/components/shared/feature-section";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { motion, AnimatePresence } from "framer-motion";

import { FEATURES, HIGHLIGHTS, PARTNERSHIPS, FAQs } from "@/types";

const AnimatedAccordionContent = motion(AccordionContent);

export default function Home() {
  return (
    <>
      <section className="bg-gradient-to-b from-white to-sky-50">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="max-w-4xl mx-auto text-center space-y-12">
            <AnimatedElement>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                Professional Election Services for{" "}
                <span className="text-primary">Homeowner Associations</span>
              </h1>
            </AnimatedElement>
            <AnimatedElement delay={0.2}>
              <p className="text-xl text-muted-foreground">
                We ensure your elections are conducted fairly and efficiently,
                making any election seem effortless.
              </p>
            </AnimatedElement>
            <AnimatedElement delay={0.4}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                  <Link href="/request-proposal">Request Proposal</Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/services">Learn More</Link>
                </Button>
              </div>
            </AnimatedElement>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4">
          <motion.div
            className="space-y-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              className="space-y-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <div className="flex flex-row items-center gap-3 mb-8">
                <hr style={{ border: "3px solid #19b6da", width: "50px" }} />
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                  About Us
                </h2>
                <hr style={{ border: "3px solid #19b6da", width: "50px" }} />
              </div>
              <p className="text-xl text-muted-foreground">
                Bringing effortless election services to homeowner associations
              </p>
            </motion.div>

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
                  <Card className="h-full">
                    <CardContent className="p-6 space-y-2 flex flex-col items-center">
                      <div className="rounded-full bg-primary/10 p-3">
                        <item.icon className="h-8 w-8 text-primary" />
                      </div>
                      <h3 className="font-semibold text-lg">{item.title}</h3>
                      <p className="text-muted-foreground text-center">
                        {item.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>

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
                voting needs. Elections will be held fairly and in guidance with
                the laws of the state of California and the governing documents
                and election rules of each individual association.
              </p>

              <p>
                We love everything San Diego, especially the mountains in
                Alpine. We are excited to provide election services to
                associations across San Diego County and surrounding areas.
              </p>

              <p>
                The Secret Ballot is committed to always stay informed and up to
                date with the ever changing laws that apply to HOA elections and
                voting guidelines. As such, we are industry partners and members
                of the Community Associations Institute (CAI) and the California
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
                  <Card className="h-full">
                    <CardContent className="p-6 space-y-2 flex flex-col items-center">
                      <div className="rounded-full bg-primary/10 p-3">
                        <item.icon className="h-8 w-8 text-primary" />
                      </div>
                      <h3 className="font-semibold text-lg">{item.title}</h3>
                      <p className="text-muted-foreground text-center">
                        {item.description}
                      </p>
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
                We look forward to working with our clients, their board
                members, management and members!
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>
      <div className="container mx-auto px-4">
        <FeatureSection features={FEATURES} />
      </div>
      <section className="py-12">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {[
              {
                icon: Check,
                title: "Full Election Services",
                description:
                  "Complete election management including ballot preparation, counting, and documentation.",
              },
              {
                icon: Users,
                title: "All Association Sizes",
                description:
                  "We work with associations of all sizes, ensuring every election gets the attention it deserves.",
              },
              {
                icon: Vote,
                title: "eVoting Platform",
                description:
                  "Modern electronic voting solutions integrated with traditional methods for maximum flexibility.",
              },
              {
                icon: Shield,
                title: "Secure & Compliant",
                description:
                  "All services comply with civil code requirements and maintain election integrity.",
              },
            ].map((item, index) => (
              <AnimatedElement key={item.title} delay={0.1 * index}>
                <Card>
                  <CardContent className="pt-6 flex flex-col items-center gap-4">
                    <div className="rounded-full bg-primary/10 p-3">
                      <item.icon className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-lg font-bold">{item.title}</h3>
                    <p className="text-muted-foreground text-center">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              </AnimatedElement>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4">
          <AnimatedElement>
            <div className="flex flex-row items-center gap-3 mb-8">
              <hr style={{ border: "3px solid #19b6da", width: "50px" }} />
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                FAQs
              </h2>
              <hr style={{ border: "3px solid #19b6da", width: "50px" }} />
            </div>
          </AnimatedElement>
          <div className="mx-auto">
            <Card className="p-6">
              <Accordion type="single" collapsible className="space-y-4 mb-6">
                {FAQs.map((faq, index) => (
                  <AnimatedElement key={index} delay={0.1 * index}>
                    <AccordionItem value={`item-${index}`}>
                      <AccordionTrigger className="text-left text-lg font-medium">
                        {faq.question}
                      </AccordionTrigger>
                      <AnimatePresence>
                        <AnimatedAccordionContent
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          {faq.answer}
                        </AnimatedAccordionContent>
                      </AnimatePresence>
                    </AccordionItem>
                  </AnimatedElement>
                ))}
              </Accordion>
              <motion.div
                className="py-4 p-6 bg-muted rounded-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                <h3 className="text-lg font-semibold mb-2">
                  Still have questions?
                </h3>
                <p className="text-muted-foreground mb-4">
                  If you couldn't find the answer you were looking for, please
                  feel free to contact us.
                </p>
                <Link
                  href="/contact"
                  className="text-primary hover:underline inline-flex items-center gap-2"
                >
                  Contact Us
                  <ExternalLink className="h-4 w-4" />
                </Link>
              </motion.div>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
}
