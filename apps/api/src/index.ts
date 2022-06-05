import 'reflect-metadata'

import { database } from './database'
import { startServer } from './app'

database
	.initialize()
	.then(() => {
		console.log('MongoDB connection has been established')
		return database.synchronize(false)
	})
	.then(() => {
		console.log('Collections has been synchronised')
		return startServer()
	})
	.catch(err => {
		console.error('An error occured during the server start!', err)
		process.exit(1)
	})
