import { Flex, Heading, Box, Text, Link } from "@chakra-ui/react";
import { LinkButton, NextButton } from "../form/shared/Buttons";
import Phone from "../icons/Phone";
function ExternalLinkCard({ title, body, phone, url, tracking }) {
  return (
    <Flex
      borderWidth="2px"
      borderStyle="solid"
      borderColor={"gray.100"}
      minH={"60px"}
      mb={6}
      mt={10}
      justify={{ base: "center", md: "space-between" }}
    >
      <Box
        pt={{ base: 2, md: 2 }}
        pb={{ base: 4, md: 6 }}
        px={{ base: 4, md: 6 }}
      >
        <Heading as="h3" size="h4" mb={6}>
          {title}
        </Heading>
        <Text mt={6}>{body}</Text>
        {phone && (
          <Box mt={6}>
            <LinkButton
              href={`tel:${phone}`}
              icon={<Phone />}
              fontWeight="bold"
              color="grey.300"
              as={Link}
              data-tracking={tracking + "Phone"}
            >
              {phone}
            </LinkButton>
          </Box>
        )}
        {url && (
          <NextButton
            href={url}
            mt={6}
            as={Link}
            data-tracking={tracking + "Website"}
          >
            Website
          </NextButton>
        )}
      </Box>
    </Flex>
  );
}

export default ExternalLinkCard;
