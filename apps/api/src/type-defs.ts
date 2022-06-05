import { gql } from 'apollo-server'

export const typeDefs = gql`
	type Board {
		uuid: ID
		name: String
		createdAt: String
		updatedAt: String
	}

	type Query {
		boards: BoardListResponse!
		board(uuid: ID): Board
	}

	type Mutation {
		createBoard(name: String): Board!
		editBoard(uuid: ID, name: String): Board!
	}

	type BoardListResponse {
		list: [Board!]!
		size: Int
	}
`
