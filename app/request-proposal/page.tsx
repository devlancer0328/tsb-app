import { RequestProposalForm } from "@/components/shared/request-proposal-form"
import { Card } from "@/components/ui/card"

export default function RequestProposalPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Request a Proposal</h1>
          <p className="text-lg text-muted-foreground">
            Fill out the form below to receive a customized proposal for your association's election needs
          </p>
        </div>

        <Card className="p-6">
          <RequestProposalForm />
        </Card>
      </div>
    </div>
  )
}

