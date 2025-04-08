import { NextRequest, NextResponse } from "next/server";
import sendMail from "@/utils/sendEmail"

export async function POST(req: NextRequest) {
    try {
        const {
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
            numberOfUnits } = await req.json();

        const edtDate = new Date(dueDate).toLocaleString('en-US', {
            timeZone: 'America/New_York',
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
            hour: '2-digit',
            minute: '2-digit',
            hour12: true
        });

        const dynamicTemplateData = {
            service: selectedService,
            urgency,
            due_date: edtDate,
            description,
            association_name: associationName,
            management_company: companyName,
            contact_name: contactName,
            email,
            phone,
            association_address: associationAddress,
            meeting_date: membershipMeetingDate,
            units: numberOfUnits
        }

        sendMail("New Propsal Alert", "d-40dffbf956d0491eafcdc02c9525e8a7", dynamicTemplateData);


        return NextResponse.json({ email }, { status: 200 });
    } catch {
        return NextResponse.json({ errorMessage: 'Internal Server Error' }, {
            status: 500
        });
    }
}