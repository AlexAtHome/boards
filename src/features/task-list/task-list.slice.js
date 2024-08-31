import { createSlice } from '@reduxjs/toolkit'
import { nanoid } from 'nanoid'

/**
 * @typedef Task
 * @prop {string} id
 * @prop {string} title
 * @prop {boolean} isDone
 */

/**
 * @template P
 * @typedef {import('@reduxjs/toolkit').PayloadAction<P>} PayloadAction
 */

/** @type {Task[]} */
const initialState = [
	{ id: '122b6038-5487-4c92-a30e-2c21357d042b', title: 'Buy groceries', isDone: false },
	{ id: '59152986-cd4d-48a8-9c62-30314c4ef693', title: 'Make the best todo app out there', isDone: false },
]

const taskListReducer = createSlice({
	name: 'task-list',
	initialState,
	reducers: {
		/**
		 * @param {Task[]} state
		 * @param {PayloadAction<string>} action
		 */
		taskAdded(state, action) {
			state.push({
				id: nanoid(),
				title: action.payload,
				isDone: false
			})
		},
		/**
		 * @param {Task[]} state
		 * @param {PayloadAction<string>} action
		 */
		taskMarkedAsDone(state, action) {
			const i = state.findIndex(task => task.id === action.payload)
			state[i].isDone = !state[i].isDone
		}
	}
})

export const { taskAdded, taskMarkedAsDone } = taskListReducer.actions

export default taskListReducer.reducer
