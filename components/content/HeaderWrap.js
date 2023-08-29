import { Box, GridItem } from "@chakra-ui/react";
import NavyBox from "../content/NavyBox";
import GridWrapper from "../form/shared/GridWrapper";
const HeaderWrap = (props) => {
  return (
    <Box
      // bg={props.bg ? props.bg : "secondary.50"}
      // style={{ display: "flex", alignItems: 'center' }}
    >
      <div>
        <GridItem
          colSpan={[6, 6, 8]}
          colStart={["col-start", "col-start", 3]}
          pt={[8, 8, 20]}
          pb={[12, 12, 20]}
          {...props}
        >
          <NavyBox.Small>{props.children} </NavyBox.Small>
        </GridItem>
      </div>
    </Box>
  );
};
export default HeaderWrap;
