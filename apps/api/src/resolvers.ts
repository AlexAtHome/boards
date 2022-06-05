import { BoardService } from './services/boards.service'

export const resolvers = {
	Query: {
		boards: () => BoardService.getList(),
	},
}
