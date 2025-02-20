import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const posts = [
  {
    title: "Elections by Acclamation",
    excerpt: "Understanding the process and requirements for elections by acclamation in HOA governance.",
    date: "2024-02-15",
    image: "/placeholder.svg?height=200&width=400",
    slug: "elections-by-acclamation",
  },
  {
    title: "SB 323 – How it changes the game",
    excerpt: "An analysis of SB 323 and its impact on HOA election procedures in California.",
    date: "2024-02-10",
    image: "/placeholder.svg?height=200&width=400",
    slug: "sb-323-changes",
  },
  {
    title: "The Benefits of Electronic Voting",
    excerpt: "Exploring how electronic voting systems are transforming HOA elections.",
    date: "2024-02-05",
    image: "/placeholder.svg?height=200&width=400",
    slug: "electronic-voting-benefits",
  },
  {
    title: "Common Election Mistakes to Avoid",
    excerpt: "Key pitfalls to watch out for during HOA election processes.",
    date: "2024-01-30",
    image: "/placeholder.svg?height=200&width=400",
    slug: "common-election-mistakes",
  },
]

export default function BlogPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Blog & Updates</h1>
        <p className="text-lg text-muted-foreground">
          Stay informed about HOA election news, updates, and best practices
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {posts.map((post, index) => (
          <Card key={index} className="overflow-hidden">
            <Link href={`/blog/${post.slug}`}>
              <div className="aspect-video relative">
                <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
              </div>
              <CardHeader>
                <CardTitle className="line-clamp-2">{post.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground line-clamp-3 mb-4">{post.excerpt}</p>
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
  )
}

