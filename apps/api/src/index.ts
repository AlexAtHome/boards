import 'reflect-metadata'

import { database } from './database'
import { port } from './const'
import { app } from './app'
import { endpoints } from './endpoints'

app.get('/', (_, res) => {
	res.send('Hello world!')
})

app.use('/v1', endpoints)

database
	.initialize()
	.then(() => {
		console.log('MongoDB connection has been established')
		return database.synchronize(false)
	})
	.then(() => {
		console.log('Collections has been synchronised')
		return app.listen(port, () => {
			console.log(`API listening on port ${port}`)
		})
	})
	.catch(err => {
		console.error('An error occured during connecting to MongoDB', err)
		process.exit(1)
	})
