import { Link } from "react-router-dom"

const Footer = () => <footer className="h-12 mt-auto p-3 flex gap-2 items-center justify-between bg-slate-50 dark:bg-slate-800 sticky bottom-0">
	<span>{new Date().getFullYear()} &copy; <a href="https://alexalex.dev" target='_blank'>Alex Bolotskov</a></span>
	<span>
		<Link to="/privacy-policy" className="text-blue-400 underline underline-offset-1 hover:text-blue-300">Privacy Policy</Link>
	</span>
</footer>

export default Footer
