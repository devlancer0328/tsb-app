import { NextRequest, NextResponse } from "next/server";
import sendMail from "@/utils/sendEmail"

export async function POST(req: NextRequest) {
    try {
        const {
            fullName,
            email,
            phone,
            information,
            message } = await req.json();

        const dynamicTemplateData = {
            full_name: fullName,
            email,
            phone,
            information_type: information,
            message
        }

        sendMail("Election Assistance Request", "d-fc441a75aa244e1a808112ef0d15a9cd", dynamicTemplateData);

        return NextResponse.json({ email }, { status: 200 });
    } catch {
        return NextResponse.json({ errorMessage: 'Internal Server Error' }, {
            status: 500
        });
    }
}