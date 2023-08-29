const fs = require("fs");
const csv = require("csv-parser");
const { ausPostcodes } = require("./public/data/postcodeData.js");

// Step 1: Read the CSV file
function readCSV(filename) {
  return new Promise((resolve, reject) => {
    const results = [];
    fs.createReadStream(filename)
      .pipe(csv())
      .on("data", (data) => results.push(data))
      .on("end", () => resolve(results))
      .on("error", (error) => reject(error));
  });
}

// Step 2: Convert CSV data to JSON
function convertToJSON(data) {
  return JSON.stringify(data, null, 2);
}

// Step 3: Update JSON data with latitude and longitude
function updateJSONData(jsonData) {
  const brokers = JSON.parse(jsonData);

  for (let i = 0; i < brokers.length; i++) {
    const broker = brokers[i];
    const postcode = broker.postcode;
    const postcodeEntry = ausPostcodes.find(
      (entry) => entry.postcode === postcode
    );

    if (postcodeEntry) {
      broker.latitude = postcodeEntry.lat;
      broker.longitude = postcodeEntry.long;
    }
    broker.location = broker.location.split(", ").map((item) => item.trim());
  }

  return brokers;
}

// Step 4: Convert JSON data to a JavaScript object
function convertToJSObject(jsonData) {
  const jsObject = `export const brokerData = ${JSON.stringify(
    jsonData,
    null,
    2
  )};\n\nmodule.exports = brokerData;`;
  return jsObject;
}

// Step 5: Write JavaScript object to a file
function writeJSObjectToFile(data, filename) {
  fs.writeFileSync(filename, data);
  console.log(`JavaScript object written to ${filename}`);
}

// Usage example
readCSV("./public/data/brokerData.csv")
  .then((csvData) => {
    const jsonData = convertToJSON(csvData);
    const updatedJSONData = updateJSONData(jsonData);
    const jsObject = convertToJSObject(updatedJSONData);
    writeJSObjectToFile(
      jsObject,
      "./public/data/brokerDataWithPostcodeCoordinates.js"
    );
  })
  .catch((error) => {
    console.error("Error:", error);
  });
