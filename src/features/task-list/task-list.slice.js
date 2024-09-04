import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { nanoid } from 'nanoid'
import { Database } from '../database'

/**
 * @typedef Task
 * @prop {string} id
 * @prop {string} title
 * @prop {boolean} isDone
 */

/**
 * @template Type
 * @typedef AsyncDTO
 * @prop {'idle' | 'pending' | 'success' | 'error'} status
 * @prop {string | null} error
 * @prop {Type} data
 */

/**
 * @template P
 * @typedef {import('@reduxjs/toolkit').PayloadAction<P>} PayloadAction
 */

/**
 * @typedef {AsyncDTO<Task[]>} AsyncTaskList
 */

/** @type {AsyncTaskList} */
const initialState = {
	status: 'idle',
	error: null,
	data: []
}

export const fetchTasks = createAsyncThunk('task-list/fetch', async () => {
	return Database.getAllFrom('tasks')
}, {
	condition(_, api) {
		const status = selectTasksStatus(api.getState())
		if (status !== 'idle') {
			return false
		}
	}
})

export const postTask = createAsyncThunk('task-list/post', async (title) => {
	const task = {
		id: nanoid(),
		title,
		isDone: false
	}
	await Database.addTo('tasks', task)
	return task
})

const taskListReducer = createSlice({
	name: 'task-list',
	initialState,
	reducers: {
		/**
		 * @param {AsyncTaskList} state
		 * @param {PayloadAction<string>} action
		 */
		taskMarkedAsDone(state, action) {
			const i = state.data.findIndex(task => task.id === action.payload)
			state.data[i].isDone = !state.data[i].isDone
		}
	},
	extraReducers: builder => builder
		.addCase(fetchTasks.pending, (state) => {
			state.status = 'pending'
		})
		.addCase(fetchTasks.fulfilled, (state, action) => {
			state.status = 'success'
			state.data.push(...action.payload)
		})
		.addCase(fetchTasks.rejected, (state, action) => {
			state.status = 'error'
			state.error = action.error.message ?? 'Unknown Error'
		})
		.addCase(postTask.fulfilled, (state, action) => {
			state.data.push(action.payload)
		})
})

export const { taskMarkedAsDone } = taskListReducer.actions

export default taskListReducer.reducer

export const selectAllTasks = state => state.taskList.data
export const selectTasksStatus = state => state.taskList.status
export const selectTasksError = state => state.taskList.error
