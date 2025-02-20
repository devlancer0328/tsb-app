import { Skeleton } from "@/components/ui/skeleton"

export default function Loading() {
  return (
    <div className="container max-w-3xl py-12">
      <div className="space-y-6">
        <div>
          <Skeleton className="h-8 w-[200px]" />
          <Skeleton className="h-4 w-[300px] mt-2" />
        </div>

        <div className="space-y-8">
          <div className="space-y-3">
            <Skeleton className="h-4 w-[250px]" />
            {[1, 2, 3, 4, 5].map((i) => (
              <Skeleton key={i} className="h-6 w-full" />
            ))}
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <Skeleton className="h-4 w-[200px] mb-2" />
              <Skeleton className="h-10 w-full" />
            </div>
            <div>
              <Skeleton className="h-4 w-[200px] mb-2" />
              <Skeleton className="h-10 w-full" />
            </div>
          </div>

          <div>
            <Skeleton className="h-4 w-[200px] mb-2" />
            <Skeleton className="h-[150px] w-full" />
          </div>

          <Skeleton className="h-10 w-[120px]" />
        </div>
      </div>
    </div>
  )
}

