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
 * @typedef {import('../task-list/task-list.js').Task} Task
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

	/**
	 * @param {StoreName | StoreName[]} name - Name of the store
	 * @param {IDBTransactionMode} mode
	 */
	static createTransaction(name, mode) {
		return this.#db.transaction(name, mode)
	}

	/**
	 * @param {StoreName} storeName
	 */
	static getAllFrom(storeName) {
		return new Promise((resolve, reject) => {
			const transaction = Database.createTransaction(storeName, 'readonly')
			const store = transaction.objectStore(storeName)
			const req = store.getAll()
			req.onsuccess = () => {
				resolve(req.result)
			}
			req.onerror = () => {
				reject(new Error('Unable to get the data'))
			}
		})
	}

	/**
	 * TODO: Figure out the dynamic typing for data
	 *
	 * @param {StoreName} storeName
	 * @param {Task} data
	 */
	static addTo(storeName, data) {
		return new Promise((resolve, reject) => {
			const transaction = Database.createTransaction(storeName, 'readwrite')
			const store = transaction.objectStore(storeName)
			const req = store.add(data)
			req.onsuccess = () => {
				resolve(req.result)
			}
			req.onerror = (err) => {
				console.error(err)
				reject(new Error('Unable to put the data'))
			}
		})
	}

	/**
	 * TODO: Figure out the dynamic typing for data
	 *
	 * @param {StoreName} storeName
	 * @param {Task['id']} id
	 * @param {Omit<Task, 'id'>} data
	 */
	static put(storeName, id, data) {
		return new Promise((resolve, reject) => {
			const transaction = Database.createTransaction(storeName, 'readwrite')
			const store = transaction.objectStore(storeName)
			const req = store.put({
				id,
				...data
			})
			req.onsuccess = () => {
				resolve(req.result)
			}
			req.onerror = () => {
				reject(new Error('Unable to get the data'))
			}
		})
	}

	static purge() {
		return new Promise((resolve, reject) => {
			this.#db.close()
			const req = indexedDB.deleteDatabase('boards-store')
			req.addEventListener('success', () => {
				resolve(true)
			}, { once: true })
			req.addEventListener('error', () => {
				reject(false)
			}, { once: true })
		})
	}

	static #populate() {
		const tasksStore = this.#db.createObjectStore('tasks', { keyPath: 'id' })
		tasksStore.createIndex("title", "title", { unique: false })
		tasksStore.createIndex("isDone", "isDone", { unique: false })
		this.#stores.set('tasks', tasksStore)
	}
}

export default Database
