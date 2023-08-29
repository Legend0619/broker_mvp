import React from "react";
import { Box } from "@chakra-ui/react";

function Header({ bg, children }) {
  return <Box bg={bg}>{children}</Box>;
}
// function Header({
//   bg,
//   prevStep,
//   prevButtonLabel,
//   prevButtonOnClick,
//   children,
// }) {
//   return (
//     <Box bg={bg}>
//       {prevStep && (
//         <GridWrapper>
//           <GridItem
//             colSpan={[6, 6, 12]}
//             colStart={["col-start", "col-start", "col-start"]}
//           >
//             <Box
//               sx={{
//                 pt: 8,
//                 pb: 4,
//                 borderBottomStyle: "solid",
//                 borderBottomWidth: "1px",
//                 borderBottomColor: "grey.200",
//               }}
//             >
//               <PrevButton
//                 onClick={() => {
//                   prevButtonOnClick();
//                   window.scrollTo(0, 0);
//                 }}
//               >
//                 {prevButtonLabel}
//               </PrevButton>
//             </Box>
//           </GridItem>
//         </GridWrapper>
//       )}
//       {children && children}
//     </Box>
//   );
// }
export default Header;
