"use client";

import { RequestProposalForm } from "@/components/shared/request-proposal-form";
import { Card } from "@/components/ui/card";

export default function RequestProposalPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-9xl mx-auto">
        <div className=" mb-12">
          <div className="flex flex-row items-center gap-3 mb-8">
            <hr style={{ border: "3px solid #19b6da", width: "50px" }} />
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
              Request a Proposal
            </h2>
            <hr style={{ border: "3px solid #19b6da", width: "50px" }} />
          </div>
          <p className="text-lg text-muted-foreground">
            Fill out the form below to receive a customized proposal for your
            association's election needs
          </p>
        </div>

        <Card className="p-6">
          <RequestProposalForm />
        </Card>
      </div>
    </div>
  );
}
