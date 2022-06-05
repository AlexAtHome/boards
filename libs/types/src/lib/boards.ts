export interface IBoard {
	uuid: string
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

export type CreateBoardParams = Pick<IBoard, 'name'>

export type EditBoardParams = Pick<IBoard, 'name'>

export type DeleteBoardParams = {
	id: string
}
