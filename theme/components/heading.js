export const HeadingStyles = {
  baseStyle: {
    fontFamily: "heading",
    fontWeight: "bold",
  },
  sizes: {
    h0: {
      fontSize: ["40px", "", "60px"],
      lineHeight: ["40px", "", "50px"],
      letterSpacing: ["-1px", "", "-2.25px"],
      textTransform: "uppercase",
    },
    h1: {
      fontSize: ["30px", "", "60px"],
      lineHeight: ["28px", "", "50px"],
      letterSpacing: ["-1.25px", "", "-2.25px"],
      textTransform: "uppercase",
    },
    h2: {
      fontSize: ["30px", "", "40px"],
      lineHeight: ["28px", "", "36px"],
      letterSpacing: ["-1.25px", "", "-1.5px"],
      textTransform: "uppercase",
    },
    h3: {
      fontSize: ["18px", "", "24px"],
      lineHeight: ["24px", "", "32px"],
      fontFamily: "body",
    },
    h4: {
      fontSize: ["18px", "", "20px"],
      lineHeight: ["24px", "", "26px"],
      fontFamily: "body",
      mt: 4,
    },
    guide: {
      fontSize: "26px",
      lineHeight: "22px",
      letterSpacing: "-0.75px",
      textTransform: "uppercase",
    },
  },
  // styles for different visual variants ("outline", "solid")
  variants: {
    fontWeight: {
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
    },
  },
};
