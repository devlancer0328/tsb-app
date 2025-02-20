"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import {
  CheckCircle,
  Users,
  Vote,
  Shield,
  BarChart,
  FileText,
} from "lucide-react";
import { AnimatedElement } from "@/components/ui/animated-element";
import { motion } from "framer-motion";
import Autoplay from "embla-carousel-autoplay";
import ServiceImg from "@/app/assets/img/service_2.jpg";
import ServiceImg2 from "@/app/assets/img/service_3.jpg";
import ServiceImg3 from "@/app/assets/img/service_1.jpg";

const AnimatedCard = motion(Card);

export default function ServicesPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Our Services</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Comprehensive election management solutions for Homeowner Associations
          of all sizes
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-16">
        <div>
          <h2 className="text-3xl font-bold mb-4">Election Services</h2>
          <p className="text-lg text-muted-foreground mb-6">
            We provide end-to-end election management services to ensure fair,
            transparent, and compliant elections for your HOA.
          </p>
          <ul className="space-y-4">
            {[
              {
                icon: CheckCircle,
                text: "Ballot preparation and distribution",
              },
              { icon: Users, text: "Voter eligibility verification" },
              { icon: Vote, text: "Secure ballot collection and counting" },
              {
                icon: Shield,
                text: "Compliance with state laws and association bylaws",
              },
              { icon: BarChart, text: "Results tabulation and reporting" },
              { icon: FileText, text: "Complete election documentation" },
            ].map((item, index) => (
              <li key={index} className="flex items-center space-x-3">
                <item.icon className="h-6 w-6 text-primary" />
                <span>{item.text}</span>
              </li>
            ))}
          </ul>
          <Button asChild className="mt-6">
            <Link href="/request-proposal">Request a Proposal</Link>
          </Button>
        </div>
        <div className="relative aspect-video">
          <Carousel
            plugins={[Autoplay({ delay: 2000 })]}
            className="rounded-lg h-[350px]"
          >
            <CarouselContent>
              <CarouselItem>
                <Image
                  src={ServiceImg.src}
                  alt="Election Services"
                  width={800}
                  height={350}
                  className="w-full h-auto rounded-lg"
                  priority
                />
              </CarouselItem>
              <CarouselItem>
                <Image
                  src={ServiceImg2.src}
                  alt="Election Services"
                  width={800}
                  height={350}
                  className="w-full h-auto rounded-lg"
                />
              </CarouselItem>
              <CarouselItem>
                <Image
                  src={ServiceImg3.src}
                  alt="Election Services"
                  width={800}
                  height={350}
                  className="w-full h-auto rounded-lg"
                />
              </CarouselItem>
            </CarouselContent>
          </Carousel>
        </div>
      </div>

      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-4 text-center">
          eVoting Platform
        </h2>
        <p className="text-lg text-muted-foreground mb-8 text-center max-w-2xl mx-auto">
          Our state-of-the-art eVoting platform provides a secure, convenient,
          and accessible way for homeowners to participate in association
          elections.
        </p>
        <div className="bg-gray-100 rounded-lg p-8">
          <div className="aspect-video relative mb-8">
            <iframe
              src="https://e-voting-ruby.vercel.app/login"
              className="absolute inset-0 w-full h-full rounded-md"
              style={{ border: 0 }}
              allowFullScreen
            />
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Secure Voting",
                description:
                  "Advanced encryption and authentication measures ensure the integrity of every vote.",
              },
              {
                title: "Easy Access",
                description:
                  "Vote from anywhere, anytime using any device with internet access.",
              },
              {
                title: "Real-time Results",
                description:
                  "Instant tabulation and reporting for quick and transparent election outcomes.",
              },
            ].map((item, index) => (
              <AnimatedElement key={item.title} delay={0.1 * index}>
                <AnimatedCard
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <CardHeader>
                    <CardTitle>{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>{item.description}</CardDescription>
                  </CardContent>
                </AnimatedCard>
              </AnimatedElement>
            ))}
          </div>
        </div>
      </div>

      <div className="text-center">
        <h2 className="text-3xl font-bold mb-4">
          Ready to modernize your HOA elections?
        </h2>
        <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
          Whether you need full-service election management or just our eVoting
          platform, we're here to help make your next election a success.
        </p>
        <div className="flex justify-center space-x-4">
          <Button asChild>
            <Link href="/request-proposal">Get Started</Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/contact">Contact Us</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
