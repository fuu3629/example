import gql from "graphql-tag";
import { useQuery, useMutation } from "@apollo/client";
import { LoginDocument, LoginMutation } from "@/graphql/generated/graphql";

import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { useMemo } from "react";
import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
  createHttpLink,
} from "@apollo/client";

export default function Home() {
  return (
    <>
      <div>こんにちは</div>
      <div>てすと</div>
    </>
  );
}
