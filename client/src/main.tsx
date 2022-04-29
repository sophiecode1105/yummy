import React from "react";
import ReactDOM from "react-dom";
import { ApolloProvider } from "@apollo/react-hooks";
import App from "./Components/App";
import Apollo from "./Components/Apollo";
import { RecoilRoot } from "recoil";

ReactDOM.render(
  <RecoilRoot>
    <ApolloProvider client={Apollo}>
      <App />
    </ApolloProvider>
  </RecoilRoot>,

  document.getElementById("root")
);
