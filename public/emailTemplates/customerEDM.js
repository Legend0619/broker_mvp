const customerEmailTemplate = `<!DOCTYPE html>
<html>
  <head>
    <title>Email Template</title>
    <style>
      body {
        font-family: Arial, sans-serif;
      }
    </style>
  </head>
  <body>
    <p>Dear {{data.lead_first_name}} {{data.lead_last_name}},</p>
    <p>Ref: {{ID}}</p>
    <p>Thank you for your inquiry. {{data.broker_title}} will be in touch with you soon.</p>
    <p>Here are the details you provided:</p>
    <p>Cover Type: {{data.lead_cover_type}}</p>
    <p>Business Type: {{data.lead_business_type}}</p>
    <p>Employee Count: {{data.lead_employee_count}}</p>
    <p>Insurance Type: {{data.lead_insurance_type}}</p>
    <p>Broker Help: {{data.lead_broker_help}}</p>
    <p>Location: {{data.lead_location}}</p>
    <p>Email: {{data.lead_email}}</p>
    <p>Phone: {{data.lead_phone}}</p>
    <p>Assistance Date: {{data.lead_assistance_date}}</p>
    <p>Contact Type: {{data.lead_contact_type}}</p>
    <p>Contact Time: {{data.lead_contact_time}}</p>
    <p>Message: {{data.lead_message}}</p>
    <p>Best regards,</p>
    <p>The CGU team</p>
  </body>
</html>`;

export default customerEmailTemplate;
