import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Script from "next/script";
// import { update } from "../../../store";
import Head from "next/head";
import Layout from "../layouts/layout";
import Footer from "../components/global/Footer";
import {
  Box,
  Heading,
  Image,
  Text,
  Flex,
  GridItem,
  Label,
} from "@chakra-ui/react";
import ReadTime from "../components/shared/ReadTime";
import { NextButton, PrevButton } from "../components/form/shared/Buttons";
import GridWrapper from "../components/form/shared/GridWrapper";
import NextLink from "next/link";
import InputPostcode from "../components/form/fields/InputPostcode";
import ProgressBar from "../components/global/ProgressBar";
import ResultsPage from "../components/steps/ResultsPage";
import ServiceNeedsPage from "../components/steps/ServiceNeedsPage";
import ServiceNeedsPageForm from "../components/steps/ServiceNeedsPageForm";
import ContactDetailsPage from "../components/steps/ContactDetailsPage";
import SuccessPage from "../components/steps/SuccessPage";
import { getDistanceBetween } from "../util/getDistanceBetween";
import {
  nextStep,
  prevStep,
  sortByDistance,
  setFormSubmitting,
  filterResults,
} from "../store";

export default function IndexPage() {
  const dispatch = useDispatch();
  const app = useSelector((state) => state.app);
  const user = useSelector((state) => state.user);
  const brokers = useSelector((state) => state.brokers);
  const postcodes = useSelector((state) => state.postcodes);
  const [postcode, setPostcode] = useState("");
  const [postcodeIsValid, setPostcodeIsValid] = useState(false);
  const [results, setResults] = useState([]);
  const [selectedResult, setSelectedResult] = useState(null);
  const [serviceNeeds, setServiceNeeds] = useState({});
  const [contactDetails, setContactDetails] = useState({});
  const [errors, setErrors] = useState({});

  const handlePostcodeSubmit = (event) => {
    event.preventDefault();
    
    // Submit postcode and retrieve results
    if (postcodeIsValid) {
      dispatch(
        filterResults({
          userPostcode: postcode,
          brokers: brokers,
          postcodes: postcodes.data,
        })
      );
      setResults(app.results);
    } else {
      setResults([]);
    }
    window.parent.postMessage('getstarted',"*");
    dispatch(nextStep());
  };

  const handlePostcodeChange = ({ value, isValid }) => {
    setPostcode(value); // Update the postcode state
    setPostcodeIsValid(isValid); // Update the isValid state
    // Use the postcode value to fetch the results and update the results state
  };

  const handleResultSelect = (result) => {
    // console.log(result);
    setSelectedResult(result);
    window.scrollTo(0, 0);
    dispatch(nextStep());
  };

  const handleServiceNeedsSubmit = (event) => {
    event.preventDefault();
    // Save service needs data
    window.scrollTo(0, 0);
    dispatch(nextStep());
  };

  // Generate a UID - Begins with "BST" followed by 10 random ALPHA characters
  const generateRandomId = () => {
    let result = "";
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    const charactersLength = characters.length;
    for (let i = 0; i < 10; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return "BST" + result;
  };

  const handleValidation = () => {
    let tempErrors = {};

    // Required fields
    if (
      !user.cover_type ||
      (user.cover_type !== "Business" && user.cover_type !== "Personal")
    ) {
      tempErrors["lead_cover_type"] = "Cover type is not selected";
    }
    if (!user.postcode) {
      tempErrors["lead_postcode"] = "Postcode location is missing";
    }
    if (!user.first_name) {
      tempErrors["lead_first_name"] = "Please provide your first name";
    }
    if (!user.last_name) {
      tempErrors["lead_last_name"] = "Please provide your last name";
    }
    if (!user.email) {
      tempErrors["lead_email"] = "Please provide your email address";
    }
    if (!user.phone) {
      tempErrors["lead_phone"] = "Please provide your phone number";
    }
    if (!user.insurance_start_date) {
      tempErrors["lead_insurance_start_date"] =
        "Please tell us when you need assistance by";
    }
    if (!user.contact_type) {
      tempErrors["lead_contact_type"] =
        "Please select a preferred contact method";
    }
    if (user.contact_type === "phone" && !user.contact_time) {
      tempErrors["lead_contact_time"] =
        "Please select a preferred contact time";
    }

    // Optional fields
    if (user.lead_business_type && user.lead_business_type.length <= 0) {
      tempErrors["lead_business_type"] = "Please select a business type";
    }
    if (user.lead_employee_count && user.lead_employee_count.length <= 0) {
      tempErrors["lead_employee_count"] = "Please select an employee count";
    }
    if (user.lead_insurance_type && user.lead_insurance_type.length <= 0) {
      tempErrors["lead_insurance_type"] = "Please select an insurance type";
    }
    if (user.lead_broker_help && user.lead_broker_help.length <= 0) {
      tempErrors["lead_broker_help"] =
        "Please tell us what you ould like the broker to help you with";
    }
    if (user.lead_message && user.lead_message.length <= 0) {
      tempErrors["lead_message"] =
        "Please give us more details in your enquiry";
    }

    // Filled by system
    if (!user.broker.title) {
      tempErrors["broker_title"] = true;
    }
    if (!user.broker.inbox) {
      tempErrors["broker_inbox"] = true;
    }
    if (!user.broker.email) {
      tempErrors["broker_email"] = true;
    }
    if (!user.broker.website) {
      tempErrors["broker_website"] = true;
    }
    if (!user.broker.phone) {
      tempErrors["broker_phone"] = true;
    }

    console.log("errors", tempErrors);

    // check if any error messages were added
    let isValid = Object.keys(tempErrors).length === 0;
    return {
      isValid,
      tempErrors,
    };
  };
  const [screenSize, setScreenSize] = useState({ width: 0, height: 0 });
  useEffect(() => {
    function updateScreenSize() {
      setScreenSize({ width: window.innerWidth, height: window.innerHeight });
    }

    // Add event listener to update screen size on resize
    window.addEventListener('resize', updateScreenSize);

    // Set initial screen size
    updateScreenSize();

    // Remove event listener on unmount
    return () => window.removeEventListener('resize', updateScreenSize);
  }, []);
  const handleContactDetailsSubmit = async (e) => {
  
    // Prevent the form from submitting normally
    e.preventDefault();
    dispatch(setFormSubmitting(true));
    // Validate the form fields
    let { isValid, formErrors } = handleValidation();
    setErrors({
      ...formErrors,
    });

    const refID = generateRandomId();
    const currentDate = new Date();

    let jsonData = JSON.stringify({
      ref_ID: refID,
      submission_date: currentDate,
      lead_cover_type: user.cover_type,
      lead_business_type: user.business_type,
      lead_employee_count: user.employee_count,
      lead_insurance_type: user.insurance_type,
      lead_broker_help: user.broker_help,
      lead_postcode: user.postcode,
      lead_first_name: user.first_name,
      lead_last_name: user.last_name,
      lead_email: user.email,
      lead_phone: user.phone,
      lead_insurance_start_date: user.insurance_start_date,
      lead_contact_type: user.contact_type,
      lead_contact_time: user.contact_time,
      lead_message: user.message,
      broker_title: user.broker.title,
      broker_partner: user.broker.partner,
      broker_inbox_email: user.broker.inbox,
      broker_email: user.broker.email,
      broker_website: user.broker.website,
      broker_phone: user.broker.phone,
    });

    // Send the form data to the API endpoint if the form is valid
    if (isValid) {
      // Send the form data to the API endpoint
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
          dispatch(setFormSubmitting(false));
          setErrors([]);
          dispatch(nextStep());
        } else if (res.ok) {
          console.log("Lead submitted successfully!");
          dispatch(setFormSubmitting(false));
          setErrors([]);
          dispatch(nextStep());
        } else {
          const errorData = await res.json();
          console.error("Failed to submit lead:", res.status, errorData);
          dispatch(setFormSubmitting(false));
          setErrors([
            "There was an error submitting your form. Please try again later.",
          ]);
        }
      } catch (error) {
        console.error("An error occurred while submitting the lead:", error);
        dispatch(setFormSubmitting(false));
        setErrors([
          "There was an error submitting your form. Please try again later.",
        ]);
      }
    }
  };

  const resetForm = () => {
    setStep(0);
    setPostcode("");
    setSelectedResult(null);
    dispatch(
      update({
        property: "business_type",
        value: "",
      })
    );
    dispatch(
      update({
        property: "employee_count",
        value: "",
      })
    );
    dispatch(
      update({
        property: "broker_help",
        value: [],
      })
    );
    dispatch(
      update({
        property: "insurance_type",
        value: [],
      })
    );
    dispatch(
      update({
        property: "broker",
        value: "",
      })
    );
    setContactDetails({});
  };
  let imageSizes = "/find-a-broker/img/blt-landing-image.jpg";
  if (screenSize.width < 810) {
    imageSizes = "/find-a-broker/img/blt-landing-image-mobile1.jpg";
  }

  return (
    <Layout fixed={app.step === 0}>
      <Script
        id="analytics"
        dangerouslySetInnerHTML={{
          __html: `
        window.iagDataLayer = window.iagDataLayer || [];
        window.load = window.load || {};
        window.load.config = window.load.config || {};
        window.load.config.dataLayerName = 'iagDataLayer';
        window.load.config.brand = 'cgu';
        window.load.config.apptype = 'brochureware';
        window.load.config.appname = 'find-a-broker';
      `,
        }}
      />{" "}
      <Script src="//tags.iag.com.au/prod/load/load.js" />
      <Head>
        <title> Broker Search Tool </title>{" "}
        <meta
          name="description"
          content="Use our tool to tell us the type of help you are looking for and we’ll find brokers from our network who work in your local area"
        />
        <link rel="icon" href="/find-a-broker/favicon.png" />
      </Head>
      {app.step > 1 && app.step <= app.stepNames.length && (
        <ProgressBar step={app.step - 2} multiFormSteps={3} />
      )}{" "}
      <div className="container">
        <div className="content">
          {app.step === 0 && (
                <div style={{ width: '100%', display: 'flex', alignItems: 'center' }}>
                  <div className="broker-content">
                    <Box
                      sx={{
                        height: ["auto", "auto", "100%"],
                        overflow: "hidden",
                        img: {
                          height: "100%",
                          objectFit: "cover",
                        },
                      }}
                    >
                      <Image
                        className="broker-image"
                        srcSet={`${imageSizes} 750w`}
                        sx={{
                          width: "50%",
                        }}
                        alt=""
                      />
                    </Box>{" "}
                  </div>{" "}
                  <div className="broker-search-tool">
                    <div>
                      <Box
                        className="broker-box"
                        sx={{
                          pl: [4, 4, 10],
                          pr: [4, 4, 10],
                          py: [4, 4, 10],
                          height: "auto",
                          maxWidth: ["", "", "530px"],
                          borderLeft: "8px solid #00ad20",
                          bg: "secondary.500",
                          color: "white",
                          width: "100%",
                        }}
                      >
                        <ReadTime text="Takes about 4 minutes" />
                        <Heading
                          as="h1"
                          size="h0"
                          mt={{
                            base: 4,
                            md: 8,
                          }}
                        >
                          Broker <br />
                          Search Tool{" "}
                        </Heading>{" "}
                        <Text
                          fontSize={["16px", "", "20px"]}
                          mt={{
                            base: 4,
                            md: 8,
                          }}
                        >
                          Use our tool to tell us the type of help you are looking for
                          and we’ ll find brokers from our network who work in your
                          local area{" "}
                        </Text>
                        <form onSubmit={handlePostcodeSubmit}>
                          <InputPostcode
                            id="postcode"
                            errors={{
                              missing: "This field is missing",
                              invalid: "This field is invalid",
                            }}
                            sx={{
                              mt: 8,
                            }}
                            onPostcodeChange={handlePostcodeChange}
                          />{" "}
                          <NextButton
                            data-tracking="link-click:getStarted"
                            isDisabled={!postcodeIsValid}
                            type="submit"
                            style={{ marginTop: "7px" }}
                          >
                            Get Started{" "}
                          </NextButton>{" "}
                        </form>{" "}
                      </Box>{" "}
                    </div>{" "}
                  </div>{" "}
                </div>
          )}{" "}
          
          {app.step > 0 && app.step <= app.stepNames.length - 1 && (
            <Box style={{ position: 'absolute', width: '100%' }}>
              <div>
                <GridItem
                  colSpan={[6, 6, 12]}
                  colStart={["col-start", "col-start", "col-start"]}
                >
                  <Box
                    sx={{
                      pt: 8,
                      pb: [3, 3, 4],
                      borderBottomStyle: "solid",
                      borderBottomWidth: "0px",
                      borderBottomColor: "grey.200",
                    }}
                  >
                    <PrevButton
                      onClick={() => {
                        dispatch(prevStep());
                        window.scrollTo(0, 0);
                      }}
                    >
                      {app.step === 1 ? "Back to start" : "Previous"}{" "}
                    </PrevButton>{" "}
                  </Box>{" "}
                </GridItem>{" "}
              </div>{" "}
            </Box>
          )}{" "}
          {app.step === 1 && (
            <ResultsPage postcode={postcode} onSelectResult={handleResultSelect} />
          )}{" "}
          {app.step === 2 && (
            <ServiceNeedsPage
              selectedResult={selectedResult}
              onNextStep={handleServiceNeedsSubmit}
            />
          )}{" "}
          {app.step === 3 && (
            <ServiceNeedsPageForm
              selectedResult={selectedResult}
              onNextStep={handleServiceNeedsSubmit}
            />
          )}{" "}
          {app.step === 4 && (
            <ContactDetailsPage
              selectedResult={selectedResult}
              onSubmit={handleContactDetailsSubmit}
              errors={errors}
            />
          )}{" "}
          {app.step === 5 && (
            <SuccessPage
              postcode={postcode}
              selectedResult={selectedResult}
              serviceNeeds={serviceNeeds}
              contactDetails={contactDetails}
              onReset={resetForm}
            />
          )}{" "}
        </div>
      </div>
      {/* <Footer disclaimer={true} />{" "} */}
    </Layout>
  );
}

export async function getStaticProps(context) {
  return {
    // This props object will be passed to the page so they can be used on the frontend.
    props: {},
  };
}
