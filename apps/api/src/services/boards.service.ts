import { IBoard, IListDTO } from '@boards/types'
import { database } from '../database'
import { Board } from '../models'

export class BoardService {
	static async getList(): Promise<IListDTO<IBoard>> {
		const list = await database.getRepository(Board).find()
		console.log(list)
		return {
			list,
			size: list.length,
		}
	}

	static async create(params: { name: string }): Promise<IBoard> {
		const repo = database.getRepository(Board)
		const board = repo.create(params)
		return repo.save(board)
	}
}
