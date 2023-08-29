const styles = {
  styles: {
    global: {
      "*": {
        boxSizing: "border-box",
      },
      "*:before": {
        boxSizing: "border-box",
      },
      "*:after": {
        boxSizing: "border-box",
      },

      html: {
        padding: 0,
        margin: 0,
      },
      body: {
        padding: 0,
        margin: 0,
        font: "16px neptune, helvetica, arial, sans-serif",
        fontFamily: "neptune, helvetica, arial, sans-serif",
      },

      ".is--prevent-scroll": {
        height: "100vh",
        overflow: "hidden",
      },

      a: {
        color: "inherit",
        textDecoration: "none",
      },
    },
  },
};

export default styles;
