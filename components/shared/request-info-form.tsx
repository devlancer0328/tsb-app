"use client";

import type React from "react";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";

import axios from "axios"

export function RequestInfoForm() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [association, setAssociation] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [electionServices, setElectionServices] = useState(false);
  const [evoting, setEvoting] = useState(false);
  const [consulting, setConsulting] = useState(false);
  const [other, setOther] = useState(false);
  const [message, setMessage] = useState('');

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    try {
      setIsSubmitting(true);
      const response = await axios.post(`/api/request-info`, {
        firstName,
        lastName,
        association,
        email,
        phone,
        electionServices,
        evoting,
        consulting,
        other,
        message,
      });
      if (response.status === 200) {
        toast({
          title: "Success",
          description: "We'll get back to you as soon as possible.",
        });
      }
    } catch (error) {
      console.log(error)
      toast({
        title: "Error",
        description: "There was a problem submitting your request. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }

  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="first-name">First name</Label>
            <Input id="first-name" required onChange={e => setFirstName(e.target.value)} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="last-name">Last name</Label>
            <Input id="last-name" required onChange={e => setLastName(e.target.value)} />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="association">Association Name (if applicable)</Label>
          <Input id="association" onChange={e => setAssociation(e.target.value)} />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" required onChange={e => setEmail(e.target.value)} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="phone">Phone</Label>
            <Input id="phone" type="tel" onChange={e => setPhone(e.target.value)} />
          </div>
        </div>

        <div className="space-y-2">
          <Label>I'm interested in:</Label>
          <div className="grid gap-2">
            <div className="flex items-center space-x-2">
              <Checkbox id="election-services" onCheckedChange={(checked) => setElectionServices(checked === true)} />
              <Label htmlFor="election-services">Election Services</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="evoting" onCheckedChange={(checked) => setEvoting(checked === true)} />
              <Label htmlFor="evoting">eVoting Platform</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="consulting" onCheckedChange={(checked) => setConsulting(checked === true)} />
              <Label htmlFor="consulting">Election Consulting</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="other" onCheckedChange={(checked) => setOther(checked === true)} />
              <Label htmlFor="other">Other Services</Label>
            </div>
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="message">Questions or Comments</Label>
          <Textarea
            id="message"
            required
            className="min-h-[150px]"
            placeholder="Please let us know what specific information you're looking for"
            onChange={e => setMessage(e.target.value)}
          />
        </div>
      </div>

      <Button type="submit" className="w-full" disabled={isSubmitting}>
        {isSubmitting ? "Submitting..." : "Submit Request"}
      </Button>
    </form>
  );
}