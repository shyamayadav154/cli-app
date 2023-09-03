
import { Layout } from 'components'
import { LogsTabs } from 'data'
import { LCTabs } from 'grommet-ext'
import { LogsPage } from 'utils/page'

function Logs() {
	return (
		<main>
			<h1>Logs page</h1>
		</main>
	)
}

export default Logs

Logs.getLayout = page => (
	<Layout page={LogsPage} breads={[LogsPage]}>
		<LCTabs tabs={LogsTabs} />
		{page}
	</Layout>
)
