class ConnectionError extends Error {
	name = 'ConnectionError'
	message = 'Unable to open the database connection'
}

class BlockedError extends Error {
	name = 'BlockedError'
	message = 'The connection has been blocked by the browser'
}

/**
 * @typedef {'tasks'} StoreName
 */

export class Database {
	/** @type {IDBDatabase} */
	static #db

	/** @type {Map<StoreName, IDBObjectStore>} */
	static #stores = new Map();

	/**
	 * @returns {Promise<void>}
	 */
	static open() {
		return new Promise((resolve, reject) => {
			const openRequest = indexedDB.open('boards-store', 1)

			openRequest.addEventListener('upgradeneeded', () => {
				this.#db = openRequest.result;
				this.#populate()
				console.debug('The database has been updated to a new version')
			}, { once: true })

			openRequest.addEventListener('error', () => {
				reject(new ConnectionError())
			})

			openRequest.addEventListener('blocked', () => {
				reject(new BlockedError())
			})

			openRequest.addEventListener('success', () => {
				if (!this.#db) {
					this.#db = openRequest.result;
				}
				console.log('Database device has been connected successfully. *cool music starts playing*')
				resolve()
			}, { once: true })
		})
	}

	/**
	 * @param {StoreName} storeName
	 * @returns {IDBObjectStore}
	 */
	static getStore(storeName) {
		return this.#stores.get(storeName);
	}

	static #populate() {
		const tasksStore = this.#db.createObjectStore('tasks', { keyPath: 'id' })
		tasksStore.createIndex("title", "title", { unique: false })
		tasksStore.createIndex("done", "isDone", { unique: false })
		this.#stores.set('tasks', tasksStore)
	}
}

export default Database
