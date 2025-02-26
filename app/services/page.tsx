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

import BGServiceVoteImg from "@/app/assets/img/services-vote.png";
import BGServiceImg1 from "@/app/assets/img/services-bg1.png";
import BGServiceImg2 from "@/app/assets/img/services-bg2.png";

import CardServiceImg1 from "@/app/assets/img/service-img1.png";
import CardServiceImg2 from "@/app/assets/img/service-img2.png";
import CardServiceImg3 from "@/app/assets/img/service-img3.png";
import CardServiceImg4 from "@/app/assets/img/service-img4.png";
import CardServiceImg5 from "@/app/assets/img/service-img5.png";
import CardServiceImg6 from "@/app/assets/img/service-img6.png";

import Marquee from "react-fast-marquee";
import { INDUSTRY_LIST, SERVICES_LIST, EVOTING_FEATURES } from "@/types";
const AnimatedCard = motion(Card);

const CardServiceImg = [
  CardServiceImg1,
  CardServiceImg2,
  CardServiceImg3,
  CardServiceImg4,
  CardServiceImg5,
  CardServiceImg6,
];

export default function ServicesPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:px-0 pt-[100px] md:pt-[160px]">
      <div className="mx-auto space-y-12 grid grid-cols-1 md:grid-cols-2 text-center md:text-left bg-[#EBF9FF] rounded-2xl pl-4 md:pl-8">
        <div className="flex flex-col gap-8 justify-center">
          <AnimatedElement>
            <span className="inline-block text-[#0082AA] bg-[#00B3EA]/10 px-4 py-2 rounded-full text-base font-bold">
              Request Proposal
            </span>
          </AnimatedElement>
          <AnimatedElement>
            <h1 className="text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl text-[#1A1A1A]">
              Customized Election Services for Your Needs
            </h1>
          </AnimatedElement>
          <AnimatedElement delay={0.2}>
            <p className="text-lg text-[#666666]">
              Get a tailored election solution designed for fairness, security,
              and efficiency
            </p>
          </AnimatedElement>
        </div>
        <div className="relative order-first md:order-last">
          <AnimatedElement>
            <div className="relative z-10">
              <div className="relative z-20 rounded-[2rem] overflow-hidden flex justify-end z-10">
                <Image
                  src={BGServiceVoteImg}
                  alt="Election Services Hero Image"
                  className="h-auto z-10"
                  width={500}
                  height={500}
                  priority
                />
                <Image
                  src={BGServiceImg2}
                  alt="Election Services Hero Image"
                  className="absolute bottom-0 left-20 z-0"
                  width={330}
                  height={330}
                  priority
                />
                <Image
                  src={BGServiceImg1}
                  alt="Election Services Hero Image"
                  width={100}
                  height={100}
                  className="absolute top-0 right-0 z-10"
                  priority
                />
              </div>
            </div>
          </AnimatedElement>
        </div>
      </div>

      <section className="py-12">
        <div className="container mx-auto text-center px-4 md:px-0">
          <div className="flex flex-col gap-4">
            <span className="text-center text-2xl md:text-5xl font-bold">
              Industries <span className="text-[#00B3EA]">We Support</span>
            </span>
            <span className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
              Providing secure and transparent election solutions for HOAs,
              organizations, and communities of all sizes
            </span>
          </div>
        </div>
        <div className="mt-8 flex flex-col gap-4">
          <Marquee gradient={false} speed={70} className="py-4">
            {INDUSTRY_LIST.map((industry, index) => (
              <AnimatedCard
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
                key={index}
                className="flex-shrink-0 w-[400px] mx-8"
              >
                <div className="flex flex-row gap-4 p-4 items-center">
                  <div className="flex flex-col items-center justify-center gap-4 w-24 h-24 bg-gradient-to-br from-[#00A6DD] to-[#005977] rounded-lg p-2">
                    {industry.icon}
                  </div>
                  <span className="text-2xl font-bold whitespace-pre-line text-center">
                    {industry.name}
                  </span>
                </div>
              </AnimatedCard>
            ))}
          </Marquee>
          <Marquee
            gradient={false}
            speed={50}
            className="py-4"
            direction="right"
          >
            {INDUSTRY_LIST.map((industry, index) => (
              <AnimatedCard
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
                key={index}
                className="flex-shrink-0 w-[400px] mx-8"
              >
                <div className="flex flex-row gap-4 p-4 items-center">
                  <div className="flex flex-col items-center justify-center gap-4 w-24 h-24 bg-gradient-to-br from-[#00A6DD] to-[#005977] rounded-lg p-2">
                    {industry.icon}
                  </div>
                  <span className="text-2xl font-bold whitespace-pre-line text-center">
                    {industry.name}
                  </span>
                </div>
              </AnimatedCard>
            ))}
          </Marquee>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto text-center px-4 md:px-0">
          <div className="flex flex-col gap-4">
            <span className="text-center text-2xl md:text-5xl font-bold">
              Our Services
            </span>
            <span className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
              We provide end-to-end election management services to ensure fair,
              transparent, and compliant elections for your HOA
            </span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-8 mt-4">
            {SERVICES_LIST.map((service, index) => (
              <AnimatedCard
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
                key={index}
                style={{
                  backgroundImage: `url(${CardServiceImg[index].src})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  aspectRatio: "1 / 1",
                }}
                className="p-4 w-full hover:p-0 transition-all duration-500 cursor-pointer"
              >
                <div className="flex flex-col gap-4 items-center justify-center p-4 md:p-8 h-full bg-[#00A4C1]/50 rounded-xl hover:bg-[#000]/50 transition-all duration-500 cursor-pointer">
                  {service.icon}
                  <span className="text-lg sm:text-xl md:text-2xl font-bold whitespace-pre-line text-center text-white">
                    {service.title}
                  </span>
                </div>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      <div className="mb-16 py-12">
        <div className="flex flex-col gap-4 text-center">
          <span className="text-center text-2xl md:text-5xl font-bold">
            <span className="text-[#00B3EA]">eVoting</span> Platform
          </span>
          <span className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
            Our advanced eVoting platform ensures a secure, easy, and accessible
            way for homeowners to vote in association elections
          </span>
        </div>
        <div className="bg-[#EDFAFF] rounded-lg p-4 md:p-8 mt-4">
          <div className="aspect-video relative mb-8">
            <iframe
              src="https://e-voting-ruby.vercel.app/login"
              className="absolute inset-0 w-full h-full rounded-md"
              style={{ border: 0 }}
              allowFullScreen
            />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {EVOTING_FEATURES.map((item, index) => (
              <AnimatedElement key={item.title} delay={0.1 * index}>
                <AnimatedCard
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="cursor-pointer border border-[#0080B2] bg-transparent"
                >
                  <div className="flex flex-col sm:flex-row gap-4 p-4 items-center">
                    <div
                      className="flex items-center justify-center w-16 h-16 sm:w-24 sm:h-24 bg-gradient-to-br from-[#00A6DD] to-[#005977] rounded-lg p-2"
                      style={{ aspectRatio: "1 / 1" }}
                    >
                      {item.icon}
                    </div>
                    <div className="flex flex-col gap-2 text-center sm:text-left">
                      <span className="text-xl md:text-2xl font-regular whitespace-pre-line">
                        {item.title}
                      </span>
                      <span className="text-sm md:text-base text-gray-600">
                        {item.description}
                      </span>
                    </div>
                  </div>
                </AnimatedCard>
              </AnimatedElement>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
