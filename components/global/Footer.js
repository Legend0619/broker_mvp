import {
  Box,
  Flex,
  Text,
  Container,
  Link,
  GridItem,
  Modal,
} from "@chakra-ui/react";
import GridWrapper from "../form/shared/GridWrapper";
import React from "react";
import Phone from "../icons/Phone";
import BetaModal from "../form/shared/BetaModal";
function Footer(props) {
  return (
    <Box bg="grey.50">
      <GridWrapper>
        <GridItem
          colStart="col-start"
          colEnd="col-end"
          sx={{
            my: [4, 4, 6],
          }}
        >
          <Flex
            justifyContent="flex-start"
            mt={[6, 6, 8]}
            flexDirection={["column", "column", "row-reverse"]}
          >
            <BetaModal />
            {props.disclaimer && (
              <Text color="grey.400" fontSize={[12, 12, 14]} lineHeight>
                Insurance issued by Insurance Australia Limited, ABN 11 000 016
                722, AFSL 227681, trading as CGU Insurance. The advice on this
                website is general advice only and does not take into account
                your individual objectives, financial situation or needs (your
                ‘personal circumstances’). When making decisions about our
                insurance, consider the Product Disclosure Statement or policy
                wording/booklet and Target Market Determinations (if applicable)
                available on this website.
              </Text>
            )}
            {/* <Flex alignItems="center" color="secondary.300">
              <Phone />
              <Text
                fontWeight="bold"
                mx={2}
                color="secondary.300"
                fontSize={[12, 12, 16]}
              >
                Need help?
                <Link
                  href={`tel:13 24 81`}
                  textDecoration="underline"
                  color="secondary.300"
                  fontWeight="bold"
                  _hover={{ color: "blue.500" }}
                  fontSize={[12, 12, 16]}
                  ml={[0, 2]}
                  display={["block", "inline-block"]}
                >
                  Contact us here
                </Link>
              </Text>
            </Flex> */}
          </Flex>
        </GridItem>
      </GridWrapper>
    </Box>
  );
}

export default Footer;
