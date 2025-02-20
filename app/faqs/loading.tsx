import { Skeleton } from "@/components/ui/skeleton"

export default function Loading() {
  return (
    <div className="container py-12">
      <div className="max-w-3xl mx-auto space-y-8">
        <div>
          <Skeleton className="h-8 w-[300px]" />
          <Skeleton className="h-4 w-[400px] mt-2" />
        </div>

        <div className="space-y-4">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="space-y-2">
              <Skeleton className="h-6 w-full" />
              <Skeleton className="h-20 w-full" />
            </div>
          ))}
        </div>

        <Skeleton className="h-[200px] w-full" />
      </div>
    </div>
  )
}

