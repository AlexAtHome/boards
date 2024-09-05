import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import { store } from './store.js'
import { fetchTasks } from './features/task-list'
import './index.css'

import { Database } from './features/database'
import { RootPage } from "./pages/root";
import { TaskPage } from "./pages/task.page";
import PrivacyPolicyPage from './pages/privacy-policy.page.jsx';

(async function() {
	await Database.open()

	store.dispatch(fetchTasks())
	const rootRouter = createBrowserRouter([
		{
			path: "/",
			element: <RootPage />,
			children: [
				{
					path: '/',
					element: <TaskPage />
				},
				{
					path: '/privacy-policy',
					element: <PrivacyPolicyPage />
				}
			]
		},
	]);

	createRoot(document.getElementById('root')).render(
		<StrictMode>
			<Provider store={store}>
				<RouterProvider router={rootRouter} />
			</Provider>
		</StrictMode>,
	)
})()

