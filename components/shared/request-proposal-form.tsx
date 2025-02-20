"use client";

import type React from "react";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "@/components/ui/use-toast";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Calendar } from "@/components/ui/calendar";
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

export function RequestProposalForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const [dueDate, setDueDate] = useState<Date>();

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);

    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: "Proposal request submitted",
      description:
        "We'll prepare your custom proposal and get back to you soon.",
    });

    setIsSubmitting(false);
    event.currentTarget.reset();
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-4">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div className="flex flex-col gap-4">
            <h2 className="text-2xl font-bold">
              Tell us about your project...
            </h2>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="services">
                  What services may we assist you with? *
                </Label>
                <RadioGroup
                  id="services"
                  onValueChange={setSelectedService}
                  required
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem
                      value="election-services"
                      id="election-services"
                    />
                    <Label htmlFor="election-services">
                      Annual Meeting Elections
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="evoting" id="evoting" />
                    <Label htmlFor="evoting">
                      Amendment to Governing Documents
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="consulting" id="consulting" />
                    <Label htmlFor="consulting">
                      Special Assessment Approval
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="other" id="other" />
                    <Label htmlFor="other">
                      Approval of Increase in Asessments
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="other" id="other" />
                    <Label htmlFor="other">Recall of the Board</Label>
                  </div>
                </RadioGroup>
              </div>
              <div className="space-y-2">
                <div className="space-y-2">
                  <Label htmlFor="association-name">
                    How urgent is your request *
                  </Label>
                  <Select required defaultValue="low">
                    <SelectTrigger>
                      <SelectValue placeholder="Select urgency" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="low">Low</SelectItem>
                      <SelectItem value="medium">Medium</SelectItem>
                      <SelectItem value="high">High</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="due-date">Due Date</Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className="w-full justify-start text-left font-normal"
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {dueDate ? (
                          format(dueDate, "dd/MM/yyyy")
                        ) : (
                          <span>Pick a date</span>
                        )}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0">
                      <Calendar
                        mode="single"
                        selected={dueDate}
                        onSelect={setDueDate}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                </div>
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="describe">Describe your project *</Label>
              <Textarea
                id="describe"
                placeholder="Please provide any additional information about your project"
                className="min-h-[100px]"
                required
              />
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <h2 className="text-2xl font-bold">Tell us about you...</h2>

            <div className="space-y-2">
              <Label htmlFor="association-name">Association Name</Label>
              <Input id="association-name" required />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="contact-name">First and Last Name</Label>
                <Input id="contact-name" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="management-company-name">
                  Management Company Name
                </Label>
                <Input id="management-company-name" required />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone</Label>
                <Input id="phone" type="tel" required />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="association-address">Association Address</Label>
              <Input id="association-address" required />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="membership-meeting-date">
                  Membership Meeting Date
                </Label>
                <Input id="membership-meeting-date" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="units">Number of Units</Label>
                <Input id="units" type="number" required />
              </div>
            </div>

            <Button type="submit" className="w-full" disabled={isSubmitting}>
              {isSubmitting ? "Submitting..." : "Submit Request"}
            </Button>
          </div>
        </div>
      </div>
    </form>
  );
}
