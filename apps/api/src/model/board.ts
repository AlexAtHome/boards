import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm'
import { IBoard } from '@boards/types'

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
