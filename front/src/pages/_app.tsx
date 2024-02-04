import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { useMemo } from "react";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "http://localhost:3000/graphql", // エンドポイント
  headers: {
    "Access-Control-Allow-Origin": "*",
  },
  cache: new InMemoryCache(), // キャッシュを利用する設定
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <ApolloProvider client={client}>
        <Component {...pageProps} />
      </ApolloProvider>
    </ChakraProvider>
  );
}
