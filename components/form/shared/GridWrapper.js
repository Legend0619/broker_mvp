import React from "react";
import { Box, Grid, GridItem } from "@chakra-ui/react";
const GridWrapper = (props) => {
  return (
    <Grid
      sx={{
        gridTemplateColumns: [
          "[margin-start] 1fr [col-start] repeat(6, minmax(0, 86px)) [col-end] 1fr [margin-end]",
          "[margin-start] 1fr  [col-start] repeat(6, minmax(0, 120px)) [col-end] 1fr [margin-end]",
          "[margin-start] 1fr [col-start] repeat(12, minmax(0, 86px)) [col-end] 1fr [margin-end]",
        ],
        gap: [4, 4, 6],
      }}
    >
      {props.children}
    </Grid>
  );
};

export default GridWrapper;
