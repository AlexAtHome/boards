import { gql } from 'apollo-server'

export const typeDefs = gql`
	type Board {
		id: ID
		name: String
		createdAt: String
		updatedAt: String
	}

	type Query {
		boards: BoardListResponse!
	}

	type Mutation {
		createBoard(name: String): Board
	}

	type BoardListResponse {
		list: [Board!]!
		size: Int
	}
`
