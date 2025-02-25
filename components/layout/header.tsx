"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import ElectionImg from "@/app/assets/img/election.jpg";
import LogoImg from "@/app/assets/img/logo.png";
import { Menu, Send } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      <motion.header
        className="mt-8 absolute left-0 right-0"
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <div
          className={`container mx-auto px-4 py-4 bg-white border rounded-2xl shadow-md z-50 ${
            isScrolled ? "fixed left-0 right-0" : "relative"
          }`}
        >
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2">
              <Image
                src={LogoImg.src}
                alt="The Secret Ballot Logo"
                width={200}
                height={50}
                priority
                className="w-[150px] md:w-[200px]"
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-4">
              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <Link href="/" legacyBehavior passHref>
                      <NavigationMenuLink
                        className={navigationMenuTriggerStyle()}
                      >
                        Home
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger>Services</NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                        <li className="row-span-3">
                          <NavigationMenuLink asChild>
                            <a
                              className="flex h-full w-full select-none flex-col justify-end rounded-md p-6 no-underline outline-none focus:shadow-md relative bg-cover bg-center hover:scale-105 transition-all duration-300"
                              style={{
                                backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.6)), url(${ElectionImg.src})`,
                              }}
                              href="/services"
                            >
                              <div className="mb-2 mt-4 text-lg font-medium text-white">
                                Election Services
                              </div>
                              <p className="text-sm leading-tight text-gray-200">
                                Comprehensive election management for HOAs of
                                all sizes
                              </p>
                            </a>
                          </NavigationMenuLink>
                        </li>
                        <ListItem
                          href="https://e-voting-ruby.vercel.app"
                          title="eVoting Platform"
                        >
                          Secure and convenient online voting solution
                        </ListItem>
                        <ListItem
                          href="/services/consulting"
                          title="Election Consulting"
                        >
                          Expert guidance on election processes and compliance
                        </ListItem>
                        <ListItem
                          href="/services/training"
                          title="Board Training"
                        >
                          Educational programs for HOA board members
                        </ListItem>
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <Link href="/request-proposal" legacyBehavior passHref>
                      <NavigationMenuLink
                        className={navigationMenuTriggerStyle()}
                      >
                        Request Proposal
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                  {/* <NavigationMenuItem>
                    <Link href="/faqs" legacyBehavior passHref>
                      <NavigationMenuLink
                        className={navigationMenuTriggerStyle()}
                      >
                        FAQs
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem> */}
                  <NavigationMenuItem>
                    <Link href="/blog" legacyBehavior passHref>
                      <NavigationMenuLink
                        className={navigationMenuTriggerStyle()}
                      >
                        Blog
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <Link href="/contact" legacyBehavior passHref>
                      <NavigationMenuLink
                        className={navigationMenuTriggerStyle()}
                      >
                        Contact Us
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
              <Button
                asChild
                variant="default"
                className="h-10 bg-gradient-to-r from-primary/70 to-primary"
              >
                <Link href="/request-info">
                  <div className="flex items-center rounded-full bg-white px-1 py-1">
                    <Send className="text-primary" />
                  </div>
                  Request Info
                </Link>
              </Button>
            </div>

            {/* Mobile Navigation */}
            <div className="md:hidden">
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <Menu className="h-6 w-6" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-[300px]">
                  <div className="flex flex-col space-y-4 mt-6">
                    <Link href="/" className="text-lg font-medium">
                      Home
                    </Link>
                    <div className="flex flex-col space-y-2">
                      <p className="text-lg font-medium">Services</p>
                      <Link href="/services" className="pl-4 text-sm">
                        Election Services
                      </Link>
                      <Link
                        href="https://e-voting-ruby.vercel.app"
                        className="pl-4 text-sm"
                      >
                        eVoting Platform
                      </Link>
                      <Link
                        href="/services/consulting"
                        className="pl-4 text-sm"
                      >
                        Election Consulting
                      </Link>
                      <Link href="/services/training" className="pl-4 text-sm">
                        Board Training
                      </Link>
                    </div>
                    <Link
                      href="/request-proposal"
                      className="text-lg font-medium"
                    >
                      Request Proposal
                    </Link>
                    <Link href="/blog" className="text-lg font-medium">
                      Blog
                    </Link>
                    <Link href="/contact" className="text-lg font-medium">
                      Contact Us
                    </Link>
                    <Button asChild variant="default" className="w-full">
                      <Link href="/request-info">
                        <Send className="w-4 h-4" />
                        Request Info
                      </Link>
                    </Button>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </motion.header>
    </AnimatePresence>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
