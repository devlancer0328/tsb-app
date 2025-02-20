import { Skeleton } from "@/components/ui/skeleton"

export default function Loading() {
  return (
    <div className="container py-12">
      <div className="grid gap-12 lg:grid-cols-2">
        <div className="space-y-8">
          <div>
            <Skeleton className="h-8 w-[200px]" />
            <Skeleton className="h-4 w-[300px] mt-2" />
          </div>

          <div className="space-y-6">
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <Skeleton className="h-4 w-[100px] mb-2" />
                <Skeleton className="h-10 w-full" />
              </div>
              <div>
                <Skeleton className="h-4 w-[100px] mb-2" />
                <Skeleton className="h-10 w-full" />
              </div>
            </div>

            <div>
              <Skeleton className="h-4 w-[100px] mb-2" />
              <Skeleton className="h-10 w-full" />
            </div>

            <div>
              <Skeleton className="h-4 w-[100px] mb-2" />
              <Skeleton className="h-[150px] w-full" />
            </div>

            <div>
              <Skeleton className="h-4 w-[100px] mb-2" />
              <Skeleton className="h-10 w-full" />
            </div>

            <Skeleton className="h-10 w-[100px]" />
          </div>
        </div>

        <div className="space-y-8 lg:pl-8">
          <div>
            <Skeleton className="h-6 w-[150px]" />
            <Skeleton className="h-4 w-[200px] mt-2" />
          </div>

          <div className="grid gap-6">
            {[1, 2, 3, 4].map((i) => (
              <Skeleton key={i} className="h-[88px] w-full" />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

