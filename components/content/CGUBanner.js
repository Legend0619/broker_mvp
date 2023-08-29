import React from "react";
import {
  Flex,
  Heading,
  Box,
  Text,
  Button,
  Container,
  GridItem,
} from "@chakra-ui/react";
import GridWrapper from "../form/shared/GridWrapper";
import { BannerButton } from "../form/shared/Buttons";
import RightArrow from "../icons/RightArrow";

function CGUBanner() {
  return (
    <Box bg="primary.500">
      <GridWrapper>
        <GridItem
          colSpan={[6, 6, 12]}
          colStart={["col-start", "col-start", "col-start"]}
          style={{ display: "flex", gap: "inherit", alignItems: "center" }}
        >
          <Heading as="h3" size="h3" className="hero-h3">
            Proudly brought to you by CGU
          </Heading>
          <BannerButton
            href={`https://www.cgu.com.au/`}
            icon={<RightArrow color="currentColor" />}
            data-tracking={`link-click:CGUBanner`}
            style={{ backgroundColor: "transparent", border: "none", minWidth: '100px' }}
          >
            Visit our website
          </BannerButton>
        </GridItem>
      </GridWrapper>
    </Box>
  );
}

export default CGUBanner;
