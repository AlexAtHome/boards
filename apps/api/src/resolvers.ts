import { CreateBoardParams } from '@boards/types'
import { BoardService } from './services/boards.service'

export const resolvers = {
	Query: {
		boards: () => BoardService.getList(),
	},
	Mutation: {
		createBoard: (_: unknown, params: CreateBoardParams) => BoardService.create(params),
	},
}
