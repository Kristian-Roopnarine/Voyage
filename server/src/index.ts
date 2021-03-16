import "reflect-metadata";
import express from "express";
import { ApolloServer } from "apollo-server-express";
import { buildSchema } from "type-graphql";

import { UserResolver } from "./resolvers/UserResolver";

const main = async () => {
  const PORT = process.env.PORT || 4000;
  const app = express();

  const apolloServer = new ApolloServer({
    schema: await buildSchema({
      resolvers: [UserResolver],
      validate: false,
    }),
  });

  apolloServer.applyMiddleware({ app });
  app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
  });
};

main();
