/*eslint-disable*/
import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux'
import { fetchCollectionsStart } from '../../redux/shop/shop.actions'
import CollectionsOverviewContaner from '../../components/collections-overview/collections-overview.container';
import CollectionsPageContainer from '../collection/collection.container';

class ShopPage extends React.Component {
	componentDidMount() {
		const {fetchCollectionsStart} = this.props
		fetchCollectionsStart()
	}
	render() {
		const {match} = this.props
		return <>
			<div className="shop-page">
				<h2>Shop page</h2>
					<Route
						exact
						path={`${match.path}`}
						component={CollectionsOverviewContaner}
					/>
					<Route
						path={`${match.path}/:collectionId`} 
						component={CollectionsPageContainer}
					/>
			</div>
		</>
	}
}

const mdp = (dispatch) => {
	return {
		fetchCollectionsStart: () => {
			return dispatch(fetchCollectionsStart())
		}
	}
}

export default connect(null, mdp)(ShopPage);