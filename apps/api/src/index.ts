import * as express from "express";

const port = 3500
const app = express()

app.get('/', (req, res) => {
	res.send('Hello world!')
})

app.listen(port, () => {
	console.log(`API listening on port ${port}`)
})
