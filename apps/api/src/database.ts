import { DataSource } from 'typeorm'
import { Board } from './models'

export const database = new DataSource({
	type: 'mongodb',
	// TODO: user definable parameters
	host: 'localhost',
	username: 'root',
	password: 'example',
	database: 'boards',
	appname: 'boards/api',
	authSource: 'admin',
	entities: [Board],
	ignoreUndefined: true,
})
