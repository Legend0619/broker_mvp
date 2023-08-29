import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  Box,
  Flex,
  Heading,
} from "@chakra-ui/react";
import { LinkButton } from "./Buttons";
import InformationCircle from "../../icons/InformationCircle";

const HelpModal = ({ triggerText, targetTitle, triggerSX, children }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <LinkButton onClick={onOpen} mt={1} sx={{ ...triggerSX }} className="hero-text" fontSize="14px" style={{ display: "content" }}>
        {triggerText}
      </LinkButton>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent
          sx={{
            borderRadius: 0,
            width: "100%",
            maxWidth: "700px",
            mx: 4,
          }}
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
              {targetTitle}
            </Heading>
          </ModalHeader>

          <ModalCloseButton
            sx={{ top: [6, 6, 8], right: [4, 4, 6] }}
            bg="white"
            borderRadius="0"
            color="grey.300"
          />
          <ModalBody sx={{ px: [6, 6, 8], pt: 0, pb: [6, 6, 8] }}>
            {isOpen && <Box>{children}</Box>}
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default HelpModal;
