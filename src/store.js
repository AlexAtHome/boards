import { configureStore, Tuple } from '@reduxjs/toolkit'
import taskListReducer, { serialisableMiddleware } from './features/task-list/task-list.slice'

export const store = configureStore({
	reducer: {
		taskList: taskListReducer
	},
	// middleware: () => new Tuple(serialisableMiddleware)
})
