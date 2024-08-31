import { XCircleIcon } from '@heroicons/react/24/solid'

/**
 * @typedef CreateTaskFormProps
 * @prop {(taskName: string) => void} onSubmit
 */

/** @param {CreateTaskFormProps} props */
const CreateTaskForm = (props) => {
	if (typeof props.onSubmit === 'undefined') {
		throw new Error('no onSubmit event')
	}
	const inputId = 'task-name'

	/** @param {SubmitEvent} e */
	const createTask = (e) => {
		e.preventDefault()
		/** @type {HTMLFormElement} */
		const form = e.target
		/** @type {string} */
		const taskName = form.elements[inputId].value
		props.onSubmit(taskName)
	}

	return <div>
		<form className="w-full" onSubmit={e => createTask(e)}>
			<label htmlFor={inputId}></label>
			<div className="w-full relative">
				<input type="text" id={inputId} name={inputId} className="bg-transparent text-inherit p-3 rounded-md border-2 border-blue-400 w-full focus:outline outline-2 outline-green-600 dark:outline-green-300 outline-offset-2 pr-12" />
				<button type="reset" title="Reset" className="absolute top-2 bottom-2 right-2 w-10 inline-flex justify-center items-center">
					<XCircleIcon role="presentation" className="w-6" />
				</button>
			</div>
		</form>
	</div>
}

export default CreateTaskForm
