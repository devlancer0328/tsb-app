import Link from "next/link";
import { MapPin, Phone, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-secondary mt-20 font-serif">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Contact Us</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-primary" />
                <span>2522 Alpine Blvd. Alpine, CA 91901</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-primary" />
                <span>+1 (619) 322-6350</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-primary" />
                <a
                  href="mailto:info@thesecretballot.com"
                  className="hover:text-primary transition-colors"
                >
                  info@thesecretballot.com
                </a>
              </div>
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Quick Links</h3>
            <nav className="space-y-2">
              <Link
                href="/services"
                className="block hover:text-primary transition-colors"
              >
                Services
              </Link>
              <Link
                href="/request-proposal"
                className="block hover:text-primary transition-colors"
              >
                Request Proposal
              </Link>
              <Link
                href="/faqs"
                className="block hover:text-primary transition-colors"
              >
                FAQs
              </Link>
              <Link
                href="/blog"
                className="block hover:text-primary transition-colors"
              >
                Blog
              </Link>
            </nav>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Hours</h3>
            <p>Monday—Friday: 9:00AM–4:00PM</p>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>
            © {new Date().getFullYear()} The Secret Ballot. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
