import { Link } from 'react-router-dom'

const PrivacyPolicyPage = () => {
	return <article>
		<h1>How We Collect and Use Information</h1>

		<p>We DO NOT collect and utilize any information that you enter into the application.</p>
		<p>We DO NOT collect and utilize any information about you from third parties.</p>

		<p>All the data is stored in your browser&apos;s persistent storage that is only availble on the device yo&apos;sre using, and only to this application. No third-parties are able to access it.</p>

		<Link to="/" className="link">Got it</Link>
	</article>
}

export default PrivacyPolicyPage
