import getDistance from "geolib/es/getDistance";

export const getDistanceBetween = (userPostcode, broker, postcodes) => {
  const userPostcodeData = postcodes.filter(
    (postcode) => postcode.postcode == userPostcode
  );
  const brokerPostcodeData = postcodes.filter(
    (postcode) => postcode.postcode == broker.postcode
  );

  return userPostcodeData[0]
    ? parseFloat(
        getDistance(
          {
            latitude: userPostcodeData[0].lat,
            longitude: userPostcodeData[0].long,
          },
          {
            latitude: brokerPostcodeData[0].lat,
            longitude: brokerPostcodeData[0].long,
          }
        ) / 1000
      ).toFixed(0)
    : "No data";
};
