import { DataSource } from 'typeorm'

export const database = new DataSource({
	type: 'mongodb',
	// TODO: user definable parameters
	host: 'localhost',
	username: 'root',
	password: 'example',
	database: 'boards',
	synchronize: true,
	logging: true,
	appname: 'boards/api',
	authSource: 'admin',
	entities: ['model/*.js'],
})
