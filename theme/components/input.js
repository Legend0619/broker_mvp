export const InputStyles = {
  //   sizes: {},
  baseStyle: {
    field: {
      border: "2px solid",
      borderColor: "grey.200",
      pt: "16px",
    },
    input: {
      height: "52px",
    },
  },
  variants: {
    message: {
      textarea: {
        borderRadius: "0px",
        border: "2px solid",
        borderColor: "grey.200",
        pt: "16px",
      },
    },
  },
  defaultProps: {
    variant: null, // null here
  },
};
