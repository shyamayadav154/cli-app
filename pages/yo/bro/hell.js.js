
import { Layout } from 'components'
import { HellTabs } from 'data'
import { LCTabs } from 'grommet-ext'
import { HellPage } from 'utils/page'

function Hell() {
	return (
		<main>
			<h1>Hell page</h1>
		</main>
	)
}

export default Hell

Hell.getLayout = page => (
	<Layout page={HellPage} breads={[HellPage]}>
		<LCTabs tabs={HellTabs} />
		{page}
	</Layout>
)
