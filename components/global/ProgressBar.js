import React from "react";
import { Box, Progress } from "@chakra-ui/react";
import { useSelector } from "react-redux";
function ProgressBar({ step, multiFormSteps }) {
  // const app = useSelector((state) => state.app);
  // const multiFormSteps = app.stepNames.length - 2;

  return (
    <Box>
      <Progress
        aria-label="Form Progress"
        max="100"
        value={
          step <= multiFormSteps ? ((step + 1) / multiFormSteps) * 100 : 100
        }
        colorScheme="primary"
        height="8px"
        bg="grey.100"
        sx={{
          "& > div:first-of-type": {
            transitionProperty: "width",
          },
        }}
      />
    </Box>
  );
}

export default ProgressBar;
