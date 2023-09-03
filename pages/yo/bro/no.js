
import { Layout } from 'components'
import { NoTabs } from 'data'
import { LCTabs } from 'grommet-ext'
import { NoPage } from 'utils/page'

function No() {
	return (
		<main>
			<h1>No page</h1>
		</main>
	)
}

export default No

No.getLayout = page => (
	<Layout page={NoPage} breads={[NoPage]}>
		<LCTabs tabs={NoTabs} />
		{page}
	</Layout>
)
