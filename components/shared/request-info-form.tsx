"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { toast } from "@/components/ui/use-toast"

export function RequestInfoForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000))

    toast({
      title: "Request submitted",
      description: "We'll send you the requested information shortly.",
    })

    setIsSubmitting(false)
    event.currentTarget.reset()
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="first-name">First name</Label>
            <Input id="first-name" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="last-name">Last name</Label>
            <Input id="last-name" required />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="association">Association Name (if applicable)</Label>
          <Input id="association" />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="phone">Phone</Label>
            <Input id="phone" type="tel" />
          </div>
        </div>

        <div className="space-y-2">
          <Label>I'm interested in:</Label>
          <div className="grid gap-2">
            <div className="flex items-center space-x-2">
              <Checkbox id="election-services" />
              <Label htmlFor="election-services">Election Services</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="evoting" />
              <Label htmlFor="evoting">eVoting Platform</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="consulting" />
              <Label htmlFor="consulting">Election Consulting</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="other" />
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
          />
        </div>
      </div>

      <Button type="submit" className="w-full" disabled={isSubmitting}>
        {isSubmitting ? "Submitting..." : "Submit Request"}
      </Button>
    </form>
  )
}

