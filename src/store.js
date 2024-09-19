import { configureStore } from '@reduxjs/toolkit'
import taskListReducer from './features/task-list/task-list.slice'

export const store = configureStore({
	reducer: {
		taskList: taskListReducer
	},
})
