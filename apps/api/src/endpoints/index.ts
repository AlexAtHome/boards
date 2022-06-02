import * as express from 'express'
import { board } from './board'

export const endpoints = express()

endpoints.use('/boards', board)
