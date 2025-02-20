"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  Suspense,
} from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { LoadingAnimation } from "@/components/ui/loading-animation";

const LoadingContext = createContext({});

function LoadingWrapper({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(false);
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    setIsLoading(true);
    const timeout = setTimeout(() => setIsLoading(false), 500);
    return () => clearTimeout(timeout);
  }, [pathname, searchParams]);

  return (
    <>
      {isLoading && <LoadingAnimation />}
      {children}
    </>
  );
}

export function LoadingProvider({ children }: { children: React.ReactNode }) {
  return (
    <Suspense fallback={<LoadingAnimation />}>
      <LoadingWrapper>{children}</LoadingWrapper>
    </Suspense>
  );
}
