"use client";
import Link from "next/link";
import { MapPin, Phone, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#0088B7] text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Contact Us Section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">Contact Us</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Phone className="h-5 w-5" />
                <span>+11 8864321027</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-5 w-5" />
                <a
                  href="mailto:supportinfo@thesecretballot.com"
                  className="hover:text-gray-200 transition-colors"
                >
                  supportinfo@thesecretballot.com
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-5 w-5" />
                <span>2522 Alpine Blvd, CA 91901</span>
              </div>
            </div>
          </div>

          {/* Explore Section */}
          <div className="space-y-4">
            <h3 className="text-2xl">Explore</h3>
            <nav className="space-y-2">
              <Link
                href="/"
                className="block hover:text-gray-200 transition-colors"
              >
                Home
              </Link>
              <Link
                href="/services"
                className="block hover:text-gray-200 transition-colors"
              >
                Services
              </Link>
              <Link
                href="/request"
                className="block hover:text-gray-200 transition-colors"
              >
                Request
              </Link>
              <Link
                href="/blog"
                className="block hover:text-gray-200 transition-colors"
              >
                Blog
              </Link>
              <Link
                href="/contact-us"
                className="block hover:text-gray-200 transition-colors"
              >
                Contact us
              </Link>
            </nav>
          </div>

          {/* Legal Info Section */}
          <div className="space-y-4">
            <h3 className="text-2xl">Legal Info</h3>
            <nav className="space-y-2">
              <Link
                href="/privacy-policy"
                className="block hover:text-gray-200 transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms-of-services"
                className="block hover:text-gray-200 transition-colors"
              >
                Terms of Services
              </Link>
            </nav>
          </div>

          {/* Get in touch Section */}
          <div className="space-y-4">
            <h3 className="text-2xl">Get in touch</h3>
            <p className="text-sm">
              let's connect on social media for future updates
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:opacity-80">
                <div className="bg-[#333333] p-2 rounded-lg">
                  <svg
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </div>
              </a>
              <a href="#" className="hover:opacity-80">
                <div className="bg-[#333333] p-2 rounded-lg">
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </div>
              </a>
              <a href="#" className="hover:opacity-80">
                <div className="bg-[#333333] p-2 rounded-lg">
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                  </svg>
                </div>
              </a>
              <a href="#" className="hover:opacity-80">
                <div className="bg-[#333333] p-2 rounded-lg">
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </div>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-white/20 flex justify-between items-center text-sm">
          <span>The Secret Ballot</span>
          <span>@2025, All Rights Reserved</span>
        </div>
      </div>
    </footer>
  );
}
