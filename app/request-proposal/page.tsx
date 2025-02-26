"use client";

import { RequestProposalForm } from "@/components/shared/request-proposal-form";
import { Card } from "@/components/ui/card";

export default function RequestProposalPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:px-0">
      <div className="max-w-9xl mx-auto mt-[160px]">
        <div className="flex flex-col gap-4">
          <span className="text-center text-2xl md:text-5xl font-bold">
            Request a <span className="text-[#00B3EA]">Proposal</span>
          </span>
          <span className="text-base md:text-lg text-gray-600 text-center">
            Get a customized election solution tailored to your needs. Request a
            proposal <br /> today and let us handle the process with security
            and transparency.
          </span>
        </div>

        <RequestProposalForm />
      </div>
    </div>
  );
}
