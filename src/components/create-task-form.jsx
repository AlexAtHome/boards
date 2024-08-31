import PropTypes from 'prop-types'
import { CheckCircleIcon } from '@heroicons/react/24/solid'
import { useState } from 'react'

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

	const [title, setTitle] = useState('')

	/** @param {SubmitEvent} e */
	const createTask = (e) => {
		e.preventDefault()
		if (!title) {
			return
		}
		props.onSubmit(title)
		setTitle('')
	}

	return <form onSubmit={e => createTask(e)}>
		<label htmlFor={inputId}>Enter the task title</label>
		<div className="flex gap-2 w-full relative mt-2" role="presentation">
			<div role="presentation" className="inline-flex flex-grow relative">
				<input type="text" id={inputId} name={inputId} autoComplete="false" autoFocus={true} value={title} onChange={e => setTitle(e.target.value)} className="bg-transparent text-inherit p-3 rounded-md border-2 border-blue-400 w-full focus:outline outline-2 outline-green-600 dark:outline-green-300 outline-offset-2 pr-12" />

				{/*<button type="reset" title="Reset" className="absolute top-2 bottom-2 right-2 w-10 inline-flex justify-center items-center">
					<XCircleIcon role="presentation" className="w-6" />
				</button>*/}
			</div>
			<button type="submit" title="Add task" disabled={!title} className="top-2 bottom-2 right-2 w-10 inline-flex justify-center items-center focus:outline outline-2 outline-green-600 dark:outline-green-300 outline-offset-2 rounded-md disabled:cursor-not-allowed disabled:opacity-50">
				<CheckCircleIcon role="presentation" className="w-8" />
			</button>
		</div>
	</form>
}

CreateTaskForm.propTypes = {
	onSubmit: PropTypes.func.isRequired
}

export default CreateTaskForm
