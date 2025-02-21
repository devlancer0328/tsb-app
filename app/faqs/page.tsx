"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card } from "@/components/ui/card";
import { AnimatedElement } from "@/components/ui/animated-element";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "Why is a third party Inspector Of Elections required?",
    answer:
      "As provided for in Civil Code § 5110(b), inspectors of election must be independent third parties and are required for certain voting matters. This ensures impartiality and compliance with legal requirements in the election process.",
  },
  {
    question: "Who can act as the IOE for our Association?",
    answer:
      "The following can act as IOEs: A volunteer poll worker with the county registrar of voters, a licensee of the California Board of Accountancy (a CPA), a notary public, and a member of the association (who is not a member of the board of directors or a candidate for the board of directors or related to a member of the board of directors or a candidate for the board of director).",
  },
  {
    question: "Can a Board Member or their Spouse act as an Inspector?",
    answer:
      "No. Per civil code: Associations may not appoint or use inspectors who are: members of the board of directors, a candidate for the board of directors, related to a member of the board of directors, or anyone under contract with the association.",
  },
  {
    question: "What does the IOE do?",
    answer:
      "Inspectors of election must perform their duties impartially, in good faith, to the best of their abilities, and as expeditiously as practical. They must perform various duties including verifying voter eligibility, receiving and counting ballots, determining election results, and performing other duties as required by law.",
  },
  {
    question: "How long does the election process take?",
    answer:
      "The typical election process takes 30-45 days from start to finish. This includes preparation of materials, distribution of ballots, and the counting process. However, timing can vary based on specific association requirements and election complexity.",
  },
];

const AnimatedAccordionContent = motion(AccordionContent);

export default function FAQsPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto">
        <AnimatedElement>
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">
              Frequently Asked Questions
            </h1>
            <p className="text-lg text-muted-foreground">
              Find answers to common questions about our election services
            </p>
          </div>
        </AnimatedElement>

        <Card className="p-6">
          <Accordion type="single" collapsible className="space-y-4">
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
        </Card>
      </div>
    </div>
  );
}
