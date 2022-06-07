import { CreateTaskParams, IListDTO, ITask } from '@boards/types'
import { database } from '../database'
import { Task } from '../models'

export class TaskService {
	private static repo = database.getMongoRepository(Task)

	static async getList(_boardUuid: string): Promise<IListDTO<ITask>> {
		const list = await this.repo.find()
		return {
			list,
			size: list.length,
		}
	}

	static async create(params: CreateTaskParams): Promise<ITask> {
		const item = this.repo.create(params)
		return this.repo.save(item)
	}
}
