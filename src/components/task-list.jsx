import { useAppSelector } from "../hooks"

const TaskList = () => {
	/** @type {Task[]} */
	const taskList = useAppSelector(state => state.taskList)

	return <ul className="flex flex-col gap-2 my-4 pl-6 list-disc">{
		taskList.map((task) => <li key={task.uuid}>{task.title} {task.isDone && <span>(done)</span>}</li>)
	}</ul>
}

export default TaskList
