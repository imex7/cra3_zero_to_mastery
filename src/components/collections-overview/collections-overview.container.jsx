import {connect} from 'react-redux'
import {createStructuredSelector} from 'reselect'
import {compose} from 'redux'
import {selectIsCollectionFetching} from '../../redux/shop/shop.selectors'
import WithSpinner from '../with-spinner/with-spinner.component'
import CollectionsOverview from './collections-overview.component'

const msp = createStructuredSelector({
	isLoading: selectIsCollectionFetching
})

const CollectionsOverviewContaner = compose(
	connect(msp),
	WithSpinner
)(CollectionsOverview)

export default CollectionsOverviewContaner