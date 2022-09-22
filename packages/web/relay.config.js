module.exports = {
  // ...
  // Configuration options accepted by the `relay-compiler` command-line tool and `babel-plugin-relay`.
  src: './src',
  language: 'typescript', // "javascript" | "typescript" | "flow"
  schema: './data/schema.graphql',
  eagerEsModules: true,
  exclude: ['**/node_modules/**', '**/__mocks__/**', '**/__generated__/**'],
};
