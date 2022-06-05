export interface IBoard {
	id: string
	name: string
	createdAt: Date
	updatedAt: Date
}

export interface ITask {
	id: string
	name: string
	description: string
	status: IStatus
}

export interface IStatus {
	id: string
	name: string
	parentBoard: IBoard
}
