import React from "react";
import ReactDOM from "react-dom";
// import './index.css';
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { MoralisProvider } from "react-moralis";
import { BrowserRouter as Router } from "react-router-dom";

const theme = extendTheme({
  config: {
    initialColorMode: "dark",
  },
});

const appId = "lSmbjwfeaXyqEghT7em9blNUwlUmdv1IRtjgZynA";
const serverUrl = "https://y4lcj0urqkzm.moralishost.com:2053/server";

ReactDOM.render(
  <React.StrictMode>
    <MoralisProvider appId={appId} serverUrl={serverUrl}>
      <ChakraProvider theme={theme}>
        <Router>
          <App />
        </Router>
      </ChakraProvider>
    </MoralisProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
