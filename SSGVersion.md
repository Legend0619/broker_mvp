If your `submit.js` function is hosted elsewhere as a Drupal-hosted API endpoint, you'll need to modify your NextJS project to make HTTP requests to that endpoint for sending the emails. Here's what you need to do:

1. Install the `axios` package: Axios is a popular JavaScript library for making HTTP requests. In your NextJS project, install the `axios` package by running the following command in your project's root directory:

   ```
   npm install axios
   ```

2. Update your code to use Axios for making HTTP requests to the Drupal-hosted API endpoint. Modify your code as follows:

   ```javascript
   import axios from "axios";

   // Update the endpoint URL with the actual URL of your Drupal-hosted API endpoint
   const API_ENDPOINT = "https://example.com/api/submit";

   // ...

   try {
     const ID = generateRandomId();
     const customerEmail = testCustomerEmail(ID, emailData);
     const brokerEmail = testBrokerEmail(ID, emailData);

     // Make HTTP requests to the Drupal-hosted API endpoint
     await axios.post(API_ENDPOINT, {
       customerEmail,
       brokerEmail,
     });

     res.status(200).json({ message: "Email sent successfully" });
   } catch (error) {
     console.error("Error sending email", error);
     res.status(500).json({ message: "Error sending email", error: error });
   }
   ```

   In this code, we're using Axios to make a POST request to the Drupal-hosted API endpoint (`API_ENDPOINT`) with the customer and broker email data. Adjust the `API_ENDPOINT` variable to match the actual URL of your Drupal-hosted API endpoint.

   Note that we're sending the `customerEmail` and `brokerEmail` as separate objects in the POST request payload. You can modify your Drupal API endpoint to expect this structure and extract the necessary data from the request body.

   Also, make sure to handle the response from the Drupal API endpoint appropriately based on its expected response format.

3. Deploy your NextJS project: After making these changes, rebuild and redeploy your NextJS project to ensure that the updated code is in effect.

The code at the Drupal-hosted API endpoint would handle the incoming request from your NextJS project and perform the necessary processing to send the emails via SendGrid. Here's an example of how the code at the endpoint might look:

```php
<?php

use \SendGrid\Mail\Mail;

// Extract the customerEmail and brokerEmail from the request body
$customerEmail = $_POST['customerEmail'];
$brokerEmail = $_POST['brokerEmail'];

// Create SendGrid API key
$sendgridApiKey = "YOUR_SENDGRID_API_KEY";

// Instantiate SendGrid object
$sendgrid = new \SendGrid($sendgridApiKey);

try {
    // Send receipt email to customer
    $customerMail = new Mail();
    $customerMail->setFrom("libby@primemotive.com.au");
    $customerMail->setSubject("Thank you for your inquiry");
    $customerMail->addTo($customerEmail['to']);
    $customerMail->setHtml($customerEmail['html']);

    $sendgrid->send($customerMail);

    // Send lead email to client
    $brokerMail = new Mail();
    $brokerMail->setFrom("libby@primemotive.com.au");
    $brokerMail->setSubject("New lead from CGU Broker Lead Tool");
    $brokerMail->addTo($brokerEmail['to']);
    $brokerMail->setHtml($brokerEmail['html']);

    $sendgrid->send($brokerMail);

    // Send success response
    http_response_code(200);
    echo json_encode(['message' => 'Email sent successfully']);
} catch (Exception $e) {
    // Send error response
    http_response_code(500);
    echo json_encode(['message' => 'Error sending email', 'error' => $e->getMessage()]);
}
```

In this example, we assume that you have the SendGrid PHP library installed and set up in your Drupal project. The code receives the `customerEmail` and `brokerEmail` data from the request body sent by your NextJS project.

The code then creates SendGrid `Mail` objects and sets the necessary properties, such as the sender, recipient, subject, and HTML content. It uses the SendGrid library to send the emails.

If the email sending is successful, it sends a success response with an HTTP status code of 200 and a JSON response indicating that the email was sent successfully. If an error occurs during email sending, it sends an error response with an HTTP status code of 500 and a JSON response containing an error message.

Remember to replace `"YOUR_SENDGRID_API_KEY"` with your actual SendGrid API key in the code.
Note: The above code is a basic example to illustrate the concept.
