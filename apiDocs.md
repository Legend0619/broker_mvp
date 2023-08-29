# API Documentation

## Overview

This API allows you to submit lead data to the Drupal system. The endpoint URL for submitting the data is `https://www.cgu.com.au/strive/jsonapi/custom/blt_email`.

## Data Required

The API expects the following data to be provided in the request body:

```json
{
  "ref_ID": "BSTABC123XYZ",
  "submission_date": "2023-06-06T02:30:22.720Z",
  "lead_cover_type": "Business",
  "lead_business_type": "Communication Services",
  "lead_employee_count": "1-20",
  "lead_insurance_type": "Building and Contents",
  "lead_broker_help": "I am a new business. I don’t know what insurance cover I need",
  "lead_location": "3001",
  "lead_first_name": "John",
  "lead_last_name": "Doe",
  "lead_email": "johndoe@example.com",
  "lead_phone": "1234567890",
  "lead_insurance_start_date": "01/01/2023",
  "lead_contact_type": "Phone",
  "lead_contact_time": "Anytime",
  "lead_message": "This is a sample message",
  "broker_title": "Cav Insure Pty Ltd",
  "broker_partner": "Resilium",
  "broker_inbox_email": "broker@example.com",
  "broker_email": "broker@example.com",
  "broker_website": "broker.com",
  "broker_phone": "9876543210"
}
```

### Data Fields

- `ref_ID` (string): Unique identifier for the lead. It should begin with "BST" followed by 10 random alphanumeric characters.
- `submission_date` (string): The date and time of lead submission in ISO 8601 format. It will be formatted as "DD/MM/YYYY" in the template.
- `lead_cover_type` (string): The type of cover for the lead.
- `lead_business_type` (string): The type of business for the lead.
- `lead_employee_count` (string): The count of employees for the lead's business.
- `lead_insurance_type` (string): The type of insurance for the lead.
- `lead_broker_help` (string): Information about the lead's need for broker help.
- `lead_location` (string): The location code for the lead.
- `lead_first_name` (string): The first name of the lead.
- `lead_last_name` (string): The last name of the lead.
- `lead_email` (string): The email address of the lead.
- `lead_phone` (string): The phone number of the lead.
- `lead_insurance_start_date` (string): The start date of the insurance in "DD/MM/YYYY" format.
- `lead_contact_type` (string): The preferred contact type for the lead.
- `lead_contact_time` (string): The preferred contact time for the lead.
- `lead_message` (string): A custom message from the lead.
- `broker_title` (string): The title of the broker.
- `broker_partner` (string): The partner of the broker.
- `broker_inbox_email` (string): The inbox email address of the broker.
- `broker_email` (string): The contact email address of the broker.
- `broker_website` (string): The website URL of the broker.
- `broker_phone` (string): The contact phone number of the broker.

## Generating UID

To generate a UID for the `ref_ID` field, you can use the following JavaScript function:

```javascript
const generateRandomId = () => {
  let result = "";
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  const charactersLength = characters.length;
  for (let i = 0; i < 10; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return "BST" + result;
};
```

Use the `generateRandomId` function to generate a random `ref_ID` before submitting the lead data.

## Submitting Lead Data

To submit lead data to the API, you can use the `fetch` function in JavaScript. Here's an example code snippet:

```javascript
const jsonData = JSON.stringify({
  ref_ID: generateRandomId(),
  submission_date: new Date().toISOString(),
  lead_cover_type: "Business",
  lead_business_type: "Communication Services",
  lead_employee_count: "1-20",
  lead_insurance_type: "Building and Contents",
  lead_broker_help:
    "I am a new business. I don’t know what insurance cover I need",
  lead_location: "3001",
  lead_first_name: "John",
  lead_last_name: "Doe",
  lead_email: "johndoe@example.com",
  lead_phone: "1234567890",
  lead_insurance_start_date: "01/01/2023",
  lead_contact_type: "Phone",
  lead_contact_time: "Anytime",
  lead_message: "This is a sample message",
  broker_title: "Cav Insure Pty Ltd",
  broker_partner: "Resilium",
  broker_inbox_email: "broker@example.com",
  broker_email: "broker@example.com",
  broker_website: "broker.com",
  broker_phone: "9876543210",
});

try {
  const res = await fetch(
    "https://www.cgu.com.au/strive/jsonapi/custom/blt_email",
    {
      body: jsonData,
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    }
  );

  if (res.type === "opaque") {
    console.log("Received opaque response. Cannot read data or status.");
  } else if (res.ok) {
    console.log("Lead submitted successfully!");
  } else {
    const errorData = await res.json();
    console.error("Failed to submit lead:", res.status, errorData);
  }
} catch (error) {
  console.error("An error occurred while submitting the lead:", error);
}
```

In this example, the jsonData object is created with the lead data, including a generated ref_ID using the generateRandomId function. The fetch function is used to send a POST request to the API endpoint with the JSON data in the request body. The Content-Type header is set to application/json.

After sending the request, the response is checked for different scenarios:

If the response type is "opaque", it means that the response is not readable, and a message is logged to indicate this. Additionally, the form submission status is updated, any existing errors are cleared, and the next step is dispatched.
If the response is successful (res.ok), the lead has been submitted successfully. The form submission status is updated, any existing errors are cleared, and the next step is dispatched.
If the response is not successful, an error has occurred. The error response is parsed as JSON data using await res.json(), and the error status and data are logged to the console. The form submission status is updated, and an error message is set to be displayed.
Make sure to include the generateRandomId function in your application code. You can customize the data values according to your requirements before submitting the lead data.
