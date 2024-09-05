import { Outlet } from 'react-router-dom'
import Footer from '../components/footer'
import Header from '../components/header'

export const RootPage = () =>
	<div className="grid grid-flow-row min-h-screen" role="presentation">
		<Header />
		<main className="mb-auto p-3">
			<Outlet />
		</main>
		<Footer />
	</div>
