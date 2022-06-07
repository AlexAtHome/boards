import { ITask } from '@boards/types'
import { randomUUID } from 'crypto'
import { Column, Entity, ObjectID, ObjectIdColumn, PrimaryGeneratedColumn } from 'typeorm'

@Entity('tasks')
export class Task implements Omit<ITask, 'status'> {
	@ObjectIdColumn()
	id!: ObjectID

	@PrimaryGeneratedColumn('uuid')
	uuid: string

	@Column()
	title: string

	@Column()
	description: string

	constructor(params: Pick<ITask, 'title' | 'description'>) {
		this.title = params.title
		this.description = params.description
		this.uuid = randomUUID()
	}
}
