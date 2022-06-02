import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'
import { IBoard, IStatus, ITask } from './interface'

@Entity({
	name: 'boards',
})
export class Board implements IBoard {
	@PrimaryGeneratedColumn('uuid')
	id!: string

	@Column()
	name!: string

	tasks!: ITask[]

	statuses!: IStatus[]
}
