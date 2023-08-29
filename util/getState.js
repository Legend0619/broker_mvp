export const getState = (userPostcode, postcodes) => {
  const userPostcodeData = postcodes.filter(
    (postcode) => postcode.postcode == userPostcode
  );
  return userPostcodeData[0] ? userPostcodeData[0].state : "No data";
};
