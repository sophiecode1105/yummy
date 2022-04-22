import { ApolloClient, InMemoryCache } from "@apollo/client";

import { createUploadLink } from "apollo-upload-client";

const uploadLink = createUploadLink({
  uri: "http://localhost:4000/graphql",
});

export const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: uploadLink as any,
});
export default client;
