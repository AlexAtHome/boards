import { CheckCircleIcon } from '@heroicons/react/24/solid'
import { useState } from 'react'
import { postTask } from '../features/task-list'
import { useAppDispatch } from '../hooks.js'

const CreateTaskForm = () => {
	const inputId = 'task-name'
	const dispatch = useAppDispatch();

	const [text, setText] = useState('')

	/** @param {SubmitEvent} e */
	const createTask = (e) => {
		e.preventDefault()
		if (!text) {
			return
		}
		let value = text.trim()
		const firstN = value.indexOf("\n")
		if (firstN === -1) {
			dispatch(postTask({ title: value }))
		} else {
			const title = text.slice(0, firstN).trim()
			const description = text.slice(firstN).trim()
			console.log({ title, description })
			dispatch(postTask({ title, description }))
		}
		setText('')
	}

	return <form onSubmit={e => createTask(e)}>
		<label htmlFor={inputId}>Enter the task title</label>
		<div className="flex gap-2 w-full items-start relative mt-2" role="presentation">
			<div role="presentation" className="inline-flex flex-grow relative">
				<textarea id={inputId} name={inputId} autoComplete="false" autoFocus={true} onChange={e => setText(e.target.value)} className="bg-transparent text-inherit p-3 rounded-md border-2 border-blue-400 w-full h-24 focus:outline outline-2 outline-green-600 dark:outline-green-300 outline-offset-2 pr-12" value={text} maxLength={320}></textarea>
			</div>
			<button type="submit" title="Add task" disabled={!text.trim()} className="top-2 bottom-2 right-2 w-10 inline-flex justify-center items-center focus:outline outline-2 outline-green-600 dark:outline-green-300 outline-offset-2 rounded-md disabled:cursor-not-allowed disabled:opacity-50">
				<CheckCircleIcon role="presentation" className="w-8" />
			</button>
		</div>
	</form>
}

export default CreateTaskForm
