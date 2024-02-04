import { initUrqlClient } from "next-urql";
import { Client, ClientOptions } from "urql";
import { cacheExchange, fetchExchange, ssrExchange } from "urql";

const GRAPHQL_ENDPOINT = process.env.GRAPHQL_ENDPOINT!;

export function urqlClient(): Promise<Client> {
  return new Promise((resolve, reject) => {
    const client = initUrqlClient(
      {
        url: "http://localhost:3000/graphql",
        exchanges: [cacheExchange, fetchExchange],
      } as ClientOptions,
      false
    );
    if (!client) {
      reject(Error("Failed to init initUrqlClient."));
    } else {
      resolve(client);
    }
  });
}
