"use client";

import { createContext, useContext, useState } from "react";
import dynamic from "next/dynamic";
import { Suspense } from "react";

const LoadingAnimation = dynamic(
  () =>
    import("@/components/ui/loading-animation").then(
      (mod) => mod.LoadingAnimation
    ),
  {
    ssr: false,
  }
);

interface LoadingContextType {
  isLoading: boolean;
  setIsLoading: (value: boolean) => void;
}

const LoadingContext = createContext<LoadingContextType>({
  isLoading: false,
  setIsLoading: () => {},
});

export function LoadingProvider({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <LoadingContext.Provider value={{ isLoading, setIsLoading }}>
      <Suspense fallback={null}>
        {isLoading && <LoadingAnimation />}
        {children}
      </Suspense>
    </LoadingContext.Provider>
  );
}

export function useLoading() {
  const context = useContext(LoadingContext);
  if (!context) {
    throw new Error("useLoading must be used within a LoadingProvider");
  }
  return context;
}
