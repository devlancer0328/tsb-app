"use client";

import { Card } from "@/components/ui/card";
import { ContactForm } from "@/components/shared/contact-form";
import Image from "next/image";
import { m, motion } from "framer-motion";
const AnimatedCard = motion(Card);

import ContactHeroImg from "@/app/assets/img/contact-hero.jpg";
import ContactShapeImg from "@/app/assets/img/contact-shape.png";
import ContactMapImg from "@/app/assets/img/map.jpg";
import LogoImg from "@/app/assets/img/logo.png";
import { Phone, Mail, MapPin } from "lucide-react";
import { SecuritySVG } from "@/app/assets/svg/SecuritySVG";
import { ConsultingSVG } from "../assets/svg/ConsultingSVG";
import { SupportSVG } from "../assets/svg/SupportSVG";
import { usePageLoading } from "@/hooks/use-page-loading";
import { AnimatedElement } from "@/components/ui/animated-element";
export default function ContactPage() {
  usePageLoading();
  return (
    <div className="container mx-auto px-4 py-12 md:px-0 pt-[140px] md:pt-[160px]">
      <div className="mb-12">
        <AnimatedElement>
          <div className="flex flex-col gap-4 text-center">
            <span className="text-center text-2xl md:text-3xl font-bold">
              Have questions or need assistance with your election process?{" "}
              <br />
              <span className="text-[#00B3EA]">We're here to help!</span>
            </span>
          </div>
        </AnimatedElement>
      </div>
      <AnimatedElement>
        <div className="relative grid md:grid-cols-2 gap-8 md:gap-14 max-w-9xl mx-auto bg-[#E7F9FF] rounded-2xl p-4 md:p-12">
          <Image
            src={ContactShapeImg}
            alt=""
            width={500}
            height={500}
            className="rounded-3xl object-cover absolute top-0 left-0 hidden md:block z-0"
          />
          <div className="px-4 md:px-14 space-y-6 relative z-10">
            <AnimatedCard
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="relative bg-black/20 rounded-3xl p-4 md:p-8 border-none"
            >
              <div>
                <Image
                  src={ContactHeroImg}
                  alt="Contact Hero"
                  className="rounded-3xl object-cover w-full h-auto"
                />
                <Image
                  src={LogoImg}
                  alt="Logo"
                  width={300}
                  height={100}
                  className="rounded-xl object-cover absolute bottom-4 md:bottom-12 right-4 md:right-12 w-32 md:w-auto"
                />
              </div>
            </AnimatedCard>
            <div className="flex flex-col gap-4 bg-white rounded-3xl p-4 md:p-8 mt-8 md:mt-12 z-10">
              <span className="text-xl md:text-3xl font-bold text-[#00A3D9]">
                Contact Us
              </span>
              <span className="text-base md:text-lg text-[#00A3D9] flex flex-row items-center gap-2 ">
                <Phone className="w-5 md:w-6 h-5 md:h-6" /> +1 6193326350
              </span>
              <span className="text-base md:text-lg text-[#00A3D9] flex flex-row items-center gap-2">
                <Mail className="w-5 md:w-6 h-5 md:h-6" />{" "}
                info@thesecretballot.com
              </span>
              <span className="text-base md:text-lg text-[#00A3D9] flex flex-row items-center gap-2">
                <MapPin className="w-5 md:w-6 h-5 md:h-6" /> 2522 Alpine Blvd,
                CA 91901
              </span>
            </div>
          </div>

          <Card className="p-6">
            <ContactForm />
          </Card>
        </div>
      </AnimatedElement>
      <div className="mt-16">
        <div className="flex flex-col gap-4 text-center">
          <span className="text-center text-2xl md:text-5xl font-bold">
            Our <span className="text-[#00B3EA]">Supporting </span>
            System
          </span>
        </div>
        <div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-32 min-h-[600px] rounded-3xl items-center p-4 md:p-8 mt-8"
          style={{
            backgroundImage: `url(${ContactMapImg.src})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="flex flex-col gap-4 p-4 rounded-xl">
            <span className="text-xl md:text-4xl font-regular">
              Secure & Reliable Voting <br />
              Anywhere, Anytime
            </span>
            <span className="text-base md:text-lg text-gray-800">
              Your all-in-one election support: secure voting, expert guidance,
              and assistance. So you can run elections worry-free
            </span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-12 items-center">
            <AnimatedCard
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="rounded-3xl p-2 md:p-4 border-none w-full h-[200px] md:h-[200px]"
            >
              <div className="flex flex-row items-center gap-2 mb-2">
                <div className="w-20 h-16 flex items-center justify-center bg-black/5 rounded-xl">
                  <SecuritySVG />
                </div>
                <span className="text-lg md:text-2xl font-bold text-[#00A3D9]">
                  Security
                </span>
              </div>
              <p className="text-sm md:text-base">
                Ensuring secure and transparent elections with robust protection
                for every vote
              </p>
            </AnimatedCard>
            <div className="flex flex-col gap-4">
              <AnimatedCard
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="rounded-3xl p-2 md:p-4 border-none w-full h-[200px] md:h-[200px]"
              >
                <div className="flex flex-row items-center gap-2 mb-2">
                  <div className="w-20 h-16 flex items-center justify-center bg-black/5 rounded-xl">
                    <ConsultingSVG />
                  </div>
                  <span className="text-lg md:text-2xl font-bold text-[#00A3D9]">
                    Consulting
                  </span>
                </div>
                <p className="text-sm md:text-base">
                  Expert election consulting tailored to your HOA's needs,
                  ensuring fair, transparent, and seamless voting processes
                </p>
              </AnimatedCard>
              <AnimatedCard
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="rounded-3xl p-2 md:p-4 border-none w-full h-[200px] md:h-[200px]"
              >
                <div className="flex flex-row items-center gap-2 mb-2">
                  <div className="w-20 h-16 flex items-center justify-center bg-black/5 rounded-xl">
                    <SupportSVG />
                  </div>
                  <span className="text-lg md:text-2xl font-bold text-[#00A3D9]">
                    24/7 Support
                  </span>
                </div>
                <p className="text-sm md:text-base">
                  24/7 dedicated support to ensure a smooth, hassle-free
                  election process at all time
                </p>
              </AnimatedCard>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
