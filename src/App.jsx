import CreateTaskForm from './components/create-task-form'
import Footer from './components/footer'
import Header from './components/header'
import TaskList from './components/task-list'

function App() {
	function createTask(title) {
		alert(title)
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
