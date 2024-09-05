import { clsx } from 'clsx';
import PropTypes from 'prop-types'
import { useAppSelector } from "../hooks"
import { CheckCircleIcon } from '@heroicons/react/24/solid'
import { useAppDispatch } from '../hooks'
import { selectAllTasks, selectTasksStatus, selectTasksError, markTaskAsDone } from '../features/task-list';

const TaskList = () => {
	const dispatch = useAppDispatch()
	const taskList = useAppSelector(selectAllTasks)
	const error = useAppSelector(selectTasksError)
	const status = useAppSelector(selectTasksStatus)

	return <div>
		{status === 'idle' && <div>About to start loading...</div>}
		{status === 'pending' && <div>Loading...</div>}
		{status === 'success' && <ul className="flex flex-col gap-2 my-4">{
			taskList.map((task) => <TaskItem onMarkAsDone={() => dispatch(markTaskAsDone(task))} key={task.id} {...task} />)
		}</ul>}
		{status === 'error' && <div>An error occured: {error}</div>}
	</div>
}

/**
 * @typedef {import('../features/task-list').Task} Task
 * @typedef {Task & { onMarkAsDone: (task: Task) => void }} TaskProps
 */

/** @param {TaskProps} task */
const TaskItem = (task) => {
	const id = `task-${task.id}`
	return <li key={task.id} aria-labelledby={id} className="bg-slate-300 dark:bg-slate-700 rounded-md inline-flex justify-between items-center">
		<span id={id} className={clsx("py-2 px-4", { "line-through opacity-50": task.isDone })}>{task.title}</span>
		{!task.isDone && <button type="button" title="Mark as done" onClick={() => task.onMarkAsDone(task)} className="p-2 inline-flex justify-center items-center focus:outline outline-2 outline-green-600 dark:outline-green-300 outline-offset-2 rounded-md disabled:cursor-not-allowed disabled:opacity-50">
			<CheckCircleIcon role="presentation" className="w-6" />
		</button>}
	</li>;
}

TaskItem.propTypes = {
	id: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	isDone: PropTypes.bool.isRequired,
	onMarkAsDone: PropTypes.func.isRequired,
}

export default TaskList
