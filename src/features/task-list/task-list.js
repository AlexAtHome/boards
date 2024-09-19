import { Database } from '../database'

/**
 * @typedef Task
 * @prop {string} id
 * @prop {string} title
 * @prop {boolean} isDone
 * @prop {Date} createdAt
 * @prop {Date} modifiedAt
 *
 * @typedef {Task} SerializedTask
 * @prop {string} createdAt
 * @prop {string} modifiedAt
 */

export const getAllTasks = async () => {
	/** @type {Task[]} */
	const data = await Database.getAllFrom('tasks')
	return data.map(serializeTask)
}

/**
 * @param {Task} task
 * @returns {SerializedTask}
 */
export const serializeTask = task => ({
	...task,
	createdAt: task.createdAt instanceof Date ? task.createdAt.toISOString() : task.createdAt,
	modifiedAt: task.modifiedAt instanceof Date ? task.modifiedAt.toISOString() : task.modifiedAt,
})

export const deserializeTask = task => ({
	...task,
	createdAt: new Date(task.createdAt),
	modifiedAt: new Date(task.modifiedAt),
})
