import React from "react";
import { Box } from "@chakra-ui/react";
import Navigation from "../components/global/Navigation";
import Footer from "../components/global/Footer";
function Layout(props) {
  return (
    <Box maxWidth={"1930px"} m="0 auto" bg={props.bg}>
      <Navigation fixed={props.fixed} />
      {props.children}
      <Footer disclaimer />
    </Box>
  );
}

export default Layout;
