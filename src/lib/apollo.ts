import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: "https://api-sa-east-1.graphcms.com/v2/cl4o388jn0bf201z7cwbg95s0/master",
  cache: new InMemoryCache(),
});
