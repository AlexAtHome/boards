import CreateTaskForm from './components/create-task-form'
import Footer from './components/footer'
import Header from './components/header'
import TaskList from './components/task-list'
import { taskAdded } from './features/task-list'
import { useAppDispatch } from './hooks'

function App() {
	const dispatch = useAppDispatch()

	function createTask(title) {
		dispatch(taskAdded(title))
	}

	return (
		<div className="grid grid-flow-row min-h-screen" role="presentation">
			<Header />

			<main className="mb-auto p-3">
				<CreateTaskForm onSubmit={taskName => createTask(taskName)} />
				<TaskList />
			</main>

			<Footer />
		</div>
	)
}

export default App
