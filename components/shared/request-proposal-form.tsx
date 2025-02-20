"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { toast } from "@/components/ui/use-toast"

export function RequestProposalForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000))

    toast({
      title: "Proposal request submitted",
      description: "We'll prepare your custom proposal and get back to you soon.",
    })

    setIsSubmitting(false)
    event.currentTarget.reset()
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="association-name">Association Name</Label>
          <Input id="association-name" required />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="contact-name">Contact Name</Label>
            <Input id="contact-name" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="position">Position in Association</Label>
            <Input id="position" required />
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
          <Label htmlFor="units">Number of Units</Label>
          <Input id="units" type="number" required />
        </div>

        <div className="space-y-2">
          <Label htmlFor="election-type">Type of Election</Label>
          <Select required>
            <SelectTrigger>
              <SelectValue placeholder="Select election type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="annual">Annual Board Election</SelectItem>
              <SelectItem value="recall">Recall Election</SelectItem>
              <SelectItem value="special">Special Assessment</SelectItem>
              <SelectItem value="bylaws">Bylaws Amendment</SelectItem>
              <SelectItem value="other">Other</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="details">Additional Details</Label>
          <Textarea
            id="details"
            placeholder="Please provide any additional information about your election needs"
            className="min-h-[100px]"
          />
        </div>
      </div>

      <Button type="submit" className="w-full" disabled={isSubmitting}>
        {isSubmitting ? "Submitting..." : "Submit Request"}
      </Button>
    </form>
  )
}

