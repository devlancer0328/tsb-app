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
import Image from "next/image";
import RequestHeroImg from "@/app/assets/img/request-hero.png";
import axios from "axios"

export function RequestProposalForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const [dueDate, setDueDate] = useState<Date>();
  const [urgency, setUrgency] = useState<string>();
  const [description, setDescription] = useState<string>();
  const [associationName, setAssociationName] = useState<string>();
  const [companyName, setCompanyName] = useState<string>();
  const [contactName, setContactName] = useState<string>();
  const [email, setEmail] = useState<string>();
  const [phone, setPhone] = useState<string>();
  const [associationAddress, setAssociationAddress] = useState<string>();
  const [membershipMeetingDate, setMembershipMeetingDate] = useState<string>();
  const [numberOfUnits, setNumberOfUnits] = useState<string>();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    try {
      setIsSubmitting(true);

      const response = await axios.post(`/api/request-proposal`, {
        selectedService,
        urgency,
        dueDate,
        description,
        associationName,
        companyName,
        contactName,
        email,
        phone,
        associationAddress,
        membershipMeetingDate,
        numberOfUnits
      });

      if (response.status === 200) {
        toast({
          title: "Proposal request submitted",
          description:
            "We'll prepare your custom proposal and get back to you soon.",
        });

        // Clear all form state values
        setSelectedService(null);
        setDueDate(undefined);
        setUrgency(undefined);
        setDescription(undefined);
        setAssociationName(undefined);
        setCompanyName(undefined);
        setContactName(undefined);
        setEmail(undefined);
        setPhone(undefined);
        setAssociationAddress(undefined);
        setMembershipMeetingDate(undefined);
        setNumberOfUnits(undefined);
      }
    } catch (err) {
      console.log(err)
    } finally {
      setIsSubmitting(false);
    }

  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6 mt-4">
      <div className="space-y-4">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div className="flex flex-col gap-4 md:pr-4 bg-[#EDFAFF] p-6 rounded-lg justify-center">
            <div className="grid grid-rows-1 gap-8">
              <div className="space-y-2">
                <Label htmlFor="services" className="text-xl font-bold">
                  What services may we assist you with?{" "}
                  <span className="text-red-600">*</span>
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
                    <Label htmlFor="election-services" className="text-lg">
                      Annual Meeting Elections
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="evoting" id="evoting" />
                    <Label htmlFor="evoting" className="text-lg">
                      Amendment to Governing Documents
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="consulting" id="consulting" />
                    <Label htmlFor="consulting" className="text-lg">
                      Special Assessment Approval
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="approval" id="approval" />
                    <Label htmlFor="approval" className="text-lg">
                      Approval of Increase in Asessments
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="recall" id="recall" />
                    <Label htmlFor="recall" className="text-lg">
                      Recall of the Board
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="other" id="other" />
                    <Label htmlFor="other" className="text-lg">
                      Other
                    </Label>
                  </div>
                </RadioGroup>
              </div>
              <div className="flex flex-col md:flex-row gap-4">
                <div className="space-y-2">
                  <Label
                    htmlFor="association-name"
                    className="text-lg text-bold"
                  >
                    How urgent is your request{" "}
                    <span className="text-red-600">*</span>
                  </Label>
                  <Select required defaultValue="low" onValueChange={setUrgency}>
                    <SelectTrigger className="h-10 bg-white">
                      <SelectValue placeholder="Select urgency" />
                    </SelectTrigger>
                    <SelectContent className="bg-white">
                      <SelectItem value="low">
                        <span className="text-lg">Low</span>
                      </SelectItem>
                      <SelectItem value="medium">
                        <span className="text-lg">Medium</span>
                      </SelectItem>
                      <SelectItem value="high">
                        <span className="text-lg">High</span>
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="due-date" className="text-lg text-bold">
                    Due Date
                  </Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className="w-full justify-start text-left font-normal h-10"
                      >
                        <CalendarIcon className="mr-2 h-8 w-8" />
                        {dueDate ? (
                          format(dueDate, "dd/MM/yyyy")
                        ) : (
                          <span className="text-lg">dd/mm/yyyy</span>
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
              <div className="space-y-2">
                <Label htmlFor="describe" className="text-lg text-bold">
                  Describe your project <span className="text-red-600">*</span>
                </Label>
                <Textarea
                  id="describe"
                  placeholder="Please provide any additional information about your project"
                  className="min-h-[150px] bg-white"
                  style={{ fontSize: "1rem" }}
                  onChange={(e) => setDescription(e.target.value)}
                  required
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4 bg-[#EDFAFF] p-6 rounded-lg">
            <div className="relative bg-gradient-to-r from-[#006584] to-[#00B3EA] rounded-lg h-[140px] flex flex-row justify-between items-center pl-12">
              <div className="flex flex-col gap-2 items-center md:items-start">
                <span className="text-[#FAF603] text-2xl font-bold">
                  Simplify Your Elections
                </span>
                <span className="text-white text-2xl font-bold">
                  Contact us Today!
                </span>
              </div>
              <Image
                src={RequestHeroImg}
                alt="Request Hero"
                width={350}
                height={350}
                className="absolute right-0 bottom-0 object-cover hidden md:block"
              />
            </div>
            <Label htmlFor="services" className="text-2xl font-regular">
              Tell us about you
            </Label>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label
                  htmlFor="association-name"
                  className="text-base font-regular"
                >
                  Association Name
                </Label>
                <Input
                  id="association-name"
                  required
                  className="bg-white h-12"
                  placeholder="Enter your Association Name"
                  onChange={(e) => setAssociationName(e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label
                  htmlFor="management-company-name"
                  className="text-base font-regular"
                >
                  Management Company Name
                </Label>
                <Input
                  id="management-company-name"
                  required
                  className="bg-white h-12"
                  placeholder="Enter your company Name"
                  onChange={(e) => setCompanyName(e.target.value)}
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label
                  htmlFor="contact-name"
                  className="text-base font-regular"
                >
                  First and Last Name
                </Label>
                <Input
                  id="contact-name"
                  required
                  className="bg-white h-12"
                  placeholder="Enter your First and Last Name"
                  onChange={(e) => setContactName(e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email" className="text-base font-regular">
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  required
                  className="bg-white h-12"
                  placeholder="Enter your Email"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="phone" className="text-base font-regular">
                  Phone
                </Label>
                <Input
                  id="phone"
                  type="tel"
                  required
                  className="bg-white h-12"
                  placeholder="Enter your Phone Number"
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label
                  htmlFor="association-address"
                  className="text-base font-regular"
                >
                  Association Address
                </Label>
                <Input
                  id="association-address"
                  required
                  className="bg-white h-12"
                  placeholder="Enter your Association Address"
                  onChange={(e) => setAssociationAddress(e.target.value)}
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label
                  htmlFor="membership-meeting-date"
                  className="text-base font-regular"
                >
                  Membership Meeting Date
                </Label>
                <Input
                  id="membership-meeting-date"
                  required
                  className="bg-white h-12"
                  placeholder="Enter your Membership Meeting Date"
                  onChange={(e) => setMembershipMeetingDate(e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="units" className="text-base font-regular">
                  Number of Units
                </Label>
                <Input
                  id="units"
                  type="number"
                  required
                  className="bg-white h-12"
                  placeholder="Enter your Number of Units"
                  onChange={(e) => setNumberOfUnits(e.target.value)}
                />
              </div>
            </div>

            <Button
              type="submit"
              className="w-full bg-[#0093C0] text-white h-12 text-lg font-bold"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Submitting..." : "Submit Request"}
            </Button>
          </div>
        </div>
      </div>
    </form>
  );
}