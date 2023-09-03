
import { Layout } from 'components'
import { ATabs } from 'data'
import { LCTabs } from 'grommet-ext'
import { APage } from 'utils/page'

function A() {
	return (
		<main>
			<h1>A page</h1>
		</main>
	)
}

export default A

A.getLayout = page => (
	<Layout page={APage} breads={[APage]}>
		<LCTabs tabs={ATabs} />
		{page}
	</Layout>
)
