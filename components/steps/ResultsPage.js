import React, { useState, useEffect } from "react";
import { Box, Heading, Text, GridItem } from "@chakra-ui/react";
import GridWrapper from "../form/shared/GridWrapper";
import HelpModal from "../form/shared/HelpModal";
import BrokerProfile from "../content/BrokerProfile";
import ExternalLinkCard from "../content/ExternalLinkCard";

import CGUBanner from "../content/CGUBanner";
import HeaderWrap from "../content/HeaderWrap";
import { useSelector } from "react-redux";

const ResultsPage = ({ postcode, onSelectResult }) => {
  const [isLoading, setIsLoading] = useState(true);
  const brokers = useSelector((state) => state.brokers);
  const postcodes = useSelector((state) => state.postcodes);
  const app = useSelector((state) => state.app);
  const { results } = app;
  useEffect(() => {
    window.parent.postMessage('page1',"*");
  }, []);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 500);
  }, [postcode]);
  if (isLoading) {
    return (
      <>
        <HeaderWrap>
          <Heading as="h1" size="h1">
            Loading...
          </Heading>
        </HeaderWrap>
      </>
    );
  }

  if (results.length === 0) {
    return (
      <>
        <HeaderWrap>
          <Heading as="h1" size="h1">
            Sorry, we couldn’t find any brokers
          </Heading>
          <Heading as="p" size="h3" mt={8}>
            from our current list of participating broker partners within 50km
            of the postcode you have entered.
          </Heading>
          <Text mt={8} mb={0} maxW={"480px"}>
            You may wish to try one of our other broker partners (
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.cgu.com.au/tallpoppy/brokers"
              data-tracking="link-click:noResultsTallPoppyBrokersHeader"
            >
              a full list of our broker partners is available here
            </a>
            ) or contact an insurance broker of your choice directly.
            Alternatively, try visiting the{" "}
            <a
              target="_blank"
              rel="noreferrer"
              href="http://www.needabroker.com.au"
              data-tracking="link-click:noResultsNeedABrokerHeader"
            >
              National Insurance Brokers Association
            </a>{" "}
            to access more broker options.
          </Text>
        </HeaderWrap>
        <GridWrapper>
          <GridItem colSpan={6} colStart={["col-start", "col-start", 3]}>
            <Box my={16}>
              <ExternalLinkCard
                title="National Insurance Brokers Association"
                body="The Need a Broker service provides business owners and consumers with qualified insurance brokers near them. The service can also match you with brokers that meet your specific need."
                phone="1300 53 10 73"
                url="https://www.needabroker.com.au/"
                tracking="link-click:noResultsNeedABroker"
              />
              <ExternalLinkCard
                title="Insurance Council of Australia"
                body="The ICA can help you find a list of insurers who offer specific products with certain needs or criteria. This referral service is designed to provide general information only and cannot provide advice."
                phone="1300 884 934"
                url="https://insurancecouncil.com.au/"
                tracking="noResultsInsuranceCouncil"
              />
            </Box>
          </GridItem>
        </GridWrapper>
      </>
    );
  }

  return (
    <>
      <HeaderWrap>
        <Heading as="h1" size="h1">
          Here are some great brokers we found for you
        </Heading>
        <Text mt={2} mb={1} maxW={"480px"} className="hero-text">
          You’re using a pilot version of this tool, so it will only provide the
          details for brokers from Willis Towers Watson and Resilium. We’re
          working to add new brokerages in future.
        </Text>
        <Text mt={2} mb={2} maxW={"480px"} className="hero-text">
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.cgu.com.au/tallpoppy/brokers"
            data-tracking={`link-click:tallPoppyBrokersHeader`}
          >
            For a full list of brokers we work with, please click here
          </a>
          .
        </Text>{" "}
        <HelpModal
          triggerText="How does the match work?"
          targetTitle="How does the match work?"
        >
          <p className="hero-text">
            These results are brokers from Resilium and Willis Towers Watson who
            service the area of the postcode selected
          </p>
        </HelpModal>
        {/* <div>
          <Heading as="h4" size="h4" mt={0} className="hero-h2">
            Haven&apos;t found what you were looking for?
          </Heading>
          <Text maxW="640px" mt={2} className="hero-text">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.cgu.com.au/tallpoppy/brokers"
              data-tracking={`link-click:tallPoppyBrokersFooter`}
            >
              You can find a full list of brokers who we work with here
            </a>
            .
          </Text>
          <Text maxW="640px" mt={2}  className="hero-text">
            If you haven’t found the right match within our current network, you
            may wish to contact an insurance broker of your choice directly or
            try visiting the{" "}
            <a
              target="_blank"
              rel="noreferrer"
              href="http://www.needabroker.com.au"
              data-tracking={`link-click:needabroker`}
            >
              National Insurance Brokers Association
            </a>{" "}
            to access more broker options.
          </Text>
        </div> */}
      </HeaderWrap>
      <div style={{ position: "relative", display: "flex" }} className="step2-right-box">
        <GridItem pt={[8, 8, 20]} pb={[12, 12, 20]}>
          {/* Sort brokers by distance form user */}
          {results.map((broker, index) => {
            return (
              <BrokerProfile
                onClick={onSelectResult}
                broker={broker}
                key={index}
              />
              );
            })}
          {/* <CGUBanner /> */}
        </GridItem>
        {/* List of profiles and CTA as Contact form */}
      </div>
    </>
  );
};

export default ResultsPage;
