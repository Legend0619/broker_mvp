import { Global } from "@emotion/react";

const Fonts = () => (
  <Global
    styles={`
      /* latin */
      @font-face {
        font-family: "druk-bold";
        src: url("./fonts/DrukText-Bold-Web.woff2") format("woff2"),
          url("./fonts/DrukText-Bold-Web.woff") format("woff");
        font-weight: 700;
        font-style: normal;
        font-stretch: normal;
        font-display: swap;
      }
      /* latin */
      @font-face {
        font-family: "druk-medium";
        src: url("./fonts/Druk-Medium-Web.woff2") format("woff2"),
          url("./fonts/Druk-Medium-Web.woff") format("woff");
        font-weight: 500;
        font-style: normal;
        font-stretch: normal;
        font-display: swap;
      }
      /* latin */
      @font-face {
        font-family: "neptune-bold";
        src: url("./fonts/39D72D_0_0.eot");
        src: url("./fonts/39D72D_0_0.eot?#iefix") format("embedded-opentype"),
          url("./fonts/39D72D_0_0.woff2") format("woff2"),
          url("./fonts/39D72D_0_0.woff") format("woff"),
          url("./fonts/39D72D_0_0.ttf") format("truetype");
          font-display: swap;
      }
      /* latin */
      @font-face {
        font-family: "neptune";
        src: url("./fonts/39D72D_1_0.eot");
        src: url("./fonts/39D72D_1_0.eot?#iefix") format("embedded-opentype"),
          url("./fonts/39D72D_1_0.woff2") format("woff2"),
          url("./fonts/39D72D_1_0.woff") format("woff"),
          url("./fonts/39D72D_1_0.ttf") format("truetype");
          font-display: swap;
      }
      `}
  />
);

export default Fonts;
