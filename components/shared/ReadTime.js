import React from "react";
import { Flex, Text, Box } from "@chakra-ui/react";
import Clock from "../icons/Clock";
const ReadTime = ({ text }) => {
  return (
    <Flex
      sx={{ bg: "white", px: 3, py: 1, width: "max-content" }}
      justifyContent="flex-start"
    >
      <Box sx={{ color: "#00ad20", mr: 2, mt: "1px" }}>
        <Clock color="currentColor" />
      </Box>
      <Text
        sx={{
          fontWeight: "700",
          color: "secondary.300",
          fontSize: ["12px", "", "14px"],
          lineHeight: "20px",
        }}
      >
        {text}
      </Text>
    </Flex>
  );
};

export default ReadTime;
