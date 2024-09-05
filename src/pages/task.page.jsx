import CreateTaskForm from '../components/create-task-form'
import TaskList from '../components/task-list'

export const TaskPage = () => <div className="flex flex-col gap-3 w-full max-w-5xl mx-auto">
	<CreateTaskForm />
	<TaskList />
</div>
