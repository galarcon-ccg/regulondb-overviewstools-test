import React from "react";
import ReactDOM from "react-dom";
import client from "./conf/ApolloClient";
import { ApolloProvider } from "react-apollo";
import { BrowserRouter } from "react-router-dom";
import Overviews from "./App";

ReactDOM.render(
  <ApolloProvider client={client}>
    <React.StrictMode>
      <BrowserRouter>
        <Overviews />
      </BrowserRouter>
    </React.StrictMode>
  </ApolloProvider>,
  document.getElementById("root")
);
