import { Card } from "@/components/ui/card";
import { ContactForm } from "@/components/shared/contact-form";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
        <p className="text-lg text-muted-foreground">
          Get in touch with our team for any questions or inquiries
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        <Card className="p-6 space-y-6">
          <div className="space-y-4">
            <div className="flex items-start space-x-3">
              <MapPin className="h-5 w-5 text-primary mt-1" />
              <div>
                <h3 className="font-medium">Address</h3>
                <p className="text-muted-foreground">
                  2522 Alpine Blvd. Alpine, CA 91901
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <Phone className="h-5 w-5 text-primary mt-1" />
              <div>
                <h3 className="font-medium">Phone</h3>
                <p className="text-muted-foreground">+1 (619) 322-6350</p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <Mail className="h-5 w-5 text-primary mt-1" />
              <div>
                <h3 className="font-medium">Email</h3>
                <p className="text-muted-foreground">
                  info@thesecretballot.com
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <Clock className="h-5 w-5 text-primary mt-1" />
              <div>
                <h3 className="font-medium">Business Hours</h3>
                <p className="text-muted-foreground">
                  Monday—Friday: 9:00AM–4:00PM
                </p>
              </div>
            </div>
          </div>

          <div className="aspect-video relative mt-6">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2!2d-116.7665!3d32.8351!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80d959b3a7979f85%3A0x7c2a7c6e0f858573!2s2522%20Alpine%20Blvd%2C%20Alpine%2C%20CA%2091901!5e0!3m2!1sen!2sus!4v1708471234567!5m2!1sen!2sus"
              className="absolute inset-0 w-full h-full rounded-md"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </Card>

        <Card className="p-6">
          <ContactForm />
        </Card>
      </div>
    </div>
  );
}
