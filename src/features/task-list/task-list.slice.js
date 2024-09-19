import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { nanoid } from 'nanoid'
import { Database } from '../database'
import { deserializeTask, getAllTasks, serializeTask } from './task-list'

/**
 * @typedef {import('./task-list.js').Task} Task
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
	return getAllTasks()
}, {
	condition(_, api) {
		const status = selectTasksStatus(api.getState())
		if (status !== 'idle') {
			return false
		}
	}
})

export const postTask = createAsyncThunk('task-list/post', async ({ title, description }) => {
	const createdAt = new Date()
	/** @type {Task} */
	const task = {
		id: nanoid(),
		title,
		description,
		isDone: false,
		createdAt,
		modifiedAt: createdAt
	}
	await Database.addTo('tasks', task)
	return serializeTask(task)
})

export const markTaskAsDone = createAsyncThunk('task-list/mark-as-done', async (task) => {
	const { id, ...data } = task
	const modifiedAt = new Date()
	await Database.put('tasks', id, deserializeTask({ ...data, isDone: true, modifiedAt }))
	return { ...task, isDone: true, modifiedAt: modifiedAt.toISOString() }
})

const taskListReducer = createSlice({
	name: 'task-list',
	initialState,
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
			console.error(state.error, action.error)
		})
		.addCase(postTask.fulfilled, (state, action) => {
			state.data.push(action.payload)
		})
		.addCase(postTask.rejected, (_, action) => {
			console.error(action.error)
		})
		.addCase(markTaskAsDone.fulfilled, (state, action) => {
			const i = state.data.findIndex(task => task.id === action.payload.id)
			state.data[i].isDone = !state.data[i].isDone
		})
})

export default taskListReducer.reducer

export const selectAllTasks = state => state.taskList.data
export const selectTasksStatus = state => state.taskList.status
export const selectTasksError = state => state.taskList.error
