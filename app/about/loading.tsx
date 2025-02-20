import { Skeleton } from "@/components/ui/skeleton"

export default function Loading() {
  return (
    <div className="container py-12">
      <div className="max-w-4xl mx-auto space-y-12">
        {/* Hero Section */}
        <div className="text-center space-y-4">
          <Skeleton className="h-10 w-[200px] mx-auto" />
          <Skeleton className="h-6 w-[400px] mx-auto" />
        </div>

        {/* Company Highlights */}
        <div className="grid gap-6 md:grid-cols-3">
          {[1, 2, 3].map((i) => (
            <Skeleton key={i} className="h-[200px] w-full" />
          ))}
        </div>

        {/* Main Content */}
        <div className="space-y-6">
          <Skeleton className="h-24 w-full" />
          <Skeleton className="h-24 w-full" />
          <Skeleton className="h-8 w-[150px]" />
          <Skeleton className="h-24 w-full" />
        </div>

        {/* Partnerships */}
        <div className="grid gap-6 md:grid-cols-3">
          {[1, 2, 3].map((i) => (
            <Skeleton key={i} className="h-[200px] w-full" />
          ))}
        </div>

        {/* Closing Statement */}
        <Skeleton className="h-[100px] w-full" />
      </div>
    </div>
  )
}

