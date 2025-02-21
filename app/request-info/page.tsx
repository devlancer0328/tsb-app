"use client";

import { RequestInfoForm } from "@/components/shared/request-info-form";
import { Card } from "@/components/ui/card";

export default function RequestInfoPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Request Information</h1>
          <p className="text-lg text-muted-foreground">
            Submit your questions or request detailed information about our
            services
          </p>
        </div>

        <Card className="p-6">
          <RequestInfoForm />
        </Card>
      </div>
    </div>
  );
}
