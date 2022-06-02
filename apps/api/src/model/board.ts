import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm'
import { IBoard } from './interface'

@Entity('boards')
export class Board implements IBoard {
	@PrimaryGeneratedColumn('uuid')
	id!: string

	@Column()
	name!: string

	@CreateDateColumn()
	createdAt!: Date

	@UpdateDateColumn()
	updatedAt!: Date
}
