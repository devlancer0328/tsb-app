"use client";

import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { POSTS } from "@/types";
import { AnimatedElement } from "@/components/ui/animated-element";
import BlogHeroImg from "@/app/assets/img/blog-hero.png";
import { ArrowRightIcon } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { usePageLoading } from "@/hooks/use-page-loading";
const AnimatedCard = motion(Card);

export default function BlogPage() {
  usePageLoading();
  const [currentPage, setCurrentPage] = useState(1);
  const [activeFilter, setActiveFilter] = useState("All");
  const postsPerPage = 6;

  const filteredPosts = POSTS.filter(
    (post) => activeFilter === "All" || post.category === activeFilter
  );

  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);

  const categories = ["All", "Voting", "Election", "Meeting"];

  return (
    <div className="container mx-auto px-4 py-12 md:px-0 pt-[140px] md:pt-[160px]">
      <div className="mx-auto grid grid-cols-1 md:grid-cols-2 text-center md:text-left bg-[#EBF9FF] rounded-2xl pl-4 md:pl-8">
        <div className="flex flex-col gap-8 justify-center">
          <AnimatedElement>
            <span className="inline-block text-[#0082AA] bg-[#00B3EA]/10 px-4 py-2 rounded-full text-base font-bold mt-4 md:mt-0">
              Insights & Updates
            </span>
          </AnimatedElement>
          <AnimatedElement>
            <h1 className="text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl text-[#1A1A1A]">
              Your Guide to Fair Elections
            </h1>
          </AnimatedElement>
          <AnimatedElement delay={0.2}>
            <p className="text-lg text-[#666666] mb-4 md:mb-0">
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
                  src={BlogHeroImg}
                  alt="Election Services Hero Image"
                  className="h-auto z-10"
                  width={700}
                  height={500}
                  priority
                />
              </div>
            </div>
          </AnimatedElement>
        </div>
      </div>

      <div className="flex flex-col gap-4 mt-12">
        <AnimatedElement>
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <span className="text-2xl md:text-5xl font-bold tracking-tighter sm:text-4xl">
              Recent Posts
            </span>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={activeFilter === category ? "default" : "outline"}
                  onClick={() => {
                    setActiveFilter(category);
                    setCurrentPage(1);
                  }}
                  className="rounded-full text-lg"
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </AnimatedElement>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-9xl mx-auto bg-gray-100 rounded-2xl p-4 mt-12">
        {currentPosts.map((post, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <AnimatedCard
              key={index}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Link href={`/blog/${post.slug}`}>
                <div className="aspect-video relative">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover rounded-t-xl"
                  />
                  <div className="absolute top-2 right-2 bg-black/50 text-white text-lg font-bold p-3 rounded-xl">
                    {post.category}
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="line-clamp-1 text-xl font-bold overflow-hidden text-ellipsis">
                    {post.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground line-clamp-2 mb-4 h-[48px]">
                    {post.excerpt}
                  </p>
                  <div className="flex flex-row justify-between gap-2">
                    <time className="text-muted-foreground">
                      {new Date(post.date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </time>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="flex flex-row items-center gap-2 text-muted-foreground "
                    >
                      Read More <ArrowRightIcon className="w-4 h-4" />
                    </Link>
                  </div>
                </CardContent>
              </Link>
            </AnimatedCard>
          </motion.div>
        ))}
      </div>

      <div className="flex justify-center gap-2 mt-8">
        <Button
          variant="outline"
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
        >
          &lt;
        </Button>
        {[...Array(totalPages)].map((_, i) => (
          <Button
            key={i + 1}
            variant={currentPage === i + 1 ? "default" : "outline"}
            onClick={() => setCurrentPage(i + 1)}
          >
            {i + 1}
          </Button>
        ))}
        <Button
          variant="outline"
          onClick={() =>
            setCurrentPage((prev) => Math.min(prev + 1, totalPages))
          }
          disabled={currentPage === totalPages}
        >
          &gt;
        </Button>
      </div>
    </div>
  );
}
