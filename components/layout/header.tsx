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
import { usePathname } from "next/navigation";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

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
        className="mt-8 absolute left-0 right-0 px-4 md:px-0"
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <div
          className={`container mx-auto px-4 py-4 bg-white rounded-2xl shadow-md z-50 ${
            isScrolled ? "fixed left-0 right-0 px-4" : "relative"
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
                        className={cn(
                          navigationMenuTriggerStyle(),
                          pathname === "/" ? "text-primary font-semibold" : ""
                        )}
                      >
                        Home
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <Link href="/services" legacyBehavior passHref>
                      <NavigationMenuLink
                        className={cn(
                          navigationMenuTriggerStyle(),
                          pathname === "/services"
                            ? "text-primary font-semibold"
                            : ""
                        )}
                      >
                        Services
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <Link href="/request-proposal" legacyBehavior passHref>
                      <NavigationMenuLink
                        className={cn(
                          navigationMenuTriggerStyle(),
                          pathname === "/request-proposal"
                            ? "text-primary font-semibold"
                            : ""
                        )}
                      >
                        Request Proposal
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <Link href="/blog" legacyBehavior passHref>
                      <NavigationMenuLink
                        className={cn(
                          navigationMenuTriggerStyle(),
                          pathname === "/blog"
                            ? "text-primary font-semibold"
                            : ""
                        )}
                      >
                        Blog
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <Link href="/contact" legacyBehavior passHref>
                      <NavigationMenuLink
                        className={cn(
                          navigationMenuTriggerStyle(),
                          pathname === "/contact"
                            ? "text-primary font-semibold"
                            : ""
                        )}
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
                    <Link
                      href="/"
                      className={cn(
                        "text-lg font-medium hover:text-primary transition-colors",
                        pathname === "/" ? "text-primary" : ""
                      )}
                    >
                      Home
                    </Link>
                    <Link
                      href="/services"
                      className={cn(
                        "text-lg font-medium hover:text-primary transition-colors",
                        pathname === "/services" ? "text-primary" : ""
                      )}
                    >
                      Services
                    </Link>
                    <Link
                      href="/request-proposal"
                      className={cn(
                        "text-lg font-medium hover:text-primary transition-colors",
                        pathname === "/request-proposal" ? "text-primary" : ""
                      )}
                    >
                      Request Proposal
                    </Link>
                    <Link
                      href="/blog"
                      className={cn(
                        "text-lg font-medium hover:text-primary transition-colors",
                        pathname === "/blog" ? "text-primary" : ""
                      )}
                    >
                      Blog
                    </Link>
                    <Link
                      href="/contact"
                      className={cn(
                        "text-lg font-medium hover:text-primary transition-colors",
                        pathname === "/contact" ? "text-primary" : ""
                      )}
                    >
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
