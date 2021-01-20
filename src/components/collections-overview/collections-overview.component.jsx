import React from 'react';
import './collections-overview.styles.scss'
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import CollectionPreview from '../collection-preview/collection-preview.component';
import { selectCollectionsForPreview } from '../../redux/shop/shop.selectors';

const CollectionsOverview = ({collections}) => {
	// console.log(collections);
	return <>
		<div className="collections-overview">
			{collections.map(({ id, ...other }) => {
				return <CollectionPreview key={id} {...other} />
			})}
		</div>
	</>
}

const msp = createStructuredSelector({
	collections: selectCollectionsForPreview
})
export default connect(msp)(CollectionsOverview);