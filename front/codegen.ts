import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  overwrite: true,
  schema: "http://localhost:3000/graphql",
  documents: "src/graphql/query/*.graphql",
  generates: {
    "./src/graphql/generated/": {
      preset: "client",
      plugins: [],
    },
    "./src/graphql/generated/graphql.schema.json": {
      plugins: ["introspection"],
    },
    "./src/graphql/generated/graphql-operations.ts": {
      plugins: ["typescript", "typescript-operations", "typed-document-node"],
    },
  },
};

export default config;
