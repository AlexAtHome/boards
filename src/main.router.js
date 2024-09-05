import { createBrowserRouter } from "react-router-dom";
import { RootPage } from "./pages/root";
import { TaskPage } from "./pages/task.page";

const rootRouter = createBrowserRouter([
	{
		path: "/",
		element: <RootPage />,
		children: [
			{
				path: '/',
				element: <TaskPage />
			}
		]
	},
]);

export default rootRouter
