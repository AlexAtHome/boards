import * as express from 'express'
import { database } from '../database'
import { Board, IBoard, IListDTO } from '../model'

export const board = express()

board.get('/', async (_, res) => {
	const boards = await database.getRepository(Board).find()
	res.json({
		list: boards,
		size: boards.length,
	} as IListDTO<IBoard>)
})
