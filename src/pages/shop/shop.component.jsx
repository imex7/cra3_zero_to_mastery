/*eslint-disable*/
import React from 'react';
import { Route } from 'react-router-dom';
import { createStructuredSelector } from 'reselect'
import { connect } from 'react-redux'
import { fetchCollectionsStartAsync } from '../../redux/shop/shop.actions'
import { selectIsCollectionFetching, selectIsCollectionsLoaded } from '../../redux/shop/shop.selectors'
import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
import CollectionPage from '../collection/collection.component';
import WithSpinner from '../../components/with-spinner/with-spinner.component'
const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview)
const CollectionPageWithSpinner = WithSpinner(CollectionPage)

class ShopPage extends React.Component {
	componentDidMount() {
		const {fetchCollectionsStartAsync} = this.props
		fetchCollectionsStartAsync()
	}
	render() {
		const {match, isCollectionFetching, isCollectionLoaded} = this.props
		return <>
			<div className="shop-page">
				<h2>Shop page</h2>
					<Route exact path={`${match.path}`}
						render={(props) => <CollectionsOverviewWithSpinner isLoading={isCollectionFetching}
						{...props} />} />
					<Route path={`${match.path}/:collectionId`} 
						render={(props) => <CollectionPageWithSpinner isLoading={!isCollectionLoaded}
						{...props} />} />
			</div>
		</>
	}
}

const msp = createStructuredSelector({
	isCollectionFetching: selectIsCollectionFetching,
	isCollectionLoaded: selectIsCollectionsLoaded
})

const mdp = (dispatch) => {
	return {
		fetchCollectionsStartAsync: () => {
			return dispatch(fetchCollectionsStartAsync())
		}
	}
}

export default connect(msp, mdp)(ShopPage);