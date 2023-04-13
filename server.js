const express = require("express");

const app = express();
const { createServer } = require("http");

const { makeExecutableSchema } = require("@graphql-tools/schema");
const { loadFilesSync } = require("@graphql-tools/load-files");
const { ApolloServer } = require("@apollo/server");
const { expressMiddleware } = require("@apollo/server/express4");
const {
  ApolloServerPluginDrainHttpServer,
} = require("@apollo/server/plugin/drainHttpServer");

const typesArray = loadFilesSync("**/*", {
  extensions: ["graphql"],
});
const resolversArray = loadFilesSync("**/*", {
  extensions: ["resolvers.js"],
});

const httpServer = createServer(app);

const startApolloServer = async () => {
  const schema = makeExecutableSchema({
    typeDefs: typesArray,
    resolvers: resolversArray,
  });

  const server = new ApolloServer({
    schema,
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
  });

  await server.start();
  app.use(express.json(), expressMiddleware(server));

  httpServer.listen({ port: 3000 }, () =>
    console.log("listening on port 3000")
  );
};

startApolloServer();
