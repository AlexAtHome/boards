import { Link } from 'react-router-dom'

const PrivacyPolicyPage = () => {
	return <article className="flex flex-col gap-3 items-start w-full max-w-5xl mx-auto">
		<h1 className="text-3xl mb-6">How We Collect and Use Information</h1>

		<p>We DO NOT collect and utilize any information that you enter into the application.</p>
		<p>We DO NOT collect and utilize any information about you from third parties.</p>

		<p>All the data is stored in your browser&apos;s persistent storage that is only availble on the device yo&apos;sre using, and only to this application. No third-parties are able to access it.</p>

		<Link to="/" className="text-blue-400 underline underline-offset-1 hover:text-blue-300">Got it</Link>
	</article>
}

export default PrivacyPolicyPage
