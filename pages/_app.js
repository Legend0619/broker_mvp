import { ChakraProvider } from "@chakra-ui/react";
import Fonts from "../fonts";
import theme from "../theme";
import "react-datepicker/dist/react-datepicker.css";
import "./date-picker.css";
import { Provider } from "react-redux";
import store from "../store";
import './index.css';

function App({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Fonts />
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </ChakraProvider>
  );
}
export default App;
