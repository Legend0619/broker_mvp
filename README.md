# Broker Search Tool

A search tool for users to find local insurance brokers and request contact from a chosen broker.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/primemotive/cgu-broker-mvp.git
   ```

2. Navigate to the project directory:

   ```bash
   cd broker-search-tool
   ```

3. Install the dependencies:
   ```bash
   npm install
   ```

## Usage

Start the application:

```bash
npm run dev
```

- Open your web browser and visit http://localhost:3000.

- Use the search functionality to find local insurance brokers near your postcode.

- Select a broker and fill out the contact form to request contact from the chosen broker.

## Import Broker Data from CSV

To convert the CSV data to JSON and update it with postcode latitude and longitude, follow these steps:

Note: Make sure to have Node.js installed on your machine before running the script.

1. Install the necessary dependencies by running the following command:

   ```
   npm install
   ```

2. Export the broker data from spreadsheet as a csv file named `brokerData.csv` and add to `./public/data/`

3. Run the script using the following command:

   ```
   node importBrokers.js
   ```

4. The script will read the CSV file, convert it to JSON, update the JSON data with the postcode latitude and longitude, and save the updated JavaScript object to a js file called `brokerDataWithPostcodeCoordinates.js`

5. After the script finishes running, you should see a message indicating that the JavaScript object has been written to the output file.
