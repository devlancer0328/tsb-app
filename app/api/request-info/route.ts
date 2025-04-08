import { NextRequest, NextResponse } from "next/server";
import sendMail from "@/utils/sendEmail"

export async function POST(req: NextRequest) {
    try {
        const {
            firstName,
            lastName,
            association,
            email,
            phone,
            electionServices,
            evoting,
            consulting,
            other,
            message, } = await req.json();

        let services = [];
        electionServices ? services.push("electionServices") : "";
        evoting ? services.push("evoting") : "";
        consulting ? services.push("consulting") : "";
        other ? services.push("other") : "";

        const dynamicTemplateData = {
            firstName,
            lastName,
            association,
            email,
            phone,
            services,
            comments: message,
        }

        sendMail("Request Information Alert", "d-605c712d8bfb42dd99946496c2772fdd", dynamicTemplateData);

        return NextResponse.json({ email }, { status: 200 });
    } catch {
        return NextResponse.json({ errorMessage: 'Internal Server Error' }, {
            status: 500
        });
    }
}