import { CheckCircleIcon } from '@heroicons/react/24/solid'
import { useState } from 'react'
import { postTask } from '../features/task-list'
import { useAppDispatch } from '../hooks.js'

const CreateTaskForm = () => {
	const inputId = 'task-name'
	const dispatch = useAppDispatch();

	const [title, setTitle] = useState('')

	/** @param {SubmitEvent} e */
	const createTask = (e) => {
		e.preventDefault()
		if (!title) {
			return
		}
		dispatch(postTask(title))
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

export default CreateTaskForm
