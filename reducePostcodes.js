const fs = require("fs");
const { ausPostcodes } = require("../australian_postcodes.js");

const filterPostcodes = (ausPostcodes) => {
  const newObject = ausPostcodes.map((item) => {
    let object = {
      postcode: item.postcode,
      state: item.state,
      lat: item.lat,
      long: item.long,
    };
    return object;
  });
  return newObject;
};

const filtered = filterPostcodes(ausPostcodes);
// Step 4: Convert JSON data to a JavaScript object
function convertToJSObject(jsonData) {
  const jsObject = `const ausPostcodes = ${JSON.stringify(
    filtered,
    null,
    2
  )};\n\nmodule.exports = { ausPostcodes };`;
  return jsObject;
}

fs.writeFile(
  "./public/data/postcodeData.js",
  convertToJSObject(filtered),
  (err) => {
    if (err) {
      console.error(err);
    }
  }
);
