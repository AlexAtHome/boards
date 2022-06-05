import { CreateBoardParams, IBoard, IListDTO } from '@boards/types'
import { database } from '../database'
import { Board } from '../models'

export class BoardService {
	static async getList(): Promise<IListDTO<IBoard>> {
		const list = await database.getRepository(Board).find()
		return {
			list,
			size: list.length,
		}
	}

	static async create(params: CreateBoardParams): Promise<IBoard> {
		const repo = database.getMongoRepository(Board)
		const item = repo.create(params)
		return repo.save(item)
	}
}
