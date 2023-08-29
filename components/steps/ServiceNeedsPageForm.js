import { useState, useEffect } from "react";
import { Box, Heading, Text, GridItem, ChakraProvider } from "@chakra-ui/react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import GridWrapper from "../form/shared/GridWrapper";
import HeaderWrap from "../content/HeaderWrap";
import CGUBanner from "../content/CGUBanner";
import HelpModal from "../form/shared/HelpModal";
import RadioCardGroup from "../form/fields/RadioCardGroup";
import RadioButtonGroup from "../form/fields/RadioButtonGroup";
import CheckboxButtonGroup from "../form/fields/CheckboxButtonGroup";
import Business from "../icons/Business";
import Personal from "../icons/Personal";
import { useSelector, useDispatch } from "react-redux";
import { NextButton } from "../form/shared/Buttons";
import { update } from "../../store";

const coverTypeOptions = [
  { value: "Business", iconComponent: <Business /> },
  { value: "Personal", iconComponent: <Personal /> },
];
const businessTypeOptions = [
  "Communication services",
  "Construction",
  "Education",
  "Finance and Insurance",
  "Health and Community services",
  "Manufacturing",
  "Personal and other services",
  "Property and Business services",
  "Retail Trade",
  "Wholesale Trade",
  "My industry isn't listed here",
];
const employeeCountOptions = ["0", "1-20", "21-50", "51-100", "100+"];
const brokerHelpBusinessOptions = [
  "I am a new business. I don’t know what insurance cover I need.",
  "My business is expanding. Do I have the right insurance for my needs?",
  "I currently manage my own insurances. Am I adequately covered?",
];
const brokerHelpPersonalOptions = [
  "I don’t know what insurance cover I need.",
  "Do I have the right insurance for my needs?",
  "Am I adequately covered?",
];

const ServiceNeedsPageForm = ({ onNextStep }) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const [isDisabled, setIsDisabled] = useState(user.cover_type == "");
  useEffect(() => {
    window.parent.postMessage('page3',"*");
  }, []);
  const handleCoverTypeChange = (e) => {
    // Reset cover question answers
    setIsDisabled(false);
    dispatch(update({ property: "business_type", value: "" }));
    dispatch(update({ property: "employee_count", value: "" }));
    dispatch(update({ property: "broker_help", value: [] }));
    dispatch(update({ property: "insurance_type", value: [] }));
    // Change conditional question components
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onNextStep();
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <GridWrapper>
          <GridItem
            gridColumn={{
              base: "col-start / span 6",
              md: "3 / span 8",
              lg: "3 / span 9",
            }}
           pb={[12, 12, 20]}
            mb={12}
          >
            {user.cover_type && user.cover_type == "Business" && (
              <>
                <Carousel infiniteLoop>
                  <Box mt={12}>
                    <Heading as="h3" size="h3" className="hero-h2">
                      What industry is your business in?
                    </Heading>
                    <Text mt={4} textStyle="helperText" className="hero-text">
                      Select from one of the following common industries. If your
                      industry isn&apos;t listed, please select &quot;My industry
                      isn&apos;t listed here&quot;.
                    </Text>
                    <RadioButtonGroup
                      options={businessTypeOptions}
                      groupName="business_type"
                      groupSX={{
                        gridTemplateColumns: [
                          "1fr 1fr 1fr",
                          "1fr 1fr 1fr",
                          "1fr 1fr 1fr",
                          "1fr 1fr 1fr",
                          "1fr 1fr",
                        ],
                        gridGap: 3,
                        mt: 2,
                      }}
                    />{" "}
                  </Box>
                  <Box mt={12}>
                    <Heading as="h3" size="h3" className="hero-h2">
                      How many employees does your business have?
                    </Heading>
                    <RadioButtonGroup
                      options={employeeCountOptions}
                      groupName="employee_count"
                      groupSX={{
                        gridTemplateColumns: [
                          "1fr",
                          "1fr",
                          "1fr 1fr",
                          "1fr 1fr 1fr",
                        ],
                        gridGap: 3,
                        mt: 2,
                      }}
                    />
                  </Box>
                  <Box mt={12}>
                    <Heading as="h3" size="h3" className="hero-h2">
                      What would you like a broker to help you with?
                    </Heading>
                    <Text mt={4} textStyle="helperText" className="hero-text">
                      Select as many of the options that apply to you
                    </Text>
                    <CheckboxButtonGroup
                      options={brokerHelpBusinessOptions}
                      groupName="broker_help"
                      groupSX={{
                        gridTemplateColumns: ["1fr", "1fr", "1fr", "1fr 1fr"],
                        gridGap: 3,
                        mt: 2,
                      }}
                      itemSX={{
                        maxWidth: "none",
                      }}
                      labelH={["80px", "", "60px", "52px"]}
                    />
                  </Box>
                </Carousel>
              </>
            )}
            {user.cover_type && user.cover_type == "Personal" && (
              <Box mt={12}>
                <Heading as="h3" size="h3" className="hero-h2">
                  What would you like a broker to help you with?
                </Heading>
                <Text mt={4} textStyle="helperText" className="hero-text">
                  Select as many of the options that apply to you
                </Text>
                <CheckboxButtonGroup
                  options={brokerHelpPersonalOptions}
                  groupName="broker_help"
                  groupSX={{
                    gridTemplateColumns: ["1fr"],
                    gridGap: 3,
                    mt: 8,
                  }}
                  itemSX={{
                    maxWidth: "none",
                  }}
                  labelH={["80px", "", "60px", "52px"]}
                />
              </Box>
            )}
            {!isDisabled && (
              <div className="hero-next-btn">
                <NextButton
                  mt={2}
                  type="submit"
                  isDisabled={isDisabled}
                  onClick={onNextStep}
                >
                  Next
                </NextButton>
              </div>
            )}
          </GridItem>
        </GridWrapper>
      </form>
      {/* <CGUBanner /> */}
    </>
  );
};

export default ServiceNeedsPageForm;
