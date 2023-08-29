import sendgrid from "@sendgrid/mail";

sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

export default async function sendEmail({ to, subject, html }) {
  const msg = {
    to,
    from: process.env.SENDGRID_FROM_EMAIL,
    subject,
    html,
  };
  await sgMail.send(msg);
}
