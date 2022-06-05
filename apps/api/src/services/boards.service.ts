import { CreateBoardParams, EditBoardParams, IBoard, IListDTO } from '@boards/types'
import { database } from '../database'
import { Board } from '../models'

export class BoardService {
	private static repo = database.getMongoRepository(Board)

	static async getList(): Promise<IListDTO<IBoard>> {
		const list = await this.repo.find()
		return {
			list,
			size: list.length,
		}
	}

	static async getById(uuid: string): Promise<IBoard | null> {
		const item = await this.repo.findOneBy({ uuid })
		return item
	}

	static async create(params: CreateBoardParams): Promise<IBoard> {
		const item = this.repo.create(params)
		return this.repo.save(item)
	}

	static async edit(uuid: string, params: EditBoardParams): Promise<IBoard> {
		console.log({ uuid, params })
		const result = await this.repo.findOneAndUpdate(
			{ uuid },
			{ $set: { ...params } },
			{
				upsert: false,
			}
		)
		if (result.ok === 1) {
			return (await this.getById(uuid)) as Board
		}
		throw new Error('something is horribly wrong')
	}
}
