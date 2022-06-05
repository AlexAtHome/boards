import { Entity, Column, CreateDateColumn, UpdateDateColumn, PrimaryGeneratedColumn, ObjectIdColumn } from 'typeorm'
import { IBoard } from '@boards/types'
import { randomUUID } from 'crypto'

@Entity('boards')
export class Board implements IBoard {
	@ObjectIdColumn()
	id!: string

	@PrimaryGeneratedColumn('uuid')
	uuid!: string

	@Column()
	name: string

	@CreateDateColumn()
	createdAt!: Date

	@UpdateDateColumn()
	updatedAt!: Date

	constructor(name: string) {
		this.name = name
		this.uuid = randomUUID()
	}
}
