import Footer from './components/footer'
import Header from './components/header'

function App() {
	return (
		<div className="grid grid-flow-row min-h-screen" role="presentation">
			<Header />

			<main className="mb-auto p-3">
				<h1 className="text-3xl">the main area is here</h1>
				<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, sequi est vero cum numquam dignissimos esse accusantium nesciunt amet cumque. Voluptates fuga voluptatum fugit ad laudantium quis omnis iusto natus.</p>
			</main>

			<Footer />
		</div>
	)
}

export default App
