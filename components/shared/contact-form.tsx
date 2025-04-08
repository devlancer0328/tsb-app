"use client";
import type React from "react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/components/ui/use-toast";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import axios from "axios"

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [information, setInformation] = useState('voting-packet');
  const [message, setMessage] = useState('');

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    try {
      setIsSubmitting(true);
      const response = await axios.post(`/api/contact`, {
        fullName,
        email,
        phone,
        information,
        message
      });
      if (response.status === 200) {
        toast({
          title: "Message sent",
          description: "We'll get back to you as soon as possible.",
        });

        // Clear all form fields after successful submission
        setFullName('');
        setEmail('');
        setPhone('');
        setInformation('voting-packet');
        setMessage('');
      }
    } catch (error) {
      console.log(error)
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <div className="space-y-8">
        <div className="space-y-4">
          <Label htmlFor="full-name" className="text-xl font-regular">
            Full Name
          </Label>
          <Input
            id="full-name"
            required
            className="text-xl font-regular h-14 bg-gray-100"
            style={{ fontSize: "1.2rem" }}
            placeholder="Enter your name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
        </div>

        <div className="space-y-4">
          <Label htmlFor="email" className="text-xl font-regular">
            Email
          </Label>
          <Input
            id="email"
            type="email"
            required
            className="text-xl font-regular h-14 bg-gray-100"
            style={{ fontSize: "1.2rem" }}
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="space-y-4">
          <Label htmlFor="phone" className="text-xl font-regular">
            Phone
          </Label>
          <Input
            id="phone"
            type="tel"
            required
            className="text-xl font-regular h-14 bg-gray-100"
            style={{ fontSize: "1.2rem" }}
            placeholder="Enter your phone number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>

        <div className="space-y-4">
          <Label htmlFor="information" className="text-xl font-regular">
            Choose the information
          </Label>
          <Select required defaultValue="voting-packet" onValueChange={setInformation}>
            <SelectTrigger className="h-14 bg-white">
              <SelectValue placeholder="Select information" />
            </SelectTrigger>
            <SelectContent className="bg-white">
              <SelectItem value="voting-packet">
                <span className="text-lg">Your Voting Packet</span>
              </SelectItem>
              <SelectItem value="about-company">
                <span className="text-lg">About our Company</span>
              </SelectItem>
              <SelectItem value="general">
                <span className="text-lg">General Questions</span>
              </SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-4">
          <Label htmlFor="message" className="text-xl font-regular">
            Message
          </Label>
          <Textarea
            id="message"
            required
            className="bg-gray-100 min-h-32"
            placeholder="How can we help you?"
            style={{ fontSize: "1.2rem" }}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>
      </div>

      <Button
        type="submit"
        className="w-full h-14 text-xl font-regular"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Sending..." : "Submit"}
      </Button>
    </form>
  );
}
