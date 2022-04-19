import React from "react";
import ReactDOM from "react-dom";
import { ApolloProvider } from "@apollo/react-hooks";
import App from "./Components/App";
import Apollo from "./Components/Apollo";

ReactDOM.render(
  <ApolloProvider client={Apollo}>
    <App />
  </ApolloProvider>,

  document.getElementById("root")
);
