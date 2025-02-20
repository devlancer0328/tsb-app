"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  CheckCircle,
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
import { Badge } from "@/components/ui/badge";

import { motion, AnimatePresence } from "framer-motion";

const AnimatedAccordionContent = motion(AccordionContent);

export default function Home() {
  const features = [
    "Annual Meeting Elections",
    "Amendments to Governing Documents",
    "Special Assessment Approval",
    "Recall of the Board",
    "Ballot Counting Services",
  ];
  const faqs = [
    {
      question: "Why is a third party Inspector Of Elections required?",
      answer: (
        <>
          As provided for in{" "}
          <Link
            href="https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=CIV&sectionNum=5110"
            className="text-primary hover:underline inline-flex items-center gap-1"
            target="_blank"
          >
            Civil Code § 5110(b)
          </Link>
          , inspectors of election must be independent third parties and are
          required for certain voting matters.
        </>
      ),
    },
    {
      question: "Who can act as the IOE for our Association?",
      answer:
        "The following can all act as IOEs: A volunteer poll worker with the county registrar of voters, a licensee of the California Board of Accountancy (a CPA)a notary public, and a member of the association (who is not a member of the board of directors or a candidate for the board of directors or related to a member of the board of directors or a candidate for the board of director). The Inspector of Election will be required to perform duties per civil code.",
    },
    {
      question: "Can a Board Member or their Spouse act as and Inspector?",
      answer:
        "Unfortunately no. Per civil code: Associations may not appoint or use inspectors who are: members of the board of directors, a candidate for the board of directors, related to a member of the board of directors, or anyone under contract with the association.",
    },
    {
      question: "What does the IOE do?",
      answer: (
        <>
          Inspectors of election must perform their duties impartially, in good
          faith, to the best of their abilities, and as expeditiously as
          practical. (
          <Link
            href="https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=CIV&sectionNum=5110"
            className="text-primary hover:underline inline-flex items-center gap-1"
            target="_blank"
          >
            Civ. Code § 5110(d)
          </Link>
          ) Inspectors must perform a long list of duties as outlined in civil
          code.
        </>
      ),
    },
    {
      question:
        "Can the Inspector answer my questions regarding the voting procedures?",
      answer: (
        <>
          Yes, the IOE communicates with members, the Board of Directors and
          Management and can answer questions regarding the voting procedures
        </>
      ),
    },
    {
      question: "What if I lost my ballot? Can I request a new one?",
      answer: "Yes, you can contact our office to request a new ballot.",
    },
    {
      question: "How do I know if I qualify to be on the Ballot?",
      answer:
        "You can contact our office and we can provide the qualifications per your Association’s election rules, or you can visit your HOA's webpage in our website to access the elections rules and review them. The election rules provide the qualifications that need to be met to be on the Ballot.",
    },
    {
      question: "Will my Candidate Application be published with the ballot?",
      answer:
        "That is up to you. You have the choice to have us include your application for review with the ballot packet.",
    },
    {
      question:
        "I want to know how many ballots have been received, can the IOE provide this to me?",
      answer: (
        <>
          Providing members with an{" "}
          <Link
            href="https://www.davis-stirling.com/HOME/Early-Ballot-Voter-Count"
            className="text-primary hover:underline inline-flex items-center gap-1"
            target="_blank"
          >
            <u>early ballot count</u>
          </Link>{" "}
          is not one of the inspector's duties.
        </>
      ),
    },
    {
      question: "Why do we have two envelopes for the ballots?",
      answer:
        "Homeowners Association voting requires a secret ballot process using double envelopes. This ensures that the voter's choices are confidential and in doing so, the voter cannot be harassed or victimized based upon the way they voted. Secret ballots must be used in: Election of Directors/Removal (Recall) of Directors, Voting regarding assessments, Amending governing documents, Granting the exclusive right to use Common Area, Anything legally requiring a vote by the governing documents",
    },
  ];
  const highlights = [
    {
      icon: Building2,
      title: "Family Owned",
      description:
        "Founded in 2019, we're a proud family-owned and operated business.",
    },
    {
      icon: Users,
      title: "Experienced Team",
      description: "Over 20 years of collective experience in HOA Management.",
    },
    {
      icon: MapPin,
      title: "Local Expertise",
      description:
        "Serving San Diego County and surrounding areas from our Alpine location.",
    },
  ];

  const partnerships = [
    {
      icon: Award,
      title: "Industry Partners",
      description: "Members of Community Associations Institute (CAI)",
    },
    {
      icon: HandshakeIcon,
      title: "Professional Network",
      description: "California Association of Community Managers (CACM) member",
    },
    {
      icon: Calendar,
      title: "Always Current",
      description: "Regular attendance at CAI and CACM events",
    },
  ];
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
              {highlights.map((item, index) => (
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
              {partnerships.map((item, index) => (
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
        <FeatureSection features={features} />
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
                {faqs.map((faq, index) => (
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
