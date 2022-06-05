import { gql } from 'apollo-server'

export const typeDefs = gql`
	type Board {
		id: String
		name: String
		createdAt: String
		updatedAt: String
	}

	type Query {
		boards: BoardListResponse
	}

	type BoardListResponse {
		list: [Board]
		size: Int
	}
`
