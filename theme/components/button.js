export const ButtonStyles = {
  baseStyle: {
    fontFamily: "heading",
    fontWeight: "bold",
    textTransform: "uppercase",
    borderWidth: "2px",
    borderStyle: "solid",
    borderRadius: "0",
  },
  sizes: {
    lg: { fontSize: "24px", h: "60px", minW: "180px" },
    md: { fontSize: "20px", h: "50px", minW: "180px" },
    sm: { fontSize: "16px", h: "40px", minW: "180px" },
  },

  variants: {
    solid: {
      bg: "primary.500",
      borderColor: "primary.500",
      color: "secondary.500",
      width: ["100%", "auto"],
      _hover: {
        bg: "primary.600",
        borderColor: "primary.600",
        textDecoration: "underline",
        _disabled: {
          bg: "grey.50",
          borderColor: "grey.50",
        },
      },
      _active: {
        bg: "primary.800",
        borderColor: "primary.800",
        color: "white",
        svg: {
          path: { fill: "white" },
        },
      },
      _disabled: {
        opacity: "1",
        color: "grey.200",
        bg: "grey.50",
        borderColor: "grey.50",
        pointerEvents: "none",
        svg: {
          path: { fill: "grey.200" },
        },
      },
    },
    outline: {
      borderColor: "secondary.500",
      _hover: { borderColor: "secondary.500" },
      _active: {
        borderColor: "secondary.500",
      },
    },
    link: {
      border: "none",
      bg: "transparent",
      px: 0,
      py: 0,
      color: "currentColor",
      fontFamily: "body",
      fontWeight: "normal",
      textTransform: "none",
    },
    navy: {
      bg: "secondary.500",
      borderColor: "secondary.500",
      color: "white",
      width: ["100%", "300px", "215px"],
      _hover: {
        bg: "primary.800",
        borderColor: "primary.800",
        textDecoration: "underline",
      },
      _active: {
        bg: "primary.700",
        borderColor: "primary.700",
      },
    },
    beta: {
      bg: "primary.500",
      borderColor: "primary.500",
      fontFamily: "body",
      fontWeight: 700,
      letterSpacing: "0.05em",
      fontSize: ["12px", "", "14px"],
      lineHeight: "1rem",
      color: "white",
      width: ["100px", "100px", "140px"],
      minWidth: "none",
      height: "32px",
      display: "flex",
      px: [2, "", 3],
      pt: [1, "", 2],
      pb: [1, "", 2],
      mb: 4,
      ml: 8,
      alignSelf: ["flex-end", "flex-end", "flex-start"],
      _hover: {
        bg: "primary.800",
        borderColor: "primary.800",
        textDecoration: "underline",
      },
      _active: {
        bg: "primary.700",
        borderColor: "primary.700",
      },
    },
  },
};
