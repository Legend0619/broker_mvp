import { extendTheme } from "@chakra-ui/react";
const colors = {
  secondary: {
    50: "#F2F3F4",
    100: "#C2C3CB",
    300: "#484B61",
    400: "#222540",
    500: "#090d2b",
  },
  primary: {
    300: "#99dea5",
    400: "#66cd79",
    500: "#00ad20",
    600: "#019e20",
    700: "#007504",
    800: "#045c26",
    900: "#004802",
  },
  blue: {
    500: "#0077D8",
  },
  grey: {
    50: "#F9F9FA",
    100: "#E2E2E5",
    200: "#C2C3CB",
    300: "#828494",
  },
};
// // Global style overrides
import styles from "./styles";

// // Foundational style overrides
import fonts from "./foundations/fonts";
import { HeadingStyles as Heading } from "./components/heading";
import { InputStyles as Input } from "./components/input";
import { TextareaStyles as Textarea } from "./components/textarea";
import { ButtonStyles as Button } from "./components/button";
import { ContainerStyles as Container } from "./components/container";
import { BoxStyles as Box } from "./components/box";
// // Component style overrides

const activeLabelStyles = {
  transform: "translateY(-10px)",
  fontSize: "11px",
};
const theme = extendTheme({
  colors,
  styles,
  fonts,
  textStyles: {
    radioCard: {
      fontFamily: "heading",
      fontSize: "20px",
      textTransform: "uppercase",
      lineHeight: "20px",
    },
    radioButton: {
      fontFamily: "body",
      fontSize: "16px",
      lineHeight: "18px",
      fontWeight: "700",
    },
    modal: {
      fontSize: ["14px", "14px", "16px"],
      lineHeight: ["20px", "20px", "22px"],
    },
    helperText: {
      fontSize: ["14px", "14px", "16px"],
      lineHeight: ["20px", "20px", "22px"],
    },
  },
  textarea: {
    borderRadius: "0px",
    border: "2px solid",
    borderColor: "grey.200",
    pt: "16px",
  },
  // Other foundational style overrides go here
  components: {
    Heading,
    Button,
    Container,
    Box,
    Text: {
      baseStyle: {
        a: {
          textDecoration: "underline",
          _hover: { textDecoration: "none" },
        },
      },
    },
    List: {
      parts: ["item"],
      baseStyle: {
        item: {
          mb: 2,
        },
      },
    },
    Accordion: {
      parts: ["button", "panel"],
      baseStyle: {
        button: {
          fontWeight: "bold",
          px: 0,
          _focus: {
            bg: "transparent",
          },
        },
        panel: {
          px: 0,
        },
      },
    },
    Form: {
      variants: {
        floating: {
          container: {
            maxW: "488px",
            _focusWithin: {
              label: {
                ...activeLabelStyles,
                color: "primary.500",
              },
              input: {
                borderWidth: "2px",
                borderColor: "primary.500",
                height: "52px",
              },
            },
            "input:not(:placeholder-shown) ~ label, .chakra-select__wrapper ~ label":
              {
                ...activeLabelStyles,
                color: "primary.500",
              },
            "input[aria-invalid='true'] ~ label": {
              ...activeLabelStyles,
              color: "red.500",
            },
            _hover: {
              input: {
                borderWidth: "2px",
                borderColor: "primary.500",
                height: "52px",
              },
            },
            label: {
              top: 0,
              left: 0,
              // zIndex: 2,
              position: "absolute",
              backgroundColor: "white",
              pointerEvents: "none",
              mx: 3,
              px: 1,
              my: 4,
              transformOrigin: "left top",
              transitionProperty: "font-size, transform",
            },
            input: {
              height: "52px",
              borderRadius: 0,
              borderWidth: "1px",
              borderColor: "grey.100",

              "&[aria-invalid='true']": {
                borderColor: "red.500",
                borderWidth: "2px",
                height: "52px",
              },
            },
          },
        },
        postcode: {
          container: {
            maxW: "488px",

            _focusWithin: {
              // label: {
              //   ...activeLabelStyles,
              //   color: "primary.500",
              // },
              input: {
                borderWidth: "2px",
                borderColor: "primary.500",
                height: "52px",
              },
            },
            // "input:not(:placeholder-shown) ~ label, .chakra-select__wrapper ~ label":
            //   {
            //     ...activeLabelStyles,
            //     color: "primary.500",
            //   },
            // "input[aria-invalid='true'] ~ label": {
            //   ...activeLabelStyles,
            //   color: "red.500",
            // },
            _hover: {
              input: {
                borderWidth: "2px",
                borderColor: "primary.500",
                height: "52px",
              },
            },
            label: {
              my: 2,
              fontSize: ["18px", "", "22px"],
              lineHeight: ["24px", "", "30px"],
              fontFamily: "body",
              fontWeight: "700",
            },
            ".chakra-form__helper-text": {
              color: "white",
              mt: 2,
              mb: 6,
            },
            ".chakra-form__error-message": {
              color: "secondary.300",
              mt: 2,
              mb: 2,
              bg: "white",
              px: 3,
              py: 2,
              display: "inline-flex",
              position: "relative",
            },
            input: {
              height: "52px",
              borderRadius: 0,
              borderWidth: "1px",
              borderColor: "grey.100",
              color: "secondary.500",
              pt: 1,
              "&[aria-invalid='true']": {
                borderColor: "red.500",
                borderWidth: "2px",
                height: "52px",
              },
            },
          },
        },
      },
    },
    Input,
    Textarea,
    // Other components go here
  },
});

export default theme;
