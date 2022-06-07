import { gql } from 'apollo-server'

export const typeDefs = gql`
	type Board {
		uuid: ID!
		name: String
		createdAt: String
		updatedAt: String
		tasks: TaskListResponse
	}

	type Query {
		boards: BoardListResponse!
		board(uuid: ID): Board

		task(uuid: ID): Task
		tasks(boardUuid: ID): TaskListResponse!
	}

	type Mutation {
		createBoard(name: String): Board!
		editBoard(uuid: ID, name: String): Board!

		createTask(input: CreateTaskInput): Task!
		editTask(input: EditTaskInput): Task!
		deleteTask(input: DeleteTaskInput): Task!
	}

	type BoardListResponse {
		list: [Board!]!
		size: Int
	}

	type TaskListResponse {
		list: [Task!]
		size: Int
	}

	type Task {
		uuid: ID!
		title: String
		description: String
	}

	input CreateTaskInput {
		title: String!
		description: String
	}

	input EditTaskInput {
		title: String
		description: String
	}

	input DeleteTaskInput {
		title: String
		description: String
	}
`
