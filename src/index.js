import React from "react";
import ReactDOM from "react-dom";
import "normalize.css";
import "./index.css";
import App from "./App";
import { store } from "./store";
import { Provider } from "react-redux";
import { GlobalStyle } from "./styles/global";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "./styles/theme";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <GlobalStyle />
      <ChakraProvider theme={theme}>
        <App />
      </ChakraProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
