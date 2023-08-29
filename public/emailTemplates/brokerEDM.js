const brokerEmailTemplate = `<!DOCTYPE html>
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
    <p>You have received a new lead from the CGU Broker Lead Tool:</p>
    <ul>
      <li>Ref: {{ID}}</li>
      <li>Cover Type: {{data.lead_cover_type}}</li>
      <li>Business Type: {{data.lead_business_type}}</li>
      <li>Employee Count: {{data.lead_employee_count}}</li>
      <li>Insurance Type: {{data.lead_insurance_type}}</li>
      <li>Broker Help: {{data.lead_broker_help}}</li>
      <li>Location: {{data.lead_location}}</li>
      <li>Email: {{data.lead_email}}</li>
      <li>Phone: {{data.lead_phone}}</li>
      <li>Assistance Date: {{data.lead_assistance_date}}</li>
      <li>Contact Type: {{data.lead_contact_type}}</li>
      <li>Contact Time: {{data.lead_contact_time}}</li>
      <li>Message: {{data.lead_message}}</li>
    </ul>
  </body>
</html>`;
export default brokerEmailTemplate;
