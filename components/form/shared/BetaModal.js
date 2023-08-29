import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Text,
  Box,
  Flex,
  Heading,
} from "@chakra-ui/react";
import { BetaButton } from "./Buttons";
import InformationCircle from "../../icons/InformationCircle";

const BetaModal = ({ triggerText, targetTitle, children }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <BetaButton onClick={onOpen}>Beta Mode</BetaButton>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent
          sx={{ borderRadius: 0, width: "100%", maxWidth: "600px", mx: 4 }}
        >
          <ModalHeader
            sx={{
              color: "secondary.500",
              px: [6, 6, 8],
              py: [6, 6, 8],
              pr: [12, 12, 12],
            }}
          >
            <Heading
              as="h4"
              size="h4"
              sx={{ display: "flex", alignItems: "flex-start", mt: 0 }}
            >
              <Box sx={{ color: "#00ad20", mr: 3, mt: 1 }}>
                <InformationCircle w="16" h="16" color={"currentColor"} />{" "}
              </Box>
              This is a Beta version of the Broker Search Tool
            </Heading>
          </ModalHeader>

          <ModalCloseButton
            sx={{ top: [6, 6, 8], right: [4, 4, 6] }}
            bg="white"
            borderRadius="0"
            color="grey.300"
          />
          <ModalBody sx={{ px: [6, 6, 8], pt: 0, pb: [6, 6, 8] }}>
            {isOpen && (
              <Box>
                <Text textStyle="modal">
                  Please note that this is a Beta release of the CGU Broker
                  Search Tool which is still undergoing final testing before its
                  official release. Where otherwise marked, questions that lead
                  up to the results page in this tool are optional and may be
                  skipped.
                </Text>
              </Box>
            )}
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default BetaModal;
