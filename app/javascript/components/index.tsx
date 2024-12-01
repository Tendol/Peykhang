import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

document.addEventListener("turbo:load", () => {
const root = createRoot(
document.body.appendChild(document.createElement("div"))
);

const client = new ApolloClient({
    uri: '/graphql',
    cache: new InMemoryCache(),
  });
  

root.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
);
});