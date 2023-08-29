// components/ContactDetailsPage.js

import { useEffect, useState, useCallback } from "react";
import {
  Box,
  Heading,
  Text,
  GridItem,
  Grid,
  Flex,
  Accordion,
  AccordionItem,
  AccordionPanel,
  AccordionButton,
  AccordionIcon,
  UnorderedList,
  ListItem,
} from "@chakra-ui/react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import GridWrapper from "../form/shared/GridWrapper";
import HeaderWrap from "../content/HeaderWrap";
import CGUBanner from "../content/CGUBanner";
import HelpModal from "../form/shared/HelpModal";
import RadioCardGroup from "../form/fields/RadioCardGroup";
import RadioButtonGroup from "../form/fields/RadioButtonGroup";
import CheckboxButtonGroup from "../form/fields/CheckboxButtonGroup";
import InputFloating from "../form/fields/InputFloating";
import InputDatePicker from "../form/fields/InputDatePicker";
import { InputTextArea } from "../form/fields/InputTextArea";
import { useSelector, useDispatch } from "react-redux";
import { NextButton } from "../form/shared/Buttons";
import { update } from "../../store";
const insuranceTypeBusinessOptions = [
  "Building and Contents Insurance",
  "Business Insurance",
  "Commercial Motor Vehicle",
  "Electronic Equipment",
  "General Property Insurance",
  "Professional Indemnity",
  "Public Liability",
  "I'm not sure what I need",
];
const insuranceTypePersonalOptions = [
  "Car insurance",
  "Contents insurance",
  "Home insurance",
  "Landlords insurance",
  "Motorcycle insurance",
  "I'm not sure what I need",
];

