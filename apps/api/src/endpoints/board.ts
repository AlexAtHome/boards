import * as express from 'express'
import { database } from '../database'
import { Board, IBoard, IListDTO } from '../model'

export const board = express()

board
	.route('/')
	.get(async (_, res) => {
		const boards = await database.getRepository(Board).find()
		return res.status(200).json({
			list: boards,
			size: boards.length,
		} as IListDTO<IBoard>)
	})
	.post(async (req, res) => {
		try {
			const board = await database.getRepository(Board).create(req.body)
			const results = await database.getRepository(Board).save(board)
			res.status(201).json(results)
		} catch (e) {
			console.error('error', e)
			res.status(500).json(e)
		}
	})
