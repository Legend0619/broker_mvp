import React from "react";
import { Box } from "@chakra-ui/react";
const NavyBox = {
  Small: (props) => {
    return (
      <Box
        sx={{
          pl: [4, 4, 6],
          pr: [4, 4, 6],
          py: [4, 4, 10],
          height: "auto",
          borderLeft: "8px solid #00ad20",
          bg: "secondary.500",
          color: "white",
        }}
      >
        {props.children}
      </Box>
    );
  },
  Large: (props) => {
    return (
      <Box
        sx={{
          pl: [4, 4, 10],
          pr: [4, 4, 10, 14],
          py: [4, 4, 7],
          height: "auto",
          borderLeft: "8px solid #00ad20",
          bg: "secondary.500",
          color: "white",
        }}
      >
        {props.children}
      </Box>
    );
  },
};

export default NavyBox;
