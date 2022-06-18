import { CreateBoardParams, EditBoardParams, IBoard, IListDTO } from '@boards/types'
import { Board } from '../models'
import { Provider } from '../utils/provider'

export class BoardService {
	private static provider = new Provider(Board)

	static async getList(): Promise<IListDTO<IBoard>> {
		return this.provider.getMany()
	}

	static async getById(uuid: string): Promise<IBoard | null> {
		return this.provider.getOneBy({ uuid })
	}

	static async create(input: CreateBoardParams): Promise<IBoard> {
		return this.provider.createOne(input)
	}

	static async edit(uuid: string, input: EditBoardParams): Promise<IBoard> {
		return this.provider.editOne({ uuid }, { ...input })
	}
}