const HelpModalBusiness = () => {
  return (
    <HelpModal
      triggerText="What are these different insurance types?"
      targetTitle="What are these different insurance types?"
      triggerSX={{ opacity: 0.6 }}
    >
      <Text>
        A broker will be able to advise you on the correct insurance products
        for your needs. In the meantime, here is an overview of some common
        types of business insurance
      </Text>
      <Accordion allowToggle mt={4}>
        <AccordionItem>
          <Heading as="h4" size="h3">
            <AccordionButton>
              <Box flex="1" textAlign="left">
                Building and Contents Insurance
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </Heading>
          <AccordionPanel pb={4}>
            Building insurance provides cover for loss and damage to buildings
            you own, as a result of an insured event (such as fire, storm,
            wind). Contents covers your business contents or stock if they are
            damaged in a fire, storm or due to malicious damage or some other
            defined event listed in the policy.
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <Heading as="h4" size="h3">
            <AccordionButton>
              <Box flex="1" textAlign="left">
                Business Insurance
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </Heading>
          <AccordionPanel pb={4}>
            <Text>
              Business Insurance can provide cover for your business’ premises
              and contents, against loss, damage, or theft, also offering
              protection against financial loss experienced from an insured
              interruption to your business.
            </Text>{" "}
            {/* <Text mt={4}>
              Business insurance policies can be changed and customised to suit
              your business needs.
            </Text>{" "}
            <Text mt={4}>
              There is no one-size-fits-all insurance solution for small
              businesses. Your insurance needs will vary according to the
              industry, trade, and type of business you are operating.
            </Text>
            <UnorderedList mt={4}>
              <ListItem>
                Public Liability - Covers your business for legal costs and
                compensation costs that you might have to pay if you are found
                liable to someone because you caused death or injury, loss or
                damage to their property, or economic loss due to your
                negligence
              </ListItem>
              <ListItem>
                Professional Indemnity - Protects you from legal action taken
                against you if someone suffers a loss after following your
                professional advice or as a result of your receiving your
                service.
              </ListItem>
              <ListItem>
                Commercial Motor Vehicle - Every state and territory requires
                mandatory motor vehicle accident personal injuries insurance for
                all company or business vehicles. Many different types of
                policies are available, so make sure you understand the options
                before making a decision. Consider the three most common
                options, which are comprehensive, third party property damage,
                and third party, fire and theft.
              </ListItem>
              <ListItem>
                Computer and Electronic Equipment - Covers accidental damage or
                loss to computers and electronic equipment and data
              </ListItem>
              <ListItem>
                Property - Covers damage or loss to buildings, contents and
                stock caused by insured events and accidental damage
              </ListItem>
              <ListItem>
                Product Liability - Businesses that supply, deliver or sell
                goods, even in the form of services or repairs, may need cover
                against claims of goods causing damage, injury or death. Product
                liability cover protects you if any of these events happen to
                another person or business by the failure of a product you are
                selling
              </ListItem>
              <ListItem>
                Theft and Burglary - Theft insurance generally covers your
                business against loss or damage to your stock and contents if
                someone forces their way onto your premises, or uses deception
                to get in to your premises. It usually does not cover cash
                losses, which can be covered separately
              </ListItem>
              <ListItem>
                Money - Covers your money for theft at the premises, in transit
                and at your private residence
              </ListItem>
              <ListItem>
                Tax Audit - Covers costs incurred by your accountant, or
                registered tax agent, when notified by the Australian Taxation
                Office to conduct an audit or investigation into your tax
                liability
              </ListItem>
              <ListItem>
                Business Interruption - Covers businesses that suffer a loss
                because they cannot trade for a period of time due to loss or
                damage from a weather event, flood, fire or other insured
                interruptions
              </ListItem>
              <ListItem>
                Deterioration of Stock - Covers businesses for the deterioration
                of chilled, refrigerated or frozen goods and stock if a
                refrigerator or freezer unit storing these goods breaks down and
                spoils the items
              </ListItem>
              <ListItem>
                Glass – Covers the replacement of external and internal glass,
                as well as specified glass items
              </ListItem>
              <ListItem>
                Employee Fraud/Dishonesty - Covers against fraudulent or
                dishonest actions committed by employees that directly results
                in loss of money, negotiable instruments or goods
              </ListItem>
              <ListItem>
                Workers Compensation - Workers’ Compensation insurance is
                compulsory in all states and territories for businesses with a
                certain number of employees.
              </ListItem>
              <ListItem>
                Machinery/Equipment Breakdown - Covers machinery and equipment
                used in your business. Some policies may also cover stock
                damages as a result of the breakdown
              </ListItem>
              <ListItem>
                Goods in Transit/Property in Transit - Covers the loss of, or
                damage to, goods you buy, sell or use in your business when they
                are in transit by road, rail, air and sea. It also covers damage
                to property – such as tools and equipment – while in transit
                within a defined set of geographical limits
              </ListItem>
            </UnorderedList> */}
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <Heading as="h4" size="h3">
            <AccordionButton>
              <Box flex="1" textAlign="left">
                Commercial Motor Vehicle
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </Heading>
          <AccordionPanel pb={4}>
            A commercial motor insurance policy protects vehicles used in the
            operation of your company. The policy also covers third parties who
            sustain loss because of an unintentional event caused by you or one
            of your employees while operating a company vehicle. A good
            commercial motor policy will get your vehicle back in service as
            fast as possible and compensate third party losses.
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <Heading as="h4" size="h3">
            <AccordionButton>
              <Box flex="1" textAlign="left">
                Electronic Equipment
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </Heading>
          <AccordionPanel pb={4}>
            Covers your business against loss caused by accidental and
            unforeseen damage, breakdown of electronic equipment, which can
            include computers and printers.
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <Heading as="h4" size="h3">
            <AccordionButton>
              <Box flex="1" textAlign="left">
                General Property Insurance
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </Heading>
          <AccordionPanel pb={4}>
            General Property Insurance covers you for loss and damage to items
            of portable equipment associated with your business. These can
            include tools of trade and items of stock.
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <Heading as="h4" size="h3">
            <AccordionButton>
              <Box flex="1" textAlign="left">
                Professional Indemnity
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </Heading>
          <AccordionPanel pb={4}>
            Professional Indemnity insurance is designed for professionals who
            provide a specialist service or advice, providing protection for
            financial loss and legal costs in the event of a claim. This claim
            may be a result of an actual or alleged negligent act, error or
            omission whilst providing your professional service or advice.
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <Heading as="h4" size="h3">
            <AccordionButton>
              <Box flex="1" textAlign="left">
                Public Liability
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </Heading>
          <AccordionPanel pb={4}>
            This covers you if a third-party claim that your negligent business
            activities caused them injury or property damage. This includes
            defence costs cover.
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </HelpModal>
  );
};
const HelpModalPersonal = () => {
  return (
    <HelpModal
      triggerText="What are these different insurance types?"
      targetTitle="What are these different insurance types?"
      triggerSX={{ opacity: 0.6 }}
    >
      <Text>
        A broker will be able to advise you on the correct insurance products
        for your needs. In the meantime, here is an overview of some common
        types of personal insurance types.
      </Text>
      <Accordion allowToggle mt={6}>
        <AccordionItem>
          <Heading as="h4" size="h3">
            <AccordionButton>
              <Box flex="1" textAlign="left">
                Car Insurance
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </Heading>
          <AccordionPanel pb={4}>
            <Text>
              Compulsory Third Party (CTP)/mandatory motor vehicle accident
              personal injuries insurance – required by each state and
              territory. It protects any person that you might injure while you
              are driving.
            </Text>

            <Text mt={4}>
              It is not an alternative to taking out a motor policy to cover
              your financial liabilities, such as damage to another vehicle or
              property, or your own vehicle
            </Text>

            <Text mt={4}>
              Comprehensive – covers damage to your own vehicle and other
              people’s property, as well as theft and some other risks, plus
              legal costs
            </Text>

            <Text mt={4}>
              Third Party Property - covers damage to other people’s property
              and legal costs, but not damage to your own vehicle.
            </Text>
            <Text mt={4}>
              Third Party Fire and Theft – Third Party Property with some add-on
              features that cover your vehicle
            </Text>
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
          <Heading as="h4" size="h3">
            <AccordionButton>
              <Box flex="1" textAlign="left">
                Contents Insurance
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </Heading>
          <AccordionPanel pb={4}>
            <Text>
              Contents insurance covers financial losses caused by the loss,
              theft or damage of your possessions. Home and Contents policies
              that combine the features of both types of insurance
            </Text>
          </AccordionPanel>
        </AccordionItem>{" "}
        <AccordionItem>
          <Heading as="h4" size="h3">
            <AccordionButton>
              <Box flex="1" textAlign="left">
                Home Insurance
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </Heading>
          <AccordionPanel pb={4}>
            <Text>
              Covers financial losses associated with damage or loss of a
              property you own.
            </Text>
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
          <Heading as="h4" size="h3">
            <AccordionButton>
              <Box flex="1" textAlign="left">
                Landlords Insurance
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </Heading>
          <AccordionPanel pb={4}>
            <Text>
              Renter’s or tenant’s insurance is a low-cost contents policy for
              tenants that provides limited cover for events such as fire and
              theft.
            </Text>
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
          <Heading as="h4" size="h3">
            <AccordionButton>
              <Box flex="1" textAlign="left">
                Motorcycle Insurance
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </Heading>
          <AccordionPanel pb={4}>
            <Text>
              Mandatory motor vehicle accident personal injuries insurance –
              required by each state and territory. It is not an alternative to
              taking out a policy to cover your financial liabilities
            </Text>
            <Text mt={4}>
              Comprehensive usually covers storm, flood and fire damage to your
              own bike, damage to your protective clothing, damage to other
              people’s property, as well as other risks, plus legal costs. It
              sometimes also covers accidental damage.
            </Text>
            <Text mt={4}>
              Third Party covers damage to other people’s property and legal
              costs, but not damage to your own bikeThird Party Fire and Theft –
              Third Party with some add-on features, often offered as an option,
              with cover up to a set limit
            </Text>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </HelpModal>
  );
};
const ContactDetailsPage = ({ selectedResult, onSubmit, errors }) => {
  const [radioTrigger, setRadioTrigger] = useState(false);
  const user = useSelector((state) => state.user);
  const app = useSelector((state) => state.app);
  const [isLoading, setIsLoading] = useState(app.formSubmitting);
  const [isDisabled, setIsDisabled] = useState(user.email == "");
  const handleSubmit = (e) => {
    e.preventDefault();
    // if (errors.length > 0) {
    //   return;
    // }
    window.parent.postMessage('EnquirySent',"*");
    onSubmit(e);
  };

  const checkContactValid = useCallback(() => {
    const contactFields = {
      first_name: user["first_name"],
      last_name: user["last_name"],
      email: user["email"],
      phone: user["phone"],
      insurance_start_date: user["insurance_start_date"],
      contact_type: user["contact_type"],
    };
    for (var key in contactFields) {
      if (key === "contact_type") {
        if (contactFields[key] === "Phone" && user["contact_time"] === "")
          return false;
        if (contactFields[key] === null || contactFields[key] === "")
          return false;
      } else {
        if (contactFields[key] === null || contactFields[key] === "")
          return false;
      }
    }
    return true;
  }, [user]);

  useEffect(() => {
    setIsLoading(app.formSubmitting);
    setIsDisabled(!checkContactValid() || app.formSubmitting);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user, app]);
  useEffect(() => {
    window.parent.postMessage('page4',"*");
  }, []);

  return (
    <>
      <form onSubmit={handleSubmit} autoComplete="on">
        <GridWrapper>
          <GridItem
            gridColumn={{
              base: "col-start / span 6",
              md: "3 / span 8",
              lg: "3 / span 9",
            }}
          >
            {/* <Grid mt={[12, 12, 20]} gridTemplateColumns={["1fr", "1fr", "1fr 1fr"]} gridGap={3}> */}
              <Carousel infiniteLoop>
                <Box mt={12}>
                  <Heading as="h2" size="h3" gridColumn={"1 / -1"} className="hero-h2">
                    Tell us about yourself
                  </Heading>
                  <Grid sx={{
                      gridTemplateColumns: ["1fr", "1fr", "1fr", "1fr 1fr"],
                      gridGap: 2,
                      mt: 2,
                  }}>
                    <InputFloating
                      className="hero-required-input"
                      id="first_name"
                      label="First Name"
                      autoComplete="given-name"
                      validate={(i) => {
                        let x = /^[a-zA-Z]+(-[a-zA-Z]+)?$/.test(i);
                        return x;
                      }}
                      errors={{
                        missing: "First name is required",
                        invalid: "This field is invalid",
                      }}
                      required
                    />
                    <InputFloating
                      className="hero-required-input"
                      id="last_name"
                      label="Last Name"
                      autoComplete="family-name"
                      validate={(i) => {
                        let x = /^[a-zA-Z]+(-[a-zA-Z]+)?$/.test(i);
                        return x;
                      }}
                      errors={{
                        missing: "Last name is required",
                        invalid: "This field is invalid",
                      }}
                      required
                    />
                    <InputFloating
                      className="hero-required-input"
                      id="email"
                      label="Email"
                      autoComplete="email"
                      validate={(i) => {
                        let x =
                          /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
                            i
                          );
                        return x;
                      }}
                      errors={{
                        missing: "Email is required",
                        invalid: "This email is invalid",
                      }}
                      required
                    />
                    <InputFloating
                      className="hero-required-input"
                      id="phone"
                      label="Phone Number"
                      autoComplete="phone"
                      validate={(i) => {
                        let x =
                          /^\({0,1}((0|\+61)(2|4|3|7|8)){0,1}\){0,1}(\ |-){0,1}[0-9]{2}(\ |-){0,1}[0-9]{2}(\ |-){0,1}[0-9]{1}(\ |-){0,1}[0-9]{3}$/.test(
                            i
                          );
                        return x;
                      }}
                      errors={{
                        missing: "Phone number is required",
                        invalid: "This number is invalid",
                      }}
                      required
                    />
                  </Grid>
                </Box>
                <Box mt={12}>
                  <Heading as="h2" size="h3" gridColumn={"1 / -1"} mt={12} className="hero-h2">
                    How soon do you require assistance
                  </Heading>
                  <Text gridColumn={"1 / -1"} mb={12} className="hero-text">
                    Enter your preferred insurance start date
                  </Text>
                  <InputDatePicker id="insurance_start_date" label="Date" mb={12} />
                </Box>
                <Box mt={12}>
                  {user.cover_type && user.cover_type == "Business" && (
                    <Grid>
                      <Heading as="h3" size="h3" className="hero-h2">
                        What type(s) of insurance does your business require?
                      </Heading>
                      <HelpModalBusiness />
                    </Grid>
                  )}
                  {user.cover_type && user.cover_type == "Personal" && (
                    <Grid>
                      <Heading as="h3" size="h3" className="hero-h2">
                        What type(s) of insurance do you require?
                      </Heading>
                      <Text mt={2} className="hero-text">
                        Select as many of the options that apply to you
                      </Text>
                      <HelpModalPersonal />
                    </Grid>
                  )}
                  <CheckboxButtonGroup
                    options={
                      user.cover_type && user.cover_type == "Business"
                        ? insuranceTypeBusinessOptions
                        : insuranceTypePersonalOptions
                    }
                    groupName="insurance_type"
                    groupSX={{
                      gridTemplateColumns: ["1fr", "1fr 1fr", "1fr 1fr", "1fr 1fr"],
                      gridGap: 3,

                      gridColumn: "1 / -1",
                    }}
                  />
                </Box>
                <Box mt={12}>
                  <Heading as="h2" size="h3" gridColumn={"1 / -1"} mt={12} className="hero-h2">
                    How would you like to be contacted?
                  </Heading>
                  <Text gridColumn={"1 / -1"} className="hero-text" mb={2}>
                    If you select to be contacted via phone call, you consent to us
                    sharing your contact details with your selected broker for the
                    purpose of the broker calling you about the insurance products
                    you have selected above.
                  </Text>
                  {/* <Flex> */}
                    <RadioButtonGroup
                      options={["Email", "Phone"]}
                      groupName="contact_type"
                      groupSX={{
                        gridTemplateColumns: ["1fr", "1fr 1fr", "1fr 1fr", "1fr 1fr 1fr"],
                        gridGap: 3,

                        gridColumn: "1 / -1",
                      }}
                      radioTrigger={{
                        option: "Phone",
                        currentState: radioTrigger,
                        callBack: setRadioTrigger,
                      }}
                    />
                  {/* </Flex> */}
                  {radioTrigger && (
                    <>
                      <Heading as="h2" size="h3" gridColumn={"1 / -1"} mt={2} className="hero-h2">
                        When would you like to be contacted?
                      </Heading>
                      <Text gridColumn={"1 / -1"} className="hero-text">All times are in AEST</Text>
                      <RadioButtonGroup
                        options={["Anytime", "9am-12pm", "12pm-3pm", "3pm-5pm"]}
                        groupName="contact_time"
                        groupSX={{
                          gridTemplateColumns: [
                            "1fr 1fr",
                            "1fr 1fr",
                            "1fr 1fr",
                            "1fr 1fr",
                          ],
                          gridGap: 3,
                          gridColumn: "1 / -1",
                        }}
                      />
                    </>
                  )}
                </Box>
                <Box>
                  <Heading
                    as="h2"
                    size="h3"
                    id="messageLabel"
                    gridColumn={"1 / -1"}
                    mt={12}
                  >
                    Leave a message
                  </Heading>
                  <Text gridColumn={"1 / -1"}>
                    Let us know if there is any other important information you’d
                    like to pass on to your selected broker at this stage.
                  </Text>
                  <InputTextArea labelid="messageLabel" gridColumn={"1 / -1"} />
                </Box>
              </Carousel>
            {/* </Grid> */}
            <div className="hero-next-btn">
              <NextButton
                mt={2}
                type="submit"
                isDisabled={isDisabled}
                onClick={handleSubmit}
              >
                {isLoading ? "Submitting..." : "Send Your Enquiry"}
              </NextButton>
            </div>
            {errors.length > 0 && (
              <>
                {errors.map((error, i) => {
                  return (
                    <Text mt={2} key={i}>
                      {error}
                    </Text>
                  );
                })}
              </>
            )}
          </GridItem>
        </GridWrapper>
      </form>
      {/* <HeaderWrap>
        <Heading as="h1" size="h1" className="hero-h2">
          Connect with a broker
        </Heading>
        <Text mt={8} maxW={"490px"} className="hero-text">
          Simply enter your details and any relevant information you are seeking
          from brokers in the form below and the team from{" "}
          <b>{selectedResult.title}</b> will get back to you shortly.
        </Text>
      </HeaderWrap> */}
      {/* <CGUBanner /> */}
    </>
  );
};

export default ContactDetailsPage;
