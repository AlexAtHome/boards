import { Entity, Column, CreateDateColumn, UpdateDateColumn, ObjectID, ObjectIdColumn } from 'typeorm'
import { IBoard } from '@boards/types'

@Entity('boards')
export class Board implements IBoard {
	@ObjectIdColumn()
	id!: ObjectID

	@Column()
	name: string

	@CreateDateColumn()
	createdAt!: Date

	@UpdateDateColumn()
	updatedAt!: Date

	constructor(name: string) {
		this.name = name
	}
}
