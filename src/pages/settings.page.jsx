import Button from '../components/ui/button'
import { Database } from '../features/database'

const SettingsPage = () => {
	const deleteAllData = async () => {
		if (confirm('Are you sure you want to delete all data?')) {
			await Database.purge()
			alert('All data has been removed.')
			location.href = '/'
		}
	}

	return <section>
		<h1>App settings</h1>

		<h2>Data deletion</h2>

		<p>You will not be able to recover your data after deletion. This will effectively reset the entire application.</p>

		<Button size="md" color="danger" theme="solid" onClick={() => deleteAllData()}>Delete all data</Button>
	</section>
}

export default SettingsPage
