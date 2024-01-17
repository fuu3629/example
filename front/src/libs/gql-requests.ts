import { initUrqlClient } from "next-urql";
import { Client, ClientOptions } from "urql";
import { cacheExchange, fetchExchange, ssrExchange } from "urql";

const GRAPHQL_ENDPOINT = process.env.GRAPHQL_ENDPOINT!;

export function urqlClient(): Promise<Client> {
  return new Promise((resolve, reject) => {
    const client = initUrqlClient(
      {
        url: GRAPHQL_ENDPOINT,
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
