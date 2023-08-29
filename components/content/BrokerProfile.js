import React from "react";
import {
  Flex,
  Heading,
  Box,
  Text,
  Button,
  useDisclosure,
  useMediaQuery,
  Collapse,
} from "@chakra-ui/react";
import { NextButton } from "../form/shared/Buttons";
import TickCircle from "../icons/TickCircle";
// import IDCardCircle from "../icons/IDCardCircle";
// import AwardCircle from "../icons/AwardCircle";
import MapPin from "../icons/MapPin";
import RadiusPin from "../icons/RadiusPin";
import { useSelector, useDispatch } from "react-redux";
import { update } from "../../store";
import { getDistanceBetween } from "../../util/getDistanceBetween";

const AboutUsAccordion = ({ children }) => {
  const [isMediumPlus] = useMediaQuery("(min-width: 48em)");
  const { isOpen = isMediumPlus, onToggle, getButtonProps } = useDisclosure();
  const buttonProps = getButtonProps();
  return (
    <>
      <Button
        py={{ base: 2, md: 4 }}
        px={{ base: 2, md: 4 }}
        border="none"
        bg="grey.100"
        fontWeight="bold"
        fontSize="16"
        fontFamily="body"
        textTransform="none"
        pointerEvents={isMediumPlus ? "none" : "auto"}
        // textTransform="none"
        // font
        // fontFamily="body"
        color="secondary.300"
        justifyContent="space-between"
        _hover={{ bg: "grey.100" }}
        _active={{ bg: "grey.200" }}
        {...buttonProps}
        onClick={onToggle}
        tabIndex={isMediumPlus ? -1 : 0}
      >
        About us
        {!isMediumPlus && (
          <Box transform={isOpen ? "scale(1)" : "scale(-1)"} mr="2">
            <svg
              width="17"
              height="10"
              viewBox="0 0 17 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17 1.50246L15.4966 -0.000976628L13.9942 1.50246L13.7041 1.79359L8.5 6.99665L3.00475 1.50246L1.50237 -0.00097724L-6.57173e-08 1.50246L8.49894 10.0014L8.50106 10.0014L17 1.50246Z"
                fill="#484B61"
              />
            </svg>
          </Box>
        )}
      </Button>
      {isMediumPlus ? children : <Collapse in={isOpen}>{children}</Collapse>}
    </>
  );
};
function BrokerProfile({ broker, onClick }) {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const postcodes = useSelector((state) => state.postcodes);
  const distance = getDistanceBetween(user["postcode"], broker, postcodes.data);
  const handleGoToForm = () => {
    window.parent.postMessage('requestcontact',"*");
    dispatch(update({ property: "broker", value: broker }));
    onClick(broker);
  };
  return (
    <Box>
      <Flex
        borderWidth="1px"
        borderStyle="solid"
        borderColor={"navy.10"}
        className="broker-profile-box"
        direction={{ base: "column", md: "row" }}
        justify={{ base: "center", md: "space-between" }}
      >
        <Flex
          direction="column"
          pt={{ base: 1, md: 1 }}
          pb={{ base: 2, md: 3 }}
          px={{ base: 4, md: 6 }}
          h="auto"
        >
          <Heading className="hero-h2" as="h2" size="h4" fontSize="20px" mb={4}>
            {broker.title}
          </Heading>
          <Flex direction={{ base: "column", sm: "row" }}>
            <Flex
              bg={"grey.50"}
              px={3}
              justifyContent="flex-start"
              width="max-content"
              mb={2}
            >
              <Flex className="map-pin-box">
                <MapPin />
                <Text
                  textTransform="uppercase"
                  fontWeight="700"
                  fontSize="14"
                  color="secondary.300"
                  ml="1"
                  className="hero-text"
                >
                  {broker.location.map((state, index) => (
                    <React.Fragment key={state}>
                      {state}
                      {index !== broker.location.length - 1 && ", "}
                    </React.Fragment>
                  ))}
                </Text>
              </Flex>
            </Flex>
            {/* <Flex
              px={3}
              py={1}
              justifyContent="flex-start"
              width="max-content"
              mb={4}
            >
              <Flex>
                <RadiusPin />
                <Text
                  textTransform="uppercase"
                  fontWeight="700"
                  fontSize="14"
                  color="secondary.300"
                  ml="1"
                >
                  {distance < 5 && "Within 5KM"}
                  {distance >= 5 && distance < 10 && "Within 10KM"}
                  {distance >= 10 && distance < 25 && "Within 25KM"}
                  {distance >= 25 && distance < 50 && "Within 50KM"}
                  {distance >= 50 && distance < 75 && "Within 75KM"}
                  {distance >= 75 && distance < 100 && "Within 100KM"}
                  {distance >= 100 && "100KM +"}
                </Text>
              </Flex>
            </Flex> */}
          </Flex>
          <Text mb={{ base: 2, md: 4 }} className="hero-text">{broker.description}</Text>
          <Flex
            mb={{ base: 2, md: "0" }}
            mt={{ base: 4, md: "auto" }}
            direction={{ base: "column", sm: "row", md: "column", lg: "row" }}
          >
            <NextButton
              data-tracking={`link-click:broker${broker.title.replace(
                /\s+/g,
                ""
              )}ContactForm`}
              onClick={() => {
                handleGoToForm(broker);
              }}
            >
              Request contact
            </NextButton>
            <NextButton
              as="a"
              data-tracking={`link-click:broker${broker.title.replace(
                /\s+/g,
                ""
              )}Website`}
              href={broker.website}
              target="_blank"
              ml={{ base: 0, sm: "4", md: 0, lg: "4" }}
              mt={{ base: 2, sm: 0, md: 2, lg: 0 }}
            >
              Website
            </NextButton>
          </Flex>
        </Flex>
        {/* Post MVP Version */}
        {/* <Flex
          borderLeftWidth="1px"
          borderLeftStyle="solid"
          borderLeftColor={"gray.100"}
          direction="column"
          flex={{ md: "1 0 280px", lg: "0 0 380px" }}
          bg="grey.50"
        >
          <AboutUsAccordion>
            {broker.about_us_1 && (
              <Flex p={{ base: 2, md: 4 }} alignItems="center">
                {" "}
                <Box mr={"12px"}>
                  {" "}
                  <IDCardCircle />
                </Box>
                {broker.about_us_1}
              </Flex>
            )}
            {broker.about_us_2 && (
              <Flex
                p={{ base: 2, md: 4 }}
                alignItems="center"
                borderTopWidth="1px"
                borderTopStyle="solid"
                borderTopColor={"gray.100"}
              >
                {" "}
                <Box mr={"12px"}>
                  <AwardCircle />
                </Box>
                {broker.about_us_2}
              </Flex>
            )}
            <Text
              as="h4"
              py={{ base: 2, md: 4 }}
              px={{ base: 2, md: 4 }}
              bg="secondary.50"
              textStyle="radioButton"
              color="secondary.300"
            >
              Expertise
            </Text>
            {broker.expertise_1 && (
              <Flex p={{ base: 2, md: 4 }} alignItems="center">
                {broker.expertise_1}
              </Flex>
            )}
            {broker.expertise_2 && (
              <Flex
                p={{ base: 2, md: 4 }}
                alignItems="center"
                borderTopWidth="1px"
                borderTopStyle="solid"
                borderTopColor={"gray.100"}
              >
                {broker.expertise_2}
              </Flex>
            )}{" "}
            {broker.expertise_3 && (
              <Flex
                p={{ base: 2, md: 4 }}
                alignItems="center"
                borderTopWidth="1px"
                borderTopStyle="solid"
                borderTopColor={"gray.100"}
              >
                {broker.expertise_3}
              </Flex>
            )}
          </AboutUsAccordion>
        </Flex> */}
      </Flex>
    </Box>
  );
}

export default BrokerProfile;
