import 'reflect-metadata';
import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import { buildSchema } from 'type-graphql';
import { PrismaClient } from '@prisma/client';

import { UserResolver } from './resolvers/UserResolver';
import { CityResolver } from './resolvers/CityResolver';
import { ItineraryResolver } from './resolvers/ItineraryResolver';

export const prisma = new PrismaClient();

const main = async () => {
	const PORT = process.env.PORT || 4000;
	const app = express();

	const apolloServer = new ApolloServer({
		schema: await buildSchema({
			resolvers: [UserResolver, CityResolver, ItineraryResolver],
			validate: false,
		}),
	});

	apolloServer.applyMiddleware({ app });
	app.listen(PORT, () => {
		console.log(`Listening on port ${PORT}`);
	});
};

main();
