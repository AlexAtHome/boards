import * as express from 'express'
import { ApolloServer } from 'apollo-server-express'
import { createServer } from 'http'
import { ApolloServerPluginDrainHttpServer } from 'apollo-server-core'
import { typeDefs } from './type-defs'
import { resolvers } from './resolvers'
import { port } from './const'

export async function startServer(): Promise<void> {
	const app = express()
	const httpServer = createServer(app)
	const server = new ApolloServer({
		typeDefs,
		resolvers,
		csrfPrevention: true,
		plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
	})

	await server.start()
	server.applyMiddleware({ app })
	await new Promise<void>(resolve => httpServer.listen({ port }, resolve))

	console.log(`🚀 Server ready at http://localhost:${port}${server.graphqlPath}`)
}
