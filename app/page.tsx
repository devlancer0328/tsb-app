"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink, CheckCircle, Quote } from "lucide-react";
import { AnimatedElement } from "@/components/ui/animated-element";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { motion, AnimatePresence } from "framer-motion";
import { FEATURES, FAQs, SERVICES, FEEDBACK } from "@/types";
import HomeHerosImg from "@/app/assets/img/home-heros.png";
import HomeHerosImg1 from "@/app/assets/img/home-heros-1.png";
import HomeHerosImg2 from "@/app/assets/img/home-heros-2.png";
import HomeHerosImg3 from "@/app/assets/img/home-heros-3.png";
import HomeHerosImg4 from "@/app/assets/img/home-heros-4.png";
import HomeHerosImg5 from "@/app/assets/img/home-heros-5.png";
import HomeAboutUsImg from "@/app/assets/img/home-aboutus.png";
import BGHomeImg from "@/app/assets/img/bg-home.png";
import { useState, useEffect } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselApi,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { usePageLoading } from "@/hooks/use-page-loading";

const AnimatedAccordionContent = motion(AccordionContent);

export default function Home() {
  usePageLoading();

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [api, setApi] = useState<CarouselApi | undefined>();

  const heroImages = [
    HomeHerosImg1,
    HomeHerosImg2,
    HomeHerosImg3,
    HomeHerosImg4,
    HomeHerosImg5,
  ];

  useEffect(() => {
    if (!api) return;

    api.on("select", () => {
      setCurrentSlide(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <>
      <section className="bg-gradient-to-br from-[#E6F7FF] to-white pt-[50px] md:pt-[120px]">
        <div className="container mx-auto px-4 py-16 md:py-24 md:px-0">
          <div className="mx-auto space-y-12 grid grid-cols-1 md:grid-cols-2 text-center md:text-left">
            <div className="flex flex-col gap-8 mt-4 md:mt-2">
              <AnimatedElement>
                <span className="inline-block text-[#0082AA] bg-[#00B3EA]/10 px-4 py-2 rounded-full text-lg font-bold">
                  Simplifying Elections. Ensuring Trust
                </span>
              </AnimatedElement>
              <AnimatedElement>
                <h1 className="text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
                  Professional{" "}
                  <span className="text-[#00B3EA]">Election Services</span>{" "}
                  <br className="hidden md:block" />
                  for Homeowner Associations
                </h1>
              </AnimatedElement>
              <AnimatedElement delay={0.2}>
                <p className="text-lg text-gray-600">
                  We ensure your elections are conducted fairly and efficiently,
                  making any election seem effortless.
                </p>
              </AnimatedElement>
              <AnimatedElement delay={0.4}>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    size="lg"
                    className="bg-[#00B3EA] hover:bg-[#0082AA] text-white px-8 text-lg md:text-xl font-bold tracking-tighter sm:text-xl rounded-lg h-12 md:h-14"
                    asChild
                  >
                    <Link href="/request-proposal">Get Started</Link>
                  </Button>
                </div>
              </AnimatedElement>
            </div>
            <div className="relative order-first md:order-last">
              <AnimatedElement>
                <div className="relative z-10">
                  <div className="absolute -right-4 -top-4 w-[80%] h-[80%] bg-[#00B3EA] rounded-full"></div>
                  <div className="relative z-20 rounded-[2rem] overflow-hidden">
                    <Image
                      src={HomeHerosImg}
                      alt="Election Services Hero Image"
                      className="w-full"
                      priority
                    />
                  </div>
                </div>
              </AnimatedElement>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4 md:px-0">
          <motion.div
            className="space-y-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex flex-col md:flex-row gap-8 md:gap-4">
              <div className="w-full md:w-auto">
                <Image
                  src={HomeAboutUsImg}
                  alt="About The Secret Ballot"
                  width={500}
                  height={500}
                  className="w-full rounded-lg"
                />
              </div>
              <div className="flex flex-col gap-4 p-4 md:p-6 w-full">
                <AnimatedElement>
                  <span className="inline-block text-[#0082AA] bg-[#00B3EA]/10 px-4 py-2 rounded-full text-lg font-bold">
                    About us "The Secret Ballot"
                  </span>
                </AnimatedElement>
                <AnimatedElement>
                  <p className="text-lg text-gray-600">
                    At The Secret Ballot, we make HOA elections fair,
                    transparent, and hassle-free. From ballot preparation to
                    vote counting, we handle everything with integrity. Whether
                    it's board elections, bylaw changes, or special assessments
                    we've got you covered!
                  </p>
                </AnimatedElement>
                <ul className="grid gap-3">
                  {FEATURES.map((feature, i) => (
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
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto text-center px-4 md:px-0">
          <div className="flex flex-col gap-4">
            <span className="text-center text-2xl md:text-5xl font-bold">
              Our <span className="text-[#00B3EA]">Trusted</span> Voting{" "}
              <span className="text-[#00B3EA]">Solutions</span> We offer
            </span>
            <span className="text-base md:text-lg text-gray-600">
              From ballot preparation to vote counting, we ensure a seamless and
              transparent election process <br className="hidden md:block" />
              Our expert services guarantee fairness, security, and compliance
              for every vote
            </span>
          </div>
          <div className="bg-[#00B3EA]/10 rounded-lg p-4 mt-4 flex flex-col md:flex-row md:gap-40 h-auto md:h-[500px]">
            <div className="flex flex-col gap-4 flex-1 justify-center">
              {SERVICES.map((service, index) => (
                <div
                  key={index}
                  className="flex flex-col gap-2 text-left cursor-pointer transition-all duration-200 hover:bg-[#00B3EA]/5 p-4 rounded-lg"
                  onClick={() => setSelectedIndex(index)}
                >
                  <span
                    className={`text-lg md:text-xl font-bold transition-colors ${
                      selectedIndex === index
                        ? "text-[#0073A0]"
                        : "text-gray-600 hover:text-[#0073A0]/80"
                    }`}
                  >
                    {service.title}
                  </span>
                  <span
                    className={`text-base md:text-lg transition-all ${
                      selectedIndex === index
                        ? "text-[#0073A0] block"
                        : "text-gray-600 hidden hover:text-[#0073A0]/80"
                    }`}
                  >
                    {service.description}
                  </span>
                  <hr
                    className={`border-t w-full transition-colors ${
                      selectedIndex === index
                        ? "border-[#0073A0] border-2"
                        : "border-gray-600 group-hover:border-[#0073A0]/50"
                    }`}
                  />
                </div>
              ))}
            </div>
            <div className="flex flex-col gap-4 justify-end w-full md:w-[600px] mt-4 md:mt-0">
              <div className="relative bg-[#0080B2] rounded-t-3xl p-4 h-[200px] md:h-[300px] w-full md:w-[600px] hidden md:block" />
              <Image
                src={heroImages[selectedIndex]}
                alt="Election Services Hero Image"
                width={600}
                height={400}
                className="rounded-lg absolute hidden md:block"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto text-center px-4 md:px-0">
          <AnimatedElement>
            <div className="flex flex-col gap-4">
              <span className="text-2xl md:text-5xl font-bold tracking-tighter sm:text-4xl">
                Real <span className="text-[#00B3EA]">Feedback</span>, Real{" "}
                <span className="text-[#00B3EA]">Trust</span>
              </span>

              <span className="text-base md:text-lg text-gray-600">
                Our commitment to fairness, transparency, and efficiency speaks
                for itself. <br className="hidden md:block" /> But don't just
                take our word for it see what our clients have to say about
                their experience with us!
              </span>
            </div>
          </AnimatedElement>
          <div className="mt-8 bg-[#00B3EA]/10 rounded-lg p-8">
            <Carousel
              plugins={[Autoplay({ delay: 3000 })]}
              className="rounded-lg"
              setApi={setApi}
            >
              <CarouselContent>
                {FEEDBACK.slice(0, FEEDBACK.length - 2).map((_, index) => (
                  <CarouselItem key={index}>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {FEEDBACK.slice(index, index + 3).map((feedback, i) => (
                        <Card key={i} className="h-full">
                          <CardContent className="p-6 flex flex-col gap-4">
                            <div className="flex gap-4">
                              <div className="flex flex-col">
                                <div className="flex w-full gap-2 items-end justify-end">
                                  <Quote className="h-8 w-8 text-primary mb-4" />
                                </div>
                                <p className="text-gray-600 italic text-lg text-left h-[150px]">
                                  "{feedback.description}"
                                </p>
                                <div className="flex flex-row gap-4 py-4">
                                  <div className="h-12 w-12 rounded-full bg-[#00B3EA]/10 flex items-center justify-center">
                                    <Image
                                      src={feedback.avatar}
                                      alt={`${feedback.name}'s Avatar`}
                                      width={48}
                                      height={48}
                                    />
                                  </div>
                                  <div className="flex flex-col">
                                    <span className="font-bold">
                                      {feedback.name}
                                    </span>
                                    <span className="text-sm text-gray-600">
                                      {feedback.role}
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="flex justify-center gap-2 mt-4">
                {FEEDBACK.slice(0, FEEDBACK.length - 2).map((_, index) => (
                  <button
                    key={index}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      currentSlide === index ? "bg-[#00B3EA]" : "bg-gray-300"
                    }`}
                    onClick={() => api?.scrollTo(index)}
                  />
                ))}
              </div>
            </Carousel>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4 md:px-0">
          <div
            className="container mx-auto px-4 md:px-12 bg-cover bg-center grid grid-cols-1 md:grid-cols-2 py-12 rounded-lg gap-6"
            style={{ backgroundImage: `url(${BGHomeImg.src})` }}
          >
            <div className="flex flex-col gap-4">
              <span className="text-2xl md:text-3xl font-bold tracking-tighter sm:text-4xl text-white">
                Simplify Your Elections
              </span>
              <span className="text-2xl md:text-3xl font-bold tracking-tighter sm:text-4xl text-[#E1FF00]">
                Contact us Today!
              </span>
            </div>
            <div className="flex flex-col md:flex-row justify-end mt-4 gap-4">
              <Button className="bg-[#88D200] hover:bg-[#E1FF00]/80 text-xl md:text-3xl font-bold tracking-tighter sm:text-4xl text-white rounded-lg px-4 md:px-8 h-16 md:h-20 w-full md:w-auto">
                <Link href="/request-proposal">Request Proposal</Link>
              </Button>
              <Button className="bg-transparent hover:bg-[#E1FF00]/80 border border-2 border-white text-xl md:text-3xl font-bold tracking-tighter sm:text-4xl text-white rounded-lg px-4 md:px-8 h-16 md:h-20 w-full md:w-auto">
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto text-center px-4 md:px-0">
          <AnimatedElement>
            <div className="flex flex-col gap-4">
              <span className="text-center text-5xl font-bold">
                Frequently Asked{" "}
                <span className="text-[#00B3EA]">Questions</span>
              </span>
              <span className="text-lg text-gray-600">
                Got questions? We've got answers! Explore our FAQs to learn more
                about our election services, <br /> voting process, and how we
                ensure fairness and security in every election
              </span>
            </div>
          </AnimatedElement>
          <div className="mx-auto mt-4">
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
                className="py-4 p-6 bg-muted rounded-lg text-left"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                <span className="text-lg font-semibold mb-2">
                  Still have questions?
                </span>
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
