import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { POSTS } from "@/types";
import BlogImg_1 from "@/app/assets/img/service_2.jpg";

export default function BlogPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-12">
        <div className="flex flex-row items-center gap-3 mb-8">
          <hr style={{ border: "3px solid #19b6da", width: "50px" }} />
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
            Blog & Updates
          </h2>
          <hr style={{ border: "3px solid #19b6da", width: "50px" }} />
        </div>
        <p className="text-lg text-muted-foreground">
          Stay informed about HOA election news, updates, and best practices
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-9xl mx-auto">
        {POSTS.map((post, index) => (
          <Card key={index} className="overflow-hidden">
            <Link href={`/blog/${post.slug}`}>
              <div className="aspect-video relative">
                <Image
                  src={BlogImg_1.src}
                  alt={post.title}
                  fill
                  className="object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle className="line-clamp-2">{post.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground line-clamp-3 mb-4">
                  {post.excerpt}
                </p>
                <time className="text-sm text-muted-foreground">
                  {new Date(post.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </time>
              </CardContent>
            </Link>
          </Card>
        ))}
      </div>
    </div>
  );
}
