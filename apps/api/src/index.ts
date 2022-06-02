import 'reflect-metadata'
import * as express from 'express'
import { database } from './database'

const port = 3500
const app = express()

app.get('/', (req, res) => {
	res.send('Hello world!')
})

database
	.initialize()
	.then(() => {
		console.log('MongoDB connection has been established')
	})
	.catch(err => {
		console.error('An error occured during connecting to MongoDB', err)
		process.exit(1)
	})

app.listen(port, () => {
	console.log(`API listening on port ${port}`)
})
