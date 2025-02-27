"use client";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center">
      <div className="text-center space-y-6">
        <h1 className="text-8xl font-bold text-[#0088B7]">404</h1>
        <h2 className="text-3xl font-semibold text-gray-800">Page Not Found</h2>
        <p className="text-gray-600 max-w-md mx-auto">
          Oops! The page you're looking for doesn't exist or has been moved.
        </p>
        <Link
          href="/"
          className="inline-block bg-[#0088B7] text-white px-6 py-3 rounded-lg hover:bg-[#006d92] transition-colors"
        >
          Return Home
        </Link>
      </div>
    </div>
  );
}
