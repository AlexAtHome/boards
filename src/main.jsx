import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { store } from './store.js'
import App from './App.jsx'
import './index.css'

import { Database } from './features/database'

(async function() {
	await Database.open()

	createRoot(document.getElementById('root')).render(
		<StrictMode>
			<Provider store={store}>
				<App />
			</Provider>
		</StrictMode>,
	)
})()

