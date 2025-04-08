import sgMail from '@sendgrid/mail'

interface EmailTemplateData {
    [key: string]: string | number | boolean | null | object | Array<EmailTemplateData> | EmailTemplateData;
}

async function sendMail(subject: string, templateId: string, dynamicTemplateData: EmailTemplateData): Promise<void> {

    const apiKey = process.env.SENDGRID_KEY;
    if (!apiKey) throw new Error('SENDGRID_KEY is not defined');
    sgMail.setApiKey(apiKey)

    const msg = {
        to: "joshua@thesecretballot.com",
        from: "joshua@thesecretballot.com",
        subject: subject,
        templateId: templateId,
        dynamicTemplateData: dynamicTemplateData
    };

    sgMail
        .send(msg)
        .then(() => {
            console.log(`Email sent successfully.`);
        })
        .catch((error) => {
            console.error(`Email failed to be sent. Error: ${error}`);
        });

}

export default sendMail;