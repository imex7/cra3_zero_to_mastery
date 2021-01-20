import React from 'react';
import { connect } from 'react-redux'
import {updateCollections} from '../../redux/shop/shop.actions'
import { Route } from 'react-router-dom';
import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
import CollectionPage from '../collection/collection.component';
import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils';
import WithSpinner from '../../components/with-spinner/with-spinner.component'

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview)
const CollectionPageWithSpinner = WithSpinner(CollectionPage)

class ShopPage extends React.Component {
	state = {
		loading: true
	}
	componentDidMount() {
		const {updateCollections} = this.props
		const collectionRef = firestore.collection('Collections')
		collectionRef.onSnapshot(async (snapshot) => {
			const collMap = convertCollectionsSnapshotToMap(snapshot)
			updateCollections(collMap)
			this.setState({loading: false})
		})
	}
	render() {
		const {match} = this.props
		const {loading} = this.state
		return <>
			<div className="shop-page">
				<h2>Shop page</h2>
					<Route exact path={`${match.path}`}
						render={(props) => <CollectionsOverviewWithSpinner isLoading={loading}
						{...props} />} />
					<Route path={`${match.path}/:collectionId`} 
						render={(props) => <CollectionPageWithSpinner isLoading={loading}
						{...props} />} />
			</div>
		</>
	}
}

const mdp = (dispatch) => {
	return {
		updateCollections: (collectionsMap) => {
			return dispatch(updateCollections(collectionsMap))
		}
	}
}

export default connect(null, mdp)(ShopPage);