import { CreateBoardParams, EditBoardParams } from '@boards/types'
import { BoardService } from './services/boards.service'

export const resolvers = {
	Query: {
		boards: () => BoardService.getList(),
		board: (_: unknown, { uuid }: { uuid: string }) => BoardService.getById(uuid),
	},
	Mutation: {
		createBoard: (_: unknown, params: CreateBoardParams) => BoardService.create(params),
		editBoard: (_: unknown, { uuid, ...params }: { uuid: string } & EditBoardParams) => BoardService.edit(uuid, params),
	},
}
